// Line library: the lab's memory. Good lines found in any run are saved (lines/library.json) and replayed as
// opening scripts in later runs whenever the hand holds the card the line starts with. Lines that keep winning stay; the rest drop off.
import fs from 'fs'; import path from 'path'; import { ROOT } from './cards.mjs';
export const DIR = path.join(ROOT, 'lines');
const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const SKIP = /^(Zone |face-(up|down)|Pass|Yes$|No$|Cancel|Finish|Default order)/;
export function toScript(labels) {
  const out = [];
  for (const l of labels || []) {
    if (!l || SKIP.test(l)) continue;
    let m;
    if ((m = /^Selected (.+?) \(/.exec(l))) out.push('^' + esc(m[1]) + ' \\(');
    else if ((m = /^(select|UNselect) (.+?) \(/.exec(l))) out.push('^' + m[1] + ' ' + esc(m[2]) + ' \\(');
    else out.push('^' + esc(l.split('):')[0].split(': ')[0]));
  }
  return out;
}
export function firstCard(labels) {
  for (const l of labels || []) { const m = /^(Normal Summon|Activate|Special Summon \(procedure\)|Set Spell\/Trap|Set monster) (.+?) \(/.exec(l); if (m) return m[2]; }
  return null;
}
// every run writes its own file (no merge conflicts between parallel farm runs); reading merges them all
export function load(KEEP = 6) {
  const lib = { v: 1, byCard: {} }; let files = []; try { files = fs.readdirSync(DIR).filter(f => f.endsWith('.json')); } catch {}
  for (const f of files) { let j; try { j = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')); } catch { continue; }
    for (const [c, arr] of Object.entries(j.byCard || {})) { const a = lib.byCard[c] || (lib.byCard[c] = []); for (const e of arr) { const ex = a.find(x => x.k === e.k); if (ex) { ex.hits += e.hits; ex.v = Math.max(ex.v, e.v); } else a.push({ ...e }); } } }
  for (const c in lib.byCard) lib.byCard[c] = lib.byCard[c].sort((a, b) => (b.v + 0.05 * b.hits) - (a.v + 0.05 * a.hits)).slice(0, KEEP);
  return lib;
}
// recs: [{v, line:[labels]}]; keeps the best KEEP distinct lines per starting card
export function update(recs, KEEP = 6, MIN = 6) {
  const known = load(100); const lib = { v: 1, byCard: {} }; let added = 0;
  for (const r of recs) {
    if (!r || !r.line || (r.v || 0) < MIN) continue; const c = firstCard(r.line); if (!c) continue;
    const s = toScript(r.line); if (s.length < 3) continue; const key = s.join('|');
    const arr = lib.byCard[c] || (lib.byCard[c] = []); const ex = arr.find(e => e.k === key);
    if (ex) { ex.hits++; ex.v = Math.max(ex.v, r.v); continue; }
    arr.push({ k: key, s, v: r.v, hits: 1 }); if (!(known.byCard[c] || []).some(e => e.k === key)) added++;
  }
  for (const c in lib.byCard) lib.byCard[c] = lib.byCard[c].sort((a, b) => (b.v + 0.05 * b.hits) - (a.v + 0.05 * a.hits)).slice(0, KEEP);
  lib.updated = new Date().toISOString(); fs.mkdirSync(DIR, { recursive: true }); fs.writeFileSync(path.join(DIR, 'run-' + (process.env.GITHUB_RUN_ID || Date.now()) + '.json'), JSON.stringify(lib));
  return added;
}
let CACHE = null;
export function seedsFor(handNames, per = 2) {
  if (!CACHE) CACHE = load(); const out = []; const seen = new Set();
  for (const n of handNames) { if (seen.has(n)) continue; seen.add(n); for (const e of (CACHE.byCard[n] || []).slice(0, per)) out.push(e.s); }
  return out;
}
