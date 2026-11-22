// Opponent's turn into your best stored boards: for each of the top N library lines (no hand trap), the opponent takes its turn
// with H different opening hands (Sky Striker and Despia), battle phase included. Ranks boards by what holds up, not by size.
// node oppboards.mjs [list=L2-vand3] [n=8] [hands=6] [minutes=0.5]  -> reports/oppboards-<list>.md + .json
import fs from 'fs'; import path from 'path'; import { spawn } from 'child_process';
const LIST = process.argv[2] || 'L2-vand3', N = +(process.argv[3] || 8), H = +(process.argv[4] || 6), MIN = +(process.argv[5] || 0.5);
const OPPS = ['o_ss', 'o_despia']; const DEF = process.env.OB_DEFENSE || 'bottleneck', TAG = process.env.OB_TAG ? '-' + process.env.OB_TAG : '', IDS = process.env.OB_IDS ? process.env.OB_IDS.split(',') : null; // OB_DEFENSE=rule: the old defense (fire in order); OB_IDS: exactly these boards const dir = `data/lib-${LIST}`;
const lib = []; for (const fn of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) { try { const x = JSON.parse(fs.readFileSync(`${dir}/${fn}`, 'utf8')); if ((x.scn === 'none' || x.scn === 'robust') && x.raw && x.order) lib.push({ file: `${dir}/${fn}`, id: fn.replace('.json', ''), v: x.v, hand: x.hand, board: x.board }); } catch {} }
lib.sort((a, b) => b.v - a.v);
// one board per distinct end board (same monsters and spells/traps on your field = same board), best value first
const sig = (b) => [...String(b.board || '').matchAll(/(?:M\d|EMZ-[LR]|S\d|FZ|Field):\s*([^|\n]+?)(?=\s*(?:\|\||\n|$))/g)].map(z => z[1].replace(/\s+(Lv|L)\d.*$/, '').replace(/\s+L\d.*$/, '').trim()).sort().join('+') || b.id;
const seenB = new Set(); const top = []; for (const b of lib) { if (IDS && !IDS.includes(b.id)) continue; const k = sig(b); if (seenB.has(k)) continue; seenB.add(k); b.cards = k.split('+'); top.push(b); if (top.length >= N) break; }
// resume: boards already done in an earlier (interrupted) run are kept
const OUTJ = `reports/oppboards-${LIST}${TAG}.json`; const CFG = `${H} hands, ${MIN} min, defense ${DEF === 'rule' || !fs.existsSync('data/choke-o_ss.json') ? 'rule' : 'bottleneck'}`; const prev = process.env.RESUME !== '0' && fs.existsSync(OUTJ) ? JSON.parse(fs.readFileSync(OUTJ, 'utf8')) : []; const rows = []; let done = 0; const total = top.length * OPPS.length;
console.log(`opponent's turn: ${top.length} boards x ${OPPS.length} decks x ${H} hands`);
const save = () => { fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(OUTJ, JSON.stringify(rows)); };
for (const b of top) { const old = prev.find(r => r.id === b.id && r.cfg === CFG && OPPS.every(o => r[o])); if (old) { rows.push({ ...old, cards: b.cards }); done += OPPS.length; console.log(`${done}/${total}`); continue; } const row = { ...b, cfg: CFG }; for (const o of OPPS) { const z = await new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', 'oppturn.mjs', JSON.stringify({ line: b.file, opp: `decks/${o}.ydk`, minutes: MIN, hands: H, oppSeed: 1, ...(DEF === 'rule' ? { choke: false } : {}) })], { stdio: ['ignore', 'pipe', 'ignore'] });
      let s = ''; p.stdout.on('data', d => s += d); p.on('close', () => { const m = /OPPTURN (.*)/.exec(s); ok(m ? JSON.parse(m[1]) : null); }); }); row[o] = z; done++; console.log(`${done}/${total}`); }
  row.avg = +(OPPS.reduce((a, o) => a + ((row[o] && row[o].margin) ?? -10), 0) / OPPS.length).toFixed(2); rows.push(row); save(); }
rows.sort((a, b) => b.avg - a.avg);
let md = `# Opponent's turn into your top ${rows.length} boards — ${LIST}\n${new Date().toISOString()}\n\nEach board faced ${H} different opening hands from each deck, battle phase included. Margin = what you still have minus what they end on (−10 more if they OTK you). Higher is better.\n\n| board | your turn-1 value | vs Sky Striker (avg / worst / OTKs) | vs Despia (avg / worst / OTKs) | overall |\n|---|---|---|---|---|\n`;
const cell = (z) => z ? `${z.margin} / ${z.worst} / ${z.otk}` : 'failed';
for (const r of rows) md += `| ${r.id} | ${r.v} | ${cell(r.o_ss)} | ${cell(r.o_despia)} | **${r.avg}** |\n`;
// which cards on your end board go with holding up through their turn (boards with the card vs without; needs 4+ boards each way)
{ const cards = {}; for (const r of rows) for (const c of new Set(r.cards || [])) (cards[c] ||= []).push(r.avg);
  const all = rows.map(r => r.avg), mean = (a) => a.reduce((p, q) => p + q, 0) / a.length;
  const eff = Object.entries(cards).filter(([c, a]) => a.length >= 4 && rows.length - a.length >= 4).map(([c, a]) => { const without = rows.filter(r => !(r.cards || []).includes(c)).map(r => r.avg); return [c, a.length, +(mean(a) - mean(without)).toFixed(2)]; }).sort((p, q) => q[2] - p[2]);
  if (eff.length) { md += `\n## Cards on your end board that go with holding up (avg overall margin of boards with the card minus boards without)\n| card | boards with it | difference |\n|---|---|---|\n`; for (const [c, n, d] of eff) md += `| ${c} | ${n} | ${d > 0 ? '+' : ''}${d} |\n`; } }
md += '\n## Boards\n'; for (const r of rows) md += `\n**${r.id}** (${r.hand.join(', ')})\n\n${String(r.board || '').slice(0, 600)}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/oppboards-${LIST}${TAG}.md`, md); fs.writeFileSync(OUTJ, JSON.stringify(rows)); console.log('done');
