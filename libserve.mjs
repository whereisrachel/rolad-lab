// Library + work hub, runs on the Oracle servers (port 8080, every route behind the secret token).
//  GET  /<token>/all?since=<ISO>        saved library lines newer than <since> (the PC pulls these)
//  POST /<token>/put-line               a helper PC uploads a line it found (stored like this machine's own lines)
//  POST /<token>/tasks  {tasks:[...]}   the PC posts pieces of a test (one game each) for helper PCs
//  GET  /<token>/claim?worker=&n=&ver=  a helper PC takes up to n waiting pieces (same code version only)
//  POST /<token>/done   {id, ...}       a helper PC returns a finished piece
//  GET  /<token>/results?ids=a,b        the PC collects finished pieces
//  GET  /<token>/status                 waiting / running / finished pieces and helper PCs seen
// node libserve.mjs --port 8080 --token <secret> [--dir data]
import http from 'http'; import fs from 'fs'; import path from 'path';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const PORT = +f('port', 8080), TOKEN = f('token', ''), DIR = f('dir', 'data');
if (!TOKEN || TOKEN.length < 16) { console.error('need --token (16+ chars)'); process.exit(1); }
const LEASE = 15 * 60000; // a piece a helper took but did not return in 15 min goes back in the queue
const leaseOf = (t) => Math.min(6 * 3600000, Math.max(LEASE, +t.lease || 0)); // long pieces (e.g. 15-30 min searches) carry their own lease (Nov 25)
const waiting = [], running = new Map(), finished = new Map(), workers = new Map();
const body = (req) => new Promise((ok, no) => { let s = ''; req.on('data', d => { s += d; if (s.length > 64e6) { req.destroy(); no(new Error('too big')); } }); req.on('end', () => { try { ok(s ? JSON.parse(s) : {}); } catch (e) { no(e); } }); });
const send = (res, code, obj) => { res.writeHead(code, { 'content-type': 'application/json', 'access-control-allow-origin': '*' }); res.end(JSON.stringify(obj)); };
setInterval(() => { const now = Date.now(); for (const [id, t] of running) if (now - t.at > leaseOf(t)) { running.delete(id); delete t.at; delete t.by; waiting.unshift(t); }
  for (const [id, r] of finished) if (now - r.at > 6 * 3600000) finished.delete(id); }, 30000);
http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://x'); const parts = u.pathname.split('/').filter(Boolean);
    if (parts[0] !== TOKEN) { res.writeHead(404); return res.end(); } const route = parts[1];
    if (route === 'all') { const since = u.searchParams.get('since') || ''; const out = [];
      for (const d of fs.readdirSync(DIR).filter(x => x.startsWith('lib-'))) for (const fn of fs.readdirSync(path.join(DIR, d)).filter(x => x.endsWith('.json'))) {
        try { const x = JSON.parse(fs.readFileSync(path.join(DIR, d, fn), 'utf8')); if (!since || (x.when || '') > since) out.push(x); } catch {} }
      return send(res, 200, out); }
    if (route === 'put-line' && req.method === 'POST') { const x = await body(req); if (!x.list || !x.id || !/^[\w.-]+$/.test(x.list + x.id)) return send(res, 400, { error: 'bad line' });
      const d = path.join(DIR, 'lib-' + x.list); fs.mkdirSync(d, { recursive: true }); x.when = new Date().toISOString(); fs.writeFileSync(path.join(d, x.id + '.json'), JSON.stringify(x)); return send(res, 200, { ok: true }); }
    // played-out opponent turns (the learned scoring's training data): helpers upload, the PC downloads
    if (route === 'put-eval' && req.method === 'POST') { const x = await body(req); if (!x.id || !/^[\w.-]+$/.test(x.id)) return send(res, 400, { error: 'bad eval' });
      const d = path.join(DIR, 'evals'); fs.mkdirSync(d, { recursive: true }); x.when = new Date().toISOString(); fs.writeFileSync(path.join(d, x.id + '.json'), JSON.stringify(x)); return send(res, 200, { ok: true }); }
    if (route === 'evals') { const since = u.searchParams.get('since') || ''; const d = path.join(DIR, 'evals'); const out = [];
      if (fs.existsSync(d)) for (const fn of fs.readdirSync(d).filter(x => x.endsWith('.json'))) { try { const x = JSON.parse(fs.readFileSync(path.join(d, fn), 'utf8')); if (!since || (x.when || '') > since) out.push(x); } catch {} }
      return send(res, 200, out); }
    if (route === 'tasks' && req.method === 'POST') { const b = await body(req); for (const t of b.tasks || []) if (t.id && t.script) waiting.push(t); return send(res, 200, { ok: true, waiting: waiting.length }); }
    if (route === 'claim') { const w = u.searchParams.get('worker') || '?', n = Math.max(1, Math.min(64, +(u.searchParams.get('n') || 1))), ver = u.searchParams.get('ver') || '', left = +(u.searchParams.get('left') || 0); /* minutes this helper has left (cloud runners): skip pieces that would not finish */
      workers.set(w, { at: Date.now(), slots: +(u.searchParams.get('slots') || n), ver, busy: +(u.searchParams.get('busy') || 0) }); const out = [];
      for (let i = 0; i < waiting.length && out.length < n;) { const t = waiting[i]; if ((t.ver && ver && t.ver !== ver) || (left > 0 && +t.est > 0 && +t.est > left)) { i++; continue; } waiting.splice(i, 1); t.at = Date.now(); t.by = w; running.set(t.id, t); out.push(t); }
      return send(res, 200, { tasks: out }); }
    if (route === 'done' && req.method === 'POST') { const r = await body(req); if (!r.id) return send(res, 400, {}); const t = running.get(r.id); running.delete(r.id);
      if (r.reject && t) { t.rejects = (t.rejects || 0) + 1; delete t.at; delete t.by; if (t.rejects < 3) { waiting.push(t); return send(res, 200, { ok: true }); } finished.set(t.id, { id: t.id, error: 'helpers could not run it', at: Date.now() }); return send(res, 200, { ok: true }); } // helper could not run it (e.g. different code): give it back
      r.at = Date.now(); finished.set(r.id, r); return send(res, 200, { ok: true }); }
    if (route === 'results') { const ids = (u.searchParams.get('ids') || '').split(',').filter(Boolean); const out = [];
      const wset = new Set(waiting.map(t => t.id)); const notTaken = []; for (const id of ids) { const r = finished.get(id); if (r) { out.push(r); finished.delete(id); } else if (wset.has(id)) notTaken.push(id); } return send(res, 200, { results: out, waiting: notTaken }); }
    if (route === 'cancel' && req.method === 'POST') { const b = await body(req); const ids = new Set(b.ids || []); for (let i = waiting.length - 1; i >= 0; i--) if (ids.has(waiting[i].id)) waiting.splice(i, 1); return send(res, 200, { ok: true }); }
    if (route === 'status') { const now = Date.now(); return send(res, 200, { waiting: waiting.length, running: running.size, finished: finished.size,
      workers: [...workers.entries()].filter(([, w]) => now - w.at < 120000).map(([name, w]) => ({ name, slots: w.slots, busy: w.busy, ver: w.ver, seen: Math.round((now - w.at) / 1000) + 's ago' })) }); }
    res.writeHead(404); res.end();
  } catch (e) { try { send(res, 500, { error: String(e.message || e) }); } catch {} }
}).listen(PORT, () => console.log(`line library + work hub on :${PORT}`));
