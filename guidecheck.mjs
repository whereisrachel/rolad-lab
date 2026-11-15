// node guidecheck.mjs [deck] [maxHands] -> lab (unseeded vs seeded openers) vs the guide's own tested end boards, same scorer, board-only
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(0);
const deckPath = process.argv[2] || 'decks/ROLAD-L2.ydk', MAXH = +(process.argv[3] || 12);
const deck = parseYdk(fs.readFileSync(deckPath, 'utf8')); const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const names = deck.main.map(c => name(c));
const T = JSON.parse(fs.readFileSync('/tmp/guide_tests.json', 'utf8'));
const alias = { Engraver: 'Fiendsmith Engraver', Medius: 'Medius the Pure', Tract: "Fiendsmith's Tract", Citrinitas: 'Ars Magna - "Citrinitas"', Terminus: 'Prohibited Power Patron Portal - Terminus', 'Corruption and Purification': 'Ars Magna of Purification and Corruption', Vidolia: 'Plundered Power Patron Plane - Vidolia', Lacrima: 'Lacrima the Crimson Tears', 'Finite and Infinite': 'Ars Magna of Infinity and Finity', Nervedo: 'Nervedo the Shadebeast Power Patron', 'Ash Blossom': 'Ash Blossom & Joyous Spring', 'Theorealized Medius': 'Theorealize Medius', 'Ghost Ogre': 'Small World' };
// the guide's board scored with the same weights as src/disrupt.mjs (board only)
function guideScore(b) {
  const ms = b.mz.map(s => s.replace(/^(M\d|EMZ-[LR])\s+/, '').replace(/ DEF$/, '')); let v = 0; const layers = new Set(); const add = (w, l) => { v += w; if (l && w >= 0.5) layers.add(l); };
  const races = new Set(); const R = { Desirae: 'Fiend', Junora: 'Fiend', Junoldo: 'Fiend', Nerva: 'Illusion', 'Non-Finito': 'Illusion', Nervedo: 'Illusion', Diactorus: 'Fairy', Medius: 'Fairy', Mediclius: 'Fairy', Finmel: 'Warrior', 'Finite and Infinite': 'Warrior', 'Corruption and Purification': 'x' }; ms.forEach(m => races.add(R[m] || m));
  for (const m of ms) { const o = ms.length - 1;
    if (/Mediclius|Medicurius/.test(m)) add(o >= 3 ? 2 : o >= 1 ? 1 : 0.3, 'wipe'); else if (/Diactorus/.test(m)) add(races.size >= 3 ? 1 : 0.3, 'negate'); else if (/Desirae/.test(m)) add(1, 'negate'); else if (/Nerva$|^Nerva/.test(m)) add(1, 'wipe'); else if (/Non-Finito/.test(m)) add(0.5, 'negate'); else if (/S:P/.test(m)) add(1, 'banish-monster'); }
  for (const s of b.st) { const n = s.replace(/^S\d\s+/, ''); if (/Impasto/.test(n)) add(1, 'negate'); else if (/Citrinitas/.test(n)) add(0.3); else if (/Liberation/.test(n)) add(0.5, 'protect'); else add(0.2); }
  for (const h of b.hand) { if (/Ash|Droll|Ghost/.test(h)) add(0, 'handtrap'); else add(0.15); }
  layers.delete('handtrap'); return v + 0.5 * layers.size;
}
const GS = 13039848;
async function run(hand, script) {
  const pool = deck.main.slice(); const h = hand.map(n => { const c = findCard(n); const i = pool.findIndex(k => name(k) === name(c)); return pool.splice(i, 1)[0]; });
  const op = OPP.main.slice(), oh = []; while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  const g = { id: 'gc', seed: '7', first: 0, lab: true, seats: { 0: { name: 'A', deck: { ...deck, main: [...h, ...pool] }, hand: h }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, stopAfterTurn: null };
  const r = await searchT1(g, { ms: 90000, maxMacros: +(process.env.MAC||150), patience: +(process.env.PAT||60), guideW: 0.3, altCap: 4, maxMacro: 25, frontierCap: 400, script, evalFn: (S, s) => disruption(S, s) }); return r.score || 0;
}
import { CORE_MEDIUS, CORE_PREFIX } from './src/guide-core.mjs';
const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); let n = 0; const rows = [];
for (const t of T) {
  if (n >= MAXH) break; const hand = t.hand.map(h => alias[h] || h); if (hand.some(h => !names.includes(h))) continue; n++;
  // keep the dup-Ash hands legal: deck has 3 Ash
  const un = Math.max(await run(hand, null)); let sd = un; for (const c of new Set(hand)) { if (/Ash Blossom|Droll|Small World/.test(c)) continue; { if (hand.includes('Medius the Pure')) for (const sc of [CORE_MEDIUS, CORE_PREFIX]) sd = Math.max(sd, await run(hand, sc)); for (const pre of ['Normal Summon.*','Activate.*']) sd = Math.max(sd, await run(hand, [pre + esc(c)])); } }
  const gs = guideScore(t.board); rows.push({ id: t.id, hand: t.hand[0], guide: gs, free: un, seeded: sd }); console.log(t.id.padEnd(8), (t.hand[0] + '').padEnd(24), 'guide', gs.toFixed(2), '| lab free', un.toFixed(2), '| lab seeded', sd.toFixed(2));
}
const m = (k) => (rows.reduce((a, r) => a + r[k], 0) / rows.length).toFixed(2); console.log('MEAN guide', m('guide'), 'free', m('free'), 'seeded', m('seeded'), 'n', rows.length);
