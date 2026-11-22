// Opponent's-turn test: your recorded first turn is replayed, you end the turn, then a real opponent deck takes its turn
// (played by the same search the lab uses for your lines, trying to build the strongest board it can through yours),
// while your board and hand fire their interruptions. Result: what the opponent ends on vs what you still have.
// node oppturn.mjs '<json>'  json: { line: <rawOut file of your turn>, opp: 'decks/o_ss.ydk', seed, oppSeed, minutes, defense: 'any' }
import fs from 'fs'; import os from 'os'; import { spawn } from 'child_process';
import { parseYdk, name } from './src/cards.mjs'; import * as E from './src/engine.mjs'; import { autoAdvance } from './src/auto.mjs';
import { replay } from './src/replay.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(+(process.env.HTW ?? 1)); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]); const L = JSON.parse(fs.readFileSync(t.line, 'utf8'));
// several opponent hands: run each in its own process (in parallel) and report the average and the worst
if ((t.hands || 1) > 1) { const N = t.hands, NP = Math.max(1, Math.min(N, t.par || os.cpus().length - 1)); const res = []; const q = Array.from({ length: N }, (_, i) => (t.oppSeed ?? 1) + i);
  const one = (sd) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2000', 'oppturn.mjs', JSON.stringify({ ...t, hands: 1, oppSeed: sd })], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = ''; p.stdout.on('data', b => o += b); p.on('close', () => { const m = /OPPTURN (.*)/.exec(o); if (m) res.push({ seed: sd, ...JSON.parse(m[1]) }); ok(); }); });
  await Promise.all(Array.from({ length: NP }, async () => { while (q.length) await one(q.shift()); }));
  const avg = (k) => res.length ? +(res.reduce((a, x) => a + (x[k] || 0), 0) / res.length).toFixed(2) : null;
  console.log('OPPTURN ' + JSON.stringify({ hands: res.length, margin: avg('margin'), worst: res.length ? Math.min(...res.map(x => x.margin)) : null, otk: res.filter(x => x.otk).length, theirBoard: avg('theirBoard'), ourBoardLeft: avg('ourBoardLeft'), ourAfterT1: res[0] ? res[0].ourAfterT1 : null, each: res.map(x => ({ seed: x.seed, margin: x.margin, otk: x.otk, theirBoard: x.theirBoard, ourBoardLeft: x.ourBoardLeft, ourLP: x.ourLP })) }));
  process.exit(0); }
const OPP = parseYdk(fs.readFileSync(t.opp || 'decks/o_ss.ydk', 'utf8'));
let x = (t.oppSeed ?? 1) >>> 0 || 1; const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296;
const om = OPP.main.slice(); for (let k = om.length - 1; k > 0; k--) { const j = Math.floor(rnd() * (k + 1)); [om[k], om[j]] = [om[j], om[k]]; }
const game = { id: 'ot', seed: String(L.seed ?? 7), first: 0, lab: true,
  seats: { 0: { name: 'A', deck: { main: L.order.slice(), extra: L.extra.slice(), side: [] }, hand: L.order.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: om }, hand: om.slice(0, 5) } },
  responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, stopAfterTurn: null };
// 1) your turn, then end it
const r = await replay(game, L.raw, null); let S = r.S; autoAdvance(S);
const our1 = disruption(S, 0);
for (let i = 0; i < 50 && S.pending && !S.ended && S.turn === 1; i++) { const d = E.decision(S, 0); if (!d) { autoAdvance(S); continue; }
  const j = d.options.findIndex(o => /End Phase/.test(o.label)); E.push(S, { seat: 0, resp: d.options[j >= 0 ? j : d.options.length - 1].resp, label: d.options[j >= 0 ? j : d.options.length - 1].label }); autoAdvance(S); }
// 2) their turn: you defend with every interruption at the first legal chance; they search for their best result
const g2 = S.game; g2.goldfish = [0]; g2.script = { 0: [t.defense || 'any'] };
// bottleneck defense (choke: data/choke-<deck>.json, from choke.mjs): only hit their key cards; must = always stop these
const chokeFile = t.choke === false ? null : (t.choke || `data/choke-${(t.opp || 'decks/o_ss.ydk').replace(/^.*\//, '').replace(/\.ydk$/, '')}.json`);
if (chokeFile && fs.existsSync(chokeFile) && (t.defense || 'any') === 'any') { const values = JSON.parse(fs.readFileSync(chokeFile, 'utf8')); const sorted = Object.values(values).sort((a, b) => b - a);
  g2.choke = { 0: { values, must: t.must || ['Sky Striker Mobilize - Engage!', 'Sky Striker Ace - Kagari'], thr: Math.max(0.5, sorted[Math.min(3, sorted.length - 1)] ?? 0.5), top: Math.max(1, sorted[Math.min(1, sorted.length - 1)] ?? 1) } }; }
