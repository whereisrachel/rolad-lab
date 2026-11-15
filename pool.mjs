// node pool.mjs [baseline.ydk] -> data/pool.json: the candidate cards the explorer digs through, each with the reasons it might help.
// Built from the whole legal card pool: mainscan categories (ROLAD gaps), the Power Patron / Artmage / Ars Magna / Theorealize family,
// and Extra Deck monsters ROLAD's bodies can summon that interrupt on the opponent's turn. Hand traps and other archetypes' cards are excluded.
import fs from 'fs'; import { execSync } from 'child_process'; import { parseYdk, name, findCard, banlist, cardDB } from './src/cards.mjs';
const base = process.argv[2] || 'decks/L2-vand3.ydk'; const B = parseYdk(fs.readFileSync(base, 'utf8')); const lim = banlist();
execSync('node --no-warnings mainscan.mjs', { stdio: 'ignore' }); execSync('node --no-warnings edscan.mjs', { stdio: 'ignore' });
const W = { A: 3, C: 2, E: 2, F: 2, G: 2, D: 1.5, H: 1, B: 0.5 }; const DESC = { A: 'free body', B: 'draw/dig', C: 'search by Type/Level', D: 'Droll-proof summon from Deck', E: 'face-up banish (Theorealize Medius trigger)', F: 'Pendulum / face-up Extra Deck', G: 'discard outlet that pays', H: 'GY setup' };
const main = new Map(); const add = (n, w, why) => { const e = main.get(n) || { name: n, zone: 'main', w: 0, why: [] }; e.w += w; if (!e.why.includes(why)) e.why.push(why); main.set(n, e); };
const ms = fs.readFileSync('reports/mainscan.md', 'utf8').split('\n## ').slice(1);
for (const sec of ms) { const k = sec[0]; if (!W[k]) continue; for (const m of sec.matchAll(/^- \dx (.+?) \|/gm)) add(m[1], W[k], DESC[k]); }
const { text } = cardDB(); for (const [id, t] of text) if (/^(Artmage|Ars Magna|Theorealize|.*Power Patron)/.test(t.name) && !(lim.get(id) === 0)) add(t.name, 3, 'ROLAD family');
const out = [];
for (const e of main.values()) { let c = findCard(e.name); if (Array.isArray(c)) c = c[0]; if (c == null) continue; const d = cardDB().data.get(c); if (!d || (d.type & (0x40 | 0x2000 | 0x800000 | 0x4000000))) continue;
  const have = B.main.filter(x => name(x) === name(c)).length; const mx = lim.has(c) ? lim.get(c) : 3; if (have >= mx) continue; out.push(e); }
out.sort((a, b) => b.w - a.w);
const ed = []; for (const m of fs.readFileSync('reports/edscan.md', 'utf8').matchAll(/^- \*\*(.+?)\*\* \(\d\) \| (.+?) \| (.*?) \| score (\S+)/gm)) { if (!/Q-/.test(m[3]) || +m[4] < 2) continue; if (B.extra.some(x => name(x) === m[1])) continue; ed.push({ name: m[1], zone: 'ed', w: +m[4], why: [m[2].slice(0, 60), m[3]] }); }
ed.sort((a, b) => b.w - a.w);
const MAXM = +(process.env.POOL_MAIN || 200), MAXE = +(process.env.POOL_ED || 50);
const pool = [...out.slice(0, MAXM), ...ed.slice(0, MAXE)]; fs.mkdirSync('data', { recursive: true }); fs.writeFileSync('data/pool.json', JSON.stringify(pool, null, 1));
console.log('pool', pool.length, '(main', Math.min(out.length, MAXM), 'of', out.length, '| extra deck', Math.min(ed.length, MAXE), 'of', ed.length + ')');
