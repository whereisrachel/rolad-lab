// Line library builder: deals random opening hands from a list, finds the best line on each (same search as the tests),
// and saves every line to data/lib-<list>/ so later tests can replay them (more lines tried on every hand, less search luck).
// Runs until stopped. Built for a spare machine (e.g. the Oracle server) but runs anywhere.
// node libbuild.mjs --deck decks/L2-vand3.ydk [--min 2] [--par N] [--tag oracle]
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn, execSync } from 'child_process';
import { parseYdk, name } from './src/cards.mjs'; import { novelty, routeOf } from './src/novelty.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const DECK = f('deck', 'decks/L2-vand3.ydk'), MIN = +f('min', 2), PAR = +f('par', Math.max(1, os.cpus().length)), TAG = f('tag', os.hostname()), ROB = +f('robust', 1), HANDS = +f('hands', 0), ROBONLY = a.includes('--robust-only'), SHARD = String(f('shard', '0/1')).split('/').map(Number); // --shard i/n: this server takes 1/n of the starts (no duplicate work across servers) // --hands N: stop after N hands (helper PCs); --robust-only: only hand-trap-aware lines
const LIST = path.basename(DECK, '.ydk'); const OUT = `data/lib-${LIST}`; fs.mkdirSync(OUT, { recursive: true });
// Oracle servers (Nov 23): lab tests first. A helper (worker.mjs) runs beside this builder and takes test pieces from the hub;
// while it has work (or had some in the last 3 min) the builder stops and frees every core, and only builds lines when the hub is empty.
// Linux servers only (never on a helper PC, never with --hands); the hub password is read from this server's own hub program, never stored.
const KIDS = new Set(); const kid = (p) => { KIDS.add(p); p.on('close', () => KIDS.delete(p)); return p; };
const HUBW = process.platform === 'linux' && !HANDS && !a.includes('--nohub'); const BUSYF = 'data/worker-busy.json'; let hubOn = false;
const hubBusy = () => { if (!HUBW) return false; try { const z = JSON.parse(fs.readFileSync(BUSYF, 'utf8')); return Date.now() - z.at < 30000 && (z.busy > 0 || Date.now() - z.last < 180000); } catch { return false; } };
const free = async () => { let said = false; while (hubBusy()) { if (!said) { log('hub has test pieces: library paused, cores lent to the lab'); said = true; } await new Promise(r => setTimeout(r, 5000)); } if (said) log('hub empty again: library resumed'); };
function findTok() { try { for (const d of fs.readdirSync('/proc')) { if (!/^\d+$/.test(d)) continue; let c; try { c = fs.readFileSync(`/proc/${d}/cmdline`, 'utf8').split('\0'); } catch { continue; } if (!c.some(x => x.endsWith('libserve.mjs'))) continue; const i = c.indexOf('--token'); if (i >= 0 && c[i + 1]) return c[i + 1]; } } catch {}
  try { const m = /--token[ =](\S+)/.exec(execSync('systemctl cat libserve 2>/dev/null').toString()); if (m) return m[1]; } catch {} return ''; }
function startHelper() { const tok = findTok(); if (!tok) { setTimeout(startHelper, 30000); return; }
  const lf = fs.openSync(`data/worker-${TAG}.log`, 'a');
  const w = spawn(process.execPath, ['--no-warnings', 'worker.mjs', '--hub', (process.env.LIBBUILD_HUB || 'http://40.233.91.8:8080/') + tok, '--nolib', '--nopull', '--slots', String(PAR), '--name', 'oracle-' + os.hostname().replace(/[^\w-]/g, '').slice(0, 20), '--busyfile', BUSYF], { stdio: ['ignore', lf, lf] });
  if (!hubOn) log(`helper started beside the builder: ${PAR} cores offered to the hub`); hubOn = true;
  w.on('close', (code) => { log(`helper stopped (code ${code}), restarting in 60 s`); setTimeout(startHelper, 60000); }); }
// while the helper is busy, builder games still running are stopped so test pieces get full cores (a stopped hand is simply not saved)
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
// (novelty rule: src/novelty.mjs) route = the cards the line used + the opponent's hand trap; end board = the cards left on your field (stats stripped)

