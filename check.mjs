// node check.mjs <deck.ydk>...   names, counts, TCG legality (2026.10 list), scripts present
import fs from 'fs'; import path from 'path';
import { cardDB, name, parseYdk, banlist, VENDOR } from './src/cards.mjs';
const lim = banlist(), D = cardDB();
for (const file of process.argv.slice(2)) {
  const d = parseYdk(fs.readFileSync(file, 'utf8')); const byName = new Map(); const probs = [];
  for (const c of [...d.main, ...d.extra, ...d.side]) {
    const dt = D.data.get(c); if (!dt) { probs.push(`unknown passcode ${c}`); continue; }
    const base = dt.alias && Math.abs(dt.alias - c) < 20 ? dt.alias : c; byName.set(base, (byName.get(base) || 0) + 1);
    const has = ['official', 'pre-release'].some(s => fs.existsSync(path.join(VENDOR, 'scripts', s, `c${base}.lua`))) || (dt.type & 0x10 && !(dt.type & 0x20));
    if (!has) probs.push(`no script: ${name(c)}`);
  }
  for (const [c, n] of byName) { const L = lim.has(c) ? lim.get(c) : 3; if (n > L) probs.push(`${name(c)}: ${n} copies, limit ${L}`); }
  console.log(`${file}: main ${d.main.length}, extra ${d.extra.length}, side ${d.side.length}`);
  for (const sec of ['main', 'extra', 'side']) { const m = new Map(); for (const c of d[sec]) m.set(name(c), (m.get(name(c)) || 0) + 1); console.log(`  ${sec}: ` + [...m].map(([k, n]) => `${n} ${k}`).join(' | ')); }
  console.log(probs.length ? '  PROBLEMS: ' + [...new Set(probs)].join('; ') : '  legal on 2026.10 TCG, all scripted');
}
