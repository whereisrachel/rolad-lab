// Line library builder: deals random opening hands from a list, finds the best line on each (same search as the tests),
// and saves every line to data/lib-<list>/ so later tests can replay them (more lines tried on every hand, less search luck).
// Runs until stopped. Built for a spare machine (e.g. the Oracle server) but runs anywhere.
// node libbuild.mjs --deck decks/L2-vand3.ydk [--min 2] [--par N] [--tag oracle]
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
import { parseYdk, name } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const DECK = f('deck', 'decks/L2-vand3.ydk'), MIN = +f('min', 2), PAR = +f('par', Math.max(1, os.cpus().length)), TAG = f('tag', os.hostname());
const LIST = path.basename(DECK, '.ydk'); const OUT = `data/lib-${LIST}`; fs.mkdirSync(OUT, { recursive: true });
const deck = parseYdk(fs.readFileSync(DECK, 'utf8')); const SCN = ['none', 'ash', 'imperm', 'droll'];
const HINTS = `data/hints-${LIST}.json`, CARDV = `data/cardv-${LIST}.json`;
const log = (s) => { const l = new Date().toISOString().slice(0, 19) + ' ' + s; console.log(l); fs.appendFileSync(`${OUT}/build-${TAG}.log`, l + '\n'); };
let seq = +(fs.existsSync(`${OUT}/seq-${TAG}`) ? fs.readFileSync(`${OUT}/seq-${TAG}`, 'utf8') : 0) || 0;
const rngOf = (seed) => { let x = seed >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const tagN = [...TAG].reduce((s, c) => (s * 31 + c.charCodeAt(0)) >>> 0, 7);
function one(n) { const r = rngOf(tagN ^ (n * 2654435761)); const perm = deck.main.slice(); for (let k = perm.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [perm[k], perm[j]] = [perm[j], perm[k]]; }
  const scn = SCN[n % SCN.length]; const id = `${TAG}-${n}`; const raw = `${OUT}/${id}.json`;
  const t = { deck: DECK, main: perm, hand: perm.slice(0, 5).map(name), minutes: MIN, seed: 7, sseed: 1, scn, learn: false, rawOut: raw + '.tmp',
    hintsFile: fs.existsSync(HINTS) ? HINTS : undefined, cardvFile: fs.existsSync(CARDV) ? CARDV : undefined };
  return new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(t)], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = '';
    p.stdout.on('data', b => o += b); p.on('close', () => { try { const x = JSON.parse(fs.readFileSync(raw + '.tmp', 'utf8')); x.scn = scn; x.id = id; x.list = LIST; x.when = new Date().toISOString(); fs.writeFileSync(raw, JSON.stringify(x)); fs.unlinkSync(raw + '.tmp'); ok(x.v); } catch { ok(null); } }); }); }
log(`line library: ${LIST}, ${MIN} min per hand, ${PAR} at a time, saving to ${OUT}`);
let done = 0, t0 = Date.now();
await Promise.all(Array.from({ length: PAR }, async () => { for (;;) { const n = seq++; fs.writeFileSync(`${OUT}/seq-${TAG}`, String(seq)); const v = await one(n); done++;
  if (done % 10 === 0) log(`${done} hands this session (${(done / ((Date.now() - t0) / 3600000)).toFixed(1)}/h), last ${v}`); } }));
