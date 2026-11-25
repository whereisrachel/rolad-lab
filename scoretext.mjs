// score an end-board text line ("YOU: ... Monsters: M1: X ... || EMZ-L: Y L3↙↓↘ ... Spell/Trap: ... GY: ... Hand: ...") with the lab's scoreBoard
import fs from 'fs'; import { scoreBoard, setHT } from './src/disrupt.mjs'; import { findCard } from './src/cards.mjs';
const code = (n) => { const c = findCard(n.trim()); return Array.isArray(c) ? c[0] : c; };
const AR = { '↖': 0x40, '↑': 0x80, '↗': 0x100, '←': 0x8, '→': 0x20, '↙': 0x1, '↓': 0x2, '↘': 0x4 };
export function parse(t) {
  const sec = (k) => { const m = new RegExp(k + ':\\s*(.*?)(?=\\s+(Monsters|Spell/Trap|GY|Banished|Hand|Extra Deck):|$)').exec(t); return m ? m[1].trim() : ''; };
  const mz = Array(7).fill(null);
  for (const part of sec('Monsters').split('||')) { const m = /(M[1-5]|EMZ-L|EMZ-R): (.+?)(?: (?:Lv|L|Rank)\s?\d+.*)?$/.exec(part.trim()); if (!m) continue;
    const z = m[1] === 'EMZ-L' ? 5 : m[1] === 'EMZ-R' ? 6 : +m[1][1] - 1; let nm = m[2].replace(/ \[NEGATED\]/, '').trim();
    const arr = /L\d\s*([↖↑↗←→↙↓↘]+)/.exec(part); let mk = 0; if (arr) for (const ch of arr[1]) mk |= AR[ch] || 0;
    const c = code(nm); if (c) mz[z] = { code: c, z, marker: mk }; }
  const st = sec('Spell/Trap').split('||').map(x => x.trim()).filter(x => /^(S\d|Field|P\d)/.test(x)).map(x => { const set = /\(Set\)/.test(x); const nm = x.replace(/^[^:]+: /, '').replace(/ \(Set\)| \[NEGATED\]/g, '').trim(); return { code: code(nm), position: set ? 0x8 : 0x1 }; }).filter(c => c.code);
  const list = (k) => sec(k).split(',').map(x => x.trim()).filter(x => x && x !== '(empty)' && x !== '(none)').map(x => ({ code: code(x.replace(/ \(face-down\)/, '')) })).filter(c => c.code);
  return { mz, st, hand: list('Hand'), gy: list('GY') };
}
if (process.argv[1].endsWith('scoretext.mjs')) { setHT(+(process.env.HTW ?? 1)); const lines = fs.readFileSync(0, 'utf8').split('\n').filter(Boolean);
  for (const l of lines) { const r = scoreBoard(parse(l), true); console.log(r.v.toFixed(2) + '\t' + (process.env.DET ? r.parts.join('; ') : '')); } }
