// node calib.mjs hash            -> prints the lab-code hash (src/*.mjs)
// node calib.mjs merge dir       -> writes reports/calibration.json + .md from guidecheck JSONOUT files
// node calib.mjs status          -> one-line status for reports (PASS/FAIL/STALE)
import fs from 'fs'; import crypto from 'crypto';
export function codeHash() { const h = crypto.createHash('sha256'); for (const f of fs.readdirSync('src').sort()) if (f.endsWith('.mjs')) h.update(fs.readFileSync('src/' + f)); return h.digest('hex').slice(0, 12); }
const [cmd, dir] = process.argv.slice(2);
if (cmd === 'hash') console.log(codeHash());
if (cmd === 'merge') {
  const rows = []; for (const f of fs.readdirSync(dir)) if (f.endsWith('.jsonl')) for (const l of fs.readFileSync(dir + '/' + f, 'utf8').split('\n')) if (l.trim()) rows.push(JSON.parse(l));
  rows.sort((a, b) => a.id.localeCompare(b.id)); const ok = rows.filter(r => r.lab >= r.guide - 0.5);
  const mean = (k) => rows.reduce((s, r) => s + r[k], 0) / (rows.length || 1);
  const pass = rows.length >= 8 && ok.length / rows.length >= 0.75 && mean('lab') >= mean('guide');
  const c = { hash: codeHash(), date: new Date().toISOString(), n: rows.length, matched: ok.length, guideMean: +mean('guide').toFixed(2), labMean: +mean('lab').toFixed(2), pass, rows };
  fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync('reports/calibration.json', JSON.stringify(c, null, 1));
  let md = `# Calibration: lab vs the guide's own tested boards\ncode ${c.hash}, ${c.date}\n**${pass ? 'PASS' : 'FAIL'}**: lab within 0.5 of (or above) the guide on ${ok.length}/${rows.length} hands; mean guide ${c.guideMean}, lab ${c.labMean}\n\n| hand | starter | guide | lab |\n|---|---|---|---|\n`;
  for (const r of rows) md += `| ${r.id} | ${r.hand[0]} | ${r.guide.toFixed(2)} | ${r.lab.toFixed(2)}${r.lab < r.guide - 0.5 ? ' BELOW' : ''} |\n`;
  fs.writeFileSync('reports/calibration.md', md); console.log(md);
}
if (cmd === 'status') {
  let c = null; try { c = JSON.parse(fs.readFileSync('reports/calibration.json', 'utf8')); } catch {}
  const h = codeHash();
  if (!c) console.log('## Calibration: NONE - lab accuracy vs the guide not checked for this code\n');
  else if (c.hash !== h) console.log(`## Calibration: STALE - lab code changed since the last check (${c.date.slice(0, 16)}); accuracy unverified\n`);
  else console.log(`## Calibration: ${c.pass ? 'PASS' : 'FAIL'} - lab matches the guide on ${c.matched}/${c.n} test hands (guide mean ${c.guideMean}, lab ${c.labMean})\n`);
}
