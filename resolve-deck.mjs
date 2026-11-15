// node resolve-deck.mjs <path>  -> prints a .ydk path. A .txt deck ("3 Card Name" lines; optional "#extra" section,
// otherwise the Extra Deck of decks/L2-vand3.ydk is used) is converted to decks/_built/<name>.ydk with banlist checks.
import fs from 'fs'; import path from 'path'; import { parseYdk, findCard, banlist } from './src/cards.mjs';
const p = process.argv[2]; if (!p.endsWith('.txt')) { console.log(p); process.exit(0); }
const lim = banlist(); const main = [], extra = []; let sec = main; const bad = [];
for (const raw of fs.readFileSync(p, 'utf8').split(/\r?\n/)) { const l = raw.trim(); if (!l || l.startsWith('//')) continue; if (/^#\s*extra/i.test(l)) { sec = extra; continue; } if (/^[#!]/.test(l)) continue;
  const m = l.match(/^(\d+)\s*x?\s+(.+)$/i) || [null, '1', l]; let c = findCard(m[2].trim()); if (Array.isArray(c)) c = c[0]; if (c == null) { bad.push('unknown card: ' + m[2]); continue; }
  for (let i = 0; i < +m[1]; i++) sec.push(c); const mx = lim.has(c) ? lim.get(c) : 3; const n = [...main, ...extra].filter(x => x === c).length; if (n > mx) bad.push(`${m[2]}: ${n} copies, limit ${mx}`); }
if (bad.length) { console.error(bad.join('\n')); process.exit(1); }
const ed = extra.length ? extra : parseYdk(fs.readFileSync('decks/L2-vand3.ydk', 'utf8')).extra;
const out = path.join('decks/_built', path.basename(p, '.txt') + '.ydk'); fs.mkdirSync('decks/_built', { recursive: true });
fs.writeFileSync(out, '#main\n' + main.join('\n') + '\n#extra\n' + ed.join('\n') + '\n!side\n'); console.log(out);
