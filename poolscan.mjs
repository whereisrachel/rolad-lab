// Whole-pool screen: every TCG-legal card (Main and Extra Deck), tested mechanically inside your list's own best lines. No name/keyword filter.
// 0) lines: the line finder plays your list's starters (Medius, Treasure, Citrinitas, Engraver, Infinity, Small World, ...) and records its best lines
// A) for every card: add it (to the hand in place of an unused card, or to the Extra Deck in place of your least-used Extra Deck card), replay each line
//    by its option labels and check, at every point, whether the engine offers a real action with that card (activate, special summon, Link/Synchro/Xyz
//    summon, Set an interrupting Trap/Quick-Play, Normal Summon with an on-summon effect). Cards that never get one are dropped.
// B) for the cards left: from the point where the card first becomes usable, search the rest of the turn (the recorded line is the head start) and
//    compare with the line's own end board. Biggest gains first. Top cards go to "Find a better list" (findlist.mjs --pool).
// node poolscan.mjs [--deck D] [--tb 12] [--tb2 40] [--top2 150] [--lmin 3] [--limit N]
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
import { parseYdk, name, banlist, cardDB } from './src/cards.mjs';
let a = process.argv.slice(2); if (a.length === 1 && a[0].startsWith('{')) { const o = JSON.parse(a[0]); a = ['--worker', '--in', o.in, '--out', o.out]; } /* a chunk sent to a helper PC arrives as one JSON argument */ const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const deckPath = f('deck', 'decks/L2-vand3.ydk'); const LIST = path.basename(deckPath).replace(/\.ydk$/, '');
const PAR = Math.min(+f('par', Math.max(1, os.cpus().length - 1)), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const TB = +f('tb', 8), TB2 = +f('tb2', 30), TOP2 = +f('top2', 150), LMIN = +f('lmin', 3), ID = f('id', String(Date.now() % 100000));
const LINES = `data/lines-${LIST}.json`, OUT = `data/poolscan-${LIST}.json`;
const ED = 0x40 | 0x2000 | 0x800000 | 0x4000000;
const { data, text } = cardDB(); const desc = (c) => (text.get(c) || {}).desc || '';
const isHT = (c) => { const t = desc(c); return (/\(Quick Effect\): You can (discard|send) this card/i.test(t) && /(negate|destroy|opponent's hand|activates)/i.test(t)) || /^Infinite Impermanence$/.test(name(c)); };
const codeOfN = (n) => { for (const [c, t] of text) if (t.name === n) return c; return 0; };
const log = (s) => console.log(`[${new Date().toLocaleTimeString()}] ${s}`);

// ---------------- worker ----------------
if (a.includes('--worker')) {
  const job = JSON.parse(fs.readFileSync(f('in'), 'utf8')); const outp = f('out');
  const { mkGame, replay } = await import('./src/replay.mjs'); const { genericCredit } = await import('./src/generic.mjs');
  const NEEDS = await import('./src/needs.mjs'); NEEDS.needsDB();
  const res = []; let n = 0; const CTRL = new Map(Object.entries(job.ctrl || {})); const WABOKU = (await import('./src/replay.mjs')).codeOf('Waboku');
  const usable = (code, isEd) => { const nm = name(code); const t = desc(code); const d = data.get(code) || {};
    const nsEff = /(If|When) this card is (Normal|Normal or Special) Summoned/i.test(t);
    const setOk = ((d.type & 4) || ((d.type & 2) && (d.type & 0x10000))) && !!genericCredit(code, 'st');
    return (o) => { const l = o.label; if (!l.includes(nm)) return false;
      if (isEd) return new RegExp('^(Link Summon|Synchro Summon|Xyz Summon|Special Summon \\(procedure\\)|Pendulum Summon|Fusion Summon)\\b.*' + nm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '.*\\(Extra Deck\\)').test(l) || (l.startsWith('Activate ' + nm) && /Extra Deck/.test(l));
      if (/Activate it as a Pendulum/.test(l)) return false;
      if (l.startsWith('Activate ' + nm) || l.startsWith('Special Summon (procedure) ' + nm)) return true;
      if (l.startsWith('Normal Summon ' + nm) || l.startsWith('Tribute Summon ' + nm)) return nsEff;
      if (l.startsWith('Set Spell/Trap ' + nm)) return setOk; return false; }; };
  for (const it of job.items) {
    const L = job.lines; const hits = [];
    if (job.stage === 'P') { res.push(grow(it)); console.log(`${++n}/${job.items.length}`); continue; }
    if (job.stage === 'A') for (let li = 0; li < L.length; li++) { const ln = L[li]; const g = build(ln, it); if (!g) continue;
      const test = it.pkg ? ((ts) => (o) => ts.some(t => t(o)))([...it.pkg.main.map(c => usable(c, false)), ...it.pkg.ed.map(c => usable(c, true))]) : usable(it.code, it.zone === 'ed');
      if (job.stage === 'A') { let hit = null; try { await replay(g, ln.raw, (S, d, i) => { const o = d.options.find(test); if (o) { if (!hit) hit = { li, i, label: o.label }; hit.last = i; hit.lastLabel = o.label; } }); } catch {} if (hit) hits.push(hit); }
    }
    if (job.stage === 'A') res.push({ name: it.name, code: it.code, zone: it.zone, pkg: it.pkg, hits });
    if (job.stage === 'C') { const { searchT1 } = await import('./src/searchplayer.mjs'); const { disruption, setHT } = await import('./src/disrupt.mjs'); setHT(0); process.env.CANON = '1'; process.env.LIGHT = '1';
      const ln = L[it.li]; const hints = { ...(job.hints || {}) }; for (const k of ln.keys || []) hints[k] = Math.max(hints[k] || 0, 2); let cs = ln.v;
      for (const ctl of it.ed ? [null] : [null, { code: WABOKU, zone: 'main' }]) { try { const g0 = build(ln, ctl); let fx0 = null; await replay(g0, ln.raw, (S, d, i) => { if (i >= it.i) { fx0 = S.game.responses.slice(); return false; } });
        if (fx0) { const g3 = build(ln, ctl); g3.responses = fx0.map(x => ({ ...x })); const r0 = await searchT1(g3, { ms: job.tb * 1000, nrpa: 3, seed: 1, hints, evalFn: (S, s) => disruption(S, s) }); cs = Math.max(cs, r0.score || 0); } } catch {} }
      res.push({ key: (it.ed ? 'e' : 'm') + it.li + ':' + it.i, v: cs }); }
    if (job.stage === 'B') { const { searchT1 } = await import('./src/searchplayer.mjs'); const { disruption, setHT } = await import('./src/disrupt.mjs'); setHT(0); process.env.CANON = '1'; process.env.LIGHT = '1'; process.env.NRPA_N ||= '30';
      let bestG = -99, best = null;
      for (const h of it.hits) { const ln = L[h.li]; const g = build(ln, it); if (!g) continue; let fixed = null;
        try { const r = await replay(g, ln.raw, (S, d, i) => { if (i >= h.i) { fixed = S.game.responses.slice(); return false; } }); if (!fixed) continue; } catch { continue; }
        const g2 = build(ln, it); g2.responses = fixed.map(x => ({ ...x })); const hints = { ...(job.hints || {}) }; for (const k of ln.keys || []) hints[k] = Math.max(hints[k] || 0, 2);
        // control: the same point and the same search time WITHOUT the card (the line's own hand), so a gain is the card, not search luck
        // second control (Main Deck cards): Waboku in the same slot, i.e. "any extra Spell/Trap" (Non-Finito discard fodder etc.), so a card must beat a do-nothing card
        const ck = (it.zone === 'ed' ? 'e' : 'm') + h.li + ':' + h.i; if (!CTRL.has(ck)) { let cs = ln.v;
          for (const ctl of it.zone === 'ed' ? [null] : [null, { code: WABOKU, zone: 'main' }]) { try { const g0 = build(ln, ctl); let fx0 = null; await replay(g0, ln.raw, (S, d, i) => { if (i >= h.i) { fx0 = S.game.responses.slice(); return false; } });
            if (fx0) { const g3 = build(ln, ctl); g3.responses = fx0.map(x => ({ ...x })); const r0 = await searchT1(g3, { ms: job.tb * 1000, nrpa: 3, seed: 1, hints, evalFn: (S, s) => disruption(S, s) }); cs = Math.max(cs, r0.score || 0); } } catch {} }
          CTRL.set(ck, cs); }
        const ref = CTRL.get(ck);
        let sc = 0; try { const r = await searchT1(g2, { ms: job.tb * 1000, nrpa: 3, seed: 1, hints, evalFn: (S, s) => disruption(S, s) }); sc = Math.max(r.score || 0, ln.v); /* the original line is still playable with the card in hand: never below it */ if (sc - ref > bestG) { bestG = sc - ref; best = { li: h.li, at: h.label, v: sc, base: ref, line: (r.line || []).filter(l => /Summon|Activate|Selected/.test(l)).slice(0, 40) }; } } catch {}
      }
      res.push({ name: it.name, code: it.code, zone: it.zone, pkg: it.pkg, hits: it.hits, gain: best ? +bestG.toFixed(2) : null, best }); }
    console.log(`${++n}/${job.items.length}`);
  }
  fs.writeFileSync(outp, JSON.stringify(res)); process.exit(0);
  function touched(ln) { if (ln._t) return ln._t; const t = new Set(); const all = (ln.raw || []).map(r => r.label || '').join(' | '); for (const c of [...ln.order, ...ln.extra]) { const nmC = name(c); if (all.includes(nmC)) t.add(nmC); } ln._t = t; return t; }
  function grow(it) { // seed + the cards it needs / that need it (specific filters only), 2 hops, up to 3 Main + 4 Extra cards not already in the list
    const P = NEEDS.partners(it.code, job.pool); const inL = new Set(job.inList); const ok = (c) => !inL.has(name(c)) && !isHT(c) && c !== it.code;
    const isEdC = (c) => !!((data.get(c) || {}).type & ED); const pk = { main: [], ed: [] }; const put = (c) => { if (isEdC(c)) { if (pk.ed.length < 4 && !pk.ed.includes(c)) pk.ed.push(c); } else if (pk.main.length < 3 && !pk.main.includes(c)) pk.main.push(c); };
    put(it.code); for (const x of P.filter(x => ok(x.code) && x.w >= 0.5).slice(0, 6)) put(x.code);
    const hop = pk.main.find(c => c !== it.code) || pk.ed.find(c => c !== it.code); if (hop) for (const x of NEEDS.partners(hop, job.pool).filter(x => ok(x.code) && x.w >= 0.6 && !pk.main.includes(x.code) && !pk.ed.includes(x.code)).slice(0, 2)) put(x.code);
    const out = [{ seed: it.code, kind: 'compact', main: pk.main, ed: pk.ed, why: P.slice(0, 4).map(x => name(x.code) + ': ' + x.why[0]) }];
    // archetype closures: every useful member of the seed's archetype (its own archetype and the archetypes its scripts ask for), so a package is
    // never missing its key piece (e.g. Desirae); ratios are trimmed later by Find a better list
    const sd = data.get(it.code) || {}; const sets = new Set(NEEDS.setsOf(sd)); for (const n of (NEEDS.needsDB().needs[it.code] || [])) for (const any of n.set || []) for (const x of any) sets.add(x);
    const wOf = new Map(P.map(x => [x.code, x.w]));
    for (const st of [...sets].slice(0, 3)) { const mem = job.pool.filter(c => ok(c) && NEEDS.hasSet(data.get(c), st)); if (mem.length < 1 || mem.length > 40) continue;
      const rank = (arr) => arr.sort((a, b) => (wOf.get(b) || 0.1) - (wOf.get(a) || 0.1));
      const mainC = rank(mem.filter(c => !isEdC(c))), edC = rank(mem.filter(c => isEdC(c)));
      const pkc = { main: [it.code, ...mainC].filter((c, i, a) => !isEdC(c) && a.indexOf(c) === i).slice(0, 6), ed: [...(isEdC(it.code) ? [it.code] : []), ...edC].filter((c, i, a) => a.indexOf(c) === i).slice(0, 6) };
      for (const x of P.filter(x => ok(x.code) && x.w >= 0.8 && !pkc.main.includes(x.code) && !pkc.ed.includes(x.code)).slice(0, 2)) { if (isEdC(x.code)) { if (pkc.ed.length < 6) pkc.ed.push(x.code); } else if (pkc.main.length < 6) pkc.main.push(x.code); }
      if (pkc.main.length + pkc.ed.length >= 3) out.push({ seed: it.code, kind: 'archetype', main: pkc.main, ed: pkc.ed, why: ['archetype 0x' + st.toString(16)] }); }
    return out; }
  function build(ln, it) { // the line's game with the card added (it = null: the line's own game)
    const order = ln.order.slice(), extra = ln.extra.slice(); if (!it) return mkGame({ extra, order, seed: ln.seed });
    if (it.pkg) { // a package: first Main member in an unused hand slot, other Main members in place of Deck cards this line never touches, Extra members in place of Extra cards it never uses
      const tn = touched(ln); const mains = it.pkg.main.slice(); let slot = -1; for (let q = 4; q >= 0; q--) if (!ln.used[q]) { slot = q; break; }
      if (slot >= 0 && mains.length) order[slot] = mains.shift(); const used = new Set();
      for (const m of mains) { let j = -1; for (let q = 5; q < order.length; q++) if (!used.has(q) && !tn.has(name(order[q])) && isHT(order[q])) { j = q; break; }
        if (j < 0) for (let q = order.length - 1; q >= 5; q--) if (!used.has(q) && !tn.has(name(order[q]))) { j = q; break; } if (j < 0) continue; used.add(j); order[j] = m; }
      const usedE = new Set(); for (const e of it.pkg.ed) { if (extra.length < 15) { extra.push(e); continue; } let k = -1; for (const nmE of job.edOrder || []) { const q = extra.findIndex((c, i) => !usedE.has(i) && name(c) === nmE && !tn.has(nmE)); if (q >= 0) { k = q; break; } } if (k < 0) { const q2 = extra.findIndex((c, i) => !usedE.has(i) && !tn.has(name(c))); if (q2 < 0) continue; k = q2; } usedE.add(k); extra[k] = e; }
      return mkGame({ extra, order, seed: ln.seed }); }
    if (it.zone === 'ed') { if (extra.length < 15) { extra.push(it.code); return mkGame({ extra, order, seed: ln.seed }); } const tn = touched(ln); let k = -1; for (const nmE of [job.leastEd, ...(job.edOrder || [])]) { const q = extra.findIndex(c => name(c) === nmE && !tn.has(nmE)); if (q >= 0) { k = q; break; } } if (k < 0) return null; /* an Extra Deck card this line never uses */ extra[k] = it.code; return mkGame({ extra, order, seed: ln.seed }); }
    let slot = -1; for (let q = 4; q >= 0; q--) if (!ln.used[q]) { slot = q; break; } if (slot < 0) return null;
    order[slot] = it.code; return mkGame({ extra, order, seed: ln.seed }); // same deck size and shuffle: the line replays move for move
  }
}

// ---------------- orchestrator ----------------
const base = parseYdk(fs.readFileSync(deckPath, 'utf8')); const inMain = new Set(base.main.map(c => name(c))), inEd = new Set(base.extra.map(c => name(c)));
const spawnP = (args, onLine) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', ...args], { stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, HTW: '0' } }); /* board-only scores (deepw now counts hand traps kept in hand by default; the screen compares boards with setHT(0)) */ let o = '';
  p.stdout.on('data', b => { o += b; if (onLine) for (const l of String(b).split('\n')) if (l.trim()) onLine(l.trim()); }); p.on('close', () => ok(o)); });
// 0) lines
if (!fs.existsSync(LINES) || a.includes('--relines')) {
  const T = JSON.parse(fs.readFileSync('data/guide_tests.json', 'utf8')); const { fullName } = await import('./src/guideboard.mjs');
  const ids = ['m3', 'tre3', 'cit3', 'e3', 'inf3', 'sw3', 'n2', 'bc3', 'ter3', 'purif3', 'mst'];
  const inListN = new Set(base.main.map(c => name(c)));
  const hands = ids.map(id => T.find(t => t.id === id)).filter(Boolean).map(t => ({ id: t.id, hand: t.hand.map(fullName) })).filter(h => h.hand.every(n => inListN.has(n) || isHT(codeOfN(n)))); // only hands made of this list's own cards
  hands.push({ id: 'blank', hand: ['Ash Blossom & Joyous Spring', 'Ash Blossom & Joyous Spring', 'Droll & Lock Bird', 'Ghost Ogre & Snow Rabbit', 'Ash Blossom & Joyous Spring'] });
  log(`stage 0/3: recording your list's best lines for ${hands.length} starting hands (${LMIN} min each)`); fs.mkdirSync('results', { recursive: true }); let k = 0, done = 0;
  await Promise.all(Array.from({ length: PAR }, async () => { while (k < hands.length) { const h = hands[k++]; await spawnP(['deepw.mjs', JSON.stringify({ deck: deckPath, hand: h.hand, minutes: LMIN, rawOut: `results/line-${LIST}-${h.id}.json` })]); console.log(`${++done}/${hands.length}`); } }));
  const lines = hands.map(h => { try { return { id: h.id, ...JSON.parse(fs.readFileSync(`results/line-${LIST}-${h.id}.json`, 'utf8')) }; } catch { return null; } }).filter(Boolean);
  fs.writeFileSync(LINES, JSON.stringify(lines)); log(`lines recorded: ${lines.map(l => l.id + ' ' + l.v.toFixed(2)).join(', ')}`);
}
const lines = JSON.parse(fs.readFileSync(LINES, 'utf8'));
// self-check before spending hours: every recorded line must replay to the end and reproduce its own score, or the screen stops here
{ const { mkGame, replay } = await import('./src/replay.mjs'); const { disruption, setHT } = await import('./src/disrupt.mjs'); setHT(0); const bad = [];
  for (const ln of lines) { try { const r = await replay(mkGame({ extra: ln.extra, order: ln.order, seed: ln.seed }), ln.raw, null); const v = disruption(r.S, 0); if (!r.ok || Math.abs(v - ln.v) > 0.01) bad.push(`${ln.id} (replayed ${r.i} moves, score ${v.toFixed(2)} vs ${ln.v.toFixed(2)})`); } catch (e) { bad.push(ln.id + ' ' + e.message); } }
  const { name: nm } = await import('./src/cards.mjs'); const { codeOf } = await import('./src/replay.mjs');
  for (const ln of lines) { let slot = -1; for (let q = 4; q >= 0; q--) if (!ln.used[q]) { slot = q; break; }
    const tries = []; if (slot >= 0) { const o = ln.order.slice(); o[slot] = codeOf('Waboku'); tries.push(['Waboku in hand', ln.extra, o]); }
    { const e = ln.extra.slice(); const all = (ln.raw || []).map(r => r.label || '').join(' | '); if (e.length < 15) { e.push(codeOf('Knightmare Cerberus')); tries.push(['Extra Deck add', e, ln.order]); }
      else { const k = e.findIndex(c => !all.includes(nm(c))); if (k >= 0) { e[k] = codeOf('Knightmare Cerberus'); tries.push(['Extra Deck swap', e, ln.order]); } } }
    for (const [what, ex, o] of tries) { try { const r = await replay(mkGame({ extra: ex, order: o, seed: ln.seed }), ln.raw, null); const v = disruption(r.S, 0); if (!r.ok || v < ln.v - 0.01) bad.push(`${ln.id} with ${what} (replayed ${r.i} moves, ${v.toFixed(2)} vs ${ln.v.toFixed(2)})`); } catch (e) { bad.push(ln.id + ' ' + what + ' ' + e.message); } } }
  if (bad.length) { log('SELF-CHECK FAILED: ' + bad.join('; ')); process.exit(3); }
  log(`self-check passed: all ${lines.length} lines replay exactly, also with a do-nothing card in the hand and with an Extra Deck card swapped`); }
// least-used Extra Deck card across the lines (an Extra Deck candidate takes its place)
function leastEdOf() { const u = {}; for (const e of inEd) u[e] = 0; for (const l of lines) for (const r of l.raw) for (const e of inEd) if ((r.label || '').includes(e)) u[e]++; return Object.entries(u).sort((p, q) => p[1] - q[1])[0][0]; }
const edUse = {}; for (const e of inEd) edUse[e] = 0; for (const l of lines) for (const r of l.raw) for (const e of inEd) if ((r.label || '').includes(e)) edUse[e]++;
const leastEd = Object.entries(edUse).sort((p, q) => p[1] - q[1])[0][0]; const EDORDER = Object.entries(edUse).sort((p, q) => p[1] - q[1]).map(x => x[0]);
// the pool
const LIM = banlist(); const pool = [];
for (const [code, t] of text) { const d = data.get(code); if (!d || d.alias || (d.type & 0x4000) || !(d.ot & 2)) continue; if (LIM && LIM.get(code) === 0) continue;
  const zone = (d.type & ED) ? 'ed' : 'main'; if (zone === 'main' && (inMain.has(t.name) || isHT(code))) continue; if (zone === 'ed' && inEd.has(t.name)) continue; if (d.type & 0x4000000 && !(d.type & 1)) continue;
  pool.push({ name: t.name, code, zone }); }
const LIMIT = +f('limit', 0); if (LIMIT) pool.splice(LIMIT);
log(`whole pool: ${pool.filter(p => p.zone === 'main').length} Main Deck + ${pool.filter(p => p.zone === 'ed').length} Extra Deck cards; ${lines.length} recorded lines; Extra Deck candidates replace ${leastEd}`);
const hintsW = await (async () => { try { const { loadHints } = await import('./src/hints.mjs'); return loadHints(`data/hints-${LIST}.json`) || {}; } catch { return {}; } })();
// chunks run here AND on helper PCs (Nov 23: the scan used only this PC's cores). Small chunks (a few minutes each) go to a shared queue;
// local workers and one remote worker per free helper core take them; a chunk no helper finishes comes back and runs here.
const { runRemote, helperSlots } = await import('./src/remote.mjs');
async function runStage(stage, items, extra = {}) { const tb = extra.tb || TB; const size = stage === 'A' ? 250 : stage === 'P' ? 150 : Math.max(2, Math.floor(240 / (tb * (stage === 'C' ? 2 : 3))));
  const chunks = []; for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size)); let done = 0; const total = items.length; let q = 0, ci = 0; const outs = [];
  fs.mkdirSync('data/ps-tmp', { recursive: true }); const NOH = a.includes('--nohelpers'); let HS = NOH ? 0 : await helperSlots(), hsAt = Date.now(); if (HS) log(`  ${stage}: ${chunks.length} chunks, helper PCs add ${HS} cores (${PAR} here)`);
  const mk = (ch) => { const k = ci++; const inF = `data/ps-tmp/ps-${ID}-${stage}-${k}.in.json`, outF = inF.replace('.in.', '.out.'); fs.writeFileSync(inF, JSON.stringify({ stage, items: ch, lines, leastEd, edOrder: EDORDER, hints: hintsW, ...extra })); return { inF, outF, n: ch.length }; };
  const local = async (c) => { await spawnP(['poolscan.mjs', '--worker', '--in', c.inF, '--out', c.outF], (l) => { if (/^\d+\/\d+$/.test(l)) { done++; if (done % 25 === 0 || done === total) console.log(`${done}/${total}`); } }); };
  const remote = async (c) => { const r = await runRemote('poolscan.mjs', { in: c.inF, out: c.outF }, { files: [c.inF], outputs: [c.outF], timeoutMs: 28 * 60000 }); if (!r || !fs.existsSync(c.outF)) return false; done += c.n; console.log(`${done}/${total}`); return true; };
  const finish = (c) => { try { outs.push(...JSON.parse(fs.readFileSync(c.outF, 'utf8'))); } catch {} try { fs.unlinkSync(c.inF); fs.unlinkSync(c.outF); } catch {} };
  const helperOk = async (w) => { if (NOH) return false; if (Date.now() - hsAt > 120000) { hsAt = Date.now(); HS = await helperSlots(); } return w < HS; };
  await Promise.all([...Array.from({ length: PAR }, async () => { while (q < chunks.length) { const c = mk(chunks[q++]); await local(c); finish(c); } }),
    ...Array.from({ length: 48 }, async (_, w) => { while (q < chunks.length) { if (!(await helperOk(w))) { await new Promise(r => setTimeout(r, 30000)); continue; } if (q >= chunks.length) break; /* another worker may have taken the last chunk while this one waited */ const c = mk(chunks[q++]); if (!(await remote(c))) await local(c); finish(c); } })]);
  return outs; }
