// What a card does, read from its text: the explorer's vocabulary for "what is missing" and "what could supply it".
import { cardDB } from './cards.mjs';
const OWN = /^"(Artmage|Ars Magna|Power Patron|Medius|Medius the Pure|Theorealize|Fiendsmith|Elfnote|DoomZ|Nervedo|Junoldo|Vidolium|Black Luster Soldier|Magician of Dark Chaos|Light and Darkness Ritual|Black Chaos|Griffoh|Mind Shuffle|Skull Archfiend of Chaos|Dark Magician)/;
const ED = 0x40 | 0x2000 | 0x800000 | 0x4000000;
// Types / Attributes ROLAD never has on the field: a card whose condition or target needs one of these can't work here
const FOREIGN = /\b(Zombie|Aqua|Pyro|Rock|Winged Beast|Plant|Insect|Thunder|Beast-Warrior|Beast|Dinosaur|Fish|Sea Serpent|Reptile|Psychic|Wyrm|Cyberse|EARTH|WATER|FIRE|WIND|DIVINE|Gemini|Union|Spirit|Toon|Flip|Normal Monster)s?\b/;
const sentenceAt = (s, i) => { const a = s.lastIndexOf('. ', i), b = s.indexOf('. ', i); return s.slice(a < 0 ? 0 : a, b < 0 ? s.length : b); };
export const TAGS = {
  self_ss: /Special Summon this card from your hand|You can Special Summon this card \(from your hand\)/i,
  hand_cost_ss: /Special Summon this card[^.]{0,40}by (discarding|banishing|Tributing|revealing|sending)/i,
  search: /add (1|up to \d)[^.;]{0,80}from your Deck to your hand/i,
  deck_ss: /Special Summon[^.;]{0,60}from your Deck/i,
  draw: /\bdraw (1|2|3) cards?/i,
  discard_cost: /(^|\. |; |: )(You can )?discard (1|a) (card|monster|Spell)/i,
  gy_setup: /send [^.;]{0,50} from your Deck to the GY/i,
  banish_faceup: /banish[^.;]{0,30}face-up|banish \(face-up\)/i,
  pendulum_ed: /face-up (Pendulum )?Monsters? (in|from) your Extra Deck|to your Extra Deck face-up/i,
  extra_normal: /in addition to your Normal Summon/i,
  revive: /Special Summon[^.;]{0,40}from your (GY|Graveyard)/i,
  quick_interact: /(Quick Effect|When your opponent|your opponent activates)[^.]{0,120}(negate|banish|destroy)/i,
  floater: /(is|was) (sent to the GY|destroyed)[^.;]{0,40}: (You can )?(Special Summon|add)/i,
};
const cache = new Map();
// returns null if the card can't work in ROLAD (needs another archetype, banned, Extra Deck, token), else { tags, family }
export function tagCard(code, lim) {
  if (cache.has(code)) return cache.get(code);
  const { data, text } = cardDB(); const d = data.get(code), t = text.get(code); let r = null;
  if (d && t && !d.alias && !(d.type & 0x4000) && !(d.type & ED) && !(d.ot && (d.ot & 3) === 0) && !(lim && lim.get(code) === 0)) {
    const s = t.desc.replace(/\s+/g, ' ');
    const quotes = (s.match(/"[^"]+"/g) || []).filter(q => q !== `"${t.name}"`);
    const family = /^(Artmage|Ars Magna|Theorealize|.*Power Patron)/.test(t.name) || quotes.some(q => OWN.test(q));
    const handtrap = (d.type & 1) && /\(Quick Effect\): You can discard this card/i.test(s);
    if (!handtrap && !quotes.some(q => !OWN.test(q))) {
      const tags = Object.keys(TAGS).filter(k => { const m = TAGS[k].exec(s); return m && !FOREIGN.test(sentenceAt(s, m.index)); }); if (d.type & 1 && d.type & 0x1000) tags.push('tuner');
      if (family) tags.push('family'); if (tags.length) r = { tags, family, name: t.name, mon: !!(d.type & 1) };
    }
  }
  cache.set(code, r); return r;
}
// what each kind of failure calls for (starting beliefs; the explorer re-weights them from results)
export const NEED_TAGS = {
  no_starter: { self_ss: 2, search: 2, deck_ss: 2, draw: 1.5, extra_normal: 1, family: 1.5, pendulum_ed: 1 },
  few_bodies: { self_ss: 2, deck_ss: 2, hand_cost_ss: 1.5, revive: 1.5, floater: 1, tuner: 0.5 },
  dead_cards: { discard_cost: 2, hand_cost_ss: 1.5, draw: 1, banish_faceup: 0.7, gy_setup: 0.5 },
  no_tm_trigger: { banish_faceup: 2 },
  no_gy_fuel: { gy_setup: 2, discard_cost: 1 },
};
