// ROLAD end-board scorer: counts DISRUPTION the board can use on the opponent's turn (the guide's "interruptions"),
// plus layers (different kinds of answer) and cards still in hand. Hand traps in hand count as one each.
import { teamOf, L, QFLAGS } from './engine.mjs';
import { cardDB, name } from './cards.mjs';
import { genericCredit } from './generic.mjs';
const LINK = 0x4000000;
let HT = 1; export const setHT = (w) => { HT = w; }; // weight of a hand trap kept in hand (1 = counts as an interruption; 0 = board-only comparison)
let PROG = 0; export const setProgress = (w) => { PROG = w; }; // search-guidance credit for Ritual-wing progress (not part of the reported board value when 0)
export function disruption(S, seat, detail = false) {
  const { lb, h } = S; const me = teamOf(S.game, seat);
  const mz = lb.duelQueryLocation(h, { flags: QFLAGS, controller: me, location: L.MZONE });
  const q = (loc) => lb.duelQueryLocation(h, { flags: 0x1 | 0x2 | 0x200, controller: me, location: loc }).filter(c => c && c.code);
  const deckNames = new Set(q(L.DECK).map(c => name(c.code)));
  return scoreBoard({ mz: mz.map((c, z) => c && c.code ? { code: c.code, z, marker: c.link?.marker || 0 } : null), st: q(L.SZONE).map((c, i) => ({ code: c.code, position: c.position })), hand: q(L.HAND).map(c => ({ code: c.code })), gy: q(L.GRAVE).map(c => ({ code: c.code })), blsInDeck: deckNames.has('Black Luster Soldier - Soldier of Light and Darkness') }, detail);
}
// the same scoring on a plain board (used for the guide's written end boards too): mz = 7 slots (0-4 Main, 5 = Extra Monster Zone above column 1, 6 = above column 3)
export function scoreBoard(B, detail = false) {
  const D = cardDB().data; const mons = B.mz.filter(Boolean), st = B.st, hand = B.hand;
  const occ = (z) => !!B.mz[z];
  const pointed = (c) => { const z = c.z; const mk = c.marker || 0; const out = []; const col = (cc) => (cc >= 0 && cc <= 4 ? cc : null);
    if (z >= 0 && z <= 4) { if (mk & 0x8 && z > 0) out.push(z - 1); if (mk & 0x20 && z < 4) out.push(z + 1); for (const [b, dc] of [[0x40, -1], [0x80, 0], [0x100, 1]]) if (mk & b) { const cc = z + dc; if (cc === 1) out.push(5); if (cc === 3) out.push(6); } }
    else if (z === 5 || z === 6) { const c0 = z === 5 ? 1 : 3; for (const [b, dc] of [[0x1, -1], [0x2, 0], [0x4, 1]]) if (mk & b) { const cc = col(c0 + dc); if (cc !== null) out.push(cc); } }
    return out.filter(occ).length; };
  const credited = new Set(); // a second copy of the same card adds nothing: these effects are once per turn by name, or need the same setup twice
  const nm = (c) => name(c.code); const info = (c) => D.get(c.code) || {};
  // Card-by-card audit (Nov 17): only what the board can do on the OPPONENT's turn counts. Bodies, ATK and own-turn effects score 0.
  // Weights: board wipe 2; one solid interruption (negate / banish / destroy on their turn) 1; protection 0.3-0.75; extender on their turn 0.3; +0.5 per different kind of answer.
  const has = (re) => mons.some(c => re.test(nm(c))); const stHas = (re) => st.some(c => re.test(nm(c)) && (c.position & 0x5));
  const ppLink = mons.some(c => /Power Patron/.test(nm(c)) && (info(c).type & LINK));
  const races = new Set(mons.map(c => info(c).race)).size; const threeTypes = races >= 3;
  const fusion = mons.some(c => info(c).type & 0x40);
  const citrinitasOn = st.some(c => /Citrinitas/.test(nm(c)) && (c.position & 0x5)) && ppLink; // Ars Magna monster effects become Quick Effects
  const parts = []; const layers = new Set(); let v = 0;
  // Nov 17 (Belal): negates count most; removal less; with no negate, removal and wipes are worth about half; one Spell holding several effects up is a weak point
  let negSum = 0, negN = 0, other = 0, handV = 0;
  const add = (label, w, layer) => { parts.push(label + ' ' + w); if (layer === 'negate') { negSum += w; if (w >= 1) negN++; } else if (layer === 'handtrap' || /^hand /.test(label)) handV += w; else other += w; if (layer && w >= 0.5) layers.add(layer); };
  const zero = (label) => parts.push(label + ' 0');
  // with two copies, the better-placed one is the one that counts (e.g. the Medicurius that points to 3)
  const order = mons.slice().sort((a, b) => (/Medicurius|Mediclius/.test(nm(b)) ? pointed(b) : 0) - (/Medicurius|Mediclius/.test(nm(a)) ? pointed(a) : 0));
  for (const c of order) {
    const n = nm(c); if (credited.has(n)) { zero(n + ' (2nd copy)'); continue; } credited.add(n);
    if (/Medicurius|Mediclius/.test(n)) { const p = pointed(c); if (p >= 3) { add(n + ' points to 3: Quick Effect banish all their cards', 2, 'wipe'); add(n + ' unaffected', 0.5, 'protect'); } else if (p === 2) add(n + ' points to 2: unaffected only', 0.5, 'protect'); else zero(n + ' points to ' + p + ' (1+ negate is your turn only)'); }
    else if (/Ars Magna of Infinity/.test(n)) citrinitasOn ? add(n + ' (Quick Effect banish 1 monster, only while Citrinitas stays face-up)', 0.45, 'banish-monster') : zero(n + ' (banish is your turn only without Citrinitas)');
    else if (/Ars Magna of Purification/.test(n)) citrinitasOn ? add(n + ' (Quick Effect banish Spells/Traps, only while Citrinitas stays face-up)', 0.45, 'banish-st') : zero(n + ' (banish is your turn only without Citrinitas)');
    else if (/Diactorus/.test(n)) threeTypes ? add(n + ' (3 Types: negate + destroy)', 1.5, 'negate') : zero(n + ' (needs 3 Monster Types)');
    else if (/Desirae/.test(n)) { const eq = st.filter(e => /Fiendsmith's (Requiem|Sequence)/.test(nm(e))).reduce((r, e) => r + (/Sequence/.test(nm(e)) ? 2 : 1), 0); eq ? add(n + ' (negates ' + eq + ')', 1 + 0.5 * (eq - 1), 'negate') : zero(n + ' (no equipped Link: negates 0)'); }
    else if (/S:P Little Knight/.test(n)) add(n + ' (Quick Effect banish 2 face-up until the End Phase)', 0.6, 'banish-monster');
    else if (/^Nerva the Power Patron/.test(n)) { const trig = has(/Non-Finito/) || (has(/Diactorus/) && threeTypes) || (has(/Artmage Finmel/) && threeTypes); trig ? add(n + ' (Artmage Quick Effect -> destroy all)', 1, 'wipe') : zero(n + ' (no Artmage Quick Effect to trigger it)'); }
    else if (/Non-Finito/.test(n)) add(n + ' (Quick Effect Fusion on their turn)', 0.5, 'extend');
    else if (/Artmage Finmel/.test(n)) threeTypes ? add(n + ' (3 Types: Quick Effect negate their monsters)', 1, 'negate') : zero(n + ' (needs 3 Monster Types)');
    else if (/Magician of Dark Chaos/.test(n)) add(n + ' (unaffected; your Spells/Traps cannot be destroyed or banished)', 0.75, 'protect');
    else if (/Black Luster Soldier/.test(n)) add(n + ' (unaffected unless targeted)', 0.3, 'protect');
    else if (/^Black Chaos$/.test(n)) add(n + ' (unaffected; its banish is your Main Phase only)', 0.3, 'protect');
    else if (/Chaos Angel/.test(n)) add(n + ' (protection only; banish is on summon)', 0.3, 'protect');
    else if (/Purification Power Patron/.test(n)) mons.some(m => m !== c && info(m).attribute === 0x20 && info(m).race === 0x4) ? add(n + ' (Quick Effect Link Summon on their turn)', 0.3, null) : zero(n + ' (no other DARK Fairy)');
    else if (/Fiendsmith's Requiem/.test(n)) add(n + ' (Quick Effect: Special Summon a Fiendsmith)', 0.3, null);
    else if (/^Junora the Power Patron/.test(n)) zero(n + ' (negate is on its own Synchro Summon)');
    else if (/Medius|Dark Magician of Destruction|Apprentice Illusion|Fiendsmith's Sequence|Fiendsmith Engraver|Lacrima|Skull Archfiend|Griffoh|Power Patron$|Theorealize Medius/.test(n)) zero(n + ' (nothing on their turn)');
    else if (/\(Quick Effect\): You can (discard|send) this card/i.test((cardDB().text.get(c.code) || {}).desc || '')) zero(n + ' (its effect is used from the hand, not on the field)');
    else { const g = genericCredit(c.code, 'mon'); g ? add(n + ' (text)', g[0], g[1]) : zero(n); }
  }
  for (const c of st) {
    const n = nm(c);
    if (/Impasto/.test(n)) fusion ? add(n + ' (negate + destroy; banishes a Fusion you control)', 1.5, 'negate') : zero(n + ' (no Fusion Monster to banish)');
    else if (/Infinite Impermanence/.test(n)) add(n + ' (negate; set, so it is revealed and can be removed)', 1.2, 'negate');
    else if (/Mind Shuffle/.test(n)) { const body = mons.some(m => (info(m).level || 0) >= 7 && !(info(m).type & LINK)); const bls = hand.some(h => /Black Luster Soldier/.test(nm(h))) || B.blsInDeck !== false;
      body && bls ? add(n + ' (swap a Lv7+ for Black Luster Soldier: banish 1)', 0.75, 'banish-monster') : add(n + ' (search only)', 0.2, null); }
    else if (/Theorealize Liberation/.test(n)) has(/^Medius the Pure$/) ? add(n + ' (Quick-Play: Special Summon a 300/200 on their turn)', 0.3, null) : zero(n + ' (needs Medius on field)');
    else if (/Fiendsmith's Sequence/.test(n)) add(n + ' (equip: cannot be targeted)', 0.2, null);
    else if (/Citrinitas|Requiem|Vandalism|Dark Magical Circle|Vidolia|Past Lull|Terminus|Treasure|Small World|Light and Darkness Ritual|Tract/.test(n)) zero(n + ' (nothing on their turn by itself)');
    else if (info(c).type & 0x1000000) zero(n + ' (Pendulum Zone)');
    else { const t = info(c).type; const trapOrQP = (t & 4) || ((t & 2) && (t & 0x10000)); const g = genericCredit(c.code, 'st'); g ? add('set ' + n + ' (text)', g[0], g[1]) : (trapOrQP ? add('set ' + n, 0.2) : zero(n)); }
  }
  for (const c of (B.gy || [])) { const n = nm(c); if (/^Lacrima the Crimson Tears$/.test(n) && (B.gy || []).some(g => /Fiendsmith's (Requiem|Sequence)/.test(nm(g)))) { add('GY ' + n + ' (their turn: Special Summon a Fiendsmith Link)', 0.3, null); break; } }
  const htSeen = new Set(); // Ash, Droll, Ghost Ogre, Nibiru, Mulcharmy, Maxx "C": once per turn by name, so a 2nd copy in hand adds no interruption that turn
  for (const c of hand) {
    const n = nm(c);
    if (/Ash Blossom|Droll|Nibiru|Ghost Ogre|Mulcharmy|Maxx/.test(n) && htSeen.has(n)) { add('hand ' + n + ' (2nd copy: once per turn, no extra interruption)', 0.15); continue; }
    if (/Ash Blossom|Droll|Nibiru|Ghost Ogre|Mulcharmy|Maxx/.test(n)) htSeen.add(n);
    if (/Infinite Impermanence/.test(n) && HT > 0) add('hand ' + n + ' (negate from hand, hidden)', 1.25 * HT, 'negate'); // same negate as setting it, and hidden: setting it gains nothing
    else if (/Ash Blossom|Droll|Nibiru|Ghost|Infinite Impermanence|Effect Veiler|Mulcharmy|Maxx/.test(n)) add('hand ' + n, HT, 'handtrap');
    else if (/^Griffoh$/.test(n) && !st.some(s => /Mind Shuffle/.test(nm(s)))) add('hand Griffoh (their turn: Set Mind Shuffle and use it)', 0.5, null);
    else add('hand ' + n, 0.15);
  }
  if (HT === 0) layers.delete('handtrap'); const mult = negN === 0 ? 0.5 : negN === 1 ? 0.8 : 1;
  const lay = (layers.has('negate') ? 1 : 0) + 0.25 * [...layers].filter(l => l !== 'negate').length;
  v = negSum + mult * other + handV + lay; parts.push(`negates ${negN} -> removal/wipes x${mult}; variety +${lay}`);
  return detail ? { v, parts, layers: [...layers] } : v;
}
