// How well a card connects to a deck, from card text only (no keyword guessing about what it "does"):
//  - deck cards that can fetch/summon/name it: they quote its name or its archetype, or ask for its Attribute + Type ("LIGHT Fiend")
//  - it names the deck's cards or archetypes
// Generic: works for any deck. Hand traps, banned cards, tokens and alternate arts are excluded.
import { cardDB, name } from './cards.mjs';
const ATTR = { 1: 'EARTH', 2: 'WATER', 4: 'FIRE', 8: 'WIND', 16: 'LIGHT', 32: 'DARK', 64: 'DIVINE' };
const RACE = ['Warrior', 'Spellcaster', 'Fairy', 'Fiend', 'Zombie', 'Machine', 'Aqua', 'Pyro', 'Rock', 'Winged Beast', 'Plant', 'Insect', 'Thunder', 'Dragon', 'Beast', 'Beast-Warrior', 'Dinosaur', 'Fish', 'Sea Serpent', 'Reptile', 'Psychic', 'Divine-Beast', 'Creator God', 'Wyrm', 'Cyberse', 'Illusion'];
const ED = 0x40 | 0x2000 | 0x800000 | 0x4000000;
const quotes = (s) => [...new Set((s.match(/"([^"]+)"/g) || []).map(q => q.slice(1, -1)))];
export function synergyScores(deck, lim) {
  const { data, text } = cardDB(); const deckCodes = [...deck.main, ...deck.extra]; const deckNames = new Set(deckCodes.map(c => name(c)));
  const deckTexts = [...new Set(deckCodes)].map(c => ({ n: name(c), s: (text.get(c)?.desc || '').replace(/\s+/g, ' '), q: quotes(text.get(c)?.desc || '') }));
  const deckQuotes = new Set(deckTexts.flatMap(t => t.q));
  const archOf = (nm) => [...deckQuotes].filter(q => q.length >= 4 && nm.includes(q));
  const out = [];
  for (const [code, t] of text) { const d = data.get(code); if (!d || d.alias || (d.type & 0x4000) || (d.ot && (d.ot & 3) === 0)) continue; if (lim && lim.get(code) === 0) continue; if (deckNames.has(t.name)) continue;
    const s = t.desc.replace(/\s+/g, ' '); const isMon = !!(d.type & 1);
    if (isMon && /\(Quick Effect\): You can discard this card/i.test(s)) continue; // generic hand traps
    const why = []; let sc = 0;
    // 1) deck cards that reach it
    const arch = archOf(t.name); let reach = 0;
    for (const dt of deckTexts) { let hit = false; if (dt.q.includes(t.name) || dt.q.some(q => arch.includes(q))) hit = true;
      else if (isMon) { const at = ATTR[d.attribute]; const rc = RACE[Math.log2(d.race || 1) | 0]; if (at && rc && new RegExp(`\\b${at} ${rc}\\b`).test(dt.s)) hit = true; }
      if (hit) { reach++; if (why.length < 3) why.push('reached by ' + dt.n); } }
    sc += Math.min(reach, 6);
    // 2) it names the deck's cards / archetypes
    const its = quotes(s).filter(q => q !== t.name); let names = 0; for (const q of its) if ([...deckNames].some(n => n === q || n.includes(q))) { names++; if (why.length < 4) why.push('names "' + q + '"'); }
    sc += Math.min(names, 4);
    if (sc > 0) out.push({ name: t.name, code, zone: (d.type & ED) ? 'ed' : 'main', w: sc, why });
  }
  return out.sort((a, b) => b.w - a.w);
}
