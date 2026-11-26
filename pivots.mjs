// Pivots (Belal, Nov 25): for each guide line, every point where a hand trap can stop it, and the best line from that point on (engine-verified).
// The opponent holds one hand trap and uses it at its first chance after your k-th effect (k = 0, 1, 2, ... so every stop point is tried);
// your line is played as written up to the hit, then a search finds the best way to finish from there.
// node pivots.mjs '<json>'  json: { id, lines: [{ name, file }], threats: ['ash', ...], minutes: 3, maxK: 24 }
// line file: an evolved/library line ({ raw, order, extra, seed, hand }). Report: reports/<id>.json (+ .md summary)
import fs from 'fs'; import path from 'path'; import os from 'os'; import { runNode, poolDyn } from './src/remote.mjs';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import * as E from './src/engine.mjs'; import { autoAdvance } from './src/auto.mjs';
import { replay } from './src/replay.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(1); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]);
const THREATS = { ash: 'Ash Blossom & Joyous Spring', imperm: 'Infinite Impermanence', droll: 'Droll & Lock Bird', nibiru: 'Nibiru, the Primal Being', ogre: 'Ghost Ogre & Snow Rabbit', belle: 'Ghost Belle & Haunted Mansion' };
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const codeOf = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
const mk = (c, threat, k) => { const op = OPP.main.slice(), oh = []; if (threat) { const i = op.findIndex(x => name(x) === name(codeOf(THREATS[threat]))); if (i >= 0) oh.push(op.splice(i, 1)[0]); }
  while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  return { id: 'pv', seed: String(c.seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: c.order.slice(), extra: c.extra.slice(), side: [] }, hand: c.order.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } },
    responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: threat ? [threat] : [] }, after: { 1: k }, stopAfterTurn: null }; };
const own = (raw) => raw.filter(e => e.seat === 0 && !e.auto && e.label);
async function one(c, threat, k, minutes) {
  const steps = own(c.raw); let mx = -1;
  const r = await replay(mk(c, threat, k), steps, (S) => { const v = disruption(S, 0); if (v > mx) mx = v; });
  if (!threat) return { v: r && r.S ? disruption(r.S, 0) : mx, hit: false };
  if (!r || r.S.ended) return { hit: false };
  const g = r.S.game; const endV = +disruption(r.S, 0).toFixed(2); /* the line as written, carried on after the hit (steps that no longer fit are skipped) */ const hitAt = (g.responses || []).findIndex(e => e.seat === 1 && /^Activate /.test(e.label || ''));
  if (hitAt < 0) return { hit: false };
  const before = g.responses.slice(0, hitAt); const at = (before.slice().reverse().find(e => e.seat === 0 && /^(Activate|Normal Summon|Special Summon|Link Summon|Synchro Summon)/.test(e.label || '')) || {}).label || '';
  const nBefore = before.filter(e => e.seat === 0 && !e.auto && e.label).length;
  const r2 = await replay(mk(c, threat, k), steps.slice(0, nBefore), () => {}); const S0 = r2 && r2.S;
  if (!S0 || S0.ended || S0.turn !== 1 || !S0.pending) return { hit: true, nBefore, at, by: g.responses[hitAt].label, v: Math.max(mx, 0), why: 'no decision left after the hit' };
  const pre = S0.game.responses.length;
  // the search gets the original line's moves as a soft head start (so where the line still works it can keep it), then finds the best finish
  const hints = {}; for (const key of c.keys || []) hints[key] = 2;
  const a = await searchT1(JSON.parse(JSON.stringify(S0.game)), { ms: minutes * 60000, nrpa: 3, seed: 11 + k, hints, evalFn: (S2) => disruption(S2, 0) });
  const sv = +(a.score || 0).toFixed(2); const lab = (raw) => raw.filter(e => !e.auto && e.label).map(e => ({ seat: e.seat, label: e.label }));
  const keep = endV >= sv; // carrying on with the written line is at least as good as anything the search found
  const pivot = keep ? lab(g.responses.slice(hitAt)) : lab((a.raw || []).slice(pre));
  return { hit: true, nBefore, at, by: g.responses[hitAt].label, v: Math.max(sv, endV), searched: sv, asWritten: endV, keep, pivot, board: keep ? String(E.boardView(r.S, 0)) : (a.board || '') };
}
if (t.evalOne) { const c = JSON.parse(fs.readFileSync(t.evalOne.file, 'utf8')); let z; try { z = await one(c, t.evalOne.threat, t.evalOne.k, t.evalOne.minutes); } catch (e) { z = { error: String(e && e.message).slice(0, 200) }; } console.log('PIVOT ' + JSON.stringify(z)); process.exit(0); }
const TH = t.threats || Object.keys(THREATS), MIN = t.minutes ?? 3, NP = Math.max(1, os.cpus().length - 1);
const tasks = [];
for (const L of t.lines) { const c = JSON.parse(fs.readFileSync(L.file, 'utf8')); const nAct = own(c.raw).filter(e => /^(Activate|Normal Summon|Special Summon|Link Summon|Synchro Summon)/.test(e.label)).length;
  tasks.push({ L, threat: null, k: 0 }); for (const th of TH) for (let k = 0; k < Math.min(nAct, t.maxK ?? 24); k++) tasks.push({ L, threat: th, k }); }
console.log(`pivots: ${t.lines.length} lines, ${tasks.length} pieces`); let done = 0;
await poolDyn(tasks, NP, async (x, remote) => { const o = await runNode('pivots.mjs', { evalOne: { file: x.L.file, threat: x.threat, k: x.k, minutes: MIN } }, { remote, files: [x.L.file], heap: 2500, est: x.threat ? MIN + 1 : 0.5, timeoutMin: MIN * 2 + 10 });
  const m = /PIVOT (.*)/.exec(o || ''); x.z = m ? JSON.parse(m[1]) : { error: 'no result' }; if (++done % 20 === 0) console.log(`progress ${done}/${tasks.length}`); });
const out = {};
for (const L of t.lines) { const mine = tasks.filter(x => x.L === L); const none = mine.find(x => !x.threat); const res = { none: none && none.z && none.z.v != null ? +(+none.z.v).toFixed(2) : null, threats: {} };
  for (const th of TH) { const by = new Map(); for (const x of mine.filter(x => x.threat === th && x.z && x.z.hit)) { const key = x.z.nBefore; const cur = by.get(key); if (!cur || (x.z.v ?? -1) > (cur.v ?? -1)) by.set(key, { ...x.z, k: x.k }); }
    res.threats[th] = [...by.values()].sort((p, q) => p.nBefore - q.nBefore); }
  out[L.name] = res; }
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/${t.id}.json`, JSON.stringify(out));
let md = `# Pivots ${t.id}\n${new Date().toISOString()} · ${MIN} min search after each hit\n\n`;
for (const [n, r] of Object.entries(out)) { md += `## ${n}: ${r.none} with no hand trap\n\n| hand trap | stops (step: your action) | best board after the pivot | line as written after the hit |\n|---|---|---|---|\n`;
  for (const [th, hits] of Object.entries(r.threats)) for (const h of hits) md += `| ${th} | ${h.nBefore}: ${(h.at || '').slice(0, 70)} | ${h.v} | ${h.asWritten ?? '-'} |\n`; md += '\n'; }
fs.writeFileSync(`reports/${t.id}.md`, md); console.log(`done -> reports/${t.id}.md`); process.exit(0);
