export const CORE_MEDIUS = ["Normal Summon.*Medius the Pure","^Special Summon it","Activate Nervedo the Shadebeast Power Patron \\(M","Nerva the Power","Junoldo","Activate Junoldo the Shadespirit Power Patron \\(M","Junora","Link Summon Purification Power Patron"];
export const CORE_PREFIX = CORE_MEDIUS.slice(0, 7);
export const escRe = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// starter that tutors/adds Medius first, then the core line
export const viaStarter = (c) => ['Activate.*' + escRe(c), 'Medius the Pure \\(Deck', ...CORE_MEDIUS];
const CORE_N = [CORE_MEDIUS[0], 'Nervedo the Shadebeast Power Patron', ...CORE_MEDIUS.slice(1)];
const CIT = ['Activate Ars Magna - "Citrinitas" \\(hand', 'Activate Ars Magna - "Citrinitas" \\(S', 'Medius the Pure \\(Deck', ...CORE_N];
const PURIF = ['Activate Ars Magna of Purification and Corruption \\(hand', 'Citrinitas', ...CIT];
const INF = ['Activate Ars Magna of Infinity and Finity \\(hand', 'Purification and Corruption', ...PURIF];
// extra full-line scripts keyed by hand card name regex
export const lineScripts = (hand) => { const o = []; const h = hand.join('|'); if (/Medius the Pure/.test(h)) o.push(CORE_N);
  if (/Ars Magna of Infinity and Finity/.test(h)) o.push(INF);
  if (/Ars Magna of Purification and Corruption/.test(h)) o.push(PURIF);
  if (/Ars Magna - "Citrinitas"/.test(h)) o.push(CIT);
  return o; };
