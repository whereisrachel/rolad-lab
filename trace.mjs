// trace.mjs (Nov 28): replay a stored line and log, per main-phase action, every engine event (costs, chain links, targets, resolution moves)
// node trace.mjs <line.json> <out.json>
import fs from 'fs'; import { mkGame, replay } from './src/replay.mjs'; import * as E from './src/engine.mjs'; import { name } from './src/cards.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(1); process.env.CANON = '1'; process.env.LIGHT = '1';
const [file, out] = process.argv.slice(2); const c = JSON.parse(fs.readFileSync(file, 'utf8'));
const g = mkGame({ extra: c.extra, order: c.order, seed: c.seed ?? 7 }); const steps = c.raw.filter(e => e.seat === 0 && !e.auto && e.label);
const segs = []; let last = 0, lastI = 0;
const r = await replay(g, c.raw, (S, d, i) => { const ev = S.events.slice(last).map(e => ({ k: e.k, t: e.s[0], x: e.x || null })); if (segs.length || ev.length) segs.push({ labels: steps.slice(lastI, i).map(e => e.label), ev }); last = S.events.length; lastI = i; });
fs.writeFileSync(out, JSON.stringify({ v: +disruption(r.S, 0).toFixed(2), ok: r.ok, segs, board: String(E.boardView(r.S, 0)) }));
console.log('ok', r.ok, segs.length);
