// Sending pieces of a test (one game each) to helper PCs through the hub on the Oracle server (data/hub.json: {"url": "http://IP:8080/<token>"}).
// The helper runs the same script with the same input on the same code version, so results are identical to running it here.
import fs from 'fs'; import crypto from 'crypto'; import path from 'path';
const CFG = 'data/hub.json';
export const hub = (() => { try { return fs.existsSync(CFG) ? JSON.parse(fs.readFileSync(CFG, 'utf8')) : null; } catch { return null; } })();
// code version: the files that decide a game's result (line endings ignored, so Windows and Linux copies match)
export const CODE = ['deepw.mjs', 'oppturn.mjs', 'robust.mjs', 'src/disrupt.mjs', 'src/searchplayer.mjs', 'src/bots.mjs', 'src/auto.mjs', 'src/engine.mjs', 'src/replay.mjs', 'src/cards.mjs', 'src/guideboard.mjs'];
export const codeVer = () => crypto.createHash('sha1').update(CODE.map(f => fs.existsSync(f) ? fs.readFileSync(f, 'utf8').replace(/\r/g, '') : '-').join('\n')).digest('hex').slice(0, 12);
const VER = codeVer();
const get = async (p, opt = {}) => { const r = await fetch(hub.url + p, { ...opt, signal: AbortSignal.timeout(60000) }); if (!r.ok) throw new Error('hub HTTP ' + r.status); return r.json(); };
// free helper slots right now (helpers on the same code version, seen in the last 2 min)
export async function helperSlots() { if (!hub) return 0; try { const s = await get('/status'); return (s.workers || []).filter(w => w.ver === VER).reduce((n, w) => n + (w.slots || 0), 0); } catch { return 0; } }
let seq = 0; const pending = new Map(); let poller = null;
async function poll() { if (!pending.size) { clearInterval(poller); poller = null; return; }
  try { const { results } = await get('/results?ids=' + [...pending.keys()].join(',')); for (const r of results || []) { const p = pending.get(r.id); if (p) { pending.delete(r.id); p.ok(r); } } } catch {}
  const now = Date.now(); for (const [id, p] of pending) if (now > p.deadline) { pending.delete(id); get('/cancel', { method: 'POST', body: JSON.stringify({ ids: [id] }) }).catch(() => {}); p.ok(null); } }
// run `node <script> <args>` on a helper PC. files: local input files it needs; outputs: files it writes that we want back.
// Resolves { stdout } (outputs written locally), or null if no helper finished it in time (then run it here instead).
export async function runRemote(script, args, { files = [], outputs = [], timeoutMs = 20 * 60000 } = {}) {
  if (!hub) return null; const id = `${process.pid}-${Date.now().toString(36)}-${seq++}`;
  // files travel with the piece under paths relative to the lab folder; the piece's input is rewritten to those paths
  const rel = (f) => path.relative(process.cwd(), path.resolve(f)).replace(/\\/g, '/');
  let argStr = JSON.stringify(args); const fileMap = {};
  for (const f of files) if (f && fs.existsSync(f)) { const r = rel(f); if (r.startsWith('..')) return null; fileMap[r] = fs.readFileSync(f, 'utf8'); for (const form of [f, JSON.stringify(f).slice(1, -1)]) argStr = argStr.split(form).join(r); }
  const outRel = outputs.map(o => { const r = rel(o); if (r !== o) argStr = argStr.split(JSON.stringify(o).slice(1, -1)).join(r); return [o, r]; });
  args = JSON.parse(argStr);
  try { await get('/tasks', { method: 'POST', body: JSON.stringify({ tasks: [{ id, script, args, files: fileMap, outputs: outRel.map(x => x[1]), ver: VER }] }) }); } catch { return null; }
  const r = await new Promise(ok => { pending.set(id, { ok, deadline: Date.now() + timeoutMs }); if (!poller) poller = setInterval(poll, 3000); });
  if (!r || r.error) return null;
  for (const [o, rr] of outRel) { const c = (r.outputs || {})[rr]; if (c == null) continue; fs.mkdirSync(path.dirname(o), { recursive: true }); fs.writeFileSync(o, c); }
  return { stdout: r.stdout || '' };
}
