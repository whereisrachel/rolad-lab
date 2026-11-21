// Re-cleans stored library lines with the current rules: replays each line, drops actions that change nothing (same pass as deepw's
// clean-up), re-scores it with hand traps kept in hand counted, and marks it so the PC pulls the cleaned copy.
// node libclean.mjs [dir=data/lib-L2-vand3]
import fs from 'fs'; import path from 'path';
import { parseYdk, name, ROOT } from './src/cards.mjs'; import { replay } from './src/replay.mjs'; import { disruption, setHT } from './src/disrupt.mjs';
setHT(+(process.env.HTW ?? 1)); process.env.CANON = '1'; process.env.LIGHT = '1';
const DIR = process.argv[2] || 'data/lib-L2-vand3';
const OPP = parseYdk(fs.readFileSync(path.join(ROOT, 'decks', 'oppHT.ydk'), 'utf8')); const GS = 13039848;
const SCN = { ash: 'Ash Blossom & Joyous Spring', imperm: 'Infinite Impermanence', droll: 'Droll & Lock Bird' };
const { findCard } = await import('./src/cards.mjs'); const codeOf = (n) => { const c = findCard(n); return Array.isArray(c) ? c[0] : c; };
const mk = (x) => { const need = [x.scn].filter(q => SCN[q]); const op = OPP.main.slice(), oh = []; for (const q of need) { const i = op.findIndex(k => name(k) === name(codeOf(SCN[q]))); if (i >= 0) oh.push(op.splice(i, 1)[0]); }
  while (oh.length < 5) oh.push(op.splice(op.indexOf(GS), 1)[0]);
  return { id: 'lc', seed: String(x.seed ?? 7), first: 0, lab: true, seats: { 0: { name: 'A', deck: { main: x.order.slice(), extra: x.extra.slice(), side: [] }, hand: x.order.slice(0, 5) }, 1: { name: 'o', deck: { ...OPP, main: [...oh, ...op] }, hand: oh } }, responses: [], cursor: { 0: 0, 1: 0 }, goldfish: [1], bot: {}, script: { 1: need }, after: { 1: x.after || 0 }, stopAfterTurn: null }; };
const START = /^(Activate .*\((hand|S\d|M\d|EMZ-[LR]|GY|Field|FZ|banishment|PZ-[LR]|Deck|Extra Deck)\)|Normal Summon .*\(|Set (Spell\/Trap|monster)|Special Summon \(procedure\)|Link Summon|Synchro Summon|Xyz Summon|Tribute Summon|Ritual Summon|Fusion Summon)/;
let n = 0, changed = 0, actionsDropped = 0;
for (const fn of fs.readdirSync(DIR).filter(f => f.endsWith('.json'))) {
  const p = path.join(DIR, fn); let x; try { x = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { continue; } if (x.cleaned) continue; n++;
  const val = async (steps) => { let mx = -1; try { await replay(mk(x), steps, (S) => { const v = disruption(S, 0); if (v > mx) mx = v; }); } catch {} return mx; };
  let steps = (x.raw || []).filter(e => e.seat === 0 && !e.auto && e.label); const base = await val(steps); const dropped = [];
  const blocks = () => { const b = []; steps.forEach((e, i) => { if (START.test(e.label) || !b.length) b.push([i, i]); else b[b.length - 1][1] = i; }); return b; };
  for (let bi = blocks().length - 1; bi >= 0; bi--) { const B = blocks(); if (bi >= B.length) continue; const [a0, a1] = B[bi]; const trial = [...steps.slice(0, a0), ...steps.slice(a1 + 1)];
    if (await val(trial) >= base - 0.01) { dropped.push(steps[a0].label); steps = trial; } }
  const v2 = await val(steps); x.vOld = x.v; x.v = +Math.max(v2, -1).toFixed(2); x.raw = steps; x.dropped = dropped; x.cleaned = new Date().toISOString(); x.when = x.cleaned;
  // keep the used-card flags in step with the cleaned line
  const lbl = steps.map(e => e.label).join(' | '); x.used = x.hand.map(c => lbl.includes(c));
  fs.writeFileSync(p, JSON.stringify(x)); if (dropped.length) { changed++; actionsDropped += dropped.length; }
  if (n % 20 === 0) console.log(`${n} lines checked, ${changed} cleaned (${actionsDropped} useless actions removed)`);
}
console.log(`done: ${n} lines checked, ${changed} cleaned (${actionsDropped} useless actions removed)`);
