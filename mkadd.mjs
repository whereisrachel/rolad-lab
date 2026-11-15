// node mkadd.mjs base.ydk out.ydk "Card A" ["Card B" ...]  -> base deck + cards ADDED (no removals)
import fs from 'fs'; import { parseYdk, findCard, name, banlist } from './src/cards.mjs';
const [base, out, ...names] = process.argv.slice(2); const d = parseYdk(fs.readFileSync(base, 'utf8')); const lim = banlist();
for (const n of names) { let c = findCard(n); if (Array.isArray(c)) c = c[0]; if (c == null) throw new Error('not found ' + n); d.main.push(c);
  const cnt = d.main.filter(x => x === c).length; const mx = lim.has(c) ? lim.get(c) : 3; if (cnt > mx) throw new Error(`${n}: ${cnt} copies, max ${mx}`); }
fs.writeFileSync(out, '#main\n' + d.main.join('\n') + '\n#extra\n' + d.extra.join('\n') + '\n!side\n' + (d.side || []).join('\n') + '\n'); console.log(out, d.main.length, 'main');
