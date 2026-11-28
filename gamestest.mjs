// Full games over many hands (Belal, Nov 24): for each deck, each opponent deck and each side (you first / you second), N games played
// to the end (fullgame.mjs). Same seeds for every deck, so the comparison is paired. Reports win rates.
// node gamestest.mjs --decks "decks/a.ydk;decks/b.ydk" --opps "o_ss_panama,o_elfnote" --n 24 --sides "first,second" --min 0.75 --omin 0.75 --turns 10 --id 1234
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const DECKS = f('decks', 'decks/findlist-1100.ydk').split(';').filter(Boolean); const OPPS = f('opps', 'o_ss_panama,o_elfnote,o_despia,o_angelechy').split(',').filter(o => fs.existsSync(`decks/${o}.ydk`));
const SIDES = f('sides', 'first,second').split(',').filter(s => s === 'first' || s === 'second');
const N = +f('n', 24), MIN = +f('min', 0.75), OMIN = +f('omin', 0.75), TURNS = +f('turns', 10), ID = f('id', String(Date.now() % 100000)); const PAR = Math.max(1, Math.min(os.cpus().length - 1, Math.floor(os.freemem() / 1.5e9)));
const log = (s) => console.log(`[${new Date().toLocaleTimeString()}] ${s}`);
const jobs = []; const H0 = +f('h0', 0); for (let h = H0; h < H0 + N; h++) for (const o of OPPS) for (const side of SIDES) for (const d of DECKS) jobs.push({ deck: d, opp: o, side, seed: 100 + h, oppSeed: 500 + h * 7 + OPPS.indexOf(o) * 1000 });
log(`full games: ${DECKS.length} deck(s) x ${OPPS.length} opponents x ${SIDES.join('/')} x ${N} = ${jobs.length} games, up to ${TURNS} turns, ${MIN} / ${OMIN} min per turn, ${PAR} at a time`);
const args = (j) => ({ deck: j.deck, opp: `decks/${j.opp}.ydk`, seed: j.seed, oppSeed: j.oppSeed, first: j.side === 'first' ? 'me' : 'opp', minutes: MIN, oppMinutes: OMIN, maxTurns: TURNS });
const LIM = (Math.max(MIN, OMIN) * 1.5 * TURNS + 6) * 60000;
const one = (j) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'fullgame.mjs', JSON.stringify(args(j))], { stdio: ['ignore', 'pipe', 'ignore'] });
  let o = ''; p.stdout.on('data', b => o += b); const tm = setTimeout(() => { try { p.kill(); } catch {} }, LIM); p.on('close', () => { clearTimeout(tm); const m = /GAME (.*)/.exec(o); ok(m ? { ...j, ...JSON.parse(m[1]) } : { ...j, failed: true }); }); });
const { runRemote, helperSlots } = await import('./src/remote.mjs'); let HS = a.includes('--nohelpers') ? 0 : await helperSlots(), hsAt = Date.now(); if (HS) log(`helper PCs add ${HS} cores`);
const two = async (j) => { const r = await runRemote('fullgame.mjs', args(j), { files: [j.deck, `decks/${j.opp}.ydk`, `data/choke-${j.opp}.json`], timeoutMs: LIM + 5 * 60000 }); const m = r && /GAME (.*)/.exec(r.stdout); return m ? { ...j, ...JSON.parse(m[1]) } : one(j); };
const helperOk = async (w) => { if (a.includes('--nohelpers')) return false; if (Date.now() - hsAt > 120000) { hsAt = Date.now(); HS = await helperSlots(); } return w < HS; };
const res = []; let k = 0, done = 0; fs.mkdirSync('results', { recursive: true });
const save = (r) => { res.push(r); console.log(`${++done}/${jobs.length}`); if (done % 10 === 0) fs.writeFileSync(`results/games-${ID}.json`, JSON.stringify(res)); };
await Promise.all([...Array.from({ length: PAR }, async () => { while (k < jobs.length) save(await one(jobs[k++])); }),
  ...Array.from({ length: 64 }, async (_, w) => { while (k < jobs.length) { if (!(await helperOk(w))) { await new Promise(r => setTimeout(r, 30000)); continue; } if (k >= jobs.length) break; save(await two(jobs[k++])); } })]);
