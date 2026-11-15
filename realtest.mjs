// node realtest.mjs A.ydk B.ydk [--mode random|onecard] [--n 60] [--secs 6] [--scn none,both] [--out results/rt.md] [--threads N]
// Scores real-engine first-turn boards by DISRUPTION (src/disrupt.mjs) under hand-trap scenarios (opponent actually holds Ash/Imperm/Droll).
import fs from 'fs'; import path from 'path'; import os from 'os';
import { Worker } from 'worker_threads'; import { fileURLToPath } from 'url';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const dA = a[0], dB = a[1]; const A = parseYdk(fs.readFileSync(dA, 'utf8')), B = parseYdk(fs.readFileSync(dB, 'utf8'));
const mode = f('mode', 'random'), N = +f('n', 60), secs = 0, MAC = +f('macros', 300), PAS = +f('passes', 2), scns = f('scn', 'none,both').split(','), T = +f('threads', Math.max(1, os.cpus().length - 2));
let x = +f('seed', 7) >>> 0; const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296;
const STARTERS = ['Medius the Pure', 'Pendulum Treasure', 'Ars Magna - "Citrinitas"', 'Theorealize Medius', 'Artmage Finmel', 'Ars Magna of Infinity and Finity', 'Ars Magna of Purification and Corruption', 'Theorealize Past Lull', 'Prohibited Power Patron Portal - Terminus', 'Fiendsmith Engraver'];
const JUNK = ['Dark Magician', 'Small World', 'Mind Shuffle', 'Griffoh', 'Light and Darkness Ritual', 'Black Chaos', 'Skull Archfiend of Chaos', 'Lacrima the Crimson Tears', 'Apprentice Illusion Magician', 'Droll & Lock Bird'];
function handsFor(deck) { // returns list of {label, idx[]}
  const out = [];
  if (mode === 'random') { for (let i = 0; i < N; i++) { const idx = deck.main.map((_, k) => k); for (let k = idx.length - 1; k > 0; k--) { const j = Math.floor(rnd() * (k + 1)); [idx[k], idx[j]] = [idx[j], idx[k]]; } out.push({ label: 'h' + i, idx: idx.slice(0, 5) }); } }
  else { for (const s of STARTERS) { const si = deck.main.findIndex(c => name(c) === name(findCard(s))); if (si < 0) continue; const used = new Set([si]); const junk = JUNK.map(q => deck.main.findIndex((c, k) => !used.has(k) && name(c) === name(findCard(q)))).filter(k => k >= 0).slice(0, 4); if (junk.length < 4) continue; out.push({ label: s, idx: [si, ...junk] }); } }
  return out;
}
// Paired: hand drawn by position in A; B uses the same positions (decks differ by few cards, same order) in random mode. onecard builds per deck.
const hA = handsFor(A); const hB = mode === 'random' ? hA.map(h => ({ ...h })) : handsFor(B);
const tasks = []; let id = 0; const meta = {};
function add(deckName, deck, hs, side) { hs.forEach((h, hi) => scns.forEach(sc => { const tid = id++; meta[tid] = { side, hi, sc, label: h.label }; tasks.push({ id: tid, deck: deckName, hand: h.idx, scn: sc, macros: MAC, ht: +f('ht', 1), passes: PAS, seed: 1000 + hi }); })); }
add(dA, A, hA, 'A'); add(dB, B, hB, 'B');
const SH = f('shard', null), OF = +f('of', 1), MERGE = f('merge', null);
const myTasks = SH !== null ? tasks.filter(t => t.id % OF === +SH) : tasks;
const chunks = Array.from({ length: T }, () => []); myTasks.forEach((t, i) => chunks[i % T].push(t));
function partial() {
  let o = `# PARTIAL ${path.basename(dA)} (A) vs ${path.basename(dB)} (B): ${done}/${tasks.length} searches done\n`;
  for (const sc of scns) {
    const rows = []; for (const h of hA) { const ra = Object.keys(meta).find(k => meta[k].side === 'A' && meta[k].label === h.label && meta[k].sc === sc), rb = Object.keys(meta).find(k => meta[k].side === 'B' && meta[k].label === h.label && meta[k].sc === sc); if (res[ra] && res[rb]) rows.push([res[ra].v, res[rb].v]); }
    if (!rows.length) continue; const d = rows.map(r => r[1] - r[0]); const m = (v) => v.reduce((a, b) => a + b, 0) / v.length; const sd = d.length > 1 ? Math.sqrt(d.reduce((a, b) => a + (b - m(d)) ** 2, 0) / (d.length - 1) / d.length) : 0;
    o += `${sc}: ${rows.length} pairs | A ${m(rows.map(r => r[0])).toFixed(2)} | B ${m(rows.map(r => r[1])).toFixed(2)} | B-A ${m(d).toFixed(2)} ± ${sd.toFixed(2)}\n`;
  }
  fs.mkdirSync('results', { recursive: true }); fs.writeFileSync('results/rt-partial.md', o);
}
const res = {}; let done = 0; const t0 = Date.now(); const file = fileURLToPath(new URL('./src/rt-worker.mjs', import.meta.url));
if (MERGE) { for (const fn of fs.readdirSync(MERGE).filter(x => /^shard-.*\.json$/.test(x))) { const j = JSON.parse(fs.readFileSync(path.join(MERGE, fn), 'utf8')); for (const [k, v] of Object.entries(j)) { res[k] = v; done++; } } }
if (!MERGE) await Promise.all(chunks.filter(c => c.length).map(c => new Promise((ok) => { const w = new Worker(file, { workerData: { tasks: c } }); w.on('message', m => { if (m.done) { ok(); return; } res[m.id] = m; done++; if (done % 10 === 0) { partial(); console.log(done + '/' + tasks.length, ((Date.now() - t0) / 1000).toFixed(0) + 's'); } }); w.on('error', e => { console.log('worker error', e.message); ok(); }); })));
if (SH !== null) { fs.mkdirSync('results', { recursive: true }); fs.writeFileSync('results/shard-' + SH + '.json', JSON.stringify(Object.fromEntries(Object.entries(res).map(([k, v]) => [k, { id: v.id, v: v.v, err: v.err }])))); console.log('shard', SH, 'done', done, 'of', myTasks.length, ((Date.now() - t0) / 1000).toFixed(0) + 's'); process.exit(0); }
const mean = (v) => v.reduce((s, y) => s + y, 0) / (v.length || 1); const se = (v) => { if (v.length < 2) return 0; const m = mean(v); return Math.sqrt(v.reduce((s, y) => s + (y - m) ** 2, 0) / (v.length - 1) / v.length); };
function build(final) {
let o = `# Real-engine disruption test: ${path.basename(dA)} (A) vs ${path.basename(dB)} (B)\nmode ${mode}, ${MAC} search steps, scenarios ${scns.join(',')} (opponent really holds those hand traps and uses them), going first, ${new Date().toISOString().slice(0, 10)}\nScore = interruptions the end board can use on their turn (+0.5 per distinct layer, +0.15 per spare hand card, +1 per hand trap kept). 6+ is a strong board.\n\n`;
for (const sc of scns) {
  const find = (side, label) => Object.keys(meta).find(k => meta[k].side === side && meta[k].label === label && meta[k].sc === sc);
  const rows = hA.map(h => { const ra = find('A', h.label), rb = find('B', h.label); return [h.label, res[ra]?.v ?? 0, rb === undefined ? null : (res[rb]?.v ?? 0)]; }).filter(r => r[2] !== null);
  const d = rows.map(r => r[2] - r[1]);
  o += `## Scenario: ${sc}\nA mean ${mean(rows.map(r => r[1])).toFixed(2)} | B mean ${mean(rows.map(r => r[2])).toFixed(2)} | diff B-A ${mean(d).toFixed(2)} ± ${se(d).toFixed(2)} | A ≥6: ${rows.filter(r => r[1] >= 6).length}/${rows.length} | B ≥6: ${rows.filter(r => r[2] >= 6).length}/${rows.length}\n`;
  if (mode === 'onecard') { o += '\n| starter alone | A | B |\n|---|---|---|\n'; for (const r of rows) o += `| ${r[0]} | ${r[1].toFixed(2)} | ${r[2].toFixed(2)} |\n`; }
  o += '\n';
}
return o; }

const out = f('out', 'results/rt.md'); fs.mkdirSync('results', { recursive: true }); const o = build(true); fs.writeFileSync(out, o); console.log(o); console.log('time', ((Date.now() - t0) / 1000).toFixed(0) + 's', 'threads', T);
