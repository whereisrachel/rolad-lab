// node evaldeck.mjs <deck.ydk> [nHands=20] [secsPerHand=4] [seed=11] [--nohelper] [--out file.json]
// Engine line-solver score on N random 5-card hands going first vs a goldfish. Uses the guide's helper lines when available.
import fs from 'fs'; import { createRequire } from 'module';
import createCore, * as E from 'ocgcore-wasm';
import { cardDB, coreCardData, VENDOR, parseYdk } from './src/cards.mjs';
import path from 'path';
const require = createRequire(import.meta.url);
const { makeSolver } = require('./solver/solver-core.cjs');
const H = require('./solver/helper-host.cjs');
const DATA = JSON.parse(fs.readFileSync(new URL('./solver/data.json', import.meta.url)));
const [ydk, nH = '20', secs = '4', seed0 = '11'] = process.argv.slice(2);
const noHelper = process.argv.includes('--nohelper');
const deck = parseYdk(fs.readFileSync(ydk, 'utf8'));
const DB = cardDB();
const sc = new Map();
const script = n => { if (sc.has(n)) return sc.get(n); let s = null; for (const p of [`scripts/${n}`, `scripts/official/${n}`, `scripts/pre-release/${n}`]) { const f = path.join(VENDOR, p); if (fs.existsSync(f)) { s = fs.readFileSync(f, 'utf8'); break; } } sc.set(n, s); return s; };
const D = { main: deck.main, extra: deck.extra, opp: DATA.opp, codes: DATA.codes,
  cdata: c => coreCardData(c), name: c => DB.text.get(c)?.name, str: (c, i) => DB.text.get(c)?.['str' + (i + 1)], sys: n => DB.sys.get(n), script };
const S = await makeSolver(createCore, E, D);
const keyOf = new Map(Object.entries(DATA.keys).map(([k, c]) => [c, k])); keyOf.set(14558127, 'ash'); keyOf.set(14558128, 'ash');
const KEYNAME = Object.fromEntries(Object.entries(DATA.keys).map(([k, c]) => [k, D.name(c)]));
function prepCands(cands) { return cands.filter(c => DATA.tp[c.key]).map(c => { const [seed, vs] = DATA.tp[c.key];
  return { key: c.key, title: c.title, top: c.top, seed, variants: vs.map(v => v.map(i => DATA.toks[i].replace(/\{(\w+)\}/g, (_, r) => c.roles && c.roles[r] ? KEYNAME[c.roles[r]] : '{' + r + '}'))) }; }); }
function rng(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const r = rng(+seed0); const results = [];
for (let h = 0; h < +nH; h++) {
  const m = deck.main.slice(); for (let i = m.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [m[i], m[j]] = [m[j], m[i]]; }
  const hand = m.slice(0, 5); const keys = hand.map(c => keyOf.get(c)).filter(Boolean);
  let cands = []; if (!noHelper) { try { cands = prepCands(H.solverCands(keys).cands); } catch (e) { cands = []; } }
  let out; try { out = S.solve(hand, cands, +secs * 1000, null); } catch (e) { out = { best: null, err: String(e.message || e) }; }
  const rec = { h, hand: hand.map(c => D.name(c)), score: out.best ? out.best.score : null, parts: out.best ? out.best.sc.parts.map(p => p.join(' ')) : [], helper: out.helper ? out.helper.score : null, tried: out.tried, err: out.err };
  results.push(rec); console.error(h, rec.score, rec.hand.join(' / ').slice(0, 110));
}
const sc2 = results.map(x => x.score ?? 0); const mean = sc2.reduce((a, b) => a + b, 0) / sc2.length;
const sd = Math.sqrt(sc2.reduce((a, b) => a + (b - mean) ** 2, 0) / (sc2.length - 1 || 1));
const summ = { deck: ydk, n: sc2.length, mean: +mean.toFixed(3), se: +(sd / Math.sqrt(sc2.length)).toFixed(3), ge5: sc2.filter(x => x >= 5).length, ge3: sc2.filter(x => x >= 3).length, lt2: sc2.filter(x => x < 2).length };
console.log(JSON.stringify(summ));
const o = process.argv.indexOf('--out'); if (o > 0) fs.writeFileSync(process.argv[o + 1], JSON.stringify({ summ, results }, null, 1));
