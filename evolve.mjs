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
async function search(ord, order, prefixRaw, tag, remote) { const out = `${TMP}/s-${tag}.json`;
  const task = { deck: DECK, hand: t.hand, main: order, minutes: MIN, rawOut: out, ...(prefixRaw && prefixRaw.length ? { prefixRaw } : {}) };
  const so = await runNode('deepw.mjs', task, { remote, files: [DECK], outputs: [out], heap: 3000 }); tick(); const m = /RESULT (.*)/.exec(so || '');
  if (!fs.existsSync(out)) return null; const L = JSON.parse(fs.readFileSync(out, 'utf8')); L.res = m ? JSON.parse(m[1]) : null; L.file = out; L.tag = tag; L.ord = ord; return L; }
// judge a line: the opponent's turn into it, H hands from each opponent deck; fitness = average margin (board left minus theirs, −10 more if OTK)
async function judge(L) { const items = []; for (const o of OPPS) for (let h = 0; h < H; h++) items.push({ o, sd: 1000 + L.ord * 37 + h });
  const res = await poolN(items, SHARE.local, SHARE.remote, async (it, remote) => { const so = await runNode('oppturn.mjs', { line: L.file, opp: `decks/${it.o}.ydk`, oppSeed: it.sd, minutes: OMIN, hands: 1, choke: false }, { remote, files: [L.file, `decks/${it.o}.ydk`] }); tick();
    const m = /OPPTURN (.*)/.exec(so || ''); return m ? { o: it.o, ...JSON.parse(m[1]) } : null; });
  const ok = res.filter(Boolean); if (!ok.length) return null; const avg = (a) => +(a.reduce((s, x) => s + x.margin, 0) / a.length).toFixed(2);
  L.fit = avg(ok); L.byOpp = Object.fromEntries(OPPS.map(o => [o, ok.filter(x => x.o === o).length ? avg(ok.filter(x => x.o === o)) : null])); L.worst = Math.min(...ok.map(x => x.margin)); L.otk = ok.filter(x => x.otk).length; L.n = ok.length; return L; }
// own choices of a line (index into raw) -> a cut point keeps everything before the k-th own choice
const ownIdx = (raw) => raw.map((e, i) => [e, i]).filter(([e]) => e.seat === 0 && !e.auto && e.label).map(([, i]) => i);
const steps = (L) => (L.raw || []).filter(e => e.seat === 0 && !e.auto && e.label && !/^(Pass|Zone |face-up|face-down)/.test(e.label)).map(e => e.label);

const C = Math.min(ORD, 4); const HS = await helperSlots(); const SHARE = { local: Math.max(1, Math.floor(LOCAL / C)), remote: Math.floor(HS / C) };
log(`evolve ${NAME}: ${seeds.length} seed lines, ${ORD} deck orders, ${ROUNDS} mutation rounds, ${MIN} min searches, ${H} hands x ${OPPS.length} decks per line`);
const perOrd = [];
await poolN(Array.from({ length: ORD }, (_, i) => i + 1), C, 0, async (ord) => {
  const base = await orderOf(ord); const cands = [];
  // 1) seeds followed as far as they work, then the search finishes; a seed that works to the end is also judged as written
  for (const sd of seeds) { const F = await follow(sd, ord); if (!F) continue; const done = !!F.complete;
    const tag = `${path.basename(sd.f, '.json')}-o${ord}`;
    if (done) { const fw = `${TMP}/w-${tag}.json`; fs.writeFileSync(fw, JSON.stringify(F)); cands.push({ ...F, file: fw, tag: tag + '-asis', ord, from: path.basename(sd.f, '.json'), asWritten: true }); }
    const S = await search(ord, F.order, F.raw, tag + '-rec', true); if (S) cands.push({ ...S, from: path.basename(sd.f, '.json'), followed: (F.steps || []).length, of: stepsOf(sd.L).length }); }
  // 2) from scratch
  const S0 = await search(ord, base.order, null, `scratch-o${ord}`, true); if (S0) cands.push({ ...S0, from: 'search' });
  for (const c of cands) await judge(c);
  // 3) mutation: keep a random first part (30-85%) of the best line so far, re-search the rest
  for (let r = 0; r < ROUNDS; r++) { const best = cands.filter(c => c.fit != null).sort((a, b) => b.fit - a.fit)[0]; if (!best || !best.raw) break;
    const own = ownIdx(best.raw); if (own.length < 4) break; const k = own[Math.floor(own.length * (0.3 + 0.55 * Math.random()))];
    const M = await search(ord, best.order, best.raw.slice(0, k), `mut${r}-o${ord}`, true); if (!M) continue; M.from = (best.from || '') + ' → mutated'; await judge(M); cands.push(M); }
  const ranked = cands.filter(c => c.fit != null).sort((a, b) => b.fit - a.fit); const win = ranked[0];
  if (win) { const id = `evo-${NAME}-o${ord}`; const keep = { ...win, id, list: LIST, scn: 'none', when: new Date().toISOString(), evolved: true, keys: (win.res && win.res.keys) || win.keys || [] }; delete keep.res;
    fs.writeFileSync(`lines/evolved/${id}.json`, JSON.stringify(keep)); fs.writeFileSync(`data/lib-${LIST}/${id}.json`, JSON.stringify(keep));
    if (hub) try { await fetch(hub.url + '/put-line', { method: 'POST', body: JSON.stringify(keep), signal: AbortSignal.timeout(30000) }); } catch {} }
  perOrd.push({ ord, cands: ranked.map(c => ({ tag: c.tag, from: c.from, fit: c.fit, byOpp: c.byOpp, worst: c.worst, otk: c.otk, followed: c.followed, of: c.of, asWritten: !!c.asWritten, board: String((c.res && c.res.board) || c.board || '').split('YOU:').pop().slice(0, 700), steps: steps(c) })) });
  log(`order ${ord}: best ${win ? win.fit : '-'} (${win ? win.from : '-'})`); });

