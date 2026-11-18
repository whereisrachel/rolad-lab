// Deck-level test: does a change to the LIST (a card added to the Deck, or +1/-1 of a card) make better end boards?
// Every version plays the same random hands (same shuffle; an added card is shuffled in, a cut copy is taken out), each found from scratch by the line finder.
// node decktest.mjs --deck D --variants '["+Card","-Card", ...]' [--hands 22] [--min 2] [--scn none] [--id X]
import fs from 'fs'; import os from 'os'; import { spawn } from 'child_process';
import { parseYdk, findCard, name } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const ID = f('id', String(Date.now() % 100000)), H = +f('hands', 22), MIN = +f('min', 2), SCN = f('scn', 'none');
const PAR = Math.min(Math.max(1, os.cpus().length - 1), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const base = parseYdk(fs.readFileSync(f('deck', 'decks/L2-vand3.ydk'), 'utf8'));
const variants = ['base', ...JSON.parse(f('variants', '[]'))];
const code = (n) => { const c = findCard(n); const k = Array.isArray(c) ? c[0] : c; if (!k || name(k) !== n) throw new Error('unknown card: ' + n); return k; };
const rngOf = (seed) => { let x = seed >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
// one shuffle of the base list per hand; a variant applies its change to that same shuffle
const deal = (v, hi) => { const r = rngOf(1000 + hi * 7919); const perm = base.main.slice(); for (let k = perm.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [perm[k], perm[j]] = [perm[j], perm[k]]; }
  if (v !== 'base') { const sign = v[0], n = v.slice(1); const c = code(n); const r2 = rngOf(5000 + hi * 104729 + n.length * 31);
    if (sign === '+') perm.splice(Math.floor(r2() * (perm.length + 1)), 0, c);
    else { const at = perm.map((k, i) => name(k) === n ? i : -1).filter(i => i >= 0); if (!at.length) throw new Error('not in list: ' + n); perm.splice(at[Math.floor(r2() * at.length)], 1); } }
  return perm; };
fs.mkdirSync('decks/_explore', { recursive: true }); const deckFile = `decks/_explore/dt-${ID}.ydk`; fs.writeFileSync(deckFile, '#main\n' + base.main.join('\n') + '\n#extra\n' + base.extra.join('\n') + '\n!side\n');
const tasks = []; for (let hi = 0; hi < H; hi++) for (const ver of variants) { const perm = deal(ver, hi); tasks.push({ ver, hi, main: perm, hand: perm.slice(0, 5).map(c => name(c)) }); }
console.log(`deck test ${ID}: ${variants.length} versions x ${H} hands, ${MIN} min each, opponent ${SCN}, ${PAR} at a time`);
const res = []; let done = 0;
const runOne = (t) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify({ deck: deckFile, main: t.main, hand: t.hand, minutes: MIN, seed: 7 + t.hi, scn: SCN, hintsFile: 'data/hints-' + f('deck', 'decks/L2-vand3.ydk').replace(/^.*[\\/]/, '').replace(/\.ydk$/, '') + '.json' })], { stdio: ['ignore', 'pipe', 'ignore'] }); let out = '';
  p.stdout.on('data', b => out += b); p.on('close', () => { const m = /RESULT (.*)/.exec(out); const r = m ? JSON.parse(m[1]) : { v: 0, crash: true }; res.push({ ...t, ...r }); done++; console.log(`${done}/${tasks.length}`); ok(); }); });
const q = tasks.slice(); await Promise.all(Array.from({ length: PAR }, async () => { while (q.length) await runOne(q.shift()); }));
const crashes = res.filter(r => r.crash).length; const by = {}; for (const r of res) (by[r.ver] ||= {})[r.hi] = r;
const rows = variants.map(ver => { const rs = Object.values(by[ver] || {}); const mean = rs.reduce((s, r) => s + r.v, 0) / Math.max(1, rs.length);
  const d = rs.filter(r => by.base[r.hi]).map(r => r.v - by.base[r.hi].v); const dm = d.reduce((s, x) => s + x, 0) / Math.max(1, d.length); const sd = Math.sqrt(d.reduce((s, x) => s + (x - dm) ** 2, 0) / Math.max(1, d.length - 1));
  const card = ver === 'base' ? null : ver.slice(1); const usedIn = card ? rs.filter(r => (r.line || []).some(l => l.includes(card))) : [];
  const ex = card && ver[0] === '+' ? usedIn.sort((p, q2) => (q2.v - by.base[q2.hi].v) - (p.v - by.base[p.hi].v))[0] : null;
  return { ver, n: rs.length, mean, dm, se: sd / Math.sqrt(Math.max(1, d.length)), better: d.filter(x => x >= 1).length, worse: d.filter(x => x <= -1).length, used: usedIn.length, ex }; });
let md = `# Deck test ${ID}: does changing the list make better end boards?\n${new Date().toISOString()} · ${H} hands per version (same shuffles) · line finder ${MIN} min per hand from scratch · opponent: ${SCN} · crashes ${crashes}\n\n`;
md += `Check: "+1 Waboku" does nothing, so it should land within about ±2 x its error of 0. If it doesn't, the test is too noisy to trust.\n\n| version | average board | vs your list | ± | hands better by 1+ | hands worse by 1+ | added card used |\n|---|---|---|---|---|---|---|\n`;
for (const r of rows) md += `| ${r.ver === 'base' ? 'your list' : r.ver.replace(/^\+/, '+1 ').replace(/^-/, '-1 ')} | ${r.mean.toFixed(2)} | ${r.ver === 'base' ? '' : (r.dm >= 0 ? '+' : '') + r.dm.toFixed(2)} | ${r.ver === 'base' ? '' : r.se.toFixed(2)} | ${r.ver === 'base' ? '' : r.better + '/' + r.n} | ${r.ver === 'base' ? '' : r.worse + '/' + r.n} | ${r.ver[0] === '+' ? r.used + '/' + r.n + ' games' : ''} |\n`;
md += '\n## Where an added card was used (best example)\n'; for (const r of rows) if (r.ex) md += `\n**${r.ver}**: hand ${r.ex.hand.join(', ')} → your list ${by.base[r.ex.hi].v.toFixed(2)}, with it ${r.ex.v.toFixed(2)}\n${(r.ex.line || []).filter(l => /Summon|Activate|Selected/.test(l)).slice(0, 30).join(' > ')}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/decktest-${ID}.md`, md); console.log(md.split('\n').slice(0, 14).join('\n'));
