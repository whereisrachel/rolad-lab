// Bottleneck cards of an opponent deck: the opponent plays its turn into one of your boards with NO interference,
// once with its full deck and once for each of its Main Deck cards replaced by a blank (same deck order, so the same draws
// except that card). value(card) = how much better off you are when they don't have that card (your board left minus theirs).
// Highest values = the cards whose effects are worth stopping first.
// node choke.mjs <opp=o_ss> <lineFile> [hands=8] [minutes=0.5]  -> data/choke-<opp>.json + reports/choke-<opp>.md
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
import { parseYdk, name, findCard } from './src/cards.mjs';
const OPP = process.argv[2] || 'o_ss', LINE = process.argv[3], H = +(process.argv[4] || 8), MIN = +(process.argv[5] || 0.5);
const NP = Math.max(1, os.cpus().length - 1); const deck = parseYdk(fs.readFileSync(`decks/${OPP}.ydk`, 'utf8'));
const code = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; }; const BLANK = code('Petit Moth');
const names = [...new Set(deck.main.map(name))]; fs.mkdirSync('decks/_choke', { recursive: true });
const ydk = (main) => '#created by ygo-lab\n#main\n' + main.join('\n') + '\n#extra\n' + deck.extra.join('\n') + '\n!side\n';
const variants = [['(full deck)', `decks/${OPP}.ydk`], ...names.map(n => { const f = `decks/_choke/${OPP}-no-${n.replace(/[^A-Za-z0-9]+/g, '_')}.ydk`; fs.writeFileSync(f, ydk(deck.main.map(k => name(k) === n ? BLANK : k))); return [n, f]; })];
const tasks = []; for (const [n, f] of variants) for (let s = 1; s <= H; s++) tasks.push({ n, f, s });
const res = {}; let done = 0; console.log(`bottlenecks for ${OPP}: ${variants.length} versions x ${H} hands`);
const one = (x) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2000', 'oppturn.mjs', JSON.stringify({ line: LINE, opp: x.f, minutes: MIN, hands: 1, oppSeed: x.s, defense: 'none', smartDefense: false })], { stdio: ['ignore', 'pipe', 'ignore'] });
  let o = ''; p.stdout.on('data', b => o += b); p.on('close', () => { const m = /OPPTURN (.*)/.exec(o); if (m) { const z = JSON.parse(m[1]); (res[x.n] ||= {})[x.s] = { margin: z.margin, theirs: z.theirBoard, used: (z.theirLine || []).filter(l => /^Activate /.test(l)).map(l => (/^Activate (.+?) \(/.exec(l) || [])[1]).filter(Boolean) }; } done++; console.log(`${done}/${tasks.length}`); ok(); }); });
const q = tasks.slice(); await Promise.all(Array.from({ length: NP }, async () => { while (q.length) await one(q.shift()); }));
const full = res['(full deck)'] || {}; const rows = [];
for (const n of names) { const r = res[n] || {}; const ds = [], dt = []; let usedIn = 0; for (let s = 1; s <= H; s++) { if (!full[s] || !r[s]) continue; ds.push(r[s].margin - full[s].margin); dt.push(full[s].theirs - r[s].theirs); if (full[s].used.includes(n)) usedIn++; }
  const m = ds.length ? ds.reduce((a, b) => a + b, 0) / ds.length : 0; const se = ds.length > 1 ? Math.sqrt(ds.reduce((a, b) => a + (b - m) ** 2, 0) / (ds.length - 1) / ds.length) : 0;
  rows.push({ card: n, copies: deck.main.filter(k => name(k) === n).length, value: +m.toFixed(2), se: +se.toFixed(2), theirBoardDrop: +(dt.reduce((a, b) => a + b, 0) / Math.max(1, dt.length)).toFixed(2), usedInHands: usedIn, hands: ds.length }); }
rows.sort((a, b) => b.value - a.value);
fs.writeFileSync(`data/choke-${OPP}.json`, JSON.stringify(Object.fromEntries(rows.map(r => [r.card, r.value]))));
let md = `# Bottleneck cards: ${OPP}\n${new Date().toISOString()}\n\nThe opponent played its turn into your board with no interference, with its full deck and with each card removed (same draws otherwise), ${H} hands each. Value = how much better off you are without that card in their deck (your board left minus theirs). The top cards are the ones worth stopping.\n\n| card | copies | value to stop | ± | their board drop | activated in their best line (of ${H} hands) |\n|---|---|---|---|---|---|\n`;
for (const r of rows) md += `| ${r.card} | ${r.copies} | ${r.value} | ${r.se} | ${r.theirBoardDrop} | ${r.usedInHands} |\n`;
md += `\nFull deck: their average board ${(Object.values(full).reduce((a, x) => a + x.theirs, 0) / Math.max(1, Object.keys(full).length)).toFixed(2)}, your margin ${(Object.values(full).reduce((a, x) => a + x.margin, 0) / Math.max(1, Object.keys(full).length)).toFixed(2)}.\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/choke-${OPP}.md`, md); console.log('done');
