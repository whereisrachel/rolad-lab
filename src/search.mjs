// Card search over the whole database: text, type, attribute, race, level, ATK/DEF, legality on the 2026.10 TCG list.
import { cardDB, banlist, typeStr, attrStr, raceStr, name } from './cards.mjs';

const TYPE_BITS = { monster: 0x1, spell: 0x2, trap: 0x4, normal: 0x10, effect: 0x20, fusion: 0x40, ritual: 0x80, tuner: 0x1000, synchro: 0x2000, xyz: 0x800000, pendulum: 0x1000000, link: 0x4000000,
  'quick-play': 0x10000, quickplay: 0x10000, continuous: 0x20000, equip: 0x40000, field: 0x80000, counter: 0x100000, flip: 0x200000 };
const ATTR_BITS = { earth: 1, water: 2, fire: 4, wind: 8, light: 16, dark: 32, divine: 64 };
const RACES = ['warrior','spellcaster','fairy','fiend','zombie','machine','aqua','pyro','rock','winged beast','plant','insect','thunder','dragon','beast','beast-warrior','dinosaur','fish','sea serpent','reptile','psychic','divine-beast','creator god','wyrm','cyberse','illusion'];

let POOL = null;
function pool() {
  if (POOL) return POOL;
  const D = cardDB(), lim = banlist(); POOL = [];
  for (const [id, d] of D.data) {
    if (d.alias && Math.abs(d.alias - id) < 20) continue; // alternate art
    if (d.type & 0x4000) continue;                          // token
    const tcg = (d.ot & 2) || /^release-|prerelease-betb-en/.test(d._db);
    const t = D.text.get(id); if (!t) continue;
    POOL.push({ id, d, t, tcg: !!tcg, limit: lim.has(id) ? lim.get(id) : 3, hay: (t.name + '\n' + t.desc).toLowerCase() });
  }
  return POOL;
}
const num = (v) => (v === undefined || v === null || v === '' ? null : +v);
const range = (s) => { if (s === undefined || s === null || s === '') return null; const m = String(s).match(/^(\d+)?\s*(?:-|\.\.)\s*(\d+)?$/); if (m) return [m[1] ? +m[1] : -Infinity, m[2] ? +m[2] : Infinity]; return [+s, +s]; };

// opts: { text, name, type, attribute, race, level, atk, def, legal, limit }
//   text: every word/phrase in quotes must appear in name or card text (case-insensitive). Use "quoted phrases" for exact phrases.
export function searchCards(opts = {}) {
  const words = []; String(opts.text || '').replace(/"([^"]+)"|(\S+)/g, (_, a, b) => { words.push((a || b).toLowerCase()); return ''; });
  const types = String(opts.type || '').toLowerCase().split(/[\s,+]+/).filter(Boolean).map(x => TYPE_BITS[x]);
  if (types.some(x => x === undefined)) return { error: `unknown type in "${opts.type}". Use: ${Object.keys(TYPE_BITS).join(', ')}` };
  const attr = opts.attribute ? ATTR_BITS[String(opts.attribute).toLowerCase()] : null; if (opts.attribute && !attr) return { error: 'attribute must be one of ' + Object.keys(ATTR_BITS).join(', ') };
  let raceBit = null; if (opts.race) { const i = RACES.indexOf(String(opts.race).toLowerCase()); if (i < 0) return { error: 'race must be one of ' + RACES.join(', ') }; raceBit = 1n << BigInt(i); }
  const lv = range(opts.level), atk = range(opts.atk), df = range(opts.def);
  const nm = opts.name ? String(opts.name).toLowerCase() : null;
  const limit = Math.min(+opts.limit || 25, 100), out = []; let total = 0;
  for (const c of pool()) {
    const d = c.d;
    if (opts.tcg !== false && !c.tcg) continue;               // default: TCG cards only
    if (opts.legal && c.limit === 0) continue;                // not Forbidden on 2026.10
    if (nm && !c.t.name.toLowerCase().includes(nm)) continue;
    if (types.length && !types.every(b => d.type & b)) continue;
    if (attr && !(d.attribute & attr)) continue;
    if (raceBit && !(BigInt(d.race) & raceBit)) continue;
    const isLink = d.type & 0x4000000;
    if (lv && !((d.type & 1) && lv[0] <= (d.level & 0xff) && (d.level & 0xff) <= lv[1])) continue;
    if (atk && !((d.type & 1) && atk[0] <= d.atk && d.atk <= atk[1])) continue;
    if (df && !((d.type & 1) && !isLink && df[0] <= d.def && d.def <= df[1])) continue;
    if (words.length && !words.every(w => c.hay.includes(w))) continue;
    total++; if (out.length < limit) out.push(c);
  }
  return { total, shown: out.length, cards: out };
}
export function lineOf(c) {
  const d = c.d, t = d.type;
  const stats = (t & 1) ? ` ${attrStr(d.attribute)} ${raceStr(d.race)} ${(t & 0x4000000) ? 'Link-' + (d.level & 0xff) : (t & 0x800000 ? 'Rank ' : 'Lv') + (d.level & 0xff)} ${d.atk}/${(t & 0x4000000) ? '-' : d.def}` : '';
  return `${c.id}  ${c.t.name}  [${typeStr(t)}${stats}]${c.limit < 3 ? `  (limit ${c.limit})` : ''}`;
}
export function fullText(c) { return lineOf(c) + '\n' + c.t.desc.replace(/\r/g, ''); }
