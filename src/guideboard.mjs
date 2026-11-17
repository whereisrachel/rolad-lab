// The guide's written end boards (data/guide_tests.json) scored with the lab's own scorer, so the line finder is measured against the real guide boards.
import { findCard, cardDB, name } from './cards.mjs'; import { scoreBoard, setHT } from './disrupt.mjs';
const ALIAS = { Desirae: "Fiendsmith's Desirae", Junora: 'Junora the Power Patron of Tuning', Nerva: 'Nerva the Power Patron of Creation', 'Non-Finito': 'Artmage Non-Finito', Diactorus: 'Artmage Diactorus', Mediclius: 'Medicurius the Power Patron of Illusions', Medicurius: 'Medicurius the Power Patron of Illusions',
  Impasto: 'Artmage Impasto -Recapture-', Requiem: "Fiendsmith's Requiem", Sequence: "Fiendsmith's Sequence", Citrinitas: 'Ars Magna - "Citrinitas"', Liberation: 'Theorealize Liberation', 'Ash Blossom': 'Ash Blossom & Joyous Spring', 'Droll & Lock Bird': 'Droll & Lock Bird', 'Ghost Ogre': 'Ghost Ogre & Snow Rabbit',
  'S:P Little Knight': 'S:P Little Knight', 'Mind Shuffle': 'Mind Shuffle', Finmel: 'Artmage Finmel', 'Corruption and Purification': 'Ars Magna of Purification and Corruption', 'Finite and Infinite': 'Ars Magna of Infinity and Finity', Medius: 'Medius the Pure', 'Magician of Dark Chaos': 'Magician of Dark Chaos - Black Chaos', Vidolia: 'Plundered Power Patron Plane - Vidolia', Engraver: 'Fiendsmith Engraver', Tract: "Fiendsmith's Tract", 'Theorealized Medius': 'Theorealize Medius', 'Pendulum Treasure': 'Pendulum Treasure', 'Small World': 'Small World', Terminus: 'Prohibited Power Patron Portal - Terminus', 'Black Chaos': 'Black Chaos', Lacrima: 'Lacrima the Crimson Tears', Lurrie: 'Fabled Lurrie', 'Forbidden Droplet': 'Forbidden Droplet', Nervedo: 'Nervedo the Shadebeast Power Patron', Junoldo: 'Junoldo the Shadespirit Power Patron', 'Purification Power Patron': 'Purification Power Patron' };
const code = (n) => { const full = ALIAS[n] || n; const c = findCard(full); const k = Array.isArray(c) ? c[0] : c; if (!k || name(k) !== full) return null; return k; };
const ZI = { M1: 0, M2: 1, M3: 2, M4: 3, M5: 4, 'EMZ-L': 5, 'EMZ-R': 6 };
export function guideBoardScore(board, detail = false) {
  setHT(0); const D = cardDB().data; const mz = Array(7).fill(null); const miss = [];
  for (const s of board.mz) { const m = /^(M\d|EMZ-[LR])\s+(.+?)(?: (DEF|ATK))?$/.exec(s); if (!m) { miss.push(s); continue; } const k = code(m[2]); if (!k) { miss.push(m[2]); continue; } const d = D.get(k) || {}; mz[ZI[m[1]]] = { code: k, z: ZI[m[1]], marker: (d.type & 0x4000000) ? d.def : 0 }; }
  const st = []; for (const s of board.st) { const m = /^(?:S\d|FZ|Field)\s+(.+?)(\(set\))?$/.exec(s.trim()); const k = m && code(m[1].trim()); if (!k) { miss.push(s); continue; } st.push({ code: k, position: m[2] ? 0x8 : 0x1 }); }
  const hand = []; for (const n of board.hand) { const k = code(n); if (k) hand.push({ code: k }); else miss.push(n); }
  const r = scoreBoard({ mz, st, hand }, true); return detail ? { ...r, miss } : r.v;
}
export const fullName = (n) => ALIAS[n] || n;
