#!/usr/bin/env node
// Play real duels on the EDOPro core. One command per step; games are saved in ./games.
//   new <id> --p0 a.ydk --p1 b.ydk [--first 0|1] [--seed N] [--hand0 "A;B"] [--hand1 "..."] [--lab]
//        [--bot0 despia|ss|any] [--bot1 ...]          seat plays its OWN turns from a priority list
//        [--goldfish 1] [--script ash,droll,imperm]   seat never plays on its own turn; hand traps by priority list
//        [--stopturn N]
//   view <id> <seat> [--ed]       board + new events + pending decision
//   act <id> <seat> "<a1>; <a2>" [-q]   answers; ~text matches option labels; P / PP = auto-pass chain windows
//   autot1 <id> <seat> [secs]     seat goes first: solve the opening hand and play its first turn automatically
//   card <name|code>   status <id>   log <id> <seat|all>   undo <id> <n> (lab)   fork <id> <newid> (lab)
import fs from 'fs';
import path from 'path';
import createCore, * as E from 'ocgcore-wasm';
import { createRequire } from 'module';
import { simulate, push, boardView, decision, answer, autoResponse, parseYdk, teamOf, seatOf, J, UNJ, M, R, L, lib, readScript } from './src/engine.mjs';
import { name, cardFull, findCard, ROOT, cardDB, coreCardData } from './src/cards.mjs';
import { policyAnswer, trapRegexes } from './src/bots.mjs';

const GAMES = path.join(ROOT, 'games'); fs.mkdirSync(GAMES, { recursive: true });
const gpath = (id) => path.join(GAMES, id + '.json');
const load = (id) => UNJ(fs.readFileSync(gpath(id), 'utf8'));
function save(g) { const p = gpath(g.id); fs.writeFileSync(p + '.tmp', J(g)); fs.renameSync(p + '.tmp', p); }
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const has = (k) => args.includes('--' + k);

function resolveHand(s, deck) {
  if (!s) return null;
  const pool = deck.main.slice();
  return s.split(';').map(x => x.trim()).filter(Boolean).map(x => {
    const c = findCard(x); if (!c || Array.isArray(c)) throw new Error('unknown/ambiguous card: ' + x);
    let i = pool.indexOf(c); if (i < 0) i = pool.findIndex(k => name(k) === name(c));
    if (i < 0) throw new Error(`forced card ${name(c)} is not in that deck`);
    return pool.splice(i, 1)[0];
  });
}
const stopped = (S) => S.game.stopAfterTurn && S.turn > S.game.stopAfterTurn;
const pendingSeat = (S) => S.pending ? seatOf(S.game, S.pending.player) : null;

// policy for scripted seats
function polOf(g, seat) {
  if (g.bot && g.bot[seat]) return { bot: g.bot[seat], script: trapRegexes((g.script || {})[seat]) };
  if ((g.goldfish || []).includes(seat)) return { script: trapRegexes((g.script || {})[seat]) };
  return null;
}
function applyText(S, seat, t) {
  const res = answer(S, seat, t); if (!res || res.error) return false;
  if (res.resps) { for (const r of res.resps) if (!push(S, { seat, resp: r.resp, label: r.label, auto: true })) return false; return true; }
  if (res.multiStep) { const d = decision(S, seat); const op = d.options.find(o => o.finish) || d.options[0]; return push(S, { seat, resp: op.resp, label: op.label, auto: true }); }
  return false;
}
function autoAdvance(S) {
  for (let i = 0; i < 20000 && S.pending && !S.ended && !stopped(S); i++) {
    const seat = seatOf(S.game, S.pending.player);
    const a = autoResponse(S);
    if (a) { if (!push(S, { seat, resp: a, auto: true })) break; continue; }
    const ap = S.game.autopass && S.game.autopass[seat];
    if (ap && S.pending.type === M.SELECT_CHAIN && !S.pending.forced) {
      const myTeam = teamOf(S.game, seat);
      const key = (c) => `${c.code}:${c.location}:${c.description}`;
      const fresh = ap.opts ? S.pending.selects.some(c => !ap.opts.includes(key(c))) : true;
      const stop = fresh || S.events.slice(ap.from).some(e => e.k === 'turn' || e.k === 'phase' || e.k === 'battle' || ((e.k === 'chain' || e.k === 'sum') && e.a !== null && e.a !== myTeam));
      if (!stop) { if (!push(S, { seat, resp: { type: R.SELECT_CHAIN, index: null }, auto: true, label: 'auto-pass' })) break; continue; }
      delete S.game.autopass[seat];
    }
    const pol = polOf(S.game, seat);
    if (pol) { const t = policyAnswer(S, seat, pol); if (!t || !applyText(S, seat, t)) break; continue; }
    break;
  }
  return S;
}

