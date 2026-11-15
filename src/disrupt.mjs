// ROLAD end-board scorer: counts DISRUPTION the board can use on the opponent's turn (the guide's "interruptions"),
// plus layers (different kinds of answer) and cards still in hand. Hand traps in hand count as one each.
import { teamOf, L } from './engine.mjs';
import { cardDB, name } from './cards.mjs';
const LINK = 0x4000000;
export function disruption(S, seat, detail = false) {
  const { lb, h } = S; const me = teamOf(S.game, seat); const D = cardDB().data;
  const q = (loc) => lb.duelQueryLocation(h, { flags: 0x1 | 0x2 | 0x200, controller: me, location: loc }).filter(c => c && c.code);
  const mons = q(L.MZONE), st = q(L.SZONE), hand = q(L.HAND);
  const nm = (c) => name(c.code); const info = (c) => D.get(c.code) || {};
  const ppLink = mons.some(c => /Power Patron/.test(nm(c)) && (info(c).type & LINK));
  const races = new Set(mons.map(c => info(c).race)).size;
  const parts = []; const layers = new Set(); let v = 0;
  const add = (label, w, layer) => { v += w; parts.push(label + ' ' + w); if (layer && w >= 0.5) layers.add(layer); };
  for (const c of mons) {
    const n = nm(c), others = mons.length - 1;
    if (/Medicurius|Mediclius/.test(n)) { add(n + (others >= 3 ? ' wipe+immune' : ' partial'), others >= 3 ? 2 : others >= 1 ? 1 : 0.3, 'wipe'); }
    else if (/Ars Magna of Infinity/.test(n)) add(n, ppLink ? 1 : 0.2, 'banish-monster');
    else if (/Ars Magna of Purification/.test(n)) add(n, ppLink ? 1 : 0.2, 'banish-st');
    else if (/Diactorus/.test(n)) add(n, races >= 3 ? 1 : 0.3, 'negate');
    else if (/Desirae/.test(n)) add(n, 1, 'negate');
    else if (/Chaos Angel/.test(n)) add(n, 1, 'negate');
    else if (/S:P Little Knight/.test(n)) add(n, 1, 'banish-monster');
    else if (/Nerva/.test(n)) add(n, 1, 'wipe');
    else if (/Non-Finito/.test(n)) add(n, 0.5, 'negate');
  }
  for (const c of st) {
    const n = nm(c);
    if (/Impasto/.test(n)) add(n, 1, 'negate');
    else if (/Infinite Impermanence/.test(n)) add(n, 1, 'negate');
    else if (/Mind Shuffle/.test(n)) add(n, 1, 'protect');
    else if (/Theorealize Liberation/.test(n)) add(n, 0.5, 'protect');
    else if (/Citrinitas/.test(n)) add(n, 0.3);
    else if (!(info(c).type & 0x1000000)) add('set ' + n, 0.2); // unknown backrow (not pendulum scale)
  }
  for (const c of hand) {
    const n = nm(c);
    if (/Ash Blossom|Droll|Nibiru|Ghost/.test(n)) add('hand ' + n, 1, 'handtrap');
    else if (/Infinite Impermanence/.test(n)) add('hand ' + n, 1, 'handtrap');
    else add('hand ' + n, 0.15);
  }
  const lay = 0.5 * layers.size; v += lay;
  return detail ? { v, parts, layers: [...layers] } : v;
}
