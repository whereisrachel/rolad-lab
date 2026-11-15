// Generic first-turn search player. Works for ANY card the engine has a script for: it explores the real game
// (snapshots of the engine's memory, so backtracking is cheap) and keeps the best board it finds.
import { OcgCoreInternal } from 'ocgcore-wasm';
import { resetLib, simulate, push, decision, answer, boardView, teamOf, seatOf, M, R, L } from './engine.mjs';
import { autoAdvance } from './auto.mjs';
import { cardDB, name } from './cards.mjs';

const PAGE = 4096;
const LIM = 4 * 1024 * 1024; // observed: engine memory changes only below ~2 MB; checked in full every 40 snapshots
export const DEAD = {};
const FIELDS = ['lp', 'turn', 'turnPlayer', 'phase', 'winner', 'winReason', 'ended', 'pending', 'lastSelect', 'hint', 'chain', 'retry', 'retryFlag', 'ri', 'repaired'];
const faceup = (p) => (p & 0x5) !== 0; // face-up attack / face-up defense

export function evalBoard(S, seat) {
  const { lb, h } = S; const me = teamOf(S.game, seat); const D = cardDB().data;
  const q = (loc) => lb.duelQueryLocation(h, { flags: 0x1 | 0x2 | 0x200, controller: me, location: loc });
  let v = 0;
  for (const c of q(L.MZONE)) { if (!c || !c.code) continue; const t = D.get(c.code)?.type ?? 0;
    v += 1 + Math.min(Math.max(c.attack || 0, 0), 3500) / 2500; if (t & (0x40 | 0x2000 | 0x800000 | 0x4000000 | 0x80)) v += 1; }
  for (const c of q(L.SZONE)) { if (!c || !c.code) continue; v += faceup(c.position) ? 0.4 : 0.6; }
  v += 0.25 * q(L.HAND).length;
  return v;
}

