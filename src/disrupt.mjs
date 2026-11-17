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
  return scoreBoard({ mz: mz.map((c, z) => c && c.code ? { code: c.code, z, marker: c.link?.marker || 0 } : null), st: q(L.SZONE).map(c => ({ code: c.code, position: c.position })), hand: q(L.HAND).map(c => ({ code: c.code })) }, detail);
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
  const ppLink = mons.some(c => /Power Patron/.test(nm(c)) && (info(c).type & LINK));
  const races = new Set(mons.map(c => info(c).race)).size;
  const parts = []; const layers = new Set(); let v = 0;
  const add = (label, w, layer) => { v += w; parts.push(label + ' ' + w); if (layer && w >= 0.5) layers.add(layer); };
  for (const c of mons) {
    const n = nm(c); if (credited.has(n)) { parts.push(n + ' (2nd copy) 0'); continue; } credited.add(n);
    // Medicurius: 1+ pointed = monster negate on YOUR turn only (no value on theirs); 2+ = unaffected by their effects; 3 = Quick Effect banish everything they control
    if (/Medicurius|Mediclius/.test(n)) { const p = pointed(c); if (p >= 3) { add(n + ' points to 3: banish all', 2, 'wipe'); add(n + ' unaffected', 0.5, 'protect'); } else if (p === 2) add(n + ' points to 2: unaffected', 0.5, 'protect'); else parts.push(n + ' points to ' + p + ' 0'); }
    // Ars Magna monsters: their banish effects are not Quick Effects (your turn only), so nothing on the opponent's turn
    else if (/Ars Magna of Infinity|Ars Magna of Purification/.test(n)) parts.push(n + ' (own turn only) 0');
    else if (/Diactorus/.test(n)) add(n, races >= 3 ? 1 : 0.3, 'negate');
    else if (/Desirae/.test(n)) add(n, 1, 'negate');
    else if (/Chaos Angel/.test(n)) add(n, 1, 'negate');
    else if (/S:P Little Knight/.test(n)) add(n, 1, 'banish-monster');
    else if (/^Nerva the Power Patron/.test(n)) { const trig = mons.some(m => /Non-Finito/.test(nm(m)) || (/Diactorus/.test(nm(m)) && races >= 3)); if (trig) add(n + ' (an Artmage Quick Effect can turn into destroy all)', 1, 'wipe'); else parts.push(n + ' (no Artmage Quick Effect to trigger it) 0'); }
    else if (/^Junora the Power Patron/.test(n)) parts.push(n + ' (negate is on its own Synchro Summon only) 0');
    else if (/Non-Finito/.test(n)) add(n, 0.5, 'negate');
    // Ritual wing: MoDC = body unaffected by their activated effects + protects our S/T from destroy/banish; BLS/Black Chaos = unaffected bodies (their banish happens on our turn / on summon)
    else if (/Magician of Dark Chaos/.test(n)) add(n, 1, 'protect');
    else if (/Black Luster Soldier/.test(n)) add(n, 0.5, 'protect');
    else if (/^Black Chaos$/.test(n)) add(n, 0.5, 'protect');
    else { const g = genericCredit(c.code, 'mon'); if (g) add(n + ' (text)', g[0], g[1]); }
  }
  // Mind Shuffle on their turn: return a Lv7+ body, Special Summon a LADR monster from hand -> its summon effect banishes (BLS: banish 1; MoDC: banish 1 face-down). Needs MS on field + a Lv7+ body + the monster in hand.
  if (st.some(c => /Mind Shuffle/.test(nm(c))) && mons.some(c => (info(c).level || 0) >= 7)) {
    const hb = hand.filter(c => /Black Luster Soldier|Magician of Dark Chaos/.test(nm(c))); if (hb.length) add('MS swap -> ' + nm(hb[0]) + ' banish', 1, 'banish-monster');
  }
  for (const c of st) {
    const n = nm(c);
    if (/Impasto/.test(n)) add(n, 1, 'negate');
    else if (/Infinite Impermanence/.test(n)) add(n, 1, 'negate');
    else if (/Mind Shuffle/.test(n)) add(n, 1, 'protect');
    else if (/Theorealize Liberation/.test(n)) add(n, 0.5, 'protect');
    else if (/Citrinitas/.test(n)) add(n, 0.3);
    else if (!(info(c).type & 0x1000000)) { const g = genericCredit(c.code, 'st'); add('set ' + n + (g ? ' (text)' : ''), g ? g[0] : 0.2, g ? g[1] : undefined); } // unknown backrow (not pendulum scale)
  }
  for (const c of hand) {
    const n = nm(c);
    if (/Ash Blossom|Droll|Nibiru|Ghost/.test(n)) add('hand ' + n, HT, 'handtrap');
    else if (/Infinite Impermanence/.test(n)) add('hand ' + n, HT, 'handtrap');
    else add('hand ' + n, 0.15);
  }
  if (HT === 0) layers.delete('handtrap'); const lay = 0.5 * layers.size; v += lay;
  return detail ? { v, parts, layers: [...layers] } : v;
}
