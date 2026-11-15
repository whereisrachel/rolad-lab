// Merges results/sweep-*.json into results/SWEEP-REPORT.md (ranked). Usage: node report.mjs
import fs from 'fs'; import path from 'path'; import { ROOT } from './src/cards.mjs';
const dir = path.join(ROOT, 'results'); const files = fs.readdirSync(dir).filter(f => /^sweep-.*\.json$/.test(f));
const by = new Map();
for (const f of files) { const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const r of d.rows) { const k = r.card; if (!by.has(k)) by.set(k, { card: k, code: r.code, runs: [] }); by.get(k).runs.push({ cut: d.cut, delta: r.delta, se: r.se, changed: r.changedHands, base: d.baseline }); } }
const rows = [...by.values()].map(x => { const n = x.runs.length; const best = x.runs.reduce((a, b) => (b.delta > a.delta ? b : a)); const mean = x.runs.reduce((p, r) => p + r.delta, 0) / n; return { ...x, n, mean, best, changed: Math.max(...x.runs.map(r => r.changed)) }; });
rows.sort((a, b) => b.best.delta - a.best.delta);
const sig = rows.filter(r => r.best.se > 0 && r.best.delta > 2 * r.best.se);
const inert = rows.filter(r => r.changed === 0).length;
let md = `# Sweep report\n\nRuns: ${files.length} · cards: ${rows.length} · cards that changed no hand: ${inert}\n\nPROXY ONLY (goldfish solver, first turn, paired hands). It cannot credit a card for its own effect unless the ROLAD helper has a line for it, and cannot see going second, their turn or hand traps. Nothing here justifies a list change.\n\n## Looks better than the cut card (delta > 2 SE)\n`;
md += sig.length ? sig.map(r => `- ${r.card} (${r.code}): ${r.best.delta >= 0 ? '+' : ''}${r.best.delta.toFixed(3)} ±${r.best.se.toFixed(3)} when swapped for ${r.best.cut}; hands changed ${r.best.changed}`).join('\n') : '- none';
md += `\n\n## All cards, best result first\n| card | best delta ±SE | vs cut | hands changed | runs |\n|---|---|---|---|---|\n` + rows.map(r => `| ${r.card} | ${r.best.delta.toFixed(3)} ±${r.best.se.toFixed(3)} | ${r.best.cut} | ${r.changed} | ${r.n} |`).join('\n') + '\n';
fs.writeFileSync(path.join(dir, 'SWEEP-REPORT.md'), md); console.log(md.split('\n').slice(0, 14).join('\n')); console.log('saved results/SWEEP-REPORT.md');
