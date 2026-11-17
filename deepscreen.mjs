// Deep card screen: each candidate gets its own lines found by the line finder (no guide lines, no saved lines), on the same hands as a control.
// node deepscreen.mjs --deck D [--plant "Card"] [--hands 15] [--min 1.5] [--cands 40] [--edcands 10] [--par N] [--seed S] [--id X]
//   --plant: remove every copy of a card we KNOW is good (replaced by a do-nothing card) and check the screen finds it again.
import fs from 'fs'; import os from 'os'; import { spawn } from 'child_process';
import { parseYdk, findCard, name, banlist } from './src/cards.mjs'; import { synergyScores } from './src/synergy.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const SCNS = String(f('scn', 'none')).split(',').filter(Boolean); const scnOf = (hi) => SCNS[hi % SCNS.length];
const ID = f('id', String(Date.now() % 100000)), H = +f('hands', 15), MIN = +f('min', 1.5), K = +f('cands', 40), KE = +f('edcands', 10), PLANT = f('plant', null), DIVS = f('divs', '6,1.5');
const PAR = Math.min(+f('par', Math.max(1, os.cpus().length - 1)), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const CONTROL = 'Waboku', EDSLOT = f('edslot', 'Dark Magician of Destruction');
const code = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
const D = parseYdk(fs.readFileSync(f('deck', 'decks/ROLAD-L2.ydk'), 'utf8'));
let planted = 0; if (PLANT) { D.main = D.main.map(c => { if (name(c) === PLANT) { planted++; return code(CONTROL); } return c; }); if (!planted) { console.log('plant card not in deck: ' + PLANT); process.exit(1); } }
const ydk = (d) => '#main\n' + d.main.join('\n') + '\n#extra\n' + d.extra.join('\n') + '\n!side\n';
fs.mkdirSync('decks/_explore', { recursive: true }); const baseDeck = `decks/_explore/ds-${ID}.ydk`; fs.writeFileSync(baseDeck, ydk(D));
// candidates: connected to the deck by text (what can reach it / what it names)
const syn = synergyScores(D, banlist()); const main = syn.filter(x => x.zone === 'main'), ed = syn.filter(x => x.zone === 'ed');
const cands = [...main.slice(0, K), ...ed.slice(0, KE)];
const plantRank = PLANT ? main.findIndex(x => x.name === PLANT) + 1 : null;
console.log(`deep screen ${ID}: ${syn.length} connected cards of all legal cards; testing ${cands.length} (main ${Math.min(K, main.length)}, Extra Deck ${Math.min(KE, ed.length)})${PLANT ? `; planted ${PLANT} x${planted} removed, ranked #${plantRank} by connection` : ''}; ${H} hands, ${MIN} min each, ${PAR} at a time`);
// hands: random 5-card hands from the (planted) list, same hands for every candidate
let x = +f('seed', 777) >>> 0; const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296;
const deal = () => { const idx = D.main.map((_, k) => k); for (let k = idx.length - 1; k > 0; k--) { const j = Math.floor(rnd() * (k + 1)); [idx[k], idx[j]] = [idx[j], idx[k]]; } return idx.slice(0, 5).map(i => name(D.main[i])); };
let hands = []; const WEAK = +f('weak', 0), POOLN = +f('pool', 100), PREMIN = +f('premin', 1), CUT = +f('cut', 7);
const runW = (t, min) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify({ deck: baseDeck, hand: t.hand, minutes: min, seed: 7 + t.hi, scn: SCNS[0] })], { stdio: ['ignore', 'pipe', 'ignore'] }); let out = ''; p.stdout.on('data', b => out += b); p.on('close', () => { const m = /RESULT (.*)/.exec(out); ok(m ? JSON.parse(m[1]).v : 0); }); });
if (WEAK > 0) { // weak hands only: deal POOLN hands, play each once, keep the WEAK lowest that end under 7 (where a missing piece shows)
  const pool = Array.from({ length: POOLN }, deal); const sc = new Array(POOLN); let k = 0, dn = 0; console.log(`dealing ${POOLN} hands to find weak ones`);
  await Promise.all(Array.from({ length: PAR }, async () => { while (k < POOLN) { const i = k++; sc[i] = await runW({ hand: pool[i], hi: 1000 + i }, PREMIN); dn++; if (dn % 10 === 0) console.log(`pre ${dn}/${POOLN}`); } }));
  const order = pool.map((h, i) => ({ h, v: sc[i] })).filter(x => x.v < CUT).sort((a, b) => a.v - b.v).slice(0, WEAK); hands = order.map(x => x.h);
  console.log(`weak hands: ${order.length} of ${POOLN} under ${CUT} (kept ${hands.length}; mean ${(order.reduce((s, x) => s + x.v, 0) / Math.max(1, order.length)).toFixed(2)})`);
} else for (let i = 0; i < H; i++) hands.push(deal());
const HN = hands.length;
// Extra Deck candidates: own deck file with the candidate in place of one Extra Deck card
const edDeck = (c) => { const p = `decks/_explore/ds-${ID}-ed-${c.code}.ydk`; if (!fs.existsSync(p)) { const e = D.extra.slice(); const i = e.findIndex(k => name(k) === EDSLOT); e[i >= 0 ? i : e.length - 1] = c.code; fs.writeFileSync(p, ydk({ main: D.main, extra: e })); } return p; };
const tasks = []; for (let hi = 0; hi < HN; hi++) tasks.push({ ci: -1, hi, deck: baseDeck, hand: [...hands[hi], CONTROL] });
cands.forEach((c, ci) => { for (let hi = 0; hi < HN; hi++) tasks.push({ ci, hi, deck: c.zone === 'ed' ? edDeck(c) : baseDeck, hand: [...hands[hi], c.zone === 'ed' ? CONTROL : c.name] }); });
const res = []; let done = 0; const live = 'data/explore-live.json';
const rank = () => { const ctl = {}; for (const r of res) if (r.ci === -1) ctl[r.hi] = r.v; const by = {};
  for (const r of res) if (r.ci >= 0 && ctl[r.hi] !== undefined) (by[r.ci] ||= []).push(r);
  return Object.entries(by).map(([ci, rs]) => { const c = cands[+ci]; const g = rs.map(r => r.v - ctl[r.hi]); const m = g.reduce((s, v) => s + v, 0) / g.length; const sd = Math.sqrt(g.reduce((s, v) => s + (v - m) ** 2, 0) / Math.max(1, g.length - 1));
    const used = c.zone === 'ed' ? rs.filter(r => (r.line || []).some(l => l.includes(c.name))).length : rs.filter(r => r.used && r.used[5]).length;
    const best = rs.slice().sort((p, q) => (q.v - ctl[q.hi]) - (p.v - ctl[p.hi]))[0];
    const bys = {}; for (const r of rs) { const k = scnOf(r.hi); (bys[k] ||= []).push(r.v - ctl[r.hi]); } const byScn = Object.fromEntries(Object.entries(bys).map(([k, a]) => [k, +(a.reduce((x, y) => x + y, 0) / a.length).toFixed(2)]));
    return { name: c.name, zone: c.zone, why: c.why, byScn, n: rs.length, gain: +m.toFixed(2), se: +(sd / Math.sqrt(g.length)).toFixed(2), improved: g.filter(v => v >= 1).length, used, ex: best ? { hand: hands[best.hi], before: ctl[best.hi], after: best.v, line: best.line } : null }; })
    .sort((p, q) => q.gain - p.gain); };
