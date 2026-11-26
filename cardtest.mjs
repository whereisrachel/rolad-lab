// Card test with the fixed search (Belal, Nov 25: "can we trust the earlier card testing?"). For each candidate card: your list + that card
// (Main Deck: +1 copy, and the card starts in the hand in place of the last filler; Extra Deck: replaces the least-used Extra Deck card).
// Each (hand, deck order) gets several independent board searches: own random seed, no hints toward old lines, the open-lanes search, and one
// search that must use the candidate (its +3 search bonus is taken off the score). Best board per (hand, order) vs the list without the card
// on the same deals (same searches, same seeds). Positive = the card makes that hand's best board bigger.
// node cardtest.mjs '<json>' { id, deck, hands: { name: [5 names] }, orders: 3, minutes: 3, main: [names], extra: [names], edOut, top }
import fs from 'fs'; import os from 'os'; import path from 'path'; import { runNode, poolDyn } from './src/remote.mjs';
import { parseYdk, name, findCard, banlist, cardDB } from './src/cards.mjs'; import { synergyScores } from './src/synergy.mjs';
const t = JSON.parse(process.argv[2]); const ID = t.id || 'ct'; const DECK = t.deck || 'decks/findlist-1100.ydk'; const base = parseYdk(fs.readFileSync(DECK, 'utf8'));
const ORD = t.orders ?? 3, MIN = t.minutes ?? 3; const codeOf = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
const HT = /Ash Blossom|Infinite Impermanence|Droll|Ghost Ogre|Ghost Belle|Nibiru|Maxx|Mulcharmy|Effect Veiler|Called by the Grave|Bystial|Dominus|Crossout|Forbidden Droplet/; // Belal: no generic hand traps / disruption
const LIM = banlist(); const limitOf = (code) => { const v = LIM.get ? LIM.get(code) : LIM[code]; return v == null ? 3 : v; };
let MAIN = t.main, EXTRA = t.extra;
if (!MAIN || !EXTRA) { const syn = synergyScores(base, LIM); const inM = new Set(base.main.map(name)), inE = new Set(base.extra.map(name));
  MAIN ||= syn.filter(x => x.zone === 'main' && !inM.has(x.name) && limitOf(x.code) > 0 && !HT.test(x.name)).slice(0, t.top ?? 30).map(x => x.name);
  EXTRA ||= syn.filter(x => x.zone !== 'main' && !inE.has(x.name) && limitOf(x.code) > 0).slice(0, t.topEd ?? 10).map(x => x.name); }
const ED_OUT = t.edOut || 'Chaos Angel';
fs.mkdirSync('decks/ct', { recursive: true });
const ydk = (main, extra) => `#main\n${main.join('\n')}\n#extra\n${extra.join('\n')}\n!side\n`;
const versions = [{ v: 'base', file: DECK }];
for (const c of MAIN) { const f = `decks/ct/m-${c.replace(/[^\w]+/g, '_').slice(0, 50)}.ydk`; fs.writeFileSync(f, ydk([...base.main, codeOf(c)], base.extra)); versions.push({ v: c, zone: 'main', file: f }); }
for (const c of EXTRA) { const ex = base.extra.slice(); const i = ex.findIndex(k => name(k) === ED_OUT); ex.splice(i >= 0 ? i : ex.length - 1, 1, codeOf(c)); const f = `decks/ct/e-${c.replace(/[^\w]+/g, '_').slice(0, 50)}.ydk`; fs.writeFileSync(f, ydk(base.main, ex)); versions.push({ v: c, zone: 'extra', file: f }); }
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const pieces = [];
// random-hands mode (t.random = N): N opening hands drawn from your list; a Main Deck candidate is shuffled into the deck at a random spot,
// so it is in the opening hand only when it lands in the top 5 (as in a real game) — same hands otherwise, so the comparison stays paired
if (t.random) { const rng = (s0) => { let x = (s0 >>> 0) || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
  t.hands = {}; t.handsFor = {}; for (let h = 0; h < t.random; h++) { const r = rng(9000 + h); const a = base.main.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; }
    const pos = Math.floor(r() * (a.length + 1)); const hb = a.slice(0, 5).map(name); const withC = (c) => { const b = a.slice(); b.splice(pos, 0, codeOf(c)); return b.slice(0, 5).map(name); };
    t.hands['r' + h] = hb; t.handsFor['r' + h] = withC; } }
for (const ver of versions) for (const [hn, hand0] of Object.entries(t.hands)) for (let o = 1; o <= ORD; o++) {
  const hand = t.random ? (ver.zone === 'main' ? t.handsFor[hn](ver.v) : hand0.slice()) : ver.zone === 'main' ? [...hand0.slice(0, 4), ver.v] : hand0.slice();
  const kinds = [{ k: 's1', x: { sseed: 4100 + o } }, { k: 's2', x: { sseed: 5200 + o } }, { k: 'open', x: { sseed: 6300 + o, open: true } }];
  if (ver.v !== 'base') kinds.push({ k: 'must', x: { sseed: 7400 + o, mustUse: `^(Activate|Normal Summon|Special Summon|Link Summon|Synchro Summon|Xyz Summon|Fusion Summon|Set Spell/Trap) ${esc(ver.v)}` } });
  for (const kd of kinds) pieces.push({ ver, hn, o, k: kd.k, task: { deck: ver.file, hand, seed: o, minutes: MIN, hints: false, learn: false, ...kd.x } }); }