const boardOf = (x) => { const b = String(x.board || ''); const m = [...b.matchAll(/(?:M\d|EMZ-[LR]|S\d|FZ|Field):\s*([^|\n]+?)(?=\s*(?:\|\||\n|$))/g)].map(z => z[1].replace(/\s+(Lv|L)\d.*$/, '').replace(/\s*\(Set\)$/, ' (Set)').trim()).sort(); return x.scn + ':' + m.join('+'); };
const judge = novelty();
function learnFile(x) { const hs = [...new Set(x.hand)]; for (let i = 0; i < hs.length; i++) for (let j = i + 1; j < hs.length; j++) pairs.set(pk(hs[i], hs[j]), (pairs.get(pk(hs[i], hs[j])) || 0) + 1);
  const r = routeOf(x), b = boardOf(x); routes.add(r); const ob = boards.get(b); if (ob === undefined || x.v > ob) boards.set(b, x.v); return judge(x); }
// existing lines are learned oldest first so 'new' means new at the time
{ const old = []; for (const fn of fs.readdirSync(OUT)) if (fn.endsWith('.json')) { try { old.push(JSON.parse(fs.readFileSync(`${OUT}/${fn}`, 'utf8'))); } catch {} } old.sort((p, q) => String(p.when || '').localeCompare(String(q.when || ''))); for (const x of old) learnFile(x); }
const recent = []; // last 100 hands: 1 if they added something (new board, new route or a better score), else 0
const stats = { 'new route': 0, better: 0, repeat: 0 };
function one(n) { const r = rngOf(tagN ^ (n * 2654435761)); let perm = null, bestC = Infinity;
  for (let tries = 0; tries < 24; tries++) { const p = deck.main.slice(); for (let k = p.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [p[k], p[j]] = [p[j], p[k]]; }
    const hs = [...new Set(p.slice(0, 5).map(name))]; let c = 0; for (let i = 0; i < hs.length; i++) for (let j = i + 1; j < hs.length; j++) c += pairs.get(pk(hs[i], hs[j])) || 0; c /= Math.max(1, hs.length * (hs.length - 1) / 2);
    if (c < bestC) { bestC = c; perm = p; } }
  const scn = SCN[n % SCN.length]; const id = `${TAG}-${n}`; const raw = `${OUT}/${id}.json`;
  const t = { deck: DECK, main: perm, hand: perm.slice(0, 5).map(name), minutes: MIN, seed: 7, sseed: 1, scn, learn: false, rawOut: raw + '.tmp',
    hintsFile: fs.existsSync(HINTS) ? HINTS : undefined, cardvFile: fs.existsSync(CARDV) ? CARDV : undefined };
  return new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(t)], { stdio: ['ignore', 'pipe', 'ignore'] }); kid(p); let o = '';
    p.stdout.on('data', b => o += b); p.on('close', () => { try { const x = JSON.parse(fs.readFileSync(raw + '.tmp', 'utf8')); x.scn = scn; x.id = id; x.list = LIST; x.when = new Date().toISOString(); const m = /RESULT (.*)/.exec(o); if (m) { try { x.board = JSON.parse(m[1]).board; } catch {} } x.novelty = learnFile(x); stats[x.novelty]++; recent.push(x.novelty === 'repeat' ? 0 : 1); if (recent.length > 100) recent.shift(); fs.writeFileSync(raw, JSON.stringify(x)); fs.unlinkSync(raw + '.tmp'); ok(x.v); } catch { ok(null); } }); }); }

