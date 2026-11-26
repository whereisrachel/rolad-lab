// Full games going first where your turn 1 is the guide's line (Belal, Nov 25), against stronger opponents. Each game is played twice on the
// same deal: (a) turn 1 follows the guide line as written until something stops it (a hand trap, a face-down banish), then the search finishes;
// (b) turn 1 is the lab's own search. Paired by hand / opponent / seed.
// node games1.mjs '<json>' { id, deck, lines: { name: file with { hand, steps } }, opps, n, min, omin, turns }
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process'; import { runRemote, poolDyn } from './src/remote.mjs';
import { parseYdk, name } from './src/cards.mjs';
const t = JSON.parse(process.argv[2]); const DECK = t.deck || 'decks/findlist-1100.ydk'; const OPPS = t.opps || ['o_ss_panama', 'o_elfnote', 'o_despia', 'o_angelechy'];
const N = t.n ?? 8, MIN = t.min ?? 0.75, OMIN = t.omin ?? 2.25, TURNS = t.turns ?? 10, ID = t.id || 'g1'; const LIM = (Math.max(MIN, OMIN) * 1.5 * TURNS + 6);
const inDeck = new Map(); for (const k of parseYdk(fs.readFileSync(DECK, 'utf8')).main) inDeck.set(name(k), (inDeck.get(name(k)) || 0) + 1);
const jobs = [];
for (const [hn, file] of Object.entries(t.lines)) { const L = JSON.parse(fs.readFileSync(file, 'utf8')); const left = new Map(inDeck); const hand = [];
  for (const c of L.hand) if ((left.get(c) || 0) > 0) { hand.push(c); left.set(c, left.get(c) - 1); } // guide-hand cards that are in the list; the rest of the hand is random
  for (let s = 0; s < N; s++) for (const o of OPPS) for (const arm of ['guide', 'search']) jobs.push({ hn, arm, opp: o, seed: 300 + s, oppSeed: 900 + s * 13 + OPPS.indexOf(o) * 1000, hand, steps: L.steps }); }
const args = (j) => ({ deck: DECK, opp: `decks/${j.opp}.ydk`, seed: j.seed, oppSeed: j.oppSeed, first: 'me', minutes: MIN, oppMinutes: OMIN, maxTurns: TURNS, hand: j.hand, ...(j.arm === 'guide' ? { t1steps: j.steps } : {}) });
const local = (j) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'fullgame.mjs', JSON.stringify(args(j))], { stdio: ['ignore', 'pipe', 'ignore'] });
  let o = ''; p.stdout.on('data', b => o += b); const tm = setTimeout(() => { try { p.kill(); } catch {} }, LIM * 60000); p.on('close', () => { clearTimeout(tm); ok(o); }); });
console.log(`games1 ${ID}: ${jobs.length} games`); let done = 0;
await poolDyn(jobs, Math.max(1, os.cpus().length - 1), async (j, remote) => { let o = null;
  if (remote) { const r = await runRemote('fullgame.mjs', args(j), { files: [DECK, `decks/${j.opp}.ydk`, `data/choke-${j.opp}.json`], est: LIM * 0.6 }); o = r && r.stdout; }
  if (!o) o = await local(j); const m = /GAME (.*)/.exec(o || ''); j.r = m ? JSON.parse(m[1]) : null; if (++done % 20 === 0) console.log(`${done}/${jobs.length}`); });
const pts = (r) => r.winner === 'me' ? 1 : r.winner === 'opp' ? 0 : 0.5; const ok = jobs.filter(j => j.r);
const res = ok.map(({ steps, ...j }) => j); fs.mkdirSync('results', { recursive: true }); fs.writeFileSync(`results/${ID}.json`, JSON.stringify(res));
const rate = (a) => a.length ? a.reduce((s, j) => s + pts(j.r), 0) / a.length : NaN; const pc = (x) => isNaN(x) ? '-' : (100 * x).toFixed(0) + '%';
const paired = (f) => { const d = []; for (const j of ok.filter(j => j.arm === 'guide' && f(j))) { const b = ok.find(x => x.arm === 'search' && x.hn === j.hn && x.opp === j.opp && x.seed === j.seed); if (b) d.push(pts(j.r) - pts(b.r)); }
  const m = d.length ? d.reduce((s, x) => s + x, 0) / d.length : 0, se = d.length > 1 ? Math.sqrt(d.reduce((s, x) => s + (x - m) ** 2, 0) / (d.length - 1) / d.length) : 0; return `${m >= 0 ? '+' : ''}${(100 * m).toFixed(0)} ± ${(100 * se).toFixed(0)} pts (n ${d.length})`; };
const fol = (a) => { const v = a.map(j => { const l = (j.r.log || []).find(x => /^T1 guide line:/.test(x)); const m = l && /(\d+)\/(\d+)/.exec(l); return m ? +m[1] / +m[2] : null; }).filter(x => x != null); return v.length ? pc(v.reduce((s, x) => s + x, 0) / v.length) : '-'; };
let md = `# Guide line on turn 1, full games ${ID}\n${new Date().toISOString()} · going first · ${N} deals per hand and opponent · you ${MIN} min a turn, opponent ${OMIN} · up to ${TURNS} turns · ${jobs.length - ok.length} games failed\n\n`;
md += `| hand | opponent | guide line T1 | search T1 | guide − search (paired) | guide steps played as written |\n|---|---|---|---|---|---|\n`;
for (const hn of Object.keys(t.lines)) { for (const o of OPPS) { const g = ok.filter(j => j.hn === hn && j.opp === o); md += `| ${hn} | ${o} | ${pc(rate(g.filter(j => j.arm === 'guide')))} | ${pc(rate(g.filter(j => j.arm === 'search')))} | ${paired(j => j.hn === hn && j.opp === o)} | ${fol(g.filter(j => j.arm === 'guide'))} |\n`; }
  const g = ok.filter(j => j.hn === hn); md += `| **${hn}** | **all** | **${pc(rate(g.filter(j => j.arm === 'guide')))}** | ${pc(rate(g.filter(j => j.arm === 'search')))} | ${paired(j => j.hn === hn)} | ${fol(g.filter(j => j.arm === 'guide'))} |\n`; }
for (const o of OPPS) { const g = ok.filter(j => j.opp === o); md += `| **all** | **${o}** | **${pc(rate(g.filter(j => j.arm === 'guide')))}** | ${pc(rate(g.filter(j => j.arm === 'search')))} | ${paired(j => j.opp === o)} | |\n`; }
md += `| **all** | **all** | **${pc(rate(ok.filter(j => j.arm === 'guide')))}** | ${pc(rate(ok.filter(j => j.arm === 'search')))} | ${paired(() => true)} | ${fol(ok.filter(j => j.arm === 'guide'))} |\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/${ID}.md`, md); console.log(md); process.exit(0);
