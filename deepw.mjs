// one deep line search: node deepw.mjs '<json task>' -> prints RESULT {json}
// task: { deck: path, hand: [names], minutes, divs: "6,1.5", seed }
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(0); process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]); const deck = parseYdk(fs.readFileSync(t.deck, 'utf8')); const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const pool = deck.main.slice(); const h = t.hand.map(n => { const c = findCard(n); const code = Array.isArray(c) ? c[0] : c; let i = pool.findIndex(k => name(k) === name(code)); if (i < 0) { pool.push(code); i = pool.length - 1; } return pool.splice(i, 1)[0]; });
const op = OPP.main.slice(), oh = []; while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
const mk = () => ({ id: 'dw', seed: String(t.seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { ...deck, main: [...h, ...pool] }, hand: h }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, stopAfterTurn: null });
const divs = String(t.divs || '6,1.5').split(',').map(Number); let best = { score: -1 };
for (const dv of divs) { const r = await searchT1(mk(), { ms: t.minutes * 60000 / divs.length, maxMacros: Infinity, patience: Infinity, guideW: 0.3, altCap: 8, maxMacro: 80, frontierCap: 3000, div: dv, evalFn: (S, s) => disruption(S, s) }); if ((r.score || 0) > (best.score || 0)) best = r; }
const hl = (String(best.board || '').match(/\n\s*Hand: ([^\n]*)/g) || []).pop() || ''; const left = hl.replace(/^\s*Hand: /, '').split(', ').map(x => x.trim());
const used = (best.line || []).join(' | ');
console.log('RESULT ' + JSON.stringify({ v: best.score || 0, board: (String(best.board || '').split('YOU:')[1] || ''), line: (best.line || []).filter(l => /Summon|Activate|Selected/.test(l)).slice(0, 60), used: t.hand.map(n => used.includes(n)), left }));
