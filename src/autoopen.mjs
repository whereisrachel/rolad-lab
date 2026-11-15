// Automatic openers: enumerate first actions x options at the next real choices, give each a short search, then
// give the best few a full search. Replaces hand-written opening scripts.
import { searchT1 } from './searchplayer.mjs';
import { toScript } from './library.mjs';
export async function autoSearch(g, { macros = 300, evalFn, depth = 2, cap = 48, top = 2, quick = 0.2 } = {}) {
  const en = await searchT1({ ...g, responses: [] }, { enumOnly: true, enumDepth: depth, enumCap: cap });
  const seen = new Set(); const ops = [];
  for (const ls of en.openers || []) { const sc = toScript(ls); const k = sc.join('|'); if (!sc.length || seen.has(k)) continue; seen.add(k); ops.push(sc); }
  const res = [];
  for (const sc of ops) { let r; try { r = await searchT1({ ...g, responses: [] }, { ms: 60000, maxMacros: Math.max(20, Math.round(macros * quick)), patience: 40, guideW: 0.3, altCap: 4, maxMacro: 25, frontierCap: 300, script: sc, evalFn }); } catch { continue; } if (!r.error) res.push({ sc, r }); }
  res.sort((a, b) => (b.r.score || 0) - (a.r.score || 0)); let best = res[0] ? res[0].r : { score: 0 };
  for (const x of res.slice(0, top)) { let r; try { r = await searchT1({ ...g, responses: [] }, { ms: 90000, maxMacros: macros, patience: 60, guideW: 0.3, altCap: 4, maxMacro: 25, frontierCap: 400, script: x.sc, evalFn }); } catch { continue; } if (!r.error && (r.score || 0) > (best.score || 0)) best = r; }
  return { best, openers: ops.length };
}
