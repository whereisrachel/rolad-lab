import { parentPort, workerData } from 'worker_threads';
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './cards.mjs';
import { searchT1 } from './searchplayer.mjs';
import { disruption } from './disrupt.mjs';
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8'));
const GS = 13039848;
const decks = {}; const getDeck = (p) => decks[p] || (decks[p] = parseYdk(fs.readFileSync(path.join(ROOT, p), 'utf8')));
const SC = { none: [], ash: ['Ash Blossom & Joyous Spring'], imperm: ['Infinite Impermanence'], both: ['Ash Blossom & Joyous Spring', 'Infinite Impermanence'], droll: ['Droll & Lock Bird'], all: ['Ash Blossom & Joyous Spring', 'Infinite Impermanence', 'Droll & Lock Bird'] };
async function job(t) {
  const deck = getDeck(t.deck); const hidx = t.hand; // indexes into deck.main
  const hand = hidx.map(i => deck.main[i]); const rest = deck.main.filter((_, i) => !hidx.includes(i));
  const need = SC[t.scn] || []; const op = OPP.main.slice(); const oh = [];
  for (const q of need) { const c = findCard(q); const i = op.findIndex(k => name(k) === name(c)); if (i >= 0) oh.push(op.splice(i, 1)[0]); }
  while (oh.length < 5) { const i = op.indexOf(GS); oh.push(op.splice(i, 1)[0]); }
  const g = { id: 'rt', seed: String(t.seed), first: 0, lab: true, seats: { 0: { name: 'A', deck: { ...deck, main: [...hand, ...rest] }, hand }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: need.map(n => /Ash/.test(n) ? 'ash' : /Imperm/.test(n) ? 'imperm' : 'droll') }, stopAfterTurn: null };
  try {
    let best = { score: 0 };
    for (const gw of [0.3, 0.6].slice(0, t.passes || 2)) { const r = await searchT1({ ...g, responses: [] }, { ms: 90000, maxMacros: t.macros, patience: t.patience || 60, guideW: gw, altCap: 4, maxMacro: 25, frontierCap: 400, evalFn: (S, s) => disruption(S, s) }); if ((r.score || 0) > best.score) best = r; }
    return { id: t.id, v: best.score || 0, line: best.line, board: best.board, err: best.error };
  } catch (e) { return { id: t.id, v: 0, err: String(e.message).slice(0, 120) }; }
}
for (const t of workerData.tasks) parentPort.postMessage(await job(t));
parentPort.postMessage({ done: true });