function render(S, seat, { board = 'auto', events = true, markSeen = true } = {}) {
  const g = S.game; const out = [];
  g.cursor = g.cursor || { 0: 0, 1: 0 };
  if (events) {
    let evs = S.events.slice(g.cursor[seat]).map(e => e.s[seat]).filter(x => x !== null && x !== undefined);
    evs = evs.filter(x => !/^\* (Pass|auto-pass|Zone your|face-up|Yes$|No$|Activate|Selected|select )/.test(x) && !/^\((Before the normal draw|Draw Phase|Main Phase|Standby Phase|End Phase|Battle Phase)/.test(x));
    if (evs.length) out.push('--- What happened ---\n' + evs.join('\n'));
    if (markSeen) g.cursor[seat] = S.events.length;
  }
  if (stopped(S)) { out.push(`--- LAB STOP: turn ${g.stopAfterTurn} is over. Final board at the start of turn ${S.turn}: ---\n` + boardView(S, seat)); return out.join('\n'); }
  if (S.ended) { const w = S.winner === null ? null : seatOf(g, S.winner); out.push(`GAME OVER: ${w === null ? 'draw' : w === seat ? 'YOU WON' : 'YOU LOST'}`); return out.join('\n'); }
  const d = decision(S, seat);
  const big = !d || [M.SELECT_IDLECMD, M.SELECT_BATTLECMD, M.SELECT_CHAIN].includes(d.type);
  if (board === true || (board === 'auto' && big)) out.push('--- Board ---\n' + boardView(S, seat));
  if (d) {
    out.push(`--- YOUR DECISION (#${S.ri}) ---\n${d.prompt}`);
    d.options.forEach((o, i) => out.push(`  ${i + 1}) ${o.label}`));
    if (d.kind === 'multi' || d.kind === 'sum') out.push('(pick several)');
    else if (d.kind === 'unselect') out.push('(pick/unpick, f=finish)');
    else if (d.kind === 'sort') out.push('(order all, or d)');
    else if (d.kind === 'announce') out.push('(type card name)');
  } else out.push(`(No decision for seat ${seat}: decision #${S.ri} belongs to the other seat.)`);
  return out.join('\n');
}

function resolveLabels(S, seat, text) {
  if (!text.includes('~')) return { text };
  const d = decision(S, seat); if (!d) return { error: 'no decision' };
  const parts = text.split('|').map(x => x.trim()).filter(Boolean); const out = [];
  for (const p of parts) {
    if (!p.startsWith('~')) { out.push(p); continue; }
    const t = p.slice(1).toLowerCase();
    const idx = d.options.findIndex((o, i) => o.label.toLowerCase().includes(t) && !o.label.startsWith('UNselect') && !out.includes(String(i + 1)));
    if (idx < 0) return { error: `no option matching "${p.slice(1)}". Options were: ${d.options.map((o, i) => `${i + 1}) ${o.label}`).join(' | ')}` };
    out.push(String(idx + 1));
  }
  return { text: out.join(' ') };
}
async function applyAnswer(S, seat, text) {
  const t = String(text).trim();
  if (/^(p|pp)$/i.test(t)) {
    if (S.pending.type !== M.SELECT_CHAIN || S.pending.forced) return { ok: false, msg: 'P/PP only works at an optional chain window.' };
    const opts = S.pending.selects.map(c => `${c.code}:${c.location}:${c.description}`);
    if (!push(S, { seat, resp: { type: R.SELECT_CHAIN, index: null }, label: 'Pass (auto-pass on)' })) return { ok: false, msg: 'rejected' };
    S.game.autopass = S.game.autopass || {}; S.game.autopass[seat] = { from: S.events.length, mode: t.length === 2 ? 'phase' : 'act', opts };
    return { ok: true };
  }
  const res = answer(S, seat, text);
  if (res.error) return { ok: false, msg: 'Invalid answer: ' + res.error };
  if (res.resps) { for (const r of res.resps) if (!push(S, { seat, resp: r.resp, label: r.label })) return { ok: false, msg: 'The game rejected that choice (illegal selection). Try again.' }; return { ok: true }; }
  if (res.multiStep) {
    for (const p of res.multiStep) {
      const d = decision(S, seat);
      if (!d || d.kind !== 'unselect') return { ok: true, msg: 'Selection finished early; extra picks ignored.' };
      let op;
      if (p.finish) op = d.options.find(o => o.finish);
      else if (p.cancel) op = d.options.find(o => o.cancel || o.finish);
      else op = d.options.find(o => o.card && o.card.code === p.card.code && o.card.location === p.card.location && o.card.sequence === p.card.sequence && o.card.controller === p.card.controller && (o.card.overlay_sequence ?? -1) === (p.card.overlay_sequence ?? -1));
      if (!op) return { ok: false, partial: true, msg: `Could not apply pick ${p.card ? name(p.card.code) : (p.finish ? 'finish' : 'cancel')} (not available now). Picks before it were applied.` };
      if (!push(S, { seat, resp: op.resp, label: op.label })) return { ok: false, partial: true, msg: 'The game rejected a pick.' };
    }
    return { ok: true };
  }
  return { ok: false, msg: 'nothing to do' };
}

