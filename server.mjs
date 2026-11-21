// ROLAD Lab, local edition: runs entirely on this computer. Start with "Start ROLAD Lab.bat" (or: node server.mjs).
// Serves the app at http://localhost:4747 and runs one job at a time using all processor cores but one.
import http from 'http'; import fs from 'fs'; import path from 'path'; import os from 'os'; import { spawn } from 'child_process'; import { fileURLToPath } from 'url';
const ROOT = path.dirname(fileURLToPath(import.meta.url)); process.chdir(ROOT);
const PORT = +(process.env.PORT || 4747); const THREADS = Math.max(1, os.cpus().length - 1); const NODE = process.execPath;
// started by the nightly task while the app is already open: hand the explorer run to the open app and exit
if (process.argv.includes('--explore-now')) { try { const r = await fetch(`http://127.0.0.1:${PORT}/api/run`, { method: 'POST', body: JSON.stringify({ kind: 'explore', nightly: true, macros: 150, title: 'Nightly explorer' }) }); if (r.ok) { console.log('queued in the running app'); process.exit(0); } } catch {} }
for (const d of ['reports', 'results', 'data', 'lines', 'decks/user']) fs.mkdirSync(d, { recursive: true });
const JF = 'data/jobs.json'; let jobs = []; try { jobs = JSON.parse(fs.readFileSync(JF, 'utf8')); } catch {}
for (const j of jobs) if (j.status === 'running') { j.status = 'queued'; j.note = 'restarted after the app was closed'; }
const save = () => fs.writeFileSync(JF, JSON.stringify(jobs.slice(-300), null, 1));
let current = null;