// Robust worker: re-solves the most common ways to start (from the stored lines) with the hand-trap-aware line choice
// (robust.mjs: several strong lines, each played into Ash / Imperm / Droll at their worst timing, best overall kept).
const startOf = (x) => { const out = []; for (const e of x.raw || []) { if (e.seat !== 0 || !e.label) continue; const m = /^(?:Activate|Normal Summon|Set|Special Summon[^(]*?) (.+?) \(hand\)/.exec(e.label); if (m && !out.includes(m[1])) out.push(m[1]); if (out.length >= 2) break; } return out; };
const inProgress = new Set(); const hashK = (k) => [...k].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
function nextStart() { const cnt = new Map(), done = new Set(); for (const fn of fs.readdirSync(OUT)) if (fn.endsWith('.json')) { try { const x = JSON.parse(fs.readFileSync(`${OUT}/${fn}`, 'utf8')); const k = (x.robustStart || startOf(x)).slice().sort().join('+'); if (!k) continue; if (x.scn === 'robust') done.add(k); else cnt.set(k, (cnt.get(k) || 0) + 1); } catch {} }
  const k = [...cnt.entries()].filter(([k]) => !done.has(k) && !inProgress.has(k) && (SHARD[1] <= 1 || hashK(k) % SHARD[1] === SHARD[0])).sort((a, b) => b[1] - a[1])[0]; if (!k) return null; inProgress.add(k[0]); return { start: k[0].split('+'), seen: k[1], key: k[0] }; }
function oneRobust(n) { const st = nextStart(); if (!st) return Promise.resolve(null); const release = () => inProgress.delete(st.key); const r = rngOf(tagN ^ (n * 40503)); const rest = deck.main.slice();
  const hand = []; for (const c of st.start) { const i = rest.findIndex(x => name(x) === c); if (i < 0) { release(); return Promise.resolve(null); } hand.push(rest.splice(i, 1)[0]); }
  for (let k = rest.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [rest[k], rest[j]] = [rest[j], rest[k]]; } while (hand.length < 5) hand.push(rest.shift());
  const id = `${TAG}-r${n}`; const raw = `${OUT}/${id}.json`;
  const t = { deck: DECK, hand: hand.map(name), minutes: MIN / 2, cands: 3, adapt: 0.15, cardvFile: fs.existsSync(CARDV) ? CARDV : undefined, saveTo: raw + '.tmp' };
  return new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'robust.mjs', JSON.stringify(t)], { stdio: ['ignore', 'ignore', 'ignore'] }); kid(p);
    p.on('close', () => { try { const x = JSON.parse(fs.readFileSync(raw + '.tmp', 'utf8')); Object.assign(x, { scn: 'robust', id, list: LIST, when: new Date().toISOString(), robustStart: st.start, hand: hand.map(name) });
      fs.writeFileSync(raw, JSON.stringify(x)); fs.unlinkSync(raw + '.tmp'); log(`robust line for start ${st.start.join(' + ')} (seen ${st.seen}x): no trap ${x.v}, overall ${x.robust} (Ash ${x.threats.ash.v}, Imperm ${x.threats.imperm.v}, Droll ${x.threats.droll.v})`); release(); ok(x.robust); } catch { release(); ok(null); } }); }); }
if (HUBW) startHelper();
if (HUBW) setInterval(() => { if (hubBusy() && KIDS.size) { for (const p of KIDS) { try { p.kill(); } catch {} } } }, 3000);
log(`line library: ${LIST}, ${MIN} min per hand, ${PAR} at a time, saving to ${OUT}`);
let done = 0, t0 = Date.now();
let rseq = 0, nh = 0; const more = () => !HANDS || nh++ < HANDS; await Promise.all(Array.from({ length: PAR }, async (_, w) => { if (ROBONLY || w < Math.min(ROB, PAR - 1)) { while (more()) { await free(); const v = await oneRobust(rseq++ + (HANDS ? Date.now() % 100000 : 0)); if (v === null && !HANDS) await new Promise(r => setTimeout(r, 60000)); } return; } while (more()) { await free(); const n = seq++; fs.writeFileSync(`${OUT}/seq-${TAG}`, String(seq)); const v = await one(n); done++; if (v === null) { log(`hand ${n} failed (no result)`); await new Promise(r => setTimeout(r, 30000)); }
  if (done % 5 === 0) log(`${done} hands this session (${(done / ((Date.now() - t0) / 3600000)).toFixed(1)}/h), last ${v}; library: ${boards.size} distinct end boards, ${routes.size} distinct routes; this session new routes ${stats['new route']}, better ${stats.better}, repeats ${stats.repeat}; still finding something new on ${recent.length ? Math.round(100 * recent.reduce((p, q) => p + q, 0) / recent.length) : '-'}% of the last ${recent.length} hands`); } }));
