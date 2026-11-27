// ordsearch.mjs — opener lines that work on every shuffle (Belal, Nov 27). Nervedo/Junoldo banish your top 3 cards face-down; a line that
// needs a single-copy piece later (Griffoh, Mind Shuffle, LDR...) breaks when the banish hits it. Here the search plays the opener on
// "hard" shuffles — every single-copy card of the deck stacked on top in a different order each time — so it learns lines that don't
// lose to the banish, plus a few normal shuffles. Every line found (and any lines given) is then replayed on 8 normal shuffles and all the
// hard ones; the line with the best average board on the normal shuffles wins (ties: best worst case). Fixed work budget (ppm), no hints.
// node ordsearch.mjs '{"name":"medius","hand":[...5 names],"deck":"decks/findlist-1100.ydk","hard":6,"normal":2,"minutes":15,"ppm":3945,"also":["lines/piv/medius.json"]}'
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import { replay } from './src/replay.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(1); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]); const N = t.name; fs.mkdirSync('reports', { recursive: true }); fs.mkdirSync('lines/robust', { recursive: true });
const log = (s) => { const l = new Date().toISOString().slice(11, 19) + ' ' + s; console.log(l); fs.appendFileSync(`reports/ordsearch-${N}.log`, l + '\n'); };
const code = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
const D = parseYdk(fs.readFileSync(t.deck || 'decks/findlist-1100.ydk', 'utf8'));
const hand = t.hand.map(code); const rest = D.main.slice(); for (const h of hand) { const i = rest.indexOf(h); if (i >= 0) rest.splice(i, 1); }
const rng = (s) => { let x = s >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const shuf = (a, r) => { a = a.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; };
const cnt = {}; for (const c of rest) cnt[c] = (cnt[c] || 0) + 1;
const single = rest.filter(c => cnt[c] === 1), multi = rest.filter(c => cnt[c] > 1);
// hard: the single-copy pieces lines most often have to fetch go on top (in a different order each time), so the banish hits them
// the engine shuffles the given Deck list with the game seed (lab games: seed 7 -> 8 for the first player); to put chosen cards on top we
// build the list that the engine's own shuffle turns into the wanted order (top of the Deck = end of the list)
const mulberry = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; };
const engShuffle = (arr, r) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const craft = (topFirst) => { const W = [...hand, ...topFirst.slice().reverse()]; const n = W.length; const pi = engShuffle([...Array(n).keys()], mulberry(8)); const A = new Array(n); for (let k = 0; k < n; k++) A[pi[k]] = W[k]; return A; };
// hard: the single-copy pieces lines most often have to fetch go on top (in a different order each time), so the banish hits them
const KEY = ['Griffoh', 'Mind Shuffle', 'Theorealize Liberation', 'Light and Darkness Ritual', 'Skull Archfiend of Chaos', 'Artmage Impasto -Recapture-', 'Junoldo the Shadespirit Power Patron', 'Theorealize Past Lull', 'Magician of Dark Chaos - Black Chaos', 'Prohibited Power Patron Portal - Terminus'].map(code).filter(c => single.includes(c));
const hardOrd = (i) => { const r = rng(5000 + i * 7919); const top = shuf(KEY, r).slice(0, 6); const others = rest.slice(); for (const c of top) others.splice(others.indexOf(c), 1); return craft([...top, ...shuf(others, r)]); };
const normOrd = (i) => { const r = rng(9000 + i * 104729); return [...hand, ...shuf(rest, r)]; };
const HARD = Array.from({ length: +(t.hard ?? 6) }, (_, i) => hardOrd(i)), NORMS = Array.from({ length: +(t.normal ?? 2) }, (_, i) => normOrd(i));
// test shuffles: the same 8 normal shuffles for every line (independent of the search shuffles)
const TEST = Array.from({ length: 8 }, (_, i) => normOrd(100 + i));
const MIN = +(t.minutes ?? 15), PPM = +(t.ppm ?? 0);
const PAR = Math.max(1, os.cpus().length - 1);
const runDeep = (ord, i) => new Promise(ok => { const args = { deck: t.deck || 'decks/findlist-1100.ydk', main: ord, hand: ord.slice(0, 5).map(name), minutes: MIN, seed: 7, sseed: 300 + i, hints: false, cardv: false, learn: false, wantRaw: true, ...(PPM ? { ppm: PPM } : {}) };
  const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(args)], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = ''; p.stdout.on('data', b => o += b);
  const tm = setTimeout(() => { try { p.kill(); } catch {} }, (MIN * 2.5 + 10) * 60000); p.on('close', () => { clearTimeout(tm); const m = /RESULT (.*)/.exec(o); if (!m) return ok(null); const x = JSON.parse(m[1]); ok({ v: x.v, raw: x.raw, order: ord, from: i }); }); });
