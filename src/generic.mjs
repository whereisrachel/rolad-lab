// Text-based interruption credit for cards the hand-written scorer does not know.
// Only effects usable on the OPPONENT's turn count (Quick Effects, "when your opponent...", Traps/Quick-Play Spells Set).
import { cardDB } from './cards.mjs';
const cache = new Map();
export function genericCredit(code, where) { // where: 'mon' | 'st'
  const k = code + where; if (cache.has(k)) return cache.get(k);
  const { data, text } = cardDB(); const d = data.get(code), t = text.get(code); let r = null;
  if (d && t) {
    const s = t.desc.replace(/\[ Pendulum Effect \][\s\S]*?-{5,}/, '').replace(/\s+/g, ' ');
    const isTrap = d.type & 4, isQP = (d.type & 2) && (d.type & 0x10000);
    const quick = where === 'st' ? (isTrap || isQP) : /Quick Effect|When (your )?opponent|your opponent activates|in response|During your opponent's|During the (Main|Battle|Standby|End) Phase \(Quick/i.test(s);
    if (quick) {
      if (/negate/i.test(s)) r = [1, 'negate'];
      else if (/banish/i.test(s) && /(opponent|on the field|they control)/i.test(s)) r = [1, 'banish-monster'];
      else if (/destroy/i.test(s) && /(opponent|on the field)/i.test(s)) r = [0.8, 'destroy'];
      else if (/(return|shuffle).{0,40}(hand|Deck)/i.test(s) && /(opponent|on the field)/i.test(s)) r = [0.8, 'bounce'];
      else if (/change.{0,30}(face-down|battle position)/i.test(s)) r = [0.4, 'position'];
      else if (/Special Summon/i.test(s)) r = [0.3, null];
    }
    if (!r && where === 'mon' && /(cannot be targeted|unaffected by)/i.test(s)) r = [0.2, null];
  }
  cache.set(k, r); return r;
}
