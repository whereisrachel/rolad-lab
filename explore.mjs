// Explorer: finds the pieces ROLAD's failing hands are missing, by itself.
//   base   : play N fresh hands with the baseline list            (sharded)
//   fails  : keep the hands that end under 6 (the failures)
//   rescue : replay every failing hand with each pool card added  (sharded)
//            main-deck card -> added to the hand as a 6th card; Extra Deck card -> swapped into the Extra Deck
//            control: the same hand + a do-nothing card (Waboku), so a plain extra card is not mistaken for help
//   rank   : cards that turn failing hands into strong boards, why, and the line used; builds confirm decks
import fs from 'fs'; import path from 'path'; import os from 'os'; import { Worker } from 'worker_threads'; import { fileURLToPath } from 'url';
import { parseYdk, findCard, name, ROOT, banlist } from './src/cards.mjs';
import { update as libUpdate } from './src/library.mjs';
import { tagCard, NEED_TAGS } from './src/tags.mjs';
import { cardDB } from './src/cards.mjs';
import { execSync } from 'child_process';
const a = process.argv.slice(2); const cmd = a[0]; const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const DECK = f('deck', 'decks/L2-vand3.ydk'), N = +f('n', 200), MAC = +f('macros', 150), SH = f('shard', null), OF = +f('of', 1), T = +f('threads', Math.max(1, os.cpus().length));
const MAXF = +f('fails', 30), CONTROL = 'Waboku', EDSLOT = f('edslot', 'Dark Magician of Destruction');
const D = parseYdk(fs.readFileSync(DECK, 'utf8'));
let x = +f('seed', 12345) >>> 0; const SEED = x; const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296;
const hands = []; for (let i = 0; i < N; i++) { const idx = D.main.map((_, k) => k); for (let k = idx.length - 1; k > 0; k--) { const j = Math.floor(rnd() * (k + 1)); [idx[k], idx[j]] = [idx[j], idx[k]]; } hands.push(idx.slice(0, 5)); }
const wfile = fileURLToPath(new URL('./src/rt-worker.mjs', import.meta.url));
async function runTasks(tasks) {
  const res = {}; const chunks = Array.from({ length: T }, () => []); tasks.forEach((t, i) => chunks[i % T].push(t)); let done = 0;
  await Promise.all(chunks.filter(c => c.length).map(c => new Promise((ok) => { const w = new Worker(wfile, { workerData: { tasks: c } }); w.on('message', m => { if (m.done) { ok(); return; } res[m.id] = m; if (++done % 25 === 0) console.log(done + '/' + tasks.length); }); w.on('error', e => { console.log('worker error', e.message); ok(); }); })));
  return res;
}
const mine = (arr) => SH === null ? arr : arr.filter((_, i) => i % OF === +SH);
function learned() { try { return JSON.parse(fs.readFileSync('data/learned.json', 'utf8')); } catch { return { runs: 0, tagW: {}, cards: {} }; } }
const writeShard = (tag, obj) => { fs.mkdirSync('results', { recursive: true }); fs.writeFileSync(`results/${tag}-${SH ?? 0}.json`, JSON.stringify(obj)); };
const readShards = (dir, tag) => { const o = {}; for (const fn of fs.readdirSync(dir).filter(z => z.startsWith(tag + '-') && z.endsWith('.json'))) Object.assign(o, JSON.parse(fs.readFileSync(path.join(dir, fn), 'utf8'))); return o; };
const task = (id, deck, hand) => ({ id, deck, hand, scn: 'none', macros: MAC, ht: 0, seeds: 1, passes: 1, seed: 1000 + (id % 997) });
const variantDeck = (c) => { // deck file for one candidate (deterministic, rebuilt in every job)
  const card = findCard(c.name); const code = Array.isArray(card) ? card[0] : card; const main = D.main.slice(), extra = D.extra.slice();
  if (c.zone === 'ed') { const i = extra.findIndex(k => name(k) === EDSLOT); extra[i >= 0 ? i : extra.length - 1] = code; } else main.push(code);
  const p = 'decks/_explore/' + c.name.replace(/[^A-Za-z0-9]+/g, '_').slice(0, 50) + '.ydk'; fs.mkdirSync('decks/_explore', { recursive: true });
  fs.writeFileSync(p, '#main\n' + main.join('\n') + '\n#extra\n' + extra.join('\n') + '\n!side\n'); return p;
};

