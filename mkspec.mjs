// node mkspec.mjs spec.txt out.ydk [baseEDdeck]  spec lines: "3 Card Name"  -> builds main from scratch, ED copied from base deck, checks banlist limits
import fs from 'fs'; import { parseYdk, findCard, name, banlist } from './src/cards.mjs';
const [spec, out, base = 'decks/L2-vand3.ydk'] = process.argv.slice(2); const lim = banlist(); const b = parseYdk(fs.readFileSync(base, 'utf8')); const main = [];
for (const l of fs.readFileSync(spec, 'utf8').split('\n')) { const m = l.match(/^(\d+)\s+(.+?)\s*(#.*)?$/); if (!m) continue; let c = findCard(m[2]); if (Array.isArray(c)) c = c[0]; if (c == null) throw new Error('not found: ' + m[2]);
  for (let i = 0; i < +m[1]; i++) main.push(c); const mx = lim.has(c) ? lim.get(c) : 3; if (main.filter(x => x === c).length > mx) throw new Error(`${m[2]}: over limit ${mx}`); }
fs.writeFileSync(out, '#main\n' + main.join('\n') + '\n#extra\n' + b.extra.join('\n') + '\n!side\n'); console.log(out, main.length, 'main', b.extra.length, 'extra');
