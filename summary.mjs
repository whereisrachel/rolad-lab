// One-page summary of the last day: jobs run and their verdicts, failures, and the line library's growth and novelty.
// node summary.mjs [--hours 24]  -> prints markdown and writes reports/summary-<date>.md (the lab server also serves it at /api/summary)
import fs from 'fs';
const a = process.argv.slice(2); const H = +(a[a.indexOf('--hours') + 1] || 24) || 24; const since = Date.now() - H * 3600000;
const jobs = (() => { try { return JSON.parse(fs.readFileSync('data/jobs.json', 'utf8')); } catch { return []; } })();
const recent = jobs.filter(j => Date.parse(j.started || j.created || 0) >= since);
const L = [`# Lab summary — last ${H} h (${new Date().toLocaleString()})`, ''];
L.push('## Jobs');
if (!recent.length) L.push('- none ran');
for (const j of recent) { const st = j.status === 'done' ? 'done' : j.status === 'running' ? 'still running' : j.status === 'cancelled' ? 'cancelled' : `**${j.status}**`;
  L.push(`- #${j.id} ${j.title || j.kind} — ${st}${j.last ? `: ${String(j.last).replace(/^\[[^\]]*\]\s*/, '').slice(0, 220)}` : ''}${j.error ? ` — error: ${String(j.error).slice(0, 160)}` : ''}`); }
const bad = recent.filter(j => j.status === 'error' || j.error); L.push('', bad.length ? `**${bad.length} job(s) failed — needs a look.**` : 'No failed jobs.');
L.push('', '## Line library');
for (const d of fs.existsSync('data') ? fs.readdirSync('data').filter(x => x.startsWith('lib-') && fs.statSync('data/' + x).isDirectory()) : []) {
  const xs = []; for (const fn of fs.readdirSync('data/' + d).filter(x => x.endsWith('.json'))) { try { const x = JSON.parse(fs.readFileSync(`data/${d}/${fn}`, 'utf8')); xs.push({ when: x.when || '', nov: x.novelty || '', v: x.v }); } catch {} }
  xs.sort((p, q) => p.when < q.when ? -1 : 1); const day = xs.filter(x => Date.parse(x.when) >= since); const last100 = xs.slice(-100);
  const live = last100.length ? Math.round(100 * last100.filter(x => x.nov && x.nov !== 'repeat').length / last100.length) : null;
  L.push(`- ${d.slice(4)}: ${xs.length} lines stored (+${day.length} in the last ${H} h); still finding something new on ${live ?? '-'}% of the last ${last100.length} hands${live !== null && live < 5 && last100.length >= 100 ? ' — **library looks complete for this list**' : ''}`); }
const sync = (() => { try { return JSON.parse(fs.readFileSync('data/lib-sync.json', 'utf8')); } catch { return null; } })();
if (sync) L.push(`- last pulled from the library servers: ${Object.values(sync).sort().pop() || 'never'}`);
const out = L.join('\n'); fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/summary-${new Date().toISOString().slice(0, 10)}.md`, out); console.log(out);