const writeLive = () => { const rows = rank(); try { fs.writeFileSync(live, JSON.stringify({ run: ID, at: new Date().toISOString(), done, total: tasks.length, cardsDone: rows.filter(r => r.n === HN).length, cards: cands.length, control: +(res.filter(r => r.ci === -1).reduce((s, r) => s + r.v, 0) / Math.max(1, res.filter(r => r.ci === -1).length)).toFixed(2), plant: PLANT, rows: rows.slice(0, 60).map(r => ({ name: r.name, zone: r.zone, done: r.n, of: HN, rescued: r.improved, gain: r.gain })) })); } catch {} };
const runOne = (t) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify({ deck: t.deck, hand: t.hand, minutes: MIN, divs: DIVS, seed: 7 + t.hi, scn: scnOf(t.hi) })], { stdio: ['ignore', 'pipe', 'ignore'] }); let out = '';
  p.stdout.on('data', b => out += b); p.on('close', () => { const m = /RESULT (.*)/.exec(out); const r = m ? JSON.parse(m[1]) : { v: 0, crash: true }; res.push({ ...t, ...r }); done++; console.log(`${done}/${tasks.length}`); writeLive(); ok(); }); });
const q = tasks.slice(); await Promise.all(Array.from({ length: PAR }, async () => { while (q.length) await runOne(q.shift()); }));
const rows = rank(); const ctlMean = res.filter(r => r.ci === -1).reduce((s, r) => s + r.v, 0) / HN; const crashes = res.filter(r => r.crash).length;
let md = `# Deep card screen ${ID}\n${new Date().toISOString()} · ${HN} ${WEAK ? 'weak ' : ''}hands × ${cands.length + 1} (control + candidates), line finder ${MIN} min per hand, no guide lines or saved lines · opponent: ${SCNS.join(' / ')} (rotating by hand) · crashes ${crashes}\n\n`;
if (PLANT) { const pr = rows.findIndex(r => r.name === PLANT) + 1; md += `**Planted-card test: ${PLANT} removed from the list. ${pr && pr <= 5 ? 'PASS' : 'FAIL'}: it ranked #${pr || '-'} of ${rows.length} on results (#${plantRank} on connection before testing). Pass = top 5.**\n\n`; }
md += `Control (same hand + a do-nothing card): mean ${ctlMean.toFixed(2)}. Gain = candidate minus control on the same hand (± is the standard error).\n\n| # | card | where | gain | ± | by opponent hand trap | hands improved by 1+ | used | why it was picked |\n|---|---|---|---|---|---|---|---|---|\n`;
rows.forEach((r, i) => { md += `| ${i + 1} | ${r.name} | ${r.zone} | ${r.gain >= 0 ? '+' : ''}${r.gain.toFixed(2)} | ${r.se.toFixed(2)} | ${Object.entries(r.byScn || {}).map(([k, v]) => k + ' ' + (v >= 0 ? '+' : '') + v.toFixed(2)).join(', ')} | ${r.improved}/${r.n} | ${r.used}/${r.n} | ${(r.why || []).join('; ')} |\n`; });
md += '\n## Best example per top card\n'; for (const r of rows.slice(0, 6)) if (r.ex) md += `\n**${r.name}**: ${r.ex.hand.join(', ')} → control ${r.ex.before.toFixed(2)}, with it ${r.ex.after.toFixed(2)}\n${(r.ex.line || []).filter(l => /Summon|Activate/.test(l)).slice(0, 25).join(' > ')}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/deepscreen-${ID}.md`, md); console.log(md.split('\n').slice(0, 6).join('\n'));
