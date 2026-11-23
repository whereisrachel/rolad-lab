// Going-second test over many hands: for each deck and each opponent deck, N opening hands (same seeds for every deck, so the
// comparison is paired), the opponent goes first (secondturn.mjs), you take your turn into their board.
// node secondtest.mjs --decks "decks/L2-vand3.ydk;decks/variant.ydk" --opps "o_ss_panama,o_elfnote,o_despia,o_angelechy" --n 24 --min 1 --omin 1 --id 1234
import fs from 'fs'; import os from 'os'; import path from 'path'; import { spawn } from 'child_process';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const DECKS = f('decks', 'decks/L2-vand3.ydk').split(';').filter(Boolean); const OPPS = f('opps', 'o_ss_panama,o_elfnote,o_despia,o_angelechy').split(',').filter(o => fs.existsSync(`decks/${o}.ydk`));
const N = +f('n', 24), MIN = +f('min', 1), OMIN = +f('omin', 1), ID = f('id', String(Date.now() % 100000)); const PAR = Math.max(1, Math.min(os.cpus().length - 1, Math.floor(os.freemem() / 1.5e9)));
const log = (s) => console.log(`[${new Date().toLocaleTimeString()}] ${s}`);
const jobs = []; for (const d of DECKS) for (const o of OPPS) for (let h = 0; h < N; h++) jobs.push({ deck: d, opp: o, seed: 100 + h, oppSeed: 500 + h * 7 + OPPS.indexOf(o) * 1000 });
log(`going second: ${DECKS.length} deck(s) x ${OPPS.length} opponents (${OPPS.join(', ')}) x ${N} hands = ${jobs.length} games, ${OMIN} min for their turn, ${MIN} min for yours, ${PAR} at a time`);
const res = []; let k = 0, done = 0; fs.mkdirSync('results', { recursive: true });
const one = (j) => new Promise(ok => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'secondturn.mjs', JSON.stringify({ deck: j.deck, opp: `decks/${j.opp}.ydk`, seed: j.seed, oppSeed: j.oppSeed, minutes: MIN, oppMinutes: OMIN })], { stdio: ['ignore', 'pipe', 'ignore'] });
  let o = ''; p.stdout.on('data', b => o += b); const tm = setTimeout(() => { try { p.kill(); } catch {} }, (MIN + OMIN) * 60000 * 4 + 120000); p.on('close', () => { clearTimeout(tm); const m = /SECOND (.*)/.exec(o); ok(m ? { ...j, ...JSON.parse(m[1]) } : { ...j, failed: true }); }); });
await Promise.all(Array.from({ length: PAR }, async () => { while (k < jobs.length) { const j = jobs[k++]; res.push(await one(j)); console.log(`${++done}/${jobs.length}`); if (done % 10 === 0) fs.writeFileSync(`results/second-${ID}.json`, JSON.stringify(res)); } }));
fs.writeFileSync(`results/second-${ID}.json`, JSON.stringify(res));
const ok = res.filter(r => !r.failed); const mean = (xs) => xs.length ? xs.reduce((p, q) => p + q, 0) / xs.length : 0;
const sum = (rs) => ({ n: rs.length, score: mean(rs.map(r => r.score)), broke: mean(rs.map(r => r.theirBefore > 0 ? (r.theirBefore - r.theirAfter) / r.theirBefore : 1)), clear: rs.filter(r => r.theirAfter < 0.5).length, lethal: rs.filter(r => r.lethal).length, ours: mean(rs.map(r => r.ours)), dmg: mean(rs.map(r => r.damage)), before: mean(rs.map(r => r.theirBefore)) });
let md = `# Going second ${ID}\n${new Date().toISOString()} · ${N} hands per opponent · their turn ${OMIN} min, yours ${MIN} min · ${res.length - ok.length} games failed\n\nScore = their board broken + half your board + damage/2000 + 10 for lethal. "Their board" = interruptions the scorer counts.\n\n`;
md += `| deck | opponent | games | score | their board before | broken | fully cleared | lethal | avg damage | your board after |\n|---|---|---|---|---|---|---|---|---|---|\n`;
for (const d of DECKS) { for (const o of OPPS) { const s = sum(ok.filter(r => r.deck === d && r.opp === o)); md += `| ${path.basename(d)} | ${o} | ${s.n} | ${s.score.toFixed(2)} | ${s.before.toFixed(2)} | ${(100 * s.broke).toFixed(0)}% | ${s.clear}/${s.n} | ${s.lethal}/${s.n} | ${s.dmg.toFixed(0)} | ${s.ours.toFixed(2)} |\n`; }
  const s = sum(ok.filter(r => r.deck === d)); md += `| **${path.basename(d)}** | **all** | ${s.n} | **${s.score.toFixed(2)}** | ${s.before.toFixed(2)} | ${(100 * s.broke).toFixed(0)}% | ${s.clear}/${s.n} | ${s.lethal}/${s.n} | ${s.dmg.toFixed(0)} | ${s.ours.toFixed(2)} |\n`; }
if (DECKS.length > 1) { const base = DECKS[0]; md += `\n## Paired vs ${path.basename(base)} (same hands, same opponent hands)\n`;
  for (const d of DECKS.slice(1)) { const diffs = []; for (const r of ok.filter(r => r.deck === d)) { const b = ok.find(x => x.deck === base && x.opp === r.opp && x.seed === r.seed); if (b) diffs.push(r.score - b.score); }
    const m = mean(diffs), se = diffs.length > 1 ? Math.sqrt(diffs.reduce((p, q) => p + (q - m) ** 2, 0) / (diffs.length - 1) / diffs.length) : 0; md += `- ${path.basename(d)}: ${m >= 0 ? '+' : ''}${m.toFixed(2)} ± ${se.toFixed(2)} over ${diffs.length} paired games\n`; } }
md += `\n## Best and worst games (${path.basename(DECKS[0])})\n`;
const mine = ok.filter(r => r.deck === DECKS[0]).sort((p, q) => q.score - p.score);
for (const r of [...mine.slice(0, 3), ...mine.slice(-2)]) md += `\n**${r.opp}, hand ${r.hand.join(', ')}** → score ${r.score} (their board ${r.theirBefore} → ${r.theirAfter}${r.lethal ? ', LETHAL' : ''}, damage ${r.damage})\n- Their turn: ${r.theirLine.slice(0, 14).join(' > ')}\n- Your turn: ${r.ourLine.slice(0, 30).join(' > ')}\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/second-${ID}.md`, md); log(`done -> reports/second-${ID}.md`);
