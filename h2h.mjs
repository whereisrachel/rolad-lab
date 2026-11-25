// Head-to-head after the opponent's turn: two sets of lines for the same hands, played into the same fresh opponent hands.
// node h2h.mjs '<json>' { pairs: [{ hand: name, a: [files], b: [files] }], A: 'label', B: 'label', opps: [...], seeds: [...], minutes }
// Each line file x each opponent deck x each seed -> oppturn.mjs margin. Paired by (hand, order, opp, seed). Pieces go to hub helpers.
import fs from 'fs'; import os from 'os'; import { runNode, helperSlots } from './src/remote.mjs';
const t = JSON.parse(process.argv[2]); const OPPS = t.opps || ['o_ss_panama', 'o_elfnote', 'o_despia', 'o_angelechy']; const SEEDS = t.seeds || [5001, 5002, 5003];
const LOCAL = Math.max(1, +(t.par || os.cpus().length - 1)); let R = await helperSlots(); const SEM = { l: LOCAL, r: R }; const W = [];
const slot = async (job) => { for (;;) { if (SEM.r > 0) { SEM.r--; try { return await job(true); } finally { SEM.r++; const w = W.shift(); if (w) w(); } } if (SEM.l > 0) { SEM.l--; try { return await job(false); } finally { SEM.l++; const w = W.shift(); if (w) w(); } } await new Promise(r => W.push(r)); } };
setInterval(async () => { const h = await helperSlots(); if (h !== R) { SEM.r += h - R; R = h; for (let i = 0; i < Math.max(0, h); i++) { const w = W.shift(); if (w) w(); } } }, 120000).unref();
const items = []; for (const p of t.pairs) for (const side of ['a', 'b']) p[side].forEach((f, i) => { if (!fs.existsSync(f)) return; for (const o of OPPS) for (const s of SEEDS) items.push({ hand: p.hand, side, ord: i + 1, f, o, s }); });
console.log(`h2h: ${items.length} opponent turns, helper slots ${R}`); let done = 0;
await Promise.all(items.map(async (it) => { const so = await slot((remote) => runNode('oppturn.mjs', { line: it.f, opp: `decks/${it.o}.ydk`, oppSeed: it.s, minutes: t.minutes || 0.5, hands: 1, choke: false }, { remote, files: [it.f, `decks/${it.o}.ydk`] }));
  const m = /OPPTURN (.*)/.exec(so || ''); it.r = m ? JSON.parse(m[1]) : null; if (++done % 25 === 0) console.log(`progress ${done}/${items.length}`); }));
const mean = (a) => a.length ? a.reduce((s, x) => s + x, 0) / a.length : NaN; const se = (a) => { const m = mean(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / Math.max(1, a.length - 1) / Math.max(1, a.length)); };
let md = `# Head-to-head after their turn: ${t.A || 'A'} vs ${t.B || 'B'}\n${new Date().toISOString()}\n\nSame hands, same deck orders, same fresh opponent hands (${OPPS.join(', ')}; seeds ${SEEDS.join(', ')}). Margin = what you keep minus what they build (−10 more if they OTK). Diff = ${t.B} − ${t.A}, paired.\n\n| hand | ${t.A} | ${t.B} | diff (± se) | ${t.B} better / worse | OTKs ${t.A} / ${t.B} |\n|---|---|---|---|---|---|\n`;
const allD = [], out = {};
for (const p of t.pairs) { const A = items.filter(x => x.hand === p.hand && x.side === 'a' && x.r), B = items.filter(x => x.hand === p.hand && x.side === 'b' && x.r);
  const key = (x) => `${x.ord}|${x.o}|${x.s}`; const bm = new Map(B.map(x => [key(x), x])); const D = A.filter(x => bm.has(key(x))).map(x => bm.get(key(x)).r.margin - x.r.margin); allD.push(...D);
  out[p.hand] = { a: mean(A.map(x => x.r.margin)), b: mean(B.map(x => x.r.margin)), d: mean(D), se: se(D), n: D.length };
  md += `| ${p.hand} | ${mean(A.map(x => x.r.margin)).toFixed(2)} | ${mean(B.map(x => x.r.margin)).toFixed(2)} | ${mean(D).toFixed(2)} ± ${se(D).toFixed(2)} (n ${D.length}) | ${D.filter(d => d > 0.05).length} / ${D.filter(d => d < -0.05).length} | ${A.filter(x => x.r.otk).length} / ${B.filter(x => x.r.otk).length} |\n`; }
md += `| **all** | | | **${mean(allD).toFixed(2)} ± ${se(allD).toFixed(2)}** (n ${allD.length}) | ${allD.filter(d => d > 0.05).length} / ${allD.filter(d => d < -0.05).length} | |\n\nBy opponent deck (diff ${t.B} − ${t.A}):\n\n`;
for (const o of OPPS) { const D = []; for (const p of t.pairs) { const A = items.filter(x => x.hand === p.hand && x.side === 'a' && x.r && x.o === o); const bm = new Map(items.filter(x => x.hand === p.hand && x.side === 'b' && x.r && x.o === o).map(x => [`${x.ord}|${x.s}`, x])); for (const x of A) { const y = bm.get(`${x.ord}|${x.s}`); if (y) D.push(y.r.margin - x.r.margin); } }
  md += `- ${o}: ${mean(D).toFixed(2)} ± ${se(D).toFixed(2)} (n ${D.length})\n`; }
fs.mkdirSync('reports', { recursive: true }); const id = t.id || 'h2h'; fs.writeFileSync(`reports/${id}.md`, md); fs.writeFileSync(`reports/${id}.json`, JSON.stringify({ out, items: items.map(({ r, ...x }) => ({ ...x, margin: r ? r.margin : null, otk: r ? !!r.otk : null })) }));
console.log(md); process.exit(0);
