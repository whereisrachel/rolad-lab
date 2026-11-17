// Find a better list — runs every stage by itself, no input needed.
//  1. Noise: your list plays the same hands twice with different search luck -> the error bar every change must beat.
//  2. Candidates: -1 of every card in the list, +1 of every card under its limit, the best-connected new Main Deck cards,
//     and the best-connected Extra Deck cards (each replaces the Extra Deck card your list uses least, measured from the games).
//  3. Rounds: every change on a few hands, the best ones on more hands, the best of those on more again (same hands for every version).
//  4. New list: your list + the changes that clearly beat it (and the same with matching cuts), checked on fresh hands.
//  Every game: same shuffle for every version (an added card is shuffled in, a cut copy taken out), line finder from scratch, no guide lines.
//  Hands rotate through opponent hand traps: none / Ash / Imperm / Droll (fired at the first legal moment).
// node findlist.mjs --deck D [--min 2] [--h1 12] [--h2 24] [--h3 36] [--hv 60] [--adds 40] [--eds 10] [--keep2 20] [--keep3 6] [--mini] [--id X]
import fs from 'fs'; import os from 'os'; import { spawn } from 'child_process';
import { parseYdk, findCard, name, banlist, cardDB } from './src/cards.mjs'; import { synergyScores } from './src/synergy.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; }; const MINI = a.includes('--mini');
const ID = f('id', String(Date.now() % 100000)), MIN = +f('min', 2);
const H1 = +f('h1', MINI ? 11 : 12), H2 = +f('h2', MINI ? 0 : 24), H3 = +f('h3', MINI ? 0 : 36), HV = +f('hv', MINI ? 11 : 60);
const NADD = +f('adds', MINI ? 2 : 40), NED = +f('eds', MINI ? 1 : 10), KEEP2 = +f('keep2', 20), KEEP3 = +f('keep3', 6);
const SCNS = String(f('scn', 'none,ash,imperm,droll')).split(','); const scnOf = (hi) => SCNS[hi % SCNS.length];
const PAR = Math.min(Math.max(1, os.cpus().length - 1), Math.max(1, Math.floor(os.freemem() / 1.3e9)));
const deckPath = f('deck', 'decks/L2-vand3.ydk'); const base = parseYdk(fs.readFileSync(deckPath, 'utf8'));
const log = (s) => { console.log(s); try { fs.appendFileSync(`reports/findlist-${ID}.log`, new Date().toISOString().slice(11, 19) + ' ' + s + '\n'); } catch {} };
fs.mkdirSync('reports', { recursive: true }); fs.mkdirSync('decks/_explore', { recursive: true }); fs.mkdirSync('data', { recursive: true });
const t0 = Date.now(); const mins = () => ((Date.now() - t0) / 60000).toFixed(0) + ' min';
const code = (n) => { const c = findCard(n); const k = Array.isArray(c) ? c[0] : c; return k && name(k) === n ? k : null; };
const count = {}; for (const k of base.main) count[name(k)] = (count[name(k)] || 0) + 1;
const LIM = banlist(); const limitOf = (k) => (LIM && LIM.has(k) ? LIM.get(k) : 3);
// hand traps kept in hand score 0 in a board comparison, so cutting one would always look free: they are not cut or added here
const isHandTrap = (n) => { const k = code(n); const t = (cardDB().text.get(k) || {}).desc || ''; return (/\(Quick Effect\): You can (discard|send) this card/i.test(t) && /(negate|destroy|opponent's hand|activates)/i.test(t)) || /^Infinite Impermanence$/.test(n); };

// ---------- versions ----------
// a version = list of changes: { op: 'add'|'cut', card } on the Main Deck, { op: 'ed', card, out } on the Extra Deck
const label = (v) => v.length ? v.map(c => c.op === 'add' ? '+1 ' + c.card : c.op === 'cut' ? '-1 ' + c.card : 'Extra Deck: ' + c.card + ' for ' + c.out).join(' & ') : 'your list';
const rngOf = (seed) => { let x = seed >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; };
const deal = (v, hi) => { const r = rngOf(1000 + hi * 7919); const perm = base.main.slice(); for (let k = perm.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [perm[k], perm[j]] = [perm[j], perm[k]]; }
  for (const c of v) { const r2 = rngOf(5000 + hi * 104729 + c.card.length * 31 + (c.op === 'cut' ? 7 : 0));
    if (c.op === 'add') perm.splice(Math.floor(r2() * (perm.length + 1)), 0, code(c.card));
    else if (c.op === 'cut') { const at = perm.map((k, i) => name(k) === c.card ? i : -1).filter(i => i >= 0); if (at.length) perm.splice(at[Math.floor(r2() * at.length)], 1); } }
  return perm; };
const deckFiles = new Map(); const deckFileFor = (v) => { const ed = v.filter(c => c.op === 'ed'); const key = ed.map(c => c.card + '>' + c.out).join('|') || 'base'; if (deckFiles.has(key)) return deckFiles.get(key);
  const extra = base.extra.slice(); for (const c of ed) { const i = extra.findIndex(k => name(k) === c.out); if (i >= 0) extra[i] = code(c.card); }
  const p = `decks/_explore/fl-${ID}-${deckFiles.size}.ydk`; fs.writeFileSync(p, '#main\n' + base.main.join('\n') + '\n#extra\n' + extra.join('\n') + '\n!side\n'); deckFiles.set(key, p); return p; };
const toYdk = (v) => { const main = base.main.slice(); for (const c of v) { if (c.op === 'add') main.push(code(c.card)); else if (c.op === 'cut') { const i = main.findIndex(k => name(k) === c.card); if (i >= 0) main.splice(i, 1); } }
  const extra = base.extra.slice(); for (const c of v.filter(c => c.op === 'ed')) { const i = extra.findIndex(k => name(k) === c.out); if (i >= 0) extra[i] = code(c.card); }
  return '#main\n' + main.join('\n') + '\n#extra\n' + extra.join('\n') + '\n!side\n'; };

// ---------- games ----------
const R = {}; // key -> { hi -> result }
const store = `data/findlist-${ID}.json`;
const play = (v, hi, sseed = 1) => new Promise(ok => { const perm = deal(v, hi); const t = { deck: deckFileFor(v), main: perm, hand: perm.slice(0, 5).map(c => name(c)), minutes: MIN, seed: 7 + hi, sseed, scn: scnOf(hi) };
  const once = (tries) => { const p = spawn(process.execPath, ['--no-warnings', '--max-old-space-size=2500', 'deepw.mjs', JSON.stringify(t)], { stdio: ['ignore', 'pipe', 'ignore'] }); let out = '';
    p.stdout.on('data', b => out += b); p.on('close', () => { const m = /RESULT (.*)/.exec(out); if (!m && tries < 1) return once(tries + 1); const r = m ? JSON.parse(m[1]) : { v: 0, crash: true }; ok({ v: r.v, crash: !!r.crash, line: r.line, board: r.board, hand: t.hand, scn: t.scn }); }); };
  once(0); });
let liveRows = []; const writeLive = (stage, done, total) => { try { fs.writeFileSync('data/explore-live.json', JSON.stringify({ run: 'findlist ' + ID + ' · ' + stage, at: new Date().toISOString(), done, total, cardsDone: liveRows.length, cards: liveRows.length, control: null, rows: liveRows.slice(0, 40) })); } catch {} };
async function runGames(jobs, stage) { // jobs: [{ key, v, hi, sseed }], interleaved so every version gets the same machine conditions
  let k = 0, done = 0; const total = jobs.length; log(`${stage}: ${total} games`);
  await Promise.all(Array.from({ length: PAR }, async () => { while (k < total) { const j = jobs[k++]; const r = await play(j.v, j.hi, j.sseed); (R[j.key] ||= {})[j.hi] = r; done++; console.log(`${done}/${total}`); if (done % 11 === 0) { writeLive(stage, done, total); try { fs.writeFileSync(store, JSON.stringify(R)); } catch {} } } }));
  fs.writeFileSync(store, JSON.stringify(R)); }
const stat = (key, baseKey = 'base') => { const b = R[baseKey] || {}, x = R[key] || {}; const d = Object.keys(x).filter(hi => b[hi]).map(hi => x[hi].v - b[hi].v);
  const n = d.length, m = n ? d.reduce((s, y) => s + y, 0) / n : 0, sd = n > 1 ? Math.sqrt(d.reduce((s, y) => s + (y - m) ** 2, 0) / (n - 1)) : 0;
  const byS = {}; for (const hi of Object.keys(x).filter(hi => b[hi])) (byS[scnOf(+hi)] ||= []).push(x[hi].v - b[hi].v);
  return { n, m, se: n ? sd / Math.sqrt(n) : 0, sd, better: d.filter(y => y >= 1).length, worse: d.filter(y => y <= -1).length, byS: Object.fromEntries(Object.entries(byS).map(([s, arr]) => [s, arr.reduce((p, q) => p + q, 0) / arr.length])) }; };
const hands = (from, n) => Array.from({ length: n }, (_, i) => from + i);

// ================= run =================
log(`findlist ${ID}: list ${deckPath} (${base.main.length} Main / ${base.extra.length} Extra), ${MIN} min per game, ${PAR} games at a time${MINI ? ', MINI check' : ''}`);
// 1) noise + base games (also tells which Extra Deck card the list uses least)
const r1 = hands(0, H1);
await runGames([...r1.map(hi => ({ key: 'base', v: [], hi, sseed: 1 })), ...r1.map(hi => ({ key: 'base2', v: [], hi, sseed: 2 }))], 'stage 1/5: your list twice (noise)');
const noise = stat('base2'); log(`noise: same hands, different search luck -> per-hand spread ${noise.sd.toFixed(2)}, average ${noise.m >= 0 ? '+' : ''}${noise.m.toFixed(2)} ± ${noise.se.toFixed(2)}`);
const baseMean = Object.values(R.base).reduce((s, r) => s + r.v, 0) / r1.length;
const edUse = {}; for (const e of new Set(base.extra.map(k => name(k)))) edUse[e] = 0; for (const r of [...Object.values(R.base), ...Object.values(R.base2)]) for (const l of r.line || []) for (const e of Object.keys(edUse)) if (l.includes(e)) edUse[e]++;
const leastEd = Object.entries(edUse).sort((p, q) => p[1] - q[1])[0][0]; log(`Extra Deck use in your list's games: least used = ${leastEd} (${edUse[leastEd]} uses)`);
// 2) candidates
const syn = synergyScores(base, LIM); const inList = new Set(Object.keys(count));
const cuts = Object.keys(count).filter(n => !isHandTrap(n)).map(n => [{ op: 'cut', card: n }]);
const plus = Object.keys(count).filter(n => !isHandTrap(n) && count[n] < limitOf(code(n))).map(n => [{ op: 'add', card: n }]);
const adds = syn.filter(x => x.zone === 'main' && !inList.has(x.name) && limitOf(x.code) > 0 && !isHandTrap(x.name)).slice(0, NADD).map(x => [{ op: 'add', card: x.name, why: x.why }]);
const eds = syn.filter(x => x.zone === 'ed' && limitOf(x.code) > 0).slice(0, NED).map(x => [{ op: 'ed', card: x.name, out: leastEd, why: x.why }]);
let versions = MINI ? [cuts.find(v => /Nervedo/.test(v[0].card)) || cuts[0], plus.find(v => /Medius the Pure/.test(v[0].card)) || plus[0], ...adds, ...eds] : [...cuts, ...plus, ...adds, ...eds];
versions = versions.filter(Boolean); const K = (v) => label(v);
log(`candidates: ${cuts.length} cuts, ${plus.length} +1s, ${adds.length} new Main Deck cards, ${eds.length} new Extra Deck cards -> testing ${versions.length} versions (connected cards come from ${syn.length} of all legal cards)`);
const rank = (vs) => vs.map(v => ({ v, s: stat(K(v)) })).sort((p, q) => q.s.m - p.s.m);
const setLive = (vs) => { liveRows = rank(vs).map(x => ({ name: K(x.v), zone: x.v[0].op === 'ed' ? 'ed' : x.v[0].op, done: x.s.n, of: x.s.n, rescued: x.s.better, gain: +x.s.m.toFixed(2) })); };
// 3) rounds
const jobsFor = (vs, his) => his.flatMap(hi => vs.map(v => ({ key: K(v), v, hi, sseed: 1 }))); // hand-major: all versions of a hand run together
await runGames(jobsFor(versions, r1), `stage 2/5: round 1 (${versions.length} versions x ${H1} hands)`); setLive(versions);
let alive = versions;
if (H2 > 0) { alive = rank(versions).slice(0, KEEP2).map(x => x.v); const r2 = hands(H1, H2); await runGames([...r2.map(hi => ({ key: 'base', v: [], hi, sseed: 1 })), ...jobsFor(alive, r2)], `stage 3/5: round 2 (top ${alive.length} x ${H2} more hands)`); setLive(versions); }
if (H3 > 0) { alive = rank(alive).slice(0, KEEP3).map(x => x.v); const r3 = hands(H1 + H2, H3); await runGames([...r3.map(hi => ({ key: 'base', v: [], hi, sseed: 1 })), ...jobsFor(alive, r3)], `stage 4/5: round 3 (top ${alive.length} x ${H3} more hands)`); setLive(versions); }
// a change counts only if it beats your list by more than 2.5x its error, and by more than the noise floor
const clear = (s) => s.m > 0 && s.m > 2.5 * s.se && s.m > Math.max(0.15, 2 * noise.se);
const ranked = rank(versions); const winners = ranked.filter(x => x.v[0].op !== 'cut' && clear(x.s)).slice(0, 3).map(x => x.v[0]);
const freeCuts = ranked.filter(x => x.v[0].op === 'cut' && x.s.m >= 0 && !winners.some(w => w.card === x.v[0].card)).slice(0, winners.filter(w => w.op === 'add').length).map(x => x.v[0]);
const cutWins = ranked.filter(x => x.v[0].op === 'cut' && clear(x.s)).slice(0, 2).map(x => x.v[0]);
let combos = [];
if (winners.length || cutWins.length) { combos.push([...winners, ...cutWins]); if (freeCuts.length && winners.length) combos.push([...winners, ...freeCuts.filter(c => !cutWins.some(w => w.card === c.card)), ...cutWins]); }
if (MINI && !combos.length) combos = [[ranked.find(x => x.v[0].op !== 'cut').v[0], ranked.find(x => x.v[0].op === 'cut').v[0]]]; // MINI: exercise the last stage anyway
combos = combos.filter((c, i) => combos.findIndex(d => label(d) === label(c)) === i);
// 4) verify on fresh hands
const rv = hands(1000, HV);
if (combos.length) await runGames([...rv.map(hi => ({ key: 'vbase', v: [], hi, sseed: 1 })), ...rv.flatMap(hi => combos.map(c => ({ key: 'V:' + label(c), v: c, hi, sseed: 1 })))], `stage 5/5: new list(s) vs your list on ${HV} fresh hands`);
// ---------- report ----------
const fx = (x) => (x >= 0 ? '+' : '') + x.toFixed(2); const byS = (s) => Object.entries(s.byS).map(([k, v]) => k + ' ' + fx(v)).join(', ');
let md = `# Find a better list ${ID}${MINI ? ' (MINI check)' : ''}\n${new Date().toISOString()} · ${deckPath} · ${mins()} · ${MIN} min line search per game, from scratch, no guide lines · opponent hand traps rotate: ${SCNS.join(' / ')} (fired at the first legal moment)\n\n`;
const verdicts = combos.map(c => ({ c, s: stat('V:' + label(c), 'vbase') }));
const best = verdicts.filter(x => x.s.m > 0 && x.s.m > 2.5 * x.s.se).sort((p, q) => q.s.m - p.s.m)[0];
md += best ? `## Result: a better list was found\n**${label(best.c)}**: ${fx(best.s.m)} per hand (± ${best.s.se.toFixed(2)}) on ${best.s.n} fresh hands · by hand trap: ${byS(best.s)}. Saved as decks/findlist-${ID}.ydk.\n\n`
  : `## Result: nothing clearly beat your list\n${combos.length ? 'The best combination did not hold up on fresh hands.' : 'No single change beat your list by more than the noise.'} Your list averages ${baseMean.toFixed(2)} per hand here.\n\n`;
if (best) fs.writeFileSync(`decks/findlist-${ID}.ydk`, toYdk(best.c));
md += `## How reliable this is\n- Noise (your list, same hands, different search luck): per-hand spread ${noise.sd.toFixed(2)}, difference ${fx(noise.m)} ± ${noise.se.toFixed(2)} (should be near 0).\n- A change counts only if it beats your list by more than 2.5x its error and by more than the noise.\n- Limits: going first only; the opponent fires hand traps at the first legal moment (real players time them better); board values use the audited scorer; Ash/Imperm are not cut or added (a hand trap kept in hand scores 0 in a board comparison).\n\n`;
if (verdicts.length) { md += `## New lists checked on ${HV} fresh hands\n| list | vs your list | ± | by hand trap | hands better / worse by 1+ |\n|---|---|---|---|---|\n`; for (const x of verdicts) md += `| ${label(x.c)} | ${fx(x.s.m)} | ${x.s.se.toFixed(2)} | ${byS(x.s)} | ${x.s.better}/${x.s.worse} of ${x.s.n} |\n`; md += '\n'; }
md += `## Every change tested (vs your list on the same hands)\n| change | vs your list | ± | hands | by hand trap | better / worse by 1+ | clear win |\n|---|---|---|---|---|---|---|\n`;
for (const x of ranked) md += `| ${K(x.v)} | ${fx(x.s.m)} | ${x.s.se.toFixed(2)} | ${x.s.n} | ${byS(x.s)} | ${x.s.better}/${x.s.worse} | ${clear(x.s) ? 'yes' : ''} |\n`;
md += `\n## Example lines (best hand for each of the top 3 changes)\n`;
for (const x of ranked.slice(0, 3)) { const rs = R[K(x.v)] || {}; const top = Object.keys(rs).filter(hi => R.base[hi]).sort((p, q) => (rs[q].v - R.base[q].v) - (rs[p].v - R.base[p].v))[0]; if (top === undefined) continue; const g = rs[top];
  md += `\n**${K(x.v)}**: hand ${g.hand.join(', ')} (opponent: ${g.scn}) → your list ${R.base[top].v.toFixed(2)}, with the change ${g.v.toFixed(2)}\n${(g.line || []).filter(l => /Summon|Activate/.test(l)).slice(0, 25).join(' > ')}\n`; }
fs.writeFileSync(`reports/findlist-${ID}.md`, md); log('done: reports/findlist-' + ID + '.md'); console.log(md.split('\n').slice(0, 6).join('\n'));
