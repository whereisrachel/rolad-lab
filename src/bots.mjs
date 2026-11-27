// Scripted players. A policy picks an answer string for the pending decision (same answer format as `act`).
//   goldfish: never plays on its own turn (ends turns), optional hand-trap script at chain windows.
//   bot:      plays its own turns from a priority list of regexes matched against option labels.
import { decision, M, teamOf, L } from './engine.mjs';

// regex lists are matched case-insensitively against option labels, e.g. "Activate Branded Opening (hand): ..."
export const BOTS = {
  despia: {
    idle: [/Activate Branded Opening/, /Activate Branded Fusion/, /Activate Branded Retribution/, /Activate Branded in High Spirits/, /Activate The Fallen & The Virtuous/,
      /Activate Fallen of the White Dragon/, /Activate Aluber/, /Activate Fallen of Albaz/, /Activate Guiding Quem/, /Activate Dogmatika Ecclesia/, /Special Summon \(procedure\)/],
    chain: [/Activate .*Mirrorjade/, /Activate .*Saronir/, /Activate .*Albaz/],
    noidle: [],
  },
  ss: {
    idle: [/Activate Upstart Goblin/, /Activate Sky Striker Mobilize - Engage/, /Activate Sky Striker Ace - Raye/, /Activate Sky Striker Mecha - Widow Anchor/],
    chain: [],
    noidle: [/Widow Anchor/],
  },
  // generic: plays anything it can, spells and summons first
  any: { idle: [], chain: [], noidle: [] },
};
// hand-trap scripts for goldfish seats: name -> regex on "Activate <card>"
export const TRAPS = {
  ash: /Activate Ash Blossom/i, droll: /Activate Droll & Lock Bird/i, imperm: /Activate Infinite Impermanence/i, nibiru: /Activate Nibiru/i,
  fuwalos: /Activate Mulcharmy Fuwalos/i, purulia: /Activate Mulcharmy Purulia/i, belle: /Activate Ghost Belle/i, ogre: /Activate Ghost Ogre/i,
  any: /^Activate /i, // defend with everything on board / in hand at the first legal chance (opponent's-turn test)
  maxx: /Activate Maxx/i, veiler: /Activate Effect Veiler/i, bandit: /Activate The Great Gallant Bandit/i,
};
export function trapRegexes(list) { return (list || []).map(n => TRAPS[n.toLowerCase()] || new RegExp('Activate ' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')); }

function lastChainIsOwn(S, seat) { const c = S.chain[S.chain.length - 1]; return !!c && c.ctrl === teamOf(S.game, seat); }

// returns an answer string, or null if no decision / nothing sensible
// pol.noHand (Nov 24): your hand is hidden from the opponent's planning search: plan as if your hand cards do nothing (board cards are public)
export function policyAnswer(S, seat, pol) {
  const d = decision(S, seat); if (!d) return null;
  const T = d.type; const opts = d.options;
  const find = (re) => { const i = opts.findIndex(o => re.test(o.label)); return i >= 0 ? String(i + 1) : null; };
  const findAny = (res) => { for (const re of res) { const x = find(re); if (x) return x; } return null; };
  const bot = pol.bot ? BOTS[pol.bot] || BOTS.any : null;
  const G = S.game; G.botCount = G.botCount || {}; const key = seat + ':' + S.turn; G.botCount[key] = (G.botCount[key] || 0);
  if (T === M.SELECT_CHAIN) {
    if (d.msg.forced) return '1';
    if (lastChainIsOwn(S, seat)) return find(/^Pass/);
    // timing hand traps (fix Nov 24): Nibiru, the Mulcharmys and Droll go off at an open game state, not in response to a chain link, so the
    // 'chain links only' rule below never used them (second 1115: Nibiru 0/51, Fuwalos 0/59 drawn hands). The engine only offers them when
    // their condition is met (5th summon, a search, you control no cards), so use them as soon as they are offered.
    if (pol.defense && !pol.noHand) { const ti = opts.findIndex(o => /^Activate (Nibiru, the Primal Being|Mulcharmy Fuwalos|Mulcharmy Purulia|Mulcharmy Meowls|Droll & Lock Bird) \(/.test(o.label)); if (ti >= 0) return String(ti + 1); }
    // pol.after = k: hold the hand traps until the other player has activated k effects (a stronger player waits for the key card)
    let scr = pol.script || []; if (pol.after > 0 && scr.length) { const acts = (G.responses || []).filter(r => r.seat !== seat && !r.auto && /^Activate /.test(r.label || '')).length; if (acts < pol.after) scr = []; }
    if (process.env.DEFLOG && seat === 0) console.error('DEF ' + S.turn + ' ' + opts.map(o => o.label).join(' | '));
    // defending on the opponent's turn: only real interruptions, best kind first; a full-board wipe waits until they have committed 3+ cards
    // bottleneck defense: hold everything until they activate one of their key cards (from the bottleneck test, or the must-stop list), then hit it;
    // a board wipe also goes off once they have committed 4+ cards (before they reach cards that can stop it)
    if (pol.defense && pol.choke) { const ck = pol.choke; const oppIdx = (G.responses || []).map((r, i) => [r, i]).filter(([r]) => r.seat !== seat && !r.auto && /^Activate /.test(r.label || '')); const last = oppIdx.length ? oppIdx[oppIdx.length - 1][0].label : '';
      const onChain = S.chain && S.chain.length && !lastChainIsOwn(S, seat); const X = onChain ? ((/^Activate (.+?) \(/.exec(last) || [])[1] || '') : ''; const must = (ck.must || []).some(m => X.includes(m)); const val = must ? 99 : ((ck.values || {})[X] ?? 0);
      const oppN = (() => { try { const ot = 1 - teamOf(G, seat); return [L.MZONE, L.SZONE].reduce((n, loc) => n + S.lb.duelQueryLocation(S.h, { flags: 0x1, controller: ot, location: loc }).filter(c => c && c.code).length, 0); } catch { return 9; } })();
      const isWipe = (l) => /all cards the opponent controls/i.test(l); const kind = (l) => /negate the activation/i.test(l) ? 5 : /negate/i.test(l) ? 4 : isWipe(l) ? (oppN >= 2 ? 3.5 : -1) : /destroy|banish|send 1 card on the field|return .* hand|take control|change .* position/i.test(l) ? 3 : -1;
      const pick = (ok) => { let bi = -1, br = 0; opts.forEach((o, i) => { if (!/^Activate /.test(o.label) || !ok(o.label) || (pol.noHand && /\(hand\)/.test(o.label))) return; const r = kind(o.label); if (r > br) { br = r; bi = i; } }); return bi; };
      // top targets get your strongest answer; lesser targets get the cheapest answer that still stops them (a hand trap before a board negate)
      const cheapest = () => { let bi = -1, bc = 1e9; opts.forEach((o, i) => { if (!/^Activate /.test(o.label) || (pol.noHand && /\(hand\)/.test(o.label))) return; const r = kind(o.label); if (r < 4) return; const c = r + (/\(hand\)/.test(o.label) ? 0 : 2) + (isWipe(o.label) ? 5 : 0); if (c < bc) { bc = c; bi = i; } }); return bi; };
      let bi = -1; if (X && val >= (ck.top ?? 1e9)) bi = pick(() => true); else if (X && val >= (ck.thr ?? 0.5)) { bi = cheapest(); if (bi < 0) bi = pick(l => !isWipe(l)); } else if (oppN >= 4) bi = pick(isWipe);
      if (process.env.DEFLOG) console.error(`CHOKE vs ${X || '-'} (value ${val}) -> ${bi >= 0 ? opts[bi].label.slice(0, 60) : 'hold'}`);
      return bi >= 0 ? String(bi + 1) : (find(/^Pass/) || '1'); }
    if (pol.defense) { if (pol.after > 0) { const acts = (G.responses || []).filter(r => r.seat !== seat && !r.auto && /^Activate /.test(r.label || '')).length; if (acts < pol.after) return find(/^Pass/) || '1'; }
      const oppN = (() => { try { const ot = 1 - teamOf(G, seat); return [L.MZONE, L.SZONE].reduce((n, loc) => n + S.lb.duelQueryLocation(S.h, { flags: 0x1, controller: ot, location: loc }).filter(c => c && c.code).length, 0); } catch { return 9; } })();
      const rank = (l) => /negate the activation/i.test(l) ? 5 : /negate/i.test(l) ? 4 : /all cards the opponent controls/i.test(l) ? (oppN >= 3 ? 6 : -1) : /destroy|banish|send 1 card on the field|return .* hand|take control|change .* position/i.test(l) ? 3 : -1;
      // known interruptions by card name (many labels say only "activate this card"); a wipe waits for 3+ of their cards
      const NR = [[/Infinite Impermanence|Ash Blossom|Artmage Finmel/, 4], [/Artmage Impasto|Artmage Diactorus/, 5], [/Ghost Ogre|Mind Shuffle|S:P Little Knight|Ars Magna of Infinity/, 3.5],
        [/Droll & Lock Bird|Purification Power Patron|Theorealize Medius|Ars Magna of Purification|Chaos Angel/, 3], [/Lacrima|Junora/, 1.5], [/Nerva the Power Patron|Medicurius/, oppN >= 3 ? 6 : -1],
        [/Artmage Non-Finito/, oppN >= 3 ? 5.5 : 2.5]];
      const nrank = (l) => { const nm = (/^Activate (.+?) \(/.exec(l) || [])[1] || ''; for (const [re, v] of NR) if (re.test(nm)) return v; return -1; };
      const onCh = !!(S.chain && S.chain.length && !lastChainIsOwn(S, seat));
      let bi = -1, br = 0; opts.forEach((o, i) => { if (!/^Activate /.test(o.label) || (pol.noHand && /\(hand\)/.test(o.label))) return; let r = Math.max(rank(o.label), nrank(o.label)); if (!onCh && r < 5.5) r = -1; if (r > br) { br = r; bi = i; } });
      return bi >= 0 ? String(bi + 1) : (find(/^Pass/) || '1'); }
    const res = [...scr, ...(bot ? bot.chain : [])];
    return findAny(res) || find(/^Pass/) || '1';
  }
  if (T === M.SELECT_EFFECTYN || T === M.SELECT_YESNO) return bot ? '1' : '2';
  if (T === M.SELECT_IDLECMD) {
    if (bot) {
      G.botCount[key]++;
      if (G.botCount[key] <= 120) {
        const a = findAny(bot.idle); if (a) return a;
        const j = opts.findIndex(o => /^(Activate|Normal Summon|Special Summon|Link Summon|Synchro Summon|Xyz Summon|Set Spell)/.test(o.label) && !bot.noidle.some(r => r.test(o.label)));
        if (j >= 0) return String(j + 1);
      }
      return find(/Battle Phase/) || find(/End Phase/) || String(opts.length);
    }
    return find(/End Phase/) || find(/Battle Phase/) || String(opts.length);
  }
  if (T === M.SELECT_BATTLECMD) {
    if (bot) { const a = find(/^Attack with/); if (a && !(G.botCount['b' + key] > 40)) { G.botCount['b' + key] = (G.botCount['b' + key] || 0) + 1; return a; } }
    return find(/End Phase/) || find(/Main Phase 2/) || String(opts.length);
  }
  // scripted hand traps (fix Nov 27): Imperm and other targeted traps hit the card whose effect is on the chain, not the first option.
  // Before this, Imperm on the opponent's turn-1 line often hit an idle monster, so a hit looked like it cost nothing.
  if ((pol.script || []).length && !pol.defense && (d.kind === 'single' || T === M.SELECT_CARD) && S.chain && S.chain.length) {
    const opp = (G.responses || []).filter(r => r.seat !== seat && !r.auto && /^Activate /.test(r.label || '')); const last = opp.length ? opp[opp.length - 1].label : '';
    const X = (/^Activate (.+?) \(/.exec(last) || [])[1]; if (X) { const i = opts.findIndex(o => o.label.includes(X)); if (i >= 0) return String(i + 1); } }
  if (pol.defense && (d.kind === 'multi' || d.kind === 'single' || T === M.SELECT_CARD)) { const idx = opts.map((o, i) => [/\(opp /.test(o.label) ? 0 : 1, i]).sort((p, q) => p[0] - q[0] || p[1] - q[1]).map(x => x[1] + 1); const n = Math.max(1, d.min || 1); if (idx.length >= n) return idx.slice(0, n).join(' '); }
  if (d.kind === 'multi' || d.kind === 'sum') return Array.from({ length: Math.max(1, d.min) }, (_, i) => i + 1).join(' ');
  if (d.kind === 'unselect') return find(/^Finish/) || '1';
  if (d.kind === 'place') return Array.from({ length: d.min }, (_, i) => i + 1).join(' ');
  if (d.kind === 'sort') return 'd';
  if (d.kind === 'counter') return opts.map((o, i) => i === 0 ? String(d.msg.count) : '0').join(' ');
  if (d.kind === 'announce') return 'Dark Magician';
  return '1';
}
