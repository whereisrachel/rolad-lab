import { CORE_MEDIUS, CORE_PREFIX, lineScripts } from './guide-core.mjs';
import { parentPort, workerData } from 'worker_threads';
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './cards.mjs';
import { searchT1 } from './searchplayer.mjs';
import { disruption, setHT } from './disrupt.mjs';
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
  setHT(t.ht ?? 1);
  try {
    let best = { score: 0 };
    const RIT = /Griffoh|Black Chaos|Mind Shuffle|Skull Archfiend|Light and Darkness Ritual|Magician of Dark Chaos|Black Luster/;
    const ritual = hand.some(c => RIT.test(name(c)));
    const cfgs = [{ gw: 0.3, alt: 4, mm: 25, mac: t.macros }, { gw: 0.6, alt: 4, mm: 25, mac: t.macros }].slice(0, t.passes || 2);
    if (ritual) cfgs.push({ gw: 0.3, alt: 8, mm: 80, mac: t.macros * 4, pat: 150 }); // Ritual-wing hands need wider sub-decision branching (Skull/LADR/Magician chains)
    // Seeded passes: free search gets stuck on a shallow line (it never found the guide's Medius/Nervedo line). Replay one opener per distinct hand card first, then search on from there; keep the best board.
    if (t.seeds) for (const sc of lineScripts(hand.map(c => name(c)))) cfgs.push({ gw: 0.3, alt: 4, mm: 25, mac: t.macros, script: sc });
    if (t.seeds && hand.some(c => name(c) === 'Medius the Pure')) for (const sc of [CORE_MEDIUS, CORE_PREFIX]) cfgs.push({ gw: 0.3, alt: 4, mm: 25, mac: t.macros, script: sc });
    if (t.seeds) { const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); const seen = new Set(); for (const c of hand) { const n = name(c); if (seen.has(n) || /Ash Blossom|Droll|Nibiru|Ghost|Infinite Impermanence|Small World/.test(n)) continue; seen.add(n); for (const pre of ['Normal Summon.*', 'Activate.*']) cfgs.push({ gw: 0.3, alt: 4, mm: 25, mac: t.macros, script: [pre + esc(n)] }); } }
    const errs = []; let ok = 0;
    for (const c of cfgs) { let r; try { r = await searchT1({ ...g, responses: [] }, { ms: 90000, maxMacros: c.mac, patience: c.pat || t.patience || 60, guideW: c.gw, altCap: c.alt, maxMacro: c.mm, frontierCap: 400, script: c.script || null, evalFn: (S, s) => disruption(S, s) }); } catch (e) { errs.push(String(e.message).slice(0, 100)); continue; }
      if (r.error) { errs.push(String(r.error).slice(0, 100)); continue; } ok++; if ((r.score || 0) > (best.score || 0)) best = r; }
    // which hand cards were used: count names still in the final hand
    const left = {}; const hl = (String(best.board || '').match(/\n\s*Hand: ([^\n]*)/g) || []).pop() || ''; for (const n of hl.replace(/^\s*Hand: /, '').split(', ').map(x => x.trim()).filter(Boolean)) left[n] = (left[n] || 0) + 1;
    const played = []; const seenP = {}; for (const c of hand) { const n = name(c); seenP[n] = (seenP[n] || 0) + 1; if (seenP[n] > (left[n] || 0)) played.push(n); }
    return { id: t.id, v: best.score || 0, line: best.line, board: best.board, hand: hand.map(c => name(c)), played, crash: ok === 0, errs: errs.length, err: errs[0] || best.error };
  } catch (e) { return { id: t.id, v: 0, crash: true, errs: 1, err: String(e.message).slice(0, 120) }; }
}
for (const t of workerData.tasks) parentPort.postMessage(await job(t));
parentPort.postMessage({ done: true });
