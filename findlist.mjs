// Find a better list — runs every stage by itself, no input needed.
//  1. Noise: your list plays the same hands twice with different search luck -> the error bar every change must beat.
//  2. Candidates: -1 of every card in the list, +1 of every card under its limit, the best-connected new Main Deck cards,
//     and the best-connected Extra Deck cards (each replaces the Extra Deck card your list uses least, measured from the games).
//  3. Rounds: every change on a few hands, the best ones on more hands, the best of those on more again (same hands for every version).
//  4. New list: your list + the changes that clearly beat it (and the same with matching cuts), checked on fresh hands.
//  Every game: same shuffle for every version (an added card is shuffled in, a cut copy taken out), line finder from scratch, no guide lines.
//  Hands rotate through opponent hand traps: none / Ash / Imperm / Droll (fired at the first legal moment).
// node findlist.mjs --deck D [--min 2] [--h1 12] [--h2 24] [--h3 36] [--hv 60] [--adds 40] [--eds 10] [--keep2 20] [--keep3 6] [--mini] [--id X]
import fs from 'fs'; import os from 'os'; import path from 'path'; import { runRemote, helperSlots } from './src/remote.mjs'; import { spawn } from 'child_process';
import { parseYdk, findCard, name, banlist, cardDB } from './src/cards.mjs'; import { synergyScores } from './src/synergy.mjs';
const a = process.argv.slice(2); const f0 = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
// --versions may also be an object { versions: [...], h1, h2, h3, hv, ... }: the extra keys act as command-line options
const VOBJ = (() => { try { const v = JSON.parse(f0('versions', 'null')); return v && !Array.isArray(v) ? v : null; } catch { return null; } })();
const f = (k, d) => k === 'versions' ? (VOBJ ? JSON.stringify(VOBJ.versions) : f0(k, d)) : VOBJ && VOBJ[k] !== undefined ? String(VOBJ[k]) : f0(k, d); const MINI = a.includes('--mini');
const ID = f('id', String(Date.now() % 100000)), MIN = +f('min', 2);
const H1 = +f('h1', MINI ? 11 : 12), H2 = +f('h2', MINI ? 0 : 24), H3 = +f('h3', MINI ? 0 : 36), HV = +f('hv', MINI ? 11 : 60);
const NADD = +f('adds', MINI ? 2 : 40), NED = +f('eds', MINI ? 1 : 10), KEEP2 = +f('keep2', 20), KEEP3 = +f('keep3', 6);
const SCNS = String(f('scn', 'none,ash,imperm,droll')).split(','); const scnOf = (hi) => SCNS[hi % SCNS.length];
const PAR = Math.min(Math.max(1, os.cpus().length - 1), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const deckPath = f('deck', 'decks/L2-vand3.ydk'); const base = parseYdk(fs.readFileSync(deckPath, 'utf8'));
const log = (s) => { console.log(s); try { fs.appendFileSync(`reports/findlist-${ID}.log`, new Date().toISOString().slice(11, 19) + ' ' + s + '\n'); } catch {} };
fs.mkdirSync('reports', { recursive: true }); fs.mkdirSync('decks/_explore', { recursive: true }); fs.mkdirSync('data', { recursive: true });
const t0 = Date.now(); const mins = () => ((Date.now() - t0) / 60000).toFixed(0) + ' min';
const code = (n) => { const c = findCard(n); const k = Array.isArray(c) ? c[0] : c; return k && name(k) === n ? k : null; };
const count = {}; for (const k of base.main) count[name(k)] = (count[name(k)] || 0) + 1;
const LIM = banlist(); const limitOf = (k) => (LIM && LIM.has(k) ? LIM.get(k) : 3);
// hand traps kept in hand score 0 in a board comparison, so cutting one would always look free: they are not cut or added here
const isHandTrap = (n) => { const k = code(n); const t = (cardDB().text.get(k) || {}).desc || ''; return (/\(Quick Effect\): You can (discard|send) this card/i.test(t) && /(negate|destroy|opponent's hand|activates)/i.test(t)) || /^Infinite Impermanence$/.test(n); };

// ---------- versions ----------
// a version = list of changes: { op: 'add'|'cut', card } on the Main Deck, { op: 'ed', card, out } on the Extra Deck
const label = (v) => v.length ? v.map(c => c.op === 'add' ? '+1 ' + c.card : c.op === 'cut' ? '-1 ' + c.card : 'Extra Deck: ' + c.card + (c.out ? ' for ' + c.out : ' (free slot)')).join(' & ') : 'your list';
const rngOf = (seed) => { let x = seed >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
// blank slot: every version (your list included) is played as a 47-card list whose spare slot holds a vanilla card (--pad, default Petit Moth).
// +1 X takes the blank's place, -1 Y is replaced by a blank, so deck size and card order never change between versions. Without this,
// 47-card versions all shuffled alike after a search and your 46-card list differently, so every +1 looked ~0.1-0.25 better by deck-order luck.
const PADN = a.includes('--nopad') ? null : f('pad', 'Petit Moth'); const PADC = PADN ? code(PADN) : null; if (PADN && !PADC) { console.error('pad card not found: ' + PADN); process.exit(1); }
const deal = (v, hi) => { const r = rngOf(1000 + hi * 7919); const perm = base.main.slice(); if (PADC) perm.push(PADC); for (let k = perm.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [perm[k], perm[j]] = [perm[j], perm[k]]; }
  for (const c of v) { const r2 = rngOf(5000 + hi * 104729 + c.card.length * 31 + (c.op === 'cut' ? 7 : 0));
    if (c.op === 'add') { const pi = PADC ? perm.indexOf(PADC) : -1; if (pi >= 0) perm[pi] = code(c.card); else perm.splice(Math.floor(r2() * (perm.length + 1)), 0, code(c.card)); }
    else if (c.op === 'cut') { const at = perm.map((k, i) => name(k) === c.card ? i : -1).filter(i => i >= 0); if (at.length) { const i = at[Math.floor(r2() * at.length)]; if (PADC) perm[i] = PADC; else perm.splice(i, 1); } } }
  return perm; };
const deckFiles = new Map(); const deckFileFor = (v) => { const ed = v.filter(c => c.op === 'ed'); const key = ed.map(c => c.card + '>' + c.out).join('|') || 'base'; if (deckFiles.has(key)) return deckFiles.get(key);
  const extra = base.extra.slice(); for (const c of ed) { if (!c.out) { if (extra.length < 15) extra.push(code(c.card)); continue; } const i = extra.findIndex(k => name(k) === c.out); if (i >= 0) extra[i] = code(c.card); }
  const p = `decks/_explore/fl-${ID}-${deckFiles.size}.ydk`; fs.writeFileSync(p, '#main\n' + base.main.join('\n') + '\n#extra\n' + extra.join('\n') + '\n!side\n'); deckFiles.set(key, p); return p; };
const toYdk = (v) => { const main = base.main.slice(); for (const c of v) { if (c.op === 'add') main.push(code(c.card)); else if (c.op === 'cut') { const i = main.findIndex(k => name(k) === c.card); if (i >= 0) main.splice(i, 1); } }
  const extra = base.extra.slice(); for (const c of v.filter(c => c.op === 'ed')) { if (!c.out) { if (extra.length < 15) extra.push(code(c.card)); continue; } const i = extra.findIndex(k => name(k) === c.out); if (i >= 0) extra[i] = code(c.card); }
  return '#main\n' + main.join('\n') + '\n#extra\n' + extra.join('\n') + '\n!side\n'; };

// ---------- games ----------
const R = {}; // key -> { hi -> result }
// line sharing (share.mjs): after each stage, the best lines found on a hand are replayed in every other version's game of that hand;
// a version keeps the better of its own result and any line that is legal in its deck. Removes most search luck from the comparison.
const SHARE = !a.includes('--noshare'); const T2 = f('t2', '') ? f('t2', '').split(',') : []; const rawDir = `data/flraw/${ID}`; if (SHARE) fs.mkdirSync(rawDir, { recursive: true }); const hkey = (k) => { let x = 2166136261; for (const ch of k) x = Math.imul(x ^ ch.charCodeAt(0), 16777619) >>> 0; return x.toString(36); };
const rawPath = (key, hi) => `${rawDir}/${hi}-${hkey(key)}.json`;
// fixed work budget (--fixed): playouts per minute, measured on this machine from the first games, then every game gets the same amount of search
let PPM = +f('ppm', 0);
const store = `data/findlist-${ID}.json`;
// --resume: continue a stopped run with the same id: games already played are kept and skipped, and the run's frozen knowledge is reused so every round plays with the same hints
const RESUME = a.includes('--resume') && fs.existsSync(store); if (RESUME) Object.assign(R, JSON.parse(fs.readFileSync(store, 'utf8')));
const HINTS = 'data/hints-' + path.basename(deckPath).replace(/\.ydk$/, '') + '.json';
const FROZEN = `data/hints-frozen-${ID}.json`; // this run's snapshot of what has been learned so far: every version plays with the same knowledge
const CARDV = 'data/cardv-' + path.basename(deckPath).replace(/\.ydk$/, '') + '.json';
// one script run, here or on a helper PC (remote = true: sent through the hub; if no helper returns it in time it runs here)
const runNode = async (script, args, remote, files, outputs) => { if (remote) { const r = await runRemote(script, args, { files, outputs }); if (r) { REMOTE_DONE++; return r.stdout; } }
  return new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', script, JSON.stringify(args)], { stdio: ['ignore', 'pipe', 'ignore'] }); let out = ''; p.stdout.on('data', b => out += b); p.on('close', () => ok(out)); }); };
let REMOTE_DONE = 0;
const play = async (v, hi, sseed = 1, key = '', remote = false) => { const perm = deal(v, hi); const t = { deck: deckFileFor(v), main: perm, hand: perm.slice(0, 5).map(c => name(c)), minutes: MIN, seed: 7 + hi, sseed, scn: scnOf(hi), hintsFile: a.includes('--nohints') ? HINTS : FROZEN, learnLog: HINTS, hints: !a.includes('--nohints'), cardvFile: CARDV, rawOut: SHARE ? rawPath(key, hi) : undefined, ppm: PPM || undefined, smart: a.includes('--smart') || undefined };
  let m = null; for (let tries = 0; tries < 2 && !m; tries++) { const out = await runNode('deepw.mjs', t, remote && tries === 0, [t.deck, t.hintsFile, t.cardvFile], t.rawOut ? [t.rawOut] : []); m = /RESULT (.*)/.exec(out); }
  const r = m ? JSON.parse(m[1]) : { v: 0, crash: true }; const res = { v: r.v, crash: !!r.crash, line: r.line, board: r.board, hand: t.hand, scn: t.scn, ppm1: r.ppm1 };
  // --t2 o_ss,o_despia: also play the opponent's turn into this board (oppturn.mjs); t2 = what you still have minus what they end on
  if (T2.length && t.rawOut && fs.existsSync(t.rawOut)) { const opp = T2[hi % T2.length]; const q = { line: t.rawOut, opp: `decks/${opp}.ydk`, oppSeed: 1000 + hi, minutes: +f('t2min', 0.5), hands: +f('t2hands', 1), par: 2 };
    const o2 = await runNode('oppturn.mjs', q, remote, [t.rawOut, q.opp, `data/choke-${opp}.json`], []); const m2 = /OPPTURN (.*)/.exec(o2);
    if (m2) { const z = JSON.parse(m2[1]); res.t2 = z.margin ?? +(z.ourBoardLeft - z.theirBoard).toFixed(2); res.t2otk = z.otk || 0; res.t2opp = opp; } }
  return res; };
let liveRows = []; const writeLive = (stage, done, total) => { try { fs.writeFileSync('data/explore-live.json', JSON.stringify({ run: 'findlist ' + ID + ' · ' + stage, at: new Date().toISOString(), done, total, cardsDone: liveRows.length, cards: liveRows.length, control: null, rows: liveRows.slice(0, 40) })); } catch {} };
async function runGames(jobs, stage) { // jobs: [{ key, v, hi, sseed }], interleaved so every version gets the same machine conditions
  const had = jobs.length; jobs = jobs.filter(j => !(R[j.key] && R[j.key][j.hi])); if (had > jobs.length) log(`${stage}: ${had - jobs.length} games already played (resumed)`);
  let k = 0, done = 0; const total = jobs.length; log(`${stage}: ${total} games`);
  const HS = a.includes('--nohelpers') ? 0 : await helperSlots(); if (HS) log(`${stage}: helper PCs add ${HS} cores (${PAR} here)`);
  await Promise.all(Array.from({ length: PAR + HS }, async (_, w) => { while (k < total) { const j = jobs[k++]; const r = await play(j.v, j.hi, j.sseed, j.key, w >= PAR); (R[j.key] ||= {})[j.hi] = r; done++; console.log(`${done}/${total}`); if (done % 11 === 0) { writeLive(stage, done, total); try { fs.writeFileSync(store, JSON.stringify(R)); } catch {} } } }));
  if (REMOTE_DONE) log(`${stage}: ${REMOTE_DONE} games so far played on helper PCs`); fs.writeFileSync(store, JSON.stringify(R)); if (SHARE) await shareHands([...new Set(jobs.map(j => j.hi))], stage);
  if (T2.length) { const b = R.base || {}; const rows = Object.keys(R).filter(k => k !== 'base' && k !== 'base2').map(k => { const d = Object.keys(R[k]).filter(hi => b[hi] && R[k][hi].t2 != null && b[hi].t2 != null).map(hi => R[k][hi].t2 - b[hi].t2); if (d.length < 2) return null; const m = d.reduce((p, q) => p + q, 0) / d.length; const se = Math.sqrt(d.reduce((p, q) => p + (q - m) ** 2, 0) / (d.length - 1) / d.length); return `${k} ${m >= 0 ? '+' : ''}${m.toFixed(2)} ± ${se.toFixed(2)} (n ${d.length})`; }).filter(Boolean);
    if (rows.length) log(`${stage}: after the opponent's turn (${T2.join('/')}; what you keep minus what they build), vs your list: ` + rows.join(' | ')); } }
// line library (lines found on other machines / earlier runs, data/lib-<list>/): pulled at the start, matched per hand in shareHands
const LIB = []; if (SHARE && !a.includes('--nolib')) { try { await new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', 'libsync.mjs'], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = ''; p.stdout.on('data', b => o += b); p.on('close', () => { if (o.trim()) log(o.trim()); ok(); }); }); } catch {}
  const LD = `data/lib-${path.basename(deckPath, '.ydk')}`; if (fs.existsSync(LD)) for (const fn of fs.readdirSync(LD).filter(x => x.endsWith('.json'))) { try { const x = JSON.parse(fs.readFileSync(`${LD}/${fn}`, 'utf8')); LIB.push({ file: `${LD}/${fn}`, id: x.id, scn: x.scn, v: x.v, need: x.hand.filter((_, i) => x.used && x.used[i]) }); } catch {} }
  if (LIB.length) log(`line library: ${LIB.length} stored lines available to every test hand`); }
const libFor = (hand, scn, n = 4) => { const have = {}; for (const c of hand) have[c] = (have[c] || 0) + 1;
  return LIB.filter(e => (e.scn === scn || e.scn === 'robust') && e.need.length && (() => { const h = { ...have }; for (const c of e.need) { if (!h[c]) return false; h[c]--; } return true; })()).sort((p, q) => q.v - p.v).slice(0, n)
    .map(e => { try { const x = JSON.parse(fs.readFileSync(e.file, 'utf8')); return { key: 'lib:' + e.id, v: x.v, raw: x.raw, order: x.order, extra: x.extra, seed: x.seed, after: 0 }; } catch { return null; } }).filter(Boolean); };
async function shareHands(his, stage) { let k = 0, moved = 0, bad = 0, libHits = 0; const list = his.slice();
  await Promise.all(Array.from({ length: PAR }, async () => { while (k < list.length) { const hi = list[k++]; const games = [];
    for (const [key, byH] of Object.entries(R)) { const r = byH[hi]; if (!r) continue; const p = rawPath(key, hi); if (!fs.existsSync(p)) continue; try { const x = JSON.parse(fs.readFileSync(p, 'utf8')); games.push({ key, v: r.v0 ?? r.v, raw: x.raw, order: x.order, extra: x.extra, seed: x.seed, after: x.after || 0 }); } catch {} }
    if (games.length < 2) continue; const jf = `${rawDir}/share-${hi}.json`; fs.writeFileSync(jf, JSON.stringify({ scn: scnOf(hi), games, top: 4, lines: libFor((R.base && R.base[hi] && R.base[hi].hand) || games[0].order.slice(0, 5).map(name), scnOf(hi)) }));
    const out = await new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'share.mjs', jf], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = ''; p.stdout.on('data', b => o += b); p.on('close', () => ok(o)); });
    const m = /SHARE (.*)/.exec(out); if (!m) { bad++; continue; } const x = JSON.parse(m[1]); if (!x.ok) bad++; libHits += x.libUsed || 0;
    for (const [key, y] of Object.entries(x.res)) { const r = R[key][hi]; r.v0 ??= r.v; if (y.from && y.v > r.v0) { r.v = y.v; r.from = y.from; moved++; } else r.v = r.v0; } } }));
  fs.writeFileSync(store, JSON.stringify(R)); log(`${stage}: line sharing on ${list.length} hands -> ${moved} results improved by another version's legal line${libHits ? ` (${libHits} of them from the line library)` : ''}${bad ? `, ${bad} hands kept own results (replay check failed)` : ''}`); }
const stat = (key, baseKey = 'base', own = false) => { const b = R[baseKey] || {}, x = R[key] || {}; const V = (r) => own ? (r.v0 ?? r.v) : r.v; const d = Object.keys(x).filter(hi => b[hi]).map(hi => V(x[hi]) - V(b[hi]));
  const n = d.length, m = n ? d.reduce((s, y) => s + y, 0) / n : 0, sd = n > 1 ? Math.sqrt(d.reduce((s, y) => s + (y - m) ** 2, 0) / (n - 1)) : 0;
  const byS = {}; for (const hi of Object.keys(x).filter(hi => b[hi])) (byS[scnOf(+hi)] ||= []).push(x[hi].v - b[hi].v);
  return { n, m, se: n ? sd / Math.sqrt(n) : 0, sd, better: d.filter(y => y >= 1).length, worse: d.filter(y => y <= -1).length, byS: Object.fromEntries(Object.entries(byS).map(([s, arr]) => [s, arr.reduce((p, q) => p + q, 0) / arr.length])) }; };
const hands = (from, n) => Array.from({ length: n }, (_, i) => from + i);

// ================= run =================
log(`findlist ${ID}: list ${deckPath} (${base.main.length} Main / ${base.extra.length} Extra), ${MIN} min per game, ${PAR} games at a time${MINI ? ', MINI check' : ''}`);
// 0) hints: if this list has no learned hints yet, learn them first (random hands, moves of the best lines)
if (!fs.existsSync(HINTS) && !fs.existsSync(HINTS.replace(/\.json$/, '') + '.log.jsonl') && !a.includes('--nohints')) { log('stage 0/5: learning hints for this list (first time only)'); await new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', 'learn.mjs', '--deck', deckPath, '--hands', String(MINI ? 11 : 44), '--min', '1.5'], { stdio: ['ignore', 'pipe', 'ignore'] }); p.stdout.on('data', b => { for (const l of String(b).split('\n')) if (/^\d+\/\d+$/.test(l.trim())) console.log(l.trim()); else if (/learned from/.test(l)) log(l.trim()); }); p.on('close', ok); }); }
// 0b) card values: what each card (incl. the new cards to be tested) reaches alone with 4 blanks -> the line finder prefers searching strong cards.
// Learned once per run for every card it will see, so your list and every version use the same values.
{ const known = fs.existsSync(CARDV) ? Object.keys(JSON.parse(fs.readFileSync(CARDV, 'utf8')).v || {}) : []; const syn0 = synergyScores(base, LIM); const inL = new Set(base.main.map(k => name(k)));
  const newCards = syn0.filter(x => x.zone === 'main' && !inL.has(x.name) && limitOf(x.code) > 0 && !isHandTrap(x.name)).slice(0, NADD).map(x => x.name);
  const need = MINI ? [...inL, ...newCards].filter(n => !isHandTrap(n) && !known.includes(n)) : [...inL, ...newCards].filter(n => !isHandTrap(n)); // full runs refresh every value (averaged with what was learned before)
  if (need.length && a.includes('--cardv')) { log(`stage 0b/5: learning card values (${need.length} cards)`); await new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', 'cardvalue.mjs', '--deck', deckPath, '--min', MINI ? '0.75' : '1.5', '--passes', MINI ? '1' : '2', '--cards', newCards.join(';')], { stdio: ['ignore', 'pipe', 'ignore'] }); p.stdout.on('data', b => { for (const l of String(b).split('\n')) if (/^\d+\/\d+$/.test(l.trim())) console.log(l.trim()); else if (/saved|^\s+\d/.test(l)) log(l.trim()); }); p.on('close', ok); }); } }
if (RESUME && fs.existsSync(FROZEN)) log(`resuming run ${ID}: ${Object.values(R).reduce((n, x) => n + Object.keys(x).length, 0)} games already played, same frozen knowledge as before`); else { const { freezeHints, gamesLogged } = await import('./src/hints.mjs'); const nk = freezeHints(HINTS, FROZEN); log(`knowledge for this run: ${nk} learned moves from ${gamesLogged(HINTS)} logged games (+ earlier learning); this run's games are added for next time`); }
if (PADC) log(`blank slot: every version is played as a ${base.main.length + 1}-card list with ${PADN} in the spare slot (a +1 takes its place, a cut is replaced by it), so deck size and order match across versions`);
// 0c) fixed work budget: measure this machine's search speed on a few throwaway hands (clock-based), then every game gets that many playouts
if (a.includes('--fixed') && !PPM) { const cal = hands(900, PAR); const rs = await Promise.all(cal.map(hi => play([], hi, 1, ''))); const v = rs.map(r => r.ppm1).filter(Boolean).sort((p, q) => p - q);
  PPM = v.length ? v[Math.floor(v.length / 2)] : 0; log(`fixed search budget: ${PPM} playouts per minute of search (measured on ${v.length} hands)`); }
// 1) noise + base games (also tells which Extra Deck card the list uses least)
const r1 = hands(0, H1);
await runGames([...r1.map(hi => ({ key: 'base', v: [], hi, sseed: 1 })), ...r1.map(hi => ({ key: 'base2', v: [], hi, sseed: 2 }))], 'stage 1/5: your list twice (noise)');
const noise = stat('base2', 'base', true); /* search luck on the same hands (own searches, before line sharing) */ log(`noise: same hands, different search luck -> per-hand spread ${noise.sd.toFixed(2)}, average ${noise.m >= 0 ? '+' : ''}${noise.m.toFixed(2)} ± ${noise.se.toFixed(2)}`);
const baseMean = Object.values(R.base).reduce((s, r) => s + r.v, 0) / r1.length;
const edUse = {}; for (const e of new Set(base.extra.map(k => name(k)))) edUse[e] = 0; for (const r of [...Object.values(R.base), ...Object.values(R.base2)]) for (const l of r.line || []) for (const e of Object.keys(edUse)) if (l.includes(e)) edUse[e]++;
const leastEd = Object.entries(edUse).sort((p, q) => p[1] - q[1])[0][0]; log(`Extra Deck use in your list's games: least used = ${leastEd} (${edUse[leastEd]} uses)`);
// 2) candidates
const syn = synergyScores(base, LIM); const inList = new Set(Object.keys(count));
const ONLYCUTS = f('cuts', null); // e.g. --cuts "Medius the Pure;Black Chaos": only these cuts (known-answer checks); --cuts none: no cuts
const cuts = Object.keys(count).filter(n => !isHandTrap(n) && (ONLYCUTS === null || ONLYCUTS.split(';').includes(n))).map(n => [{ op: 'cut', card: n }]);
const plus = a.includes('--noplus') ? [] : Object.keys(count).filter(n => !isHandTrap(n) && count[n] < limitOf(code(n))).map(n => [{ op: 'add', card: n }]);
// candidates from the whole-pool screen (poolscan.mjs: every legal card, tested inside your own lines) when it has been run; else cards connected by text
const PS = 'data/poolscan-' + path.basename(deckPath).replace(/\.ydk$/, '') + '.json'; const pool = !a.includes('--synergy') && fs.existsSync(PS) ? JSON.parse(fs.readFileSync(PS, 'utf8')) : null;
if (pool) log(`candidates from the whole-pool screen of ${pool.at.slice(0, 10)}: ${pool.screened} cards screened, ${pool.live} usable in your lines, ${pool.ranked.length} value-tested`);
const adds = pool ? [...pool.ranked.filter(x => x.zone === 'main' && x.kind !== 'standalone' && !inList.has(x.name) && limitOf(code(x.name)) > 0).slice(0, NADD - 5), ...pool.ranked.filter(x => x.zone === 'main' && x.kind === 'standalone' && limitOf(code(x.name)) > 0).slice(0, 5)].map(x => [{ op: 'add', card: x.name, why: [`pool screen ${x.gain >= 0 ? '+' : ''}${x.gain} in ${pool.lines[x.best.li].id}`] }])
  : syn.filter(x => x.zone === 'main' && !inList.has(x.name) && limitOf(x.code) > 0 && !isHandTrap(x.name)).slice(0, NADD).map(x => [{ op: 'add', card: x.name, why: x.why }]);
const eds = pool ? pool.ranked.filter(x => x.zone === 'ed' && limitOf(code(x.name)) > 0).slice(0, NED).map(x => [{ op: 'ed', card: x.name, out: base.extra.length < 15 ? null : leastEd, why: [`pool screen ${x.gain >= 0 ? '+' : ''}${x.gain}`] }])
  : syn.filter(x => x.zone === 'ed' && limitOf(x.code) > 0).slice(0, NED).map(x => [{ op: 'ed', card: x.name, out: leastEd, why: x.why }]);
// packages from the pool screen: cards that need each other (from the engine's scripts), added together; Extra Deck members take your least-used slots
const edOrder = Object.entries(edUse).sort((p, q) => p[1] - q[1]).map(x => x[0]); const NPK = +f('pkgs', 10);
const pkgs = pool && pool.packages ? pool.packages.filter(x => x.kind !== 'standalone').slice(0, NPK).map(x => [...x.members.main.map(n => ({ op: 'add', card: n })), ...x.members.ed.map((n, i) => ({ op: 'ed', card: n, out: base.extra.length + i < 15 ? null : edOrder[i - Math.max(0, 15 - base.extra.length)] }))]).filter(v => v.length) : [];
// memory: what earlier runs already tested on this list is not tested again (unless --retest); ~20% of the new-card slots go to untried cards further down the screen
const TESTED = 'data/tested-' + path.basename(deckPath).replace(/\.ydk$/, '') + '.json'; const tested = fs.existsSync(TESTED) && !a.includes('--retest') ? JSON.parse(fs.readFileSync(TESTED, 'utf8')) : {};
const fresh = (vs) => vs.filter(v => !tested[label(v)]);
const explore = (all, n) => { const rest = fresh(all); const keep = rest.slice(0, Math.ceil(n * 0.8)); const pool2 = rest.slice(keep.length); const r = rngOf(+ID || 7); while (keep.length < n && pool2.length) keep.push(pool2.splice(Math.floor(r() * pool2.length), 1)[0]); return keep; };
const addsAll = pool ? pool.ranked.filter(x => x.zone === 'main' && x.kind === 'engine' && !inList.has(x.name) && limitOf(code(x.name)) > 0).map(x => [{ op: 'add', card: x.name, why: [`pool screen ${x.gain}`] }]) : [];
if (pool) { const side = (k, n) => pool.ranked.filter(x => x.zone === 'main' && x.kind === k && !inList.has(x.name) && limitOf(code(x.name)) > 0).slice(0, n).map(x => [{ op: 'add', card: x.name, why: [`pool screen ${x.gain} (${k})`] }]);
  adds.splice(0, adds.length, ...explore(addsAll, NADD - 8), ...fresh([...side('body', 3), ...side('draw', 2), ...side('standalone', 3)])); }
const skipped = [...cuts, ...plus, ...eds, ...pkgs].filter(v => tested[label(v)]).length; if (skipped) log(`memory: ${skipped} changes already tested on this list in earlier runs are skipped (use --retest to test them again)`);
let versions = MINI ? [cuts.find(v => /Nervedo/.test(v[0].card)) || cuts[0], plus.find(v => /Medius the Pure/.test(v[0].card)) || plus[0], ...adds, ...eds] : [...fresh(cuts), ...fresh(plus), ...adds, ...fresh(eds), ...fresh(pkgs)];
versions = versions.filter(Boolean); const K = (v) => label(v);
{ const custom = f('versions', null) ? JSON.parse(f('versions')) : null; // --versions '[[{"op":"cut","card":"X"},...]]': test exactly these (e.g. a whole package taken out)
  if (f('only', null)) { const want = f('only').split(';').map(x => x.trim().toLowerCase()); versions = versions.filter(v => want.some(w => label(v).toLowerCase().includes(w))); } else if (custom) versions = [];
  if (custom) versions.push(...custom.map(v => { let k = 0; const room = Math.max(0, 15 - base.extra.length); return v.map(c => c.op === 'ed' && c.out === 'auto' ? { ...c, out: k < room ? (k++, null) : edOrder[(k++) - room] } : c); })); } // out:'auto' = replace your least-used Extra Deck card // --only "Pilgrim;Masquerena": only versions whose name contains one of these
log(`candidates: ${cuts.length} cuts, ${plus.length} +1s, ${adds.length} new Main Deck cards, ${eds.length} new Extra Deck cards, ${pkgs.length} packages -> testing ${versions.length} versions (connected cards come from ${syn.length} of all legal cards)`);
const rank = (vs) => vs.map(v => ({ v, s: stat(K(v)) })).sort((p, q) => q.s.m - p.s.m);
const setLive = (vs) => { liveRows = rank(vs).map(x => ({ name: K(x.v), zone: x.v[0].op === 'ed' ? 'ed' : x.v[0].op, done: x.s.n, of: x.s.n, rescued: x.s.better, gain: +x.s.m.toFixed(2) })); };
// 3) rounds
const jobsFor = (vs, his) => his.flatMap(hi => vs.map(v => ({ key: K(v), v, hi, sseed: 1 }))); // hand-major: all versions of a hand run together
await runGames(jobsFor(versions, r1), `stage 2/5: round 1 (${versions.length} versions x ${H1} hands)`); setLive(versions);
let alive = versions;
if (H2 > 0) { alive = rank(versions).slice(0, KEEP2).map(x => x.v); const r2 = hands(H1, H2); await runGames([...r2.map(hi => ({ key: 'base', v: [], hi, sseed: 1 })), ...jobsFor(alive, r2)], `stage 3/5: round 2 (top ${alive.length} x ${H2} more hands)`); setLive(versions); }
if (H3 > 0) { alive = rank(alive).slice(0, KEEP3).map(x => x.v); const r3 = hands(H1 + H2, H3); await runGames([...r3.map(hi => ({ key: 'base', v: [], hi, sseed: 1 })), ...jobsFor(alive, r3)], `stage 4/5: round 3 (top ${alive.length} x ${H3} more hands)`); setLive(versions); }
// a change counts only if it beats your list by more than 2.5x its error, and by more than the noise floor
const clear = (s) => s.m > 0 && s.m > 2.5 * s.se && s.m > (SHARE ? 0.1 : Math.max(0.15, 2 * noise.se)); /* with line sharing, search luck is mostly gone from the paired difference; its SE carries what is left */
const ranked = rank(versions); const winners = ranked.filter(x => x.v[0].op !== 'cut' && clear(x.s)).slice(0, 3).map(x => x.v[0]);
const freeCuts = ranked.filter(x => x.v[0].op === 'cut' && x.s.m >= 0 && !winners.some(w => w.card === x.v[0].card)).slice(0, winners.filter(w => w.op === 'add').length).map(x => x.v[0]);
const cutWins = ranked.filter(x => x.v[0].op === 'cut' && clear(x.s)).slice(0, 2).map(x => x.v[0]);
let combos = [];
if (winners.length || cutWins.length) { combos.push([...winners, ...cutWins]); if (freeCuts.length && winners.length) combos.push([...winners, ...freeCuts.filter(c => !cutWins.some(w => w.card === c.card)), ...cutWins]); }
if (MINI && !combos.length) combos = [[ranked.find(x => x.v[0].op !== 'cut').v[0], ranked.find(x => x.v[0].op === 'cut').v[0]]]; // MINI: exercise the last stage anyway
combos = combos.filter((c, i) => combos.findIndex(d => label(d) === label(c)) === i);
// 4) verify on fresh hands
const rv = hands(1000, HV);
if (combos.length) await runGames([...rv.map(hi => ({ key: 'vbase', v: [], hi, sseed: 1 })), ...rv.flatMap(hi => combos.map(c => ({ key: 'V:' + label(c), v: c, hi, sseed: 1 })))], `stage 5/5: new list(s) vs your list on ${HV} fresh hands`);
// ---------- report ----------
const fx = (x) => (x >= 0 ? '+' : '') + x.toFixed(2); const byS = (s) => Object.entries(s.byS).map(([k, v]) => k + ' ' + fx(v)).join(', ');
let md = `# Find a better list ${ID}${MINI ? ' (MINI check)' : ''}\n${new Date().toISOString()} · ${deckPath} · ${mins()} · ${MIN} min line search per game, from scratch, no guide lines · opponent hand traps rotate: ${SCNS.join(' / ')} (fired at the first legal moment)\n\n`;
const verdicts = combos.map(c => ({ c, s: stat('V:' + label(c), 'vbase') }));
const best = verdicts.filter(x => x.s.m > 0 && x.s.m > 2.5 * x.s.se).sort((p, q) => q.s.m - p.s.m)[0];
md += best ? `## Result: a better list was found\n**${label(best.c)}**: ${fx(best.s.m)} per hand (± ${best.s.se.toFixed(2)}) on ${best.s.n} fresh hands · by hand trap: ${byS(best.s)}. Saved as decks/findlist-${ID}.ydk.\n\n`
  : `## Result: nothing clearly beat your list\n${combos.length ? 'The best combination did not hold up on fresh hands.' : 'No single change beat your list by more than the noise.'} Your list averages ${baseMean.toFixed(2)} per hand here.\n\n`;
if (best) fs.writeFileSync(`decks/findlist-${ID}.ydk`, toYdk(best.c));
{ const T2 = fs.existsSync(TESTED) ? JSON.parse(fs.readFileSync(TESTED, 'utf8')) : {}; for (const x of ranked) T2[K(x.v)] = { gain: +x.s.m.toFixed(2), se: +x.s.se.toFixed(2), n: x.s.n, run: ID, at: new Date().toISOString().slice(0, 10) }; fs.writeFileSync(TESTED, JSON.stringify(T2)); }
md += `## How reliable this is\n- Noise (your list, same hands, different search luck): per-hand spread ${noise.sd.toFixed(2)}, difference ${fx(noise.m)} ± ${noise.se.toFixed(2)} (should be near 0).\n- A change counts only if it beats your list by more than 2.5x its error and by more than the noise.\n- Limits: going first only; the opponent fires hand traps at the first legal moment (real players time them better); board values use the audited scorer; Ash/Imperm are not cut or added (a hand trap kept in hand scores 0 in a board comparison).\n\n`;
if (verdicts.length) { md += `## New lists checked on ${HV} fresh hands\n| list | vs your list | ± | by hand trap | hands better / worse by 1+ |\n|---|---|---|---|---|\n`; for (const x of verdicts) md += `| ${label(x.c)} | ${fx(x.s.m)} | ${x.s.se.toFixed(2)} | ${byS(x.s)} | ${x.s.better}/${x.s.worse} of ${x.s.n} |\n`; md += '\n'; }
md += `## Every change tested (vs your list on the same hands)\n| change | vs your list | ± | hands | by hand trap | better / worse by 1+ | clear win |\n|---|---|---|---|---|---|---|\n`;
for (const x of ranked) md += `| ${K(x.v)} | ${fx(x.s.m)} | ${x.s.se.toFixed(2)} | ${x.s.n} | ${byS(x.s)} | ${x.s.better}/${x.s.worse} | ${clear(x.s) ? 'yes' : ''} |\n`;
md += `\n## Example lines (best hand for each of the top 3 changes)\n`;
for (const x of ranked.slice(0, 3)) { const rs = R[K(x.v)] || {}; const top = Object.keys(rs).filter(hi => R.base[hi]).sort((p, q) => (rs[q].v - R.base[q].v) - (rs[p].v - R.base[p].v))[0]; if (top === undefined) continue; const g = rs[top];
  md += `\n**${K(x.v)}**: hand ${g.hand.join(', ')} (opponent: ${g.scn}) → your list ${R.base[top].v.toFixed(2)}, with the change ${g.v.toFixed(2)}\n${(g.line || []).filter(l => /Summon|Activate/.test(l)).slice(0, 25).join(' > ')}\n`; }
fs.writeFileSync(`reports/findlist-${ID}.md`, md); log('done: reports/findlist-' + ID + '.md'); console.log(md.split('\n').slice(0, 6).join('\n'));
