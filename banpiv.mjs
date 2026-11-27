// banpiv.mjs — "what if the banish hits a key piece" pivots (Belal, Nov 27). Nervedo/Junoldo banish your top 3 cards face-down. For a
// line, find each banish step and each single-copy card the line still has to fetch after it; set the Deck so that card is on top when
// the banish happens, play the line up to the banish, then search the best way to finish from there. The guide shows these as clickable
// pivots: "the banish took Griffoh → do this instead".
// node banpiv.mjs '{"name":"medius","file":"lines/cands/medius/deep-o5.json","minutes":4}'  -> reports/banpiv-<name>.json/.md
import fs from 'fs'; import path from 'path';
import { parseYdk, name, ROOT } from './src/cards.mjs'; import * as E from './src/engine.mjs'; import { replay } from './src/replay.mjs';
import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(1); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]); const N = t.name, MIN = +(t.minutes ?? 4); fs.mkdirSync('reports', { recursive: true });
const c = JSON.parse(fs.readFileSync(t.file, 'utf8')); const SEED = Number(c.seed ?? 7);
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const mk = (order, sd = SEED) => { const op = OPP.main.slice(), oh = []; while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  return { id: 'bp', seed: String(sd), first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: order.slice(), extra: c.extra.slice(), side: [] }, hand: c.order.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } },
    responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, after: { 1: 0 }, stopAfterTurn: null }; };
// the engine shuffles the Deck list with seed+1 (first player) and puts the forced hand on top; replicate it to build a list whose
// shuffled result has the chosen card on top of the Deck (end of the list, right under the hand)
const mulberry = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let x = Math.imul(a ^ a >>> 15, 1 | a); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; };
const engShuffle = (arr, r) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const hand = c.order.slice(0, 5);
const actual = (() => { let m = engShuffle(c.order, mulberry(SEED + 1)); for (const h of hand) m.splice(m.indexOf(h), 1); return m; })(); // non-hand, bottom→top
const craft = (topCards) => { const m = actual.filter(x => !topCards.includes(x)); const nonHand = [...m, ...topCards.slice().reverse()]; const W = [...hand, ...nonHand]; // W order = what the engine's shuffle must produce (hand removed later)
  const n = W.length; const pi = engShuffle([...Array(n).keys()], mulberry(SEED + 1)); const A = new Array(n); for (let k = 0; k < n; k++) A[pi[k]] = W[k]; return A; };
const own = c.raw.filter(e => e.seat === 0 && !e.auto && e.label);
const HEAD = /^(Activate|Normal Summon|Link Summon|Special Summon \(procedure\)|Synchro Summon|Xyz Summon|Fusion Summon|Set Spell\/Trap|Tribute Summon)/;
const blocks = []; own.forEach((s, i) => { if (HEAD.test(s.label) || !blocks.length) blocks.push({ start: i, head: s.label }); }); blocks.forEach((b, k) => b.end = k + 1 < blocks.length ? blocks[k + 1].start : own.length);
const cnt = {}; for (const x of c.order) cnt[x] = (cnt[x] || 0) + 1;
const single = new Set(Object.keys(cnt).filter(k => cnt[k] === 1).map(Number).map(name));
const banBlocks = blocks.filter(b => /^Activate (Nervedo|Junoldo)/.test(b.head));
const val = (S) => +disruption(S, 0).toFixed(2);
const fdBanished = (S) => { const bv = String(E.boardView(S, 0)); const m = /Banished:([^\n]*)/.exec(bv.split('YOU:')[1] || bv); return m ? [...m[1].matchAll(/([^,]+?) \(face-down\)/g)].map(x => x[1].trim()) : []; };
let base = 0; { const r = await replay(mk(c.order), own, () => {}); base = r && r.S ? val(r.S) : 0; }
const out = { name: N, file: t.file, base, pivots: [] }; console.log(`${N}: line ${base}, ${banBlocks.length} banish steps`);
// The Deck is shuffled after every search or summon from it, so which 3 cards a banish takes is luck. Sweep game seeds (each one is a
// different shuffle) and keep, for every banish step and every key piece, the first seed where the line reaches the banish as written
// and the banish takes that piece. That seed is the "it went wrong" game; from there the search finds the best finish.
const want = banBlocks.map(b => ({ b, pieces: [...new Set(own.slice(b.end).map(s => /^Selected (.+?) \(Deck\)/.exec(s.label)).filter(Boolean).map(m => m[1]).filter(n => single.has(n)))], hit: {} }));
const SEEDS = +(t.seeds ?? 400);
for (let sd = 1; sd <= SEEDS && want.some(w => w.pieces.some(p => !(p in w.hit))); sd++) {
  for (const w of want) { if (w.pieces.every(p => p in w.hit)) continue; let r; try { r = await replay(mk(c.order, sd), own.slice(0, w.b.end), () => {}); } catch { continue; }
    if (!r || !r.S) continue; const matched = (r.S.game.responses || []).filter(e => e.seat === 0 && !e.auto && e.label).length; if (matched < w.b.end - 2) continue;
    const lost = fdBanished(r.S); for (const p of w.pieces) if (!(p in w.hit) && lost.includes(p)) w.hit[p] = { sd, lost }; } }
for (const w of want) for (const p of w.pieces) { const h = w.hit[p]; if (!h) { out.pivots.push({ at: w.b.head, lost: p, note: `not hit in ${SEEDS} shuffles` }); continue; }
  const r1 = await replay(mk(c.order, h.sd), own.slice(0, w.b.end), () => {}); const S0 = r1.S;
  const r2 = await replay(mk(c.order, h.sd), own, () => {}); const asWritten = r2 && r2.S ? val(r2.S) : 0;
  let best = { v: asWritten, steps: null, board: r2 && r2.S ? String(E.boardView(r2.S, 0)) : '' };
  if (!S0.ended && S0.turn === 1 && S0.pending) { const pre = S0.game.responses.length; const hints = {}; for (const k of c.keys || []) hints[k] = 2;
    const a = await searchT1(JSON.parse(JSON.stringify(S0.game)), { ms: MIN * 60000, nrpa: 3, seed: 17, hints, evalFn: (S2) => disruption(S2, 0) });
    if ((a.score || 0) > best.v) best = { v: +(+a.score).toFixed(2), steps: (a.raw || []).slice(pre).filter(e => !e.auto && e.label && e.seat === 0).map(e => e.label), board: a.board || '' }; }
  out.pivots.push({ at: w.b.head, after: w.b.end, lost: p, banished: h.lost, seed: h.sd, asWritten, v: best.v, keep: !best.steps, finish: best.steps, board: best.board });
  console.log(`  banish at "${w.b.head.slice(0, 40)}" takes ${p} (shuffle ${h.sd}): as written ${asWritten}, best ${best.v}`); }
fs.writeFileSync(`reports/banpiv-${N}.json`, JSON.stringify(out));
let md = `# Banish pivots: ${N} (line ${base})\n\n| banish step | piece lost | as written | best finish |\n|---|---|---|---|\n`; for (const p of out.pivots) md += `| ${p.at.slice(0, 60)} | ${p.lost} | ${p.asWritten ?? '-'} | ${p.v ?? p.note} |\n`;
fs.writeFileSync(`reports/banpiv-${N}.md`, md); console.log('done');
