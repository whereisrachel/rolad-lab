// Robust line choice on the guide's test hands (robust.mjs on each): which line to play when you don't know which hand trap they hold.
// node robbench.mjs [deck=decks/L2-vand3.ydk] [minutes=1]  -> reports/robust-<list>.md + .json
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
import { fullName } from './src/guideboard.mjs';
const DECK = process.argv[2] || 'decks/L2-vand3.ydk', MIN = +(process.argv[3] || 1); const LIST = path.basename(DECK, '.ydk');
const T = JSON.parse(fs.readFileSync('data/guide_tests.json', 'utf8')).filter(t => !process.env.ONLY || process.env.ONLY.split(',').includes(t.id));
const PAR = Math.max(1, Math.floor((os.cpus().length - 1) / 6)); const q = T.slice(); const rows = []; let done = 0;
const CARDV = fs.existsSync(`data/cardv-${LIST}.json`) ? `data/cardv-${LIST}.json` : undefined;
console.log(`robust lines: ${T.length} guide hands, ${PAR} at a time`);
const one = (t) => new Promise(ok => { const hand = t.hand.map(fullName);
  const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=3000', 'robust.mjs', JSON.stringify({ deck: DECK, hand, minutes: MIN, cands: 3, adapt: 0.15, cardvFile: CARDV })], { stdio: ['ignore', 'pipe', 'ignore'] });
  let o = ''; p.stdout.on('data', b => o += b); p.on('close', () => { const m = /ROBUST (.*)/.exec(o); rows.push({ id: t.id, hand, r: m ? JSON.parse(m[1]) : null }); done++; console.log(`${done}/${T.length}`); ok(); }); });
await Promise.all(Array.from({ length: PAR }, async () => { while (q.length) await one(q.shift()); }));
rows.sort((a, b) => T.findIndex(t => t.id === a.id) - T.findIndex(t => t.id === b.id));
let md = `# Lines that play around hand traps — guide hands, ${LIST}\n${new Date().toISOString()}\n\nFor each hand: several strong lines were found, each was played against Ash, Imperm and Droll held for the moment that hurts that line most (your line adapts after the hit), and the line with the best overall result was kept (40% no hand trap, 20% each hand trap).\n\n| hand | chosen line: no trap | vs Ash | vs Imperm | vs Droll | overall | best other line overall |\n|---|---|---|---|---|---|---|\n`;
for (const x of rows) { const c = x.r && x.r.chosen; if (!c) { md += `| ${x.id} | failed | | | | | |\n`; continue; } const th = c.threats; const o2 = (x.r.others || [])[0];
  md += `| ${x.id} | ${c.none.toFixed(2)} | ${th.ash.v.toFixed(2)} | ${th.imperm.v.toFixed(2)} | ${th.droll.v.toFixed(2)} | **${c.robust.toFixed(2)}** | ${o2 ? o2.robust.toFixed(2) + ' (no trap ' + o2.none.toFixed(2) + ')' : '-'} |\n`; }
md += '\n## Chosen lines\n'; for (const x of rows) { const c = x.r && x.r.chosen; if (!c) continue;
  md += `\n**${x.id}** — ${x.hand.join(', ')}\n\n- Line: ${(c.line || []).filter(l => /^(Normal Summon|Activate|Link Summon|Synchro Summon|Xyz Summon|Special Summon \(procedure\)|Set )/.test(l)).join(' > ')}\n`;
  for (const [k, v] of Object.entries(c.threats)) md += `- vs ${k}: ${v.v.toFixed(2)}${v.hit ? ` (hits ${v.at ? '“' + v.at.slice(0, 80) + '”' : 'the line'}; held until your effect #${v.k})` : ' (no target in this line)'}\n`; }
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/robust-${LIST}.md`, md); fs.writeFileSync(`reports/robust-${LIST}.json`, JSON.stringify(rows)); console.log(md.split('\n').slice(0, 6).join('\n'));
