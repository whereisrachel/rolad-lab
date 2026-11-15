// node abtest.mjs A.ydk B.ydk [--n 60] [--secs 4] [--script ash,droll] [--seed 7] [--out results/ab.md]
// Paired test: same shuffled order seeds & hand draws (by deck position) for both decks; search player finds best T1 board per hand.
import fs from 'fs'; import path from 'path';
import { parseYdk, ROOT, name } from './src/cards.mjs';
import { searchT1 } from './src/searchplayer.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const A = parseYdk(fs.readFileSync(a[0], 'utf8')), B = parseYdk(fs.readFileSync(a[1], 'utf8'));
const opp = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'goldfish.ydk'), 'utf8'));
const N = +f('n', 60), secs = +f('secs', 4), script = (f('script', '') || '').split(',').filter(Boolean), s0 = +f('seed', 7);
let x = s0 >>> 0; const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296;
function draw(deck) { const idx = deck.main.map((_, i) => i); for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } return idx.slice(0, 5); }
async function run(deck, hidx, seed) {
  const pool = deck.main.slice(); const hand = hidx.map(i => deck.main[i]); const rest = deck.main.filter((_, i) => !hidx.includes(i));
  const g = { id: 'ab', seed: String(seed), first: 0, lab: true, seats: { 0: { name: 'A', deck: { ...deck, main: [...hand, ...rest] }, hand }, 1: { name: 'opp', deck: opp, hand: null } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: script }, stopAfterTurn: null };
  try { const r = await searchT1(g, { ms: secs * 1000 }); if (r.error) console.log("E", r.error); return r.score ?? 0; } catch (e) { console.log("ERR", e.stack.split("\n").slice(0,4).join(" | ")); return 0; }
}
const rows = []; const t0 = Date.now();
for (let i = 0; i < N; i++) {
  const hA = draw(A); const seed = 1000 + i; const hB = hA.map(k => k); // same positions
  // paired by hand position after identical shuffles: draw once for each deck with same random stream
  const sa = await run(A, hA, seed); const sb = await run(B, hA.map(k => Math.min(k, B.main.length - 1)), seed);
  rows.push([sa, sb]); if ((i + 1) % 5 === 0) console.log(i + 1, 'done', ((Date.now() - t0) / 1000).toFixed(0) + 's');
}
const d = rows.map(r => r[1] - r[0]); const m = (v) => v.reduce((s, y) => s + y, 0) / v.length; const sd = (v) => { const mu = m(v); return Math.sqrt(v.reduce((s, y) => s + (y - mu) ** 2, 0) / (v.length - 1)); };
const out = `# A/B ${path.basename(a[0])} vs ${path.basename(a[1])}\nhands ${N}, ${secs}s each, hand traps: ${script.join(',') || 'none'}\nA mean ${m(rows.map(r => r[0])).toFixed(3)}  B mean ${m(rows.map(r => r[1])).toFixed(3)}\npaired diff B-A ${m(d).toFixed(3)} ± ${(sd(d) / Math.sqrt(N)).toFixed(3)} (SE)\nB better ${d.filter(v => v > 0.01).length}, A better ${d.filter(v => v < -0.01).length}, tie ${d.filter(v => Math.abs(v) <= 0.01).length}\n`;
fs.mkdirSync('results', { recursive: true }); fs.writeFileSync(f('out', 'results/ab.md'), out); console.log(out);
