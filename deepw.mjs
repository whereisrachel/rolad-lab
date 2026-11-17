// one deep line search: node deepw.mjs '<json task>' -> prints RESULT {json}
// task: { deck: path, hand: [names], minutes, divs: "6,1.5", seed }
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(0); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]); const deck = parseYdk(fs.readFileSync(t.deck, 'utf8')); if (t.main) deck.main = t.main.slice(); /* exact Deck order when given */
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const pool = deck.main.slice(); const h = t.hand.map(n => { const c = findCard(n); const code = Array.isArray(c) ? c[0] : c; let i = pool.findIndex(k => name(k) === name(code)); if (i < 0) { pool.push(code); i = pool.length - 1; } return pool.splice(i, 1)[0]; });
// opponent: goldfish, or holding hand traps it fires at the first legal moment (t.scn: none | ash | imperm | droll | any combination joined by +)
const SCN = { ash: 'Ash Blossom & Joyous Spring', imperm: 'Infinite Impermanence', droll: 'Droll & Lock Bird' };
const need = String(t.scn || 'none').split('+').filter(x => SCN[x]);
const op = OPP.main.slice(), oh = []; for (const q of need) { const c = findCard(SCN[q]); const code = Array.isArray(c) ? c[0] : c; const i = op.findIndex(k => name(k) === name(code)); if (i >= 0) oh.push(op.splice(i, 1)[0]); }
while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
const mk = () => ({ id: 'dw', seed: String(t.seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { ...deck, main: [...h, ...pool] }, hand: h }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: need }, stopAfterTurn: null });
const divs = String(t.divs || '6,1.5').split(',').map(Number); let best = { score: -1 };
// opening lanes: every legal first move gets an equal share of the time (the search builds long lines well once the opening is fixed,
// but left alone it keeps chasing whatever adds board value fastest); then one open search with the rest of the time
const OPEN = process.env.OPEN === '1';
if (process.env.NRPA !== '0') { process.env.NRPA_N ||= '30'; const r = await searchT1(mk(), { ms: t.minutes * 60000, nrpa: +(process.env.NRPA || 3), seed: t.sseed || 1, evalFn: (S, s) => disruption(S, s) }); best = r; t.minutes = 0; if (process.env.PROF2) console.error('playouts ' + r.macros + ' ' + JSON.stringify(Object.entries(searchT1.BR).sort((a,b)=>b[1]-a[1]).slice(0,12))); }
const roots = OPEN ? ((await searchT1(mk(), { listRoot: true, evalFn: (S, s) => disruption(S, s) })).root || []) : [];
if (roots.length > 1) { const share = t.minutes * 60000 * 0.8 / roots.length;
  for (const rt of roots) { const r = await searchT1(mk(), { ms: share, maxMacros: Infinity, patience: Infinity, guideW: 0.3, altCap: 8, maxMacro: 80, frontierCap: +(process.env.FC || 3000), div: 1.5, rootOnly: rt, evalFn: (S, s) => disruption(S, s) }); if ((r.score || 0) > (best.score || 0)) best = r; }
  t.minutes *= 0.2; }
for (const dv of (t.minutes <= 0 ? [] : roots.length > 1 ? [6] : divs)) { const r = await searchT1(mk(), { ms: t.minutes * 60000 / divs.length, maxMacros: Infinity, patience: Infinity, guideW: 0.3, altCap: 8, maxMacro: 80, frontierCap: +(process.env.FC || 3000), div: dv, evalFn: (S, s) => disruption(S, s) }); if ((r.score || 0) > (best.score || 0)) best = r; }
const hl = (String(best.board || '').match(/\n\s*Hand: ([^\n]*)/g) || []).pop() || ''; const left = hl.replace(/^\s*Hand: /, '').split(', ').map(x => x.trim());
const used = (best.line || []).join(' | ');
if (process.env.PROF2) { const { T2 } = await import('./src/searchplayer.mjs'); console.error('T2 ' + JSON.stringify(T2)); }
console.log('RESULT ' + JSON.stringify({ v: best.score || 0, board: (String(best.board || '').split('YOU:')[1] || ''), line: (best.line || []).filter(l => /Summon|Activate|Selected/.test(l)).slice(0, 60), used: t.hand.map(n => used.includes(n)), left }));
