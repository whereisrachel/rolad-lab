import { CORE_MEDIUS, CORE_PREFIX, lineScripts } from './guide-core.mjs';
import { seedsFor } from './library.mjs';
const FAST = !!process.env.ROLAD_FAST; // lighter search for a single PC
import { autoSearch } from './autoopen.mjs';
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
    const ritCfg = ritual ? { gw: 0.3, alt: 8, mm: FAST ? 40 : 80, mac: t.macros * (FAST ? 2 : 4), pat: 150 } : null; // run last, only if the board is still weak // Ritual-wing hands need wider sub-decision branching (Skull/LADR/Magician chains)
    // Seeded passes: free search gets stuck on a shallow line (it never found the guide's Medius/Nervedo line). Replay one opener per distinct hand card first, then search on from there; keep the best board.
    if (t.seeds) for (const sc of seedsFor(hand.map(c => name(c)))) cfgs.push({ gw: 0.3, alt: 4, mm: 25, mac: Math.max(30, Math.round(t.macros / 3)), script: sc, lib: true }); // learned lines: replay, then a short search
    if (t.seeds) for (const sc of lineScripts(hand.map(c => name(c)))) cfgs.push({ gw: 0.3, alt: 4, mm: 25, mac: t.macros, script: sc });
    if (t.seeds && hand.some(c => name(c) === 'Medius the Pure')) for (const sc of FAST ? [CORE_MEDIUS] : [CORE_MEDIUS, CORE_PREFIX]) cfgs.push({ gw: 0.3, alt: 4, mm: 25, mac: t.macros, script: sc });
    // (single-card opener seeds replaced by automatic openers below)
    const errs = []; let ok = 0;
    const PROF = process.env.PROF ? [] : null; let _t0 = Date.now();
    const runAuto = async () => { if (t.seeds) { try { const a = await autoSearch({ ...g, responses: [] }, { macros: t.macros, ...(FAST ? { depth: 2, cap: 24, top: 1, quick: 0.15 } : { depth: 3, cap: 60 }), evalFn: (S, s) => disruption(S, s) }); if (PROF) { PROF.push(`auto ${((Date.now() - _t0) / 1000).toFixed(1)}s ${((a.best && a.best.score) || 0).toFixed(2)} openers ${a.openers}`); _t0 = Date.now(); } if (a.best && !a.best.error) { ok++; if ((a.best.score || 0) > (best.score || 0)) best = a.best; } } catch (e) { errs.push('auto: ' + String(e.message).slice(0, 90)); } } };
    for (const c of cfgs) { let r; try { r = await searchT1({ ...g, responses: [] }, { ms: 90000, maxMacros: c.mac, patience: c.pat || t.patience || 60, guideW: c.gw, altCap: c.alt, maxMacro: c.mm, frontierCap: 400, script: c.script || null, evalFn: (S, s) => disruption(S, s) }); } catch (e) { errs.push(String(e.message).slice(0, 100)); continue; }
      if (PROF) { PROF.push(`${c.script ? (c.lib ? 'lib' : 'script') : c.mm > 25 ? 'ritual' : 'base'} ${((Date.now() - _t0) / 1000).toFixed(1)}s ${(r.score || 0).toFixed(2)}`); _t0 = Date.now(); }
      if (r.skipped) continue; if (r.error) { errs.push(String(r.error).slice(0, 100)); continue; } ok++; if ((r.score || 0) > (best.score || 0)) best = r; }
    if ((best.score || 0) < +(process.env.AUTO_BELOW || 8)) await runAuto(); // automatic openers: skipped when a known line already gave a very strong board
    if (ritCfg && (best.score || 0) < 7) { const c = ritCfg; let r; try { r = await searchT1({ ...g, responses: [] }, { ms: 90000, maxMacros: c.mac, patience: c.pat, guideW: c.gw, altCap: c.alt, maxMacro: c.mm, frontierCap: 400, evalFn: (S, s) => disruption(S, s) }); } catch (e) { errs.push(String(e.message).slice(0, 100)); } if (r && !r.error) { ok++; if (PROF) PROF.push(`ritual ${((Date.now() - _t0) / 1000).toFixed(1)}s ${(r.score || 0).toFixed(2)}`); if ((r.score || 0) > (best.score || 0)) best = r; } }
    if (PROF) console.error('PROF', t.id, hand.map(c => name(c).slice(0, 14)).join('|'), 'final', (best.score || 0).toFixed(2), '::', PROF.join(' ; '));
    // which hand cards were used: count names still in the final hand
    const left = {}; const hl = (String(best.board || '').match(/\n\s*Hand: ([^\n]*)/g) || []).pop() || ''; for (const n of hl.replace(/^\s*Hand: /, '').split(', ').map(x => x.trim()).filter(Boolean)) left[n] = (left[n] || 0) + 1;
    const played = []; const seenP = {}; for (const c of hand) { const n = name(c); seenP[n] = (seenP[n] || 0) + 1; if (seenP[n] > (left[n] || 0)) played.push(n); }
    return { id: t.id, v: best.score || 0, line: best.line, board: best.board, hand: hand.map(c => name(c)), played, crash: ok === 0, errs: errs.length, err: errs[0] || best.error };
  } catch (e) { return { id: t.id, v: 0, crash: true, errs: 1, err: String(e.message).slice(0, 120) }; }
}
for (const t of workerData.tasks) parentPort.postMessage(await job(t));
parentPort.postMessage({ done: true });