// A
log(`stage 1/3: does each card get a real action anywhere in your lines? (${pool.length} cards)`);
const A = await runStage('A', pool); const live = A.filter(x => x.hits.length);
// self-check: if no Extra Deck card or no mid-line use turns up, the replay is broken; stop instead of value-testing junk
{ const ed = live.filter(x => x.zone === 'ed').length, mid = live.filter(x => x.hits.some(h => h.i > 0)).length;
  if (pool.length > 500 && (!ed || !mid)) { log(`SELF-CHECK FAILED after stage 1: ${ed} Extra Deck cards usable, ${mid} cards usable after the first move. Replay is not reaching mid-combo.`); process.exit(4); } }
log(`stage 1 done: ${live.length} of ${pool.length} cards can do something in your lines (${live.filter(x => x.zone === 'main').length} Main, ${live.filter(x => x.zone === 'ed').length} Extra)`);
// B: quick value test from the first usable point of the best line where it works; then a longer test for the best
const byV = (h) => h.slice().sort((p, q) => lines[q.li].v - lines[p.li].v);
log(`stage 2/3: quick value test (${TB}s from the last point in your best line where each card is usable)`);
const ctrlFor = async (items, tb) => { const pts = new Map(); for (const x of items) for (const h of x.hits) { const k = (x.zone === 'ed' ? 'e' : 'm') + h.li + ':' + h.i; if (!pts.has(k)) pts.set(k, { li: h.li, i: h.i, ed: x.zone === 'ed', name: k }); }
  log(`  controls: ${pts.size} points in your lines, searched without the card (and with a do-nothing card) for the same ${tb}s`); const C = await runStage('C', [...pts.values()], { tb }); const m = {}; for (const c of C) m[c.key] = c.v; return m; };
