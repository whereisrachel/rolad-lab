// Automatic review of pool-scan candidates before any deck test (Belal, Nov 23: he should not have to vet hundreds of cards).
// Step 1 (this script): drop cards whose own text says they hurt this deck, and cards the scan cannot judge fairly.
// Step 2 (Claude): read the survivors' text in reports/poolreview-<list>.md and write data/pool-approved-<list>.json.
// findlist.mjs only tests pool cards listed in that approved file.
// node poolreview.mjs [--deck decks/L2-vand3.ydk]
import fs from 'fs'; import path from 'path';
import { findCard, cardText, cardLine } from './src/cards.mjs';
const a = process.argv.slice(2); const f = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const deckPath = f('deck', 'decks/L2-vand3.ydk'); const LIST = path.basename(deckPath).replace(/\.ydk$/, '');
const pool = JSON.parse(fs.readFileSync(`data/poolscan-${LIST}.json`, 'utf8'));
const codeOf = (n) => { const id = findCard(n); return Array.isArray(id) ? id[0] : id; };
// the deck's own families: free bodies and draw cards only count when they belong to (or name) one of them
const FAMILY = /Artmage|Power Patron|Ars Magna|Fiendsmith|Theorealize|Medius|Black Luster|Chaos|Dark Magic|Magician|Ritual|Rites|Griffoh|Nerv|Junol|Vidol|Pendulum/i;
// text that makes a card bad here, whatever its one-line score said
const RULES = [
  [/banish (\d+|all) cards? from the top of your Deck,? face-down|banish .{0,40}from your Deck,? face-down/i, 'banishes cards from your Deck face-down (the deck already loses 1-ofs to Nervedo/Junoldo banishes)'],
  [/cannot Special Summon(?: monsters)? from the Extra Deck/i, 'locks you out of Extra Deck summons'],
  [/you cannot Special Summon(?: any)? monsters?(?:,| for the rest of this turn)?,? except/i, 'restricts your Special Summons'],
  [/you cannot (?:Normal Summon|Special Summon)(?:\/Set)? (?:monsters )?(?:for the rest of|the turn)/i, 'locks your summons for the turn'],
  [/each player (?:discards|draws|sends)|both players (?:discard|draw)|your opponent (?:draws|adds)/i, 'helps the opponent too (both players draw/discard)'],
  [/discard (?:your )?entire hand|discards? (?:their|your) whole hand/i, 'discards your whole hand'],
  [/toss a coin|roll a (?:six-sided )?die/i, 'coin toss / die roll'],
  [/skip your (?:next )?(?:Draw|Battle|Main)/i, 'makes you skip a phase'],
  [/pay half your LP|pay \d{4,} LP/i, 'large LP cost'],
  [/excavate cards from the top of your Deck until/i, 'random dig that mills your Deck (can send your 1-of combo pieces to the GY)'],
  [/Special Summon (?:your|1 of your) monster to your opponent's field|your opponent gains control/i, 'gives the opponent a monster'],
];
const rows = []; const kept = []; const dropped = [];
for (const x of pool.ranked) {
  const c = codeOf(x.name); const t = c != null ? (cardText(c) || '') : ''; const why = [];
  for (const [re, msg] of RULES) if (re.test(t)) why.push(msg);
  if (/Ash Blossom|Infinite Impermanence|Droll|Ghost Ogre|Nibiru|Maxx|Mulcharmy|Effect Veiler|Called by the Grave|Ghost Belle|Ghost Mourner|Ghost Sister|D\.D\. Crow|Fuwalos|Bystial|Dominus|Talents|Retaliating/.test(x.name)) why.push('hand trap (Belal: no generic hand traps)');
  if (x.kind === 'standalone') why.push('scored from text only (a lone Set card), not from a real line');
  if ((x.kind === 'body' || x.kind === 'draw') && !FAMILY.test(x.name) && !FAMILY.test(t)) why.push(x.kind === 'body' ? 'generic free body: the scan overrates any extra monster in hand' : 'draw card: its value is luck on one fixed deck order');
  if (x.gain < 0.3) why.push('gain under 0.3 in the scan');
  (why.length ? dropped : kept).push({ ...x, text: t, line: c != null && cardLine ? cardLine(c) : x.name, why });
}
let md = `# Pool review: ${LIST}\n${new Date().toISOString()} · from poolscan of ${pool.at.slice(0, 10)}\n\n`;
md += `Automatic screen: ${pool.ranked.length} scan cards → **${kept.length} for review**, ${dropped.length} dropped.\n\n## For review (Claude decides; approved names go to data/pool-approved-${LIST}.json)\n`;
for (const x of kept) md += `- **${x.name}** (${x.zone}, ${x.kind}, scan +${x.gain}) — ${x.line}\n  ${x.text.replace(/\s+/g, ' ')}\n`;
md += `\n## Dropped automatically\n` + dropped.map(x => `- ${x.name} (+${x.gain}): ${x.why.join('; ')}`).join('\n') + '\n';
fs.mkdirSync('reports', { recursive: true }); fs.writeFileSync(`reports/poolreview-${LIST}.md`, md);
fs.writeFileSync(`data/pool-screened-${LIST}.json`, JSON.stringify({ at: new Date().toISOString(), kept: kept.map(x => ({ name: x.name, zone: x.zone, kind: x.kind, gain: x.gain, text: x.text })), dropped: dropped.map(x => ({ name: x.name, why: x.why })) }, null, 1));
console.log(`pool review: ${kept.length} for review, ${dropped.length} dropped -> reports/poolreview-${LIST}.md`);
