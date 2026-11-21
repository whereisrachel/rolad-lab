// What each card NEEDS and PROVIDES, read from the rules engine's own card scripts (not the English text).
// need = a filter in a card's script (search target, summon target, material, cost...), as a conjunction of: archetype (setcode), Type (race),
// Attribute, Level, card type (Link/Synchro/Spell...), or specific card codes. A card provides its own archetypes/Type/Attribute/Level/type/code.
// partners(x): cards x needs (that match one of its filters) + cards that need x (x matches one of their filters), weighted by how specific
// the filter is (a filter matching 5 cards says much more than "any LIGHT monster").
import fs from 'fs'; import path from 'path';
import { cardDB, name, ROOT } from './cards.mjs';
const SD = path.join(ROOT, 'vendor', 'scripts');
let K = null; // constants
function consts() { if (K) return K; K = {};
  for (const f of ['constant.lua', 'archetype_setcode_constants.lua', 'card_counter_constants.lua']) { const p = path.join(SD, f); if (!fs.existsSync(p)) continue;
    for (const l of fs.readFileSync(p, 'utf8').split('\n')) { const m = /^([A-Z][A-Z0-9_]*)\s*=\s*([^-\n]+?)\s*(--.*)?$/.exec(l); if (!m) continue; const ex = m[2].trim();
      if (/^0x[0-9a-f]+$/i.test(ex)) K[m[1]] = parseInt(ex, 16); else if (/^\d+$/.test(ex)) K[m[1]] = +ex;
      else if (/^[A-Z0-9_|\s]+$/.test(ex)) { let v = 0, ok = true; for (const t of ex.split('|').map(s => s.trim())) { if (K[t] === undefined) { ok = false; break; } v |= K[t]; } if (ok) K[m[1]] = v; } } }
  return K; }
const val = (t) => { t = t.trim(); const k = consts(); if (/^0x[0-9a-f]+$/i.test(t)) return parseInt(t, 16); if (/^\d+$/.test(t)) return +t; if (k[t] !== undefined) return k[t];
  if (t.includes('|')) { let v = 0; for (const x of t.split('|')) { const y = val(x); if (y === undefined) return undefined; v |= y; } return v; } return undefined; };
const args1 = (s) => s.split(',')[0];
const TYPE = { IsLinkMonster: 0x4000000, IsSynchroMonster: 0x2000, IsXyzMonster: 0x800000, IsFusionMonster: 0x40, IsRitualMonster: 0x80, IsSpell: 0x2, IsTrap: 0x4, IsMonster: 0x1, IsTuner: 0x1000, IsPendulumMonster: 0x1000000, IsEquipSpell: 0x40000, IsFieldSpell: 0x80000, IsContinuousSpell: 0x20000, IsQuickPlaySpell: 0x10000, IsNormalSpell: 0x2 };
// predicates found in a chunk of Lua
function preds(src, self) {
  const p = {}; let m;
  const re = /(?:Card\.|:)(IsSetCard|IsRace|IsAttribute|IsCode|IsLevel|IsType|IsOriginalCodeRule|IsLinkMonster|IsSynchroMonster|IsXyzMonster|IsFusionMonster|IsRitualMonster|IsSpell|IsTrap|IsSpellTrap|IsMonster|IsTuner|IsPendulumMonster|IsEquipSpell|IsFieldSpell|IsQuickPlaySpell|IsContinuousSpell)\b\s*(?:\(([^()]*(?:\([^()]*\)[^()]*)*)\)|,\s*([A-Z0-9_|]+|\d+))?/g;
  while ((m = re.exec(src))) { const f = m[1], a = (m[2] ?? m[3] ?? '').trim();
    if (f === 'IsSetCard') { const list = a.startsWith('{') ? a.slice(1, a.indexOf('}')).split(',') : [args1(a)]; const v = list.map(val).filter(x => x !== undefined); if (v.length) (p.set ||= []).push(v); }
    else if (f === 'IsRace') { const v = val(args1(a)); if (v) p.race = (p.race ?? 0xffffffff) & v; }
    else if (f === 'IsAttribute') { const v = val(args1(a)); if (v) p.attr = (p.attr ?? 0xffffffff) & v; }
    else if (f === 'IsCode' || f === 'IsOriginalCodeRule') { const v = a.split(',').map(x => x.trim() === 'id' ? self : val(x)).filter(x => x); if (v.length) p.code = v; }
    else if (f === 'IsLevel') { const v = val(args1(a)); if (v) p.level = v; }
    else if (f === 'IsType') { const v = val(args1(a)); if (v) p.type = (p.type || 0) | v; }
    else if (f === 'IsSpellTrap') p.type = (p.type || 0) | 0x6 | 0x80000000;
    else if (TYPE[f]) p.type = (p.type || 0) | TYPE[f]; }
  return Object.keys(p).length ? p : null; }
