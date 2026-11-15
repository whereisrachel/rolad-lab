// node preflight.mjs file-or-deck ...  -> prints banlist status per card; exits 1 if any card is banned or unknown
import fs from 'fs';
import { findCard, banlist, name } from './src/cards.mjs';
const lim = banlist(); let bad = 0;
for (const f of process.argv.slice(2)) {
  console.log('==', f);
  for (const l of fs.readFileSync(f, 'utf8').split('\n')) {
    const n = l.trim(); if (!n || n[0] == '#' || n[0] == '!' || /^\d+$/.test(n)) continue;
    const id = findCard(n); const c = Array.isArray(id) ? id[0] : id;
    if (c == null) { console.log('UNKNOWN  ' + n); bad++; continue; }
    const lv = lim.has(c) ? lim.get(c) : 3;
    if (lv === 0) bad++;
    console.log((lv === 0 ? 'BANNED   ' : lv === 1 ? 'limit 1  ' : lv === 2 ? 'limit 2  ' : 'ok       ') + n);
  }
}
process.exit(bad ? 1 : 0);
