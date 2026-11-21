// Line choice that plays around hand traps (how a strong player sequences): for one opening hand,
// 1) find several strong candidate lines (no hand trap assumed, different search seeds),
// 2) play each candidate against Ash Blossom, Infinite Impermanence and Droll & Lock Bird, each held for the moment that hurts that line most
//    (after your 0th, 2nd or 4th effect); when the hand trap hits, your line adapts (short search from that point),
// 3) keep the line with the best overall result: 40% no hand trap, 60% spread over the three hand traps.
// node robust.mjs '<json>'  json: { deck, hand: [5 names], minutes (per candidate search), cands: 3, adapt: 0.25 (min), weights }
import fs from 'fs'; import path from 'path'; import os from 'os'; import { spawn } from 'child_process';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import * as E from './src/engine.mjs'; import { autoAdvance } from './src/auto.mjs';
import { replay } from './src/replay.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(+(process.env.HTW ?? 1)); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]); const NC = t.cands ?? 3, AD = t.adapt ?? 0.25, KS = t.ks ?? [0, 2, 4];
const THREATS = { ash: 'Ash Blossom & Joyous Spring', imperm: 'Infinite Impermanence', droll: 'Droll & Lock Bird' };
const W = t.weights || { none: 0.4, ash: 0.2, imperm: 0.2, droll: 0.2 };
const EV = t.evalOne; const tmp = EV ? null : fs.mkdtempSync(path.join(os.tmpdir(), 'rob-')); const NP = Math.max(1, os.cpus().length - 1);
// 1) candidates
const runDeep = (sseed, scn = 'none') => new Promise(ok => { const out = path.join(tmp, `c${scn}${sseed}.json`);
  const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify({ deck: t.deck, hand: t.hand, minutes: t.minutes ?? 1, seed: 7, sseed, scn, smart: scn !== 'none', learn: false, cardvFile: t.cardvFile, rawOut: out })], { stdio: ['ignore', 'pipe', 'ignore'] });
  let o = ''; p.stdout.on('data', b => o += b); p.on('close', () => { try { const x = JSON.parse(fs.readFileSync(out, 'utf8')); const m = /RESULT (.*)/.exec(o); x.line = m ? JSON.parse(m[1]).line : []; x.scnFrom = scn; ok(x); } catch { ok(null); } }); });
// candidates: the best no-hand-trap lines, plus the best line found while expecting each hand trap (these tend to bait first / hold the key card)
let C = []; if (!EV) { const jobs = [...Array.from({ length: NC }, (_, i) => [i + 1, 'none']), ...(t.threatCands === false ? [] : Object.keys(THREATS).map(th => [1, th]))];
const cands = []; for (let i = 0; i < jobs.length; i += NP) cands.push(...await Promise.all(jobs.slice(i, i + NP).map(([s2, sc]) => runDeep(s2, sc))));
for (const c of cands) if (c) c.v = c.v; const C0 = cands.filter(Boolean);
const seen = new Set(); C = C0.filter(c => { const k = JSON.stringify(c.raw.map(e => e.label)); if (seen.has(k)) return false; seen.add(k); return true; }); }
// game for a threat (opponent holds that hand trap and uses it after your k-th effect)
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const codeOf = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
const mk = (c, threat, k) => { const op = OPP.main.slice(), oh = []; if (threat) { const i = op.findIndex(x => name(x) === name(codeOf(THREATS[threat]))); if (i >= 0) oh.push(op.splice(i, 1)[0]); }
  while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  return { id: 'rb', seed: String(c.seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: c.order.slice(), extra: c.extra.slice(), side: [] }, hand: c.order.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } },
    responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: threat ? [threat] : [] }, after: { 1: k }, stopAfterTurn: null }; };