let DB = null;
export function needsDB() { if (DB) return DB;
  const cache = path.join(ROOT, 'data', 'needs.json');
  if (fs.existsSync(cache)) { try { DB = JSON.parse(fs.readFileSync(cache, 'utf8')); return DB; } catch {} }
  const { data } = cardDB(); const needs = {};
  for (const dir of ['official', 'pre-release']) { const d = path.join(SD, dir); if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) { const mm = /^c(\d+)\.lua$/.exec(f); if (!mm) continue; const code = +mm[1]; if (!data.has(code)) continue; const s = fs.readFileSync(path.join(d, f), 'utf8'); const out = [];
      // filter functions and inline material filters
      for (const fm of s.matchAll(/function s\.(\w+)\(c\b[^)]*\)([\s\S]*?)\nend/g)) { const q = preds(fm[2], code); if (q) out.push({ ...q, via: fm[1] }); }
      for (const pm of s.matchAll(/(Link|Synchro|Xyz|Fusion)\.\w*Proc\w*\(c,([^\n]*)/g)) { for (const fb of pm[2].matchAll(/FilterBoolFunction\w*\((Card\.\w+,[^)]*)\)/g)) { const q = preds('Card.' + fb[1].replace(/^Card\./, '').replace(/,/, '(') + ')', code); if (q) out.push({ ...q, via: pm[1] + ' material' }); }
        for (const id of pm[2].matchAll(/\b(\d{4,9})\b/g)) out.push({ code: [+id[1]], via: pm[1] + ' material' }); }
      const ln = /s\.listed_names\s*=\s*\{([^}]*)\}/.exec(s); if (ln) { const v = ln[1].split(',').map(x => x.trim() === 'id' ? null : val(x)).filter(x => x && x !== code); if (v.length) out.push({ code: v, via: 'listed' }); }
      const ls = /s\.listed_series\s*=\s*\{([^}]*)\}/.exec(s); if (ls) { const v = ls[1].split(',').map(val).filter(x => x !== undefined); if (v.length) out.push({ set: [v], via: 'listed' }); }
      if (out.length) needs[code] = out; } }
  DB = { needs }; try { fs.writeFileSync(cache, JSON.stringify(DB)); } catch {} return DB; }
const SC = new Map(); const setsOf = (d) => { if (SC.has(d)) return SC.get(d); const r = []; let s = BigInt(d.setcode || 0); while (s > 0n) { const v = Number(s & 0xffffn); if (v) r.push(v); s >>= 16n; } SC.set(d, r); return r; };
const hasSet = (d, want) => setsOf(d).some(s => (s & 0xfff) === (want & 0xfff) && (s & want) === want);
export function matches(need, code) { const { data } = cardDB(); const d = data.get(code); if (!d) return false;
  if (need.code && !need.code.includes(code) && !need.code.includes(d.alias)) return false;
  if (need.set) for (const any of need.set) if (!any.some(x => hasSet(d, x))) return false;
  if (need.race !== undefined && !(d.race & need.race)) return false;
  if (need.attr !== undefined && !(d.attribute & need.attr)) return false;
  if (need.level !== undefined && ((d.level & 0xff) !== need.level)) return false;
  if (need.type) { const t = need.type & 0x7fffffff; if (need.type & 0x80000000) { if (!(d.type & 0x6)) return false; } else if (!(d.type & t)) return false; }
  return true; }
// partners of x among `pool` (codes): cards x's filters accept, and cards whose filters accept x. Only specific filters (<= maxHits cards).
export function partners(x, pool, { maxHits = 120 } = {}) { const { needs } = needsDB(); const score = new Map(); const add = (c, w, why) => { if (c === x) return; const o = score.get(c) || { w: 0, why: [] }; o.w += w; if (o.why.length < 3) o.why.push(why); score.set(c, o); };
  for (const n of needs[x] || []) { const hits = pool.filter(c => matches(n, c)); if (!hits.length || hits.length > maxHits) continue; const w = 1 / Math.log2(2 + hits.length); for (const c of hits) add(c, w, `${name(x)} needs it (${n.via})`); }
  for (const c of pool) { if (c === x) continue; for (const n of needs[c] || []) { if (!matches(n, x)) continue; const hits = REV.get(n) ?? (() => { const h = pool.filter(k => matches(n, k)).length; REV.set(n, h); return h; })(); if (hits > maxHits) continue; add(c, 1 / Math.log2(2 + hits), `needs ${name(x)} (${n.via})`); break; } }
  return [...score.entries()].map(([c, o]) => ({ code: c, w: o.w, why: o.why })).sort((a, b) => b.w - a.w); }
const REV = new Map();
export { setsOf, hasSet };