if (cmd === 'base') {
  const tasks = mine(hands.map((h, i) => task(i, DECK, h)));
  const r = await runTasks(tasks); writeShard('base', Object.fromEntries(Object.values(r).map(v => { const b = String(v.board || ''); const mon = ((b.match(/Monsters: ([^\n]*)/g) || [])[1] || '').split('||').filter(z => /\w/.test(z) && !/\(none\)/.test(z)).length;
    return [v.id, { v: v.v, hand: v.hand, played: v.played, crash: !!v.crash, mon, steps: (v.line || []).length }]; })));
}
if (cmd === 'fails') {
  const r = readShards(f('merge', 'merged'), 'base'); const rows = Object.entries(r).map(([i, v]) => ({ hi: +i, idx: hands[+i], ...v }));
  const fails = rows.filter(z => !z.crash && z.v < 6).sort((p, q) => p.v - q.v).slice(0, MAXF);
  // brick ranking: card held -> failure rate (for the confirm decks)
  const held = {}, bad = {}; for (const z of rows) for (const n of new Set(z.hand || [])) { held[n] = (held[n] || 0) + 1; if (z.v < 6) bad[n] = (bad[n] || 0) + 1; }
  const bricks = Object.keys(held).filter(n => held[n] >= 8 && !/Ash Blossom|Infinite Impermanence|Droll/.test(n)).map(n => ({ n, rate: (bad[n] || 0) / held[n], held: held[n] })).sort((p, q) => q.rate - p.rate);
  // diagnose what each failing hand was missing, from what actually happened in the game
  const HT = /Ash Blossom|Infinite Impermanence|Droll|Nibiru|Ghost/; const needs = {};
  for (const z of fails) { const hand = (z.hand || []).filter(n => !HT.test(n)); const played = (z.played || []).filter(n => !HT.test(n)); const left = hand.length - played.length; z.needs = [];
    if (played.length <= 1 || (z.steps || 0) < 6) z.needs.push('no_starter'); if ((z.mon || 0) < 3) z.needs.push('few_bodies'); if (left >= 2) z.needs.push('dead_cards');
    if (hand.includes('Theorealize Medius') && !played.includes('Theorealize Medius')) z.needs.push('no_tm_trigger');
    if ((z.mon || 0) >= 3) z.needs.push('no_interaction'); if (!z.needs.length) z.needs.push('general');
    for (const k of z.needs) needs[k] = (needs[k] || 0) + 1; }
  fs.mkdirSync('data', { recursive: true });
  fs.writeFileSync('data/explore-fails.json', JSON.stringify({ seed: SEED, deck: DECK, n: rows.length, failCount: rows.filter(z => z.v < 6).length, mean: rows.reduce((s, z) => s + z.v, 0) / (rows.length || 1), needs, fails, bricks }));
  console.log('needs', JSON.stringify(needs));
  console.log('base hands', rows.length, 'failing', rows.filter(z => z.v < 6).length, 'kept', fails.length, 'worst brick', bricks[0] && bricks[0].n);
}
if (cmd === 'pool') { // build this run's candidates from ALL legal cards: match what the failures need, weighted by what past runs learned, plus untried cards
  const F = JSON.parse(fs.readFileSync('data/explore-fails.json', 'utf8')); const L = learned(); const lim = banlist(); const { text } = cardDB();
  if (!Object.keys(F.needs).length) F.needs = { general: 1 }; const tot = Object.values(F.needs).reduce((x, y) => x + y, 0) || 1; const scored = []; let eligible = 0;
  for (const [id] of text) { const tg = tagCard(id, lim); if (!tg) continue; const have = D.main.filter(k => name(k) === tg.name).length; if (have >= (lim.has(id) ? lim.get(id) : 3)) continue; eligible++;
    let sc = 0; const why = new Set(); for (const [need, cnt] of Object.entries(F.needs)) for (const t of tg.tags) { const w = (NEED_TAGS[need] || {})[t]; if (w) { sc += (cnt / tot) * w * (L.tagW[t] ?? 1); why.add(need.replace('_', ' ') + ': ' + t.replace('_', ' ')); } }
    const h = L.cards[tg.name]; if (h) sc *= h.rescued > 0 ? 1 + h.rescued / h.tests : Math.pow(0.5, h.tests); else sc *= 1.2; // tried-and-failed cards fade, untried get a nudge
    if (sc > 0) scored.push({ name: tg.name, zone: 'main', w: sc, why: [...why].slice(0, 3), tags: tg.tags }); }
  scored.sort((p, q) => q.w - p.w); const MAXM = +f('poolmain', 160), EXP = Math.round(MAXM * 0.25);
  const pick = scored.slice(0, MAXM - EXP); const rest = scored.slice(MAXM - EXP); for (let k = 0; k < EXP && rest.length; k++) { const e = rest.splice(Math.floor(rnd() * rest.length), 1)[0]; e.why = ['exploring: untested direction', ...e.why]; pick.push(e); }
  execSync('node --no-warnings edscan.mjs', { stdio: 'ignore' }); const ed = [];
  for (const m of fs.readFileSync('reports/edscan.md', 'utf8').matchAll(/^- \*\*(.+?)\*\* \(\d\) \| (.+?) \| (.*?) \| score (\S+)/gm)) { if (D.extra.some(k => name(k) === m[1])) continue; const h = L.cards[m[1]];
    let sc = +m[4] + 0.5; for (const t of m[3].split(',').filter(Boolean)) sc *= (L.tagW['ed:' + t] ?? 1); if (h) sc *= h.rescued > 0 ? 1 + h.rescued / h.tests : Math.pow(0.5, h.tests); if (sc > 0.5) ed.push({ name: m[1], zone: 'ed', w: sc, why: [m[2].slice(0, 50), m[3]], tags: m[3].split(',').filter(Boolean).map(t => 'ed:' + t) }); }
  ed.sort((p, q) => q.w - p.w); const pool = [...pick, ...ed.slice(0, +f('pooled', 40))];
  fs.writeFileSync('data/pool.json', JSON.stringify(pool, null, 1)); console.log('searched', text.size, 'cards;', eligible, 'can work in ROLAD;', scored.length, 'match a need; pool', pool.length, '(main', pick.length, 'ed', Math.min(ed.length, +f('pooled', 40)) + ')');
}
if (cmd === 'rescue') {
  const F = JSON.parse(fs.readFileSync('data/explore-fails.json', 'utf8')); const pool = JSON.parse(fs.readFileSync('data/pool.json', 'utf8')).slice(0, +f('poolmax', 9999));
  const cands = [{ name: CONTROL, zone: 'main', control: true }, ...pool]; const tasks = []; let id = 0;
  for (let ci = 0; ci < cands.length; ci++) { const c = cands[ci]; const dk = variantDeck(c); const L = D.main.length;
    for (let fi = 0; fi < F.fails.length; fi++) { const hid = id++; if (SH !== null && hid % OF !== +SH) continue; tasks.push({ ...task(hid, dk, c.zone === 'ed' ? F.fails[fi].idx : [...F.fails[fi].idx, L]), ci, fi }); } }
  const r = await runTasks(tasks); const meta = Object.fromEntries(tasks.map(t => [t.id, t]));
  writeShard('res', Object.fromEntries(Object.values(r).map(v => [v.id, { ci: meta[v.id].ci, fi: meta[v.id].fi, v: v.v, crash: !!v.crash, played: v.played, line: (v.v || 0) >= 6 ? v.line : undefined }])));
}
if (cmd === 'rank') {
  const F = JSON.parse(fs.readFileSync('data/explore-fails.json', 'utf8')); const pool = JSON.parse(fs.readFileSync('data/pool.json', 'utf8')).slice(0, +f('poolmax', 9999));
  const cands = [{ name: CONTROL, zone: 'main', control: true }, ...pool]; const r = Object.values(readShards(f('merge', 'merged'), 'res'));
  const ctl = {}; for (const z of r) if (z.ci === 0) ctl[z.fi] = z.v;
  const by = {}; let crashes = 0; for (const z of r) { if (z.crash) crashes++; (by[z.ci] || (by[z.ci] = [])).push(z); }
  const rows = []; for (const [ci, arr] of Object.entries(by)) { if (+ci === 0) continue; const c = cands[+ci];
    const gains = arr.map(z => z.v - (ctl[z.fi] ?? F.fails[z.fi].v)); const resc = arr.filter(z => z.v >= 6 && z.v - (ctl[z.fi] ?? 0) >= 1);
    const played = c.zone === 'ed' ? null : arr.filter(z => (z.played || []).includes(c.name)).length / arr.length;
    const ex = resc.sort((p, q) => q.v - p.v)[0];
    rows.push({ name: c.name, zone: c.zone, why: c.why, n: arr.length, rescued: resc.length, gain: gains.reduce((s, g) => s + g, 0) / gains.length, played, ex: ex ? { hand: F.fails[ex.fi].hand, before: F.fails[ex.fi].v, after: ex.v, line: (ex.line || []).filter(l => !/^(Zone|face-|Pass|Yes$|No$)/.test(l)).slice(0, 14) } : null }); }
  rows.sort((p, q) => q.rescued - p.rescued || q.gain - p.gain);
  { // learn: which kinds of cards actually fixed failing hands (tag weights) and which cards were tried (so the next run digs elsewhere)
    const L = learned(); const avg = rows.reduce((s2, z) => s2 + z.rescued / z.n, 0) / (rows.length || 1); const tagOut = {};
    for (const z of rows) { const c = pool.find(p => p.name === z.name) || {}; const o = z.rescued / z.n - avg; for (const t of c.tags || []) (tagOut[t] || (tagOut[t] = [])).push(o);
      const h = L.cards[z.name] || (L.cards[z.name] = { tests: 0, rescued: 0, gain: 0 }); h.tests++; h.rescued += z.rescued; h.gain += z.gain; }
    for (const [t, os] of Object.entries(tagOut)) { const m = os.reduce((x, y) => x + y, 0) / os.length; L.tagW[t] = Math.min(4, Math.max(0.25, (L.tagW[t] ?? 1) * Math.exp(3 * m))); }
    L.runs++; L.updated = new Date().toISOString(); fs.writeFileSync('data/learned.json', JSON.stringify(L, null, 1));
  }
  libUpdate(r.filter(z => z.line).map(z => ({ v: z.v, line: z.line })));
  const ctlMean = Object.values(ctl).reduce((s, v) => s + v, 0) / (Object.values(ctl).length || 1);
  const RUN = process.env.GITHUB_RUN_ID || 'local'; const top = rows.filter(z => z.rescued >= Math.max(2, Math.ceil(F.fails.length * 0.1)) && z.gain > 0.5 && (z.played === null || z.played >= 0.3)).slice(0, +f('confirm', 3));
  let md = `# Explorer: missing pieces for ${path.basename(F.deck)}\n${new Date().toISOString().slice(0, 16)} · ${F.n} fresh hands, ${F.failCount} ended under 6 (mean ${F.mean.toFixed(2)}). The ${F.fails.length} worst were replayed with each of ${pool.length} candidate cards.\n`;
  md += `Control (same hand + a do-nothing card): mean ${ctlMean.toFixed(2)}. "Rescued" = the hand reached 6+ and beat the control by 1+. Crashed searches: ${crashes}.\n`;
  md += `What the failing hands were missing (diagnosed from the games): ${Object.entries(F.needs || {}).sort((p, q) => q[1] - p[1]).map(([k, v]) => `${k.replace('_', ' ')} ${v}`).join(', ')}\n`;
  { const L = learned(); const tw = Object.entries(L.tagW).sort((p, q) => q[1] - p[1]); md += `What the lab has learned so far (${L.runs} runs, ${Object.keys(L.cards).length} cards tried): most useful card types ${tw.slice(0, 5).map(([t, w]) => t.replace('_', ' ') + ' x' + w.toFixed(2)).join(', ')}; least useful ${tw.slice(-3).map(([t, w]) => t.replace('_', ' ') + ' x' + w.toFixed(2)).join(', ')}\n`; }
  md += `Worst bricks in the baseline (failure rate when held): ${F.bricks.slice(0, 5).map(b => `${b.n} ${(100 * b.rate).toFixed(0)}%`).join(', ')}\n\n`;
  md += `## Sent to full tests\n${top.length ? top.map(z => `- **${z.name}** (${z.zone === 'ed' ? 'Extra Deck, replaces ' + EDSLOT : 'main, replaces ' + F.bricks[0].n})`).join('\n') : '- nothing cleared the bar this time'}\n\n## Ranking\n| card | where | rescued | avg gain vs control | played | why it was a candidate |\n|---|---|---|---|---|---|\n`;
  for (const z of rows.slice(0, 40)) md += `| ${z.name} | ${z.zone} | ${z.rescued}/${z.n} | ${z.gain >= 0 ? '+' : ''}${z.gain.toFixed(2)} | ${z.played === null ? '-' : (100 * z.played).toFixed(0) + '%'} | ${(z.why || []).join('; ')} |\n`;
  md += `\n## How the top finds fix failing hands\n`;
  for (const z of rows.slice(0, 8)) if (z.ex) md += `\n### ${z.name}: ${z.rescued} of ${z.n} failing hands rescued\nExample hand: ${z.ex.hand.join(', ')} → before ${z.ex.before.toFixed(2)}, with ${z.name} ${z.ex.after.toFixed(2)}\nLine: ${z.ex.line.join(' → ')}\n`;
  fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/explore-${RUN}.md`, md);
  // confirm decks: the card replaces the worst brick (main) or the Extra Deck slot
  const lim = banlist(); const out = [];
  for (const z of top) { let c = findCard(z.name); if (Array.isArray(c)) c = c[0]; const main = D.main.slice(), extra = D.extra.slice();
    if (z.zone === 'ed') { const i = extra.findIndex(k => name(k) === EDSLOT); extra[i >= 0 ? i : extra.length - 1] = c; }
    else { const i = main.findIndex(k => name(k) === F.bricks[0].n); if (i >= 0) main[i] = c; else main.push(c); if (main.filter(k => k === c).length > (lim.has(c) ? lim.get(c) : 3)) continue; }
    const p = `decks/explore/${RUN}-${z.name.replace(/[^A-Za-z0-9]+/g, '_').slice(0, 40)}.ydk`; fs.mkdirSync('decks/explore', { recursive: true });
    fs.writeFileSync(p, '#main\n' + main.join('\n') + '\n#extra\n' + extra.join('\n') + '\n!side\n'); out.push(p); }
  fs.writeFileSync('data/explore-confirm.txt', out.join('\n')); console.log(md.split('\n').slice(0, 14).join('\n')); console.log('confirm decks:', out.join(', '));
}