// ---- job steps --------------------------------------------------------------------------
function run(args, env = {}, onLine = () => {}) {
  return new Promise((ok) => { const p = spawn(NODE, ['--no-warnings', ...args], { cwd: ROOT, env: { ...process.env, LEARN: '1', ROLAD_FAST: process.env.ROLAD_FULL ? '' : '1', ...env } }); current.proc = p; let out = '';
    const take = (b) => { const s = b.toString(); out += s; for (const l of s.split(/\r?\n/)) if (l.trim()) { onLine(l.trim()); current.last = l.trim().slice(0, 160); } };
    p.stdout.on('data', take); p.stderr.on('data', take); p.on('close', (code) => ok({ code, out })); });
}
async function resolveDeck(p) { const r = await run(['resolve-deck.mjs', p]); if (r.code) throw new Error(r.out.trim()); return r.out.trim().split(/\r?\n/).pop(); }
const prog = (j, done, total) => { j.progress = total ? Math.round(100 * done / total) : j.progress; };
const STEPS = {
  async pair(j) {
    const A = await resolveDeck(j.deckA), B = await resolveDeck(j.deckB); const out = `reports/pair-${j.id}.md`;
    const total = j.n * 2 * j.scn.split(',').length;
    const r = await run(['realtest.mjs', A, B, '--mode', 'random', '--n', String(j.n), '--scn', j.scn, '--macros', String(j.macros), '--ht', '0', '--seeds', '1', '--passes', '1', '--threads', String(THREADS), '--out', out], {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2] || total); });
    if (r.code || !fs.existsSync(out)) throw new Error('test failed: ' + r.out.slice(-400)); j.report = out;
  },
  async screen(j) {
    const A = await resolveDeck(j.deckA); const cf = `results/cands-${j.id}.txt`; fs.writeFileSync(cf, j.cands);
    const r = await run(['screen.mjs', '--deck', A, '--slot', j.slot, '--cands', cf, '--n', String(j.n), '--scn', j.scn, '--macros', String(j.macros), '--ht', '0', '--seeds', '1', '--threads', String(THREADS)], {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); });
    if (r.code || !fs.existsSync('results/screen.md')) throw new Error('screen failed: ' + r.out.slice(-400)); const out = `reports/screen-${j.id}.md`; fs.copyFileSync('results/screen.md', out); j.report = out;
  },
  async explore(j) {
    const A = await resolveDeck(j.deckA); const dir = `results/explore-${j.id}`; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
    const seed = String(j.id % 100000), common = ['--deck', A, '--n', String(j.hands || 200), '--seed', seed, '--macros', String(j.macros), '--threads', String(THREADS)];
    const step = async (name, args, pct) => { j.stage = name; const r = await run(['explore.mjs', ...args], { GITHUB_RUN_ID: String(j.id) }, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) j.progress = Math.round(pct[0] + (pct[1] - pct[0]) * m[1] / m[2]); }); if (r.code) throw new Error(name + ' failed: ' + r.out.slice(-400)); j.progress = pct[1]; return r.out; };
    await step('playing fresh hands', ['base', ...common], [0, 15]); fs.renameSync('results/base-0.json', `${dir}/base-0.json`);
    j.diag = (await step('finding failures', ['fails', ...common, '--merge', dir, '--fails', String(j.fails || 20)], [15, 16])).split('\n').filter(l => /needs|failing/.test(l)).join(' | ');
    await step('searching all cards', ['pool', ...common, '--poolmain', String(j.poolmain || 100), '--pooled', String(j.pooled || 20)], [16, 18]);
    await step('replaying failing hands with each card', ['rescue', ...common], [18, 97]); fs.renameSync('results/res-0.json', `${dir}/res-0.json`);
    await step('ranking and learning', ['rank', ...common, '--merge', dir, '--confirm', String(j.confirm ?? 3)], [97, 100]);
    j.report = `reports/explore-${j.id}.md`;
    for (const B of (fs.existsSync('data/explore-confirm.txt') ? fs.readFileSync('data/explore-confirm.txt', 'utf8').split('\n').filter(Boolean) : []))
      addJob({ kind: 'pair', deckA: j.deckA, deckB: B, n: 300, scn: 'none,ash,imperm', macros: 300, title: 'Explorer find: ' + path.basename(B, '.ydk').replace(/^\d+-/, '').replace(/_/g, ' ') });
  },
  async robbench(j) { // which line to play when you don't know their hand trap, on the guide hands
    j.stage = 'robust lines on the guide hands'; const L = path.basename(j.deckA || 'decks/L2-vand3.ydk', '.ydk');
    const r = await run(['robbench.mjs', j.deckA || 'decks/L2-vand3.ydk', String(j.minutes || 1)], j.only ? { ONLY: j.only } : {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); });
    if (r.code || !fs.existsSync(`reports/robust-${L}.md`)) throw new Error('robust lines failed: ' + r.out.slice(-400)); j.report = `reports/robust-${L}.md`; j.last = 'done -> ' + j.report;
  },
  async bench(j) { // line finder test on the guide hands, no helpers
    j.stage = 'searching each guide hand from scratch';
    const r = await run(['bench.mjs', String(j.minutes || 10)], { ...(j.only ? { ONLY: j.only } : {}), ...(j.deckA ? { DECK: j.deckA } : {}) }, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); });
    const rep = j.deckA ? `reports/deep-bench-${path.basename(j.deckA, '.ydk')}.md` : 'reports/deep-bench.md'; if (r.code || !fs.existsSync(rep)) throw new Error('bench failed: ' + r.out.slice(-400)); j.report = rep;
  },
  async deepscreen(j) { // candidate cards get their own lines found (line finder), same hands as a control; optional planted-card check
    j.stage = 'finding lines for each candidate card'; const A = await resolveDeck(j.deckA);
    const args = ['deepscreen.mjs', '--deck', A, '--id', String(j.id), '--hands', String(j.hands || 15), '--min', String(j.min || 1.5), '--cands', String(j.cands ?? 40), '--edcands', String(j.edcands ?? 10)]; if (j.plant) args.push('--plant', j.plant); if (j.htscn) args.push('--scn', j.htscn); if (j.weak) args.push('--weak', String(j.weak), '--pool', String(j.pool || 100), '--premin', String(j.premin || 1), '--cut', String(j.cut || 7));
    const r = await run(args, {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); else if (/^deep screen|^weak hands/.test(l)) j.diag = (j.diag ? j.diag + ' | ' : '') + l; });
    const out = `reports/deepscreen-${j.id}.md`; if (r.code || !fs.existsSync(out)) throw new Error('deep screen failed: ' + r.out.slice(-400)); j.report = out;
  },
  async decktest(j) { // the LIST changed (card added to the Deck, or +1/-1), same hands, line finder from scratch
    j.stage = 'playing each version of the list'; const A = await resolveDeck(j.deckA);
    const r = await run(['decktest.mjs', '--deck', A, '--id', String(j.id), '--hands', String(j.hands || 22), '--min', String(j.min || 2), '--scn', j.htscn || 'none', '--variants', JSON.stringify(j.variants || [])], {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); else if (/^deck test/.test(l)) j.diag = l; });
    const out = `reports/decktest-${j.id}.md`; if (r.code || !fs.existsSync(out)) throw new Error('deck test failed: ' + r.out.slice(-400)); j.report = out;
  },
  async findlist(j) { // every stage by itself: noise, candidates, rounds, new list, fresh-hand check, report
    j.stage = 'finding a better list'; const A = await resolveDeck(j.deckA); const args = ['findlist.mjs', '--deck', A, '--id', String(j.resume || j.id)]; if (j.resume) args.push('--resume'); if (j.mini) args.push('--mini'); if (j.cuts !== undefined) args.push('--cuts', String(j.cuts)); if (j.noplus) args.push('--noplus'); if (j.fixed) args.push('--fixed'); if (j.smart) args.push('--smart'); if (j.t2) args.push('--t2', String(j.t2)); if (j.t2min) args.push('--t2min', String(j.t2min)); if (j.only) args.push('--only', String(j.only)); if (j.retest) args.push('--retest'); if (j.versions) args.push('--versions', typeof j.versions === 'string' ? j.versions : JSON.stringify(j.versions)); if (j.noshare) args.push('--noshare'); for (const k of ['h1', 'h2', 'h3', 'hv', 'adds', 'eds', 'keep2', 'keep3', 'min']) if (j[k] !== undefined) args.push('--' + k, String(j[k]));
    const r = await run(args, {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); else if (/^(stage|noise|candidates|Extra Deck use|findlist)/.test(l)) { if (/^stage/.test(l)) j.stage = l; j.diag = (j.diag ? j.diag + ' | ' : '') + l; } });
    const out = `reports/findlist-${j.resume || j.id}.md`; if (r.code || !fs.existsSync(out)) throw new Error('find a better list failed: ' + r.out.slice(-400)); j.report = out;
  },
  async learn(j) { // learn line hints for a list from its own games
    j.stage = 'learning hints'; const A = await resolveDeck(j.deckA);
    const r = await run(['learn.mjs', '--deck', A, '--hands', String(j.hands || 44), '--min', String(j.min || 1.5)], {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); else if (/learned from/.test(l)) j.diag = l; });
    if (r.code) throw new Error('learning failed: ' + r.out.slice(-400));
  },
  async cardvalue(j) { // learn card values for a list (what each card alone with 4 blanks reaches), used to guide the line finder
    j.stage = 'learning card values'; const A = await resolveDeck(j.deckA); let pass = '';
    const r = await run(['cardvalue.mjs', '--deck', A, '--min', String(j.min || 1.5), '--passes', String(j.passes || 2)], {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); else if (/pass \d/.test(l)) j.stage = 'learning card values, ' + (/pass \d+\/\d+/.exec(l) || [''])[0]; else if (/saved/.test(l)) j.diag = l; });
    if (r.code) throw new Error('card values failed: ' + r.out.slice(-400));
  },
  async poolscan(j) { // every legal card, tested inside the list's own lines
    j.stage = 'recording your lines'; const A = await resolveDeck(j.deckA);
    const r = await run(['poolscan.mjs', '--deck', A, '--id', String(j.id), ...(j.relines ? ['--relines'] : []), ...(j.pkgonly ? ['--pkgonly'] : []), ...(j.archonly ? ['--archonly'] : []), ...(j.tb ? ['--tb', String(j.tb)] : [])], {}, (l) => { const m = /^(\d+)\/(\d+)/.exec(l); if (m) prog(j, +m[1], +m[2]); else if (/stage \d\/3/.test(l)) j.stage = l.replace(/^\[[^\]]*\]\s*/, ''); else if (/stage 1 done|whole pool/.test(l)) j.diag = l.replace(/^\[[^\]]*\]\s*/, ''); });
    const out = `reports/poolscan-${j.id}.md`; if (r.code || !fs.existsSync(out)) throw new Error('pool screen failed: ' + r.out.slice(-400)); j.report = out;
  },
  async calibrate(j) {
    const dir = `results/cal-${j.id}`; fs.mkdirSync(dir, { recursive: true }); const T = JSON.parse(fs.readFileSync('data/guide_tests.json', 'utf8'));
    for (let i = 0; i < T.length; i++) { j.stage = 'guide hand ' + (i + 1) + '/' + T.length; await run(['guidecheck.mjs', 'decks/ROLAD-L2.ydk', '22'], { ONLY: T[i].id, MAC: '800', PAT: '400', JSONOUT: `${dir}/cal.jsonl` }); j.progress = Math.round(100 * (i + 1) / T.length); }
    const r = await run(['calib.mjs', 'merge', dir]); if (r.code) throw new Error(r.out.slice(-300)); j.report = 'reports/calibration.md';
  },
};
let nextId = Math.max(1000, ...jobs.map(j => j.id || 0)) + 1;
function addJob(o) { const j = { id: nextId++, status: 'queued', created: new Date().toISOString(), progress: 0, n: 300, scn: 'none,ash,imperm', macros: 300, ...o }; jobs.push(j); save(); pump(); return j; }
async function pump() {
  if (current) return; const j = jobs.find(x => x.status === 'queued'); if (!j) return;
  current = j; j.status = 'running'; j.started = new Date().toISOString(); save();
  try { await STEPS[j.kind](j); j.status = j.status === 'cancelled' ? 'cancelled' : 'done'; } catch (e) { if (j.status !== 'cancelled') { j.status = 'failed'; j.error = String(e.message).slice(0, 600); } }
  j.finished = new Date().toISOString(); current = null; save(); pump();
}
setInterval(save, 5000);

