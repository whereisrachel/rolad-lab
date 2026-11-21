// Learn card values for a list: for each card, the best board the line finder reaches from that card + 4 blanks (hand traps),
// minus the board from 5 blanks. Saved as data/cardv-<list>.json; the line finder then prefers searching high-value cards
// from the Deck (e.g. Vidolium -> Terminus because Terminus alone reaches Medius). Self-taught: no guide lines used.
// node cardvalue.mjs --deck D [--min 1.5] [--passes 2] [--cards "A;B"] (extra cards, e.g. candidates not in the list)
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
import { parseYdk, name } from './src/cards.mjs'; import { cardDB } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const deckPath = f('deck', 'decks/L2-vand3.ydk'), MIN = +f('min', 1.5), PASSES = +f('passes', 2);
const PAR = Math.min(+f('par', Math.max(1, os.cpus().length - 1)), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const out = f('out', 'data/cardv-' + path.basename(deckPath).replace(/\.ydk$/, '') + '.json');
const deck = parseYdk(fs.readFileSync(deckPath, 'utf8'));
const D = cardDB(); const textOf = (n) => { for (const [c] of D.data) if (name(c) === n) return (D.text.get(c) || {}).desc || ''; return ''; };
const isHT = (n) => (/\(Quick Effect\): You can (discard|send) this card/i.test(textOf(n)) && /(negate|destroy|opponent's hand|activates)/i.test(textOf(n))) || /^Infinite Impermanence$/.test(n);
const BL = ['Ash Blossom & Joyous Spring', 'Ash Blossom & Joyous Spring', 'Droll & Lock Bird', 'Ghost Ogre & Snow Rabbit'];
const extra = String(f('cards', '')).split(';').map(s => s.trim()).filter(Boolean);
const cards = [...new Set([...deck.main.map(c => name(c)), ...extra])].filter(n => !isHT(n));
const BK = 2; // how the blank hand is defined; values measured another way are not mixed in
let prev = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')) : { v: {} }; if (prev.bk !== BK) prev = { v: {} };
const run = (hand, cvFile) => new Promise(ok => { const t = { deck: deckPath, hand, minutes: MIN, seed: 7, sseed: 1 }; if (cvFile) t.cardvFile = cvFile; else t.cardv = false;
  const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(t)], { stdio: ['ignore', 'pipe', 'ignore'] }); let o = '';
  p.stdout.on('data', b => o += b); p.on('close', () => { const m = /RESULT (.*)/.exec(o); ok(m ? JSON.parse(m[1]).v : 0); }); });
const bonusOf = (v, base) => { const b = {}; for (const [n, x] of Object.entries(v)) { const y = Math.min(3, Math.max(0, (x - base) / 4)); if (y > 0.05) b[n] = +y.toFixed(2); } return b; };
const tmp = out.replace(/\.json$/, '.tmp.json'); let cur = fs.existsSync(out) && prev.bk === BK ? out : null; // already-learned values guide the first pass
for (let pass = 1; pass <= PASSES; pass++) {
  console.log(`card values for ${deckPath}: pass ${pass}/${PASSES}, ${cards.length} cards + blanks, ${MIN} min each, ${PAR} at a time`);
  const jobs = [['__base', [...BL, 'Ash Blossom & Joyous Spring']], ...cards.map(n => [n, [n, ...BL]])]; const v = {}; let k = 0, done = 0;
  await Promise.all(Array.from({ length: PAR }, async () => { while (k < jobs.length) { const [n, h] = jobs[k++]; v[n] = await run(h, cur); done++; console.log(`${done}/${jobs.length}`); } }));
  const base0 = v.__base; delete v.__base; const n0 = prev.n || {}; // running average over refreshes: each new measurement counts, old ones aren't thrown away
  const avg = (o, x, k) => o === undefined ? x : (o * Math.min(k, 4) + x) / (Math.min(k, 4) + 1);
  const base = pass === PASSES && prev.base !== undefined ? avg(prev.base, base0, n0.__base || 1) : base0; const vv = { ...prev.v }; const nn = { ...n0 };
  for (const [n, x] of Object.entries(v)) { vv[n] = pass === PASSES ? avg(prev.v[n], x, n0[n] || 1) : x; if (pass === PASSES) nn[n] = (n0[n] || (prev.v[n] !== undefined ? 1 : 0)) + 1; } if (pass === PASSES) nn.__base = (n0.__base || (prev.base !== undefined ? 1 : 0)) + 1;
  const res = { bk: BK, base, v: vv, n: nn, bonus: {} }; res.bonus = bonusOf(res.v, base);
  fs.writeFileSync(tmp, JSON.stringify(res)); cur = tmp;
  if (pass === PASSES) { fs.mkdirSync('data', { recursive: true }); fs.writeFileSync(out, JSON.stringify(res)); fs.unlinkSync(tmp);
    console.log(`card values saved -> ${out} (blanks ${base.toFixed(2)})`); for (const [n, x] of Object.entries(res.v).sort((p, q) => q[1] - p[1])) console.log(`  ${x.toFixed(2)}  ${n}`); }
}
