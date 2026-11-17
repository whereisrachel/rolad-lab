// Generic first-turn search player. Works for ANY card the engine has a script for: it explores the real game
// (snapshots of the engine's memory, so backtracking is cheap) and keeps the best board it finds.
import { OcgCoreInternal } from 'ocgcore-wasm';
import zlib from 'zlib';
const ZS = !!process.env.ZSNAP;
import { resetLib, simulate, push as push0, decision as decision0, answer, boardView as boardView0, teamOf, seatOf, M, R, L, QFLAGS } from './engine.mjs';
import { autoAdvance as autoAdvance0 } from './auto.mjs';
// optional timing of every engine call (PROF2=1): where search time goes
export const T2 = { push: 0, npush: 0, dec: 0, ndec: 0, bv: 0, nbv: 0, eval: 0, neval: 0, auto: 0, nauto: 0, sig: 0, nsig: 0, replay: 0, nreplay: 0, replaySteps: 0 };
const tm = (k, f) => function (...a) { if (!process.env.PROF2) return f(...a); const t = process.hrtime.bigint(); try { return f(...a); } finally { T2[k] += Number(process.hrtime.bigint() - t) / 1e6; T2['n' + k]++; } };
const push = tm('push', push0), decision = tm('dec', decision0), boardView = tm('bv', boardView0), autoAdvance = tm('auto', autoAdvance0);
import { cardDB, name } from './cards.mjs';

const PAGE = 4096;
const LIM = 4 * 1024 * 1024; // observed: engine memory changes only below ~2 MB; checked in full every 40 snapshots
export const DEAD = {};
// --- canonical positions: the same board reached in a different order / different zone counts once ---
const ZN = /\b(M[1-5]|EMZ-[LR]|S[1-5]|FZ|PZ-[LR])\b/g;
export const normLabel = (l) => String(l).replace(ZN, (z) => z.startsWith('EMZ') ? 'EMZ' : z[0]);
const AR = { '↖': 0x40, '↑': 0x80, '↗': 0x100, '←': 0x8, '→': 0x20, '↙': 0x1, '↓': 0x2, '↘': 0x4 };
const ZIDX = { M1: 0, M2: 1, M3: 2, M4: 3, M5: 4, 'EMZ-L': 5, 'EMZ-R': 6 };
export function pointsTo(z, mk) { const out = []; if (z <= 4) { if (mk & 0x8 && z > 0) out.push(z - 1); if (mk & 0x20 && z < 4) out.push(z + 1); for (const [b, dc] of [[0x40, -1], [0x80, 0], [0x100, 1]]) if (mk & b) { const cc = z + dc; if (cc === 1) out.push(5); if (cc === 3) out.push(6); } }
  else { const c0 = z === 5 ? 1 : 3; for (const [b, dc] of [[0x1, -1], [0x2, 0], [0x4, 1]]) if (mk & b) { const cc = c0 + dc; if (cc >= 0 && cc <= 4) out.push(cc); } } return out; }
// columns 0-1 sit only under the left Extra Monster Zone's reach, 3-4 only under the right one, 2 under both
const COLCLASS = ['L', 'L', 'C', 'R', 'R'];
export function canonBoard(bv) {
  return String(bv).split('\n').map(line => {
    let m;
    if ((m = /^(\s*Monsters: )(.*)$/.exec(line))) {
      const ents = m[2].split(' || ').map(x => { const k = /^(M[1-5]|EMZ-[LR]):\s*(.*)$/.exec(x.trim()); if (!k) return null; const ar = /\bL\d([↖↑↗←→↙↓↘]+)/.exec(k[2]); let mk = 0; if (ar) for (const ch of ar[1]) mk |= AR[ch] || 0;
        return { z: ZIDX[k[1]], txt: k[2].replace(/\s+\d+\/[\d-]+.*$/, '').trim(), mk, link: !!ar }; }).filter(Boolean);
      const at = {}; for (const e of ents) at[e.z] = e;
      return m[1] + ents.map(e => { if (e.link) { const p = pointsTo(e.z, e.mk); return (e.z >= 5 ? 'EMZ:' : 'M:') + e.txt + '->[' + p.map(z => at[z] ? at[z].txt : '_').sort().join(',') + ']'; } return (e.z >= 5 ? 'EMZ:' : COLCLASS[e.z] + ':') + e.txt; }).sort().join(' || ');
    }
    if ((m = /^(\s*Spell\/Trap: )(.*)$/.exec(line))) return m[1] + m[2].split(' || ').map(x => normLabel(x.replace(/^(S[1-5]|FZ|PZ-[LR]):\s*/, ''))).sort().join(' || ');
    if ((m = /^(\s*(?:GY|Banished|Hand): )(.*)$/.exec(line))) return m[1] + m[2].split(', ').sort().join(', ');
    return line;
  }).join('\n');
}

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

