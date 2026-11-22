// Line evolution: finds and tests lines for one opening hand better than a person can by hand.
// For each of N deck orders (what the Nervedo/Junoldo face-down banishes and draws hit changes with the order):
//   1) every seed line (hand-designed, lines/designed/*.json with the same opening cards) is followed as far as it still works,
//      then the search finishes the turn from there (recovery when a piece got banished)
//   2) a plain search from scratch
//   3) mutation rounds: keep the first part of the best line so far, re-search the rest (different branch, same good start)
//   every candidate is judged by what matters: the opponent's real turn into it (Sky Striker + Elfnote, several hands each, battle phase)
// The best line per deck order is kept (lines/evolved/), its moves feed the search's hints, and the report says which line to play
// and what to do when a piece is missing. Pieces run on this PC and on helper PCs.
// node evolve.mjs '<json>'  { deck, hand:[names], name, orders: 8, rounds: 3, minutes: 1, hands: 3, oppMinutes: 0.5, seeds: [files] }
import fs from 'fs'; import os from 'os'; import path from 'path';
import { runNode, helperSlots, hub } from './src/remote.mjs';
// run fn over items with `local` workers here and `remote` workers that send their piece to helper PCs
const poolN = async (items, local, remote, fn) => { const q = items.slice(); const out = new Map(); await Promise.all(Array.from({ length: Math.max(1, local) + Math.max(0, remote) }, async (_, w) => { while (q.length) { const it = q.shift(); out.set(it, await fn(it, w >= local)); } })); return items.map(it => out.get(it)); };
const t = JSON.parse(process.argv[2]); const DECK = t.deck || 'decks/L2-vand3.ydk'; const LIST = path.basename(DECK, '.ydk');
const NAME = (t.name || t.hand.join('+')).replace(/[^\w+-]+/g, '_').slice(0, 60); const ORD = +(t.orders || 8), ROUNDS = +(t.rounds ?? 3), MIN = +(t.minutes || 1), H = +(t.hands || 3), OMIN = +(t.oppMinutes || 0.5);
const OPPS = (t.opps || ['o_ss_panama', 'o_elfnote']).filter(o => fs.existsSync(`decks/${o}.ydk`)); const LOCAL = Math.max(1, +(t.par || os.cpus().length - 1));
const TMP = `data/tmp-evo/${NAME}`; fs.mkdirSync(TMP, { recursive: true }); fs.mkdirSync('lines/evolved', { recursive: true });
const key = (a) => [...a].sort().join('|'); const HK = key(t.hand);
// seed lines: hand-designed lines for this exact opening hand (or the files given)
const seeds = (t.seeds || fs.readdirSync('lines/designed').filter(f => f.endsWith('.json')).map(f => 'lines/designed/' + f))
  .map(f => { try { return { f, L: JSON.parse(fs.readFileSync(f, 'utf8')) }; } catch { return null; } }).filter(x => x && (x.L.script || []).length && key(x.L.hand || []) === HK);
