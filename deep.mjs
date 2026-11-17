// node deep.mjs <guideTestId> [minutes] -> big-budget search with NO helpers (no guide scripts, no saved lines); logs best score over time vs the guide's board
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(0);
const id = process.argv[2], MIN = +(process.argv[3] || 25), deckPath = process.env.DECK || 'decks/ROLAD-L2.ydk';
const deck = parseYdk(fs.readFileSync(deckPath, 'utf8')); const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8'));
const T = JSON.parse(fs.readFileSync('data/guide_tests.json', 'utf8')); const t = T.find(x => x.id === id);
const alias = { Engraver: 'Fiendsmith Engraver', Medius: 'Medius the Pure', Tract: "Fiendsmith's Tract", Citrinitas: 'Ars Magna - "Citrinitas"', Terminus: 'Prohibited Power Patron Portal - Terminus', Vidolia: 'Plundered Power Patron Plane - Vidolia', Lacrima: 'Lacrima the Crimson Tears', Nervedo: 'Nervedo the Shadebeast Power Patron', 'Ash Blossom': 'Ash Blossom & Joyous Spring', 'Theorealized Medius': 'Theorealize Medius', 'Ghost Ogre': 'Small World' };
const hand = t.hand.map(h => alias[h] || h); const GS = 13039848;
const pool = deck.main.slice(); const h = hand.map(n => { const c = findCard(n); const i = pool.findIndex(k => name(k) === name(c)); return pool.splice(i, 1)[0]; });
const op = OPP.main.slice(), oh = []; while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
const g = { id: 'deep', seed: '7', first: 0, lab: true, seats: { 0: { name: 'A', deck: { ...deck, main: [...h, ...pool] }, hand: h }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, stopAfterTurn: null };
const OD = process.env.OUTDIR || 'results/deep'; fs.mkdirSync(OD, { recursive: true }); const out = `${OD}/${id}.log`; let bestAt = 0; fs.writeFileSync(out, `hand ${hand.join(', ')}\n`); let lastB = -1;
// Normal Summon lanes: the Normal Summon is spent once, so a search that spends it early on whatever adds a body fastest
// can miss the line built around a different Normal Summon. Each monster in hand gets its own lane where only it may be
// Normal Summoned, plus one open lane; the time is split evenly and the best board over all lanes is kept.
const { cardDB } = await import('./src/cards.mjs'); const DB = cardDB().data;
const handMons = [...new Set(h.filter(c => ((DB.get(c)?.type ?? 0) & 0x1)).map(c => name(c)))];
const lanes = process.env.LANES === '1' ? [...handMons, null] : [null]; let r = { score: -1 };
for (const lane of lanes) {
  fs.appendFileSync(out, `LANE ${lane ?? 'open'}\n`);
  const rr = await searchT1({ ...g, responses: [] }, { ms: MIN * 60000 / lanes.length, maxMacros: Infinity, patience: Infinity, guideW: +(process.env.GW ?? 0.3), altCap: +(process.env.ALT ?? 8), maxMacro: +(process.env.MM ?? 80), frontierCap: +(process.env.FC ?? 20000), dfs: !!process.env.DFS, probe: +(process.env.PROBE || 0), nsOnly: lane, script: process.env.SCRIPT ? JSON.parse(process.env.SCRIPT) : null, evalFn: (S, s) => disruption(S, s),
    onProgress: (p) => { fs.appendFileSync(out, `${(p.ms / 60000).toFixed(1)}m macros ${p.macros} states ${p.seen} frontier ${p.frontier} best ${p.best.toFixed(2)}\n`); if (p.best > lastB) { lastB = p.best; bestAt = p.ms; fs.appendFileSync(out, '  NEW BEST: ' + (p.line || []).filter(l => /Summon|Activate|Selected/.test(l)).slice(0, 40).join(' > ') + '\n'); } } });
  if (rr.probe) { console.log(JSON.stringify(rr)); process.exit(0); }
  fs.appendFileSync(out, `LANE ${lane ?? 'open'} RESULT ${(rr.score || 0).toFixed(2)}\n`);
  if ((rr.score || 0) > (r.score || 0)) r = rr;
}
fs.appendFileSync(out, `BESTAT ${(bestAt / 60000).toFixed(1)}\nFINAL ${r.score?.toFixed(2)} states ${r.macros} complete ${r.complete} ms ${r.ms}\nBOARD ${r.board}\nLINE ${(r.line || []).join(' > ')}\n`);
