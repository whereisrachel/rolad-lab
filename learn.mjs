// The lab learns its own turn-1 scoring from played-out opponent turns.
// Data: every opponent's turn played into one of your end boards (helper PCs' idle work, board rankings): the end-of-turn-1 board
// (what is on your field / set / in hand) and the result after their turn (margin = what you still have minus what they end on).
// Fit: ridge regression of margin on board features; checked by 5-fold cross-validation against the hand-set scorer.
// node learn.mjs [list=L2-vand3]  -> data/learned-<list>.json + reports/learned-<list>.md
import fs from 'fs';
const LIST = process.argv[2] || 'L2-vand3'; const STORE = `data/evals-${LIST}.jsonl`;
// 1) pull new samples from the hub (helper PCs upload them there)
const hub = fs.existsSync('data/hub.json') ? JSON.parse(fs.readFileSync('data/hub.json', 'utf8')).url : null;
const have = new Set(); let since = ''; if (fs.existsSync(STORE)) for (const l of fs.readFileSync(STORE, 'utf8').split('\n')) { if (!l) continue; try { const x = JSON.parse(l); have.add(x.id); if ((x.when || '') > since) since = x.when; } catch {} }
if (hub) { try { const arr = await (await fetch(hub + '/evals?since=' + encodeURIComponent(since), { signal: AbortSignal.timeout(120000) })).json(); let n = 0;
  for (const x of arr) if (x.id && !have.has(x.id) && (x.list || LIST) === LIST && x.t1) { fs.appendFileSync(STORE, JSON.stringify(x) + '\n'); have.add(x.id); n++; } console.log(`pulled ${n} new samples from the hub`); } catch (e) { console.log('hub pull failed: ' + e.message); } }
// 2) samples: hub data + every opponent hand in the board rankings
const S = []; if (fs.existsSync(STORE)) for (const l of fs.readFileSync(STORE, 'utf8').split('\n')) { if (!l) continue; try { const x = JSON.parse(l); if (x.t1 && Number.isFinite(x.margin)) S.push({ f: x.t1, y: x.margin, old: x.ourAfterT1 ?? null }); } catch {} }
for (const fn of fs.existsSync('reports') ? fs.readdirSync('reports').filter(f => f.startsWith(`oppboards-${LIST}`) && f.endsWith('.json')) : []) {
  try { for (const r of JSON.parse(fs.readFileSync('reports/' + fn, 'utf8'))) for (const o of Object.keys(r).filter(k => /^o_/.test(k))) { const z = r[o]; if (z && z.t1 && z.each) for (const y of z.each) S.push({ f: z.t1, y, old: r.v ?? null }); } } catch {} }