// ---- HTTP API ---------------------------------------------------------------------------
const send = (res, code, body, type = 'application/json') => { res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' }); res.end(type === 'application/json' ? JSON.stringify(body) : body); };
const walk = (d) => fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]) : [];
const safe = (p) => { const f = path.normalize(p).replace(/\\/g, '/'); if (f.startsWith('..') || path.isAbsolute(f) || !/^(reports|data|lines|decks|docs)\//.test(f)) throw new Error('bad path'); return f; };
const body = (req) => new Promise(ok => { let b = ''; req.on('data', c => b += c); req.on('end', () => { try { ok(JSON.parse(b || '{}')); } catch { ok({}); } }); });
http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x'); const p = u.pathname;
  try {
    if (p === '/' || p === '/index.html') return send(res, 200, fs.readFileSync('app/index.html'), 'text/html; charset=utf-8');
    if (p === '/cards.json') return send(res, 200, fs.readFileSync('docs/cards.json'), 'application/json');
    if (p === '/api/info') return send(res, 200, { threads: THREADS, cpus: os.cpus().length, cpu: os.cpus()[0]?.model, running: current && current.id });
    if (p === '/api/decks') return send(res, 200, walk('decks').map(f => f.replace(/\\/g, '/')).filter(f => /\.(ydk|txt)$/.test(f) && !/decks\/(cand|_built|_explore)\//.test(f) && !/decks\/(o_|oppHT|goldfish|crashtest)/.test(f)).sort());
    if (p === '/api/reports') return send(res, 200, walk('reports').map(f => f.replace(/\\/g, '/')).filter(f => /\.md$/.test(f)).map(f => ({ p: f, t: fs.statSync(f).mtimeMs })).sort((a, b) => b.t - a.t));
    if (p === '/api/file') return send(res, 200, fs.readFileSync(safe(u.searchParams.get('p'))), 'text/plain; charset=utf-8');
    if (p === '/api/lines') { const by = {}; for (const f of walk('lines').filter(f => f.endsWith('.json'))) { try { const j = JSON.parse(fs.readFileSync(f, 'utf8')); for (const [c, arr] of Object.entries(j.byCard || {})) for (const e of arr) { const a = by[c] || (by[c] = {}); if (!a[e.k] || a[e.k].v < e.v) a[e.k] = e; } } catch {} } return send(res, 200, by); }
    if (p === '/api/summary') { const run = (args, ms) => new Promise(ok => { const c = spawn(NODE, ['--no-warnings', ...args], { cwd: ROOT }); let o = ''; c.stdout.on('data', b => o += b); const t = setTimeout(() => c.kill(), ms); c.on('close', () => { clearTimeout(t); ok(o); }); });
      await run(['libsync.mjs'], 60000); return send(res, 200, await run(['summary.mjs'], 60000), 'text/plain; charset=utf-8'); }
    if (p === '/api/jobs') return send(res, 200, jobs.slice(-60).reverse().map(({ proc, ...j }) => j));
    if (p === '/api/deck' && req.method === 'POST') { const b = await body(req); const f = `decks/user/${(b.name || 'list').replace(/[^A-Za-z0-9_-]+/g, '_')}-${Date.now()}.txt`; fs.writeFileSync(f, b.text || ''); return send(res, 200, { path: f }); }
    if (p === '/api/run' && req.method === 'POST') { const b = await body(req); if (!STEPS[b.kind]) return send(res, 400, { error: 'unknown job' }); if (b.kind === 'explore' && !b.deckA) { const last = [...jobs].reverse().find(j => j.kind === 'explore' && j.deckA); b.deckA = (last && last.deckA) || 'decks/L2-vand3.ydk'; } return send(res, 200, addJob(b)); }
    if (p === '/api/restart' && req.method === 'POST') { if (current) return send(res, 409, { error: 'a job is running' }); send(res, 200, { ok: true }); setTimeout(() => process.exit(42), 300); return; }
    if (p === '/api/cancel' && req.method === 'POST') { const b = await body(req); const j = jobs.find(x => x.id === b.id); if (j) { if (j === current && current.proc) { j.status = 'cancelled'; current.proc.kill(); } else if (j.status === 'queued') j.status = 'cancelled'; save(); } return send(res, 200, { ok: true }); }
    send(res, 404, { error: 'not found' });
  } catch (e) { send(res, 500, { error: String(e.message) }); }
}).listen(PORT, '127.0.0.1', () => { console.log(`ROLAD Lab running: http://localhost:${PORT}  (${THREADS} worker threads)`); pump(); });

// nightly explorer: if started with --explore-now (Task Scheduler), queue an explorer run
if (process.argv.includes('--explore-now')) { const last = [...jobs].reverse().find(j => j.kind === 'explore'); addJob({ kind: 'explore', deckA: (last && last.deckA) || 'decks/L2-vand3.ydk', macros: 150, title: 'Nightly explorer' }); }
