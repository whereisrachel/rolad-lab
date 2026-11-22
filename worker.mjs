// Helper PC: lends its cores to the ROLAD lab. Takes pieces of tests (one game each) from the hub on the Oracle server, runs them
// with this copy of the lab, sends results back. When there are no test pieces, it finds library lines and uploads them.
// Only runs the lab's own scripts (allow-list below) on input data; it never runs code sent over the network.
// node worker.mjs [--slots N] [--name NAME] [--nolib]      (settings also read from worker.json)
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn, execSync } from 'child_process';
import { codeVer } from './src/remote.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const CFG = fs.existsSync('worker.json') ? JSON.parse(fs.readFileSync('worker.json', 'utf8')) : {};
const HUB = CFG.hub || (fs.existsSync('data/hub.json') ? JSON.parse(fs.readFileSync('data/hub.json', 'utf8')).url : null);
if (!HUB) { console.error('No hub address: put {"hub": "http://IP:8080/<token>"} in worker.json'); process.exit(1); }
const SLOTS = +f('slots', CFG.slots || Math.max(1, os.cpus().length - 2)), NAME = f('name', CFG.name || os.hostname()), LIB = !a.includes('--nolib') && CFG.library !== false;
const ALLOW = new Set(['deepw.mjs', 'oppturn.mjs', 'robust.mjs']); const VER = codeVer(); const START = Date.now();
const log = (s) => console.log(new Date().toLocaleTimeString() + ' ' + s);
log(`ROLAD helper "${NAME}": ${SLOTS} cores, code ${VER}, hub ${HUB.replace(/\/[^/]+$/, '/…')}${LIB ? ', library lines when idle' : ''}`);
const hub = async (p, opt = {}) => { const r = await fetch(HUB + p, { ...opt, signal: AbortSignal.timeout(120000) }); if (!r.ok) throw new Error('hub HTTP ' + r.status); return r.json(); };
const safe = (p) => { const n = path.normalize(p).replace(/\\/g, '/'); if (n.startsWith('..') || path.isAbsolute(n) || !/^(decks|data)\//.test(n)) throw new Error('bad path ' + p); return n; };
const KIDS = new Set(); const track = (p) => { KIDS.add(p); p.on('close', () => KIDS.delete(p)); return p; };
const run = (script, args, ms) => new Promise(ok => { const p = track(spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', script, typeof args === 'string' ? args : JSON.stringify(args)], { stdio: ['ignore', 'pipe', 'ignore'] }));
  let o = ''; p.stdout.on('data', b => o += b); const t = setTimeout(() => p.kill(), ms); p.on('close', (code) => { clearTimeout(t); ok({ code, stdout: o }); }); });
let busy = 0, done = 0, libDone = 0, stop = false;
async function doTask(t) {
  if (!ALLOW.has(t.script)) return hub('/done', { method: 'POST', body: JSON.stringify({ id: t.id, reject: true }) });
  try { for (const [p, c] of Object.entries(t.files || {})) { const n = safe(p); fs.mkdirSync(path.dirname(n), { recursive: true }); fs.writeFileSync(n, c); }
    for (const o of t.outputs || []) { const n = safe(o); fs.mkdirSync(path.dirname(n), { recursive: true }); }
    const r = await run(t.script, t.args, 30 * 60000); const outputs = {};
    for (const o of t.outputs || []) { const n = safe(o); if (fs.existsSync(n)) { outputs[o] = fs.readFileSync(n, 'utf8'); fs.unlinkSync(n); } }
    await hub('/done', { method: 'POST', body: JSON.stringify({ id: t.id, stdout: r.stdout.slice(-200000), outputs, by: NAME }) }); done++;
  } catch (e) { try { await hub('/done', { method: 'POST', body: JSON.stringify({ id: t.id, reject: true }) }); } catch {} log('piece failed: ' + e.message); } }
// idle work (no test pieces waiting):
//  3 of 4: play the opponent's turn into a stored library board (random board, deck and hand) and upload the result: the training
//          data the lab learns its own scoring from (what end boards actually survive);
//  1 of 4: one hand-trap-aware library line (robust.mjs) on a common start, one core.
let idleN = 0, evDone = 0; const tagOf = (slotI) => 'helper-' + NAME.replace(/[^\w-]/g, '').slice(0, 20) + '-s' + slotI;
async function doRobustLine(slotI) { const tag = tagOf(slotI); const before = new Set(fs.existsSync('data/lib-L2-vand3') ? fs.readdirSync('data/lib-L2-vand3') : []);
  await new Promise(ok => { const p = track(spawn(process.execPath, ['--no-warnings', 'libbuild.mjs', '--deck', 'decks/L2-vand3.ydk', '--min', process.env.HELPER_MIN || '2', '--par', '1', '--hands', '1', '--tag', tag, '--robust-only'], { stdio: 'ignore', env: { ...process.env, ROBUST_PAR: '1' } })); p.on('close', ok); });
  for (const fn of fs.readdirSync('data/lib-L2-vand3').filter(x => x.endsWith('.json') && !before.has(x) && x.startsWith(tag))) {
    try { const x = JSON.parse(fs.readFileSync(`data/lib-L2-vand3/${fn}`, 'utf8')); await hub('/put-line', { method: 'POST', body: JSON.stringify(x) }); libDone++; } catch (e) { log('upload failed: ' + e.message); } } }
async function doSurvival(slotI) { const dir = 'data/lib-L2-vand3'; if (!fs.existsSync(dir)) return new Promise(r => setTimeout(r, 30000));
  const files = fs.readdirSync(dir).filter(x => x.endsWith('.json') && !x.startsWith('seq-')); if (!files.length) return new Promise(r => setTimeout(r, 30000));
  const fn = files[Math.floor(Math.random() * files.length)]; let x; try { x = JSON.parse(fs.readFileSync(`${dir}/${fn}`, 'utf8')); } catch { return; }
  if (!x.raw || !x.order || !x.extra) return; const OPPS = ['o_ss_panama', 'o_elfnote'].filter(o => fs.existsSync(`decks/${o}.ydk`)); const opp = OPPS.length ? OPPS[Math.floor(Math.random() * OPPS.length)] : 'o_ss', seed = 1 + Math.floor(Math.random() * 1e6);
  const r = await run('oppturn.mjs', { line: `${dir}/${fn}`, opp: `decks/${opp}.ydk`, minutes: 0.5, hands: 1, oppSeed: seed, choke: false }, 20 * 60000);
  const m = /OPPTURN (.*)/.exec(r.stdout); if (!m) return; const z = JSON.parse(m[1]); if (!z.t1) return;
  try { await hub('/put-eval', { method: 'POST', body: JSON.stringify({ id: `${NAME.replace(/[^\w-]/g, '')}-${Date.now().toString(36)}-${slotI}`, list: 'L2-vand3', line: fn.replace('.json', ''), opp, seed, ver: VER, t1: z.t1, margin: z.margin, ourBoardLeft: z.ourBoardLeft, theirBoard: z.theirBoard, otk: z.otk, ourAfterT1: z.ourAfterT1, by: NAME }) }); evDone++; } catch (e) { log('upload failed: ' + e.message); } }
// idle work is kept short (one opponent turn, about 1-2 min) so test pieces from the PC get a free core quickly; the slow hand-trap lines are left to the Oracle servers
async function doLibrary(slotI) { idleN++; await doSurvival(slotI); }
async function slot(i) {
  while (!stop) {
    let t = null; try { const r = await hub(`/claim?worker=${encodeURIComponent(NAME)}&n=1&slots=${SLOTS}&busy=${busy}&ver=${VER}`); t = (r.tasks || [])[0]; } catch { await new Promise(r => setTimeout(r, 30000)); continue; }
    busy++; try { if (t) await doTask(t); else if (LIB) await doLibrary(i); else await new Promise(r => setTimeout(r, 15000)); } finally { busy--; }
  } }
// keep a copy of the shared library (the helper steers toward hands the library has seen least, and re-solves common starts)
let since = ''; async function pullLibrary() { try { const arr = await hub('/all?since=' + encodeURIComponent(since)); for (const x of arr) { if (!x.list || !x.id) continue; const d = `data/lib-${x.list}`; fs.mkdirSync(d, { recursive: true }); fs.writeFileSync(`${d}/${x.id}.json`, JSON.stringify(x)); if ((x.when || '') > since) since = x.when; } log(`library copy: ${arr.length} new lines`); } catch (e) { log('library pull failed: ' + e.message); } }
if (LIB) { await pullLibrary(); setInterval(pullLibrary, 30 * 60000); }
setInterval(() => log(`${done} test pieces done, ${evDone} opponent turns played for the learning data, ${libDone} library lines uploaded, ${busy}/${SLOTS} cores busy`), 10 * 60000);
// new code: check GitHub every 30 min; if there is an update, finish the current work and restart (the .bat starts it again)
setInterval(() => { try { const before = execSync('git rev-parse HEAD').toString().trim(); execSync('git pull -q', { stdio: 'ignore' }); const after = execSync('git rev-parse HEAD').toString().trim();
  if (before !== after) { log('lab update downloaded: restarting now (unfinished pieces go back to the queue)'); stop = true; for (const p of KIDS) { try { p.kill(); } catch {} } if (process.platform === 'win32') for (const p of KIDS) { try { execSync(`taskkill /pid ${p.pid} /T /F`, { stdio: 'ignore' }); } catch {} } setTimeout(() => process.exit(3), 3000); } } catch {} }, 30 * 60000);
await Promise.all(Array.from({ length: SLOTS }, (_, i) => slot(i)));
