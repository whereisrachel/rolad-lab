// Going-second test (Belal, Nov 23): the opponent goes first with a real deck and builds the strongest board its search finds,
// while your opening hand fires its hand traps at them (same defense policy as the opponent's-turn test). Then you draw and
// take your turn into their board: the same line search plays your turn, scored on breaking their board, building yours and
// damage. After your Main Phase every monster that can attack does (their board still interrupts).
// node secondturn.mjs '<json>'  json: { deck, opp: 'decks/o_ss_panama.ydk', seed, oppSeed, hand?: [6 names], oppMinutes: 1, minutes: 1, out? }
// Result line: SECOND {theirBefore, theirAfter, ours, damage, lethal, score, ourLine, theirLine}
import fs from 'fs';
import { parseYdk, findCard, name } from './src/cards.mjs'; import * as E from './src/engine.mjs'; import { autoAdvance } from './src/auto.mjs';
import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(0); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]);
const ME = parseYdk(fs.readFileSync(t.deck || 'decks/L2-vand3.ydk', 'utf8')), OPP = parseYdk(fs.readFileSync(t.opp || 'decks/o_ss_panama.ydk', 'utf8'));
const rng = (s) => { let x = (s >>> 0) || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const shuf = (arr, r) => { const a = arr.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; };
// your deck: the 6 cards you hold on your turn are the top 6 (5 in the opening hand + the draw), forced when a hand is given
let mine = shuf(ME.main, rng(1000 + (t.seed ?? 7)));
if (t.hand) { const h = []; for (const n of t.hand) { const c = findCard(n); const code = Array.isArray(c) ? c[0] : c; const i = mine.findIndex(k => name(k) === name(code)); if (i >= 0) h.push(mine.splice(i, 1)[0]); else h.push(code); } mine = [...h, ...mine]; }
const theirs = shuf(OPP.main, rng(t.oppSeed ?? 1));
const game = { id: 'g2', seed: String(t.seed ?? 7), first: 1, lab: true,
  seats: { 0: { name: 'A', deck: { main: mine, extra: ME.extra.slice(), side: [] }, hand: mine.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: theirs }, hand: theirs.slice(0, 5) } },
  responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [0], bot: {}, script: { 0: [t.defense || 'any'] }, stopAfterTurn: null };
E.resetLib(); let S = autoAdvance(await E.simulate(JSON.parse(JSON.stringify(game))));
// 1) their turn 1: they search for their best board through your hand traps
const oppScore = (S2) => disruption(S2, 1) - 0.5 * disruption(S2, 0);
const r1 = await searchT1(JSON.parse(JSON.stringify(game)), { seat: 1, turn: 1, ms: (t.oppMinutes ?? 1) * 60000, nrpa: 3, seed: t.sseed || 1, evalFn: oppScore });
const g2 = JSON.parse(JSON.stringify(game)); if (r1.raw) g2.responses = r1.raw.map(e => ({ ...e }));
E.resetLib(); S = autoAdvance(await E.simulate(JSON.parse(JSON.stringify(g2))));
// end their turn: pass every prompt of theirs until it is your turn 2
for (let i = 0; i < 300 && S.pending && !S.ended && S.turn === 1; i++) { autoAdvance(S); if (!S.pending || S.ended || S.turn !== 1) break; const sp = E.seatOf(S.game, S.pending.player);
  const d = E.decision(S, sp); if (!d || !d.options.length) break; let j = d.options.findIndex(o => /End Phase/.test(o.label)); if (j < 0) j = d.options.findIndex(o => /^(Pass|No|Cancel)\b/.test(o.label)); if (j < 0) j = d.options.length - 1;
  const o = d.options[j]; if (!o.resp || !E.push(S, { seat: sp, resp: o.resp, label: o.label })) break; autoAdvance(S); }
