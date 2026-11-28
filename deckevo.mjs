// deckevo.mjs — whole-deck search (Belal, Nov 26): no one-card-at-a-time tests. Every new deck changes several cards at once, Main Deck and
// Extra Deck together, drawn from the whole legal pool; each deck is judged by long, unguided line searches (no hints, no stored lines, no
// card values) on many hands, with the opponent's hand traps rotating (none / Ash / Imperm / Droll). The best decks are kept, changed again,
// and their scores firm up as they play more hands each generation. The ROLAD core, the Dark Magician package and hand-trap counts are fixed.
// node deckevo.mjs '{"id":"de-1","deck":"decks/findlist-1100.ydk","minutes":15,"hands":16,"pop":16,"keep":4,"resume":"<previous id>"}'
import fs from 'fs'; import os from 'os'; import path from 'path'; import crypto from 'crypto';
import { parseYdk, findCard, name, banlist, cardDB } from './src/cards.mjs'; import { runRemote, helperSlots } from './src/remote.mjs'; import { synergyScores } from './src/synergy.mjs'; import { interact, flows } from './src/interact.mjs';
import { spawn } from 'child_process'; import * as require_cp from 'child_process';
const t = JSON.parse(process.argv[2]); const ID = t.id || 'de'; const MIN = +(t.minutes || 15), H = +(t.hands || 16), POP = +(t.pop || 16), KEEP = +(t.keep || 4), MORE = +(t.more || 8);
const STOP = +(t.stopMin || 320); const T0 = Date.now(); const el = () => (Date.now() - T0) / 60000;
fs.mkdirSync('reports', { recursive: true }); fs.mkdirSync('results', { recursive: true }); fs.mkdirSync('decks/_evo', { recursive: true });
const log = (s) => { const l = new Date().toISOString().slice(11, 19) + ' ' + s; console.log(l); fs.appendFileSync(`reports/${ID}.log`, l + '\n'); };
const { data, text } = cardDB(); const LIM = banlist(); const lim = (c) => LIM.has(c) ? LIM.get(c) : 3;
const ED = 0x40 | 0x2000 | 0x800000 | 0x4000000; const isED = (c) => !!((data.get(c) || {}).type & ED);
const legal = (c) => { const d = data.get(c); return d && !d.alias && c < 100000000 && !(d.type & 0x4000) && (d.ot & 2) && lim(c) > 0; };
const code = (n) => { const c = findCard(n); const k = Array.isArray(c) ? c[0] : c; return k && name(k) === n ? k : null; };
const HTX = /Ash Blossom|Infinite Impermanence|Droll|Ghost Ogre|Nibiru|Maxx|Mulcharmy|Effect Veiler|Called by the Grave|Ghost Belle|Ghost Mourner|Ghost Sister|D\.D\. Crow|Bystial|Dominus|Talents|Retaliating|Crossout|Forbidden Droplet/;
const isHT = (c) => { const n = name(c), s = (text.get(c) || {}).desc || ''; return HTX.test(n) || (/\(Quick Effect\): You can (discard|send) this card/i.test(s) && /(negate|destroy|opponent's hand|activates)/i.test(s)); };
// locked (Belal): the Ritual package + support he named, and the Dark Magician package. Never cut, counts never go below the start list.
const LOCK = new Set(['Light and Darkness Ritual', 'Black Luster Soldier - Soldier of Light and Darkness', 'Magician of Dark Chaos - Black Chaos', 'Mind Shuffle', 'Griffoh', 'Black Chaos',
  'Dark Magician of Destruction', 'Apprentice Illusion Magician', 'Dark Magical Circle']);
// obviously bad generic cards never reach a deck (Belal, Nov 23)
const JUNK = /^(Hand Destruction|Card Destruction|Reasoning|Monster Gate|Pot of Greed|Graceful Charity)$/;

// ---------- start list and pool ----------
const B = parseYdk(fs.readFileSync(t.deck || 'decks/findlist-1100.ydk', 'utf8'));
const cnt = (arr) => { const m = {}; for (const c of arr) m[name(c)] = (m[name(c)] || 0) + 1; return m; };
const base = { main: cnt(B.main), extra: cnt(B.extra) };
const minOf = {}; for (const [n, k] of Object.entries(base.main)) if (LOCK.has(n) || isHT(code(n))) minOf[n] = k;
for (const [n] of Object.entries(base.extra)) if (LOCK.has(n)) minOf['ED:' + n] = 1;
const scanNames = (f, re) => { try { return [...fs.readFileSync(f, 'utf8').matchAll(re)].map(m => m[1]); } catch { return []; } };
const poolMain = new Set(), poolED = new Set();
for (const x of synergyScores(B, LIM)) { if (!legal(x.code) || isHT(x.code) || JUNK.test(x.name)) continue; (isED(x.code) ? poolED : poolMain).add(x.name); }
for (const n of [...scanNames('reports/mainscan.md', /^- \dx (.+?) \|/gm), ...scanNames('reports/textscan.md', /^- \dx (.+?) \|/gm)]) { const c = code(n); if (c && legal(c) && !isHT(c) && !isED(c) && !JUNK.test(n)) poolMain.add(n); }
for (const n of scanNames('reports/edscan.md', /^- \*\*(.+?)\*\*/gm)) { const c = code(n); if (c && legal(c) && isED(c)) poolED.add(n); }
for (const n of Object.keys(base.main)) if (!isHT(code(n))) poolMain.add(n); for (const n of Object.keys(base.extra)) poolED.add(n);
const PM = [...poolMain], PE = [...poolED];
// sampling weights, not filters: every pool card can be drawn; cards that connect by text start a little likelier, and cards that show up in
// lines that beat the start list on the same hand get likelier as the run learns (so the search spends its games on cards that do something)
const SYNW = {}; for (const x of synergyScores(B, LIM)) SYNW[x.name] = x.w;
const wOf = (n) => 1 + Math.min(SYNW[n] || 0, 6) + 3 * Math.log1p((S.use || {})[n] || 0);
const pick = (arr) => { let tot = 0; const w = arr.map(n => (tot += wOf(n))); const r = Math.random() * tot; return arr[w.findIndex(x => x >= r)]; }; log(`pool: ${PM.length} Main Deck cards, ${PE.length} Extra Deck cards (legal TCG, no hand traps, no banned)`);
// archetype of a card = a quoted name in its text that is part of its own name (used to add small packages of one family at once)
const famOf = (n) => { const q = [...(((text.get(code(n)) || {}).desc || '').matchAll(/"([^"]+)"/g))].map(m => m[1]).filter(x => x.length >= 4 && n.includes(x) && x !== n); return q[0] || null; };
const fam = {}; for (const n of PM) { const f = famOf(n); if (f) (fam[f] ||= []).push(n); }

// ---------- decks ----------
const key = (d) => crypto.createHash('sha1').update(JSON.stringify([Object.entries(d.main).filter(x => x[1]).sort(), Object.entries(d.extra).filter(x => x[1]).sort()])).digest('hex').slice(0, 10);
const size = (o) => Object.values(o).reduce((a, b) => a + b, 0);
const okDeck = (d) => { const m = size(d.main), e = size(d.extra); if (m < 40 || m > 60 || e > 15) return false;
  for (const [n, k] of Object.entries(d.main)) { if (k < 0 || k > lim(code(n))) return false; if (minOf[n] && k < minOf[n]) return false; }
  for (const [n, k] of Object.entries(d.extra)) { if (k < 0 || k > lim(code(n))) return false; if (minOf['ED:' + n] && k < 1) return false; } return true; };
const clone = (d) => ({ main: { ...d.main }, extra: { ...d.extra } });
const rnd = (a) => a[Math.floor(Math.random() * a.length)];
// connect: pick a card the deck relies on (weighted by how often good lines had to fetch it, and how often they used it), then add a pool card
// that works with it by text — searches it, revives it, sends it, uses it as material, is fetched by it, or is a card that "mentions" what it
// names — weighted by how many of the deck's cards it touches. 1 in 3 times, a second card that works with the first is added too (a 2-step
// chain to the missing piece).
const PALL = [...PM.map(n => [n, false]), ...PE.map(n => [n, true])].map(([n, e]) => ({ n, e, c: code(n) })).filter(x => x.c);
function connect(d) { const inD = [...Object.keys(d.main).filter(n => d.main[n] > 0), ...Object.keys(d.extra).filter(n => d.extra[n] > 0)];
  const aw = inD.map(n => 1 + 2 * Math.log1p(((S.need || {})[n] || 0)) + Math.log1p(((S.use || {})[n] || 0))); let tot = aw.reduce((a, b) => a + b, 0), r = Math.random() * tot, A = inD[0]; for (let i = 0; i < inD.length; i++) { r -= aw[i]; if (r <= 0) { A = inD[i]; break; } }
  const addOne = (anchor) => { const ac = code(anchor); const cand = []; for (const x of PALL) { if (x.n === anchor) continue; const have = x.e ? (d.extra[x.n] || 0) : (d.main[x.n] || 0); if (have >= lim(x.c)) continue; const w = interact(x.c, ac); if (!w) continue;
      let span = 0; for (const n of inD) if (n !== anchor && interact(x.c, code(n)) >= 0.6) span++; cand.push([x, w * (1 + 0.4 * Math.min(span, 8)) * (1 + 0.5 * Math.log1p((S.use || {})[x.n] || 0))]); }
    if (!cand.length) return null; let t2 = cand.reduce((a, b) => a + b[1], 0), q = Math.random() * t2, X = cand[0][0]; for (const [x, w] of cand) { q -= w; if (q <= 0) { X = x; break; } }
    if (X.e) { if (size(d.extra) >= 15) { const outs = Object.keys(d.extra).filter(o => d.extra[o] > 0 && !minOf['ED:' + o]); const idle = outs.filter(o => CUR_USED && !CUR_USED.has(o)); const out = (idle.length && Math.random() < 0.75 ? idle : outs).sort(() => Math.random() - 0.5)[0]; if (!out) return null; d.extra[out]--; d.extra[X.n] = (d.extra[X.n] || 0) + 1; return [`ED -1 ${out}`, `ED +1 ${X.n} (works with ${anchor})`]; } d.extra[X.n] = (d.extra[X.n] || 0) + 1; return [`ED +1 ${X.n} (works with ${anchor})`]; }
    const k = Math.min(lim(X.c) - (d.main[X.n] || 0), 1 + Math.floor(Math.random() * 2)); d.main[X.n] = (d.main[X.n] || 0) + k; return [`+${k} ${X.n} (works with ${anchor})`]; };
  const a1 = addOne(A); if (!a1) return null; if (Math.random() < 0.33) { const nm = /\+\d+ (.+?) \(works/.exec(a1[a1.length - 1]); if (nm) { const a2 = addOne(nm[1]); if (a2) a1.push(...a2); } } return a1; }
let CUR_USED = null;
// bridge: "X would work with Y if a card that did Z existed" — X = a card that keeps showing up in hands that went nowhere, Y = a piece good
// lines had to fetch. Look through the whole pool for Z that works with X AND with Y (1 card), or Z1 that works with X and Z2 that works
// with Z1 and Y (2 cards). The engine then decides whether the route is real.
function bridge(d) { const st = Object.entries(S.strand || {}).filter(([n]) => (d.main[n] || 0) > 0 && (S.seen?.[n] || 0) >= 8).map(([n, c]) => [n, 20 * c / S.seen[n]]).filter(([n]) => !isHT(code(n))).filter(([, w]) => w > 0); const nd = Object.entries(S.need || {}); if (!st.length || !nd.length) return null;
  const wpick = (arr) => { let t = arr.reduce((a, b) => a + Math.log1p(b[1]), 0), r = Math.random() * t; for (const [n, w] of arr) { r -= Math.log1p(w); if (r <= 0) return n; } return arr[0][0]; };
  const X = wpick(st); let Y = wpick(nd); for (let i = 0; i < 5 && Y === X; i++) Y = wpick(nd); if (Y === X) return null; const xc = code(X), yc = code(Y); if (!xc || !yc) return null;
  const room = (x) => (x.e ? (d.extra[x.n] || 0) : (d.main[x.n] || 0)) < lim(x.c);
  const one = PALL.filter(x => room(x) && x.n !== X && x.n !== Y && flows(xc, x.c) >= 0.6 && flows(x.c, yc) >= 0.6);
  const put = (x, why) => { if (x.e) { const outs = Object.keys(d.extra).filter(o => d.extra[o] > 0 && !minOf['ED:' + o]); const idle = outs.filter(o => CUR_USED && !CUR_USED.has(o)); if (size(d.extra) >= 15) { const o = (idle.length ? idle : outs).sort(() => Math.random() - 0.5)[0]; if (!o) return null; d.extra[o]--; } d.extra[x.n] = (d.extra[x.n] || 0) + 1; return `ED +1 ${x.n} (${why})`; }
    const k = Math.min(lim(x.c) - (d.main[x.n] || 0), 1 + Math.floor(Math.random() * 2)); d.main[x.n] = (d.main[x.n] || 0) + k; return `+${k} ${x.n} (${why})`; };
  const triedZ = (n) => Object.values(S.decks).some(d => (d.main[n] || 0) > (base.main[n] || 0) || (d.extra[n] || 0) > (base.extra[n] || 0)); const fresh = one.filter(x => !triedZ(x.n));
  if (one.length && Math.random() < 0.7) { const z = rnd(fresh.length && Math.random() < 0.8 ? fresh : one); /* untried links first: each real link gets a fair test */ const a = put(z, `bridge ${X} → ${Y}`); return a ? [a] : null; }
  const n1 = PALL.filter(x => room(x) && x.n !== X && flows(xc, x.c) >= 0.6).sort(() => Math.random() - 0.5).slice(0, 40);
  for (const z1 of n1) { const z2s = PALL.filter(x => room(x) && x.n !== z1.n && x.n !== X && x.n !== Y && flows(z1.c, x.c) >= 0.6 && flows(x.c, yc) >= 0.6); if (!z2s.length) continue; const z2 = rnd(z2s);
    const a = put(z1, `bridge ${X} → ${z2.n} → ${Y}`), b = put(z2, `bridge ${X} → ${z1.n} → ${Y}`); return [a, b].filter(Boolean); }
  if (one.length) { const a = put(rnd(one), `bridge ${X} → ${Y}`); return a ? [a] : null; } return null; }
function mutate(p) { CUR_USED = p._used || null;
  // pure link test (Nov 27): 1 in 3 children change only the missing link (plus its Extra Deck slot), so its effect isn't hidden by other changes
  if (Math.random() < +(t.pure ?? 0)) for (let tries = 0; tries < 20; tries++) { const d = clone(p); const x = bridge(d); if (x && okDeck(d)) { if (process.env.DBGC) log('pure bridge: ' + x.join(' | ')); return d; } }
  for (let tries = 0; tries < 50; tries++) { const d = clone(p); const k = 2 + Math.floor(Math.random() * 5); const did = [];
  for (let i = 0; i < k; i++) { const r = Math.random(); const inMain = Object.keys(d.main).filter(n => d.main[n] > 0);
    if (r < 0.22) { const x = bridge(d); if (x) { did.push(...x); if (process.env.DBGC) log('bridge: ' + x.join(' | ')); } }
    else if (r < 0.44) { const x = connect(d); if (x) { did.push(...x); if (process.env.DBGC) log('connect: ' + x.join(' | ')); } }
    else if (r < 0.50) { const n = pick(PM); const c = Math.min(lim(code(n)) - (d.main[n] || 0), 1 + Math.floor(Math.random() * 3)); if (c > 0) { d.main[n] = (d.main[n] || 0) + c; did.push(`+${c} ${n}`); } }
    else if (r < 0.52) { const f = rnd(Object.keys(fam)); for (const n of fam[f].slice().sort(() => Math.random() - 0.5).slice(0, 2 + Math.floor(Math.random() * 2))) { if ((d.main[n] || 0) < lim(code(n))) { d.main[n] = (d.main[n] || 0) + 1; did.push(`+1 ${n}`); } } }
    else if (r < 0.70) { const unused = inMain.filter(n => !isHT(code(n)) && !(minOf[n] && d.main[n] <= minOf[n]) && (p._used ? !p._used.has(n) : false)); const n = unused.length && Math.random() < 0.6 ? rnd(unused) : rnd(inMain); if (n && !(minOf[n] && d.main[n] <= minOf[n])) { d.main[n]--; did.push(`-1 ${n}`); } }
    else if (r < 0.78) { const n = rnd(inMain); if (n && d.main[n] < lim(code(n)) && !isHT(code(n))) { d.main[n]++; did.push(`+1 ${n}`); } }
    else { const n = pick(PE); const cur0 = Object.keys(d.extra).filter(x => d.extra[x] > 0 && !minOf['ED:' + x]); const idle0 = cur0.filter(x => CUR_USED && !CUR_USED.has(x)); const cur = idle0.length && Math.random() < 0.75 ? idle0 : cur0; if ((d.extra[n] || 0) >= lim(code(n))) continue;
      if (size(d.extra) >= 15 || Math.random() < 0.6) { const o = rnd(cur); if (!o) continue; d.extra[o]--; did.push(`ED -1 ${o}`); } d.extra[n] = (d.extra[n] || 0) + 1; did.push(`ED +1 ${n}`); } }
  if (did.length && okDeck(d) && (Math.random() < 0.5 || did.some(x => !x.startsWith('ED ')))) return d; } return null; }
function cross(a, b) { for (let tries = 0; tries < 30; tries++) { const d = { main: {}, extra: {} };
  for (const n of new Set([...Object.keys(a.main), ...Object.keys(b.main)])) d.main[n] = Math.random() < 0.5 ? (a.main[n] || 0) : (b.main[n] || 0);
  const eds = [...new Set([...Object.keys(a.extra), ...Object.keys(b.extra)])].sort(() => Math.random() - 0.5); for (const n of eds) { const k = Math.random() < 0.5 ? (a.extra[n] || 0) : (b.extra[n] || 0); if (k && size(d.extra) + k <= 15) d.extra[n] = k; }
  for (const n of Object.keys(minOf)) { if (n.startsWith('ED:')) { const e = n.slice(3); if (!d.extra[e]) { const o = Object.keys(d.extra).find(x => d.extra[x] && !minOf['ED:' + x]); if (o && size(d.extra) >= 15) d.extra[o]--; d.extra[e] = 1; } } else d.main[n] = Math.max(d.main[n] || 0, minOf[n]); }
  if (okDeck(d)) return d; } return null; }
const diff = (d) => { const o = []; for (const n of new Set([...Object.keys(base.main), ...Object.keys(d.main)])) { const x = (d.main[n] || 0) - (base.main[n] || 0); if (x) o.push(`${x > 0 ? '+' : ''}${x} ${n}`); }
  for (const n of new Set([...Object.keys(base.extra), ...Object.keys(d.extra)])) { const x = (d.extra[n] || 0) - (base.extra[n] || 0); if (x) o.push(`ED ${x > 0 ? '+' : ''}${x} ${n}`); } return o.length ? o.join(', ') : 'start list'; };
const toCodes = (o) => Object.entries(o).flatMap(([n, k]) => Array(Math.max(0, k)).fill(code(n))).sort((p, q) => p - q);
const fileOf = (d) => { const p = `decks/_evo/${ID.replace(/-\d+$/, '')}-${key(d)}.ydk`; if (!fs.existsSync(p)) fs.writeFileSync(p, `#created by deckevo ${ID}: ${diff(d)}\n#main\n${toCodes(d.main).join('\n')}\n#extra\n${toCodes(d.extra).join('\n')}\n!side\n`); return p; };

// ---------- games: hand slot hi = same shuffle seed and same opponent hand traps for every deck ----------
const SCN = ['none', 'ash', 'imperm', 'droll'];
const rngOf = (s) => { let x = s >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const deal = (d, hi) => { const r = rngOf(1000 + hi * 7919); const p = toCodes(d.main); for (let k = p.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [p[k], p[j]] = [p[j], p[k]]; } return p; };
const runLocal = (args) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(args)], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = ''; p.stdout.on('data', b => o += b);
  const tm = setTimeout(() => { try { p.kill(); } catch {} }, (MIN * 1.6 + 10) * 60000); p.on('close', () => { clearTimeout(tm); ok(o); }); });
// also = lines (own steps) other decks found on this same hand slot: replayed after the search, the bigger result counts (never steers the search)
async function play(d, hi, remote, also, mins) { const perm = deal(d, hi); const M = mins ?? MIN; const args = { deck: fileOf(d), main: perm, hand: perm.slice(0, 5).map(name), minutes: M, seed: 7 + hi, sseed: 20000 + hi, scn: SCN[hi % 4], hints: false, cardv: false, learn: false, wantRaw: true, ...(S.ppm && M >= 1 ? { ppm: S.ppm } : {}), ...(also && also.length ? { alsoTry: also } : {}) };
  let out = null; if (remote) { const r = await runRemote('deepw.mjs', args, { files: [args.deck], est: M * (S.ppm && M >= 1 ? 1.6 : 1.1) + 0.5 }); out = r && r.stdout; } if (!out || !/RESULT/.test(out)) out = await runLocal(args);
  const m = /RESULT (.*)/.exec(out || ''); if (!m) return { v: null }; const x = JSON.parse(m[1]); return { v: x.v, hand: args.hand, scn: args.scn, line: (x.line || []).slice(0, 80), raw: x.raw || null, fp: !!x.fromParent }; }
const alsoFor = (k, hi) => (S.parent?.[k] || []).map(p => S.res[p]?.[hi]?.raw).filter(Boolean);
const PAR = Math.max(1, Math.min(os.cpus().length - 1, Math.floor(os.freemem() / 1.3e9)));
async function runAll(jobs) { const q = jobs.slice(); let live = 0, hs = await helperSlots(); let done = 0;
  const work = async (remote) => { while (q.length) { if (remote && live > hs) return; const j = q.shift(); const r = await play(j.d, j.hi, remote, j.also || alsoFor(j.k, j.hi), j.mins); if (j.xr) { const o = S.res[j.k][j.hi]; if (r.v != null && o && r.v > (o.v ?? -1)) { S.res[j.k][j.hi] = { ...r, xr: true, own: o.own ?? o.v }; } } else { (S.res[j.k] ||= {})[j.hi] = r; credit(j.k, j.hi); strand(r); } done++; if (done % 10 === 0) { log(`  ${done}/${jobs.length} games`); save(); } } };
  const ws = []; const grow = () => { while (live < hs && q.length) { live++; ws.push(work(true).finally(() => live--)); } }; grow(); const tm = setInterval(async () => { try { hs = await helperSlots(); } catch {} grow(); }, 60000);
  await Promise.all(Array.from({ length: PAR }, () => work(false))); while (ws.length) await ws.shift(); clearInterval(tm); save(); }

// cards named in a line that beat the start list's result on the same hand slot gain sampling weight
const credit = (k, hi) => { const r = S.res[k][hi], b = (S.res[S.baseKey] || {})[hi]; if (!r || r.v == null || !r.line || k === S.baseKey) return; if (b && b.v != null && r.v <= b.v) return;
  S.use ||= {}; const names = new Set(); for (const l of r.line) { const m = /^(?:Activate|Normal Summon|Link Summon|Synchro Summon|Xyz Summon|Fusion Summon|Ritual Summon|Special Summon \(procedure\)|Set Spell\/Trap|Selected) (.+?) \(/.exec(l); if (m) names.add(m[1]); } for (const n of names) S.use[n] = (S.use[n] || 0) + 1;
  // pieces the line had to go and get (searched, revived, summoned from the Deck/GY/banishment): more ways to reach them = more ways through a hand trap
  S.need ||= {}; S.link ||= {}; let by = null; for (const l of r.line) { const a = /^(?:Activate|Trigger: activate) (.+?) \(/.exec(l); if (a) { by = a[1]; continue; } const m = /^Selected (.+?) \((Deck|GY|banished|Extra Deck)/.exec(l); if (m) { S.need[m[1]] = (S.need[m[1]] || 0) + 1; if (by) S.link[by + ' > ' + m[1]] = (S.link[by + ' > ' + m[1]] || 0) + 1; } } };
const usedIn = (k) => { const u = new Set(); for (const r of Object.values(S.res[k] || {})) for (const l of r.line || []) { const m = /^(?:Activate|Normal Summon|Link Summon|Synchro Summon|Xyz Summon|Fusion Summon|Ritual Summon|Special Summon \(procedure\)|Set Spell\/Trap|Selected|Tribute Summon) (.+?) \(/.exec(l); if (m) u.add(m[1]); } return u; };
// stuck cards (fixed Nov 27): a card is stuck in a hand when it was in the opening hand and the best line found never used it (it sat there
// dead). share = stuck hands / hands it was in, counted over every deck's results, rebuilt from scratch each time (old runs had counted the
// same hand more than once, giving shares over 100%). These are the X cards the bridge op looks for a missing link for.
const lineUses = (r) => { const u = new Set(); for (const l of r.line || []) { const m = /^(?:Activate|Trigger: activate|Normal Summon|Link Summon|Synchro Summon|Xyz Summon|Fusion Summon|Ritual Summon|Special Summon \(procedure\)|Set Spell\/Trap|Selected|Tribute Summon|Set) (.+?) \(/.exec(l); if (m) u.add(m[1]); } return u; };
const stuckOf = (res) => { const seen = {}, st = {}; for (const per of Object.values(res || {})) for (const r of Object.values(per || {})) { if (!r || r.v == null || !r.hand || !r.line) continue; const u = lineUses(r);
  for (const n of new Set(r.hand)) { const c = code(n); if (!c || isHT(c) || ((data.get(c) || {}).type & 0x4)) continue; /* Traps in hand are Set at the end of the line, which the line log leaves out: never counted as stuck */ seen[n] = (seen[n] || 0) + 1; if (!u.has(n)) st[n] = (st[n] || 0) + 1; } } return { seen, st }; };
const rebuildStrand = () => { const { seen, st } = stuckOf(S.res); S.seen = seen; S.strand = st; };
const strand = () => {};
// ---------- state ----------
let S = { id: ID, decks: {}, res: {}, gens: [] };
if (t.resume) { try { const r = await fetch(`https://raw.githubusercontent.com/whereisrachel/rolad-lab/lab-${t.resume}/results/${t.resume}.json`); if (r.ok) { const p = await r.json(); S = { ...p, id: ID }; log(`resumed from ${t.resume}: ${Object.keys(S.decks).length} decks, ${S.gens.length} generations`); } } catch (e) { log('resume failed: ' + e.message); } }
if (t.resume) { let n = 0; for (const per of Object.values(S.res || {})) for (const h of Object.keys(per || {})) if (per[h] && per[h].xr && per[h].own == null) { delete per[h]; n++; } if (n) log(`dropped ${n} results scored with borrowed lines (own search not kept): they are searched again`); }
// import: start fresh scores (old ones came from wall-clock searches whose result depended on which machine ran them), but keep what
// another run learned (cards used, pieces needed, stranded cards) and its best decks as the first parents
if (t.import && !S.baseKey) { try { const r = await fetch(`https://raw.githubusercontent.com/whereisrachel/rolad-lab/lab-${t.import}/results/${t.import}.json`); if (r.ok) { const p = await r.json();
  const st2 = (k) => { const v = Object.values(p.res[k] || {}).map(x => x.v).filter(x => x != null); return v.length >= 12 ? v.reduce((a, b) => a + b, 0) / v.length : -1; };
  S.use = p.use || {}; S.need = p.need || {}; S.link = p.link || {}; S.strand = {}; S.seedDecks = Object.keys(p.decks).filter(k => k !== p.baseKey).sort((a, b) => st2(b) - st2(a)).slice(0, +(t.importTop || 6)).map(k => p.decks[k]);
  log(`imported from ${t.import}: learned card data + ${S.seedDecks.length} best decks (to be re-scored)`); } } catch (e) { log('import failed: ' + e.message); } }
function save() { fs.writeFileSync(`results/${ID}.json`, JSON.stringify(S)); }
// rankings use each deck's OWN search (Nov 27 fix): lines borrowed from sibling decks lifted only decks sharing the start list's Main Deck
// (the start list got best-of-many on half its hands, Main Deck changes got one search) — a ~0.5 head start for the start list
const val = (r) => r ? (r.own ?? r.v) : null;
const stat = (k) => { const v = Object.values(S.res[k] || {}).map(r => val(r)).filter(x => x != null); const n = v.length, m = n ? v.reduce((a, b) => a + b, 0) / n : 0; const sd = n > 1 ? Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / (n - 1)) : 0; return { n, m, se: n ? sd / Math.sqrt(n) : 9 }; };
// paired vs the start list on the hand slots both played
const vsBase = (k) => { const b = S.res[S.baseKey] || {}, x = S.res[k] || {}; const d = Object.keys(x).filter(h => b[h] && val(b[h]) != null && val(x[h]) != null).map(h => val(x[h]) - val(b[h])); const n = d.length, m = n ? d.reduce((a, c) => a + c, 0) / n : 0; const sd = n > 1 ? Math.sqrt(d.reduce((a, c) => a + (c - m) ** 2, 0) / (n - 1)) : 0; return { n, m, se: n ? sd / Math.sqrt(n) : 9 }; };
const nChg = (k) => { const d = S.decks[k]; let n = 0; for (const x of new Set([...Object.keys(base.main), ...Object.keys(d.main)])) n += Math.abs((d.main[x] || 0) - (base.main[x] || 0)); for (const x of new Set([...Object.keys(base.extra), ...Object.keys(d.extra)])) n += Math.abs((d.extra[x] || 0) - (base.extra[x] || 0)); return n; };
// ties go to the deck with fewer changes (a change that scores the same as not making it is not a find)
const rank = () => Object.keys(S.decks).filter(k => stat(k).n >= H * 0.75).sort((p, q) => (stat(q).m - stat(q).se - 0.03 * nChg(q)) - (stat(p).m - stat(p).se - 0.03 * nChg(p)));
// parents: the best deck, then the best deck of each different Main Deck (so the search doesn't circle Extra Deck swaps that change nothing)
const pickElite = () => { const r = rank(); const out = [], seenM = new Set(); for (const k of r) { const m = JSON.stringify(Object.entries(S.decks[k].main).filter(x => x[1]).sort()); if (out.length && seenM.has(m)) continue; seenM.add(m); out.push(k); if (out.length >= KEEP) break; }
  for (const k of r) { if (out.length >= KEEP) break; if (!out.includes(k)) out.push(k); } return out; };
function report() { const rows = rank().slice(0, 20).map((k, i) => { const s = stat(k), b = vsBase(k); return `| ${i + 1} | ${s.m.toFixed(2)} ± ${s.se.toFixed(2)} (n ${s.n}) | ${k === S.baseKey ? '—' : `${b.m >= 0 ? '+' : ''}${b.m.toFixed(2)} ± ${b.se.toFixed(2)}`} | ${size(S.decks[k].main)}/${size(S.decks[k].extra)} | ${diff(S.decks[k])} |`; });
  const top = rank()[0]; let md = `# Whole-deck search ${ID}\n${new Date().toISOString()} · ${S.gens.length} generations · ${Object.keys(S.decks).length} decks · ${MIN}-min unguided searches · opponent hand traps rotate none/Ash/Imperm/Droll\n\nPool: ${PM.length} Main Deck + ${PE.length} Extra Deck cards. Locked: ${[...LOCK].join(', ')}; hand-trap counts fixed.\n\n| # | average board | vs start list (same hands) | Main/Extra | changes from the start list |\n|---|---|---|---|---|\n${rows.join('\n')}\n`;
  if (top) md += `\n## Best deck so far\n${diff(S.decks[top])}\n\nMain: ${Object.entries(S.decks[top].main).filter(x => x[1]).map(([n, k]) => `${k} ${n}`).join(', ')}\n\nExtra: ${Object.entries(S.decks[top].extra).filter(x => x[1]).map(([n, k]) => `${k} ${n}`).join(', ')}\n`;
  md += `\n## Generations\n${S.gens.map(g => `- gen ${g.g}: ${g.n} new decks, best ${g.best}, ${g.min} min`).join('\n')}\n`; fs.writeFileSync(`reports/${ID}.md`, md); save(); live(); }
// live snapshot (GitHub runs only): push the report + state to branch lab-<id> after every generation, so the run can be checked while it runs
function live() { if (!process.env.LIVE_TOKEN || !process.env.LIVE_REPO) return; try { const dir = `/tmp/live-${ID}`; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir + '/reports', { recursive: true }); fs.mkdirSync(dir + '/results', { recursive: true });
  fs.copyFileSync(`reports/${ID}.md`, `${dir}/reports/${ID}.md`); if (fs.existsSync(`reports/${ID}.log`)) fs.copyFileSync(`reports/${ID}.log`, `${dir}/reports/${ID}.log`); fs.copyFileSync(`results/${ID}.json`, `${dir}/results/${ID}.json`);
  const sh = (c) => require_cp.execSync(c, { cwd: dir, stdio: 'ignore' }); sh('git init -q . && git config user.name rolad-lab && git config user.email noreply@github.com && git add -A && git commit -qm "live ' + ID + '"');
  sh(`git push -q -f "https://x-access-token:${process.env.LIVE_TOKEN}@github.com/${process.env.LIVE_REPO}.git" HEAD:refs/heads/lab-${ID}`); } catch { log('live snapshot push failed'); } }

// ---------- run ----------
if (!S.baseKey) { S.baseKey = key(base); S.decks[S.baseKey] = base; }
// fixed work budget: searches get a fixed number of playouts (calibrated once on this runner = what ${MIN} minutes buys here), not a clock,
// so the same deck on the same hand scores the same whatever machine runs it and however loaded it is
if (!S.ppm && t.fixed !== false) { const cal = []; for (let i = 0; i < 4; i++) { const perm = deal(base, 900 + i); const o = await runLocal({ deck: t.deck || 'decks/findlist-1100.ydk', main: perm, hand: perm.slice(0, 5).map(name), minutes: 1, seed: 7, hints: false, cardv: false, learn: false });
    const m = /RESULT (.*)/.exec(o || ''); if (m) { const x = JSON.parse(m[1]); if (x.ppm1) cal.push(x.ppm1); } } cal.sort((a, b) => a - b); if (cal.length) { S.ppm = Math.round(cal[cal.length >> 1]); log(`fixed budget: ${S.ppm} playouts per search-minute (median of ${cal.join(', ')})`); } else log('calibration failed; using the clock'); }
let gen = S.gens.length; let genMin = 0;
while (true) { const g0 = Date.now(); gen++;
  // every deck that is still a candidate plays MORE new hand slots (so lucky early scores get tested), new decks play H slots
  const elite = pickElite(); const kids = [];
  if (!elite.length) kids.push(S.baseKey); else { const seen = new Set(Object.keys(S.decks)); let guard = 0;
    rebuildStrand(); log('stuck cards: ' + Object.entries(S.strand).filter(([n]) => S.seen[n] >= 8).map(([n, c]) => [n, c / S.seen[n]]).sort((x, y) => y[1] - x[1]).slice(0, 6).map(([n, f]) => `${n} ${(100 * f) | 0}%`).join(', '));
    while (kids.length < POP && guard++ < 500) { for (const e of elite) Object.defineProperty(S.decks[e], '_used', { value: usedIn(e), enumerable: false, configurable: true }); let pa; const d = Math.random() < 0.2 && elite.length > 1 ? (pa = [rnd(elite), rnd(elite)], cross(S.decks[pa[0]], S.decks[pa[1]])) : (pa = [rnd(elite.concat(elite.slice(0, 1)))], mutate(S.decks[pa[0]])); if (!d) continue; const k = key(d); if (seen.has(k)) continue; seen.add(k); S.decks[k] = d; (S.parent ||= {})[k] = [...new Set(pa)]; kids.push(k); } }
  if (!elite.length && gen === 1) { /* first generation: the start list, imported best decks, then children of the start list */ const seen = new Set([S.baseKey]); for (const d of (S.seedDecks || [])) { if (!okDeck(d)) continue; const k = key(d); if (seen.has(k)) continue; seen.add(k); S.decks[k] = d; (S.parent ||= {})[k] = [S.baseKey]; kids.push(k); } delete S.seedDecks; let guard = 0; while (kids.length < POP && guard++ < 500) { const d = mutate(base); if (!d) continue; const k = key(d); if (seen.has(k)) continue; seen.add(k); S.decks[k] = d; (S.parent ||= {})[k] = [S.baseKey]; kids.push(k); } }
  const jobs = []; for (const k of kids) for (let hi = 0; hi < H; hi++) jobs.push({ k, d: S.decks[k], hi });
  S.next ??= H; const extra = Array.from({ length: MORE }, (_, i) => S.next + i); S.next += MORE;
  for (const k of [...new Set([...elite, S.baseKey])]) for (const hi of extra) jobs.push({ k, d: S.decks[k], hi });
  // the start list also plays every slot the elite plays, so 'vs start list' stays paired
  if (genMin && el() + genMin * 1.1 > STOP) { log(`stopping before generation ${gen}: ${el().toFixed(0)} min used, a generation takes ~${genMin.toFixed(0)} min`); gen--; break; }
  log(`generation ${gen}: ${kids.length} new decks x ${H} hands + ${MORE} more hands for ${elite.length} best and the start list = ${jobs.length} games (${MIN}-min searches)`);
  await runAll(jobs.filter(j => !(S.res[j.k] && S.res[j.k][j.hi])));
  // cross-replay: on every hand slot, the best lines any deck found there are replayed in every other deck that played the slot (works only
  // where the hand is the same, i.e. same Main Deck). Score = best known line for that hand in that deck, so search luck and the cost of having
  // more options to search don't decide the ranking.
  { const pool = [...new Set([...kids, ...elite, S.baseKey])]; const xj = []; const slots = new Set(); for (const k of pool) for (const h of Object.keys(S.res[k] || {})) slots.add(h);
    for (const h of slots) { const all = Object.keys(S.res).map(k => ({ k, r: S.res[k][h] })).filter(x => x.r && x.r.v != null && x.r.raw).sort((a, b) => b.r.v - a.r.v);
      for (const k of pool) { const r = S.res[k]?.[h]; if (!r || r.v == null) continue; const mainKey = JSON.stringify(Object.entries(S.decks[k].main).filter(x => x[1]).sort());
        const lines = all.filter(x => x.k !== k && x.r.v > r.v + 0.05 && JSON.stringify(Object.entries(S.decks[x.k].main).filter(y => y[1]).sort()) === mainKey).slice(0, 4).map(x => x.r.raw);
        if (lines.length) xj.push({ k, d: S.decks[k], hi: +h, also: lines, mins: 0.05, xr: true }); } }
    if (xj.length) { log(`cross-replay: ${xj.length} hand slots where another deck with the same Main Deck found a bigger line`); await runAll(xj); } }
  // keep full lines only for the decks that can still be parents (state size)
  { const keepRaw = new Set([...rank().slice(0, 8), S.baseKey]); for (const k of Object.keys(S.res)) if (!keepRaw.has(k)) for (const r of Object.values(S.res[k])) delete r.raw; }
  const b = rank()[0]; genMin = (Date.now() - g0) / 60000; S.gens.push({ g: gen, n: kids.length, best: b ? `${stat(b).m.toFixed(2)} (${diff(S.decks[b]).slice(0, 120)})` : '-', min: Math.round(genMin) }); report();
  log(`generation ${gen} done in ${genMin.toFixed(0)} min; best ${b ? stat(b).m.toFixed(2) + ' ± ' + stat(b).se.toFixed(2) : '-'}; start list ${stat(S.baseKey).m.toFixed(2)}`);
  if (t.gens && gen >= +t.gens) break; if (el() + genMin * 1.1 > STOP) break; }
report(); log('done');