// ---- solver-driven first turn ----
// Re-express a recorded solver choice in THIS game's option list (deck order differs, so indexes can't be reused; labels can).
function mapResp(m, o, want) {
  const T = m.type;
  if (T === M.SELECT_CARD || T === M.SELECT_TRIBUTE || T === M.SELECT_SUM) {
    const used = new Set(), idx = [];
    for (const p of want.lab.split(' + ')) { const j = o.findIndex((x, i) => x[0] === p && !used.has(i)); if (j < 0) return null; used.add(j); idx.push(o[j][1]); }
    return { type: T === M.SELECT_TRIBUTE ? R.SELECT_TRIBUTE : T === M.SELECT_SUM ? R.SELECT_SUM : R.SELECT_CARD, indicies: idx };
  }
  if (T === M.SELECT_PLACE || T === M.SELECT_DISFIELD) {
    const used = new Set(), picks = [];
    for (const p of want.lab.split('|')) { const j = o.findIndex((x, i) => x[0] === p && !used.has(i)); if (j < 0) return null; used.add(j); picks.push(o[j][1]); }
    return { type: T === M.SELECT_DISFIELD ? R.SELECT_DISFIELD : R.SELECT_PLACE, places: picks };
  }
  if (T === M.SORT_CHAIN || T === M.SORT_CARD) return want.resp;
  if (T === M.SELECT_CHAIN && want.lab === 'pass') return { type: R.SELECT_CHAIN, index: null };
  const hit = o.find(x => x[0] === want.lab); if (!hit) return null;
  if (T === M.ANNOUNCE_RACE) return { type: R.ANNOUNCE_RACE, races: [hit[1]] };
  if (T === M.ANNOUNCE_ATTRIB) return { type: R.ANNOUNCE_ATTRIB, attributes: [hit[1]] };
  return hit[1];
}