const theirBefore = disruption(S, 1); const pre = S.game.responses.map(e => ({ ...e }));
// 2) your turn 2: their board defends with every interruption (their seat follows the same policy); you search
const g3 = JSON.parse(JSON.stringify(S.game)); g3.responses = pre; g3.goldfish = [1]; g3.script = { 1: [t.defense || 'any'] };
const atk = (S2) => { let s = 0; try { for (const c of (S2.field && S2.field[E.teamOf(S2.game, 0)] && S2.field[E.teamOf(S2.game, 0)].monsters) || []) if (c && c.faceup && c.attack) s += c.atk || 0; } catch {} return s; };
const myScore = (S2) => { const th = disruption(S2, 1), mine2 = disruption(S2, 0); return (theirBefore - th) * 1.5 + 0.5 * mine2 + (th < 1 ? Math.min(atk(S2), 8000) / 2000 : 0); };
const r2 = await searchT1(JSON.parse(JSON.stringify(g3)), { seat: 0, turn: 2, ms: (t.minutes ?? 1) * 60000, nrpa: 3, seed: t.sseed || 1, evalFn: myScore });
const g4 = JSON.parse(JSON.stringify(g3)); if (r2.raw) g4.responses = r2.raw.map(e => ({ ...e }));
E.resetLib(); const S4 = autoAdvance(await E.simulate(JSON.parse(JSON.stringify(g4))));
if (process.env.DBG2) { const d0 = S4.pending && E.decision(S4, E.seatOf(S4.game, S4.pending.player)); console.error("DBG turn", S4.turn, "phase", S4.phase, "ptype", S4.pending && S4.pending.type, "seat", S4.pending && E.seatOf(S4.game, S4.pending.player), "opts", d0 && d0.options.slice(0, 12).map(o =>o.label)); }
const theirMain = disruption(S4, 1), oursMain = disruption(S4, 0); const THEM = E.teamOf(S4.game, 1); const lp0 = S4.lp ? S4.lp[THEM] : 8000; /* LP and fields are indexed by player (who went first = 0), not by seat */
// 3) battle: every monster that can attack does
for (let i = 0; i < 300 && S4.pending && !S4.ended && S4.turn === 2; i++) { autoAdvance(S4); if (!S4.pending || S4.ended || S4.turn !== 2) break; const sp = E.seatOf(S4.game, S4.pending.player); if (sp !== 0) break;
  const d = E.decision(S4, 0); if (!d || !d.options.length) break; let j = -1; const ty = S4.pending.type;
  if (ty === E.M.SELECT_IDLECMD) { j = d.options.findIndex(o => o.label === 'Go to Battle Phase'); if (j < 0) j = d.options.findIndex(o => /^Go to End Phase/.test(o.label)); }
  else if (ty === E.M.SELECT_BATTLECMD) { if (process.env.DBG2) console.error("BATTLE", d.options.map(o => o.label)); j = d.options.findIndex(o => /^Attack with/.test(o.label)); if (j < 0) j = d.options.findIndex(o => /End Phase|Main Phase 2/.test(o.label)); }
  else { const txt = (d.kind === 'multi' || d.kind === 'sum') ? Array.from({ length: Math.max(1, d.min) }, (_, k) => k + 1).join(' ') : String(Math.max(0, d.options.findIndex(o => /^(Pass|No|Cancel)\b/.test(o.label))) + 1); const a = E.answer(S4, 0, txt); if (!a || !a.resps) break;
    let ok = true; for (const x of a.resps) if (!E.push(S4, { seat: 0, resp: x.resp, label: x.label })) { ok = false; break; } if (!ok) break; autoAdvance(S4); continue; }
  if (j < 0) break; const o = d.options[j]; if (!o.resp || !E.push(S4, { seat: 0, resp: o.resp, label: o.label })) break; autoAdvance(S4); if (/^Go to End Phase/.test(o.label)) break; }
const lp1 = S4.lp ? S4.lp[THEM] : lp0; const lethal = (lp1 !== null && lp1 <= 0) || (S4.ended && S4.winner === 0);
const damage = Math.max(0, (lp0 ?? 8000) - Math.max(0, lp1 ?? 0));
const theirAfter = lethal ? 0 : disruption(S4, 1), ours = disruption(S4, 0);
// one number: their board broken + yours built + damage; lethal = +10
const score = +((theirBefore - theirAfter) + 0.5 * ours + damage / 2000 + (lethal ? 10 : 0)).toFixed(2);
const out = { hand: mine.slice(0, 6).map(c => name(c)), theirBefore: +theirBefore.toFixed(2), theirAfterMain: +theirMain.toFixed(2), theirAfter: +theirAfter.toFixed(2), oursMain: +oursMain.toFixed(2), ours: +ours.toFixed(2), damage, lethal, score,
  ourLine: (r2.line || []).filter(l => /Summon|Activate|Selected|Set/.test(l)).slice(0, 60), theirLine: (r1.line || []).filter(l => /Summon|Activate|Set/.test(l)).slice(0, 40) };
if (t.out) fs.writeFileSync(t.out, JSON.stringify({ ...out, raw: r2.raw || [], pre }));
console.log('SECOND ' + JSON.stringify(out));