const jobs = [...HARD.map((o, i) => [o, `hard${i + 1}`]), ...NORMS.map((o, i) => [o, `norm${i + 1}`])];
log(`${N}: ${hand.map(name).join(', ')} — ${single.length} single-copy cards stacked on top in ${HARD.length} hard shuffles + ${NORMS.length} normal; ${MIN}-min searches${PPM ? ` (${PPM} playouts/min)` : ''}`);
const found = []; const q = jobs.slice(); await Promise.all(Array.from({ length: PAR }, async () => { while (q.length) { const [o, tag] = q.shift(); const r = await runDeep(o, tag); if (r && r.raw) { found.push({ ...r, tag }); log(`  search on ${tag}: ${r.v}`); } else log(`  search on ${tag}: failed`); } }));
// given lines (current guide line etc.)
for (const f of t.also || []) { try { const c = JSON.parse(fs.readFileSync(f, 'utf8')); found.push({ v: c.fit, raw: c.raw.filter(e => e.seat === 0 && !e.auto && e.label), order: c.order, tag: path.basename(f), extra: c.extra, seed: c.seed }); } catch (e) { log('could not read ' + f); } }
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const mk = (ord, extra, seed) => { const op = OPP.main.slice(), oh = []; while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  return { id: 'os', seed: String(seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: ord.slice(), extra: (extra || D.extra).slice(), side: [] }, hand: ord.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } },
    responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, after: { 1: 0 }, stopAfterTurn: null }; };
const val = async (L, ord) => { try { const r = await replay(mk(ord, L.extra, L.seed), L.raw.filter(e => e.seat === 0 && !e.auto && e.label), () => {}); return r && r.S ? +disruption(r.S, 0).toFixed(2) : 0; } catch { return 0; } };
const rows = [];
for (const L of found) { const test = []; for (const o of TEST) test.push(await val(L, o)); const hard = []; for (const o of HARD) hard.push(await val(L, o));
  const avg = test.reduce((a, b) => a + b, 0) / test.length; rows.push({ tag: L.tag, found: L.v, avg: +avg.toFixed(2), min: Math.min(...test), full: test.filter(x => x >= Math.max(...test) - 0.05).length, test, hardAvg: +(hard.reduce((a, b) => a + b, 0) / hard.length).toFixed(2), L }); }
rows.sort((a, b) => b.avg - a.avg || b.min - a.min);
let md = `# Shuffle-proof lines: ${N}\nHand: ${hand.map(name).join(', ')}\n\n| line | found at | avg over 8 normal shuffles | worst | hard shuffles avg | 8 shuffles |\n|---|---|---|---|---|---|\n`;
for (const r of rows) md += `| ${r.tag} | ${r.found} | ${r.avg} | ${r.min} | ${r.hardAvg} | ${r.test.join(' ')} |\n`;
fs.writeFileSync(`reports/ordsearch-${N}.md`, md);
const best = rows[0]; if (best) fs.writeFileSync(`lines/robust/${N}.json`, JSON.stringify({ name: N, hand: t.hand, order: TEST[0], extra: best.L.extra || D.extra, seed: best.L.seed ?? 7, raw: best.L.raw, fit: best.avg, test: best.test, hardAvg: best.hardAvg, tag: best.tag }));
log(`best: ${best ? `${best.tag} avg ${best.avg} worst ${best.min}` : 'none'}`);
