// node bench.mjs [minutesPerHand] [parallel] -> the line finder on every guide test hand with NO helpers (no guide lines, no saved lines),
// against what the lab reached WITH helpers (which reproduces the guide's lines). Pass: within 0.5 of it, or better, on 80% of hands.
import fs from 'fs'; import os from 'os'; import { spawn } from 'child_process';
const MIN = +(process.argv[2] || 10); const memPar = Math.max(1, Math.floor(os.freemem() / 1.3e9));
const PAR = Math.min(+(process.argv[3] || Math.max(1, os.cpus().length - 1)), memPar);
const cal = JSON.parse(fs.readFileSync('reports/calibration.json', 'utf8')).rows.filter(r => !process.env.ONLY || process.env.ONLY.split(',').includes(r.id)); const OD = 'results/deep'; fs.rmSync(OD, { recursive: true, force: true }); fs.mkdirSync(OD, { recursive: true });
console.log(`bench: ${cal.length} hands, ${MIN} min each, ${PAR} at a time`);
let done = 0; const q = cal.slice();
const runOne = (row) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deep.mjs', row.id, String(MIN)], { env: { ...process.env, LIGHT: '1', CANON: '1', FC: '3000', OUTDIR: OD }, stdio: 'ignore' }); p.on('close', () => { done++; console.log(`${done}/${cal.length}`); ok(); }); });
await Promise.all(Array.from({ length: PAR }, async () => { while (q.length) await runOne(q.shift()); }));
const rows = cal.map(r => { const t = fs.existsSync(`${OD}/${r.id}.log`) ? fs.readFileSync(`${OD}/${r.id}.log`, 'utf8') : ''; const f = /FINAL ([\d.]+)/.exec(t); const at = /BESTAT ([\d.]+)/.exec(t); const ln = /LINE (.*)/.exec(t);
  const v = f ? +f[1] : 0; return { ...r, deep: v, at: at ? +at[1] : null, pass: v >= r.lab - 0.5, line: ln ? ln[1].split(' > ').filter(l => /Summon|Activate/.test(l)).slice(0, 25).join(' > ') : '' }; });
const np = rows.filter(r => r.pass).length; const need = Math.ceil(rows.length * 0.8);
let md = `# Line finder test: no helpers vs the lab with the guide's lines\n${new Date().toISOString()} · ${MIN} min per hand\n\n**${np >= need ? 'PASS' : 'FAIL'}**: within 0.5 of (or above) the with-helpers score on ${np}/${rows.length} hands (need ${need}). Mean no-helpers ${(rows.reduce((s, r) => s + r.deep, 0) / rows.length).toFixed(2)}, with helpers ${(rows.reduce((s, r) => s + r.lab, 0) / rows.length).toFixed(2)}.\n\n| hand | starter | with guide lines | no helpers | found after (min) | |\n|---|---|---|---|---|---|\n`;
for (const r of rows) md += `| ${r.id} | ${(r.hand || []).join(', ')} | ${r.lab.toFixed(2)} | ${r.deep.toFixed(2)} | ${r.at ?? '-'} | ${r.pass ? 'ok' : 'BELOW'} |\n`;
md += '\n## Lines found\n'; for (const r of rows) md += `\n**${r.id}** (${r.deep.toFixed(2)}): ${r.line}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync('reports/deep-bench.md', md); console.log(md.split('\n').slice(0, 4).join('\n'));