fs.writeFileSync(`results/games-${ID}.json`, JSON.stringify(res));
const ok = res.filter(r => !r.failed); const pts = (r) => r.winner === 'me' ? 1 : r.winner === 'opp' ? 0 : 0.5;
const sum = (rs) => { const n = rs.length; const w = rs.filter(r => r.winner === 'me').length, l = rs.filter(r => r.winner === 'opp').length; return { n, w, l, d: n - w - l, rate: n ? rs.reduce((p, r) => p + pts(r), 0) / n : 0, turns: n ? rs.reduce((p, r) => p + (r.turns || 0), 0) / n : 0 }; };
const pc = (x) => (100 * x).toFixed(0) + '%';
let md = `# Full games ${ID}\n${new Date().toISOString()} · ${N} games per opponent and side · up to ${TURNS} turns · ${MIN} min per turn (opponent ${OMIN}) · ${res.length - ok.length} games failed\n\nEach game is played to the end: 0 LP or a deck out. At the turn limit the player clearly ahead (LP and board) gets the win, otherwise it counts as half. Win rate counts a draw as half.\n\n`;
md += `| deck | side | opponent | games | win rate | W / L / undecided | avg turns |\n|---|---|---|---|---|---|---|\n`;
for (const d of DECKS) { for (const side of SIDES) { for (const o of OPPS) { const s = sum(ok.filter(r => r.deck === d && r.side === side && r.opp === o)); md += `| ${path.basename(d)} | ${side} | ${o} | ${s.n} | ${pc(s.rate)} | ${s.w} / ${s.l} / ${s.d} | ${s.turns.toFixed(1)} |\n`; }
    const s = sum(ok.filter(r => r.deck === d && r.side === side)); md += `| **${path.basename(d)}** | **${side}** | **all** | ${s.n} | **${pc(s.rate)}** | ${s.w} / ${s.l} / ${s.d} | ${s.turns.toFixed(1)} |\n`; }
  const s = sum(ok.filter(r => r.deck === d)); md += `| **${path.basename(d)}** | **both** | **all** | ${s.n} | **${pc(s.rate)}** | ${s.w} / ${s.l} / ${s.d} | ${s.turns.toFixed(1)} |\n`; }
if (DECKS.length > 1) { const base = DECKS[0]; md += `\n## Paired vs ${path.basename(base)} (same hands, same opponent hands): win-rate difference\n`;
  for (const d of DECKS.slice(1)) { for (const side of [...SIDES, 'both']) { const diffs = []; for (const r of ok.filter(r => r.deck === d && (side === 'both' || r.side === side))) { const b = ok.find(x => x.deck === base && x.opp === r.opp && x.seed === r.seed && x.side === r.side); if (b) diffs.push(pts(r) - pts(b)); }
      const m = diffs.length ? diffs.reduce((p, q) => p + q, 0) / diffs.length : 0, se = diffs.length > 1 ? Math.sqrt(diffs.reduce((p, q) => p + (q - m) ** 2, 0) / (diffs.length - 1) / diffs.length) : 0;
      md += `- ${path.basename(d)}, ${side}: ${m >= 0 ? '+' : ''}${(100 * m).toFixed(1)} ± ${(100 * se).toFixed(1)} points over ${diffs.length} paired games\n`; } } }
md += `\n## Example games (${path.basename(DECKS[0])})\n`;
for (const r of ok.filter(r => r.deck === DECKS[0]).slice(0, 4)) md += `\n**${r.opp}, you ${r.side}, hand ${(r.hand || []).join(', ')}** → ${r.winner === 'me' ? 'WIN' : r.winner === 'opp' ? 'LOSS' : 'undecided'} (${r.how}, turn ${r.turns}, LP ${r.lp.join(' / ')})\n${(r.log || []).map(l => '- ' + l).join('\n')}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/games-${ID}.md`, md); log(`done -> reports/games-${ID}.md`);
