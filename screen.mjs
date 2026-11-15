// node screen.mjs [--deck decks/ROLAD-L2.ydk] [--slot "Small World"] [--cands cands.txt] [--n 20] [--scn none,ash] [--passes 1] [--macros 200] [--threads N]
// Screens many single-card swaps. Each hand is FORCED to contain the swapped card (plus 4 random cards), so the effect of drawing it is measured.
import fs from 'fs'; import path from 'path'; import os from 'os';
import { Worker } from 'worker_threads'; import { fileURLToPath } from 'url';
import { slim, health } from './src/health.mjs';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const deckPath = f('deck', 'decks/ROLAD-L2.ydk'), slotName = f('slot', 'Small World'), N = +f('n', 20), scns = f('scn', 'none,ash').split(','), PAS = +f('passes', 1), MAC = +f('macros', 200), T = +f('threads', Math.max(1, os.cpus().length - 2));
const BASE = parseYdk(fs.readFileSync(deckPath, 'utf8'));
const ED = slotName.startsWith('ED:'); const slotNm = ED ? slotName.slice(3) : slotName; // ED:<card> = Extra Deck swap, hands are random (not forced)
const slotCode = findCard(slotNm); const slot = (ED ? BASE.extra : BASE.main).findIndex(c => name(c) === name(slotCode)); if (slot < 0) throw new Error('slot card not in deck');
const names = fs.readFileSync(f('cands', 'cands.txt'), 'utf8').split(/\r?\n/).map(s => s.trim()).filter(s => s && !s.startsWith('#'));
let x = 11; const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296;
const hands = []; for (let i = 0; i < N; i++) { const idx = BASE.main.map((_, k) => k).filter(k => ED || k !== slot); for (let k = idx.length - 1; k > 0; k--) { const j = Math.floor(rnd() * (k + 1)); [idx[k], idx[j]] = [idx[j], idx[k]]; } hands.push(ED ? idx.slice(0, 5) : [slot, ...idx.slice(0, 4)]); }
const decks = [{ label: '(baseline: ' + slotName + ')', file: deckPath }];
fs.mkdirSync('decks/cand', { recursive: true });
for (const nm of names) { let c; try { c = findCard(nm); } catch { c = null; } if (!c) { console.log('skip (not found):', nm); continue; } const main = BASE.main.slice(); const extra = BASE.extra.slice(); if (ED) extra[slot] = c; else main[slot] = c; const file = 'decks/cand/' + nm.replace(/[^A-Za-z0-9]+/g, '_').slice(0, 40) + '.ydk'; fs.writeFileSync(file, '#main\n' + main.join('\n') + '\n#extra\n' + extra.join('\n') + '\n!side\n' + (BASE.side || []).join('\n') + '\n'); decks.push({ label: name(c), file }); }
const SH = f('shard', null), OF = +f('of', 1), MERGE = f('merge', null);
const tasks = []; const meta = {}; let id = 0;
decks.forEach((d, di) => hands.forEach((h, hi) => scns.forEach(sc => { const tid = id++; meta[tid] = { di, hi, sc }; tasks.push({ id: tid, deck: d.file, hand: h, scn: sc, macros: MAC, ht: +f('ht', 1), seeds: +f('seeds', 0), passes: PAS, seed: 1000 + hi }); })));
const myTasks = SH !== null ? tasks.filter(t => t.id % OF === +SH) : tasks;
const chunks = Array.from({ length: T }, () => []); myTasks.forEach((t, i) => chunks[i % T].push(t));
const res = {}; let done = 0; const t0 = Date.now(); const file = fileURLToPath(new URL('./src/rt-worker.mjs', import.meta.url));
const m = (v) => v.reduce((s, y) => s + y, 0) / (v.length || 1); const se = (v) => v.length < 2 ? 0 : Math.sqrt(v.reduce((s, y) => s + (y - m(v)) ** 2, 0) / (v.length - 1) / v.length);
function report() {
  let o = `# Screen: each card replaces ${slotName}; every hand contains the card + 4 random; ${N} hands, scenarios ${scns.join(',')}, ${PAS} pass, ${MAC} steps. ${done}/${tasks.length} searches done\nDiff = card minus ${slotName} on the same 4 other cards. Needs |diff| > ~0.5 and > 2 SE to mean anything. Scorer: src/disrupt.mjs.\n\n| card | ${scns.map(s => s + ' diff ± SE').join(' | ')} | mean diff | played |\n|---|---|${scns.map(() => '---|').join('')}---|\n`;
  const rows = [];
  for (let di = 1; di < decks.length; di++) {
    const per = scns.map(sc => { const d = []; for (let hi = 0; hi < N; hi++) { const ra = Object.keys(meta).find(k => meta[k].di === 0 && meta[k].hi === hi && meta[k].sc === sc), rb = Object.keys(meta).find(k => meta[k].di === di && meta[k].hi === hi && meta[k].sc === sc); if (res[ra] && res[rb]) d.push(res[rb].v - res[ra].v); } return d; });
    if (per.every(p => !p.length)) continue; const mine = Object.keys(meta).filter(k => meta[k].di === di && res[k]); const pl = mine.filter(k => (res[k].played || []).includes(decks[di].label)).length; rows.push({ label: decks[di].label, per, mean: m(per.flatMap(p => p)), played: mine.length ? pl / mine.length : 0 });
  }
  rows.sort((p, q) => q.mean - p.mean);
  for (const r of rows) o += `| ${r.label} | ${r.per.map(p => p.length ? m(p).toFixed(2) + ' ± ' + se(p).toFixed(2) + ' (' + p.length + ')' : '-').join(' | ')} | ${r.mean.toFixed(2)} | ${ED ? '-' : (100 * r.played).toFixed(0) + '%' + (r.played < 0.5 ? ' NOT PLAYED: result unreliable' : '')} |\n`;
  fs.mkdirSync('results', { recursive: true }); fs.writeFileSync('results/screen.md', o); return o;
}
const SURV = f('survivors', null); // threshold: keep cards with mean + 1.5*SE > thr (stage-1 funnel filter)
function survivors(thr) {
  const out = [];
  for (let di = 1; di < decks.length; di++) {
    const all = []; for (const sc of scns) for (let hi = 0; hi < N; hi++) { const ra = Object.keys(meta).find(k => meta[k].di === 0 && meta[k].hi === hi && meta[k].sc === sc), rb = Object.keys(meta).find(k => meta[k].di === di && meta[k].hi === hi && meta[k].sc === sc); if (res[ra] && res[rb]) all.push(res[rb].v - res[ra].v); }
    if (all.length && m(all) + 1.5 * se(all) > thr) out.push(decks[di].label);
  }
  return out;
}
if (MERGE) { for (const fn of fs.readdirSync(MERGE).filter(x => /^shard-.*\.json$/.test(x))) { const j = JSON.parse(fs.readFileSync(path.join(MERGE, fn), 'utf8')); for (const [k, v] of Object.entries(j)) { res[k] = v; done++; } } if (SURV !== null) { report(); console.log(survivors(+SURV).join('\n')); process.exit(0); }
console.log(report()); process.exit(0); }
if (!MERGE) await Promise.all(chunks.filter(c => c.length).map(c => new Promise((ok) => { const w = new Worker(file, { workerData: { tasks: c } }); w.on('message', mm => { if (mm.done) { ok(); return; } res[mm.id] = mm; done++; if (done % 20 === 0) { report(); console.log(done + '/' + tasks.length, ((Date.now() - t0) / 1000).toFixed(0) + 's'); } }); w.on('error', e => { console.log('worker error', e.message); ok(); }); })));
if (SH !== null) { fs.mkdirSync('results', { recursive: true }); fs.writeFileSync('results/shard-' + SH + '.json', JSON.stringify(Object.fromEntries(Object.entries(res).map(([k, v]) => [k, slim(v)])))); console.log('shard', SH, 'done', done, 'of', myTasks.length, ((Date.now() - t0) / 1000).toFixed(0) + 's'); process.exit(0); }
const H = health(res, tasks.length); const R = report().replace('\n\n', '\n\n' + H.md); fs.writeFileSync('results/screen.md', R); console.log(R); console.log('time', ((Date.now() - t0) / 1000).toFixed(0) + 's');
