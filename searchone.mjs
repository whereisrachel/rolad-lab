// node searchone.mjs <deck.ydk> --hand "A;B;C;D;E" [--secs 15] [--script ash,droll,imperm] [--seed 153]
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs';
import { searchT1 } from './src/searchplayer.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const deck = parseYdk(fs.readFileSync(a[0], 'utf8')); const opp = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'goldfish.ydk'), 'utf8'));
const pool = deck.main.slice();
const hand = f('hand').split(';').map(x => x.trim()).filter(Boolean).map(x => { const c = findCard(x); const i = pool.findIndex(k => name(k) === name(c)); return pool.splice(i, 1)[0]; });
const g = { id: 's', seed: f('seed', '153'), first: 0, lab: true, seats: { 0: { name: 'A', deck, hand }, 1: { name: 'opp', deck: opp, hand: null } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: (f('script', '') || '').split(',').filter(Boolean) }, stopAfterTurn: null };
const r = await searchT1(g, { ms: +f('secs', '15') * 1000 });
console.log('score', r.score?.toFixed(2), 'nodes', r.nodes, 'macros', r.macros, 'ms', r.ms); console.log((r.line || []).join('\n')); console.log(r.board || r.error);