console.log(`cardtest ${ID}: ${versions.length - 1} cards (${MAIN.length} Main, ${EXTRA.length} Extra) x ${Object.keys(t.hands).length} hands x ${ORD} orders = ${pieces.length} searches`);
let done = 0;
await poolDyn(pieces, Math.max(1, os.cpus().length - 1), async (p, remote) => { const so = await runNode('deepw.mjs', p.task, { remote, files: [p.task.deck], heap: 3000, est: 1.3 * MIN + 2, timeoutMin: 2 * MIN + 10 });
  const m = /RESULT (.*)/.exec(so || ''); if (m) { const r = JSON.parse(m[1]); p.v = +(r.v ?? r.score ?? 0) - (p.task.mustUse && r.usedMust ? 3 : 0); p.used = r.usedMust; p.line = r.line; } if (++done % 50 === 0) console.log(`progress ${done}/${pieces.length}`); });
const best = (v, hn, o) => { const xs = pieces.filter(p => p.ver.v === v && p.hn === hn && p.o === o && p.v != null); return xs.length ? Math.max(...xs.map(p => p.v)) : null; };
const rows = []; for (const ver of versions.slice(1)) { const d = [], per = {}; for (const hn of Object.keys(t.hands)) { const dh = []; for (let o = 1; o <= ORD; o++) { const b = best('base', hn, o), c = best(ver.v, hn, o); if (b != null && c != null) { d.push(c - b); dh.push(c - b); } } per[hn] = dh.length ? +(dh.reduce((s, x) => s + x, 0) / dh.length).toFixed(2) : null; }
  const m = d.length ? d.reduce((s, x) => s + x, 0) / d.length : 0, se = d.length > 1 ? Math.sqrt(d.reduce((s, x) => s + (x - m) ** 2, 0) / (d.length - 1) / d.length) : 0;
  const usedN = pieces.filter(p => p.ver === ver && p.k === 'must' && p.used).length;
  rows.push({ card: ver.v, zone: ver.zone, gain: +m.toFixed(2), se: +se.toFixed(2), n: d.length, per, usedInMust: usedN }); }
rows.sort((a, b) => b.gain - a.gain);
const baseRow = {}; for (const hn of Object.keys(t.hands)) { const xs = []; for (let o = 1; o <= ORD; o++) { const b = best('base', hn, o); if (b != null) xs.push(b); } baseRow[hn] = xs.length ? +(xs.reduce((s, x) => s + x, 0) / xs.length).toFixed(2) : null; }
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/${ID}.json`, JSON.stringify({ base: baseRow, rows, pieces: pieces.map(({ ver, task, ...p }) => ({ card: ver.v, hand: task.hand, ...p })) }));
if (t.random) { let md = `# Card test ${ID} (random hands)\n${new Date().toISOString()} · ${Object.keys(t.hands).length} random opening hands from your list, ${MIN} min searches, no hints, own seeds, forced use of the card\n\nList without the card: average best board ${(Object.values(baseRow).reduce((a, b) => a + (b || 0), 0) / Object.keys(baseRow).length).toFixed(2)}\n\n| card | zone | gain per hand (± se) | hands where it changed the opening hand |\n|---|---|---|---|\n`;
  for (const r of rows) { const nIn = Object.keys(t.hands).filter(h => r.zone === 'main' && JSON.stringify(t.handsFor[h](r.card)) !== JSON.stringify(t.hands[h])).length; md += `| ${r.card} | ${r.zone} | ${r.gain >= 0 ? '+' : ''}${r.gain} ± ${r.se} (n ${r.n}) | ${nIn} |\n`; }
  fs.writeFileSync(`reports/${ID}.md`, md); console.log(md); process.exit(0); }
let md = `# Card test ${ID}\n${new Date().toISOString()} · ${MIN} min searches, ${ORD} deck orders, no hints, own seeds, forced use of the card\n\nList without the card, best board per hand: ${Object.entries(baseRow).map(([h, v]) => `${h} ${v}`).join(' · ')}\n\n| card | zone | gain per hand (± se) | ${Object.keys(t.hands).join(' | ')} | forced line used it |\n|---|---|---|${Object.keys(t.hands).map(() => '---').join('|')}|---|\n`;
for (const r of rows) md += `| ${r.card} | ${r.zone} | ${r.gain >= 0 ? '+' : ''}${r.gain} ± ${r.se} (n ${r.n}) | ${Object.keys(t.hands).map(h => r.per[h]).join(' | ')} | ${r.usedInMust}/${Object.keys(t.hands).length * ORD} |\n`;
fs.writeFileSync(`reports/${ID}.md`, md); console.log(md); process.exit(0);
