// Learn hints for a list: play random hands with the line finder, keep the moves that appear in the best lines,
// and save them as soft starting preferences for later games (data/hints-<list>.json). Re-running adds to what was learned.
// node learn.mjs --deck D [--hands 44] [--min 1.5] [--id X]
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
import { parseYdk, name } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const deckPath = f('deck', 'decks/L2-vand3.ydk'), H = +f('hands', 44), MIN = +f('min', 1.5), SEED0 = +f('seed', 90000);
const PAR = Math.min(+f('par', Math.max(1, os.cpus().length - 1)), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const out = f('out', 'data/hints-' + path.basename(deckPath).replace(/\.ydk$/, '') + '.json');
const base = parseYdk(fs.readFileSync(deckPath, 'utf8'));
const rngOf = (seed) => { let x = seed >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const prev = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')) : { games: 0, hits: {} };
console.log(`learning hints for ${deckPath}: ${H} hands, ${MIN} min each, ${PAR} at a time (already learned from ${prev.games} games)`);
const res = []; let k = 0, done = 0;
const play = (hi) => new Promise(ok => { const r = rngOf(SEED0 + hi * 7919); const perm = base.main.slice(); for (let i = perm.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  const t = { deck: deckPath, main: perm, hand: perm.slice(0, 5).map(c => name(c)), minutes: MIN, seed: 7 + hi, sseed: 1 + (hi % 3), hints: hi % 2 === 0 }; // half the games without hints, so learning isn't only self-confirming
  const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(t)], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = '';
  p.stdout.on('data', b => o += b); p.on('close', () => { const m = /RESULT (.*)/.exec(o); ok(m ? JSON.parse(m[1]) : null); }); });
await Promise.all(Array.from({ length: PAR }, async () => { while (k < H) { const hi = k++; const r = await play(hi); if (r) res.push(r); done++; console.log(`${done}/${H}`); } }));
// moves in the best lines of the better half of games count; a move counts once per game
const good = res.filter(r => r.keys && r.keys.length).sort((p, q) => q.v - p.v).slice(0, Math.max(1, Math.ceil(res.length / 2)));
const hits = prev.hits; for (const r of good) for (const key of new Set(r.keys)) hits[key] = (hits[key] || 0) + 1;
const games = prev.games + good.length; const w = {};
for (const [key, h] of Object.entries(hits)) if (h >= 2) w[key] = +Math.min(2, 0.8 * Math.log(1 + h)).toFixed(2);
fs.mkdirSync('data', { recursive: true }); fs.writeFileSync(out, JSON.stringify({ games, hits, w }));
console.log(`learned from ${good.length} good games (${games} total): ${Object.keys(w).length} hinted moves -> ${out}`);