// walk to the opponent's first open game state (their Main Phase 1): you defend by policy, they decline optional chains on the way
for (let i = 0; i < 400 && S.pending && !S.ended; i++) { autoAdvance(S); if (!S.pending || S.ended) break; const sp = E.seatOf(g2, S.pending.player); if (sp !== 1) break;
  if (S.pending.type === E.M.SELECT_IDLECMD) break; const d = E.decision(S, 1); if (!d) break; const j = d.options.findIndex(o => /^Pass/.test(o.label)); const o = d.options[j >= 0 ? j : 0]; if (!E.push(S, { seat: 1, resp: o.resp, label: o.label })) break; }
const score = (S2) => disruption(S2, 1) - 0.5 * disruption(S2, 0) + (S2.lp && S2.lp[0] <= 0 ? 20 : 0);
const search = (gg, mins) => searchT1(JSON.parse(JSON.stringify(gg)), { seat: 1, turn: 2, ms: mins * 60000, nrpa: 3, seed: t.sseed || 1, evalFn: (S2) => score(S2) });
const readOut = async (gg, rr) => { const g3 = JSON.parse(JSON.stringify(gg)); if (rr.raw) g3.responses = rr.raw.map(e => ({ ...e })); E.resetLib(); const S3 = autoAdvance(await E.simulate(g3)); return { S3, their: disruption(S3, 1), ours: disruption(S3, 0) }; };
// smart defense: hold your interruptions until they have activated k effects; try k = 0..K with short searches, keep the k that leaves you best off
let defK = 0, tried = [];
if (t.smartDefense !== false && !g2.choke) { for (let k = 0; k <= (t.defK ?? 4); k++) { g2.after = { 0: k }; const rk = await search(g2, (t.minutes || 1) * 0.25); const o = await readOut(g2, rk); tried.push([k, +(o.ours - o.their).toFixed(2)]); }
  tried.sort((p, q) => q[1] - p[1] || p[0] - q[0]); defK = tried[0][0]; }
g2.after = { 0: defK };
const res = await search(g2, t.minutes || 1);
// 3) replay their best main phase, then their battle phase (every monster that can attack does; your interruptions still fire)
const { S3 } = await readOut(g2, res);
const theirMain = disruption(S3, 1), oursMain = disruption(S3, 0);
let attacks = 0;
for (let i = 0; i < 300 && S3.pending && !S3.ended && S3.turn === 2; i++) { autoAdvance(S3); if (!S3.pending || S3.ended || S3.turn !== 2) break; if (E.seatOf(S3.game, S3.pending.player) !== 1) break;
  const d = E.decision(S3, 1); if (!d || !d.options.length) break; let j = -1; const ty = S3.pending.type;
  if (ty === E.M.SELECT_IDLECMD) { j = d.options.findIndex(o => o.label === 'Go to Battle Phase'); if (j < 0) j = d.options.findIndex(o => /^Go to End Phase/.test(o.label)); }
  else if (ty === E.M.SELECT_BATTLECMD) { j = d.options.findIndex(o => /^Attack with/.test(o.label)); if (j < 0) j = d.options.findIndex(o => /End Phase/.test(o.label)); if (j < 0) j = d.options.findIndex(o => /Main Phase 2/.test(o.label)); }
  else { j = d.options.findIndex(o => /^(Pass|No|Cancel)\b/.test(o.label)); if (j < 0) j = 0;
    const txt = (d.kind === 'multi' || d.kind === 'sum') ? Array.from({ length: Math.max(1, d.min) }, (_, i) => i + 1).join(' ') : String(j + 1); const a = E.answer(S3, 1, txt);
    if (!a || !a.resps) break; let ok = true; for (const x of a.resps) if (!E.push(S3, { seat: 1, resp: x.resp, label: x.label })) { ok = false; break; } if (!ok) break; autoAdvance(S3); continue; }
  if (j < 0) break; const o = d.options[j]; if (!o.resp || !E.push(S3, { seat: 1, resp: o.resp, label: o.label })) break; autoAdvance(S3);
  if (/^Attack with/.test(o.label)) attacks++; if (/^Go to End Phase/.test(o.label)) break; }
const lpLeft = S3.lp ? S3.lp[0] : null; const otk = (lpLeft !== null && lpLeft <= 0) || S3.ended && S3.winner === 1;
const ourLeft = otk ? 0 : disruption(S3, 0), theirs = disruption(S3, 1);
console.log('OPPTURN ' + JSON.stringify({ ourAfterT1: +our1.toFixed(2), turnReached: S3.turn, theirBoard: +theirs.toFixed(2), ourBoardLeft: +ourLeft.toFixed(2), ourLP: lpLeft, attacks, otk, margin: +(ourLeft - theirs - (otk ? 10 : 0)).toFixed(2), afterMainPhase: { theirs: +theirMain.toFixed(2), ours: +oursMain.toFixed(2) },
  ourT2: (res.raw || []).slice(g2.responses.length).filter(e => e.seat === 0 && /^Activate /.test(e.label || '')).map(e => e.label), defenseHeldUntil: defK, defenseTried: tried, theirLine: (res.line || []).slice(0, 60), score: res.score, board: res.board }));