const lastOf = (h) => ({ ...h, i: h.last ?? h.i, label: h.lastLabel || h.label });
const B1items = live.map(x => ({ ...x, hits: byV(x.hits).slice(0, 1).map(lastOf) }));
const PKGONLY = a.includes('--pkgonly'); if (PKGONLY) log('packages only: single-card value tests skipped');
const B1 = PKGONLY ? [] : await runStage('B', B1items, { tb: TB, ctrl: await ctrlFor(B1items, TB) });
// how a card earned its gain: 'engine' (its effects do work in the line), 'body' (it only Special Summons itself and is used as material: any free monster
// would do the same), 'draw' (draws: the test deck order is fixed, so a draw is luck here), 'standalone' (it is only Set as its own interruption)
const kindOf = (x) => { if (!x.best) return 'standalone'; const ls = x.best.line.filter(l => l.includes(x.name)); if (!ls.length) return 'standalone';
  if (/\bdraw\b/i.test(desc(x.code))) return 'draw';
  const selfSS = (l) => l.startsWith('Special Summon (procedure) ' + x.name) || (l.startsWith('Activate ' + x.name) && /Special Summon (this card|it)\b[^,;.]*$|: Special Summon this card from your hand$|: Special Summon$/.test(l)) || /^Selected /.test(l);
  return ls.every(selfSS) ? 'body' : 'engine'; };
