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

export async function searchT1(game, { evalFn = null, seat = 0, ms = 15000, altCap = 3, maxMacro = 10, frontierCap = 250, seed = 1, maxMacros = Infinity, guideW = 0, patience = Infinity, script = null, div = +(process.env.DIV ?? 1.5), roll = +(process.env.ROLL ?? 0), rollDepth = +(process.env.ROLLD ?? 2), enumOnly = false, enumDepth = 2, enumCap = 48, onProgress = null, dfs = false, probe = 0 } = {}) {
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
  // Engine memory snapshots are stored as the pages that differ from a reference copy ("base").
  // Speed: compare in 64 KB blocks first (most are unchanged), and re-anchor: when snapshots grow large
  // (the turn has drifted far from the reference), the current memory becomes a new reference, so later
  // snapshots only hold what changed since then. Old snapshots keep a pointer to the reference they used.
  const BLK = 16 * PAGE; const bases = [base]; let recent = 0, recentN = 0;
  function snapshot0() {
    const cur = heap();
    let bi = bases.length - 1; let B = bases[bi];
    if (cur.length > B.length) { const nb = Buffer.alloc(cur.length); B.copy(nb); bases[bi] = B = nb; }
    const lim0 = Math.min(cur.length, LIM); const full = (PROF.ns % 40 === 0);
    if (full) { for (let o = lim0; o < cur.length; o += PAGE) { const e = Math.min(o + PAGE, cur.length); if (cur.compare(B, o, e, o, e) !== 0) throw new Error('engine memory used beyond scan limit at ' + o + '; raise LIM'); } }
    const runs = []; let tot = 0;
    for (let b = 0; b < lim0; b += BLK) { const be = Math.min(b + BLK, lim0); if (cur.compare(B, b, be, b, be) === 0) continue;
      for (let o = b; o < be; o += PAGE) { const e = Math.min(o + PAGE, be); if (cur.compare(B, o, e, o, e) !== 0) { const L = runs.length; if (L && runs[L - 2] + runs[L - 1] === o) runs[L - 1] += e - o; else runs.push(o, e - o); tot += e - o; } } }
    const data = Buffer.allocUnsafe(tot); let w = 0; for (let i = 0; i < runs.length; i += 2) { cur.copy(data, w, runs[i], runs[i] + runs[i + 1]); w += runs[i + 1]; }
    const pages = { runs, data, bi };
    PROF.pages += tot / PAGE; recent += tot / PAGE; recentN++;
    if (recentN >= 30) { if (process.env.REBASE && recent / recentN > 96 && bases.length < 12) { bases.push(Buffer.from(cur.subarray(0, Math.max(lim0, cur.length)))); } recent = 0; recentN = 0; }
    const st = {}; for (const k of FIELDS) st[k] = structuredClone(S[k]);
    return { pages, st, n: game.responses.length, rsp: game.responses.map(r => ({ seat: r.seat, label: r.label, auto: r.auto, resp: r.resp })) };
  }
  function restore(s) {
    const _t = process.hrtime.bigint(); try { return restore0(s); } finally { PROF.rest += Number(process.hrtime.bigint() - _t) / 1e6; PROF.nr++; }
  }
  function restore0(s) {
    const cur = heap(); const B = bases[s.pages.bi || 0]; cur.set(B.subarray(0, Math.min(B.length, cur.length, LIM)));
    { const r = s.pages.runs, d = s.pages.data; let w = 0; for (let i = 0; i < r.length; i += 2) { d.copy(cur, r[i], w, w + r[i + 1]); w += r[i + 1]; } }
    for (const k of FIELDS) S[k] = structuredClone(s.st[k]);
    game.responses.length = 0; for (const r of s.rsp) game.responses.push({ ...r });
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
      case 'announce': { // declare a card name (Acropolis etc.): try every distinct card in my deck, keep the legal ones
        const pool = [...new Set([...(game.seats[seat].deck.main || []), ...(game.seats[seat].deck.extra || [])].map(c => name(c)))];
        for (const n of pool) { const r = answer(S, seat, n); if (r && !r.error) out.push({ kind: 'text', t: n }); if (out.length >= 6) break; }
        break; }
      case 'sum': { // value-aware: enumerate small subsets whose values reach the target (Ritual Tributes etc.)
        const pr = String(d.prompt || d.msg || ''); const am = /(reach at least|sum exactly to) (\d+)/.exec(pr); const exact = am && am[1] === 'sum exactly to'; let need = am ? +am[2] : 0;
        const inc = /already included: (.*)$/.exec(pr); if (inc) for (const m2 of inc[1].matchAll(/\((\d+)\)/g)) need -= +m2[1];
        const vals = o.map(x => { const m2 = /value (\d+)(?: or (\d+))?/.exec(x.label); return m2 ? [+m2[1], m2[2] ? +m2[2] : +m2[1]] : [0, 0]; });
        const N = Math.min(o.length, 16), res = []; const maxK = Math.min(d.max || 4, 4);
        const rec = (start, pick, sum) => { if (pick.length && (exact ? (sum === need) : sum >= need)) { res.push(pick.slice()); return; } if (pick.length >= maxK) return; for (let i = start; i < N; i++) { pick.push(i); rec(i + 1, pick, sum + Math.max(...vals[i])); pick.pop(); } };
        if (need > 0) rec(0, [], 0);
        res.sort((a, b) => a.length - b.length); const seenK = new Set();
        for (const r of res) { const k = r.map(i => o[i].label.replace(/ value.*/, '')).sort().join('|'); if (seenK.has(k)) continue; seenK.add(k); out.push({ kind: 'text', t: r.map(i => i + 1).join(' ') }); if (out.length >= 8) break; }
        if (!out.length) { const n = Math.max(d.min, 1); out.push({ kind: 'text', t: [...Array(Math.min(n, o.length)).keys()].map(x => x + 1).join(' ') }); }
        break; }
      case 'multi': {
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
  // branch diversity: every opening branch (incl. each choice at its first sub-decisions) gets explored a few steps before the search narrows on whatever looks best right away
  let CUR_BR = null, nBr = 0; const bexp = {}; const eff = (n) => n.pri + div / (1 + (bexp[n.br] || 0));
  const seen = new Set(); const frontier = []; let best = { v: -1 }; let macros = 0, nodes = 0; let minPri = -Infinity;
  const t0 = Date.now(); let lastImp = 0; const timeUp = () => Date.now() - t0 > ms || macros >= maxMacros || macros - lastImp >= patience;
  // random playouts: judge an early position by the best end-of-turn board a few quick random games reach from it (lookahead for long combos)
  let rs0 = (seed * 2654435761) >>> 0 || 1; const rnd = () => { rs0 ^= rs0 << 13; rs0 >>>= 0; rs0 ^= rs0 >>> 17; rs0 ^= rs0 << 5; rs0 >>>= 0; return rs0 / 4294967296; };
  function rollout() {
    for (let k = 0; k < 120; k++) {
      autoAdvance(S); if (S.ended || !S.pending || S.turn !== 1 || dseat() !== seat) break;
      const d = decision(S, seat); if (!d) break;
      if (isIdle()) { const op = d.options.map((o, i) => i).filter(i => !/Battle Phase|End Phase/.test(d.options[i].label)); if (!op.length || rnd() < 0.04) break;
        const i = op[Math.floor(rnd() * op.length)]; if (!push(S, { seat, resp: d.options[i].resp, label: d.options[i].label })) break; continue; }
      const cs = cands(d); if (!cs.length) break; if (!apply(d, cs[Math.floor(rnd() * Math.min(cs.length, 4))])) break;
    }
    if (!(isIdle() || S.turn !== 1)) return -1;
    const v = (evalFn || evalBoard)(S, seat);
    if (v > best.v && isIdle()) { lastImp = macros; best = { v, raw: game.responses.map(r => ({ ...r })), rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) }; }
    return v;
  }
  function consider(depth) {
    const d = decision(S, seat); if (!d) return;
    const sig = sigOf(d); if (seen.has(sig)) return; seen.add(sig);
    const v = (evalFn || evalBoard)(S, seat); nodes++;
    if (v > best.v) lastImp = macros, best = { v, raw: game.responses.map(r => ({ ...r })), rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) };
    const gv = guideW ? guideW * evalBoard(S, seat) : 0;
    let pri = v + gv + 0.15 * depth + (nodes % 7) * 0.001;
    let snap = null;
    if (roll > 0 && depth >= 1 && depth <= rollDepth) { snap = snapshot(); let rv = -1; for (let k = 0; k < roll; k++) { restore(snap); rv = Math.max(rv, rollout()); macros += 0.25; } restore(snap); if (process.env.DBGR) console.log("ROLL", depth, v.toFixed(2), "best rollout", rv.toFixed(2), game.responses.slice(rootLen).map(r => r.label || "").filter(l => /Selected|Special Summon it|Normal Summon|Activate/.test(l)).slice(-3).join(" > ").slice(0, 160)); if (rv > v) pri += 0.9 * (rv - v); }
    if (frontier.length >= frontierCap && pri <= minPri) return; // would be pruned at once: skip the snapshot and the sort
    frontier.push({ snap: snap || snapshot(), v, depth, pri, br: CUR_BR === null ? nBr++ : CUR_BR });
    if (frontier.length > frontierCap) { frontier.sort((a, b) => eff(b) - eff(a)); frontier.length = frontierCap; }
    if (frontier.length >= frontierCap) { let mn = Infinity; for (const x of frontier) if (x.pri < mn) mn = x.pri; minPri = mn; }
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
        if (process.env.DBG2) console.log('SUB', d.kind, String(d.msg||'').slice(0,60), '|', d.options.slice(0,14).map(o=>o.label.slice(0,40)).join(' ; '));
        const cs = cands(d); if (!cs.length) { { const dk = d.kind + ':' + String(d.prompt || '').slice(0, 50); DEAD[dk] = (DEAD[dk] || 0) + 1; } return; }
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
  if (script && script.length) { // replay a fixed opening line (regexes on option labels, in order), then search on from the resulting idle state
    let k = 0; const res = script.map(x => new RegExp(x, 'i'));
    for (let g1 = 0; g1 < 600 && S.pending && !S.ended && k <= res.length; g1++) {
      autoAdvance(S); if (!S.pending || S.ended || dseat() !== seat) break;
      const d1 = decision(S, seat); if (!d1) break;
      let hit = -1; if (k < res.length && d1.options) hit = d1.options.findIndex(o => res[k].test(o.label));
      if (process.env.DBG3) console.log('SCR', k, d1.kind, String(d1.msg||d1.prompt||'').slice(0,60), '|', d1.options.slice(0,12).map(o=>o.label.slice(0,110)).join(' ; '));
      if (hit >= 0 && (d1.kind === 'pick' || d1.kind === 'unselect')) { const o1 = d1.options[hit]; if (!push(S, { seat, resp: o1.resp, label: o1.label })) break; k++; continue; }
      if (k < res.length && (d1.kind === 'multi' || d1.kind === 'sum')) { const mi = d1.options.map((o, i) => res[k].test(o.label) ? i + 1 : 0).filter(Boolean); if (mi.length) { const mx = d1.max || 1; const r2 = answer(S, seat, mi.slice(0, Math.max(mx, 1)).join(' ')); if (r2 && !r2.error && r2.resps && r2.resps.every(r => push(S, { seat, resp: r.resp, label: r.label }))) { k++; continue; } } }
      if (isIdle()) { if (k >= res.length) break; if (process.env.DBG3) console.log('SCRIPT STUCK at', k, script[k], '| idle options:', d1.options.map(o => o.label).join(' ; ')); break; }
      const c1 = cands(d1); if (!c1.length || !apply(d1, c1[0])) break;
    }
    if (k < res.length && process.env.DBG3) console.log('SCRIPT ended early at', k, '/', res.length);
    if (k === 0 && !process.env.KEEP_STUCK) return { score: 0, skipped: true, line: [], board: '', nodes: 0, macros: 0, ms: Date.now() - t0, prof: PROF }; // opening never applied: this pass would just repeat the free search
  }
  if (enumOnly) { // automatic openers: every first action x each option at its next enumDepth real choices -> label lists
    const out = []; const root = snapshot(); const d0 = decision(S, seat); if (!d0 || !isIdle()) return { openers: [] };
    const TRIV = (d) => d.kind === 'place' || d.kind === 'sort' || d.type === M.SELECT_CHAIN || (d.kind === 'pick' && d.options.every(o => /^(face-|Yes$|No$|Pass)/.test(o.label) || o.pass));
    const labels = () => game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean);
    const walk = (lvl, idles = 1) => {
      for (let g2 = 0; g2 < 60; g2++) { autoAdvance(S); if (S.ended || !S.pending || dseat() !== seat) { out.push(labels()); return; }
        if (isIdle()) { // a second action: branch over it too (Citrinitas: activate it, then use it)
          out.push(labels()); if (idles >= 2 || lvl >= enumDepth) return;
          const di = decision(S, seat); const sn = snapshot(); const ix = di.options.map((o, i) => i).filter(i => !/Battle Phase|End Phase|^Set /.test(di.options[i].label)).slice(0, 8);
          for (const i of ix) { if (out.length >= enumCap) return; restore(sn); const dd = decision(S, seat); if (push(S, { seat, resp: dd.options[i].resp, label: dd.options[i].label })) walk(lvl + 1, idles + 1); }
          return; }
        const d = decision(S, seat); if (!d) { out.push(labels()); return; }
        if (TRIV(d)) { const cs = cands(d); if (!cs.length || !apply(d, cs[0])) return; continue; }
        if (lvl >= enumDepth) { out.push(labels()); return; }
        const cs = cands(d).slice(0, 5); const sn = snapshot();
        for (const c of cs) { if (out.length >= enumCap) return; restore(sn); if (apply(d, c)) walk(lvl + 1, idles); }
        return; }
    };
    for (let i = 0; i < d0.options.length && out.length < enumCap; i++) {
      if (/Battle Phase|End Phase|^Set /.test(d0.options[i].label)) continue;
      restore(root); const dd = decision(S, seat); if (!push(S, { seat, resp: dd.options[i].resp, label: dd.options[i].label })) continue; walk(0);
    }
    return { openers: out };
  }
  const rd = decision(S, seat); if (!rd || !isIdle()) return { error: 'no first-turn idle decision, pending=' + (S.pending && S.pending.type) + ' turn=' + S.turn + ' seat=' + dseat(), score: 0 };
  if (probe) { // Knuth estimate of the game-tree size: random walks, product of branching factors along the way
    const root = snapshot(); const ests = []; const depths = [];
    for (let k = 0; k < probe; k++) { restore(root); let w = 1, tot = 1, dep = 0;
      for (let g = 0; g < 3000; g++) { autoAdvance(S); if (S.ended || !S.pending || S.turn !== 1 || dseat() !== seat) break; const d = decision(S, seat); if (!d) break;
        if (isIdle()) { const ix = d.options.map((o, i) => i).filter(i => !/Battle Phase|End Phase/.test(d.options[i].label)); if (!ix.length) break; w *= ix.length; tot += w; dep++; const i = ix[Math.floor(rnd() * ix.length)]; if (!push(S, { seat, resp: d.options[i].resp, label: d.options[i].label })) break; continue; }
        const cs = cands(d); if (!cs.length) break; if (cs.length > 1) { w *= cs.length; tot += w; } if (!apply(d, cs[Math.floor(rnd() * cs.length)])) break; }
      ests.push(tot); depths.push(dep); }
    ests.sort((a, b) => a - b); const mean = ests.reduce((a, b) => a + b, 0) / ests.length;
    return { probe: true, mean, median: ests[ests.length >> 1], p90: ests[Math.floor(ests.length * 0.9)], depthMean: depths.reduce((a, b) => a + b, 0) / depths.length, depthMax: Math.max(...depths) };
  }
  if (dfs) { // exhaustive depth-first: every option at every decision, positions already seen are skipped; memory = current path only
    const seenI = new Set(); let states = 0, leaves = 0, lastP = 0; let complete = true;
    const record = () => { const v = (evalFn || evalBoard)(S, seat); if (v > best.v) { lastImp = macros; best = { v, raw: game.responses.map(r => ({ ...r })), rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) }; } };
    const timeOver = () => Date.now() - t0 > ms;
    const rec = (depth) => {
      if (timeOver()) { complete = false; return; }
      for (let g = 0; g < 400; g++) { autoAdvance(S); if (S.ended || !S.pending || S.turn !== 1 || dseat() !== seat) { leaves++; return; }
        const d = decision(S, seat); if (!d) return;
        if (isIdle()) { const sig = sigOf(d); if (seenI.has(sig)) return; seenI.add(sig); states++; macros++; record();
          if (onProgress && states - lastP >= 500) { lastP = states; onProgress({ macros: states, nodes: leaves, seen: seenI.size, frontier: depth, best: best.v, line: best.rs, ms: Date.now() - t0 }); }
          const ix = d.options.map((o, i) => i).filter(i => !/Battle Phase|End Phase/.test(d.options[i].label));
          const sn = snapshot();
          for (const i of ix) { if (timeOver()) { complete = false; return; } restore(sn); const dd = decision(S, seat); if (push(S, { seat, resp: dd.options[i].resp, label: dd.options[i].label })) rec(depth + 1); }
          return; }
        const cs = cands(d); if (!cs.length) return;
        if (cs.length === 1) { if (!apply(d, cs[0])) return; continue; }
        const sn = snapshot();
        for (const c of cs) { if (timeOver()) { complete = false; return; } restore(sn); const dd = decision(S, seat); if (dd && apply(dd, c)) rec(depth + 1); }
        return; }
    };
    rec(0);
    return { score: best.v, raw: best.raw, line: best.rs, board: best.board, nodes: leaves, macros: states, states, complete, ms: Date.now() - t0, prof: PROF };
  }
  consider(0); const rootSnap = frontier[0].snap;
  while (frontier.length && !timeUp()) {
    frontier.sort((a, b) => eff(b) - eff(a)); const node = frontier.shift(); CUR_BR = node.depth === 0 ? null : node.br; bexp[node.br] = (bexp[node.br] || 0) + 1;
    if (onProgress && macros - (searchT1._lp || 0) >= 50) { searchT1._lp = macros; onProgress({ macros, nodes, seen: seen.size, frontier: frontier.length, best: best.v, line: best.rs, ms: Date.now() - t0 }); }
    restore(node.snap); const d = decision(S, seat); if (!d) continue;
    if (process.env.DBG) console.log('EXPAND', node.depth, d.options.map(o => o.label.slice(0, 50)).join(' | '));
    for (let i = 0; i < d.options.length && !timeUp(); i++) {
      const o = d.options[i]; if (/Battle Phase|End Phase/.test(o.label)) continue;
      restore(node.snap); const dd = decision(S, seat);
      if (!push(S, { seat, resp: dd.options[i].resp, label: dd.options[i].label })) { if (process.env.DBG) console.log('PUSHFAIL', dd.options[i].label, JSON.stringify(S.errors && S.errors.slice(-1))); continue; }
      macro(node.depth, null, i);
    }
  }
  return { score: best.v, raw: best.raw, line: best.rs, board: best.board, nodes, macros, ms: Date.now() - t0, prof: PROF };
}
