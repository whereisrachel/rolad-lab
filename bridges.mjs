// Bridge report: for each evolved hand, which engines the opening hand holds, which engines the best lines reach WITHOUT a card of
// that engine in the opening hand, and which card made each crossing (the card whose effect or summon brought the first card of the
// new engine into play). Bridges are what make the deck: one engine opening reaches the others' pieces.
// node bridges.mjs            -> reports/bridges.md (all reports/evolve-*.json)    · import { bridgeOf } for one line
import fs from 'fs';
export const ENGINE = {
  'Power Patron': ['Medius the Pure', 'Theorealize Medius', 'Nervedo the Shadebeast Power Patron', 'Junoldo the Shadespirit Power Patron', 'Vidolium the Unstable Power Patron of Unity', 'Prohibited Power Patron Portal - Terminus', 'Plundered Power Patron Plane - Vidolia', 'Pendulum Treasure', 'Theorealize Past Lull', 'Theorealize Liberation', 'Purification Power Patron', 'Medicurius the Power Patron of Illusions', 'Nerva the Power Patron of Creation', 'Junora the Power Patron of Tuning'],
  Artmage: ['Artmage Vandalism -Assault-', 'Artmage Finmel', 'Artmage Impasto -Recapture-', 'Artmage Non-Finito', 'Artmage Diactorus'],
  'Ars Magna': ['Ars Magna - "Citrinitas"', 'Ars Magna of Infinity and Finity', 'Ars Magna of Purification and Corruption'],
  ROLAD: ['Black Chaos', 'Skull Archfiend of Chaos', 'Mind Shuffle', 'Light and Darkness Ritual', 'Magician of Dark Chaos - Black Chaos', 'Black Luster Soldier - Soldier of Light and Darkness', 'Griffoh', 'Dark Magician of Destruction', 'Dark Magical Circle', 'Apprentice Illusion Magician'],
  Fiendsmith: ['Fiendsmith Engraver', "Fiendsmith's Tract", 'Lacrima the Crimson Tears', "Fiendsmith's Requiem", "Fiendsmith's Sequence", "Fiendsmith's Desirae"],
};
const ENG = new Map(); for (const [e, cs] of Object.entries(ENGINE)) for (const c of cs) ENG.set(c, e);
const cardIn = (l) => { const m = /^(?:Activate|Normal Summon|Special Summon \(procedure\)|Link Summon|Synchro Summon|Xyz Summon|Fusion Summon|Set Spell\/Trap|Selected|select) (.+?)(?: \((?:hand|Deck|Extra Deck|GY|banishment|Field|M\d|S\d|EMZ-[LR])\)|: |$)/.exec(l); return m ? m[1].trim() : null; };
// one line: steps = list of labels in order; hand = opening card names
export function bridgeOf(hand, steps) {
  const start = new Set(hand.map(c => ENG.get(c)).filter(Boolean)); const reached = new Set(start); const crossings = []; let actor = null;
  for (const l of steps) { const c = cardIn(l); if (!c) continue; const e = ENG.get(c);
    if (e && !reached.has(e)) { reached.add(e); crossings.push({ to: e, via: /^Special Summon \(procedure\)/.test(l) ? 'its own Summon procedure' : (actor || '(start)'), card: c }); }
    if (/^(Activate|Normal Summon|Special Summon|Link Summon|Synchro Summon|Xyz Summon|Fusion Summon)/.test(l)) actor = c; }
  return { start: [...start], reached: [...reached], crossings, bridge: start.size === 1 && reached.size > 1 };
}
if (process.argv[1] && process.argv[1].endsWith('bridges.mjs')) {
  const files = fs.readdirSync('reports').filter(f => /^evolve-.*\.json$/.test(f)); let md = `# Bridges in the evolved lines\n${new Date().toISOString()}\n\nA bridge = starting from ONE engine in the opening hand, the line reaches another engine's cards through Extra Deck cards or searches (no card of that engine in hand). "via" = the card whose effect or summon brought the first card of the new engine into play.\n\n`;
  const tally = {}; const handRows = [];
  for (const f of files) { const P = JSON.parse(fs.readFileSync('reports/' + f, 'utf8')); const name = f.replace(/^evolve-|\.json$/g, '');
    const mdf = 'reports/' + f.replace(/\.json$/, '.md'); const hm = fs.existsSync(mdf) ? /^# Evolved lines — (.+?) \(/m.exec(fs.readFileSync(mdf, 'utf8')) : null; const hand = hm ? hm[1].split(', ') : null; const best = P.map(p => p.cands[0]).filter(Boolean); if (!best.length) continue;
    const H = hand || (best[0].hand || []); const rows = best.map(b => ({ b, r: bridgeOf(b.hand || H, b.steps || []) }));
    for (const { r, b } of rows) for (const x of r.crossings) { const k = `${x.via} → ${x.to} (${x.card})`; tally[k] = tally[k] || { n: 0, fits: [] }; tally[k].n++; tally[k].fits.push(b.fit); }
    handRows.push({ name, rows }); }
  md += `## Bridge cards in winning lines (all hands, best line per deck order)\n| crossing | times | avg score of those lines |\n|---|---|---|\n` + Object.entries(tally).sort((a, b) => b[1].n - a[1].n).map(([k, v]) => `| ${k} | ${v.n} | ${(v.fits.reduce((s, x) => s + x, 0) / v.fits.length).toFixed(2)} |`).join('\n') + '\n\n';
  for (const h of handRows) { md += `## ${h.name}\n`; for (const { b, r } of h.rows) md += `- score ${b.fit}: opens ${r.start.join(' + ') || '-'} → reaches ${r.reached.filter(e => !r.start.includes(e)).join(', ') || 'nothing else'}${r.bridge ? ' **(bridge)**' : r.start.length > 1 ? ' (two engines in hand — not a bridge)' : ''}${r.crossings.length ? ' · ' + r.crossings.map(x => `${x.via} → ${x.card}`).join('; ') : ''}\n`; md += '\n'; }
  fs.writeFileSync('reports/bridges.md', md); console.log('done -> reports/bridges.md');
}
