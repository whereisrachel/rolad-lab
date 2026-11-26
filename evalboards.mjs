// Learned board scoring, step 1 (Belal, Nov 26): play the opponent's turn into many of your end boards, against current tournament decks
// with extra thinking time, and record board features + result (margin = what you still have minus what they end on, -10 if they OTK).
// Then learn.mjs fits the scoring from these results and checks it against the hand-set interruption count (cross-validated).
// node evalboards.mjs '{ id, dir: "lines/evalset", opps: [...], seeds: 1, minutes: 1.5, list: "findlist-1100" }'
import fs from 'fs'; import os from 'os'; import { spawn } from 'child_process'; import { runNode, poolDyn } from './src/remote.mjs';
const t = JSON.parse(process.argv[2]); const ID = t.id || 'eb'; const DIR = t.dir || 'lines/evalset'; const LIST = t.list || 'findlist-1100';
const OPPS = t.opps || ['o26_elfnote', 'o26_blitzclique', 'o26_typhoon', 'o26_ladr', 'o_angelechy']; const MIN = t.minutes ?? 1.5, SEEDS = t.seeds ?? 1;
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.json')).sort();
const pieces = []; files.forEach((f, i) => OPPS.forEach((o, j) => { for (let s = 0; s < SEEDS; s++) pieces.push({ f: `${DIR}/${f}`, o, oppSeed: 5000 + 97 * i + 31 * j + 1000 * s }); }));
console.log(`evalboards ${ID}: ${files.length} boards x ${OPPS.length} decks x ${SEEDS} = ${pieces.length} opponent turns`);
const STORE = `data/evals-${LIST}.jsonl`; fs.mkdirSync('data', { recursive: true }); let done = 0, ok = 0;
await poolDyn(pieces, Math.max(1, os.cpus().length - 1), async (p, remote) => {
  const so = await runNode('oppturn.mjs', { line: p.f, opp: `decks/${p.o}.ydk`, oppSeed: p.oppSeed, minutes: MIN, defense: 'any' }, { remote, files: [p.f, `decks/${p.o}.ydk`], heap: 2500, est: 3 * MIN + 2, timeoutMin: 6 * MIN + 10 });
  const m = /OPPTURN (.*)/.exec(so || ''); if (m) { const r = JSON.parse(m[1]); if (r.t1 && Number.isFinite(r.margin)) { ok++;
    fs.appendFileSync(STORE, JSON.stringify({ id: `${ID}:${p.f}:${p.o}:${p.oppSeed}`, list: LIST, when: new Date().toISOString(), opp: p.o, line: p.f, t1: r.t1, ourAfterT1: r.ourAfterT1, margin: r.margin, otk: r.otk, theirBoard: r.theirBoard, ourBoardLeft: r.ourBoardLeft }) + '\n'); } }
  if (++done % 50 === 0) console.log(`progress ${done}/${pieces.length} (${ok} usable)`); });
console.log(`${ok} usable samples -> ${STORE}`);
// fit + cross-validate against the hand-set scorer
await new Promise(res => { const p = spawn(process.execPath, ['--no-warnings', 'learn.mjs', LIST], { stdio: 'inherit' }); p.on('close', res); });
fs.mkdirSync('reports', { recursive: true }); fs.mkdirSync('results', { recursive: true });
if (fs.existsSync(`reports/learned-${LIST}.md`)) fs.copyFileSync(`reports/learned-${LIST}.md`, `reports/${ID}.md`);
if (fs.existsSync(`data/learned-${LIST}.json`)) fs.copyFileSync(`data/learned-${LIST}.json`, `reports/${ID}.json`);
fs.copyFileSync(STORE, `results/${ID}.json`); process.exit(0);
