// What counts as a genuinely new line for the library. The test: would the library ALREADY have handled this hand?
// A stored line applies to a hand when the cards it starts with are in that hand (same opponent hand trap). If a stored line
// that applies already reaches within 0.25 of the new result, the new line is a repeat — nothing learned.
//  - new: no stored line applies to this hand at all
//  - better: stored lines apply, but the new line beats the best of them by more than 0.25
//  - repeat: otherwise
export const routeOf = (x) => (x.scn || 'none') + ':' + (x.hand || []).filter((_, i) => x.used && x.used[i]).sort().join('+');
// a line is identified by how it starts: the first two cards it plays from the hand (most lines use every card,
// so "all used cards" would make every random hand look new)
const usedOf = (x) => { const out = []; for (const e of x.raw || []) { if (e.seat !== 0 || !e.label) continue; const m = /^(?:Activate|Normal Summon|Set|Special Summon[^(]*?) (.+?) \(hand\)/.exec(e.label); if (m && !out.includes(m[1])) out.push(m[1]); if (out.length >= 2) break; }
  return out.length ? out : (x.hand || []).filter((_, i) => x.used && x.used[i]); };
const fits = (need, hand) => { const h = hand.slice(); for (const c of need) { const i = h.indexOf(c); if (i < 0) return false; h.splice(i, 1); } return true; };
export function novelty() { const lib = [];
  return (x) => { const scn = x.scn || 'none', v = +x.v || 0; let best = null;
    for (const y of lib) if (y.scn === scn && (best === null || y.v > best) && fits(y.need, x.hand || [])) best = y.v;
    lib.push({ scn, v, need: usedOf(x) });
    return best === null ? 'new route' : v > best + 0.25 ? 'better' : 'repeat'; }; }