const require = createRequire(import.meta.url);
async function autoT1(S, g, seat, secs) {
  const { makeSolver } = require('./solver/solver-core.cjs'); const H = require('./solver/helper-host.cjs');
  const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, 'solver', 'data.json'), 'utf8'));
  const DB = cardDB(); const lb = await lib();
  const myTeam = teamOf(g, seat);
  if (S.turn !== 1 || myTeam !== 0) return 'autot1 only works for the seat that goes first, on turn 1.';
  const deck = g.seats[seat].deck;
  const D = { lib: lb, main: deck.main, extra: deck.extra, opp: DATA.opp, codes: DATA.codes, cdata: c => coreCardData(c), name: c => DB.text.get(c)?.name,
    str: (c, i) => DB.text.get(c)?.['str' + (i + 1)], sys: n => DB.sys.get(n), script: n => readScript(n) };
  const SV = await makeSolver(createCore, E, D);
  const hand = lb.duelQueryLocation(S.h, { flags: 0x1, controller: myTeam, location: L.HAND }).map(c => c.code);
  const keyOf = new Map(Object.entries(DATA.keys).map(([k, c]) => [c, k])); keyOf.set(14558127, 'ash'); keyOf.set(14558128, 'ash');
  const KEYNAME = Object.fromEntries(Object.entries(DATA.keys).map(([k, c]) => [k, D.name(c)]));
  let cands = []; try { cands = H.solverCands(hand.map(c => keyOf.get(c)).filter(Boolean)).cands.filter(c => DATA.tp[c.key]).map(c => { const [sd, vs] = DATA.tp[c.key];
    return { key: c.key, title: c.title, top: c.top, seed: sd, variants: vs.map(v => v.map(i => DATA.toks[i].replace(/\{(\w+)\}/g, (_, r) => c.roles && c.roles[r] ? KEYNAME[c.roles[r]] : '{' + r + '}'))) }; }); } catch (e) {}
  const out = SV.solve(hand, cands, secs * 1000, null);
  if (!out.best) return 'solver found no line for this hand.';
  const trace = out.best.trace; let k = 0, played = 0, why = null;
  while (S.pending && !S.ended && S.turn === 1 && pendingSeat(S) === seat && k < trace.length) {
    SV.setHandle(S.h);
    const o = SV.options(S.pending, myTeam);
    let want = trace[k];
    while (want && want.t === M.SELECT_CHAIN && S.pending.type !== M.SELECT_CHAIN && k + 1 < trace.length) { k++; want = trace[k]; } // empty chain windows are auto-passed in the game
    const resp = mapResp(S.pending, o, want);
    if (!resp || S.pending.type !== want.t) { why = `line diverged at step ${k + 1} (wanted "${want.lab}")`; break; }
    if (!push(S, { seat, resp, auto: true })) { why = `engine rejected step ${k + 1} ("${want.lab}")`; break; }
    k++; played++; autoAdvance(S);
  }
  return `solver line (score ${out.best.score.toFixed(2)}): played ${played}/${trace.length} steps` + (why ? `; STOPPED: ${why}` : '');
}

