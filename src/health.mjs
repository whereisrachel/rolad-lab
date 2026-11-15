// Self-checks shared by realtest / screen / loo: slim shard records, run health, invalid-run marker.
import fs from 'fs';
export const slim = (v) => ({ id: v.id, v: v.v, line: (v.v || 0) >= 6 ? v.line : undefined, err: v.err, crash: !!v.crash, errs: v.errs || 0, played: v.played, hand: v.hand,
  board: typeof v.board === 'string' ? ((v.board.match(/Monsters:[^\n]*/g) || []).slice(1, 2).join(' ') + ' ' + (v.board.match(/Spell\/Trap:[^\n]*/g) || []).slice(1, 2).join(' ')) : (v.board || '') });
// res: {taskId: record}; total: number of tasks expected
export function health(res, total) {
  const rs = Object.values(res); const n = rs.length; const crash = rs.filter(r => r.crash).length; const cfgErr = rs.filter(r => (r.errs || 0) > 0).length;
  const msgs = {}; for (const r of rs) if (r.err) { const k = String(r.err).replace(/\d+/g, '#').slice(0, 80); msgs[k] = (msgs[k] || 0) + 1; }
  const missing = total - n; const crashPct = n ? 100 * crash / n : 100;
  const invalid = crashPct > 1 || missing > Math.max(2, total * 0.02);
  let o = `## Run health: ${invalid ? 'INVALID - do not use these numbers' : 'OK'}\n- searches returned: ${n}/${total}${missing ? ` (${missing} missing)` : ''}\n- hands that crashed (scored 0): ${crash} (${crashPct.toFixed(1)}%)\n- hands where at least one search pass errored (best of the rest kept): ${cfgErr}\n`;
  const top = Object.entries(msgs).sort((a, b) => b[1] - a[1]).slice(0, 5); if (top.length) o += '- errors: ' + top.map(([k, c]) => `${c}x ${k}`).join(' | ') + '\n';
  if (invalid) { fs.mkdirSync('results', { recursive: true }); fs.writeFileSync('results/INVALID', o); }
  return { md: o + '\n', invalid };
}
