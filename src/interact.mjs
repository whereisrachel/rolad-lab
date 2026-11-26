// How cards can work together, read from card text (Nov 26, Belal: cards interact across families — X searches Y, X revives Y, X uses Y
// as material, X sends Y to the GY — and the deck search must know that). For every clause of a card's text that does something to another
// card (add / Special Summon / send / banish / target / Tribute / material / Ritual Summon / return / Set / shuffle / reveal / discard / equip),
// the clause's conditions are read: quoted names and archetypes, Attribute, Type, Level/Rank, card kind (Ritual, Pendulum, Tuner, Spell...),
// and where from (Deck, GY, hand, banished, Extra Deck). A card meets the clause if it fits every condition the clause names.
// Edge weight: named by name/archetype 1, fits Attribute/Type/Level/kind conditions 0.6, fits a clause with no conditions ("1 monster") 0.15.
import { cardDB, name } from './cards.mjs';
const ATTRS = ['EARTH', 'WATER', 'FIRE', 'WIND', 'LIGHT', 'DARK', 'DIVINE'];
const RACES = ['Warrior', 'Spellcaster', 'Fairy', 'Fiend', 'Zombie', 'Machine', 'Aqua', 'Pyro', 'Rock', 'Winged Beast', 'Plant', 'Insect', 'Thunder', 'Dragon', 'Beast', 'Beast-Warrior', 'Dinosaur', 'Fish', 'Sea Serpent', 'Reptile', 'Psychic', 'Divine-Beast', 'Creator God', 'Wyrm', 'Cyberse', 'Illusion'];
const KINDS = { Ritual: 0x80, Pendulum: 0x1000000, Tuner: 0x1000, Fusion: 0x40, Synchro: 0x2000, Xyz: 0x800000, Link: 0x4000000, Normal: 0x10, Spell: 0x2, Trap: 0x4, 'Quick-Play': 0x10000, Continuous: 0x20000, Field: 0x80000, Equip: 0x40000 };
const VERB = /\b(add|Special Summon|send|banish|target|Tribute|material|Ritual Summon|Fusion Summon|Synchro Summon|Xyz Summon|Link Summon|return|Set|shuffle|reveal|discard|equip|place|excavate|declare)/i;
const info = (code) => { const d = cardDB().data.get(code); if (!d) return null; const raceI = Math.log2(d.race || 1) | 0;
  return { quotes: [...(((cardDB().text.get(code) || {}).desc || '').matchAll(/"([^"]+)"/g))].map(m => m[1]), name: name(code), attr: ATTRS[Math.log2(d.attribute || 1) | 0], race: RACES[raceI], level: d.level & 0xff, type: d.type, mon: !!(d.type & 1) }; };
function clauses(code) { const t = (cardDB().text.get(code) || {}).desc || ''; return t.replace(/\r/g, '').split(/(?<=[.;:])\s+|\n+/).map(s => s.trim()).filter(s => s && VERB.test(s)); }
function fits(cl, D, selfName) { const quotes = [...cl.matchAll(/"([^"]+)"/g)].map(m => m[1]).filter(q => q !== selfName);
  if (quotes.length) { if (quotes.some(q => D.name === q || (q.length >= 4 && D.name.includes(q)))) return 1;
    // "a card that mentions X" / "has X written on it": any card whose own text names X fits
    if (/mentions|lists|written on it/.test(cl) && quotes.some(q => D.quotes.includes(q))) return 1; return 0; }
  let named = 0, ok = true;
  const at = ATTRS.filter(a => new RegExp(`\\b${a}\\b`).test(cl)); if (at.length) { named++; if (!at.includes(D.attr) || !D.mon) ok = false; }
  const rc = RACES.filter(r => new RegExp(`\\b${r}\\b`).test(cl)); if (rc.length) { named++; if (!rc.includes(D.race) || !D.mon) ok = false; }
  const lv = /\bLevel (\d+)(?: or (higher|lower|more|less))?/.exec(cl) || /\bRank (\d+)(?: or (higher|lower))?/.exec(cl); if (lv) { named++; const n = +lv[1], L = D.level; if (!D.mon) ok = false; else if (!lv[2] ? L !== n : /higher|more/.test(lv[2]) ? L < n : L > n) ok = false; }
  const kd = Object.keys(KINDS).filter(k => new RegExp(`\\b${k}\\b`).test(cl) && !(k === 'Normal' && /Normal Summon/.test(cl))); if (kd.length) { named++; if (!kd.some(k => D.type & KINDS[k])) ok = false; }
  if (named) return ok ? 0.6 : 0;
  if (/\bmonsters?\b/.test(cl) && D.mon && /\b(GY|Deck|banished|hand)\b/.test(cl)) return 0.15;
  if (/\b(Spells?|Traps?|cards?)\b/.test(cl) && /\b(GY|Deck)\b/.test(cl)) return 0.1; return 0; }
// weight of the interaction between card a and card b, in either direction (a's text works on b, or b's text works on a)
const cache = new Map();
export function interact(a, b) { const k = a < b ? a + ':' + b : b + ':' + a; if (cache.has(k)) return cache.get(k);
  const A = info(a), Bi = info(b); let w = 0; if (A && Bi && a !== b) { for (const cl of clauses(a)) w = Math.max(w, fits(cl, Bi, A.name)); for (const cl of clauses(b)) w = Math.max(w, fits(cl, A, Bi.name)); }
  cache.set(k, w); return w; }
