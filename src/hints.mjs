// Continuous learning store for line hints.
// data/hints-<list>.json       learned hits from learn.mjs runs ({ games, hits, w })
// data/hints-<list>.log.jsonl  one line per finished game anywhere in the app ({ v, keys }), appended as games finish
// Weights = moves that appear in the best lines of the better half of all games so far (once per game), counted only after 2+ good games.
// A run that compares lists freezes a snapshot first (freezeHints), so every version in that run plays with the same knowledge.
import fs from 'fs';
export const logPath = (hp) => hp.replace(/\.json$/, '') + '.log.jsonl';
const weights = (hits) => { const w = {}; for (const [k, h] of Object.entries(hits)) if (h >= 2) w[k] = +Math.min(2, 0.8 * Math.log(1 + h)).toFixed(2); return w; };
export function loadHints(hp) {
  let j = null; try { if (fs.existsSync(hp)) j = JSON.parse(fs.readFileSync(hp, 'utf8')); } catch {}
  if (j && j.frozen) return j.w || null; // a frozen snapshot: fixed for the whole comparison run
  const hits = { ...((j && j.hits) || {}) }; let games = (j && j.games) || 0;
  const lp = logPath(hp); if (fs.existsSync(lp)) { const G = []; for (const l of fs.readFileSync(lp, 'utf8').split('\n')) { if (!l) continue; try { const g = JSON.parse(l); if (g.keys && g.keys.length) G.push(g); } catch {} }
    if (G.length) { const vs = G.map(g => g.v).sort((a, b) => a - b); const med = vs[Math.floor(vs.length / 2)];
      for (const g of G) if (g.v >= med) { games++; for (const k of new Set(g.keys)) hits[k] = (hits[k] || 0) + 1; } } }
  if (!games) return j && j.w ? j.w : null; return weights(hits);
}
export function logGame(hp, r) { try { if (r && r.keys && r.keys.length) fs.appendFileSync(logPath(hp), JSON.stringify({ v: +(+r.v).toFixed(2), keys: r.keys }) + '\n'); } catch {} }
export function freezeHints(hp, out) { const w = loadHints(hp) || {}; fs.writeFileSync(out, JSON.stringify({ frozen: true, from: hp, at: new Date().toISOString(), w })); return Object.keys(w).length; }
export function gamesLogged(hp) { try { return fs.readFileSync(logPath(hp), 'utf8').split('\n').filter(Boolean).length; } catch { return 0; } }
