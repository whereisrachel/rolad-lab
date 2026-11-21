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
// Variety: hands are steered toward card combinations the library has seen least. Each turn 24 random hands are dealt and the
// one whose card pairs are rarest in the library is played. A line counts as new when its signature (the cards it used, the
// opponent's hand trap) is not in the library yet, or when it beats the stored best for that signature by more than 0.1.
const pairs = new Map(), routes = new Set(), boards = new Map(); const pk = (a, b) => a < b ? a + '|' + b : b + '|' + a;
// route = the cards the line used + the opponent's hand trap; end board = the cards left on your field (stats stripped)
const routeOf = (x) => x.scn + ':' + x.hand.filter((_, i) => x.used && x.used[i]).sort().join('+');
const boardOf = (x) => { const b = String(x.board || ''); const m = [...b.matchAll(/(?:M\d|EMZ-[LR]|S\d|FZ|Field):\s*([^|\n]+?)(?=\s*(?:\|\||\n|$))/g)].map(z => z[1].replace(/\s+(Lv|L)\d.*$/, '').replace(/\s*\(Set\)$/, ' (Set)').trim()).sort(); return x.scn + ':' + m.join('+'); };
function learnFile(x) { const hs = [...new Set(x.hand)]; for (let i = 0; i < hs.length; i++) for (let j = i + 1; j < hs.length; j++) pairs.set(pk(hs[i], hs[j]), (pairs.get(pk(hs[i], hs[j])) || 0) + 1);
  const r = routeOf(x), b = boardOf(x); const nr = !routes.has(r), ob = boards.get(b); routes.add(r); if (ob === undefined || x.v > ob) boards.set(b, x.v);
  return ob === undefined ? 'new board' : nr ? 'new route' : x.v > ob + 0.1 ? 'better' : 'repeat'; }
for (const fn of fs.readdirSync(OUT)) if (fn.endsWith('.json')) { try { learnFile(JSON.parse(fs.readFileSync(`${OUT}/${fn}`, 'utf8'))); } catch {} }
const recent = []; // last 100 hands: 1 if they added something (new board, new route or a better score), else 0
const stats = { 'new board': 0, 'new route': 0, better: 0, repeat: 0 };
function one(n) { const r = rngOf(tagN ^ (n * 2654435761)); let perm = null, bestC = Infinity;
  for (let tries = 0; tries < 24; tries++) { const p = deck.main.slice(); for (let k = p.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [p[k], p[j]] = [p[j], p[k]]; }
    const hs = [...new Set(p.slice(0, 5).map(name))]; let c = 0; for (let i = 0; i < hs.length; i++) for (let j = i + 1; j < hs.length; j++) c += pairs.get(pk(hs[i], hs[j])) || 0; c /= Math.max(1, hs.length * (hs.length - 1) / 2);
    if (c < bestC) { bestC = c; perm = p; } }
  const scn = SCN[n % SCN.length]; const id = `${TAG}-${n}`; const raw = `${OUT}/${id}.json`;
  const t = { deck: DECK, main: perm, hand: perm.slice(0, 5).map(name), minutes: MIN, seed: 7, sseed: 1, scn, learn: false, rawOut: raw + '.tmp',
    hintsFile: fs.existsSync(HINTS) ? HINTS : undefined, cardvFile: fs.existsSync(CARDV) ? CARDV : undefined };
  return new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(t)], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = '';
    p.stdout.on('data', b => o += b); p.on('close', () => { try { const x = JSON.parse(fs.readFileSync(raw + '.tmp', 'utf8')); x.scn = scn; x.id = id; x.list = LIST; x.when = new Date().toISOString(); const m = /RESULT (.*)/.exec(o); if (m) { try { x.board = JSON.parse(m[1]).board; } catch {} } x.novelty = learnFile(x); stats[x.novelty]++; recent.push(x.novelty === 'repeat' ? 0 : 1); if (recent.length > 100) recent.shift(); fs.writeFileSync(raw, JSON.stringify(x)); fs.unlinkSync(raw + '.tmp'); ok(x.v); } catch { ok(null); } }); }); }
log(`line library: ${LIST}, ${MIN} min per hand, ${PAR} at a time, saving to ${OUT}`);
let done = 0, t0 = Date.now();
await Promise.all(Array.from({ length: PAR }, async () => { for (;;) { const n = seq++; fs.writeFileSync(`${OUT}/seq-${TAG}`, String(seq)); const v = await one(n); done++; if (v === null) { log(`hand ${n} failed (no result)`); await new Promise(r => setTimeout(r, 30000)); }
  if (done % 5 === 0) log(`${done} hands this session (${(done / ((Date.now() - t0) / 3600000)).toFixed(1)}/h), last ${v}; library: ${boards.size} distinct end boards, ${routes.size} distinct routes; this session new boards ${stats['new board']}, new routes ${stats['new route']}, better ${stats.better}, repeats ${stats.repeat}; still finding something new on ${recent.length ? Math.round(100 * recent.reduce((p, q) => p + q, 0) / recent.length) : '-'}% of the last ${recent.length} hands`); } }));
