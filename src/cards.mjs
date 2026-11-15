// Card database + deck helpers. Everything is relative to this folder, so it runs anywhere (Windows included).
import { DatabaseSync } from 'node:sqlite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const VENDOR = path.join(ROOT, 'vendor');
let DB = null;
export function cardDB() {
  if (DB) return DB;
  const dir = path.join(VENDOR, 'cdb');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.cdb') && !/rush|skill|goat/.test(f));
  files.sort((a, b) => (a === 'cards.cdb' ? -1 : b === 'cards.cdb' ? 1 : a.localeCompare(b))); // official first, prerelease fills gaps
  const data = new Map(), text = new Map();
  for (const f of files) {
    const db = new DatabaseSync(path.join(dir, f), { readOnly: true });
    const all = (sql) => { const st = db.prepare(sql); st.setReadBigInts(true); return st.all().map(r => { const o = {}; for (const k in r) { const v = r[k]; o[k] = typeof v === 'bigint' && v >= -9007199254740991n && v <= 9007199254740991n ? Number(v) : v; } return o; }); };
    for (const r of all('select *, cast(setcode as text) as sc from datas')) if (!data.has(r.id)) data.set(r.id, { ...r, setcode: BigInt(r.sc), _db: f });
    for (const r of all('select * from texts')) if (!text.has(r.id)) text.set(r.id, r);
    db.close();
  }
  const sys = new Map();
  for (const line of fs.readFileSync(path.join(VENDOR, 'strings', 'strings.conf'), 'utf8').split('\n')) {
    const m = line.match(/^!system (\d+) (.*)$/); if (m) sys.set(+m[1], m[2].trim());
  }
  const byName = new Map();
  for (const [id, t] of text) { const k = t.name.toLowerCase(); if (!byName.has(k) || id < byName.get(k)) byName.set(k, id); }
  DB = { data, text, sys, byName };
  return DB;
}
export function coreCardData(code) {
  const d = cardDB().data.get(code); if (!d) return null;
  const setcodes = []; let sc = d.setcode;
  for (let i = 0; i < 4; i++) { const v = Number(sc & 0xffffn); if (v) setcodes.push(v); sc >>= 16n; }
  const isLink = (d.type & 0x4000000) !== 0;
  return { code: d.id, alias: d.alias, setcodes, type: d.type, level: d.level & 0xff, attribute: d.attribute, race: BigInt(d.race),
    attack: d.atk, defense: isLink ? 0 : d.def, lscale: (d.level >> 24) & 0xff, rscale: (d.level >> 16) & 0xff, link_marker: isLink ? d.def : 0 };
}
export function name(code) { const t = cardDB().text.get(code); return t ? t.name : `#${code}`; }
export function findCard(q) {
  const D = cardDB(); q = String(q).trim();
  if (/^\d+$/.test(q) && D.text.has(+q)) return +q;
  const k = q.toLowerCase();
  if (D.byName.has(k)) return D.byName.get(k);
  const hits = [...D.byName.entries()].filter(([n]) => n.includes(k));
  return hits.length === 1 ? hits[0][1] : hits.length ? hits.slice(0, 12).map(h => h[1]) : null;
}
export function parseYdk(text) {
  let sec = 'main'; const d = { main: [], extra: [], side: [] };
  for (const raw of text.split('\n')) {
    const l = raw.trim();
    if (l.startsWith('#main')) sec = 'main'; else if (l.startsWith('#extra')) sec = 'extra'; else if (l.startsWith('!side')) sec = 'side';
    else if (/^\d+$/.test(l)) d[sec].push(+l);
  }
  return d;
}
export function banlist(label = '2026.10 TCG') {
  const lim = new Map(); let on = false;
  for (const l of fs.readFileSync(path.join(VENDOR, 'lflists', '0TCG.lflist.conf'), 'utf8').split('\n')) {
    if (l.startsWith('!')) { on = l.startsWith('!' + label); continue; }
    if (!on) continue; const m = l.match(/^(\d+)\s+(-?\d+)/); if (m) lim.set(+m[1], +m[2]);
  }
  return lim;
}

// ---- text helpers (used by the game interface) ----
export function cardText(code) { const t = cardDB().text.get(code); return t ? t.desc : ''; }
export function desc(d) { // effect description: code<<20 | index, or a system string id
  const D = cardDB(); d = BigInt(d);
  if (d === 0n) return 'activate this card';
  if (d < (1000n << 20n)) { const n = Number(d); if (D.sys.has(n)) return D.sys.get(n); if (D.text.has(n)) return `(for ${name(n)})`; return `#${n}`; }
  const code = Number(d >> 20n), idx = Number(d & 0xfffffn); const t = D.text.get(code); const s = t ? t['str' + (idx + 1)] : null;
  return s && s.trim() ? s.trim() : `${name(code)} effect ${idx}`;
}
const TYPES = [[0x1,'Monster'],[0x2,'Spell'],[0x4,'Trap'],[0x10,'Normal'],[0x20,'Effect'],[0x40,'Fusion'],[0x80,'Ritual'],[0x200,'Spirit'],[0x800,'Gemini'],[0x1000,'Tuner'],[0x2000,'Synchro'],[0x4000,'Token'],[0x10000,'Quick-Play'],[0x20000,'Continuous'],[0x40000,'Equip'],[0x80000,'Field'],[0x100000,'Counter'],[0x200000,'Flip'],[0x800000,'Xyz'],[0x1000000,'Pendulum'],[0x4000000,'Link']];
const ATTR = {1:'EARTH',2:'WATER',4:'FIRE',8:'WIND',16:'LIGHT',32:'DARK',64:'DIVINE'};
const RACES = ['Warrior','Spellcaster','Fairy','Fiend','Zombie','Machine','Aqua','Pyro','Rock','Winged Beast','Plant','Insect','Thunder','Dragon','Beast','Beast-Warrior','Dinosaur','Fish','Sea Serpent','Reptile','Psychic','Divine-Beast','Creator God','Wyrm','Cyberse','Illusion'];
export function typeStr(t) { return TYPES.filter(([b]) => t & b).map(x => x[1]).join('/'); }
export function attrStr(a) { return Object.entries(ATTR).filter(([b]) => a & +b).map(x => x[1]).join('/'); }
export function raceStr(r) { r = BigInt(r); return RACES.filter((_, i) => r & (1n << BigInt(i))).join('/'); }
export function cardLine(code) {
  const d = cardDB().data.get(code); if (!d) return name(code); const t = d.type;
  if (t & 1) { const isLink = t & 0x4000000, isXyz = t & 0x800000, lv = d.level & 0xff; const lvl = isLink ? `Link-${lv}` : isXyz ? `Rank ${lv}` : `Lv${lv}`;
    return `${name(code)} [${attrStr(d.attribute)} ${raceStr(d.race)} ${typeStr(t)} ${lvl} ${d.atk}/${isLink ? '-' : d.def}]`; }
  return `${name(code)} [${typeStr(t)}]`;
}
export function cardFull(code) { return cardLine(code) + '\n' + cardText(code); }
