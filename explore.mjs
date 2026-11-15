// FREE card-swap explorer — no AI, no API, no cost. Runs on your PC (overnight is fine).
//   node explore.mjs <deck.ydk> --cut "Small World" [--text "Dark Magician"] [--type spell] [--attr dark] [--race spellcaster] [--level 1-4] [--name part]
//                    [--cands "Card A;Card B;..."] [--max 40] [--hands 30] [--secs 3] [--seed 11] [--out results/x.json] [--allow-locked]
// For each candidate card: swap it in for one copy of the cut card, solve the SAME opening hands (paired), report the score change.
// It is a PROXY screen: it only suggests candidates. It cannot see going second, their turn, or hand-trap play.
import fs from 'fs'; import path from 'path'; import { createRequire } from 'module';
import createCore, * as E from 'ocgcore-wasm';
import { cardDB, coreCardData, VENDOR, parseYdk, findCard, name, banlist, ROOT } from './src/cards.mjs';
import { searchCards } from './src/search.mjs';
const require = createRequire(import.meta.url);
const { makeSolver } = require('./solver/solver-core.cjs'); const H = require('./solver/helper-host.cjs');
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, 'solver', 'data.json'), 'utf8'));
const a = process.argv.slice(2); const ydk = a[0]; const o = {};
for (let i = 1; i < a.length; i++) if (a[i].startsWith('--')) { const k = a[i].slice(2); o[k] = (k === 'allow-locked') ? true : a[++i]; }
if (!ydk || !o.cut) { console.log('usage: node explore.mjs <deck.ydk> --cut "Card" [filters or --cands "A;B"] [--hands 30 --secs 3 --seed 11 --max 40]'); process.exit(1); }
const LOCKED = ['Light and Darkness Ritual', 'Black Luster Soldier - Soldier of Light and Darkness', 'Magician of Dark Chaos - Black Chaos', 'Black Chaos', 'Mind Shuffle', 'Griffoh', 'Dark Magician of Destruction'];
const deck = parseYdk(fs.readFileSync(ydk, 'utf8')); const DB = cardDB(); const lim = banlist();
const cutId = findCard(o.cut); if (!cutId || Array.isArray(cutId)) { console.log('cut card not found/ambiguous: ' + o.cut); process.exit(1); }
const cutName = name(cutId);
if (!deck.main.some(c => name(c) === cutName)) { console.log(`${cutName} is not in the main deck`); process.exit(1); }
if (LOCKED.some(n => n === cutName) && !o['allow-locked']) { console.log(`${cutName} is a LOCKED card (your standing rule 2). Pass --allow-locked only if Belal said so.`); process.exit(1); }
const cutCode = deck.main.find(c => name(c) === cutName);
const HAND = +(o.hands || 30), SECS = +(o.secs || 3), SEED = +(o.seed || 11), MAX = +(o.max || 40);

// candidates
let cands = [];
if (o.cands) cands = o.cands.split(';').map(s => s.trim()).filter(Boolean).map(s => { const c = findCard(s); if (!c || Array.isArray(c)) { console.log('skip (not found/ambiguous): ' + s); return null; } return c; }).filter(Boolean);
else { const r = searchCards({ text: o.text, type: o.type, attribute: o.attr, race: o.race, level: o.level, name: o.name, legal: true, limit: 100 }); cands = (r.cards || []).map(c => c.id); }
const EDBITS = 0x40 | 0x2000 | 0x800000 | 0x4000000;
const count = (n) => deck.main.filter(c => name(c) === n).length + deck.extra.filter(c => name(c) === n).length + deck.side.filter(c => name(c) === n).length;
cands = [...new Set(cands)].filter(c => {
  const d = DB.data.get(c); if (!d || (d.type & EDBITS)) return false; if (name(c) === cutName) return false;
  const L = lim.has(c) ? lim.get(c) : 3; if (count(name(c)) >= L) return false;
  const base = d.alias && Math.abs(d.alias - c) < 20 ? d.alias : c;
  const scripted = ['official', 'pre-release'].some(s => fs.existsSync(path.join(VENDOR, 'scripts', s, `c${base}.lua`))) || ((d.type & 0x10) && !(d.type & 0x20));
  return scripted;
}).slice(0, MAX);
if (!cands.length) { console.log('no usable candidates (all at copy limit, not scripted, or no match).'); process.exit(1); }