// play line c against the threat; when a recorded step stops being possible (the hand trap hit), adapt with a short search from there
async function vsThreat(c, threat, k) {
  const steps = c.raw.filter(e => e.seat === 0 && !e.auto && e.label); let mx = -1;
  const r = await replay(mk(c, threat, k), steps, (S) => { const v = disruption(S, 0); if (v > mx) mx = v; });
  if (!r || r.S.ended) return { v: mx, hit: false };
  const g = r.S.game; const hitAt = (g.responses || []).findIndex(e => e.seat === 1 && /^Activate /.test(e.label || ''));
  if (hitAt < 0) return { v: mx, hit: false }; // the hand trap never had a target in this line
  const at = (g.responses.slice(0, hitAt).reverse().find(e => e.seat === 0 && /^Activate /.test(e.label || '')) || {}).label || '';
  // re-plan from the moment the hand trap is activated: replay only your steps up to the hit, then search from there
  // (not from wherever the old line happened to stop, which can waste the cards you would re-route with)
  const nBefore = g.responses.slice(0, hitAt).filter(e => e.seat === 0 && !e.auto && e.label).length; let m2 = -1;
  const r2 = await replay(mk(c, threat, k), steps.slice(0, nBefore), (S) => { const v = disruption(S, 0); if (v > m2) m2 = v; });
  const S0 = r2 && r2.S; if (!S0 || S0.ended || S0.turn !== 1 || !S0.pending) return { v: mx, hit: true, at, why: 'no decision left after the hit' };
  if (process.env.RDBG) { const d = E.decision(S0, E.seatOf(S0.game, S0.pending.player)); console.error('DBG', threat, 'pending seat', E.seatOf(S0.game, S0.pending.player), 'type', S0.pending.type, 'opts', (d && d.options || []).slice(0, 8).map(o => o.label).join(' || '), '| responses', S0.game.responses.map(e => e.seat + ':' + (e.label || '').slice(0, 40)).join(' ; ')); }
  try { const a = await searchT1(JSON.parse(JSON.stringify(S0.game)), { ms: AD * 60000, nrpa: 3, seed: 5, evalFn: (S2) => disruption(S2, 0) }); if (process.env.RDBG) console.error('DBG line', threat, JSON.stringify(Object.fromEntries(Object.entries(a).map(([k2, v2]) => [k2, typeof v2 === 'object' ? JSON.stringify(v2).slice(0, 200) : v2]))));
    const v = Math.max(m2, a.score || 0); return { v, hit: true, at, why: 're-planned ' + (a.score || 0).toFixed(2) + ' (old line after the hit ' + mx.toFixed(2) + ')' }; }
  catch (e) { return { v: Math.max(m2, 0), hit: true, at, why: 'adapt error: ' + String(e && e.message).slice(0, 120) }; } }
// worker mode: evaluate one (candidate, hand trap, timing) and exit
if (EV) { const c = JSON.parse(fs.readFileSync(EV.file, 'utf8')); const z = await vsThreat(c, EV.threat, EV.k); console.log('EVAL ' + JSON.stringify(z)); process.exit(0); }
// all evaluations run in parallel worker processes
const tasks = []; C.forEach((c, i) => { const f = path.join(tmp, `cand${i}.json`); fs.writeFileSync(f, JSON.stringify(c)); tasks.push({ i, file: f, threat: null, k: 0 }); for (const th of Object.keys(THREATS)) for (const k of KS) tasks.push({ i, file: f, threat: th, k }); });
const evalOne = (x) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2000', 'robust.mjs', JSON.stringify({ ...t, evalOne: x })], { stdio: ['ignore', 'pipe', process.env.RDBG ? 'inherit' : 'ignore'] });
  let o = ''; p.stdout.on('data', b => o += b); p.on('close', () => { const m = /EVAL (.*)/.exec(o); x.z = m ? JSON.parse(m[1]) : { v: 0, hit: true, failed: true }; ok(); }); });
const q = tasks.slice(); await Promise.all(Array.from({ length: NP }, async () => { while (q.length) await evalOne(q.shift()); }));
const rows = C.map((c, i) => { const mine = tasks.filter(x => x.i === i); const nz = mine.find(x => !x.threat).z; const row = { none: +Math.max(nz.v, 0).toFixed(2), line: c.line, threats: {}, from: c.scnFrom, cand: { raw: c.raw, order: c.order, extra: c.extra, seed: c.seed, used: c.used, keys: c.keys, hand: c.hand } }; let tot = W.none * row.none;
  for (const th of Object.keys(THREATS)) { let worst = null; for (const x of mine.filter(x => x.threat === th)) if (!worst || x.z.v < worst.v) worst = { ...x.z, k: x.k }; row.threats[th] = worst; tot += (W[th] || 0) * worst.v; }
  row.robust = +tot.toFixed(2); return row; });
rows.sort((p, q) => q.robust - p.robust);
if (t.saveTo && rows[0]) fs.writeFileSync(t.saveTo, JSON.stringify({ ...rows[0].cand, v: rows[0].none, robust: rows[0].robust, threats: Object.fromEntries(Object.entries(rows[0].threats).map(([k, v]) => [k, { v: +v.v.toFixed(2), k: v.k, at: v.at || '' }])) }));
for (const r of rows) delete r.cand;
console.log('ROBUST ' + JSON.stringify({ hand: t.hand, chosen: rows[0], others: rows.slice(1).map(r => ({ robust: r.robust, none: r.none, from: r.from, threats: Object.fromEntries(Object.entries(r.threats).map(([k, v]) => [k, +v.v.toFixed(2)])) })) }));
fs.rmSync(tmp, { recursive: true, force: true });
