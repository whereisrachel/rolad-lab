// node mkcut.mjs base.ydk out.ydk "Card:copies" ...  -> base deck with copies REMOVED
import fs from 'fs'; import { parseYdk, findCard, name } from './src/cards.mjs';
const [base, out, ...specs] = process.argv.slice(2); const d = parseYdk(fs.readFileSync(base, 'utf8'));
for (const s of specs) { const [n, k] = s.split(':'); let c = findCard(n); if (Array.isArray(c)) c = c[0]; for (let i = 0; i < +(k || 1); i++) { const ix = d.main.findIndex(x => name(x) === name(c)); if (ix < 0) throw new Error('not in deck ' + n); d.main.splice(ix, 1); } }
fs.writeFileSync(out, '#main\n' + d.main.join('\n') + '\n#extra\n' + d.extra.join('\n') + '\n!side\n' + (d.side || []).join('\n') + '\n'); console.log(out, d.main.length, 'main');
