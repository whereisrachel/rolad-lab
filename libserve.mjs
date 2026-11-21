// Serves this machine's line library (read-only) so the PC can pull it: GET /<token>/all?since=<ISO time> -> JSON array of saved lines.
// node libserve.mjs --port 8080 --token <secret> [--dir data]
import http from 'http'; import fs from 'fs'; import path from 'path';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const PORT = +f('port', 8080), TOKEN = f('token', ''), DIR = f('dir', 'data');
if (!TOKEN || TOKEN.length < 16) { console.error('need --token (16+ chars)'); process.exit(1); }
http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x'); const parts = u.pathname.split('/').filter(Boolean);
  if (parts[0] !== TOKEN || parts[1] !== 'all') { res.writeHead(404); return res.end(); }
  const since = u.searchParams.get('since') || ''; const out = [];
  for (const d of fs.readdirSync(DIR).filter(x => x.startsWith('lib-'))) {
    for (const fn of fs.readdirSync(path.join(DIR, d)).filter(x => x.endsWith('.json'))) {
      try { const x = JSON.parse(fs.readFileSync(path.join(DIR, d, fn), 'utf8')); if (!since || (x.when || '') > since) out.push(x); } catch {} }
  }
  res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify(out));
}).listen(PORT, () => console.log(`line library served on :${PORT}`));
