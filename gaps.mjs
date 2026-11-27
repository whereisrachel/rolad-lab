// gaps.mjs — missing-link report (Belal, Nov 26–27): "card X might work with card Y if a card that did Z existed".
// From a whole-deck search's results: X = cards that sit dead in the opening hand (the best line found never used them), Y = pieces good
// lines had to go and get. For each X, Y pair, the whole legal pool (no hand traps, no banned) is read for Z that works with X and leads to
// Y (one card), and the deck search's own tries of each Z are shown. node gaps.mjs results/de-5.json [out]
import fs from 'fs'; import { findCard, name, banlist, cardDB } from './src/cards.mjs'; import { flows, interact } from './src/interact.mjs';
const R = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')); const OUT = process.argv[3] || 'reports/gaps.md';
const { data, text } = cardDB(); const LIM = banlist(); const lim = (c) => LIM.has(c) ? LIM.get(c) : 3;
const code = (n) => { const c = findCard(n); const k = Array.isArray(c) ? c[0] : c; return k && name(k) === n ? k : null; };
const HTX = /Ash Blossom|Infinite Impermanence|Droll|Ghost Ogre|Nibiru|Maxx|Mulcharmy|Effect Veiler|Called by the Grave|Ghost Belle|Ghost Mourner|Ghost Sister|D\.D\. Crow|Bystial|Dominus|Talents|Retaliating|Crossout|Forbidden Droplet/;
const isHT = (c) => { const n = name(c), s = (text.get(c) || {}).desc || ''; return HTX.test(n) || (/\(Quick Effect\): You can (discard|send) this card/i.test(s) && /(negate|destroy|opponent's hand|activates)/i.test(s)); };
const legal = (c) => { const d = data.get(c); return d && !d.alias && c < 100000000 && !(d.type & 0x4000) && (d.ot & 2) && lim(c) > 0; };
const lineUses = (r) => { const u = new Set(); for (const l of r.line || []) { const m = /^(?:Activate|Trigger: activate|Normal Summon|Link Summon|Synchro Summon|Xyz Summon|Fusion Summon|Ritual Summon|Special Summon \(procedure\)|Set Spell\/Trap|Selected|Tribute Summon|Set) (.+?) \(/.exec(l); if (m) u.add(m[1]); } return u; };
const seen = {}, st = {}, stV = {}; for (const per of Object.values(R.res)) for (const r of Object.values(per || {})) { if (!r || r.v == null || !r.hand || !r.line) continue; const u = lineUses(r);
  for (const n of new Set(r.hand)) { const c = code(n); if (!c || isHT(c) || ((data.get(c) || {}).type & 0x4)) continue; /* Traps in hand are Set at the end of the line, which the line log leaves out: never counted as stuck */ seen[n] = (seen[n] || 0) + 1; if (!u.has(n)) { st[n] = (st[n] || 0) + 1; } } }
const base = R.decks[R.baseKey]; const inBase = new Set([...Object.keys(base.main), ...Object.keys(base.extra)]);
const X = Object.keys(st).filter(n => seen[n] >= 8 && inBase.has(n)).map(n => [n, st[n] / seen[n], seen[n]]).sort((a, b) => b[1] - a[1]);
const need = Object.entries(R.need || {}).sort((a, b) => b[1] - a[1]).slice(0, 15).map(x => x[0]);
// how each candidate did in the search: decks that added it, their average vs the start list on the same hands
const avg = (k) => { const v = Object.values(R.res[k] || {}).map(x => x.v).filter(x => x != null); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
const vsBase = (k) => { const b = R.res[R.baseKey] || {}, r = R.res[k] || {}; const d = Object.keys(r).filter(h => b[h] && r[h].v != null && b[h].v != null).map(h => r[h].v - b[h].v); return d.length ? [d.reduce((a, c) => a + c, 0) / d.length, d.length] : null; };
const tried = {}; for (const [k, d] of Object.entries(R.decks)) for (const [n, c] of [...Object.entries(d.main), ...Object.entries(d.extra).map(([n, c]) => [n, c])]) if (c > ((base.main[n] || 0) + (base.extra[n] || 0)) && !inBase.has(n)) (tried[n] ||= []).push(k);
const pool = []; for (const [c] of data) { if (!legal(c) || isHT(c)) continue; pool.push(c); }
let md = `# Missing links — from ${R.id}\n${new Date().toISOString().slice(0, 16)}Z · ${Object.keys(R.decks).length} decks · ${Object.values(R.res).reduce((a, p) => a + Object.keys(p || {}).length, 0)} hands played\n\n`;
md += `## Stuck cards (in the opening hand, best line never used them)\n| Card | stuck | hands |\n|---|---|---|\n` + X.slice(0, 20).map(([n, f, s]) => `| ${n} | ${(100 * f).toFixed(0)}% | ${s} |`).join('\n') + '\n\n';
md += `## Pieces good lines had to go and get\n${need.map(n => `${n} (${R.need[n]})`).join(' · ')}\n\n## Gaps: stuck card → piece, and real cards that could link them\n`;
const out = [];
for (const [x] of X.slice(0, 12)) { const xc = code(x); if (!xc) continue; md += `\n### ${x}\n`; let any = false;
  for (const y of need) { const yc = code(y); if (!yc || y === x) continue; if (flows(xc, yc) >= 0.6) continue;
    const z = pool.filter(c => c !== xc && c !== yc && flows(xc, c) >= 0.6 && flows(c, yc) >= 0.6).map(c => name(c)).filter(n => !inBase.has(n));
    const zin = pool.filter(c => c !== xc && c !== yc && flows(xc, c) >= 0.6 && flows(c, yc) >= 0.6).map(c => name(c)).filter(n => inBase.has(n));
    if (!z.length && !zin.length) continue; any = true;
    const zt = z.map(n => { const ks = tried[n] || []; const r = ks.map(vsBase).filter(Boolean); const best = r.length ? Math.max(...r.map(q => q[0])) : null; return [n, ks.length, best]; }).sort((a, b) => b[1] - a[1]);
    md += `- → **${y}**: already linked in the deck by ${zin.slice(0, 4).join(', ') || 'nothing'}. New links: ${zt.length} cards; ${zt.filter(q => q[1]).length} tried. ${zt.slice(0, 8).map(([n, k, b]) => k ? `${n} (tried ${k}×, best ${b == null ? '?' : (b >= 0 ? '+' : '') + b.toFixed(2)})` : `${n} (not tried)`).join(' · ')}\n`;
    out.push({ x, y, links: zt.length, tried: zt.filter(q => q[1]).length, untried: zt.filter(q => !q[1]).map(q => q[0]) }); }
  if (!any) md += `- no piece it can't already reach, and no 1-card link found\n`; }
fs.writeFileSync(OUT, md); fs.writeFileSync(OUT.replace(/\.md$/, '.json'), JSON.stringify(out)); console.log(md.slice(0, 6000));
