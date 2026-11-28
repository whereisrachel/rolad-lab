// Build the same game deepw.mjs builds, and replay a recorded line by option LABELS (not raw indices), so the line still replays
// when an extra card sits in the hand or the Extra Deck. Used by the whole-pool screen (poolscan.mjs).
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './cards.mjs';
import * as E from './engine.mjs'; import { autoAdvance } from './auto.mjs';
const GS = 13039848;
let OPP = null;
export function mkGame({ extra, order, handN = 5, seed = 7 }) {
  OPP ||= parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8'));
  const op = OPP.main.slice(), oh = []; while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  const h = order.slice(0, handN);
  return { id: 'ps', seed: String(seed), first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: order.slice(), extra: extra.slice(), side: [] }, hand: h }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, stopAfterTurn: null };
}
export const codeOf = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
// replay `raw` (entries {seat, resp, label, auto}); onIdle(S, d, k) is called at every idle point (k = entries replayed so far); return false to stop
export async function replay(game, raw, onIdle, { maxSkips = 300 } = {}) {
  E.resetLib(); const S = autoAdvance(await E.simulate(game)); let k = 0, skips = 0;
  const steps = raw.filter(e => e.seat === 0 && !e.auto && e.label);
  for (let i = 0; i < steps.length;) {
    autoAdvance(S); if (S.ended || !S.pending) break; const d = E.decision(S, 0); if (!d) break;
    if (S.pending.type === E.M.SELECT_IDLECMD) { if (onIdle && onIdle(S, d, i) === false) return { S, i, ok: true, stopped: true }; }
    const e = steps[i]; let done = false;
    const j = d.options.findIndex(o => o.label === e.label);
    if (j >= 0) done = E.push(S, { seat: 0, resp: d.options[j].resp, label: d.options[j].label });
    else if (/^(Selected|Zone) /.test(e.label)) { const want = e.label.replace(/^(Selected|Zone) /, '').split(', '); const used = new Set(), idx = [];
      for (const w of want) { const q = d.options.findIndex((o, n) => !used.has(n) && o.label === w); if (q < 0) break; used.add(q); idx.push(q + 1); }
      if (idx.length === want.length) { const r = E.answer(S, 0, idx.join(' ')); if (r && r.resps) { done = true; for (const x of r.resps) if (!E.push(S, { seat: 0, resp: x.resp, label: x.label })) { done = false; break; } } } }
    if (!done && e.label === 'Default order') { const r = E.answer(S, 0, 'd'); if (r && r.resps) { done = true; for (const x of r.resps) if (!E.push(S, { seat: 0, resp: x.resp, label: x.label })) { done = false; break; } } }
    // labels recorded with a string id instead of text (e.g. "#573", "...(hand): #1160" — helpers without the strings file): send the recorded response as is (Nov 28)
    if (!done && /#\d+/.test(e.label) && e.resp) { const q = d.options.findIndex(o => JSON.stringify(o.resp) === JSON.stringify(e.resp)); const o = d.options[q >= 0 ? q : (d.options.length === 1 ? 0 : -1)]; if (o) done = E.push(S, { seat: 0, resp: o.resp, label: o.label }); }
    if (done) { i++; continue; }
    // a prompt the original line had only because of the card that was swapped out (e.g. a hand trap's chain window): skip that recorded step
    if (/^Pass|do not chain|^No$/i.test(e.label) && !d.options.some(o => o.label === e.label)) { i++; continue; }
    // a prompt the original line never had (the extra card offers a chain or a trigger): decline it and keep going
    const no = d.options.findIndex(o => /^Pass|^No$|do not chain|^Cancel|^Finish/i.test(o.label));
    if (no >= 0 && skips++ < maxSkips) { if (!E.push(S, { seat: 0, resp: d.options[no].resp, label: d.options[no].label })) break; continue; }
    return { S, i, ok: false };
  }
  autoAdvance(S); const d = E.decision(S, 0); if (d && onIdle && S.pending && S.pending.type === E.M.SELECT_IDLECMD) onIdle(S, d, steps.length);
  return { S, i: steps.length, ok: true };
}
