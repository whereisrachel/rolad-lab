// node oppstress.mjs <deck.ydk> [nHands=30] [secs=3] [seed=11] [--out file.json]
// Same random hands, solved against several opponent hand-trap setups. Shows how much each one costs the opening.
// Opponent = scripted: plays the listed hand traps whenever the engine lets it chain them (first option, never onto its own link).
import fs from 'fs'; import path from 'path'; import { createRequire } from 'module';
import createCore, * as E from 'ocgcore-wasm';
import { cardDB, coreCardData, VENDOR, parseYdk, findCard } from './src/cards.mjs';
const require = createRequire(import.meta.url);
const { makeSolver } = require('./solver/solver-core.cjs'); const H = require('./solver/helper-host.cjs');
const DATA = JSON.parse(fs.readFileSync(new URL('./solver/data.json', import.meta.url)));
const [ydk, nH = '30', secs = '3', seed0 = '11'] = process.argv.slice(2);
const deck = parseYdk(fs.readFileSync(ydk, 'utf8')); const DB = cardDB(); const sc = new Map();
const script = n => { if (sc.has(n)) return sc.get(n); let s = null; for (const p of [n, 'official/' + n, 'pre-release/' + n]) { const f = path.join(VENDOR, 'scripts', p); if (fs.existsSync(f)) { s = fs.readFileSync(f, 'utf8'); break; } } sc.set(n, s); return s; };
const code = n => { const c = findCard(n); if (!c || Array.isArray(c)) throw new Error('card? ' + n); return c; };
const FILL = DATA.opp[DATA.opp.length - 1];
const SCENARIOS = [ ['none', []], ['Ash', ['Ash Blossom & Joyous Spring']], ['Droll', ['Droll & Lock Bird']], ['Imperm', ['Infinite Impermanence']],
  ['Nibiru', ['Nibiru, the Primal Being']], ['Ash+Imperm', ['Ash Blossom & Joyous Spring', 'Infinite Impermanence']], ['Ash+Droll+Imperm', ['Ash Blossom & Joyous Spring', 'Droll & Lock Bird', 'Infinite Impermanence']] ];
const D = { main: deck.main, extra: deck.extra, opp: DATA.opp, oppHand: [], oppScript: null, codes: DATA.codes,
  cdata: c => coreCardData(c), name: c => DB.text.get(c)?.name, str: (c, i) => DB.text.get(c)?.['str' + (i + 1)], sys: n => DB.sys.get(n), script };
const S = await makeSolver(createCore, E, D);
const keyOf = new Map(Object.entries(DATA.keys).map(([k, c]) => [c, k])); keyOf.set(14558127, 'ash'); keyOf.set(14558128, 'ash');
const KEYNAME = Object.fromEntries(Object.entries(DATA.keys).map(([k, c]) => [k, D.name(c)]));
const prep = cands => cands.filter(c => DATA.tp[c.key]).map(c => { const [seed, vs] = DATA.tp[c.key]; return { key: c.key, title: c.title, top: c.top, seed, variants: vs.map(v => v.map(i => DATA.toks[i].replace(/\{(\w+)\}/g, (_, r) => c.roles && c.roles[r] ? KEYNAME[c.roles[r]] : '{' + r + '}'))) }; });
function rng(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const r = rng(+seed0); const hands = [];
for (let h = 0; h < +nH; h++) { const m = deck.main.slice(); for (let i = m.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [m[i], m[j]] = [m[j], m[i]]; } hands.push(m.slice(0, 5)); }
const out = {};
for (const [label, names] of SCENARIOS) {
  const cs = names.map(code); D.oppHand = cs; D.opp = [...cs, ...Array(40 - cs.length).fill(FILL)];
  D.oppScript = names.map(n => new RegExp('^Activate ' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split(',')[0], 'i'));
  const sc2 = [];
  for (const hand of hands) {
    const keys = hand.map(c => keyOf.get(c)).filter(Boolean); let cands = []; try { cands = prep(H.solverCands(keys).cands); } catch (e) {}
    let o; try { o = S.solve(hand, cands, +secs * 1000, null); } catch (e) { o = { best: null }; } sc2.push(o.best ? o.best.score : 0);
  }
  const mean = sc2.reduce((a, b) => a + b, 0) / sc2.length;
  out[label] = { mean: +mean.toFixed(2), ge5: sc2.filter(x => x >= 5).length, ge3: sc2.filter(x => x >= 3).length, lt2: sc2.filter(x => x < 2).length, scores: sc2.map(x => +x.toFixed(2)) };
  console.log(label.padEnd(18), 'mean', out[label].mean, ' >=5:', out[label].ge5 + '/' + sc2.length, ' >=3:', out[label].ge3, ' <2:', out[label].lt2);
}
const o = process.argv.indexOf('--out'); if (o > 0) fs.writeFileSync(process.argv[o + 1], JSON.stringify(out, null, 1));
