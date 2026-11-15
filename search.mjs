// node search.mjs [text words or "exact phrase"] [--type ritual] [--attr dark] [--race spellcaster] [--level 4 | 1-4] [--atk 2000-] [--def ..] [--name part] [--legal] [--all] [--limit 25] [--full]
import { searchCards, lineOf, fullText } from './src/search.mjs';
const a = process.argv.slice(2); const o = {}; const text = [];
for (let i = 0; i < a.length; i++) { if (a[i].startsWith('--')) { const k = a[i].slice(2); if (['legal', 'all', 'full'].includes(k)) o[k] = true; else o[k] = a[++i]; } else text.push(/\s/.test(a[i]) ? `"${a[i]}"` : a[i]); }
const r = searchCards({ text: text.join(' '), type: o.type, attribute: o.attr, race: o.race, level: o.level, atk: o.atk, def: o.def, name: o.name, legal: o.legal, tcg: o.all ? false : true, limit: o.limit });
if (r.error) { console.log('ERROR: ' + r.error); process.exit(1); }
console.log(`${r.total} match(es)${r.total > r.shown ? `, showing ${r.shown}` : ''}`);
for (const c of r.cards) console.log(o.full ? fullText(c) + '\n' : lineOf(c));