export async function searchT1(game, { evalFn = null, seat = 0, ms = 15000, altCap = 3, maxMacro = 10, frontierCap = 250, seed = 1, maxMacros = Infinity, guideW = 0 } = {}) {
  resetLib(); const S = autoAdvance(await simulate(game));
  S.ev = function () {}; S.events.length = 0; // no event log during search
  const mod = S.lb[OcgCoreInternal].module; const me = teamOf(game, seat);
  let base = Buffer.from(new Uint8Array(mod.HEAPU8.buffer.slice(0, mod.HEAPU8.length)));
  const rootLen = game.responses.length;
  const heap = () => Buffer.from(mod.HEAPU8.buffer, mod.HEAPU8.byteOffset, mod.HEAPU8.length);
  const PROF = { snap: 0, rest: 0, ns: 0, nr: 0, maxo: 0, pages: 0 };
  function snapshot() {
    const _t = process.hrtime.bigint(); try { return snapshot0(); } finally { PROF.snap += Number(process.hrtime.bigint() - _t) / 1e6; PROF.ns++; }
  }
  function snapshot0() {
    const cur = heap();
    if (cur.length > base.length) { const nb = Buffer.alloc(cur.length); base.copy(nb); base = nb; }
    const lim0 = Math.min(cur.length, LIM); const full = (PROF.ns % 40 === 0);
    if (full) { for (let o = lim0; o < cur.length; o += PAGE) { const e = Math.min(o + PAGE, cur.length); if (cur.compare(base, o, e, o, e) !== 0) throw new Error('engine memory used beyond scan limit at ' + o + '; raise LIM'); } }
    // dirty pages -> merged runs, copied into ONE buffer (few allocations)
    const runs = []; let tot = 0;
    for (let o = 0; o < lim0; o += PAGE) { const e = Math.min(o + PAGE, lim0); if (cur.compare(base, o, e, o, e) !== 0) { const L = runs.length; if (L && runs[L - 2] + runs[L - 1] === o) runs[L - 1] += e - o; else runs.push(o, e - o); tot += e - o; if (o > PROF.maxo) PROF.maxo = o; } }
    const data = Buffer.allocUnsafe(tot); let w = 0; for (let i = 0; i < runs.length; i += 2) { cur.copy(data, w, runs[i], runs[i] + runs[i + 1]); w += runs[i + 1]; }
    const pages = { runs, data };
    PROF.pages += pages.data.length / PAGE;
    const st = {}; for (const k of FIELDS) st[k] = structuredClone(S[k]);
    return { pages, st, n: game.responses.length };
  }
  function restore(s) {
    const _t = process.hrtime.bigint(); try { return restore0(s); } finally { PROF.rest += Number(process.hrtime.bigint() - _t) / 1e6; PROF.nr++; }
  }
  function restore0(s) {
    const cur = heap(); cur.set(base.subarray(0, Math.min(base.length, cur.length, LIM)));
    { const r = s.pages.runs, d = s.pages.data; let w = 0; for (let i = 0; i < r.length; i += 2) { d.copy(cur, r[i], w, w + r[i + 1]); w += r[i + 1]; } }
    for (const k of FIELDS) S[k] = structuredClone(s.st[k]);
    game.responses.length = s.n;
  }
  const dseat = () => (S.pending ? seatOf(game, S.pending.player) : null);
  function cands(d) {
    const o = d.options, out = [];
    switch (d.kind) {
      case 'pick': {
        let idx = o.map((_, i) => i);
        if (d.type === M.SELECT_CHAIN) idx = [...idx.filter(i => o[i].pass), ...idx.filter(i => !o[i].pass)];
        if (d.type === M.SELECT_EFFECTYN || d.type === M.SELECT_YESNO) idx = [0, 1];
        for (const i of idx) out.push({ kind: 'pick', i });
        break; }
      case 'multi': case 'sum': {
        const n = Math.max(d.min, 1), L2 = o.filter(x => !x.cancel).length; const nums = (a) => a.map(x => x + 1).join(' ');
        out.push({ kind: 'text', t: nums([...Array(Math.min(n, L2)).keys()]) });
        if (n === 1) for (let i = 1; i < Math.min(L2, 6); i++) out.push({ kind: 'text', t: String(i + 1) });
        else { out.push({ kind: 'text', t: nums([...Array(Math.min(n, L2)).keys()].map(i => L2 - 1 - i)) }); if (L2 > n) out.push({ kind: 'text', t: nums([...Array(Math.min(n, L2)).keys()].map(i => (i + 1) % L2)) }); }
        break; }
      case 'unselect': out.push({ kind: 'unselect', skip: 0 }); for (let k = 1; k < Math.min(4, o.filter(x => x.card && !/^UN/.test(x.label)).length); k++) out.push({ kind: 'unselect', skip: k }); break;
      case 'place': { const n = d.min || 1; out.push({ kind: 'text', t: [...Array(n).keys()].map(x => x + 1).join(' ') }); if (n === 1) for (let i = 1; i < Math.min(o.length, 3); i++) out.push({ kind: 'text', t: String(i + 1) }); break; }
      case 'sort': out.push({ kind: 'text', t: 'd' }); break;
      default: break;
    }
    return out;
  }
  function apply(d, c) {
    const label = (x) => x;
    if (c.kind === 'pick') { const op = d.options[c.i]; return push(S, { seat, resp: op.resp, label: op.label }); }
    if (c.kind === 'unselect') {
      let picked = 0, guard = 0, skip = c.skip;
      while (guard++ < 30) {
        const dd = decision(S, seat); if (!dd || dd.kind !== 'unselect') return true;
        const sel = dd.options.filter(x => x.card && !/^UNselect/.test(x.label)); const fin = dd.options.find(x => x.finish);
        if (picked >= dd.max || !sel.length) { if (fin) return push(S, { seat, resp: fin.resp, label: fin.label }); if (picked >= dd.min) return true; return false; }
        const op = sel[Math.min(skip, sel.length - 1)]; skip = 0; picked++;
        if (!push(S, { seat, resp: op.resp, label: op.label })) return false;
        autoAdvance(S);
        if (picked >= dd.min && fin && dd.max === dd.min) { const d2 = decision(S, seat); if (d2 && d2.kind === 'unselect') { const f2 = d2.options.find(x => x.finish); if (f2) return push(S, { seat, resp: f2.resp, label: f2.label }); } }
      }
      return false;
    }
    const res = answer(S, seat, c.t); if (!res || res.error || !res.resps) return false;
    for (const r of res.resps) if (!push(S, { seat, resp: r.resp, label: r.label })) return false;
    return true;
  }
  const isIdle = () => S.pending && S.pending.type === M.SELECT_IDLECMD && dseat() === seat && S.turn === 1;
  const sigOf = (d) => boardView(S, seat) + '|' + d.options.map(o => o.label).join(';');
  const seen = new Set(); const frontier = []; let best = { v: -1 }; let macros = 0, nodes = 0;
  const t0 = Date.now(); const timeUp = () => Date.now() - t0 > ms || macros >= maxMacros;
  function consider(depth) {
    const d = decision(S, seat); if (!d) return;
    const sig = sigOf(d); if (seen.has(sig)) return; seen.add(sig);
    const v = (evalFn || evalBoard)(S, seat); nodes++;
    if (v > best.v) best = { v, rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) };
    const gv = guideW ? guideW * evalBoard(S, seat) : 0;
    frontier.push({ snap: snapshot(), v, depth, pri: v + gv + 0.15 * depth + (nodes % 7) * 0.001 });
    if (frontier.length > frontierCap) { frontier.sort((a, b) => b.pri - a.pri); frontier.length = frontierCap; }
  }
  // run from the current live state to the next idle decision(s); alternatives for sub-decisions are explored from stacked snapshots
  function macro(depth, startSnap, firstIdx) {
    macros++;
    const stack = []; let variants = 0;
    const play = () => {
      for (let guard = 0; guard < 400; guard++) {
        autoAdvance(S);
        if (S.ended || !S.pending || S.turn !== 1) { DEAD['end:' + (S.ended ? 'ended' : !S.pending ? 'nopending' : 'turn' + S.turn)] = (DEAD['end:' + (S.ended ? 'ended' : !S.pending ? 'nopending' : 'turn' + S.turn)] || 0) + 1; return; }
        if (dseat() !== seat) { DEAD['otherseat:' + S.pending.type] = (DEAD['otherseat:' + S.pending.type] || 0) + 1; return; }
        if (isIdle()) { consider(depth + 1); return; }
        const d = decision(S, seat); if (!d) return;
        const cs = cands(d); if (!cs.length) { DEAD[d.kind + ':' + (d.msg || '').slice(0, 50)] = (DEAD[d.kind + ':' + (d.msg || '').slice(0, 50)] || 0) + 1; return; }
        if (cs.length > 1 && variants < maxMacro) { const sn = snapshot(); for (let k = 1; k < Math.min(cs.length, altCap + 1); k++) { if (variants >= maxMacro) break; variants++; stack.push({ sn, d, c: cs[k] }); } }
        if (!apply(d, cs[0])) { DEAD['applyfail:' + d.kind] = (DEAD['applyfail:' + d.kind] || 0) + 1; return; }
      }
    };
    play();
    if (process.env.DBG) console.log('  macro end: pending', S.pending && S.pending.type, 'seat', dseat(), 'turn', S.turn, 'resp', game.responses.slice(-3).map(r => r.label).join(' > '));
    while (stack.length && !timeUp()) { const it = stack.pop(); restore(it.sn); const d = decision(S, seat); if (!d) continue; if (!apply(d, it.c)) continue; play(); }
  }
  // root
  for (let g0 = 0; g0 < 20 && S.pending && !S.ended && dseat() === seat && !isIdle(); g0++) { const d0 = decision(S, seat); if (!d0) break; const c0 = cands(d0); if (!c0.length || !apply(d0, c0[0])) break; autoAdvance(S); }
  const rd = decision(S, seat); if (!rd || !isIdle()) return { error: 'no first-turn idle decision, pending=' + (S.pending && S.pending.type) + ' turn=' + S.turn + ' seat=' + dseat(), score: 0 };
  consider(0); const rootSnap = frontier[0].snap;
  while (frontier.length && !timeUp()) {
    frontier.sort((a, b) => b.pri - a.pri); const node = frontier.shift();
    restore(node.snap); const d = decision(S, seat); if (!d) continue;
    if (process.env.DBG) console.log('EXPAND', node.depth, d.options.map(o => o.label.slice(0, 50)).join(' | '));
    for (let i = 0; i < d.options.length && !timeUp(); i++) {
      const o = d.options[i]; if (/Battle Phase|End Phase/.test(o.label)) continue;
      restore(node.snap); const dd = decision(S, seat);
      if (!push(S, { seat, resp: dd.options[i].resp, label: dd.options[i].label })) { if (process.env.DBG) console.log('PUSHFAIL', dd.options[i].label, JSON.stringify(S.errors && S.errors.slice(-1))); continue; }
      macro(node.depth, null, i);
    }
  }
  return { score: best.v, line: best.rs, board: best.board, nodes, macros, ms: Date.now() - t0, prof: PROF };
}
