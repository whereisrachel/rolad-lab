// Play a line by hand in the real engine: fixed opening hand (+ optional known next cards), then a list of choices.
// Each step is text matched against the option labels (case-insensitive, first match wins); "A | B" picks several options at once;
// "#3" picks option 3. Optional prompts the script doesn't mention (a chain window, "activate this effect?") are passed and logged.
// When a step matches nothing the run stops and prints the options, so a line can be built step by step.
// node play.mjs line.json      line.json: { deck, hand: [names], top: [names], seed, steps: [..], verbose }
import fs from 'fs';
import { parseYdk, findCard, name } from './src/cards.mjs';
import * as E from './src/engine.mjs'; import { autoAdvance } from './src/auto.mjs';
import { disruption, setHT } from './src/disrupt.mjs'; import { normLabel } from './src/searchplayer.mjs';
const t = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')); setHT(1);
const code = (n) => { const c = findCard(n); const k = Array.isArray(c) ? c[0] : c; if (!k) throw new Error('unknown card: ' + n); return k; };
const deck = parseYdk(fs.readFileSync(t.deck || 'decks/L2-vand3.ydk', 'utf8'));
// deck order: hand, then the known next cards, then the rest in a fixed shuffled order
const rest = deck.main.slice(); const take = (n) => { const k = code(n); const i = rest.findIndex(x => name(x) === name(k)); if (i < 0) return k; // not in the list (e.g. a test hand trap): use it anyway
  return rest.splice(i, 1)[0]; };
const hand = t.hand.map(take), top = (t.top || []).map(take); let s = +(t.seed || 1); const rnd = () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648;
for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [rest[i], rest[j]] = [rest[j], rest[i]]; }
const order = [...hand, ...top, ...rest];
const OPP = parseYdk(fs.readFileSync('decks/oppHT.ydk', 'utf8')); const GS = 13039848; const op = OPP.main.slice(), oh = []; while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
const game = { id: 'play', seed: '7', first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: order, extra: deck.extra.slice(), side: [] }, hand }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: [] }, stopAfterTurn: null };
let S = autoAdvance(await E.simulate(game)); const keys = []; const K = (d, l) => keys.push(d.type === E.M.SELECT_IDLECMD ? 'I:' + normLabel(l) : 'S:' + String(d.prompt || d.kind || '').replace(/[0-9]+/g, '#').slice(0, 80) + '|' + normLabel(l)); const log = []; let i = 0; const steps = t.steps || []; let stop = '';
const optional = (d) => d.options.findIndex(o => /^Pass\b/i.test(o.label));
for (let guard = 0; guard < 600; guard++) {
  if (!S.pending || S.ended || S.turn !== 1) { stop = 'turn over'; break; }
  const d = E.decision(S, 0); if (!d) { S = autoAdvance(S); if (!E.decision(S, 0)) { stop = 'no decision for you'; break; } continue; }
  const step = steps[i];
  const find = (txt) => { txt = txt.trim(); if (/^#\d+$/.test(txt)) return +txt.slice(1) - 1; const lo = txt.toLowerCase(); return d.options.findIndex(o => o.label.toLowerCase().includes(lo)); };
  if (step !== undefined && step.includes(' | ')) { const ix = step.split(' | ').map(find); if (ix.every(x => x >= 0)) { const a = E.answer(S, 0, ix.map(x => x + 1).join(' ')); if (a && a.resps) { for (const r of a.resps) E.push(S, { seat: 0, resp: r.resp, label: r.label }); autoAdvance(S); log.push(`${i + 1}. ${ix.map(x => d.options[x].label).join(' + ')}`); i++; continue; } } }
  const j = step === undefined ? -1 : find(step);
  if (j >= 0) { const o = d.options[j]; K(d, o.label); if (o.resp === undefined) { const a = E.answer(S, 0, String(j + 1)); for (const r of a.resps) E.push(S, { seat: 0, resp: r.resp, label: r.label }); } else E.push(S, { seat: 0, resp: o.resp, label: o.label }); autoAdvance(S); log.push(`${i + 1}. ${o.label}`); i++; continue; }
  if (d.kind === 'sort') { const a = E.answer(S, 0, 'd'); if (a && a.resps) { for (const r of a.resps) E.push(S, { seat: 0, resp: r.resp, label: r.label }); autoAdvance(S); continue; } }
  const autoPick = /battle position|^Zone for/i.test(d.prompt || '') || d.options.every(o => /^your [MS]\d|^face-up|^face-down/i.test(o.label));
  if (autoPick && d.options.length) { const o = d.options[0]; if (o.resp === undefined) { const a = E.answer(S, 0, '1'); for (const r of a.resps) E.push(S, { seat: 0, resp: r.resp, label: r.label }); } else E.push(S, { seat: 0, resp: o.resp, label: o.label }); autoAdvance(S); if (t.verbose) log.push(`   (auto) ${o.label}`); continue; }
  const p = S.pending && S.pending.spe_count > 0 && d.options.some(o => /^Activate /.test(o.label) && / \((GY|banishment|Extra Deck|Deck)\):/.test(o.label)) ? -1 : optional(d); /* a window with a trigger in it is never passed silently */ if (p >= 0) { const o = d.options[p]; E.push(S, { seat: 0, resp: o.resp, label: o.label }); autoAdvance(S); if (t.verbose) log.push(`   (auto) ${o.label}`); continue; }
  stop = step === undefined ? 'end of script' : `step ${i + 1} "${step}" matches no option`; break;
}
const d = S.pending && S.turn === 1 ? E.decision(S, 0) : null;
console.log(log.join('\n'));
console.log(`\n-- ${stop}. Board value ${disruption(S, 0).toFixed(2)}`);
if (d) console.log('Options now' + (d.prompt ? ` (${d.prompt})` : '') + ':\n' + d.options.map((o, k) => `  #${k + 1} ${o.label}`).join('\n'));
const bv = E.boardView(S, 0); console.log('\n' + (typeof bv === 'string' ? bv : JSON.stringify(bv)).slice(0, 3000));
if (t.out) { fs.writeFileSync(t.out, JSON.stringify({ hand: t.hand, order, extra: deck.extra.slice(), seed: 7, raw: S.game.responses.map(e => ({ ...e })), v: +disruption(S, 0).toFixed(2), steps: log.filter(l => !/^\s+\(auto\)/.test(l)), name: t.name || '', keys }, null, 0)); console.log('saved ' + t.out); }
