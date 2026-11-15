// node edscan.mjs -> every legal Extra Deck monster ROLAD can plausibly summon on turn 1, ranked by text value
import fs from 'fs'; import { cardDB, banlist, parseYdk, name } from './src/cards.mjs';
const { data, text } = cardDB(); const lim = banlist();
const FUS = 0x40, SYN = 0x2000, XYZ = 0x800000, LINK = 0x4000000, TUN = 0x1000;
// ROLAD bodies that realistically hit the field turn 1 (from the guide lines + lab boards)
const deck = parseYdk(fs.readFileSync('decks/L2-vand3.ydk', 'utf8'));
const bodies = [...new Set([...deck.main, ...deck.extra])].map(c => data.get(c)).filter(d => d && (d.type & 1));
const lv = new Set(bodies.filter(d => !(d.type & LINK)).map(d => d.level & 0xff));
const RACE = { 1: 'Warrior', 2: 'Spellcaster', 4: 'Fairy', 8: 'Fiend', 0x1000: 'Machine', 0x2000: 'Dragon' };
const ATT = { 16: 'LIGHT', 32: 'DARK' };
console.error('body levels', [...lv].sort((a, b) => a - b).join(','));
const out = [];
for (const [id, t] of text) {
  const d = data.get(id); if (!d || d.alias || !(d.type & 1) || !(d.type & (FUS | SYN | XYZ | LINK))) continue;
  if ((lim.has(id) ? lim.get(id) : 3) === 0) continue; if (d.ot && (d.ot & 3) === 0) continue; // TCG/OCG only
  const s = t.desc.replace(/\s+/g, ' '); const mat = t.desc.split(/\r?\n/)[0].trim().slice(0, 160);
  let ok = null, how = '';
  const ARCH = /"(Artmage|Ars Magna|Power Patron|Medius|Medius the Pure|Fiendsmith|Elfnote|DoomZ|Theorealize|Dark Magician|Black Luster Soldier|Magician of Dark Chaos)[^"]*"/;
  const quoted = mat.match(/"[^"]+"/g) || []; const foreign = quoted.some(q => !ARCH.test(q));
  const XL = new Set([4, 6, 7, 8, 10]);
  if (foreign) ok = false;
  else if (d.type & XYZ) { const m = mat.match(/^(\d)\+? Level (\d+) monsters$/); if (m && XL.has(+m[2]) && +m[1] <= 3) { ok = true; how = `Xyz R${m[2]} x${m[1]}`; } }
  else if (d.type & LINK) {
    const inc = (mat.match(/including (an? |\d )?(.+)$/) || [])[2] || '';
    const generic = /^\d\+? (Effect )?[Mm]onsters?( with different (names|Types|Attributes))?$/.test(mat);
    const typed = /^\d\+? (LIGHT|DARK|Fairy|Fiend|Spellcaster|Warrior|Dragon|Illusion|Machine|Fusion|Synchro|Xyz|Link|Pendulum|non-Link|non-Token|Level \d+ or (higher|lower)|Effect|non-Link Effect)( [A-Za-z]+)? [Mm]onsters?$/.test(mat);
    const incOk = !inc || /^(LIGHT|DARK|Fairy|Fiend|Spellcaster|Warrior|Dragon|Illusion|Machine|Fusion|Synchro|Xyz|Link|Pendulum|Effect|Tuner|Level \d+ or higher)|^"(Artmage|Ars Magna|Power Patron|Medius|Fiendsmith|Dark Magician)/.test(inc);
    if ((generic || typed || /^\d\+? monsters?, including/.test(mat)) && incOk) { ok = true; how = 'Link-' + (d.level & 0xff) + ': ' + mat; } }
  else if (d.type & SYN) { const m = /^1 Tuner \+ 1\+? non-Tuner monsters?$/.test(mat); if (m && [7, 8, 10, 11, 12].includes(d.level & 0xff)) { ok = true; how = 'Syn L' + (d.level & 0xff) + ' (Tuner via Liberation/Elfnote)'; } }
  else if (d.type & FUS) { if (!quoted.length && /^\d\+? (monsters|Effect Monsters|LIGHT|DARK|Fairy|Fiend|Spellcaster)/.test(mat) && /Must (first )?be Special Summoned.{0,80}(sending|banishing|Tributing|shuffling)|(Special Summoned|can only be Special Summoned).{0,60}from your Extra Deck by (sending|banishing|Tributing|shuffling)/i.test(s)) { ok = true; how = 'Fus L' + (d.level & 0xff) + ' contact: ' + mat; } }
  if (!ok) continue;
  const q = /Quick Effect|When your opponent|your opponent activates|in response|During your opponent/i.test(s);
  let v = 0; const tag = [];
  if (q && /negate/i.test(s)) { v += 3; tag.push('Q-negate'); }
  if (q && /banish/i.test(s)) { v += 2.5; tag.push('Q-banish'); }
  if (q && /destroy/i.test(s)) { v += 2; tag.push('Q-destroy'); }
  if (q && /(return|shuffle).{0,40}(hand|Deck)/i.test(s)) { v += 2; tag.push('Q-bounce'); }
  if (/(add|Special Summon) 1 .{0,60}from your Deck/i.test(s)) { v += 1; tag.push('deck-access'); }
  if (/unaffected|cannot be (targeted|destroyed)/i.test(s)) { v += 0.5; tag.push('protect'); }
  if (/You can only Special Summon .{0,30}once per turn|cannot Special Summon.{0,40}except/i.test(s)) { v -= 1; tag.push('restriction'); }
  out.push({ v, n: t.name, how, tag: tag.join(','), lim: lim.has(id) ? lim.get(id) : 3, s: s.slice(0, 260) });
}
out.sort((a, b) => b.v - a.v); fs.writeFileSync('reports/edscan.md', '# Extra Deck scan: ' + out.length + ' summonable by ROLAD bodies\n\n' + out.map(o => `- **${o.n}** (${o.lim}) | ${o.how} | ${o.tag} | score ${o.v}\n  ${o.s}`).join('\n') + '\n');
console.log('summonable', out.length, 'with Q-interaction', out.filter(o => /Q-/.test(o.tag)).length);
for (const o of out.slice(0, 45)) console.log(o.v.toFixed(1), o.n, '|', o.how.slice(0, 60), '|', o.tag);
