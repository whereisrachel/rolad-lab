// Full game (Belal, Nov 24): play a whole game to the end — someone at 0 LP or decked out — instead of scoring one or two turns.
// Each turn the player whose turn it is plans its Main Phase with the line search, not seeing the other player's hand (their face-up
// board is public), follows that plan until a hand card of the other player goes off, then re-plans from there. Then every monster that
// can attack does, and the turn ends. The player who is not taking a turn defends with every interruption (same policy as the other tests).
// node fullgame.mjs '<json>'  json: { deck, opp: 'decks/o_ss_panama.ydk', seed, oppSeed, first: 'opp' | 'me', minutes: 1, oppMinutes: 1, maxTurns: 10 }
// Result line: GAME { winner: 'me' | 'opp' | null, turns, lp: [mine, theirs], how, hand, log }
import fs from 'fs';
import { parseYdk, findCard, name } from './src/cards.mjs'; import * as E from './src/engine.mjs'; import { autoAdvance } from './src/auto.mjs';
import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(0); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]);
const ME = parseYdk(fs.readFileSync(t.deck || 'decks/L2-vand3.ydk', 'utf8')), OPP = parseYdk(fs.readFileSync(t.opp || 'decks/o_ss_panama.ydk', 'utf8'));
const rng = (s) => { let x = (s >>> 0) || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const shuf = (arr, r) => { const a = arr.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; };
let mine = shuf(ME.main, rng(1000 + (t.seed ?? 7)));
if (t.hand) { const h = []; for (const n of t.hand) { const c = findCard(n); const code = Array.isArray(c) ? c[0] : c; const i = mine.findIndex(k => name(k) === name(code)); if (i >= 0) h.push(mine.splice(i, 1)[0]); else h.push(code); } mine = [...h, ...mine]; }
const theirs = shuf(OPP.main, rng(t.oppSeed ?? 1));
// stronger openings (Nov 27): each player's FIRST turn (the combo turn) can get more search time than later turns: t1Minutes {0: me, 1: opp}
const mins = (A, T) => (T <= 2 && t.t1Minutes && t.t1Minutes[A] != null) ? Math.max(t.t1Minutes[A], (A ? t.oppMinutes : t.minutes) ?? 1) : ((A ? t.oppMinutes : t.minutes) ?? 1);
const FIRST = t.first === 'me' ? 0 : 1, MAXT = t.maxTurns ?? 10, MIN = { 0: t.minutes ?? 1, 1: t.oppMinutes ?? 1 };
const game = { id: 'fg', seed: String(t.seed ?? 7), first: FIRST, lab: true,
  seats: { 0: { name: 'A', deck: { main: mine, extra: ME.extra.slice(), side: [] }, hand: mine.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: theirs }, hand: theirs.slice(0, 5) } },
  responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [], bot: {}, script: { 0: ['any'], 1: ['any'] }, stopAfterTurn: null };
// your hand traps hit their key cards when a bottleneck file exists for their deck (same as the going-second test)
const chokeFile = `data/choke-${(t.opp || 'decks/o_ss_panama.ydk').replace(/^.*\//, '').replace(/\.ydk$/, '')}.json`;
if (fs.existsSync(chokeFile)) { const values = JSON.parse(fs.readFileSync(chokeFile, 'utf8')); const sorted = Object.values(values).sort((p, q) => q - p);
  game.choke = { 0: { values, must: ['Sky Striker Mobilize - Engage!', 'Sky Striker Ace - Kagari', 'Branded Fusion', 'Aluber the Jester of Despia', 'Fallen of Albaz'], thr: Math.max(0.5, sorted[Math.min(3, sorted.length - 1)] ?? 0.5), top: Math.max(1, sorted[Math.min(1, sorted.length - 1)] ?? 1) } }; }
