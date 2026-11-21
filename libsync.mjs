// Pulls new lines from the library servers listed in data/lib-servers.json ([{"url": "http://IP:8080/<token>"}]) into data/lib-<list>/.
// node libsync.mjs   (also run by the lab server before each test)
import fs from 'fs';
const CFG = 'data/lib-servers.json'; if (!fs.existsSync(CFG)) { console.log('no library servers configured'); process.exit(0); }
const servers = JSON.parse(fs.readFileSync(CFG, 'utf8')); const STATE = 'data/lib-sync.json';
const st = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : {}; let added = 0, failed = 0;
for (const s of servers) {
  try { const since = st[s.url] || ''; const r = await fetch(`${s.url}/all?since=${encodeURIComponent(since)}`, { signal: AbortSignal.timeout(60000) }); if (!r.ok) throw new Error('HTTP ' + r.status);
    const arr = await r.json(); let last = since;
    for (const x of arr) { if (!x.list || !x.id) continue; const dir = `data/lib-${x.list}`; fs.mkdirSync(dir, { recursive: true }); const p = `${dir}/${x.id}.json`;
      if (!fs.existsSync(p)) { fs.writeFileSync(p, JSON.stringify(x)); added++; } if ((x.when || '') > last) last = x.when; }
    st[s.url] = last; } catch (e) { failed++; console.log(`library server ${s.url.replace(/\/[^/]+$/, '/…')}: ${e.message}`); } }
fs.writeFileSync(STATE, JSON.stringify(st)); console.log(`line library: ${added} new lines pulled${failed ? `, ${failed} server(s) unreachable` : ''}`);
