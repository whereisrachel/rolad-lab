// one deep line search: node deepw.mjs '<json task>' -> prints RESULT {json}
// task: { deck: path, hand: [names], minutes, divs: "6,1.5", seed }
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setLearned, learnedTerm, setHT } from './src/disrupt.mjs';
setHT(+(process.env.HTW ?? 1)); /* hand traps still in hand count (1 = one interruption each): spending one for nothing now costs the line */ process.env.CANON = '1'; process.env.LIGHT = '1';
const t = JSON.parse(process.argv[2]); const deck = parseYdk(fs.readFileSync(t.deck, 'utf8')); if (t.main) deck.main = t.main.slice(); /* exact Deck order when given */
// the learned survival term joins the search score once the learned model predicts survival better than the hand-set scoring (data/learned-<list>.json)
{ const lf = `data/learned-${(t.deck || '').replace(/^.*[\\/]/, '').replace(/\.ydk$/, '')}.json`; if (process.env.LEARNED !== '0' && fs.existsSync(lf)) { try { const m = JSON.parse(fs.readFileSync(lf, 'utf8')); if (m.n >= 800 && m.cvCorr >= (m.oldCorr ?? 0) + 0.05) { m.mix = +(process.env.LEARNED_MIX || 1); setLearned(m); } } catch {} } }
// t.mustUse: regex of an action the line should include (exploring an effect no tested line has used yet): such lines get +3 during the search only
const MU = t.mustUse ? new RegExp(t.mustUse) : null; const usedMU = (S) => MU && (S.game.responses || []).some(r => r.seat === 0 && MU.test(r.label || ''));
const EVALF = (S, s) => disruption(S, s) + learnedTerm(S, s) + (MU && usedMU(S) ? 3 : 0);
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const pool = deck.main.slice(); const h = t.hand.map(n => { const c = findCard(n); const code = Array.isArray(c) ? c[0] : c; let i = pool.findIndex(k => name(k) === name(code)); if (i < 0) { pool.push(code); i = pool.length - 1; } return pool.splice(i, 1)[0]; });
// opponent: goldfish, or holding hand traps it fires at the first legal moment (t.scn: none | ash | imperm | droll | any combination joined by +)
const SCN = { ash: 'Ash Blossom & Joyous Spring', imperm: 'Infinite Impermanence', droll: 'Droll & Lock Bird' };
const need = String(t.scn || 'none').split('+').filter(x => SCN[x]);
const op = OPP.main.slice(), oh = []; for (const q of need) { const c = findCard(SCN[q]); const code = Array.isArray(c) ? c[0] : c; const i = op.findIndex(k => name(k) === name(code)); if (i >= 0) oh.push(op.splice(i, 1)[0]); }
while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
let AFTER = +(t.after || 0); // smart opponent: hand traps held until you have activated AFTER effects (chosen adversarially below when t.smart)
let mk = () => ({ after: { 1: AFTER }, id: 'dw', seed: String(t.seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { ...deck, main: [...h, ...pool] }, hand: h }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: need }, stopAfterTurn: null });
// optional forced opening (t.prefix: regexes matched against option labels, in order) -> the search starts after it
if (Array.isArray(t.prefix) && t.prefix.length) { const E = await import('./src/engine.mjs'); const { autoAdvance } = await import('./src/auto.mjs'); E.resetLib(); const g0 = mk(); const S = autoAdvance(await E.simulate(g0));
  for (const rx of t.prefix) { autoAdvance(S); const d = E.decision(S, 0); if (!d) break; const re = new RegExp(rx); const i = d.options.findIndex(o => re.test(o.label)); if (i < 0) { console.error('prefix: no match for ' + rx + ' in ' + d.options.map(o => o.label).join(' | ').slice(0, 400)); break; }
    const r = E.answer(S, 0, String(i + 1)); if (!r || r.error) break; for (const x of r.resps || []) E.push(S, { seat: 0, resp: x.resp, label: x.label }); }
  autoAdvance(S); const fixed = S.game.responses.slice(); const mk0 = mk; mk = () => { const g = mk0(); g.responses = fixed.map(x => ({ ...x })); return g; }; }
