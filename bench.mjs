// node bench.mjs [minutesPerHand] -> the line finder on the guide's exact test hands with NO helpers (no guide lines, no saved lines),
// against the guide's own written end board for that hand, scored by the same scorer. Pass: within 0.5 of it, or better, on 80% of hands.
import fs from 'fs'; import os from 'os'; import { spawn } from 'child_process';
import { guideBoardScore, fullName } from './src/guideboard.mjs';
const MIN = +(process.argv[2] || 10); const PAR = Math.min(Math.max(1, os.cpus().length - 1), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const T = JSON.parse(fs.readFileSync('data/guide_tests.json', 'utf8')).filter(t => !process.env.ONLY || process.env.ONLY.split(',').includes(t.id));
const rows = T.map(t => ({ id: t.id, hand: t.hand.map(fullName), guide: guideBoardScore(t.board) }));
console.log(`bench: ${rows.length} guide hands, ${MIN} min each, ${PAR} at a time`); let done = 0; const q = rows.slice();
const runOne = (r) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify({ deck: process.env.DECK || 'decks/ROLAD-L2.ydk', hand: r.hand, minutes: MIN, divs: process.env.DIVS || '6,1.5' })], { stdio: ['ignore', 'pipe', 'ignore'] }); let out = '';
  p.stdout.on('data', b => out += b); p.on('close', () => { const m = /RESULT (.*)/.exec(out); const x = m ? JSON.parse(m[1]) : { v: 0 }; r.deep = x.v; r.line = (x.line || []).filter(l => /Summon|Activate/.test(l)).slice(0, 30).join(' > '); r.board = x.board || ''; done++; console.log(`${done}/${rows.length}`); ok(); }); });
await Promise.all(Array.from({ length: PAR }, async () => { while (q.length) await runOne(q.shift()); }));
for (const r of rows) r.pass = r.deep >= r.guide - 0.5; const np = rows.filter(r => r.pass).length, need = Math.ceil(rows.length * 0.8);
let md = `# Line finder test: guide's exact hands, no helpers, vs the guide's own end boards\n${new Date().toISOString()} · ${MIN} min per hand · both scored by the same scorer\n\n**${np >= need ? 'PASS' : 'FAIL'}**: within 0.5 of (or above) the guide's board on ${np}/${rows.length} hands (need ${need}). Mean found ${(rows.reduce((s, r) => s + r.deep, 0) / rows.length).toFixed(2)}, guide ${(rows.reduce((s, r) => s + r.guide, 0) / rows.length).toFixed(2)}.\n\n| hand | cards | guide board | found | |\n|---|---|---|---|---|\n`;
for (const r of rows) md += `| ${r.id} | ${r.hand.join(', ')} | ${r.guide.toFixed(2)} | ${r.deep.toFixed(2)} | ${r.pass ? 'ok' : 'BELOW'} |\n`;
md += '\n## Lines and end boards found\n'; for (const r of rows) md += `\n**${r.id}** (${r.deep.toFixed(2)}): ${r.line}\n\n${r.board.split('\n').filter(l => /Monsters|Spell\/Trap|Hand:/.test(l)).map(l => '    ' + l.trim()).join('\n')}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync('reports/deep-bench.md', md); console.log(md.split('\n').slice(0, 4).join('\n'));
