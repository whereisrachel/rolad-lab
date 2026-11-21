// Line sharing for paired deck tests: on one hand, every version of the list (your list and each change) searched on its own.
// A line one version found is replayed in every other version's game (same hand, same opponent hand traps); if it is legal there and
// scores higher, that version gets it too. So two versions only differ where a line really works in one deck and not the other,
// not because one search got luckier. Lines are replayed by option labels (src/replay.mjs), never invented.
// node share.mjs '<json>'  json: { scn, games: [{ key, v, raw, order, extra, seed }], top: 4 }  -> prints SHARE {key: {v, from}}
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs';
import { replay } from './src/replay.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(0); process.env.CANON = '1'; process.env.LIGHT = '1';
const J = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const SCN = { ash: 'Ash Blossom & Joyous Spring', imperm: 'Infinite Impermanence', droll: 'Droll & Lock Bird' };
const codeOf = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
// the same game deepw.mjs builds (opponent holds the scenario's hand traps and fires them at the first legal moment)
function mk(g) { const need = String(J.scn || 'none').split('+').filter(x => SCN[x]);
  const op = OPP.main.slice(), oh = []; for (const q of need) { const i = op.findIndex(k => name(k) === name(codeOf(SCN[q]))); if (i >= 0) oh.push(op.splice(i, 1)[0]); }
  while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  return { id: 'dw', seed: String(g.seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: g.order.slice(), extra: g.extra.slice(), side: [] }, hand: g.order.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: need }, after: { 1: g.after || 0 }, stopAfterTurn: null }; }
async function best(g, raw) { let mx = -1; const r = await replay(mk(g), raw, (S) => { const v = disruption(S, 0); if (v > mx) mx = v; }); return mx; }
const games = J.games.filter(g => g.raw && g.raw.length && g.order);
// candidate lines: the best few distinct lines of this hand (only a line better than a version's own result can change it)
// J.lines: extra lines from the line library (same opponent hand trap, every card the line used is in this hand); replayed like the others
const pool = [...games, ...(J.lines || []).filter(g => g.raw && g.raw.length)];
const seenL = new Set(); const lines = pool.slice().sort((p, q) => q.v - p.v).filter(g => { const s = JSON.stringify(g.raw.filter(e => e.seat === 0 && !e.auto).map(e => e.label)); if (seenL.has(s)) return false; seenL.add(s); return true; }).slice(0, (J.top || 4) + (J.lines || []).length);
const out = {}; let self = null;
for (const g of games) { out[g.key] = { v: g.v, from: null };
  for (const ln of lines) { if (ln.v <= out[g.key].v + 0.005) continue;
    let v = -1; try { v = await best(g, ln.raw); } catch {}
    if (ln.key === g.key) self = { key: g.key, own: g.v, replayed: v };
    if (v > out[g.key].v + 0.005) out[g.key] = { v: +v.toFixed(2), from: ln.key }; } }
// self-check: a version's own line must replay to its own score (else replays can't be trusted on this hand -> keep own results)
const L0 = lines.find(l => !String(l.key).startsWith('lib:')); const chk = L0 ? await best(L0, L0.raw).catch(() => -1) : null;
const ok = !L0 || Math.abs(chk - L0.v) < 0.02;
console.log('SHARE ' + JSON.stringify({ ok, chk, libUsed: Object.values(out).filter(o => String(o.from || '').startsWith('lib:')).length, top: lines[0] ? lines[0].v : null, res: ok ? out : Object.fromEntries(games.map(g => [g.key, { v: g.v, from: null }])) }));