// optional fixed start given as recorded responses (t.prefixRaw): the search continues from there (evolve.mjs: keep part of a good line, re-search the rest)
if (Array.isArray(t.prefixRaw) && t.prefixRaw.length) { const fixedR = t.prefixRaw; const mkR = mk; mk = () => { const g = mkR(); g.responses = fixedR.map(x => ({ ...x })); return g; }; }
const divs = String(t.divs || '6,1.5').split(',').map(Number); let best = { score: -1 };
// opening lanes: every legal first move gets an equal share of the time (the search builds long lines well once the opening is fixed,
// but left alone it keeps chasing whatever adds board value fastest); then one open search with the rest of the time
const OPEN = process.env.OPEN === '1' || !!t.open;
const HP = t.hintsFile || ('data/hints-' + path.basename(t.deck).replace(/\.ydk$/, '') + '.json'); const { loadHints, logGame } = await import('./src/hints.mjs');
if (process.env.NRPA !== '0') { process.env.NRPA_N ||= '30'; // learned hints: moves that appeared in the best lines of earlier games of this list (data/hints-<deck>.json), a soft head start
let hints = null; try { if (t.hints !== false) hints = loadHints(HP); } catch {}
// hand-designed lines (lines/designed/*.json, verified in the engine) steer the search: their moves get the top hint weight
try { if (t.hints !== false && process.env.DESIGNED !== '0' && fs.existsSync('lines/designed')) { hints = hints || {}; for (const f of fs.readdirSync('lines/designed')) { if (!f.endsWith('.json')) continue; const L = JSON.parse(fs.readFileSync('lines/designed/' + f, 'utf8')); for (const k of L.keys || []) hints[k] = Math.max(hints[k] || 0, 2); }
  if (fs.existsSync('lines/evolved')) for (const f of fs.readdirSync('lines/evolved')) { if (!f.endsWith('.json')) continue; try { const L = JSON.parse(fs.readFileSync('lines/evolved/' + f, 'utf8')); if ((L.fit ?? -9) > 0) for (const k of L.keys || []) hints[k] = Math.max(hints[k] || 0, 1.5); } catch {} } } } catch {}
let cardV = null, cardRaw = null; try { if (t.cardv !== false) { const cp = t.cardvFile || ('data/cardv-' + path.basename(t.deck).replace(/\.ydk$/, '') + '.json'); if (fs.existsSync(cp)) { const cv = JSON.parse(fs.readFileSync(cp, 'utf8')); cardV = cv.bonus; cardRaw = {}; for (const [n, x] of Object.entries(cv.v || {})) if (x - cv.base > 0) cardRaw[n] = x - cv.base; } } } catch {}
// search guidance only (the reported score is always the real board): a turn that has put a strong card into the hand (one that wasn't in the
// opening hand) counts as part of the way there, by what that card alone is worth, while the Normal Summon is still free
const LAM = +(process.env.SHAPE ?? 0.6); const { teamOf: TO } = await import('./src/engine.mjs');
const openN = t.hand.map(n => { const c = findCard(n); return name(Array.isArray(c) ? c[0] : c); });
const shapeFn = cardRaw && LAM > 0 ? (S, d) => { try { const hc = S.lb.duelQueryLocation(S.h, { flags: 0x1, controller: TO(S.game, 0), location: 0x02 }).filter(c => c && c.code).map(c => name(c.code)); const rest = openN.slice(); let mx = 0;
  for (const n of hc) { const i = rest.indexOf(n); if (i >= 0) { rest.splice(i, 1); continue; } mx = Math.max(mx, cardRaw[n] || 0); }
  return mx ? LAM * mx * (d && d.options.some(o => /^Normal Summon/.test(o.label)) ? 1 : 0.4) : 0; } catch { return 0; } } : null;
// 1) the normal search, unchanged (full time, no steering). It also watches for the earliest point where a strong card (by learned card value)
// reached the hand while the Normal Summon was free.
// hands with two or more strong starters (learned card values, e.g. Engraver + Medius) get more time: their best lines play one engine, then
// the other, and need it (Engraver + Medius: 9.45-9.95 at 2 min, 10.0-10.05 at 6 min, guide 10.95). Every version of a list gets the same rule.
const STARTERS = cardRaw ? new Set(h.filter(c => (cardRaw[name(c)] || 0) >= +(process.env.STARTER_MIN || 2.5)).map(c => name(c))).size : 0;
const TMUL = STARTERS >= 2 && t.adapt !== false && process.env.ADAPT !== '0' ? +(process.env.ADAPT_X || 2.5) : 1;
/* t.ppm: fixed work budget (playouts per minute of search) instead of the clock, so a game's result does not depend on machine load */ const BUD = (ms) => t.ppm ? { ms: 1e12, maxPO: Math.max(50, Math.round(ms / 60000 * t.ppm)) } : { ms };
const TOT = t.minutes * 60000 * TMUL, PRIOR = process.env.CARDVPRIOR === '1' ? cardV : null;
// 0) compose: a hand with two or more strong starters (by learned card value, e.g. Engraver + Medius) -> first find each starter's own line
// (the other starters swapped for a blank), then search the full hand with those lines as hints, so it can play one engine and then the other
if (cardRaw && process.env.COMPOSE === '1') { /* off by default: tested Nov 19, did not help (Engraver+Medius 9.45 vs 9.95) */ const CS = +(process.env.COMPOSE_MIN || 2.5); const st = [...new Set(h.filter(c => (cardRaw[name(c)] || 0) >= CS).map(c => name(c)))];
  if (st.length >= 2) { const ashC = (() => { const c = findCard('Ash Blossom & Joyous Spring'); return Array.isArray(c) ? c[0] : c; })(); const hc = { ...(hints || {}) }; const subs = [];
    for (const sn of st.slice(0, 3)) { const hs = h.map(c => st.includes(name(c)) && name(c) !== sn ? ashC : c); const back = h.filter(c => st.includes(name(c)) && name(c) !== sn);
      const g = () => ({ ...mk(), seats: { ...mk().seats, 0: { name: 'A', deck: { ...deck, main: [...hs, ...pool, ...back] }, hand: hs } } });
      const rs = await searchT1(g(), { ms: TOT * +(process.env.COMPOSE_T || 0.3), nrpa: +(process.env.NRPA || 3), seed: (t.sseed || 1) + 7, hints, evalFn: EVALF });
      subs.push(sn + ' ' + (rs.score || 0).toFixed(2)); for (const k of rs.keys || []) hc[k] = Math.max(hc[k] || 0, 2); }
    hints = hc; if (process.env.PROF2) console.error('compose: ' + subs.join(', ')); } }
// restarts (t.restarts / RESTARTS, hands with 2+ strong starters only): the same total budget split over K independent searches, best kept.
// NRPA locks onto one plan early; several shorter searches cover more plans (Engraver + Medius at 2 min: 10.15 / 10.65 / 10.7 by seed).
// smart opponent (t.smart): try holding the hand traps until you have activated 0..K effects (short searches), keep the timing that
// leaves you the weakest board, then play the full search against that timing. A strong player waits for the card that matters.
if (t.smart && need.length) { const K = +(t.smartK ?? 4), F = +(t.smartF ?? 0.12); const tried = [];
  for (let k = 0; k <= K; k++) { AFTER = k; const rk = await searchT1(mk(), { ...BUD(TOT * F), nrpa: +(process.env.NRPA || 3), seed: (t.sseed || 1) + 77, hints, cardV: PRIOR, evalFn: EVALF }); tried.push([k, rk.score || 0]); }
  tried.sort((p, q) => p[1] - q[1] || p[0] - q[0]); AFTER = tried[0][0]; globalThis.SMART = { after: AFTER, tried }; }
const KR = STARTERS >= 2 ? +(t.restarts ?? process.env.RESTARTS ?? 1) : 1; let r = null;
for (let q = 0; q < KR; q++) { const rq = await searchT1(mk(), { ...BUD(TOT / KR), nrpa: +(process.env.NRPA || 3), seed: (t.sseed || 1) + 1000 * q, hints, cardV: PRIOR, shapeFn, shapeObserve: true, evalFn: EVALF });
  if (!r || (rq.score || 0) > (r.score || 0)) { const sh0 = r && r.shaped; r = rq; if (sh0 && (!r.shaped || sh0.v > r.shaped.v)) r.shaped = sh0; } else if (rq.shaped && (!r.shaped || rq.shaped.v > r.shaped.v)) r.shaped = rq.shaped; }
best = r; globalThis.RATE1 = r.ms > 0 ? Math.round(r.macros / (r.ms / 60000)) : null;
const P1 = shapeFn ? 0 : 1, EXTRA = +(process.env.EXTRA ?? t.extra ?? 1);
// 2) only if that point promised clearly more than any finished board (e.g. Treasure -> Vidolium -> Terminus reached, but the long Medius
// line after it was never finished): extra time, searching only from that point. Never replaces a better result, so it can't make a hand worse.
if (P1 < 1 && EXTRA > 0) { // a short steered probe (prefers fetching high-value cards) whose only job is to find such a route; its own boards count too
  const PROBE = +(process.env.PROBE ?? 0.25); let sh = r.shaped;
  if (PROBE > 0) { const rp = await searchT1(mk(), { ...BUD(TOT * PROBE), nrpa: +(process.env.NRPA || 3), seed: (t.sseed || 1) + 50, hints, cardV, shapeFn, evalFn: EVALF });
    if ((rp.score || 0) > (best.score || 0)) best = rp; if (rp.shaped && rp.shaped.v > ((sh && sh.v) || 0)) sh = rp.shaped; }
  let g2 = null;
  if (sh && sh.raw && (sh.real + (sh.v - sh.real) / LAM) > (best.score || 0) + 1 && process.env.COMMIT !== '0') /* what that card is worth on its own, in full */ { const fixed = sh.raw; const mk0 = mk; g2 = () => { const g = mk0(); g.responses = fixed.map(x => ({ ...x })); return g; };
    try { const E = await import('./src/engine.mjs'); const { autoAdvance } = await import('./src/auto.mjs'); E.resetLib(); const S2 = autoAdvance(await E.simulate(g2())); const hc = S2.lb.duelQueryLocation(S2.h, { flags: 0x1, controller: TO(S2.game, 0), location: 0x02 }).filter(c => c && c.code).map(c => name(c.code)); openN.length = 0; openN.push(...hc); } catch { g2 = null; } }
  if (g2) { const r2 = await searchT1(g2(), { ...BUD(TOT * EXTRA), nrpa: +(process.env.NRPA || 3), seed: (t.sseed || 1) + 100, hints, cardV: PRIOR, shapeFn, shapeObserve: true, evalFn: EVALF });
  if ((r2.score || 0) > (best.score || 0)) { best = r2; best.line = [...(sh.rs || []), ...(r2.line || [])]; best.keys = [...(sh.keys || []), ...(r2.keys || [])]; } best.extra = { from: r.score || 0, to: r2.score || 0 }; if (process.env.PROF2) console.error('stage2 ' + (r.score || 0) + ' -> ' + (r2.score || 0) + ' at ' + sh.v + ' :: ' + (sh.rs || []).join(' > ')); } }
t.minutes = 0; if (process.env.PROF2) console.error('playouts ' + r.macros + ' ' + JSON.stringify(Object.entries(searchT1.BR).sort((a,b)=>b[1]-a[1]).slice(0,12))); }
const roots = OPEN ? ((await searchT1(mk(), { listRoot: true, evalFn: EVALF })).root || []) : [];
if (roots.length > 1) { const share = t.minutes * 60000 * 0.8 / roots.length;
  for (const rt of roots) { const r = await searchT1(mk(), { ms: share, maxMacros: Infinity, patience: Infinity, guideW: 0.3, altCap: 8, maxMacro: 80, frontierCap: +(process.env.FC || 3000), div: 1.5, rootOnly: rt, evalFn: EVALF }); if ((r.score || 0) > (best.score || 0)) best = r; }
  t.minutes *= 0.2; }