const B1s = B1.filter(x => x.gain !== null).sort((p, q) => q.gain - p.gain);
const top = [...B1s.filter(x => kindOf(x) === 'engine').slice(0, TOP2), ...B1s.filter(x => kindOf(x) === 'body').slice(0, 10), ...B1s.filter(x => kindOf(x) === 'draw').slice(0, 5), ...B1s.filter(x => kindOf(x) === 'standalone').slice(0, 10)];
log(`stage 2 done: ${B1s.filter(x => x.gain > 0.25).length} cards beat your line by more than 0.25 (${B1s.filter(x => x.gain > 0.25 && kindOf(x) === 'engine').length} as engine/combo pieces)`);
log(`stage 3/3: longer value test for the top ${top.length} (${TB2}s, first and last usable point in two lines each)`);
const B2items = top.map(x => ({ ...x, hits: byV(live.find(l => l.name === x.name).hits).slice(0, 2).flatMap(h => h.last !== undefined && h.last !== h.i ? [h, lastOf(h)] : [h]) }));
const B2 = PKGONLY ? [] : await runStage('B', B2items, { tb: TB2, ctrl: await ctrlFor(B2items, TB2) });
// ---- stage 4 (Belal, Nov 23): robustness. One fixed deck order and the single best point overrate cards (a free body, a lucky dig, a cost that
// happened not to hit anything). Each top card is re-tested on fresh lines recorded from K different deck orders of every hand where it was usable,
// and scored by its AVERAGE gain over those games; it must help in at least 2 different starting hands to rank as robust.
const K = +f('orders', 8); let ROB = null;
if (!a.includes('--norobust') && !PKGONLY && B2.length) {
  const cand = B2.filter(x => x.gain !== null && x.gain > 0.3 && kindOf(x) !== 'standalone').sort((p, q) => q.gain - p.gain).slice(0, +f('robtop', 40)); // Set-only cards are scored from text, not lines: the review handles them
  const handIds = [...new Set(cand.flatMap(x => (live.find(l => l.name === x.name) || { hits: [] }).hits.map(h => lines[h.li].id)))];
  const rng = (sd) => () => { sd = (sd * 1103515245 + 12345) % 2147483648; return sd / 2147483648; };
  const vjobs = []; for (const id of handIds) { const ln = lines.find(l => l.id === id); if (!ln) continue; const hand = ln.order.slice(0, 5); const rest = ln.order.slice(5);
    for (let k = 1; k < K; k++) { const r = rng(1000 + k * 7919 + id.length * 31); const o = rest.slice(); for (let q = o.length - 1; q > 0; q--) { const j = Math.floor(r() * (q + 1)); [o[q], o[j]] = [o[j], o[q]]; }
      vjobs.push({ id, k, hand: hand.map(c => name(c)), main: [...hand, ...o], out: `data/ps-tmp/line-${LIST}-${id}-o${k}.json` }); } } fs.mkdirSync('data/ps-tmp', { recursive: true });
  log(`stage 4/4: robustness — ${cand.length} cards that gained > 0.3; recording ${vjobs.length} more lines (${handIds.length} hands x ${K - 1} other deck orders, ${Math.max(1, LMIN - 1)} min each)`);
  // recorded here only: these lines need board-only scores (HTW=0, set by spawnP), which a helper PC's deepw does not get
  let kk = 0, dn = 0; await Promise.all(Array.from({ length: PAR }, async () => { while (kk < vjobs.length) { const v = vjobs[kk++]; await spawnP(['deepw.mjs', JSON.stringify({ deck: deckPath, hand: v.hand, main: v.main, minutes: Math.max(1, LMIN - 1), rawOut: v.out })]); if (++dn % 10 === 0 || dn === vjobs.length) console.log(`${dn}/${vjobs.length}`); } }));
  const vlines = vjobs.map(v => { try { return { id: v.id + '-o' + v.k, base: v.id, ...JSON.parse(fs.readFileSync(v.out, 'utf8')) }; } catch { return null; } }).filter(x => x && x.raw && x.raw.length);
  const all = [...lines.map(l => ({ ...l, base: l.id })), ...vlines]; log(`  ${vlines.length} extra lines recorded; finding where each card is usable in them`);
  // usable points in every line (original + new), then the value test at the last usable point of each line, same search time for card and control
  const RA = await runStage('A', cand.map(x => ({ name: x.name, code: x.code, zone: x.zone })), { lines: all });
  const RBitems = RA.filter(x => x.hits.length).map(x => ({ ...x, hits: x.hits.map(lastOf) }));
  const RB = [];
  for (const x of RBitems) for (const h of x.hits) RB.push({ ...x, hits: [h] }); // one test per (card, line): average, not best-of
  const TB3 = +f('tb3', 20); const R = await runStage('B', RB, { tb: TB3, lines: all, ctrl: await (async () => { const pts = new Map(); for (const x of RB) for (const h of x.hits) { const k2 = (x.zone === 'ed' ? 'e' : 'm') + h.li + ':' + h.i; if (!pts.has(k2)) pts.set(k2, { li: h.li, i: h.i, ed: x.zone === 'ed', name: k2 }); } const C = await runStage('C', [...pts.values()], { tb: TB3, lines: all }); const m = {}; for (const c of C) m[c.key] = c.v; return m; })() });
  ROB = new Map(); for (const r of R) { if (r.gain === null) continue; const e = ROB.get(r.name) || { g: [], byHand: {} }; e.g.push(r.gain); const hb = all[r.best.li].base; (e.byHand[hb] ||= []).push(r.gain); ROB.set(r.name, e); }
  // cards with no usable point in a new deck order count 0 there (they needed that exact order)
  for (const x of cand) { const e = ROB.get(x.name) || { g: [], byHand: {} }; const n = e.g.length;
    const bases = new Set((live.find(l => l.name === x.name) || { hits: [] }).hits.map(h => lines[h.li].id)); const tries = Math.max(n, all.filter(l => bases.has(l.base)).length); // unusable in a deck order = 0 there
    const mean = tries ? e.g.reduce((p, q) => p + q, 0) / tries : 0;
    const per = {}; for (const b of bases) per[b] = K; const hands = Object.entries(e.byHand).filter(([h, arr]) => arr.reduce((p, q) => p + q, 0) / (per[h] || arr.length) >= 0.3).map(([h]) => h);
    ROB.set(x.name, { mean: +mean.toFixed(2), n, hands, robust: hands.length >= 2 && mean >= 0.3 }); }
  log(`stage 4 done: ${[...ROB.values()].filter(v => v.robust).length} of ${cand.length} cards still help on average across deck orders in 2+ hands`);
}
// ---- packages: what each usable card needs / is needed by (from the engine's card scripts), grown 2 steps, tested together ----
const NOPKG = a.includes('--nopkg'); let pkRanked = [];
if (!NOPKG) {
  const poolCodes = pool.map(x => x.code); const inList = [...inMain, ...inEd]; const edOrder = Object.entries(edUse).sort((p, q) => p[1] - q[1]).map(x => x[0]);
  log(`packages 1/3: growing a package around each of the ${live.length} usable cards from what their scripts need`);
  const G = await runStage('P', live.map(x => ({ code: x.code, zone: x.zone, name: x.name })), { pool: poolCodes, inList });
  const ARCHONLY = a.includes('--archonly'); const seen = new Map(); for (const g of G.flat()) { const n = g.main.length + g.ed.length; if (n < 2) continue; if (ARCHONLY && g.kind !== 'archetype') continue; const key = (g.kind === 'archetype' && !ARCHONLY ? name(g.main[0] || g.ed[0]) + ' in hand: ' : '') + [...g.main, ...g.ed].map(c => name(c)).sort().join(' + '); /* whole-archetype packages: one test per starting card */ if (!seen.has(key)) seen.set(key, { name: key, code: g.seed, zone: 'pkg', pkind: g.kind, pkg: { main: g.main, ed: g.ed }, why: g.why }); }
  let pk = [...seen.values()];
  // connectivity (from the scripts): how many members' filters are met by other members of the same package; the most self-sufficient engines first
  { const NE = await import('./src/needs.mjs'); const { needs } = NE.needsDB();
    for (const x of pk) { const mem = [...x.pkg.main, ...x.pkg.ed]; let links = 0; const linked = new Set();
      for (const c of mem) for (const n of needs[c] || []) { if (n.via === 'listed') continue; for (const d of mem) if (d !== c && NE.matches(n, d)) { links++; linked.add(c); linked.add(d); break; } }
      x.conn = links * (linked.size / mem.length); }
    const NTOP = +f('archtop', 400); if (ARCHONLY && pk.length > NTOP) { pk.sort((p, q) => q.conn - p.conn); pk = pk.slice(0, NTOP); log(`packages: kept the ${NTOP} most self-connected whole-archetype packages`); } }
  log(`packages: ${pk.length} distinct packages of 2+ cards`);
  const PA = await runStage('A', pk, { edOrder }); const pkLive = PA.filter(x => x.hits.length); log(`packages 2/3: ${pkLive.length} packages get a real action in your lines; value test (${TB * 2}s from the first usable point)`);
  const firstOf = (x) => ({ ...x, hits: byV(x.hits).slice(0, 1) });
  // whole-archetype packages get a long search (engines only pay off over a full line); small packages a quick one
  const TA = +f('tpa', 45), arch = pkLive.filter(x => x.pkind === 'archetype').map(firstOf), comp = pkLive.filter(x => x.pkind !== 'archetype').map(firstOf);
  log(`packages: ${arch.length} whole-archetype packages (${TA}s each) + ${comp.length} small packages (${TB * 2}s each)`);
  const P1a = await runStage('B', arch, { tb: TA, edOrder, ctrl: await ctrlFor(arch, TA) });
  const P1b = await runStage('B', comp, { tb: TB * 2, edOrder, ctrl: await ctrlFor(comp, TB * 2) }); const P1 = [...P1a, ...P1b];
  const ptop = [...P1a.filter(x => x.gain !== null).sort((p, q) => q.gain - p.gain).slice(0, 25), ...P1b.filter(x => x.gain !== null).sort((p, q) => q.gain - p.gain).slice(0, 15)];
  log(`packages 3/3: longer test for the top ${ptop.length} packages (90s from the first usable point, two lines each)`);
  const P2items = ptop.map(x => ({ ...x, hits: byV(pkLive.find(l => l.name === x.name).hits).slice(0, 2) }));
  const P2 = await runStage('B', P2items, { tb: 90, edOrder, ctrl: await ctrlFor(P2items, 90) });
  pkRanked = P2.filter(x => x.gain !== null).map(x => ({ ...x, members: { main: x.pkg.main.map(c => name(c)), ed: x.pkg.ed.map(c => name(c)) }, kind: x.best && x.best.line.some(l => [...x.pkg.main, ...x.pkg.ed].some(c => l.includes(name(c)))) ? 'engine' : 'standalone' })).sort((p, q) => q.gain - p.gain);
}
// engine use = the card is activated/summoned/selected in the improved line; standalone = it only adds itself as a Set card (its own text-based credit)
const ranked = B2.filter(x => x.gain !== null).map(x => { const r = ROB && ROB.get(x.name); return { ...x, kind: kindOf(x), gain1: x.gain, gain: r ? r.mean : (ROB ? Math.min(x.gain, 0) : x.gain), robust: r ? r.robust : !ROB, hands: r ? r.hands : [], tests: r ? r.n : 0 }; }).sort((p, q) => (q.robust - p.robust) || (q.gain - p.gain));
fs.writeFileSync(OUT, JSON.stringify({ at: new Date().toISOString(), list: deckPath, leastEd, lines: lines.map(l => ({ id: l.id, v: l.v })), screened: pool.length, live: live.length, ranked: ranked.map(x => ({ name: x.name, zone: x.zone, kind: x.kind, gain: x.gain, gain1: x.gain1, robust: x.robust, hands: x.hands, tests: x.tests, best: x.best })), packages: pkRanked.map(x => ({ name: x.name, members: x.members, kind: x.kind, gain: x.gain, best: x.best })) }));
let md = `# Whole-pool screen ${ID}: ${LIST}\n${new Date().toISOString()}\n\n- Cards screened: **${pool.length}** (every TCG-legal card not banned, not a generic hand trap, not already in the list)\n- Get a real action somewhere in your lines: **${live.length}**\n- Your lines (end board score): ${lines.map(l => `${l.id} ${l.v.toFixed(2)}`).join(', ')}\n- Extra Deck candidates replace your least-used Extra Deck card: ${leastEd}\n\n## Engine cards: used in the improved line (activated, summoned or picked), by gain\n| # | card | zone | gain | line: without → with the card | first usable as |\n|---|---|---|---|---|---|\n`;
ranked.filter(x => x.kind === 'engine').slice(0, 50).forEach((x, i) => { md += `| ${i + 1} | ${x.name} | ${x.zone === 'ed' ? 'Extra' : 'Main'} | ${x.gain >= 0 ? '+' : ''}${x.gain.toFixed(2)} | ${x.best ? lines[x.best.li].id + ' (' + x.best.base.toFixed(2) + ' → ' + x.best.v.toFixed(2) + ')' : ''} | ${x.best ? x.best.at.slice(0, 90) : ''} |\n`; });
md += `\n## Free bodies: only Special Summon themselves and become material (any free monster does this; shown so you can see them)\n| # | card | gain |\n|---|---|---|\n`; ranked.filter(x => x.kind === 'body').slice(0, 10).forEach((x, i) => { md += `| ${i + 1} | ${x.name} | ${x.gain >= 0 ? '+' : ''}${x.gain.toFixed(2)} |\n`; });
md += `\n## Draw cards (the test deck order is fixed, so their draws are luck here; judged properly by Find a better list)\n| # | card | gain |\n|---|---|---|\n`; ranked.filter(x => x.kind === 'draw').slice(0, 5).forEach((x, i) => { md += `| ${i + 1} | ${x.name} | ${x.gain >= 0 ? '+' : ''}${x.gain.toFixed(2)} |\n`; });
md += `\n## Standalone cards: only Set as their own interruption (scored from card text, so treat as rough)\n| # | card | gain |\n|---|---|---|\n`; ranked.filter(x => x.kind === 'standalone').slice(0, 15).forEach((x, i) => { md += `| ${i + 1} | ${x.name} | ${x.gain >= 0 ? '+' : ''}${x.gain.toFixed(2)} |\n`; });
md += `\n## Packages (cards that need each other, from the engine's scripts), by gain\n| # | Main Deck | Extra Deck | gain | line: without → with |\n|---|---|---|---|---|\n`; pkRanked.slice(0, 25).forEach((x, i) => { md += `| ${i + 1} | ${x.members.main.join(', ')} | ${x.members.ed.join(', ')} | ${x.gain >= 0 ? '+' : ''}${x.gain.toFixed(2)} | ${x.best ? lines[x.best.li].id + ' (' + x.best.base.toFixed(2) + ' → ' + x.best.v.toFixed(2) + ')' : ''} |\n`; });
md += `\n## Best lines for the top 10 engine cards\n`; for (const x of ranked.filter(x => x.kind === 'engine').slice(0, 10)) md += `\n**${x.name}** (${x.gain >= 0 ? '+' : ''}${x.gain.toFixed(2)}, ${lines[x.best.li].id}): ${x.best.line.join(' > ')}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/poolscan-${ID}.md`, md); log(`done -> reports/poolscan-${ID}.md`);
// automatic drawback screen right after every scan (Belal: the lab filters on its own; Claude reviews the survivors before any deck test)
try { const { execFileSync } = await import('child_process'); log(execFileSync(process.execPath, ['--no-warnings', 'poolreview.mjs', '--deck', deckPath]).toString().trim()); } catch (e) { log('pool review failed: ' + e.message); }
