// Game engine wrapper: replays a game record through the real EDOPro core,
// produces per-seat event logs (hidden info redacted) and the pending decision.
import createCore, { OcgCoreInternal, OcgDuelMode, OcgProcessResult, OcgLocation as L, OcgPosition as P, OcgMessageType as M,
  OcgResponseType as R, SelectIdleCMDAction as IA, SelectBattleCMDAction as BA, cardMatchesOpcode } from 'ocgcore-wasm';
import fs from 'fs';
import path from 'path';
import { coreCardData, VENDOR, name, desc, cardDB, findCard, raceStr, attrStr, parseYdk } from './cards.mjs';
export { parseYdk };

let LIB = null;
const scriptCache = new Map();
function readScript(n) {
  if (scriptCache.has(n)) return scriptCache.get(n);
  let s = null;
  for (const p of [n, 'official/' + n, 'pre-release/' + n]) { const f = path.join(VENDOR, 'scripts', p); if (fs.existsSync(f)) { s = fs.readFileSync(f, 'utf8'); break; } }
  scriptCache.set(n, s);
  return s;
}
export function resetLib() { LIB = null; }
export async function lib() { if (!LIB) LIB = await createCore({ sync: true }); return LIB; }
export { readScript };

function rng(seed) { // mulberry32
  let a = seed >>> 0;
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function shuffled(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
export const J = (o) => JSON.stringify(o, (k, v) => typeof v === 'bigint' ? 'n' + v.toString() : v);
export const UNJ = (s) => JSON.parse(s, (k, v) => typeof v === 'string' && /^n-?\d+$/.test(v) ? BigInt(v.slice(1)) : v);

const LOCN = { [L.DECK]: 'Deck', [L.HAND]: 'hand', [L.MZONE]: 'Monster Zone', [L.SZONE]: 'Spell/Trap Zone', [L.GRAVE]: 'GY', [L.REMOVED]: 'banishment', [L.EXTRA]: 'Extra Deck', [L.OVERLAY]: 'Xyz material' };
const PHASE = { 1: 'Draw Phase', 2: 'Standby Phase', 4: 'Main Phase 1', 8: 'Battle Phase', 0x10: 'Battle Step', 0x20: 'Damage Step', 0x40: 'Damage Calculation', 0x80: 'End of Battle Phase', 0x100: 'Main Phase 2', 0x200: 'End Phase' };
const isFaceup = (pos) => (pos & 0x5) !== 0;
export function zoneName(loc, seq) {
  if (loc === L.MZONE) return seq === 5 ? 'EMZ-L' : seq === 6 ? 'EMZ-R' : `M${seq + 1}`;
  if (loc === L.SZONE) return seq === 5 ? 'Field' : seq >= 6 ? `P${seq - 5}` : `S${seq + 1}`;
  return LOCN[loc] || `loc${loc}`;
}

// game = { id, seed, seats:{0:{name,deck,hand?},1:{...}}, first, responses:[{seat,resp,auto,label}], lab }
export function teamOf(game, seat) { return seat === game.first ? 0 : 1; }
export function seatOf(game, team) { return team === 0 ? game.first : 1 - game.first; }

function buildDeckOrder(deck, seed, forceHand) {
  const r = rng(seed);
  let main = shuffled(deck.main, r);
  if (forceHand && forceHand.length) {
    const top = [];
    for (const c of forceHand) { const i = main.indexOf(c); if (i < 0) throw new Error(`forced card ${name(c)} not in deck`); main.splice(i, 1); top.push(c); }
    main = main.concat(top.reverse());
  }
  return main;
}

// SORT_CARD: the wrapper prefixes a length byte the core doesn't expect, so send raw bytes
export function setResp(lb, h, resp) {
  if (resp.type === R.SORT_CARD && resp.order) {
    const mod = lb[OcgCoreInternal].module;
    const sym = Object.getOwnPropertySymbols(h)[0];
    const handle = h[sym].handle;
    const buf = Uint8Array.from(resp.order.map(x => x & 0xff));
    const sp = mod.stackSave(); const ptr = mod.stackAlloc(buf.length); mod.HEAPU8.set(buf, ptr);
    try { mod._ocgapiDuelSetResponse(handle, ptr, buf.length); } finally { mod.stackRestore(sp); }
    return;
  }
  lb.duelSetResponse(h, resp);
}
export async function simulate(game) {
  const lb = await lib();
  const seed = BigInt(game.seed);
  const S0 = { errors: [] };
  const h = lb.createDuel({
    flags: OcgDuelMode.MODE_MR5 | OcgDuelMode.TCG_SEGOC_NONPUBLIC | OcgDuelMode.TCG_SEGOC_FIRSTTRIGGER,
    seed: [seed, seed ^ 0x9e3779b97f4a7c15n, seed * 3n + 7n, seed ^ 0x1234567n],
    team1: { startingLP: 8000, startingDrawCount: 5, drawCountPerTurn: 1 },
    team2: { startingLP: 8000, startingDrawCount: 5, drawCountPerTurn: 1 },
    cardReader: (c) => coreCardData(c), scriptReader: (n) => readScript(n),
    errorHandler: (t, s) => { S0.errors.push(`${t}: ${s}`); },
  });
  const S = new State(game, lb, h);
  S.errors = S0.errors;
  lb.loadScript(h, 'constant.lua', readScript('constant.lua'));
  lb.loadScript(h, 'utility.lua', readScript('utility.lua'));
  for (const seat of [0, 1]) {
    const team = teamOf(game, seat);
    const sd = game.seats[seat];
    const main = buildDeckOrder(sd.deck, Number(seed % 1000000007n) + 17 * seat + 1, sd.hand);
    for (const c of main) lb.duelNewCard(h, { team, duelist: 0, code: c, controller: team, location: L.DECK, sequence: 0, position: P.FACEDOWN_DEFENSE });
    for (const c of sd.deck.extra) lb.duelNewCard(h, { team, duelist: 0, code: c, controller: team, location: L.EXTRA, sequence: 0, position: P.FACEDOWN_DEFENSE });
  }
  lb.startDuel(h);
  S.ri = 0;
  run(S);
  return S;
}
// Process until the next decision that has no recorded response, or the end.
export function run(S) {
  const { lb, h, game } = S;
  const responses = game.responses;
  S.retryFlag = false;
  for (let guard = 0; guard < 500000; guard++) {
    if (S.pending) {
      if (S.ri >= responses.length) return;
      const sel = S.pending, r = responses[S.ri];
      if (r.seat !== seatOf(game, sel.player)) throw new Error(`replay desync at ${S.ri}: response for seat ${r.seat}, decision for seat ${seatOf(game, sel.player)}`);
      let resp = r.resp;
      if (r.label && !r.auto && !S.noVerify) { // replay check: match recorded choice by its label
        const d = decision(S, r.seat);
        if (d && (d.kind === 'pick' || d.kind === 'unselect')) {
          const o = d.options.find(x => x.label === r.label || (x.pass && /^Pass/.test(r.label)));
          if (!o && !/opp /.test(r.label)) throw new Error(`Replay mismatch at decision ${S.ri}: recorded choice "${r.label}" is no longer offered. Start a new game.`);
          if (o && o.resp && J(o.resp) !== J(resp)) { resp = o.resp; r.resp = o.resp; S.repaired = (S.repaired || 0) + 1; }
        }
      }
      S.noteResponse(sel, r);
      setResp(lb, h, resp);
      S.ri++;
      S.pending = null;
    }
    const st = lb.duelProcess(h);
    const msgs = lb.duelGetMessage(h);
    let retry = false;
    for (const m of msgs) { if (m.type === M.RETRY) retry = true; else S.onMessage(m); }
    if (st === OcgProcessResult.END || S.winner !== null) { S.ended = true; S.pending = null; return; }
    if (st === OcgProcessResult.WAITING) {
      S.pending = S.lastSelect;
      if (retry) { S.retryFlag = true; S.ri--; return; }
    }
  }
  throw new Error('process guard exceeded');
}
// Apply a new response to a live state. Returns false if the core rejected it.
export function push(S, entry) {
  S.game.responses.push(entry);
  const nEv = S.events.length;
  run(S);
  if (S.retryFlag) { S.game.responses.pop(); S.events.length = nEv; return false; }
  return true;
}

class State {
  constructor(game, lb, h) {
    this.game = game; this.lb = lb; this.h = h;
    this.events = [];
    this.errors = [];
    this.lp = [8000, 8000];
    this.turn = 0; this.turnPlayer = 0; this.phase = 0;
    this.winner = null; this.winReason = null; this.ended = false;
    this.pending = null; this.lastSelect = null;
    this.hint = [null, null];
    this.chain = [];
    this.retry = false;
  }
  seatName(team) { return this.game.seats[seatOf(this.game, team)].name; }
  ev(kind, f, actor = null, x = null) {
    const s0team = teamOf(this.game, 0), s1team = teamOf(this.game, 1);
    this.events.push({ k: kind, s: [f(s0team), f(s1team)], turn: this.turn, a: actor, x });
  }
  who(team, viewer) { return team === viewer ? 'You' : 'Opp'; }
  whos(team, viewer) { return team === viewer ? 'your' : "opp's"; }
  cardVisible(loc, pos, ctrl, viewer) {
    if (loc & L.OVERLAY) return true;
    if (loc === L.GRAVE) return true;
    if (loc === L.MZONE || loc === L.SZONE) return isFaceup(pos) || ctrl === viewer;
    if (loc === L.REMOVED) return isFaceup(pos) || ctrl === viewer;
    if (loc === L.HAND) return ctrl === viewer;
    if (loc === L.EXTRA) return ctrl === viewer || isFaceup(pos);
    return false;
  }
  place(lp, viewer) {
    const z = (lp.location === L.MZONE || lp.location === L.SZONE) ? zoneName(lp.location, lp.sequence) : LOCN[lp.location] || `loc${lp.location}`;
    return `${this.whos(lp.controller, viewer)} ${z}`;
  }
  onMessage(m) {
    const T = M;
    switch (m.type) {
      case T.NEW_TURN: this.turn++; this.turnPlayer = m.player;
        this.ev('turn', v => `\n=== Turn ${this.turn}: ${m.player === v ? 'YOUR' : "OPPONENT'S"} turn (${this.seatName(m.player)}) ===`); break;
      case T.NEW_PHASE: this.phase = m.phase; this.ev('phase', v => `-- ${PHASE[m.phase] || 'phase ' + m.phase}`, -1); break;
      case T.DRAW: this.ev('draw', v => m.player === v ? `You drew: ${m.drawn.map(d => name(d.code)).join(', ')}`
        : `Opp drew ${m.drawn.length} card(s)` + (m.drawn.some(d => isFaceup(d.position)) ? `: ${m.drawn.filter(d => isFaceup(d.position)).map(d => name(d.code)).join(', ')}` : '')); break;
      case T.MOVE: {
        const { from, to } = m; const code = m.card;
        this.ev('move', v => {
          const vis = this.cardVisible(from.location, from.position, from.controller, v) || this.cardVisible(to.location, to.position, to.controller, v);
          const nm = vis && code ? name(code) : 'a card';
          if (!from.location && to.location) return `${nm} appears in ${this.place(to, v)}`;
          if (!to.location) return `${nm} leaves the field (${this.place(from, v)})`;
          if (from.location === L.DECK && to.location === L.HAND) return `${nm} added from ${this.place(from, v)} to ${this.whos(to.controller, v)} hand`;
          return `${nm}: ${this.place(from, v)} -> ${this.place(to, v)}${(to.location === L.MZONE || to.location === L.SZONE) && !isFaceup(to.position) ? ' (face-down)' : ''}`;
        }, from.controller, { code, fl: from.location, tl: to.location, fc: from.controller, tc: to.controller });
        break;
      }
      case T.SET: this.ev('set', v => `${this.who(m.controller, v)} Set ${m.controller === v ? name(m.code) : 'a card'} in ${zoneName(m.location, m.sequence)}`); break;
      case T.SUMMONING: this.ev('sum', v => `${this.who(m.controller, v)} Normal Summon ${name(m.code)} (${zoneName(m.location, m.sequence)}${isFaceup(m.position) ? '' : ', face-down'})`, m.controller); break;
      case T.SPSUMMONING: this.ev('sum', v => `${this.who(m.controller, v)} Special Summon ${isFaceup(m.position) || m.controller === v ? name(m.code) : 'a face-down monster'} (${zoneName(m.location, m.sequence)}${m.position & 0xc ? ', DEF' : ''})`, m.controller); break;
      case T.FLIPSUMMONING: this.ev('sum', v => `${this.who(m.controller, v)} Flip Summon ${name(m.code)}`); break;
      case T.POS_CHANGE: this.ev('pos', v => `${name(m.code)} changes to ${m.position & 0x5 ? 'face-up ' : 'face-down '}${m.position & 0x3 ? 'ATK' : 'DEF'}`); break;
      case T.CHAINING: {
        const d = desc(m.description);
        this.chain.push({ code: m.code, ctrl: m.controller, d });
        this.ev('chain', v => `>> Chain Link ${m.chain_size}: ${this.who(m.controller, v)} activate ${name(m.code)} (${this.place({ location: m.triggering_location, sequence: m.triggering_sequence, controller: m.triggering_controller }, v)}) — ${d}`, m.controller, { code: m.code, loc: m.triggering_location });
        break;
      }
      case T.CHAIN_SOLVING: this.ev('chain', v => `<< Resolving Chain Link ${m.chain_size}`); break;
      case T.CHAIN_NEGATED: this.ev('chain', v => `!! Chain Link ${m.chain_size} activation NEGATED`); break;
      case T.CHAIN_DISABLED: this.ev('chain', v => `!! Chain Link ${m.chain_size} effect NEGATED`); break;
      case T.CHAIN_END: this.chain = []; break;
      case T.CARD_TARGET: this.ev('target', v => `   (${this.place(m.card, v)} targets ${this.place(m.target, v)})`); break;
      case T.BECOME_TARGET: this.ev('target', v => `   targeted: ${m.cards.map(c => this.qname(c, v) + ' @ ' + this.place(c, v)).join(', ')}`); break;
      case T.CARD_SELECTED: this.ev('sel', v => `   selected: ${m.cards.map(c => this.qname(c, v) + ' @ ' + this.place(c, v)).join(', ')}`); break;
      case T.RANDOM_SELECTED: this.ev('sel', v => `   randomly selected: ${m.cards.map(c => this.qname(c, v) + ' @ ' + this.place(c, v)).join(', ')}`); break;
      case T.CONFIRM_CARDS: this.ev('reveal', v => {
        const seen = m.player === v || m.cards.every(c => c.controller === v && c.location !== L.DECK);
        if (!seen) return `${this.who(1 - v, v)} looked at ${m.cards.length} card(s)${m.cards.every(c => c.location === L.DECK) ? ' from the Deck' : ''}`;
        return `Revealed (${this.whos(m.cards[0]?.controller, v)} ${LOCN[m.cards[0]?.location] || ''}): ${m.cards.map(c => name(c.code)).join(', ')}`;
      }); break;
      case T.CONFIRM_DECKTOP: this.ev('reveal', v => `Top of ${this.whos(m.player, v)} Deck revealed: ${m.cards.map(c => name(c.code)).join(', ')}`); break;
      case T.CONFIRM_EXTRATOP: this.ev('reveal', v => `Extra Deck revealed: ${m.cards.map(c => name(c.code)).join(', ')}`); break;
      case T.DECK_TOP: this.ev('reveal', v => `Top card of ${this.whos(m.player, v)} Deck: ${name(m.code)}`); break;
      case T.SHUFFLE_DECK: break;
      case T.DAMAGE: this.lp[m.player] -= m.amount; this.ev('lp', v => `${this.who(m.player, v)} take ${m.amount} damage (LP ${this.lp[m.player]})`); break;
      case T.RECOVER: this.lp[m.player] += m.amount; this.ev('lp', v => `${this.who(m.player, v)} gain ${m.amount} LP (LP ${this.lp[m.player]})`); break;
      case T.PAY_LPCOST: this.lp[m.player] -= m.amount; this.ev('lp', v => `${this.who(m.player, v)} pay ${m.amount} LP (LP ${this.lp[m.player]})`); break;
      case T.LPUPDATE: this.lp[m.player] = m.lp; this.ev('lp', v => `${this.who(m.player, v)} LP now ${m.lp}`); break;
      case T.ATTACK: this.ev('battle', v => `${this.qname(m.card, v)} attacks ${m.target ? this.qname(m.target, v) + ' (' + this.place(m.target, v) + ')' : 'directly'}`); break;
      case T.BATTLE: this.ev('battle', v => `   battle: ${m.card.attack}/${m.card.defense} vs ${m.target ? m.target.attack + '/' + m.target.defense : '-'}`); break;
      case T.ATTACK_DISABLED: this.ev('battle', v => `   attack negated`); break;
      case T.MISSED_EFFECT: this.ev('misc', v => `${name(m.code)}'s effect missed timing`); break;
      case T.EQUIP: this.ev('misc', v => `${this.qname(m.card, v)} equipped to ${this.qname(m.target, v)}`); break;
      case T.ADD_COUNTER: this.ev('misc', v => `${m.count} counter(s) placed (${this.place(m, v)})`); break;
      case T.REMOVE_COUNTER: this.ev('misc', v => `${m.count} counter(s) removed (${this.place(m, v)})`); break;
      case T.TOSS_COIN: this.ev('misc', v => `Coin toss: ${m.results.map(x => x ? 'Heads' : 'Tails').join(', ')}`); break;
      case T.TOSS_DICE: this.ev('misc', v => `Dice roll: ${m.results.join(', ')}`); break;
      case T.WIN: this.winner = m.player; this.winReason = m.reason;
        this.ev('win', v => `##### ${m.player === v ? 'YOU WIN' : 'YOU LOSE'} (reason ${m.reason}) #####`); break;
      case T.HINT: {
        const ht = m.hint_type;
        if (ht === 3) this.hint[m.player] = desc(m.hint);
        else if (ht === 4) this.ev('hint', v => v === m.player ? `(option chosen: ${desc(m.hint)})` : null);
        else if (ht === 8) this.ev('hint', v => `(declared card: ${name(Number(m.hint))})`);
        else if (ht === 9) this.ev('hint', v => `(declared number: ${m.hint})`);
        else if (ht === 6) this.ev('hint', v => `(declared Type: ${raceStr(m.hint)})`);
        else if (ht === 7) this.ev('hint', v => `(declared Attribute: ${attrStr(Number(m.hint))})`);
        else if (ht === 1 || ht === 2) this.ev('hint', v => v === m.player ? `(${desc(m.hint)})` : null);
        break;
      }
      default:
        if (m.type >= 10 && m.type <= 26 || m.type >= 140 && m.type <= 143 || m.type === M.ROCK_PAPER_SCISSORS) this.lastSelect = m;
    }
  }
  qname(c, v) {
    try {
      const q = this.lb.duelQuery(this.h, { flags: 0x1 | 0x2, controller: c.controller, location: c.location, sequence: c.sequence, overlaySequence: c.overlay_sequence ?? 0 });
      if (q && q.code && this.cardVisible(c.location, q.position ?? c.position, c.controller, v)) return name(q.code);
    } catch (e) {}
    return 'a card';
  }
  noteResponse(sel, r) {
    if (r.label) this.ev('act', v => v === sel.player ? `* ${r.label}` : null);
    this.hint[sel.player] = null;
  }
}

// ---------- seat view ----------
const QFLAGS = 0x1 | 0x2 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x10000 | 0x20000 | 0x80000 | 0x100000 | 0x800000;
const ARROWS = [[0x40, '↖'], [0x80, '↑'], [0x100, '↗'], [0x8, '←'], [0x20, '→'], [0x1, '↙'], [0x2, '↓'], [0x4, '↘']];
function arrows(mk) { return ARROWS.filter(([b]) => mk & b).map(x => x[1]).join(''); }
export function boardView(S, seat) {
  const { lb, h, game } = S;
  const me = teamOf(game, seat), op = 1 - me;
  const out = [];
  const q = (team, loc) => lb.duelQueryLocation(h, { flags: QFLAGS, controller: team, location: loc });
  const fmtMon = (c, team, seq) => {
    if (!c || !c.code) return null;
    const vis = isFaceup(c.position) || team === me;
    const z = zoneName(L.MZONE, seq);
    if (!vis) return `${z}: face-down ${c.position & 0xc ? 'DEF' : 'ATK'} monster`;
    const ctype = cardDB().data.get(c.code)?.type ?? 0;
    const isLink = ctype & 0x4000000;
    const lv = isLink ? `L${c.link?.rating}${arrows(c.link?.marker)}` : ctype & 0x800000 ? `R${c.rank}` : `Lv${c.level}`;
    const st = [];
    if (!isFaceup(c.position)) st.push('SET');
    if (c.status & 0x1) st.push('NEGATED');
    if (c.overlayCards?.length) st.push(`${c.overlayCards.length} mat: ${c.overlayCards.map(name).join(', ')}`);
    if (c.counters && Object.keys(c.counters).length) st.push('counters ' + JSON.stringify(c.counters));
    return `${z}: ${name(c.code)} ${lv} ${c.attack}${isLink ? '' : '/' + c.defense} ${isLink ? '' : (c.position & 0xc ? 'DEF' : 'ATK')}${st.length ? ' [' + st.join('; ') + ']' : ''}`;
  };
  const fmtST = (c, team, seq) => {
    if (!c || !c.code) return null;
    const z = zoneName(L.SZONE, seq);
    const vis = isFaceup(c.position) || team === me;
    if (!vis) return `${z}: face-down card`;
    return `${z}: ${name(c.code)}${isFaceup(c.position) ? '' : ' (Set)'}${c.status & 0x1 ? ' [NEGATED]' : ''}`;
  };
  const side = (team) => {
    const tag = team === me ? 'YOU' : 'OPP';
    const hand = q(team, L.HAND), deck = lb.duelQueryCount(h, team, L.DECK), extra = q(team, L.EXTRA), gy = q(team, L.GRAVE), ban = q(team, L.REMOVED);
    const mz = q(team, L.MZONE), sz = q(team, L.SZONE);
    const lines = [];
    lines.push(`${tag}: LP ${S.lp[team]} | Hand ${hand.length} | Deck ${deck} | Extra ${extra.length} | GY ${gy.length} | Banished ${ban.length}`);
    const mons = mz.map((c, i) => fmtMon(c, team, i)).filter(Boolean);
    lines.push(`  Monsters: ${mons.length ? mons.join(' || ') : '(none)'}`);
    const sts = sz.map((c, i) => fmtST(c, team, i)).filter(Boolean);
    lines.push(`  Spell/Trap: ${sts.length ? sts.join(' || ') : '(none)'}`);
    if (gy.length) lines.push(`  GY: ${gy.map(c => name(c.code)).join(', ')}`);
    if (ban.length) lines.push(`  Banished: ${ban.map(c => (isFaceup(c.position) || team === me) ? name(c.code) + (isFaceup(c.position) ? '' : ' (face-down)') : 'face-down card').join(', ')}`);
    if (team === me) {
      lines.push(`  Hand: ${hand.map(c => name(c.code)).join(', ') || '(empty)'}`);
      const cnt = new Map(); for (const c of extra) { const k = name(c.code) + (isFaceup(c.position) ? ' (face-up)' : ''); cnt.set(k, (cnt.get(k) || 0) + 1); }
      if (process.env.YGO_ED) lines.push(`  Extra Deck: ${[...cnt].map(([k, n]) => n > 1 ? `${k} x${n}` : k).join(', ')}`);
      else lines.push(`  Extra Deck: ${extra.length} cards (view --ed to list)`);
    } else {
      const pub = hand.filter(c => c.isPublic);
      if (pub.length) lines.push(`  Opp hand, revealed: ${pub.map(c => name(c.code)).join(', ')}`);
      const fu = extra.filter(c => isFaceup(c.position));
      if (fu.length) lines.push(`  Opp Extra Deck face-up: ${fu.map(c => name(c.code)).join(', ')}`);
    }
    return lines;
  };
  out.push(`Turn ${S.turn} · ${PHASE[S.phase] || ''} · ${S.turnPlayer === me ? 'YOUR turn' : "OPPONENT'S turn"}`);
  out.push(...side(op));
  out.push(...side(me));
  const field = lb.duelQueryField(h);
  if (field.chain && field.chain.length) out.push('Current chain: ' + field.chain.map((c, i) => `CL${i + 1} ${name(c.code)} (${c.controller === me ? 'you' : 'opp'})`).join(' -> '));
  return out.join('\n');
}

// ---------- decisions ----------
export function decision(S, seat) {
  const m = S.pending; if (!m) return null;
  const me = teamOf(S.game, seat);
  if (m.player !== me) return null;
  const hint = S.hint[me];
  const v = me;
  const loc = (c) => (c.location === L.MZONE || c.location === L.SZONE) ? `${c.controller === v ? '' : 'opp '}${zoneName(c.location, c.sequence)}` : `${c.controller === v ? '' : 'opp '}${LOCN[c.location] || c.location}`;
  const hidden = (c) => {
    if (c.controller === v) return false;
    if (c.location === L.HAND || c.location === L.DECK) return true;
    if ((c.location === L.MZONE || c.location === L.SZONE || c.location === L.REMOVED || c.location === L.EXTRA) && c.position !== undefined && !isFaceup(c.position)) return true;
    if ((c.location === L.MZONE || c.location === L.SZONE) && c.position === undefined) {
      try { const q = S.lb.duelQuery(S.h, { flags: 0x2, controller: c.controller, location: c.location, sequence: c.sequence, overlaySequence: 0 }); return q && q.position !== undefined && !isFaceup(q.position); } catch (e) { return false; }
    }
    return false;
  };
  const cn = (c) => hidden(c) ? (c.location === L.HAND ? 'a card in hand' : 'a face-down card') : c.code ? name(c.code) : S.qname(c, v);
  const o = [];
  let kind = 'pick', min = 1, max = 1, prompt = hint || '';
  switch (m.type) {
    case M.SELECT_IDLECMD:
      prompt = 'Main Phase: choose an action';
      m.activates.forEach((c, i) => o.push({ label: `Activate ${cn(c)} (${loc(c)}): ${desc(c.description)}`, resp: { type: R.SELECT_IDLECMD, action: IA.SELECT_ACTIVATE, index: i } }));
      m.summons.forEach((c, i) => o.push({ label: `Normal Summon ${cn(c)} (${loc(c)})`, resp: { type: R.SELECT_IDLECMD, action: IA.SELECT_SUMMON, index: i } }));
      m.special_summons.forEach((c, i) => {
        const t = cardDB().data.get(c.code)?.type ?? 0;
        const how = c.location === L.EXTRA ? (t & 0x4000000 ? 'Link Summon' : t & 0x800000 ? 'Xyz Summon' : t & 0x2000 ? 'Synchro Summon' : 'Special Summon (procedure)') : 'Special Summon (procedure)';
        o.push({ label: `${how} ${cn(c)} (${loc(c)})`, resp: { type: R.SELECT_IDLECMD, action: IA.SELECT_SPECIAL_SUMMON, index: i } });
      });
      m.monster_sets.forEach((c, i) => o.push({ label: `Set monster ${cn(c)}`, resp: { type: R.SELECT_IDLECMD, action: IA.SELECT_MONSTER_SET, index: i } }));
      m.spell_sets.forEach((c, i) => o.push({ label: `Set Spell/Trap ${cn(c)}`, resp: { type: R.SELECT_IDLECMD, action: IA.SELECT_SPELL_SET, index: i } }));
      m.pos_changes.forEach((c, i) => o.push({ label: `Change battle position of ${cn(c)} (${loc(c)})`, resp: { type: R.SELECT_IDLECMD, action: IA.SELECT_POS_CHANGE, index: i } }));
      if (m.to_bp) o.push({ label: 'Go to Battle Phase', resp: { type: R.SELECT_IDLECMD, action: IA.TO_BP, index: 0 } });
      if (m.to_ep) o.push({ label: 'Go to End Phase (end turn)', resp: { type: R.SELECT_IDLECMD, action: IA.TO_EP, index: 0 } });
      break;
    case M.SELECT_BATTLECMD:
      prompt = 'Battle Phase: choose an action';
      m.chains.forEach((c, i) => o.push({ label: `Activate ${cn(c)} (${loc(c)}): ${desc(c.description)}`, resp: { type: R.SELECT_BATTLECMD, action: BA.SELECT_CHAIN, index: i } }));
      m.attacks.forEach((c, i) => o.push({ label: `Attack with ${cn(c)} (${loc(c)})${c.can_direct ? ' [can attack directly]' : ''}`, resp: { type: R.SELECT_BATTLECMD, action: BA.SELECT_BATTLE, index: i } }));
      if (m.to_m2) o.push({ label: 'Go to Main Phase 2', resp: { type: R.SELECT_BATTLECMD, action: BA.TO_M2, index: 0 } });
      if (m.to_ep) o.push({ label: 'Go to End Phase', resp: { type: R.SELECT_BATTLECMD, action: BA.TO_EP, index: 0 } });
      break;
    case M.SELECT_CHAIN:
      prompt = `Chain window${S.chain.length ? ` (chain so far: ${S.chain.map((c, i) => `CL${i + 1} ${name(c.code)}${c.ctrl === v ? ' (you)' : ' (opp)'}`).join(', ')})` : ''}: activate something?`;
      if (m.forced) prompt += ' [an activation is mandatory]';
      m.selects.forEach((c, i) => o.push({ label: `Activate ${cn(c)} (${loc(c)}): ${desc(c.description)}`, resp: { type: R.SELECT_CHAIN, index: i } }));
      if (!m.forced) o.push({ label: 'Pass (do not chain)', resp: { type: R.SELECT_CHAIN, index: null }, pass: true });
      break;
    case M.SELECT_EFFECTYN:
      { let dd = desc(m.description); if (dd.includes('%ls')) { const parts = [name(m.code), loc(m)]; dd = dd.replace(/%ls/g, () => parts.shift() ?? ''); }
        prompt = `Use the effect of ${name(m.code)} (${loc(m)})? — ${dd}`; }
      o.push({ label: 'Yes', resp: { type: R.SELECT_EFFECTYN, yes: true } }, { label: 'No', resp: { type: R.SELECT_EFFECTYN, yes: false } });
      break;
    case M.SELECT_YESNO:
      prompt = desc(m.description);
      o.push({ label: 'Yes', resp: { type: R.SELECT_YESNO, yes: true } }, { label: 'No', resp: { type: R.SELECT_YESNO, yes: false } });
      break;
    case M.SELECT_OPTION:
      prompt = prompt || 'Choose an option';
      m.options.forEach((d, i) => o.push({ label: desc(d), resp: { type: R.SELECT_OPTION, index: i } }));
      break;
    case M.SELECT_CARD: case M.SELECT_TRIBUTE:
      kind = 'multi'; min = m.min; max = m.max;
      prompt = `${prompt || 'Select card(s)'} — choose ${min === max ? min : min + ' to ' + max}`;
      m.selects.forEach((c, i) => o.push({ label: `${cn(c)} (${loc(c)})${m.type === M.SELECT_TRIBUTE && c.release_param > 1 ? ` counts as ${c.release_param}` : ''}`, idx: i }));
      if (m.can_cancel) o.push({ label: 'Cancel', cancel: true });
      break;
    case M.SELECT_UNSELECT_CARD:
      kind = 'unselect'; min = m.min; max = m.max;
      prompt = `${prompt || 'Select card(s)'} — select ${min === max ? min : min + ' to ' + max} (you may list several numbers at once)`;
      m.select_cards.forEach((c, i) => o.push({ label: `select ${cn(c)} (${loc(c)})`, resp: { type: R.SELECT_UNSELECT_CARD, index: i }, card: c }));
      m.unselect_cards.forEach((c, i) => o.push({ label: `UNselect ${cn(c)} (${loc(c)})`, resp: { type: R.SELECT_UNSELECT_CARD, index: m.select_cards.length + i }, card: c }));
      if (m.can_finish) o.push({ label: 'Finish selection', resp: { type: R.SELECT_UNSELECT_CARD, index: null }, finish: true });
      else if (m.can_cancel) o.push({ label: 'Cancel', resp: { type: R.SELECT_UNSELECT_CARD, index: null }, cancel: true });
      break;
    case M.SELECT_SUM:
      kind = 'sum';
      prompt = `${prompt || 'Select cards'} — their values must ${m.select_max ? 'sum exactly to' : 'reach at least'} ${m.amount}` + (m.selects_must.length ? `; already included: ${m.selects_must.map(c => `${cn(c)} (${c.amount & 0xffff})`).join(', ')}` : '');
      m.selects.forEach((c, i) => o.push({ label: `${cn(c)} (${loc(c)}) value ${c.amount & 0xffff}${c.amount >> 16 ? ' or ' + (c.amount >> 16) : ''}`, idx: i }));
      min = m.min; max = m.max || m.selects.length;
      break;
    case M.SELECT_PLACE: case M.SELECT_DISFIELD: {
      kind = 'place'; min = max = m.count;
      prompt = `${prompt ? prompt.replace(/^\(for (.*)\)$/, "Zone for $1") : "Select a zone"} — choose ${m.count}`;
      const mask = m.field_mask;
      for (const pl of [0, 1]) {
        const base = pl === 0 ? 0 : 16;
        for (let s = 0; s < 7; s++) if (!(mask & (1 << (base + s)))) o.push({ label: `${pl === 0 ? 'your' : "opp's"} ${zoneName(L.MZONE, s)}`, place: { player: pl === 0 ? m.player : 1 - m.player, location: L.MZONE, sequence: s } });
        for (let s = 0; s < 8; s++) if (!(mask & (1 << (base + 8 + s)))) o.push({ label: `${pl === 0 ? 'your' : "opp's"} ${zoneName(L.SZONE, s)}`, place: { player: pl === 0 ? m.player : 1 - m.player, location: L.SZONE, sequence: s } });
      }
      break;
    }
    case M.SELECT_POSITION: {
      prompt = `Choose battle position for ${name(m.code)}`;
      for (const [b, l] of [[0x1, 'face-up Attack'], [0x2, 'face-down Attack'], [0x4, 'face-up Defense'], [0x8, 'face-down Defense']])
        if (m.positions & b) o.push({ label: l, resp: { type: R.SELECT_POSITION, position: b } });
      break;
    }
    case M.SORT_CHAIN: case M.SORT_CARD:
      kind = 'sort';
      prompt = m.type === M.SORT_CHAIN ? 'Order these simultaneous effects on the chain (list the order, first = Chain Link 1), or "d" for default' : 'Order these cards (first listed = first/top), or "d" for default';
      m.cards.forEach((c, i) => o.push({ label: `${cn(c)} (${loc(c)})`, idx: i }));
      break;
    case M.SELECT_COUNTER:
      kind = 'counter';
      prompt = `Remove ${m.count} counter(s) (type ${m.counter_type}) — give a count for each card, in order`;
      m.cards.forEach((c, i) => o.push({ label: `${cn(c)} (${loc(c)}) has ${c.count}`, idx: i }));
      break;
    case M.ANNOUNCE_RACE: {
      kind = 'multi'; min = max = m.count; prompt = `Declare ${m.count} Monster Type(s)`;
      for (let i = 0; i < 32; i++) { const b = 1n << BigInt(i); if (BigInt(m.available) & b) o.push({ label: raceStr(b), val: b }); }
      break;
    }
    case M.ANNOUNCE_ATTRIB: {
      kind = 'multi'; min = max = m.count; prompt = `Declare ${m.count} Attribute(s)`;
      for (let i = 0; i < 7; i++) { const b = 1 << i; if (m.available & b) o.push({ label: attrStr(b), val: b }); }
      break;
    }
    case M.ANNOUNCE_NUMBER:
      prompt = prompt || 'Declare a number';
      m.options.forEach((n, i) => o.push({ label: String(n), resp: { type: R.ANNOUNCE_NUMBER, value: i } }));
      break;
    case M.ANNOUNCE_CARD:
      kind = 'announce'; prompt = 'Declare a card name: answer with the exact card name (it must fit the effect\'s requirements)';
      break;
    case M.ROCK_PAPER_SCISSORS:
      o.push({ label: 'Rock', resp: { type: R.ROCK_PAPER_SCISSORS, value: 2 } }, { label: 'Paper', resp: { type: R.ROCK_PAPER_SCISSORS, value: 3 } }, { label: 'Scissors', resp: { type: R.ROCK_PAPER_SCISSORS, value: 1 } });
      break;
    default:
      prompt = `Unhandled decision type ${m.type}`;
  }
  return { type: m.type, prompt, options: o, kind, min, max, msg: m };
}

// Convert an answer string into responses. Returns {resps:[{resp,label}], error} or {multiStep}
export function answer(S, seat, text) {
  const d = decision(S, seat);
  if (!d) return { error: 'It is not your decision.' };
  const toks = String(text).trim().split(/[\s,]+/).filter(Boolean);
  const num = (t) => { const n = parseInt(t, 10); return Number.isFinite(n) ? n : null; };
  const o = d.options;
  const pick1 = () => { const n = num(toks[0]); if (n === null || n < 1 || n > o.length) return null; return o[n - 1]; };
  switch (d.kind) {
    case 'pick': {
      const op = pick1(); if (!op) return { error: `Answer with a number 1-${o.length}.` };
      return { resps: [{ resp: op.resp, label: op.label }] };
    }
    case 'multi': {
      if (toks[0] && /^c/i.test(toks[0])) { const c = o.find(x => x.cancel); if (!c) return { error: 'Cannot cancel.' }; return { resps: [{ resp: d.type === M.SELECT_TRIBUTE ? { type: R.SELECT_TRIBUTE, indicies: null } : { type: R.SELECT_CARD, indicies: null }, label: 'Cancel' }] }; }
      const ns = toks.map(num);
      if (ns.some(n => n === null || n < 1 || n > o.length || o[n - 1].cancel)) return { error: 'Answer with option numbers separated by spaces.' };
      if (new Set(ns).size !== ns.length) return { error: 'Duplicate numbers.' };
      if (d.type === M.ANNOUNCE_RACE) { if (ns.length !== d.min) return { error: `Pick exactly ${d.min}.` }; return { resps: [{ resp: { type: R.ANNOUNCE_RACE, races: ns.map(n => o[n - 1].val) }, label: 'Declared ' + ns.map(n => o[n - 1].label).join(', ') }] }; }
      if (d.type === M.ANNOUNCE_ATTRIB) { if (ns.length !== d.min) return { error: `Pick exactly ${d.min}.` }; return { resps: [{ resp: { type: R.ANNOUNCE_ATTRIB, attributes: ns.map(n => o[n - 1].val) }, label: 'Declared ' + ns.map(n => o[n - 1].label).join(', ') }] }; }
      if (d.type !== M.SELECT_TRIBUTE && (ns.length < d.min || ns.length > d.max)) return { error: `Choose between ${d.min} and ${d.max}.` };
      const type = d.type === M.SELECT_TRIBUTE ? R.SELECT_TRIBUTE : R.SELECT_CARD;
      return { resps: [{ resp: { type, indicies: ns.map(n => o[n - 1].idx) }, label: 'Selected ' + ns.map(n => o[n - 1].label).join(', ') }] };
    }
    case 'sum': {
      const ns = toks.map(num);
      if (ns.some(n => n === null || n < 1 || n > o.length)) return { error: 'Answer with option numbers separated by spaces.' };
      return { resps: [{ resp: { type: R.SELECT_SUM, indicies: ns.map(n => o[n - 1].idx) }, label: 'Selected ' + ns.map(n => o[n - 1].label).join(', ') }] };
    }
    case 'place': {
      const ns = toks.map(num);
      if (ns.length !== d.min || ns.some(n => n === null || n < 1 || n > o.length)) return { error: `Choose ${d.min} zone number(s).` };
      return { resps: [{ resp: { type: d.type === M.SELECT_DISFIELD ? R.SELECT_DISFIELD : R.SELECT_PLACE, places: ns.map(n => o[n - 1].place) }, label: 'Zone ' + ns.map(n => o[n - 1].label).join(', ') }] };
    }
    case 'sort': {
      const type = R.SORT_CARD;
      if (!toks.length || /^d/i.test(toks[0])) return { resps: [{ resp: { type, order: null }, label: 'Default order' }] };
      const ns = toks.map(num);
      if (ns.length !== o.length || new Set(ns).size !== o.length || ns.some(n => n === null || n < 1 || n > o.length)) return { error: `Give all ${o.length} numbers in order.` };
      const order = new Array(o.length); ns.forEach((n, pos) => { order[n - 1] = pos; });
      return { resps: [{ resp: { type, order }, label: 'Order ' + ns.map(n => o[n - 1].label).join(' > ') }] };
    }
    case 'counter': {
      const ns = toks.map(num); if (ns.length !== o.length || ns.some(n => n === null)) return { error: `Give ${o.length} counts.` };
      return { resps: [{ resp: { type: R.SELECT_COUNTER, counters: ns }, label: 'Counters ' + ns.join(',') }] };
    }
    case 'announce': {
      const f = findCard(text);
      if (!f || Array.isArray(f)) return { error: Array.isArray(f) ? `Ambiguous: ${f.map(name).join('; ')}` : 'Unknown card name.' };
      const cd = coreCardData(f);
      if (!cardMatchesOpcode({ ...cd }, d.msg.opcodes)) return { error: `${name(f)} cannot be declared for this effect.` };
      return { resps: [{ resp: { type: R.ANNOUNCE_CARD, card: f }, label: 'Declared ' + name(f) }] };
    }
    case 'unselect': {
      const picks = [];
      for (const t of toks) {
        if (/^f/i.test(t)) { picks.push({ finish: true }); continue; }
        if (/^c/i.test(t)) { picks.push({ cancel: true }); continue; }
        const n = num(t); if (n === null || n < 1 || n > o.length) return { error: 'Answer with option numbers (and "f" to finish).' };
        const op = o[n - 1];
        if (op.finish) picks.push({ finish: true }); else if (op.cancel) picks.push({ cancel: true }); else picks.push({ card: op.card, unselect: op.label.startsWith('UN') });
      }
      return { multiStep: picks };
    }
  }
  return { error: 'Unsupported decision.' };
}

// automatic decisions that carry no real choice
export function autoResponse(S) {
  const m = S.pending; if (!m) return null;
  if (m.type === M.SELECT_CHAIN && m.selects.length === 0 && !m.forced) return { type: R.SELECT_CHAIN, index: null };
  if (m.type === M.SELECT_POSITION) { const bits = [1, 2, 4, 8].filter(b => m.positions & b); if (bits.length === 1) return { type: R.SELECT_POSITION, position: bits[0] }; }
  if (m.type === M.ROCK_PAPER_SCISSORS) return { type: R.ROCK_PAPER_SCISSORS, value: 1 };
  if (m.type === M.SELECT_PLACE && m.count === 1) {
    let n = 0; for (let b = 0; b < 32; b++) if (!(m.field_mask & (1 << b))) n++;
    if (n === 1) { const d = decision(S, seatOf(S.game, m.player)); return { type: R.SELECT_PLACE, places: [d.options[0].place] }; }
  }
  return null;
}
export { M, R, L };