const clone = (x) => JSON.parse(JSON.stringify(x, (k, v) => typeof v === 'bigint' ? { $big: v.toString() } : v), (k, v) => (v && typeof v === 'object' && typeof v.$big === 'string') ? BigInt(v.$big) : v); // some answers (e.g. Elfnote's announces) are BigInt (fixed Nov 26)
const lpOf = (S2, seat) => S2.lp ? S2.lp[E.teamOf(S2.game, seat)] : 8000;
const atkOf = (S2, seat) => { let s = 0; try { for (const c of (S2.field && S2.field[E.teamOf(S2.game, seat)] && S2.field[E.teamOf(S2.game, seat)].monsters) || []) if (c && c.faceup && c.attack) s += c.atk || 0; } catch {} return s; };
const sim = async (g) => { E.resetLib(); return autoAdvance(await E.simulate(clone(g))); };
const over = (S2) => S2.ended || lpOf(S2, 0) <= 0 || lpOf(S2, 1) <= 0;
// whose decision is pending, and the turn player's seat
const pseat = (S2) => S2.pending ? E.seatOf(S2.game, S2.pending.player) : -1;
const turnSeat = (S2) => ((S2.turn - 1) % 2 === 0) ? FIRST : 1 - FIRST;
// answer a prompt of `seat` outside the search: pass / decline / first legal choice
function passOne(S2, seat, prefer) { const d = E.decision(S2, seat); if (!d || !d.options.length) return false; let j = prefer ? d.options.findIndex(o => prefer.test(o.label)) : -1;
  if (j < 0) j = d.options.findIndex(o => /^(Pass|No|Cancel)\b/.test(o.label)); if (j < 0) j = 0;
  if (d.kind === 'multi' || d.kind === 'sum' || d.kind === 'unselect') { const txt = Array.from({ length: Math.max(1, d.min || 1) }, (_, k) => k + 1).join(' '); const a = E.answer(S2, seat, txt); if (!a || !a.resps) return false; for (const x of a.resps) if (!E.push(S2, { seat, resp: x.resp, label: x.label })) return false; return true; }
  const o = d.options[j]; return !!(o.resp && E.push(S2, { seat, resp: o.resp, label: o.label })); }
