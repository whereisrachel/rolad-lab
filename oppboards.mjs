// Opponent's turn into your best stored boards: for each of the top N library lines (no hand trap), the opponent takes its turn
// with H different opening hands (Sky Striker and Despia), battle phase included. Ranks boards by what holds up, not by size.
// node oppboards.mjs [list=L2-vand3] [n=8] [hands=6] [minutes=0.5]  -> reports/oppboards-<list>.md + .json
import fs from 'fs'; import path from 'path'; import { spawn } from 'child_process';
const LIST = process.argv[2] || 'L2-vand3', N = +(process.argv[3] || 8), H = +(process.argv[4] || 6), MIN = +(process.argv[5] || 0.5);
const OPPS = ['o_ss', 'o_despia']; const dir = `data/lib-${LIST}`;
const lib = []; for (const fn of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) { try { const x = JSON.parse(fs.readFileSync(`${dir}/${fn}`, 'utf8')); if ((x.scn === 'none' || x.scn === 'robust') && x.raw && x.order) lib.push({ file: `${dir}/${fn}`, id: fn.replace('.json', ''), v: x.v, hand: x.hand, board: x.board }); } catch {} }
lib.sort((a, b) => b.v - a.v); const top = lib.slice(0, N); const rows = []; let done = 0; const total = top.length * OPPS.length;
console.log(`opponent's turn: ${top.length} boards x ${OPPS.length} decks x ${H} hands`);
for (const b of top) { const row = { ...b }; for (const o of OPPS) { const z = await new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', 'oppturn.mjs', JSON.stringify({ line: b.file, opp: `decks/${o}.ydk`, minutes: MIN, hands: H, oppSeed: 1 })], { stdio: ['ignore', 'pipe', 'ignore'] });
      let s = ''; p.stdout.on('data', d => s += d); p.on('close', () => { const m = /OPPTURN (.*)/.exec(s); ok(m ? JSON.parse(m[1]) : null); }); }); row[o] = z; done++; console.log(`${done}/${total}`); }
  row.avg = +(OPPS.reduce((a, o) => a + ((row[o] && row[o].margin) ?? -10), 0) / OPPS.length).toFixed(2); rows.push(row); }
rows.sort((a, b) => b.avg - a.avg);
let md = `# Opponent's turn into your top ${rows.length} boards — ${LIST}\n${new Date().toISOString()}\n\nEach board faced ${H} different opening hands from each deck, battle phase included. Margin = what you still have minus what they end on (−10 more if they OTK you). Higher is better.\n\n| board | your turn-1 value | vs Sky Striker (avg / worst / OTKs) | vs Despia (avg / worst / OTKs) | overall |\n|---|---|---|---|---|\n`;
const cell = (z) => z ? `${z.margin} / ${z.worst} / ${z.otk}` : 'failed';
for (const r of rows) md += `| ${r.id} | ${r.v} | ${cell(r.o_ss)} | ${cell(r.o_despia)} | **${r.avg}** |\n`;
md += '\n## Boards\n'; for (const r of rows) md += `\n**${r.id}** (${r.hand.join(', ')})\n\n${String(r.board || '').slice(0, 600)}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/oppboards-${LIST}.md`, md); fs.writeFileSync(`reports/oppboards-${LIST}.json`, JSON.stringify(rows)); console.log('done');