for (const dv of (t.minutes <= 0 ? [] : roots.length > 1 ? [6] : divs)) { const r = await searchT1(mk(), { ms: t.minutes * 60000 / divs.length, maxMacros: Infinity, patience: Infinity, guideW: 0.3, altCap: 8, maxMacro: 80, frontierCap: +(process.env.FC || 3000), div: dv, evalFn: EVALF }); if ((r.score || 0) > (best.score || 0)) best = r; }
const hl = (String(best.board || '').match(/\n\s*Hand: ([^\n]*)/g) || []).pop() || ''; const left = hl.replace(/^\s*Hand: /, '').split(', ').map(x => x.trim());
// Clean-up pass: try removing each action from the best line (latest first, with every prompt that belongs to it); if the line still
// replays to the same board value without it, the action was doing nothing and is dropped. Only actions that matter stay in the line.
if (best.raw && best.raw.length && t.prune !== false && process.env.PRUNE !== '0') { try {
  const { replay } = await import('./src/replay.mjs');
  const START = /^(Activate .*\((hand|S\d|M\d|EMZ-[LR]|GY|Field|FZ|banishment|PZ-[LR]|Deck|Extra Deck)\)|Normal Summon .*\(|Set (Spell\/Trap|monster)|Special Summon \(procedure\)|Link Summon|Synchro Summon|Xyz Summon|Tribute Summon|Ritual Summon|Fusion Summon)/;
  const val = async (steps) => { let mx = -1; try { await replay(mk(), steps, (S) => { const v = disruption(S, 0); if (v > mx) mx = v; }); } catch {} return mx; };
  let steps = best.raw.filter(e => e.seat === 0 && !e.auto && e.label); const base = await val(steps); let dropped = [];
  if (base >= (best.score || 0) - 0.05) {
    const blocks = () => { const b = []; steps.forEach((e, i) => { if (START.test(e.label) || !b.length) b.push([i, i]); else b[b.length - 1][1] = i; }); return b; };
    for (let bi = blocks().length - 1; bi >= 0; bi--) { const B = blocks(); if (bi >= B.length) continue; const [a0, a1] = B[bi]; const trial = [...steps.slice(0, a0), ...steps.slice(a1 + 1)];
      const v = await val(trial); if (v >= base - 0.01) { dropped.push(steps[a0].label); steps = trial; } }
    // tidy: a Set whose timing changes nothing goes to the end of the line (where a player sets cards), checked by replay
    const isSet = (l) => /^Set (Spell\/Trap|monster)/.test(l || ''); let moved = [];
    for (let guard = 0; guard < 12; guard++) { const B = blocks(); let lastNonSet = -1; B.forEach(([a0], i) => { if (!isSet(steps[a0].label)) lastNonSet = i; });
      const cand = B.findIndex(([a0], i) => i < lastNonSet && isSet(steps[a0].label) && !moved.includes(a0 + ':' + steps[a0].label)); if (cand < 0) break;
      const [a0, a1] = B[cand]; const blk = steps.slice(a0, a1 + 1); const trial = [...steps.slice(0, a0), ...steps.slice(a1 + 1), ...blk]; const v = await val(trial);
      if (v >= base - 0.01) { steps = trial; dropped.push('(moved to the end) ' + blk[0].label); } else moved.push(a0 + ':' + steps[a0].label); }
    if (dropped.length) { best.prunedFrom = (best.line || []).length; best.line = steps.map(e => e.label); best.raw = steps; best.dropped = dropped; } }
} catch (e) { best.pruneError = String(e).slice(0, 200); } }
const used = (best.line || []).join(' | ');
if (process.env.PROF2) { const { T2 } = await import('./src/searchplayer.mjs'); console.error('T2 ' + JSON.stringify(T2)); }
// continuous learning: every finished game adds its best line to the list's learning log (unless this game is a test that must stay independent)
if (t.rawOut) { try { fs.writeFileSync(t.rawOut, JSON.stringify({ hand: t.hand, v: best.score || 0, raw: best.raw || [], keys: best.keys || [], order: [...h, ...pool], extra: deck.extra, seed: t.seed ?? 7, after: AFTER, used: t.hand.map(n => (best.line || []).join(' | ').includes(n)) })); } catch (e) { console.error('rawOut ' + e.message); } }
if (t.learn !== false) logGame(t.learnLog || HP, { v: best.score || 0, keys: best.keys || [] });
console.log('RESULT ' + JSON.stringify({ dropped: best.dropped || [], v: best.score || 0, extra: best.extra || null, keys: best.keys || [], board: (String(best.board || '').split('YOU:')[1] || ''), line: (best.line || []).filter(l => /Summon|Activate|Selected/.test(l)).slice(0, 60), used: t.hand.map(n => used.includes(n)), left, po: searchT1.TOTPO || 0, ppm1: globalThis.RATE1 ?? null, smart: globalThis.SMART ?? null, offered: [...(searchT1.OFFERED || [])].slice(0, 500), usedMust: MU ? (best.line || []).some(l => MU.test(l)) : null }));