console.log(`${S.length} samples`); if (S.length < 50) { console.log('not enough data yet'); process.exit(0); }
// 3) features seen in at least 10 samples
const cnt = {}; for (const s of S) for (const k of Object.keys(s.f)) cnt[k] = (cnt[k] || 0) + 1;
const keys = Object.keys(cnt).filter(k => cnt[k] >= 10).sort(); const P = keys.length; const idx = Object.fromEntries(keys.map((k, i) => [k, i]));
const row = (f) => { const v = new Float64Array(P); for (const [k, x] of Object.entries(f)) if (k in idx) v[idx[k]] = x; return v; };
const X = S.map(s => row(s.f)), Y = S.map(s => s.y);
function fit(ix, lambda) { const my = ix.reduce((a, i) => a + Y[i], 0) / ix.length; const mx = new Float64Array(P); for (const i of ix) for (let j = 0; j < P; j++) mx[j] += X[i][j] / ix.length;
  const A = Array.from({ length: P }, () => new Float64Array(P)), b = new Float64Array(P);
  for (const i of ix) { const xi = X[i]; const yi = Y[i] - my; for (let j = 0; j < P; j++) { const xj = xi[j] - mx[j]; if (!xj) continue; b[j] += xj * yi; for (let k = 0; k < P; k++) A[j][k] += xj * (xi[k] - mx[k]); } }
  for (let j = 0; j < P; j++) A[j][j] += lambda;
  // solve A w = b (Gaussian elimination with partial pivoting)
  const M = A.map((r, j) => [...r, b[j]]); for (let c = 0; c < P; c++) { let p = c; for (let r = c + 1; r < P; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r; [M[c], M[p]] = [M[p], M[c]]; const d = M[c][c] || 1e-9;
    for (let r = 0; r < P; r++) if (r !== c) { const f = M[r][c] / d; if (f) for (let k = c; k <= P; k++) M[r][k] -= f * M[c][k]; } }
  const w = M.map((r, j) => r[P] / (r[j] || 1e-9)); let bias = my; for (let j = 0; j < P; j++) bias -= w[j] * mx[j]; return { w, bias }; }
const pred = (m, x) => { let v = m.bias; for (let j = 0; j < P; j++) v += m.w[j] * x[j]; return v; };
const corr = (a, b) => { const n = a.length, ma = a.reduce((p, q) => p + q, 0) / n, mb = b.reduce((p, q) => p + q, 0) / n; let c = 0, va = 0, vb = 0; for (let i = 0; i < n; i++) { c += (a[i] - ma) * (b[i] - mb); va += (a[i] - ma) ** 2; vb += (b[i] - mb) ** 2; } return c / Math.sqrt(va * vb || 1); };
// 4) 5-fold cross-validation for the ridge strength, and against the hand-set turn-1 score
const order = S.map((_, i) => i).sort((a, b) => ((a * 2654435761) % 1000) - ((b * 2654435761) % 1000)); let best = null;
for (const lambda of [1, 5, 20, 80]) { const pr = new Array(S.length);
  for (let k = 0; k < 5; k++) { const test = order.filter((_, i) => i % 5 === k), train = order.filter((_, i) => i % 5 !== k); const m = fit(train, lambda); for (const i of test) pr[i] = pred(m, X[i]); }
  const c = corr(pr, Y); if (!best || c > best.c) best = { lambda, c }; }
const withOld = S.map((s, i) => [s.old, Y[i]]).filter(([o]) => Number.isFinite(o)); const oldC = withOld.length > 20 ? corr(withOld.map(z => z[0]), withOld.map(z => z[1])) : null;
const model = fit(order, best.lambda); const W = Object.fromEntries(keys.map((k, j) => [k, +model.w[j].toFixed(3)]));
const out = { list: LIST, when: new Date().toISOString(), n: S.length, features: P, lambda: best.lambda, cvCorr: +best.c.toFixed(3), oldCorr: oldC === null ? null : +oldC.toFixed(3), bias: +model.bias.toFixed(3), w: W };
fs.writeFileSync(`data/learned-${LIST}.json`, JSON.stringify(out, null, 1));
const top = Object.entries(W).sort((a, b) => b[1] - a[1]);
let md = `# Learned scoring — ${LIST}\n${out.when}\n\n- Samples (opponent turns played into your boards): **${out.n}**; features: ${P}\n- How well it predicts the result after their turn (cross-validated correlation): **${out.cvCorr}**  vs the hand-set turn-1 score: **${out.oldCorr ?? '-'}**\n- ${out.cvCorr > (out.oldCorr ?? 0) + 0.05 ? 'The learned scoring predicts survival better than the hand-set one.' : 'Not better than the hand-set scoring yet — needs more data.'}\n\n## What helps you survive their turn (value per copy, in board points)\n| feature | value | samples |\n|---|---|---|\n`;
const lab = (k) => k.startsWith('M:') ? k.slice(2) + ' (monster)' : k.startsWith('S:') ? k.slice(2) + ' (face-up spell/trap)' : k.startsWith('T:') ? k.slice(2) + ' (set)' : k.startsWith('H:') ? k.slice(2) + ' (in hand)' : k === '#hand' ? 'each card in hand' : k === '#gy' ? 'each card in GY' : k === '#field' ? 'each card on field' : k;
for (const [k, v] of top.slice(0, 25)) md += `| ${lab(k)} | ${v > 0 ? '+' : ''}${v} | ${cnt[k]} |\n`;
md += `\n## What hurts\n| feature | value | samples |\n|---|---|---|\n`; for (const [k, v] of top.slice(-15).reverse()) md += `| ${lab(k)} | ${v} | ${cnt[k]} |\n`;
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/learned-${LIST}.md`, md); console.log(md.split('\n').slice(0, 7).join('\n'));