perOrd.sort((a, b) => a.ord - b.ord);
const all = perOrd.map(p => p.cands[0]).filter(Boolean); const mean = (a) => a.length ? +(a.reduce((s, x) => s + x, 0) / a.length).toFixed(2) : null;
const seedAsIs = seeds.map(sd => { const nm = path.basename(sd.f, '.json'); const xs = perOrd.map(p => p.cands.find(c => c.asWritten && c.from === nm)); return { nm, works: xs.filter(Boolean).length, fit: mean(xs.filter(Boolean).map(x => x.fit)), rec: mean(perOrd.map(p => (p.cands.find(c => c.from === nm && !c.asWritten) || {}).fit).filter(x => x != null)) }; });
let md = `# Evolved lines — ${t.hand.join(', ')} (${LIST})\n${new Date().toISOString()}\n\n${ORD} deck orders (different face-down banishes / draws), ${H} opponent hands x ${OPPS.join(' + ')} per line, ${MIN} min searches, ${ROUNDS} mutation rounds.\nFitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.\n\n`;
md += `**Best line per deck order: average ${mean(all.map(x => x.fit))}** (worst order ${all.length ? Math.min(...all.map(x => x.fit)) : '-'}). Winner came from: ${Object.entries(all.reduce((m, x) => (m[x.from] = (m[x.from] || 0) + 1, m), {})).map(([k, v]) => `${k} ${v}`).join(', ')}\n\n`;
if (seedAsIs.length) md += `| seed line | works as written | its score when it works | seed start + search finish (all orders) |\n|---|---|---|---|\n` + seedAsIs.map(s => `| ${s.nm} | ${s.works}/${ORD} | ${s.fit ?? '-'} | ${s.rec ?? '-'} |`).join('\n') + '\n\n';
for (const p of perOrd) { const w = p.cands[0]; if (!w) continue; md += `## Order ${p.ord}: best ${w.fit} (Sky Striker ${w.byOpp.o_ss_panama ?? '-'}, Elfnote ${w.byOpp.o_elfnote ?? '-'}, worst ${w.worst}) — from ${w.from}${w.followed != null ? ` (seed followed ${w.followed}/${w.of} steps)` : ''}\n`;
  md += `Others: ${p.cands.slice(1).map(c => `${c.from} ${c.fit}`).join(' · ')}\n\n${w.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nEnd board: ${w.board.replace(/\n/g, ' ')}\n\n`; }
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/evolve-${NAME}.md`, md); fs.writeFileSync(`reports/evolve-${NAME}.json`, JSON.stringify(perOrd));
log(`done -> reports/evolve-${NAME}.md`);