// the scripted steps of a seed line live in its play.mjs input; recover them from the saved steps list ("12. label")
const stepsOf = (L) => L.script || [];
const log = (m) => console.log(m);
let pieces = 0; const tick = () => { pieces++; if (pieces % 5 === 0) log(`progress ${pieces} pieces`); };
// follow a seed line on one deck order: play.mjs stops at the first step that no longer works and saves the line so far
async function follow(seed, ord) { const out = `${TMP}/f-${path.basename(seed.f, '.json')}-o${ord}.json`;
  await runNode('play.mjs', { deck: DECK, hand: t.hand, seed: ord, steps: stepsOf(seed.L), out }, {}); return fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')) : null; }
// deck order for order k (same shuffle as play.mjs)
async function orderOf(ord) { const out = `${TMP}/ord-o${ord}.json`; if (fs.existsSync(out)) return JSON.parse(fs.readFileSync(out, 'utf8'));
  await runNode('play.mjs', { deck: DECK, hand: t.hand, seed: ord, steps: [], out }, {}); return JSON.parse(fs.readFileSync(out, 'utf8')); }
// search the rest of the turn from a fixed start (or from scratch)
async function search(ord, order, prefixRaw, tag, remote, extra = {}) { const out = `${TMP}/s-${tag}.json`;
  const task = { deck: DECK, hand: t.hand, main: order, minutes: MIN, rawOut: out, ...(prefixRaw && prefixRaw.length ? { prefixRaw } : {}), ...extra };
  const so = await withSlot((rm) => runNode('deepw.mjs', task, { remote: rm && remote, files: [DECK], outputs: [out], heap: 3000 })); tick(); const m = /RESULT (.*)/.exec(so || '');
  if (!fs.existsSync(out)) return null; const L = JSON.parse(fs.readFileSync(out, 'utf8')); L.res = m ? JSON.parse(m[1]) : null; L.file = out; L.tag = tag; L.ord = ord; return L; }
// judge a line: the opponent's turn into it, H hands from each opponent deck; fitness = average margin (board left minus theirs, −10 more if OTK)
async function judge(L) { const items = []; for (const o of OPPS) for (let h = 0; h < H; h++) items.push({ o, sd: 1000 + L.ord * 37 + h });
  const res = await Promise.all(items.map(async (it) => { const so = await withSlot((remote) => runNode('oppturn.mjs', { line: L.file, opp: `decks/${it.o}.ydk`, oppSeed: it.sd, minutes: OMIN, hands: 1, choke: false }, { remote, files: [L.file, `decks/${it.o}.ydk`] })); tick();
    const m = /OPPTURN (.*)/.exec(so || ''); return m ? { o: it.o, ...JSON.parse(m[1]) } : null; }));
  const ok = res.filter(Boolean); if (!ok.length) return null; const avg = (a) => +(a.reduce((s, x) => s + x.margin, 0) / a.length).toFixed(2);
  L.fit = avg(ok); L.byOpp = Object.fromEntries(OPPS.map(o => [o, ok.filter(x => x.o === o).length ? avg(ok.filter(x => x.o === o)) : null])); L.worst = Math.min(...ok.map(x => x.margin)); L.otk = ok.filter(x => x.otk).length; L.n = ok.length; return L; }
// own choices of a line (index into raw) -> a cut point keeps everything before the k-th own choice
const ownIdx = (raw) => raw.map((e, i) => [e, i]).filter(([e]) => e.seat === 0 && !e.auto && e.label).map(([, i]) => i);
const normA = (l) => String(l).replace(/ \((?:M|S|EMZ|hand|GY|Deck|Extra Deck|banishment|Field)[\w-]*\)/g, '').replace(/^Selected /, '');
const TRIVIAL = /^(Set Spell\/Trap|Set monster|Go to|Normal Summon (Ash|Droll|Ghost Ogre|Infinite)|Activate (Ash|Droll|Ghost Ogre|Infinite Impermanence)|Change battle position)/;
const hashS = (x) => { let h = 0; for (const ch of x) h = (h * 31 + ch.charCodeAt(0)) | 0; return h; };
const COVF = `data/coverage-${LIST}.json`; const COV = fs.existsSync(COVF) ? JSON.parse(fs.readFileSync(COVF, 'utf8')) : {};
const facedown = (c) => { const b = String((c.res && c.res.board) || c.board || ''); const m = /Banished: ([^\n]*)/.exec(b.split('YOU:').pop()); return m ? [...m[1].matchAll(/([^,]+?) \(face-down\)/g)].map(x => x[1].trim()) : []; };
const steps = (L) => (L.raw || []).filter(e => e.seat === 0 && !e.auto && e.label && !/^(Pass|Zone |face-up|face-down)/.test(e.label)).map(e => e.label);

let SEM = null; const waiters = []; // one shared set of cores for every piece: helper slots first, then this PC
const withSlot = async (job) => { for (;;) { if (SEM.r > 0) { SEM.r--; try { return await job(true); } finally { SEM.r++; const w = waiters.shift(); if (w) w(); } } if (SEM.l > 0) { SEM.l--; try { return await job(false); } finally { SEM.l++; const w = waiters.shift(); if (w) w(); } } await new Promise(r => waiters.push(r)); } };
const C = ORD; /* every deck order at once: the long chains (search, judge, mutate) overlap and keep all cores busy */ const HS = await helperSlots(); SEM = { l: LOCAL, r: HS }; let HS0 = HS; // helpers that join or update to this code version later are picked up every 2 min
const hsTimer = setInterval(async () => { const h = await helperSlots(); if (h !== HS0) { SEM.r += h - HS0; HS0 = h; log(`helper slots now ${h}`); for (let i = 0; i < Math.max(0, h); i++) { const w = waiters.shift(); if (w) w(); } } }, 120000);
log(`evolve ${NAME}: ${seeds.length} seed lines, ${ORD} deck orders, ${ROUNDS} mutation rounds, ${MIN} min searches, ${H} hands x ${OPPS.length} decks per line`);
const perOrd = [];
await poolN(Array.from({ length: ORD }, (_, i) => i + 1), C, 0, async (ord) => {
  const base = await orderOf(ord); const cands = [];
  // 1) seeds followed as far as they work, then the search finishes; a seed that works to the end is also judged as written
  // (all searches of this step run at once, on helper PCs where possible, then every candidate is judged at once)
  await Promise.all([...seeds.map(async (sd) => { const F = await follow(sd, ord); if (!F) return; const done = !!F.complete;
    const tag = `${path.basename(sd.f, '.json')}-o${ord}`;
    if (done) { const fw = `${TMP}/w-${tag}.json`; fs.writeFileSync(fw, JSON.stringify(F)); cands.push({ ...F, file: fw, tag: tag + '-asis', ord, from: path.basename(sd.f, '.json'), asWritten: true }); }
    const S = await search(ord, F.order, F.raw, tag + '-rec', true); if (S) cands.push({ ...S, from: path.basename(sd.f, '.json'), followed: (F.steps || []).length, of: stepsOf(sd.L).length }); }),
  // 2) from scratch
    (async () => { const S0 = await search(ord, base.order, null, `scratch-o${ord}`, true); if (S0) cands.push({ ...S0, from: 'search' }); })()]);
  await Promise.all(cands.map(c => judge(c)));
  // 3) exploration, proactive: (a) every opening move gets its own share of a search (a different order of the early plays, e.g. searching
  //    the 1-of pieces before a cost banishes them); (b) actions the engine offered but no candidate used, tried first if no earlier run
  //    ever tried them (data/coverage-<list>.json) — e.g. a card's other Summon procedure; the search gets a bonus for lines that include it
  const ex = []; ex.push((async () => { const O = await search(ord, base.order, null, `lanes-o${ord}`, true, { open: true }); if (O) { O.from = 'opening lanes'; await judge(O); cands.push(O); } })());
  const used = new Set(cands.flatMap(c => steps(c).map(normA))); const offered = new Map(); for (const c of cands) for (const l of ((c.res && c.res.offered) || [])) offered.set(normA(l), l);
  const untried = [...offered.keys()].filter(k => !used.has(k) && !TRIVIAL.test(k)).sort((a, b) => (COV[a]?.tried || 0) - (COV[b]?.tried || 0) || (COV[b]?.offered || 0) - (COV[a]?.offered || 0));
  for (const k of offered.keys()) { COV[k] = COV[k] || { offered: 0, tried: 0, best: null }; COV[k].offered++; }
  for (const k of untried.slice(0, +(t.explore ?? 2))) { COV[k].tried++; ex.push((async () => { const mu = '^' + k.split(':')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const X = await search(ord, base.order, null, `try${Math.abs(hashS(k)) % 1e6}-o${ord}`, true, { mustUse: mu }); if (!X) return; X.from = 'tries ' + k.split(':')[0].slice(0, 70); await judge(X); cands.push(X);
    if (X.fit != null && (COV[k].best == null || X.fit > COV[k].best)) COV[k].best = X.fit; })()); }
  await Promise.all(ex);
  // 4) mutation: keep the first part of the best line so far and re-search the rest; rounds alternate a late cut (30-85%: new ending)
  //    and an early cut (first 5-30%: new order of the early plays)
  for (let r = 0; r < ROUNDS; r++) { const best = cands.filter(c => c.fit != null).sort((a, b) => b.fit - a.fit)[0]; if (!best || !best.raw) break;
    const own = ownIdx(best.raw); if (own.length < 4) break; const lo = r % 2 ? 0.05 : 0.3, span = r % 2 ? 0.25 : 0.55; const k = own[Math.floor(own.length * (lo + span * Math.random()))];
    const M = await search(ord, best.order, best.raw.slice(0, k), `mut${r}-o${ord}`, true); if (!M) continue; M.from = (best.from || '') + (r % 2 ? ' → new early order' : ' → new ending'); await judge(M); cands.push(M); }
  const ranked = cands.filter(c => c.fit != null).sort((a, b) => b.fit - a.fit); const win = ranked[0];
  if (win) { const id = `evo-${NAME}-o${ord}`; const keep = { ...win, id, list: LIST, scn: 'none', when: new Date().toISOString(), evolved: true, keys: (win.res && win.res.keys) || win.keys || [] }; delete keep.res;
    fs.writeFileSync(`lines/evolved/${id}.json`, JSON.stringify(keep)); fs.writeFileSync(`data/lib-${LIST}/${id}.json`, JSON.stringify(keep));
    if (hub) try { await fetch(hub.url + '/put-line', { method: 'POST', body: JSON.stringify(keep), signal: AbortSignal.timeout(30000) }); } catch {} }
  perOrd.push({ ord, cands: ranked.map(c => ({ tag: c.tag, from: c.from, fit: c.fit, byOpp: c.byOpp, worst: c.worst, otk: c.otk, followed: c.followed, of: c.of, asWritten: !!c.asWritten, failStep: c.followed != null && c.followed < c.of ? (seeds.find(x => path.basename(x.f, '.json') === String(c.from).split(' ')[0])?.L.script || [])[c.followed] || null : null, gone: facedown(c), board: String((c.res && c.res.board) || c.board || '').split('YOU:').pop().slice(0, 700), steps: steps(c) })) });
  log(`order ${ord}: best ${win ? win.fit : '-'} (${win ? win.from : '-'})`); });

perOrd.sort((a, b) => a.ord - b.ord);
const all = perOrd.map(p => p.cands[0]).filter(Boolean); const mean = (a) => a.length ? +(a.reduce((s, x) => s + x, 0) / a.length).toFixed(2) : null;
const seedAsIs = seeds.map(sd => { const nm = path.basename(sd.f, '.json'); const xs = perOrd.map(p => p.cands.find(c => c.asWritten && c.from === nm)); return { nm, works: xs.filter(Boolean).length, fit: mean(xs.filter(Boolean).map(x => x.fit)), rec: mean(perOrd.map(p => (p.cands.find(c => c.from === nm && !c.asWritten) || {}).fit).filter(x => x != null)) }; });
fs.writeFileSync(COVF, JSON.stringify(COV));
// weak points, found without being asked: (1) which cards, when a cost banished them face-down, cost the most (best line per order, with vs without);
// (2) where the hand-designed lines broke; (3) list changes to test that follow from (1) — written for the list test (data/proposals-<list>.json)
const W = {}; for (const p of perOrd) { const w = p.cands[0]; if (!w) continue; const gone = new Set(p.cands.flatMap(c => c.gone || [])); for (const g of gone) (W[g] = W[g] || { hit: [], ok: [] }); }
for (const g of Object.keys(W)) for (const p of perOrd) { const w = p.cands[0]; if (!w) continue; const g0 = new Set(p.cands.flatMap(c => c.gone || [])); (g0.has(g) ? W[g].hit : W[g].ok).push(w.fit); }
const weak = Object.entries(W).map(([c, v]) => ({ card: c, hit: v.hit.length, drop: v.hit.length && v.ok.length ? +(mean(v.ok) - mean(v.hit)).toFixed(2) : null })).filter(x => x.drop != null && x.hit >= 2).sort((a, b) => b.drop - a.drop);
const fails = {}; for (const p of perOrd) for (const c of p.cands) if (c.failStep) fails[c.from.split(' ')[0] + ': ' + c.failStep] = (fails[c.from.split(' ')[0] + ': ' + c.failStep] || 0) + 1;
const deckL = (await import('./src/cards.mjs')); const D0 = deckL.parseYdk(fs.readFileSync(DECK, 'utf8')); const cnt = (n) => D0.main.filter(k => deckL.name(k) === n).length;
const CUTS = t.cutOrder || ['Plundered Power Patron Plane - Vidolia', 'Artmage Vandalism -Assault-', 'Dark Magical Circle', 'Apprentice Illusion Magician'];
const cutsFor = (c) => CUTS.filter(k => k !== c); const props = weak.filter(x => x.drop >= 0.5 && cnt(x.card) > 0 && cnt(x.card) < 3).slice(0, 4).map((x, i) => ({ why: `${x.card}: best line ${x.drop} worse when a cost banished it (${x.hit} of ${ORD} orders) — ${t.hand[0]}`, v: [{ op: 'add', card: x.card }, { op: 'cut', card: cutsFor(x.card)[i % cutsFor(x.card).length] }] }));
const PF = `data/proposals-${LIST}.json`; const P0 = fs.existsSync(PF) ? JSON.parse(fs.readFileSync(PF, 'utf8')) : []; for (const p of props) if (!P0.some(q => JSON.stringify(q.v) === JSON.stringify(p.v))) P0.push({ ...p, from: NAME, when: new Date().toISOString() }); fs.writeFileSync(PF, JSON.stringify(P0, null, 1));
let md = `# Evolved lines — ${t.hand.join(', ')} (${LIST})\n${new Date().toISOString()}\n\n${ORD} deck orders (different face-down banishes / draws), ${H} opponent hands x ${OPPS.join(' + ')} per line, ${MIN} min searches, ${ROUNDS} mutation rounds.\nFitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.\n\n`;
md += `**Best line per deck order: average ${mean(all.map(x => x.fit))}** (worst order ${all.length ? Math.min(...all.map(x => x.fit)) : '-'}). Winner came from: ${Object.entries(all.reduce((m, x) => (m[x.from] = (m[x.from] || 0) + 1, m), {})).map(([k, v]) => `${k} ${v}`).join(', ')}\n\n`;
if (seedAsIs.length) md += `| seed line | works as written | its score when it works | seed start + search finish (all orders) |\n|---|---|---|---|\n` + seedAsIs.map(s => `| ${s.nm} | ${s.works}/${ORD} | ${s.fit ?? '-'} | ${s.rec ?? '-'} |`).join('\n') + '\n\n';
md += `## Weak points found automatically\n` + (weak.length ? `Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):\n\n| card | orders where it was banished | drop |\n|---|---|---|\n` + weak.slice(0, 10).map(x => `| ${x.card} | ${x.hit}/${ORD} | ${x.drop} |`).join('\n') + '\n\n' : 'None this run.\n\n');
md += Object.keys(fails).length ? `Where the hand-designed lines broke (next step that no longer worked):\n${Object.entries(fails).sort((a, b) => b[1] - a[1]).map(([k, v]) => `- ${k} (${v}x)`).join('\n')}\n\n` : '';
md += props.length ? `List changes proposed for the list test (data/proposals-${LIST}.json):\n${props.map(p => `- ${p.v.map(c => (c.op === 'add' ? '+1 ' : '−1 ') + c.card).join(', ')} — ${p.why}`).join('\n')}\n\n` : '';
const tri = Object.entries(COV).filter(([, v]) => v.tried && v.best != null).sort((a, b) => b[1].best - a[1].best).slice(0, 8);
md += tri.length ? `Effects the search had not used, tried on purpose (best result so far):\n${tri.map(([k, v]) => `- ${k.split(':')[0]}: ${v.best}`).join('\n')}\n\n` : '';
for (const p of perOrd) { const w = p.cands[0]; if (!w) continue; md += `## Order ${p.ord}: best ${w.fit} (Sky Striker ${w.byOpp.o_ss_panama ?? '-'}, Elfnote ${w.byOpp.o_elfnote ?? '-'}, worst ${w.worst}) — from ${w.from}${w.followed != null ? ` (seed followed ${w.followed}/${w.of} steps)` : ''}\n`;
  md += `Others: ${p.cands.slice(1).map(c => `${c.from} ${c.fit}`).join(' · ')}\n\n${w.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nEnd board: ${w.board.replace(/\n/g, ' ')}\n\n`; }
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/evolve-${NAME}.md`, md); fs.writeFileSync(`reports/evolve-${NAME}.json`, JSON.stringify(perOrd));
clearInterval(hsTimer); log(`done -> reports/evolve-${NAME}.md`);
