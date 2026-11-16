// node loo.mjs [--deck decks/ROLAD-L2.ydk] [--n 30] [--scn none,ash] [--passes 1] [--macros 200] [--threads N] [--shard i --of N | --merge dir]
// Leave-one-out: for every distinct main-deck card, hands FORCED to contain one copy of it (+4 random); score with the card vs the same hand with that copy replaced by a dead card.
// value = with - without (positive = the card earns its slot). Reveals the weakest slots empirically.
import fs from 'fs'; import path from 'path'; import os from 'os';
import { Worker } from 'worker_threads'; import { fileURLToPath } from 'url';
import { slim, health } from './src/health.mjs';
import { update as libUpdate } from './src/library.mjs';
import { parseYdk, name } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const deckPath = f('deck', 'decks/ROLAD-L2.ydk'), N = +f('n', 30), scns = f('scn', 'none,ash').split(','), PAS = +f('passes', 1), MAC = +f('macros', 200), T = +f('threads', Math.max(1, os.cpus().length - 2));
const BLANK = 13039848; const TUT = f('tutor', null);
const BASE = parseYdk(fs.readFileSync(deckPath, 'utf8'));
let x = 23; const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296;
const cards = []; const seen = new Set(); BASE.main.forEach((c, i) => { if (!seen.has(c)) { seen.add(c); cards.push({ code: c, slot: i, label: name(c), copies: BASE.main.filter(k => k === c).length }); } });
fs.mkdirSync('decks/cand', { recursive: true });
const tasks = []; const meta = {}; let id = 0;
cards.forEach((c, ci) => {
  const main = BASE.main.slice(); main[c.slot] = BLANK; c.file = 'decks/cand/loo_' + ci + '.ydk';
  fs.writeFileSync(c.file, '#main\n' + main.join('\n') + '\n#extra\n' + BASE.extra.join('\n') + '\n!side\n' + (BASE.side || []).join('\n') + '\n');
  for (let hi = 0; hi < N; hi++) {
    const TS = TUT ? BASE.main.findIndex(k => name(k) === TUT) : -1; if (TUT && (c.slot === TS)) continue; const idx = BASE.main.map((_, k) => k).filter(k => k !== c.slot && k !== TS); for (let k = idx.length - 1; k > 0; k--) { const j = Math.floor(rnd() * (k + 1)); [idx[k], idx[j]] = [idx[j], idx[k]]; }
    const hand = TUT ? [TS, ...idx.slice(0, 4)] : [c.slot, ...idx.slice(0, 4)];
    for (const sc of scns) for (const side of ['with', 'without']) { const tid = id++; meta[tid] = { ci, hi, sc, side }; tasks.push({ id: tid, deck: side === 'with' ? deckPath : c.file, hand, scn: sc, macros: MAC, ht: +f('ht', 1), passes: PAS, seed: 2000 + hi }); }
  }
});
const SH = f('shard', null), OF = +f('of', 1), MERGE = f('merge', null);
const myTasks = SH !== null ? tasks.filter(t => t.id % OF === +SH) : tasks;
const chunks = Array.from({ length: T }, () => []); myTasks.forEach((t, i) => chunks[i % T].push(t));
const res = {}; let done = 0; const t0 = Date.now(); const wfile = fileURLToPath(new URL('./src/rt-worker.mjs', import.meta.url));
const m = (v) => v.reduce((s, y) => s + y, 0) / (v.length || 1); const se = (v) => v.length < 2 ? 0 : Math.sqrt(v.reduce((s, y) => s + (y - m(v)) ** 2, 0) / (v.length - 1) / v.length);
function report() {
  const by = {}; for (const [k, mt] of Object.entries(meta)) { const r = res[k]; if (!r) continue; ((by[mt.ci] ||= {})[mt.sc] ||= {})[mt.hi + mt.side] = r.v; }
  let o = `# Leave-one-out: value of each main-deck card (hand forced to hold it + 4 random; ${N} hands; scenarios ${scns.join(',')}; ${PAS} pass, ${MAC} steps) ${done}/${tasks.length} searches\nvalue = score with the card - score with that copy replaced by a dead card. Positive = earns its slot. Near 0 (|v|<2 SE) = free flex slot. Scorer: src/disrupt.mjs\n\n| card (copies) | ${scns.map(s => s + ' value ± SE').join(' | ')} | mean |\n|---|${scns.map(() => '---|').join('')}---|\n`;
  const rows = cards.map((c, ci) => { const per = scns.map(sc => { const d = []; const q = (by[ci] || {})[sc] || {}; for (let hi = 0; hi < N; hi++) if (q[hi + 'with'] !== undefined && q[hi + 'without'] !== undefined) d.push(q[hi + 'with'] - q[hi + 'without']); return d; }); return { c, per, mean: m(per.flatMap(p => p)), n: per.flat().length }; }).filter(r => r.n);
  rows.sort((p, q) => p.mean - q.mean);
  for (const r of rows) o += `| ${r.c.label} (${r.c.copies}) | ${r.per.map(p => p.length ? m(p).toFixed(2) + ' ± ' + se(p).toFixed(2) : '-').join(' | ')} | ${r.mean.toFixed(2)} |\n`;
  fs.mkdirSync('results', { recursive: true }); fs.writeFileSync('results/loo.md', o); return o;
}
if (MERGE) { for (const fn of fs.readdirSync(MERGE).filter(x => /^shard-.*\.json$/.test(x))) { const j = JSON.parse(fs.readFileSync(path.join(MERGE, fn), 'utf8')); for (const [k, v] of Object.entries(j)) { res[k] = v; done++; } } console.log(report()); process.exit(0); }
await Promise.all(chunks.filter(c => c.length).map(c => new Promise((ok) => { const w = new Worker(wfile, { workerData: { tasks: c } }); w.on('message', mm => { if (mm.done) { ok(); return; } res[mm.id] = mm; done++; if (done % 20 === 0) console.log(done + '/' + tasks.length, ((Date.now() - t0) / 1000).toFixed(0) + 's'); }); w.on('error', e => { console.log('worker error', e.message); ok(); }); })));
if (SH !== null) { fs.mkdirSync('results', { recursive: true }); fs.writeFileSync('results/shard-' + SH + '.json', JSON.stringify(Object.fromEntries(Object.entries(res).map(([k, v]) => [k, slim(v)])))); console.log('shard', SH, 'done', done, 'of', myTasks.length); process.exit(0); }
{ const H = health(res, tasks.length); if (MERGE || process.env.LEARN) H.md += `- line library: ${libUpdate(Object.values(res))} new lines saved\n`; console.log(report().replace('\n\n', '\n\n' + H.md)); }
