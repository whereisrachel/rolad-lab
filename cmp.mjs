// cmp.mjs (Nov 27) — head-to-head of whole decks on GitHub machines (labm). Two modes:
//  t1:    going-first boards. Hands hi = h0..h1-1, each deck deals its own shuffled order from the same seed; opponent hand trap rotates
//         none/ash/imperm/droll by hand. Unguided line search (deepw, fixed playout budget so machine speed doesn't matter).
//  games: full games via gamestest.mjs (first and/or second) against the opponent decks.
// node cmp.mjs '{"id":"h2h-t1-a","mode":"t1","decks":["decks/findlist-1100.ydk","decks/yacine-60.ydk"],"h0":0,"h1":12,"minutes":6}'
import fs from 'fs'; import os from 'os'; import { spawnSync } from 'child_process'; import { parseYdk, name } from './src/cards.mjs'; import { runNode, poolDyn } from './src/remote.mjs';
const t = JSON.parse(process.argv[2]); const ID = t.id; fs.mkdirSync('reports', { recursive: true });
if (t.mode === 'games') { const r = spawnSync(process.execPath, ['--no-warnings', 'gamestest.mjs', '--decks', t.decks.join(';'), '--opps', t.opps.join(','), '--n', String(t.n ?? 12), '--sides', t.sides ?? 'first,second', '--min', String(t.min ?? 0.75), '--omin', String(t.omin ?? 0.75), '--id', ID], { stdio: 'inherit' }); process.exit(r.status ?? 0); }
const SCN = ['none', 'ash', 'imperm', 'droll']; const rngOf = (s) => { let x = s >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const deal = (main, hi) => { const r = rngOf(1000 + hi * 7919); const p = main.slice().sort((a, b) => a - b); for (let k = p.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [p[k], p[j]] = [p[j], p[k]]; } return p; };
const jobs = []; for (let hi = t.h0; hi < t.h1; hi++) for (const deck of t.decks) jobs.push({ hi, deck });
const res = []; const NP = Math.max(1, Math.min(os.cpus().length, Math.floor(os.freemem() / 2.2e9)));
await poolDyn(jobs, NP, async (j) => { const main = parseYdk(fs.readFileSync(j.deck, 'utf8')).main; const perm = deal(main, j.hi);
  const args = { deck: j.deck, main: perm, hand: perm.slice(0, 5).map(name), minutes: t.minutes ?? 6, seed: 7 + j.hi, sseed: 20000 + j.hi, scn: SCN[j.hi % 4], hints: false, cardv: false, learn: false, ...(t.ppm ? { ppm: t.ppm } : {}) };
  const out = await runNode('deepw.mjs', args, { remote: false, heap: 2500, timeoutMin: (t.minutes ?? 6) * 3 + 5 }); const m = /RESULT (.*)/.exec(out || ''); const x = m ? JSON.parse(m[1]) : {};
  res.push({ hi: j.hi, deck: j.deck, scn: args.scn, hand: args.hand, v: x.v ?? null, line: (x.line || []).slice(0, 80) }); console.log(`${res.length}/${jobs.length} ${j.deck} hand ${j.hi} ${args.scn}: ${x.v}`);
  fs.writeFileSync(`reports/${ID}.json`, JSON.stringify(res)); });
const by = {}; for (const r of res) (by[r.deck] ||= []).push(r.v ?? 0); let md = `# ${ID}\n${t.minutes ?? 6}-min unguided searches, hands ${t.h0}-${t.h1 - 1}, traps rotate none/Ash/Imperm/Droll\n\n`;
for (const [d, v] of Object.entries(by)) md += `- ${d}: ${(v.reduce((a, b) => a + b, 0) / v.length).toFixed(2)} avg board over ${v.length} hands\n`;
fs.writeFileSync(`reports/${ID}.md`, md); console.log(md);