export async function searchT1(game, { evalFn = null, seat = 0, ms = 15000, altCap = 3, maxMacro = 10, frontierCap = 250, seed = 1, maxMacros = Infinity, guideW = 0, patience = Infinity, script = null, div = +(process.env.DIV ?? 1.5), roll = +(process.env.ROLL ?? 0), rollDepth = +(process.env.ROLLD ?? 2), enumOnly = false, enumDepth = 2, enumCap = 48, onProgress = null, dfs = false, probe = 0, nsOnly = null, listRoot = false, rootOnly = null, nrpa = 0 } = {}) {
  searchT1._lp = 0; resetLib(); const S = autoAdvance(await simulate(game));
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
    const pages = { runs, data: ZS ? zlib.deflateRawSync(data, { level: 1 }) : data, bi, z: ZS };
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
    { const r = s.pages.runs, d = s.pages.z ? zlib.inflateRawSync(s.pages.data) : s.pages.data; let w = 0; for (let i = 0; i < r.length; i += 2) { d.copy(cur, r[i], w, w + r[i + 1]); w += r[i + 1]; } }
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
  // legal options worth branching on: identical choices once, Set only Traps/Quick-Play Spells (setting anything else first turn changes nothing)
  const SETOK = (lbl) => { if (/^Set monster /.test(lbl)) return false; const m = /^Set Spell\/Trap (.+?) \(/.exec(lbl); if (!m) return true; const D = cardDB(); for (const [code, c] of D.data) if (name(code) === m[1]) { const t = c.type ?? 0; return !!(t & 0x4) || ((t & 0x2) && (t & 0x10000)); } return true; };
  const SETC = new Map(); const setOk = (l) => { if (!SETC.has(l)) SETC.set(l, SETOK(l)); return SETC.get(l); };
  const nsBlocked = (l) => { if (nsOnly === null) return false; const m = /^Normal Summon (.+?) \(/.exec(l); return !!m && m[1] !== nsOnly; };
  const idleOpts = (d) => { const seenL = new Set(), ix = []; d.options.forEach((o, i) => { if (/Battle Phase|End Phase/.test(o.label)) return; if (!setOk(o.label) || nsBlocked(o.label)) return; const k = normLabel(o.label); if (seenL.has(k)) return; seenL.add(k); ix.push(i); }); return ix; };
  // first turn: never chain your own hand trap (an effect that only answers the opponent) to your own play
  const HTX = new Map(); const handTrap = (lbl) => { const m = /^Activate (.+?) \(hand\)/.exec(lbl); if (!m) return false; if (!HTX.has(m[1])) { const D = cardDB(); let t = ''; for (const [code] of D.data) if (name(code) === m[1]) { t = (D.text.get(code) || {}).desc || ''; break; } HTX.set(m[1], (/\(Quick Effect\): You can (discard|send) this card/i.test(t) && !/Special Summon this card/i.test(t)) || (/Quick Effect/i.test(t) && /(negate|your opponent|opponent.s)/i.test(t) && !/Special Summon this card/i.test(t))); } return HTX.get(m[1]); };
  const placeCands = (d) => { // zones decide Link arrows, so offer the zones that differ, once each
    if (!d.options.every(o => o.place && o.place.location === L.MZONE)) return [{ kind: 'text', t: '1' }];
    const mz = S.lb.duelQueryLocation(S.h, { flags: QFLAGS, controller: d.options[0].place.player, location: L.MZONE });
    const ptBy = (z) => { const r = []; mz.forEach((c, zz) => { if (c && c.code && c.link && pointsTo(zz, c.link.marker || 0).includes(z)) r.push(zz); }); return r.join(','); };
    const seenK = new Set(), out = []; d.options.forEach((o, i) => { const z = o.place.sequence; if (o.place.player !== d.options[0].place.player) return; const k = z >= 5 ? 'EMZ' + z : COLCLASS[z] + '|' + ptBy(z); if (seenK.has(k)) return; seenK.add(k); out.push({ kind: 'text', t: String(i + 1) }); });
    return out.length ? out : [{ kind: 'text', t: '1' }]; };
  const multiCands = (d) => { // every distinct choice (identical copies once); choose-2/3: every distinct combination, capped
    const o = d.options; const idx = o.map((x, i) => i).filter(i => !o[i].cancel); const n = Math.max(d.min || 1, 1); const byL = new Map(); for (const i of idx) { const k = normLabel(o[i].label); if (!byL.has(k)) byL.set(k, i); }
    const uniq = [...byL.values()]; if (n === 1) return uniq.map(i => ({ kind: 'text', t: String(i + 1) }));
    const out = [], seenK = new Set(); const rec = (st, pick) => { if (out.length >= 40) return; if (pick.length === n) { const k = pick.map(i => normLabel(o[i].label)).sort().join('|'); if (!seenK.has(k)) { seenK.add(k); out.push({ kind: 'text', t: pick.map(i => i + 1).join(' ') }); } return; } for (let j = st; j < idx.length; j++) { pick.push(idx[j]); rec(j + 1, pick); pick.pop(); } };
    rec(0, []); return out.length ? out : cands(d); };
  const unselCands = (d) => { const sel = d.options.filter(x => x.card && !/^UN/.test(x.label)); const seenL = new Set(), out = []; sel.forEach((x, k) => { const key = normLabel(x.label); if (seenL.has(key)) return; seenL.add(key); out.push({ kind: 'unselect', skip: k }); }); return out.length ? out : cands(d); };
  const subCands = (d) => { let cs = d.kind === 'multi' ? multiCands(d) : d.kind === 'unselect' ? unselCands(d) : cands(d); if (d.kind === 'place') return (d.min || 1) === 1 ? placeCands(d) : cs.slice(0, 1);
    if (d.kind === 'pick' && d.options.every(o => /^face-/.test(o.label))) return cs.slice(0, 1); // battle position: irrelevant first turn
    if (d.type === M.SELECT_CHAIN) cs = cs.filter(c => c.kind !== 'pick' || d.options[c.i].pass || !handTrap(d.options[c.i].label)); const seenL = new Set(), out = [];
    for (const c of cs) { let k; if (c.kind === 'pick') k = normLabel(d.options[c.i].label); else if (c.kind === 'text' && d.options && /^[0-9 ]+$/.test(c.t)) k = c.t.split(' ').map(n => normLabel(d.options[+n - 1]?.label || n)).sort().join('|'); else k = JSON.stringify(c); if (seenL.has(k)) continue; seenL.add(k); out.push(c); }
    return out; };
  const canonSig = tm('sig', (d) => canonBoard(boardView(S, seat)) + '|' + [...new Set(d.options.map(o => normLabel(o.label)))].sort().join(';'));
  const isIdle = () => S.pending && S.pending.type === M.SELECT_IDLECMD && dseat() === seat && S.turn === 1;
  const sigOf = (d) => boardView(S, seat) + '|' + d.options.map(o => o.label).join(';');
  // branch diversity: every opening branch (incl. each choice at its first sub-decisions) gets explored a few steps before the search narrows on whatever looks best right away
  let CUR_BR = null, nBr = 0; const bexp = {}; const eff = (n) => n.pri + div / (1 + (bexp[n.br] || 0));
  // light frontier: positions waiting to be expanded are kept as the moves that reach them (a few KB), not engine memory (~0.5 MB);
  // expanding one replays those moves from the start of the turn
  const LIGHT = !!process.env.LIGHT; let ROOT = null;
  const restoreAny = tm('replay', (s) => { if (!s.light) return restore(s); restore(ROOT); for (const r of s.rsp) if (!push(S, { ...r })) { if (process.env.CHK) console.log('REPLAY FAIL'); return false; }
    if (s.chk) { const d = decision(S, seat); const now = d ? canonSig(d) : ''; if (now !== s.chk) console.log('REPLAY MISMATCH'); } return true; });
  const BEAM = +(process.env.BEAM || 0);
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
    const v = tm('eval', evalFn || evalBoard)(S, seat);
    if (v > best.v && isIdle()) { lastImp = macros; best = { v, raw: game.responses.map(r => ({ ...r })), rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) }; }
    return v;
  }
  function consider(depth) {
    const d = decision(S, seat); if (!d) return;
    const sig = process.env.CANON ? canonSig(d) : sigOf(d); if (seen.has(sig)) return; seen.add(sig);
    const v = tm('eval', evalFn || evalBoard)(S, seat); nodes++;
    if (v > best.v) lastImp = macros, best = { v, raw: game.responses.map(r => ({ ...r })), rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) };
    const gv = guideW ? guideW * evalBoard(S, seat) : 0;
    let pri = v + gv + 0.15 * depth + (nodes % 7) * 0.001;
    let snap = null;
    if (roll > 0 && depth >= 1 && depth <= rollDepth) { snap = snapshot(); let rv = -1; for (let k = 0; k < roll; k++) { restore(snap); rv = Math.max(rv, rollout()); macros += 0.25; } restore(snap); if (process.env.DBGR) console.log("ROLL", depth, v.toFixed(2), "best rollout", rv.toFixed(2), game.responses.slice(rootLen).map(r => r.label || "").filter(l => /Selected|Special Summon it|Normal Summon|Activate/.test(l)).slice(-3).join(" > ").slice(0, 160)); if (rv > v) pri += 0.9 * (rv - v); }
    if (frontier.length >= frontierCap && pri <= minPri) return; // would be pruned at once: skip the snapshot and the sort
    frontier.push({ snap: snap || (LIGHT && ROOT ? { light: true, rsp: game.responses.slice(ROOT.n).map(r => ({ ...r })), chk: process.env.CHK ? canonSig(d) : null } : snapshot()), v, depth, pri, br: CUR_BR === null ? nBr++ : CUR_BR });
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
        const cs = process.env.CANON ? subCands(d) : cands(d); if (!cs.length) { { const dk = d.kind + ':' + String(d.prompt || '').slice(0, 50); DEAD[dk] = (DEAD[dk] || 0) + 1; } return; }
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
        if (isIdle()) { const ix = process.env.RAW ? d.options.map((o, i) => i).filter(i => !/Battle Phase|End Phase/.test(d.options[i].label)) : idleOpts(d); if (!ix.length) break; { const T = (searchT1._tally ||= {}); const e = (T['IDLE'] ||= { n: 0, b: 0, ex: '' }); e.n++; e.b += ix.length; const kinds = (T['IDLEKIND'] ||= {}); for (const i of ix) { const k = d.options[i].label.split(' ')[0] + (/\(hand\)/.test(d.options[i].label) ? '(hand)' : ''); kinds[k] = (kinds[k] || 0) + 1; } } w *= ix.length; tot += w; dep++; const i = ix[Math.floor(rnd() * ix.length)]; if (!push(S, { seat, resp: d.options[i].resp, label: d.options[i].label })) break; continue; }
        const cs = process.env.RAW ? cands(d) : subCands(d); if (!cs.length) break; if (cs.length > 1) { w *= cs.length; tot += w; const key = d.kind + ':' + String(d.msg || d.prompt || '').replace(/[0-9]+/g, '#').slice(0, 70); const T = (searchT1._tally ||= {}); const e = (T[key] ||= { n: 0, b: 0, ex: '' }); e.n++; e.b += cs.length; if (!e.ex) e.ex = d.options.slice(0, 6).map(o => o.label.slice(0, 40)).join(' ; '); } if (!apply(d, cs[Math.floor(rnd() * cs.length)])) break; }
      ests.push(tot); depths.push(dep); }
    ests.sort((a, b) => a - b); const mean = ests.reduce((a, b) => a + b, 0) / ests.length;
    return { probe: true, mean, median: ests[ests.length >> 1], p90: ests[Math.floor(ests.length * 0.9)], depthMean: depths.reduce((a, b) => a + b, 0) / depths.length, depthMax: Math.max(...depths) };
  }
  if (dfs) { // exhaustive depth-first: every option at every decision, positions already seen are skipped; memory = current path only
    const seenI = new Set(); let states = 0, leaves = 0, lastP = 0; let complete = true;
    const record = () => { const v = (evalFn || evalBoard)(S, seat); if (v > best.v) { lastImp = macros; best = { v, raw: game.responses.map(r => ({ ...r })), rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) }; } };
    const timeOver = () => Date.now() - t0 > ms;
    // budget-split depth-first: every branch at every level gets its share of the budget, and the budget doubles each round,
    // so all first moves are covered early and the search deepens evenly; a round that never cut a branch is a complete search
    let cut = false;
    const rec = (depth, bud) => {
      if (timeOver()) { complete = false; cut = true; return; }
      for (let g = 0; g < 400; g++) { autoAdvance(S); if (S.ended || !S.pending || S.turn !== 1 || dseat() !== seat) { leaves++; return; }
        const d = decision(S, seat); if (!d) return;
        if (isIdle()) { const sig = canonSig(d); if (seenI.has(sig)) return; seenI.add(sig); states++; macros++; record(); bud -= 1;
          if (onProgress && states - lastP >= 500) { lastP = states; onProgress({ macros: states, nodes: leaves, seen: seenI.size, frontier: depth, best: best.v, line: best.rs, ms: Date.now() - t0 }); }
          const ix = idleOpts(d); if (!ix.length) return; if (bud < 1) { cut = true; return; }
          const share = bud / ix.length; const sn = snapshot();
          for (const i of ix) { if (timeOver()) { complete = false; cut = true; return; } restore(sn); const dd = decision(S, seat); if (push(S, { seat, resp: dd.options[i].resp, label: dd.options[i].label })) rec(depth + 1, share); }
          return; }
        const cs = subCands(d); if (!cs.length) return;
        if (cs.length === 1) { if (!apply(d, cs[0])) return; continue; }
        const share = bud / cs.length; if (share < 0.05) { cut = true; if (!apply(d, cs[0])) return; continue; }
        const sn = snapshot();
        for (const c of cs) { if (timeOver()) { complete = false; cut = true; return; } restore(sn); const dd = decision(S, seat); if (dd && apply(dd, c)) rec(depth + 1, share); }
        return; }
    };
    const root = snapshot(); let B = 64, rounds = 0;
    while (!timeOver()) { rounds++; seenI.clear(); cut = false; restore(root); rec(0, B); if (onProgress) onProgress({ macros: states, nodes: leaves, seen: seenI.size, frontier: -B, best: best.v, line: best.rs, ms: Date.now() - t0 }); if (!cut) { complete = true; break; } B *= 2; }
    return { score: best.v, raw: best.raw, line: best.rs, board: best.board, nodes: leaves, macros: states, states, complete, ms: Date.now() - t0, prof: PROF };
  }
  if (nrpa) { // Nested Rollout Policy Adaptation: play whole turns to the end, learn which moves appear in the best whole turns, steer toward them.
    // Only finished turns are judged (best point of each turn), so long set-up lines are not cut off for looking weak half-way.
    const ROOTF = snapshot(); const N = +(process.env.NRPA_N || 60), LV = nrpa, ALPHA = 1;
    const ckey = (d, c) => { if (c.kind === 'pick') return normLabel(d.options[c.i].label); if (c.kind === 'unselect') { const sel = d.options.filter(x => x.card && !/^UN/.test(x.label)); return 'U:' + normLabel(sel[Math.min(c.skip, sel.length - 1)]?.label || ''); } if (c.kind === 'text' && d.options && /^[0-9 ]+$/.test(c.t)) return c.t.split(' ').map(n => normLabel(d.options[+n - 1]?.label || n)).sort().join('|'); return JSON.stringify(c); };
    const pkey = (d) => String(d.prompt || d.kind || '').replace(/[0-9]+/g, '#').slice(0, 80);
    // starting preference read from card text (learning can overturn it): Normal Summoning a monster with no Normal Summon effect is unlikely,
    // a hand trap even less (it spends the Normal Summon and the hand trap)
    const PRI = new Map(); const prior = (key) => { if (PRI.has(key)) return PRI.get(key); let p = 0; const m = /^I:Normal Summon (.+?) \(/.exec(key);
      if (m) { const D = cardDB(); let t = ''; for (const [code] of D.data) if (name(code) === m[1]) { t = (D.text.get(code) || {}).desc || ''; break; }
        if (/\(Quick Effect\): You can (discard|send) this card/i.test(t)) p = -3; else if (!/Normal Summoned|Normal or Special Summoned/i.test(t)) p = -1; }
      PRI.set(key, p); return p; };
    let playouts = 0; const BR = searchT1.BR = { ended: 0, nopending: 0, turn: 0, oppdecides: 0, nodec: 0, noidle: 0, nocands: 0, apply1: 0, gofail: 0, dbg: 0 };
    const playout = (pol) => {
      restore(ROOTF); playouts++; const steps = []; let bv = -1, blen = 0;
      for (let g = 0; g < 800; g++) {
        autoAdvance(S); if (S.ended || !S.pending || S.turn !== 1 || dseat() !== seat) { BR[S.ended ? 'ended' : !S.pending ? 'nopending' : S.turn !== 1 ? 'turn' : 'oppdecides']++; break; }
        const d = decision(S, seat); if (!d) { BR.nodec++; break; } let moves;
        if (isIdle()) { const v = (evalFn || evalBoard)(S, seat); if (v > bv) { bv = v; blen = steps.length; }
          if (v > best.v) best = { v, raw: game.responses.map(r => ({ ...r })), rs: game.responses.slice(rootLen).filter(r => r.seat === seat || !r.auto).map(r => r.label).filter(Boolean), board: boardView(S, seat) };
          const ix = idleOpts(d); if (!ix.length) { BR.noidle++; if (process.env.DBGN && steps.length > 2 && BR.dbg++ < 4) console.error('NOIDLE', steps.length, steps.map(x => x.k).join(' > '), JSON.stringify(d.options.map(o => o.label)).slice(0, 600)); break; } moves = ix.map(i => ({ key: 'I:' + normLabel(d.options[i].label), go: () => push(S, { seat, resp: d.options[i].resp, label: d.options[i].label }) })); }
        else { const cs = subCands(d); if (!cs.length) { BR.nocands++; BR['nc:' + d.kind] = (BR['nc:' + d.kind] || 0) + 1; break; } if (cs.length === 1) { if (!apply(d, cs[0])) { BR.apply1++; break; } continue; } const pk = pkey(d); moves = cs.map(c => ({ key: 'S:' + pk + '|' + ckey(d, c), go: () => apply(d, c) })); }
        let z = 0; const w = moves.map(m => { const e = Math.exp((pol.get(m.key) || 0) + prior(m.key)); z += e; return e; }); let r = rnd() * z, ci = 0; while (ci < w.length - 1 && (r -= w[ci]) > 0) ci++;
        steps.push({ keys: moves.map(m => m.key), k: moves[ci].key }); if (!moves[ci].go()) { BR.gofail++; BR['gf:' + moves[ci].key.slice(0, 60)] = (BR['gf:' + moves[ci].key.slice(0, 60)] || 0) + 1; break; }
      }
      return { v: bv, seq: steps.slice(0, blen) };
    };
    const adapt = (pol, seq) => { const p = new Map(pol); for (const st of seq) { let z = 0; const e = st.keys.map(k => { const x = Math.exp((pol.get(k) || 0) + prior(k)); z += x; return x; }); p.set(st.k, (p.get(st.k) || 0) + ALPHA); st.keys.forEach((k, i) => p.set(k, (p.get(k) || 0) - ALPHA * e[i] / z)); } return p; };
    const run = (lv, pol) => { if (lv === 0 || timeUp()) return playout(pol); let b = { v: -1, seq: [] }; for (let i = 0; i < N && !timeUp(); i++) { const r = run(lv - 1, pol); if (r.v >= b.v) b = r; pol = adapt(pol, b.seq); } return b; };
    let lastP = 0;
    while (!timeUp()) { run(LV, new Map()); if (onProgress && playouts - lastP >= 200) { lastP = playouts; onProgress({ macros: playouts, nodes: 0, seen: 0, frontier: 0, best: best.v, line: best.rs, ms: Date.now() - t0 }); } }
    return { score: best.v, raw: best.raw, line: best.rs, board: best.board, nodes: playouts, macros: playouts, ms: Date.now() - t0, prof: PROF };
  }
  if (listRoot) { const d = decision(S, seat); return { root: d && isIdle() ? idleOpts(d).map(i => normLabel(d.options[i].label)) : [] }; }
  ROOT = snapshot(); consider(0); const rootSnap = frontier[0].snap;
  while (frontier.length && !timeUp()) {
    let node;
    if (BEAM) { // step-by-step beam: finish every position at the shallowest step before going deeper, keeping only the best BEAM per step
      let md = Infinity; for (const x of frontier) if (x.depth < md) md = x.depth;
      const lvl = frontier.filter(x => x.depth === md).sort((a, b) => eff(b) - eff(a));
      if (lvl.length > BEAM) { const drop = new Set(lvl.slice(BEAM)); for (let i = frontier.length - 1; i >= 0; i--) if (drop.has(frontier[i])) frontier.splice(i, 1); }
      node = lvl[0]; frontier.splice(frontier.indexOf(node), 1);
    } else { frontier.sort((a, b) => eff(b) - eff(a)); node = frontier.shift(); } CUR_BR = node.depth === 0 ? null : node.br; bexp[node.br] = (bexp[node.br] || 0) + 1;
    if (onProgress && macros - (searchT1._lp || 0) >= 50) { searchT1._lp = macros; onProgress({ macros, nodes, seen: seen.size, frontier: frontier.length, best: best.v, line: best.rs, ms: Date.now() - t0 }); }
    let nsnap = node.snap; if (nsnap.light) { if (restoreAny(nsnap) === false) continue; nsnap = snapshot(); } else restore(nsnap); const d = decision(S, seat); if (!d) continue;
    if (process.env.DBG) console.log('EXPAND', node.depth, d.options.map(o => o.label.slice(0, 50)).join(' | '));
    const okI = process.env.CANON ? new Set(idleOpts(d)) : null;
    for (let i = 0; i < d.options.length && !timeUp(); i++) {
      const o = d.options[i]; if (/Battle Phase|End Phase/.test(o.label)) continue; if (okI && !okI.has(i)) continue; if (rootOnly && node.depth === 0 && normLabel(o.label) !== rootOnly) continue;
      restore(nsnap); const dd = decision(S, seat);
      if (!push(S, { seat, resp: dd.options[i].resp, label: dd.options[i].label })) { if (process.env.DBG) console.log('PUSHFAIL', dd.options[i].label, JSON.stringify(S.errors && S.errors.slice(-1))); continue; }
      macro(node.depth, null, i);
    }
  }
  return { score: best.v, raw: best.raw, line: best.rs, board: best.board, nodes, macros, ms: Date.now() - t0, prof: PROF };
}