async function main() {
  const cmd = args[0];
  if (cmd === 'card') { const q = args.slice(1).join(' '); const c = findCard(q); if (!c) return console.log('not found'); if (Array.isArray(c)) return console.log('Matches:\n' + c.map(x => name(x)).join('\n')); return console.log(cardFull(c)); }
  const id = args[1];
  if (cmd === 'new') {
    if (fs.existsSync(gpath(id)) && !has('force')) throw new Error('game exists (use --force)');
    const d0 = parseYdk(fs.readFileSync(flag('p0'), 'utf8')), d1 = parseYdk(fs.readFileSync(flag('p1'), 'utf8'));
    const g = { id, created: new Date().toISOString(), seed: String(flag('seed', String(Math.floor(Math.random() * 2 ** 40)))), first: +flag('first', '0'), lab: has('lab'),
      seats: { 0: { name: flag('name0', path.basename(flag('p0'), '.ydk')), deck: d0, hand: resolveHand(flag('hand0'), d0) }, 1: { name: flag('name1', path.basename(flag('p1'), '.ydk')), deck: d1, hand: resolveHand(flag('hand1'), d1) } },
      responses: [], cursor: { 0: 0, 1: 0 }, goldfish: (flag('goldfish', '') || '').split(',').filter(x => x !== '').map(Number),
      bot: {}, script: {}, stopAfterTurn: flag('stopturn') ? +flag('stopturn') : null };
    for (const s of [0, 1]) { if (flag('bot' + s)) g.bot[s] = flag('bot' + s); }
    if (flag('script')) { const sc = flag('script').split(',').filter(Boolean); for (const s of [0, 1]) if ((g.goldfish.includes(s)) || g.bot[s]) g.script[s] = sc; }
    const S = autoAdvance(await simulate(g)); save(g);
    console.log(`Game ${id} created. Seat ${g.first} goes first. Decision pending for seat ${pendingSeat(S)}.`);
    if (S.errors.length) console.log('Core messages:\n' + [...new Set(S.errors)].slice(0, 10).join('\n'));
    return;
  }
  if (cmd === 'status') { const g = load(id); const S = await simulate(g); console.log(J({ id, turn: S.turn, ended: S.ended, winner: S.winner === null ? null : seatOf(g, S.winner), pendingSeat: pendingSeat(S), decisions: g.responses.length, lp: [S.lp[teamOf(g, 0)], S.lp[teamOf(g, 1)]] })); return; }
  const seat = +args[2];
  if (cmd === 'view') { if (args.includes('--ed')) process.env.YGO_ED = '1'; const g = load(id); const S = autoAdvance(await simulate(g)); console.log(render(S, seat, { board: true })); save(g); return; }
  if (cmd === 'autot1') {
    const g = load(id); const S = autoAdvance(await simulate(g));
    const msg = await autoT1(S, g, seat, +(args[3] || 8)); autoAdvance(S); save(g);
    console.log(msg); console.log(render(S, seat)); return;
  }
  if (cmd === 'act') {
    const g = load(id); const S = autoAdvance(await simulate(g));
    if (S.ended || stopped(S)) return console.log(render(S, seat));
    if (pendingSeat(S) !== seat) return console.log('Not your decision right now.\n' + render(S, seat, { board: false }));
    const quiet = args.includes('-q') || args.includes('--q');
    const raw = args.slice(3).filter(a => !(a === '-q' || a === '--q')).join(' ');
    const answers = raw.split(';').map(x => x.trim()).filter(Boolean);
    const myTeam = teamOf(g, seat); const startEv = S.events.length; let applied = 0, stopMsg = null;
    for (let ai = 0; ai < answers.length; ai++) {
      if (S.ended || stopped(S)) { stopMsg = 'game/turn ended'; break; }
      if (pendingSeat(S) !== seat) { stopMsg = `opponent's decision now (after ${applied} answer(s))`; break; }
      if (ai > 0 && S.events.slice(startEv).some(e => (e.k === 'chain' || e.k === 'sum') && e.a !== null && e.a !== myTeam)) { stopMsg = `the opponent responded — stopped before answer ${ai + 1} ("${answers[ai]}") so you can re-plan`; break; }
      const resolved = resolveLabels(S, seat, answers[ai]);
      if (resolved.error) { stopMsg = `answer ${ai + 1} ("${answers[ai]}"): ${resolved.error}`; break; }
      const r = await applyAnswer(S, seat, resolved.text);
      if (r.ok || r.partial) autoAdvance(S);
      if (!r.ok) { stopMsg = `answer ${ai + 1} ("${answers[ai]}"): ${r.msg}`; break; }
      applied++;
    }
    save(g);
    if (answers.length > 1 || stopMsg) console.log(`[${applied}/${answers.length} answers applied${stopMsg ? '; STOPPED: ' + stopMsg : ''}]`);
    console.log(render(S, seat, { board: quiet ? false : 'auto' })); save(g);
    return;
  }
  if (cmd === 'fork') { const g = load(id); if (!g.lab) throw new Error('fork only for lab games'); const nid = args[2]; if (fs.existsSync(gpath(nid)) && !has('force')) throw new Error('target game exists'); g.id = nid; save(g); console.log(`Forked ${id} -> ${nid} at decision #${g.responses.length}.`); return; }
  if (cmd === 'log') {
    const g = load(id); const S = await simulate(g); const who = args[2];
    if (who === 'all') console.log(S.events.map(e => e.s[0] === e.s[1] ? e.s[0] : `[s0] ${e.s[0] ?? '-'}\n[s1] ${e.s[1] ?? '-'}`).join('\n'));
    else console.log(S.events.map(e => e.s[+who]).filter(x => x != null).join('\n'));
    return;
  }
  if (cmd === 'undo') {
    const g = load(id); if (!g.lab) throw new Error('undo only in lab games');
    let n = +(args[2] || 1);
    while (n > 0 && g.responses.length) { const r = g.responses.pop(); if (!r.auto) n--; }
    while (g.responses.length && g.responses[g.responses.length - 1].auto) g.responses.pop();
    const S = autoAdvance(await simulate(g)); g.cursor = { 0: S.events.length, 1: S.events.length }; save(g);
    console.log(render(S, pendingSeat(S) ?? 0, { events: false })); return;
  }
  console.log('unknown command');
}
main().catch(e => { console.error('ERROR:', e.message); console.error(e.stack.split('\n').slice(1, 4).join('\n')); process.exit(1); });