const sc = new Map(); const script = n => { if (sc.has(n)) return sc.get(n); let s = null; for (const p of [n, 'official/' + n, 'pre-release/' + n]) { const f = path.join(VENDOR, 'scripts', p); if (fs.existsSync(f)) { s = fs.readFileSync(f, 'utf8'); break; } } sc.set(n, s); return s; };
const keyOf = new Map(Object.entries(DATA.keys).map(([k, c]) => [c, k])); keyOf.set(14558127, 'ash'); keyOf.set(14558128, 'ash');
const KEYNAME = Object.fromEntries(Object.entries(DATA.keys).map(([k, c]) => [k, DB.text.get(c)?.name]));
const prep = cs => cs.filter(c => DATA.tp[c.key]).map(c => { const [seed, vs] = DATA.tp[c.key]; return { key: c.key, title: c.title, top: c.top, seed, variants: vs.map(v => v.map(i => DATA.toks[i].replace(/\{(\w+)\}/g, (_, r) => c.roles && c.roles[r] ? KEYNAME[c.roles[r]] : '{' + r + '}'))) }; });
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const r = rng(SEED); const hands = [];
for (let h = 0; h < HAND; h++) { const m = deck.main.slice(); for (let i = m.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [m[i], m[j]] = [m[j], m[i]]; } hands.push(m.slice(0, 5)); }

async function scoreHands(main, swapIn) { // swapIn: replace cut copies in each hand by this code (paired hands)
  const D = { main, extra: deck.extra, opp: DATA.opp, codes: DATA.codes, cdata: c => coreCardData(c), name: c => DB.text.get(c)?.name, str: (c, i) => DB.text.get(c)?.['str' + (i + 1)], sys: n => DB.sys.get(n), script };
  const S = await makeSolver(createCore, E, D); const out = [];
  for (const base of hands) {
    const hand = swapIn ? base.map(c => (name(c) === cutName ? swapIn : c)) : base;
    const keys = hand.map(c => keyOf.get(c)).filter(Boolean); let cs = []; try { cs = prep(H.solverCands(keys).cands); } catch (e) {}
    let res; try { res = S.solve(hand, cs, SECS * 1000, null); } catch (e) { res = { best: null }; } out.push(res.best ? res.best.score : 0);
  }
  return out;
}
const mean = x => x.reduce((p, q) => p + q, 0) / x.length;
const se = x => x.length < 2 ? 0 : Math.sqrt(x.reduce((p, q) => p + (q - mean(x)) ** 2, 0) / (x.length - 1)) / Math.sqrt(x.length);
console.log(`Cutting 1 ${cutName} from ${ydk}. ${cands.length} candidate(s), ${HAND} paired hands, ${SECS}s each (about ${Math.round((cands.length + 1) * HAND * SECS / 60)} min).`);
const base = await scoreHands(deck.main, null);
console.log(`baseline mean ${mean(base).toFixed(3)}  (hands containing ${cutName}: ${hands.filter(h => h.some(c => name(c) === cutName)).length}/${HAND})`);
const rows = [];
for (let i = 0; i < cands.length; i++) {
  const c = cands[i]; const main = deck.main.slice(); main[main.findIndex(x => name(x) === cutName)] = c;
  const sco = await scoreHands(main, c); const d = sco.map((v, k) => v - base[k]);
  const row = { card: name(c), code: c, mean: +mean(sco).toFixed(3), delta: +mean(d).toFixed(3), se: +se(d).toFixed(3), changedHands: d.filter(x => Math.abs(x) > 0.01).length };
  rows.push(row); console.log(`${String(i + 1).padStart(3)}/${cands.length}  ${row.card.padEnd(44)} delta ${row.delta >= 0 ? '+' : ''}${row.delta.toFixed(3)} (±${row.se.toFixed(3)})  hands changed ${row.changedHands}`);
}
rows.sort((p, q) => q.delta - p.delta);
console.log('\nRANKED (change in mean solver score when swapped in for the cut card; within ±2 SE is noise):');
rows.forEach(x => console.log(`  ${x.delta >= 0 ? '+' : ''}${x.delta.toFixed(3)} ±${x.se.toFixed(3)}  ${x.card}${Math.abs(x.delta) <= 2 * x.se ? '  (noise)' : ''}`));
console.log('\nPROXY ONLY: suggests candidates. Cannot see going second, their turn, hand-trap play. No list change without paired real games.');
const outf = o.out || path.join('results', `explore-${Date.now()}.json`); fs.mkdirSync(path.dirname(path.resolve(ROOT, outf)), { recursive: true });
fs.writeFileSync(path.resolve(ROOT, outf), JSON.stringify({ deck: ydk, cut: cutName, hands: HAND, secs: SECS, seed: SEED, baseline: +mean(base).toFixed(3), rows }, null, 1)); console.log('saved ' + outf);
