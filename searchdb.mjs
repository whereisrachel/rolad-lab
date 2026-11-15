// node searchdb.mjs "<regex on name|desc>" [maxN] [--name]  -> legal (not banned) cards matching
import { cardDB, banlist } from './src/cards.mjs';
const [q, mx = '40', flag] = process.argv.slice(2); const re = new RegExp(q, 'i'); const { data, text } = cardDB(); const lim = banlist();
const T = (t) => (t & 1 ? 'Mon' : t & 2 ? 'Spell' : 'Trap') + (t & 0x4000000 ? '/Link' : t & 0x800 ? '/Syn' : t & 0x40 ? '/Fus' : t & 0x800000 ? '/Xyz' : t & 0x80 ? '/Rit' : t & 0x1000000 ? '/Pend' : '');
let n = 0; for (const [id, t] of text) { const d = data.get(id); if (!d || (d.type & 0x4000000 && false)) continue; if (d.id > 100000000 && d.alias === 0 && !text.get(id)) continue;
  const hit = flag === '--name' ? re.test(t.name) : re.test(t.name + ' ' + t.desc); if (!hit) continue; const l = lim.has(id) ? lim.get(id) : 3; if (l === 0) continue; if (d.alias) continue;
  if (n++ >= +mx) break; console.log(`${l}x ${t.name} | ${T(d.type)} L${d.level & 0xff} ${d.atk}/${d.def} | ${t.desc.replace(/\s+/g, ' ').slice(0, +(process.env.W||230))}`); }
console.log('--', n, 'shown');
