// node mainscan.mjs -> every legal main-deck card that fits a ROLAD need, by category (reports/mainscan.md)
import fs from 'fs'; import { cardDB, banlist } from './src/cards.mjs';
const { data, text } = cardDB(); const lim = banlist(); const ED = 0x40 | 0x2000 | 0x800000 | 0x4000000;
const OWN = /^"(Artmage|Ars Magna|Power Patron|Medius|Medius the Pure|Theorealize|Fiendsmith|Elfnote|DoomZ|Nervedo|Junoldo|Vidolium|Black Luster Soldier|Magician of Dark Chaos|Light and Darkness Ritual|Black Chaos|Griffoh|Mind Shuffle|Skull Archfiend of Chaos|Dark Magician)/;
const C = {
  'A free body: SS itself from hand, condition ROLAD meets': (s, d) => (d.type & 1) && /You can Special Summon this card from your hand/i.test(s) && /(If you control (a|an|no) (DARK|LIGHT|Fairy|Fiend|Illusion|Warrior|Spellcaster|Fusion|Synchro|Xyz|Link|Pendulum|Level \d+ or higher|Effect)? ?[Mm]onsters?|If you control no monsters|by (discarding|banishing|sending|Tributing|revealing)|If a monster is Special Summoned from the Extra Deck|If you control a monster that was Special Summoned from the Extra Deck)/i.test(s),
  'B draw / dig spell (no archetype lock)': (s, d) => (d.type & 2) && /(draw \d cards?|excavate the top)/i.test(s) && !/your opponent draws/i.test(s),
  'C generic search: add a monster by Type/Attribute/Level from Deck': (s, d) => /add 1 (Level \d+ or (lower|higher) )?(DARK|LIGHT|Fairy|Fiend|Illusion|Pendulum|Spellcaster|Warrior|Ritual|Fusion)[^.]{0,40}from your Deck to your hand/i.test(s),
  'D Droll-proof: Special Summon from Deck, generic': (s, d) => /Special Summon 1 (Level \d+ or (lower|higher) )?(DARK|LIGHT|Fairy|Fiend|Illusion|Pendulum|Spellcaster|Warrior|Effect)?[^.;]{0,30}monster from your Deck/i.test(s),
  'E face-up banish enabler (Theorealize Medius trigger)': (s, d) => /banish[^.;]{0,40}face-up/i.test(s) && /(from your (hand|Deck)|your hand)/i.test(s),
  'F Pendulum / face-up Extra Deck synergy': (s, d) => /(face-up (Pendulum )?Monsters? (in|from) your Extra Deck|to your Extra Deck face-up|Pendulum Zone)/i.test(s) && !(d.type & 0x1000000 && /Pendulum Summon/i.test(s)),
  'G discard outlet that pays': (s, d) => /^(You can )?discard 1 (card|monster|Spell)[^;]{0,20}; (draw|add|Special Summon)/i.test(s.replace(/^.*?(You can only.*?turn\. )/, '')),
  'H GY setup: send monster/Spell from Deck to GY': (s, d) => /send 1 [^.;]{0,40}(monster|Spell|card)[^.;]{0,20}from your Deck to the GY/i.test(s) && (d.type & 2 || d.type & 4 || d.type & 1),
  'I Quick interaction usable going 2nd (monster/QP/Trap, generic)': (s, d) => ((d.type & 4) || ((d.type & 2) && (d.type & 0x10000))) && /(negate|banish|destroy)/i.test(s) && /(your opponent|they control|opponent's)/i.test(s),
};
const out = {}; for (const k in C) out[k] = [];
for (const [id, t] of text) {
  const d = data.get(id); if (!d || d.alias || (d.type & ED) || (d.type & 0x4000)) continue; // not ED, not token
  if (d.ot && (d.ot & 3) === 0) continue; const l = lim.has(id) ? lim.get(id) : 3; if (l === 0) continue;
  const s = t.desc.replace(/\s+/g, ' ');
  const quotes = (s.match(/"[^"]+"/g) || []).filter(q => q !== `"${t.name}"`); if (quotes.some(q => !OWN.test(q))) continue; // locked to another archetype
  if (/Hand trap|\(Quick Effect\): You can discard this card/i.test(s) && (d.type & 1)) continue; // hand traps excluded (Belal's rule)
  for (const k in C) if (C[k](s, d)) out[k].push(`${l}x ${t.name} | ${s.slice(0, 220)}`);
}
let md = '# Main-deck scan (legal TCG, not locked to another archetype, hand traps excluded)\n'; for (const k in out) { md += `\n## ${k}: ${out[k].length}\n` + out[k].map(x => '- ' + x).join('\n') + '\n'; console.log(out[k].length.toString().padStart(4), k); }
fs.writeFileSync('reports/mainscan.md', md);