const log = []; let S = await sim(game);
for (let guard = 0; guard < 60 && !over(S) && S.turn <= MAXT; guard++) {
  const A = turnSeat(S), B = 1 - A, T = S.turn; S.game.goldfish = [B]; S.game.script = { [B]: ['any'] }; S.game.gfTurn = T;
  // 1) walk to A's Main Phase (draw / standby prompts: A passes, B defends by policy)
  for (let i = 0; i < 300 && S.pending && !over(S); i++) { autoAdvance(S); if (!S.pending || over(S)) break; if (S.pending.type === E.M.SELECT_IDLECMD && pseat(S) === A) break; if (pseat(S) !== A) break; if (!passOne(S, A)) break; }
  if (over(S)) break;
  if (!(S.pending && S.pending.type === E.M.SELECT_IDLECMD && pseat(S) === A && S.turn === T)) { log.push(`T${T}: no main phase reached`); break; }
  const pre = S.game.responses.map(e => ({ ...e })); const g0 = clone(S.game); g0.responses = pre; g0.goldfish = [B]; g0.script = { [B]: ['any'] }; g0.gfTurn = T;
  const bBefore = disruption(S, B), lpB0 = lpOf(S, B);
  const evalFn = (S2) => { const th = disruption(S2, B), mi = disruption(S2, A); const lpB = lpOf(S2, B); return 0.8 * mi - 1.2 * th + (th < 1 ? Math.min(atkOf(S2, A), Math.max(0, lpB)) / 1500 : 0) + (lpB <= 0 ? 20 : 0); };
  const search = (gg, mins) => searchT1(clone(gg), { seat: A, turn: T, ms: mins * 60000, nrpa: 3, seed: (t.sseed || 1) + T, evalFn });
  // 2) plan without seeing B's hand, play the plan until one of B's hand cards goes off, then re-plan
  // Nov 25: going first with a guide line (t.t1steps): turn 1 plays the guide's steps as written (labels matched like play.mjs) until one no longer
  // fits (a hand trap hit it, or a face-down banish took a piece), then the search finishes the turn from there
  let gq = g0, scripted = false;
  if (T === 1 && A === 0 && Array.isArray(t.t1steps) && t.t1steps.length) { try { const S0 = await sim(g0); let k = 0;
    for (let gd = 0; gd < 900 && S0.pending && !over(S0) && S0.turn === T && k < t.t1steps.length; gd++) { autoAdvance(S0); if (!S0.pending || over(S0)) break; if (pseat(S0) !== A) break;
      const d = E.decision(S0, A); if (!d || !d.options.length) break; const st = String(t.t1steps[k]).trim().toLowerCase(); const j = d.options.findIndex(o => o.label.toLowerCase().includes(st));
      if (process.env.DBGT1 === '2') console.error('STEP', k, JSON.stringify(st).slice(0, 60), '| prompt', d.prompt, '|', d.options.slice(0, 4).map(o => o.label.slice(0, 50)).join(' || '));
      const take = (jj) => { const o = d.options[jj]; if (o.resp === undefined) { const a = E.answer(S0, A, String(jj + 1)); if (!a || !a.resps) return false; for (const r of a.resps) E.push(S0, { seat: A, resp: r.resp, label: r.label }); return true; } return !!E.push(S0, { seat: A, resp: o.resp, label: o.label }); };
      if (j >= 0) { if (!take(j)) break; k++; continue; }
      // a recorded window / yes-no / zone / position step that this game didn't ask for: skip it; also skip one step when the next one fits
      if (/^(pass\b|yes$|no$|your [ms]\d|face-(up|down)|default order|finish selection)/i.test(st)) { k++; continue; }
      if (k + 1 < t.t1steps.length) { const s2 = String(t.t1steps[k + 1]).trim().toLowerCase(); if (d.options.some(o => o.label.toLowerCase().includes(s2))) { k++; continue; } }
      if (/battle position|^Zone for/i.test(d.prompt || '') || d.options.every(o => /^your [MS]\d|^face-up|^face-down/i.test(o.label))) { if (!take(0)) break; continue; }
      const pz = d.options.findIndex(o => /^Pass\b/i.test(o.label)); if (pz >= 0) { if (!take(pz)) break; continue; }
      if (process.env.DBGT1) { const dd = E.decision(S0, A); console.error('T1 stop at', k, JSON.stringify(t.t1steps[k]), dd && dd.prompt, JSON.stringify((dd && dd.options || []).map(o => o.label)).slice(0, 800)); } break; }
    gq = clone(g0); gq.responses = S0.game.responses.map(e => ({ ...e })); scripted = true; log.push(`T1 guide line: ${k}/${t.t1steps.length} steps as written, then the search`); } catch (e) { log.push('T1 guide line failed: ' + String(e).slice(0, 100)); } }
  let plan = null; if (!scripted) try { const gp = clone(g0); gp.noHand = { [B]: true }; const rp = await search(gp, mins(A, T) * 0.4); plan = (rp.raw || []).slice(pre.length).filter(e => e.seat === A && !e.auto); } catch {}

  if (plan && plan.length) { const S0 = await sim(g0); let k = 0; const hit = () => S0.game.responses.slice(pre.length).some(e => e.seat === B && /^Activate .*\(hand\)/.test(e.label || ''));
    for (let i = 0; i < 5000 && S0.pending && !over(S0) && S0.turn === T && k < plan.length && !hit(); i++) { autoAdvance(S0); if (!S0.pending || over(S0) || hit()) break; if (pseat(S0) !== A) break; const e = plan[k]; let ok = false;
      try { if (e.label) { const d = E.decision(S0, A); const o = d && d.options.find(x => x.label === e.label); if (o && o.resp) ok = E.push(S0, { seat: A, resp: o.resp, label: o.label }); else ok = E.push(S0, { seat: A, resp: e.resp, label: e.label }); } else ok = E.push(S0, { seat: A, resp: e.resp }); } catch { ok = false; }
      if (!ok) break; k++; }
    gq = clone(g0); gq.responses = S0.game.responses.map(e => ({ ...e })); }
  let r; try { r = await search(gq, mins(A, T)); } catch { r = { raw: gq.responses }; }
  const g1 = clone(g0); g1.responses = (r.raw || gq.responses).map(e => ({ ...e })); S = await sim(g1); S.game.goldfish = [B]; S.game.script = { [B]: ['any'] }; S.game.gfTurn = T;
  const bMain = disruption(S, B), aMain = disruption(S, A);
  // 3) battle (not on the first turn of the game): every monster that can attack does; then end the turn
  let attacks = 0;
  for (let i = 0; i < 400 && S.pending && !over(S) && S.turn === T; i++) { autoAdvance(S); if (!S.pending || over(S) || S.turn !== T) break; if (pseat(S) !== A) break;
    const ty = S.pending.type; const d = E.decision(S, A); if (!d || !d.options.length) break; let j = -1;
    if (ty === E.M.SELECT_IDLECMD) { j = T > 1 && !attacks ? d.options.findIndex(o => o.label === 'Go to Battle Phase') : -1; if (j < 0) j = d.options.findIndex(o => /^Go to End Phase/.test(o.label)); }
    else if (ty === E.M.SELECT_BATTLECMD) { j = d.options.findIndex(o => /^Attack with/.test(o.label)); if (j >= 0) attacks++; if (j < 0) j = d.options.findIndex(o => /End Phase/.test(o.label)); if (j < 0) j = d.options.findIndex(o => /Main Phase 2/.test(o.label)); }
    else { if (!passOne(S, A)) break; continue; }
    if (j < 0) break; const o = d.options[j];
    if (!o.resp || !E.push(S, { seat: A, resp: o.resp, label: o.label })) break; }
  // finish the End Phase (discard to hand size, end-phase effects): A answers with the first legal choice
  for (let i = 0; i < 200 && S.pending && !over(S) && S.turn === T; i++) { autoAdvance(S); if (!S.pending || over(S) || S.turn !== T) break; const ps = pseat(S); if (!passOne(S, ps, ps === A ? /End Phase/ : null)) break; }
  const who = A === 0 ? 'you' : 'opp';
  log.push(`T${T} ${who}: board ${aMain.toFixed(1)} vs ${bMain.toFixed(1)} (theirs was ${bBefore.toFixed(1)}), attacks ${attacks}, LP you ${lpOf(S, 0)} / opp ${lpOf(S, 1)}`);
  if (S.turn === T && !over(S)) { log.push(`T${T}: turn did not end`); break; }
}
const lp = [lpOf(S, 0), lpOf(S, 1)]; let winner = null, how = 'turn limit';
if (lp[1] <= 0) { winner = 'me'; how = 'LP'; } else if (lp[0] <= 0) { winner = 'opp'; how = 'LP'; }
else if (S.ended) { winner = S.winner === E.teamOf(S.game, 0) ? 'me' : S.winner === E.teamOf(S.game, 1) ? 'opp' : null; how = 'game ended'; }
else { const d0 = disruption(S, 0), d1 = disruption(S, 1); const edge = (lp[0] - lp[1]) / 2000 + (d0 - d1); if (Math.abs(edge) >= 1.5) { winner = edge > 0 ? 'me' : 'opp'; how = `ahead at turn limit (${edge.toFixed(1)})`; } }
const out = { winner, turns: S.turn, lp, how, first: FIRST === 0 ? 'me' : 'opp', hand: mine.slice(0, FIRST === 0 ? 5 : 6).map(c => name(c)), log };
console.log('GAME ' + JSON.stringify(out));
