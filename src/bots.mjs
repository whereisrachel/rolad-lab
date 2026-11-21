// Scripted players. A policy picks an answer string for the pending decision (same answer format as `act`).
//   goldfish: never plays on its own turn (ends turns), optional hand-trap script at chain windows.
//   bot:      plays its own turns from a priority list of regexes matched against option labels.
import { decision, M, teamOf } from './engine.mjs';

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
  maxx: /Activate Maxx/i, veiler: /Activate Effect Veiler/i, bandit: /Activate The Great Gallant Bandit/i,
};
export function trapRegexes(list) { return (list || []).map(n => TRAPS[n.toLowerCase()] || new RegExp('Activate ' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')); }

function lastChainIsOwn(S, seat) { const c = S.chain[S.chain.length - 1]; return !!c && c.ctrl === teamOf(S.game, seat); }

// returns an answer string, or null if no decision / nothing sensible
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
    // pol.after = k: hold the hand traps until the other player has activated k effects (a stronger player waits for the key card)
    let scr = pol.script || []; if (pol.after > 0 && scr.length) { const acts = (G.responses || []).filter(r => r.seat !== seat && !r.auto && /^Activate /.test(r.label || '')).length; if (acts < pol.after) scr = []; }
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
  if (d.kind === 'multi' || d.kind === 'sum') return Array.from({ length: Math.max(1, d.min) }, (_, i) => i + 1).join(' ');
  if (d.kind === 'unselect') return find(/^Finish/) || '1';
  if (d.kind === 'place') return Array.from({ length: d.min }, (_, i) => i + 1).join(' ');
  if (d.kind === 'sort') return 'd';
  if (d.kind === 'counter') return opts.map((o, i) => i === 0 ? String(d.msg.count) : '0').join(' ');
  if (d.kind === 'announce') return 'Dark Magician';
  return '1';
}
