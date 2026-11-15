/* ROLAD engine solver core — shared by the guide's Web Worker and the Node tests.
   makeSolver(createCore, E, D): E = ocgcore-wasm enums, D = data provider
   { cdata(code), name(code), str(code,i), sys(n), script(name), main[], extra[], opp[], codes{} }. */
async function makeSolver(createCore, E, D) {
  const { OcgDuelMode: DM, OcgProcessResult: PR, OcgLocation: L, OcgPosition: P, OcgMessageType: M, OcgResponseType: R, SelectIdleCMDAction: IA, SelectBattleCMDAction: BA } = E;
  const lib = D.lib || await createCore({ sync: true });
  const errs = new Set();
  let oppLastCtrl = null;
  const name = c => D.name(c) || ('#' + c);
  const C = D.codes; // role -> code
  const desc = d => { d = BigInt(d); if (d === 0n) return 'activate'; if (d < (1000n << 20n)) { const n = Number(d); return D.sys(n) ?? (D.name(n) ? `(for ${name(n)})` : '#' + n); }
    const code = Number(d >> 20n), i = Number(d & 0xfffffn); const s = D.str(code, i); return s && s.trim() ? s.trim() : `${name(code)} eff ${i}`; };
  const ZN = (loc, s) => loc === L.MZONE ? (s === 5 ? 'EMZ-L' : s === 6 ? 'EMZ-R' : 'M' + (s + 1)) : loc === L.SZONE ? (s === 5 ? 'Field' : s >= 6 ? 'P' + (s - 5) : 'S' + (s + 1)) : ({ 1: 'Deck', 2: 'hand', 16: 'GY', 32: 'banished', 64: 'ED', 128: 'mat' })[loc] || 'loc' + loc;
  const up = p => (p & 5) !== 0;

  // ---------- duel setup (identical deck order to lab.mjs) ----------
  function newDuel(hand, seed) {
    const s = BigInt(seed);
    const h = lib.createDuel({ flags: DM.MODE_MR5 | DM.TCG_SEGOC_NONPUBLIC | DM.TCG_SEGOC_FIRSTTRIGGER, seed: [s, s ^ 0x9e37n, s * 3n + 7n, s ^ 0x1234567n],
      team1: { startingLP: 8000, startingDrawCount: 5, drawCountPerTurn: 1 }, team2: { startingLP: 8000, startingDrawCount: 5, drawCountPerTurn: 1 },
      cardReader: c => D.cdata(c), scriptReader: n => D.script(n), errorHandler: (t, m) => errs.add(m) });
    lib.loadScript(h, 'constant.lua', D.script('constant.lua')); lib.loadScript(h, 'utility.lua', D.script('utility.lua'));
    const load = (team, mainList, extra, top0) => { let main = mainList.slice(); const top = [];
      for (const code of top0) { const i = main.indexOf(code); top.push(i >= 0 ? main.splice(i, 1)[0] : code); }
      let r = Number(s % 100000n) + team * 7 + 1; const rnd = () => { r = (r * 1103515245 + 12345) % 2147483648; return r / 2147483648; };
      for (let i = main.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [main[i], main[j]] = [main[j], main[i]]; }
      main = main.concat(top.reverse());
      for (const c of main) lib.duelNewCard(h, { team, duelist: 0, code: c, controller: team, location: L.DECK, sequence: 0, position: P.FACEDOWN_DEFENSE });
      for (const c of extra) lib.duelNewCard(h, { team, duelist: 0, code: c, controller: team, location: L.EXTRA, sequence: 0, position: P.FACEDOWN_DEFENSE }); };
    load(0, D.main, D.extra, hand); load(1, D.opp, [], D.oppHand || []);
    lib.startDuel(h);
    return h;
  }

  // ---------- option lists (port of lab.mjs) ----------
  let H = null; // current duel handle
  const qn = c => { try { const q = lib.duelQuery(H, { flags: 3, controller: c.controller, location: c.location, sequence: c.sequence, overlaySequence: 0 }); if (q?.code) return name(q.code); } catch (e) {} return '?'; };
  const cn = (c, me) => (c.controller !== me && (c.location === L.HAND || c.location === L.DECK)) ? 'hidden' : c.code ? name(c.code) : qn(c);
  function options(m, me) { const o = []; const lc = c => ZN(c.location, c.sequence);
    switch (m.type) {
      case M.SELECT_IDLECMD: m.activates.forEach((c, i) => o.push([`Activate ${cn(c, me)} (${lc(c)}): ${desc(c.description)}`, { type: R.SELECT_IDLECMD, action: IA.SELECT_ACTIVATE, index: i }]));
        m.summons.forEach((c, i) => o.push([`Normal Summon ${cn(c, me)}`, { type: R.SELECT_IDLECMD, action: IA.SELECT_SUMMON, index: i }]));
        m.special_summons.forEach((c, i) => o.push([`SS proc ${cn(c, me)} (${lc(c)})`, { type: R.SELECT_IDLECMD, action: IA.SELECT_SPECIAL_SUMMON, index: i }]));
        m.monster_sets.forEach((c, i) => o.push([`Set monster ${cn(c, me)}`, { type: R.SELECT_IDLECMD, action: IA.SELECT_MONSTER_SET, index: i }]));
        m.spell_sets.forEach((c, i) => o.push([`Set ST ${cn(c, me)}`, { type: R.SELECT_IDLECMD, action: IA.SELECT_SPELL_SET, index: i }]));
        m.pos_changes.forEach((c, i) => o.push([`Pos ${cn(c, me)}`, { type: R.SELECT_IDLECMD, action: IA.SELECT_POS_CHANGE, index: i }]));
        if (m.to_bp) o.push(['Battle Phase', { type: R.SELECT_IDLECMD, action: IA.TO_BP, index: 0 }]);
        if (m.to_ep) o.push(['End Phase', { type: R.SELECT_IDLECMD, action: IA.TO_EP, index: 0 }]); break;
      case M.SELECT_BATTLECMD: m.chains.forEach((c, i) => o.push([`Activate ${cn(c, me)}: ${desc(c.description)}`, { type: R.SELECT_BATTLECMD, action: BA.SELECT_CHAIN, index: i }]));
        m.attacks.forEach((c, i) => o.push([`Attack ${cn(c, me)}`, { type: R.SELECT_BATTLECMD, action: BA.SELECT_BATTLE, index: i }]));
        if (m.to_m2) o.push(['Main Phase 2', { type: R.SELECT_BATTLECMD, action: BA.TO_M2, index: 0 }]); if (m.to_ep) o.push(['End Phase', { type: R.SELECT_BATTLECMD, action: BA.TO_EP, index: 0 }]); break;
      case M.SELECT_CHAIN: m.selects.forEach((c, i) => o.push([`Activate ${cn(c, me)} (${lc(c)}): ${desc(c.description)}`, { type: R.SELECT_CHAIN, index: i }])); break;
      case M.SELECT_EFFECTYN: case M.SELECT_YESNO: o.push(['Yes', { type: m.type === M.SELECT_YESNO ? R.SELECT_YESNO : R.SELECT_EFFECTYN, yes: true }], ['No', { type: m.type === M.SELECT_YESNO ? R.SELECT_YESNO : R.SELECT_EFFECTYN, yes: false }]); break;
      case M.SELECT_OPTION: m.options.forEach((d, i) => o.push([desc(d), { type: R.SELECT_OPTION, index: i }])); break;
      case M.SELECT_CARD: case M.SELECT_TRIBUTE: case M.SELECT_SUM: m.selects.forEach((c, i) => o.push([`${cn(c, me)} (${lc(c)}${c.controller !== me ? ' opp' : ''})`, i])); break;
      case M.SELECT_UNSELECT_CARD: m.select_cards.forEach((c, i) => o.push([`${cn(c, me)} (${lc(c)}${c.controller !== me ? ' opp' : ''})`, { type: R.SELECT_UNSELECT_CARD, index: i }]));
        if (m.can_finish) o.push(['finish', { type: R.SELECT_UNSELECT_CARD, index: null }]); break;
      case M.SELECT_PLACE: case M.SELECT_DISFIELD: for (const pl of [0, 1]) { const b = pl ? 16 : 0;
          for (let s = 0; s < 7; s++) if (!(m.field_mask & (1 << (b + s)))) o.push([`${pl ? 'opp ' : ''}${ZN(L.MZONE, s)}`, { player: pl ? 1 - m.player : m.player, location: L.MZONE, sequence: s }]);
          for (let s = 0; s < 8; s++) if (!(m.field_mask & (1 << (b + 8 + s)))) o.push([`${pl ? 'opp ' : ''}${ZN(L.SZONE, s)}`, { player: pl ? 1 - m.player : m.player, location: L.SZONE, sequence: s }]); } break;
      case M.SELECT_POSITION: for (const [b, l] of [[1, 'ATK'], [2, 'set ATK'], [4, 'DEF'], [8, 'set DEF']]) if (m.positions & b) o.push([l, { type: R.SELECT_POSITION, position: b }]); break;
      case M.SORT_CHAIN: case M.SORT_CARD: o.push(['default', { type: R.SORT_CARD, order: null }]); break;
      case M.ANNOUNCE_NUMBER: m.options.forEach((n, i) => o.push([String(n), { type: R.ANNOUNCE_NUMBER, value: i }])); break;
      case M.ANNOUNCE_RACE: for (let i = 0; i < 26; i++) { const b = 1n << BigInt(i); if (BigInt(m.available) & b) o.push(['race' + i, b]); } break;
      case M.ANNOUNCE_ATTRIB: for (let i = 0; i < 7; i++) { const b = 1 << i; if (m.available & b) o.push(['attr' + i, b]); } break;
      case M.ROCK_PAPER_SCISSORS: o.push(['r', { type: R.ROCK_PAPER_SCISSORS, value: 1 }]); break; }
    return o; }

  // generic responses
  const cardResp = (T, idx) => ({ type: T === M.SELECT_TRIBUTE ? R.SELECT_TRIBUTE : T === M.SELECT_SUM ? R.SELECT_SUM : R.SELECT_CARD, indicies: idx });
  const placeResp = (m, picks) => ({ type: m.type === M.SELECT_DISFIELD ? R.SELECT_DISFIELD : R.SELECT_PLACE, places: picks });
  function sumSets(m, cap = 8) { // subsets of selects whose (level) sum fits the target
    const must = (m.selects_must || []).map(c => [c.amount & 0xffff, c.amount >>> 16]);
    const sel = m.selects.map(c => [c.amount & 0xffff, c.amount >>> 16]);
    const tgt = m.amount; const out = []; const n = sel.length;
    const sums = (arr) => { let s = new Set([0]); for (const [a, b] of arr) { const t = new Set(); for (const x of s) { t.add(x + a); if (b) t.add(x + b); } s = t; } return s; };
    for (let mask = 1; mask < (1 << Math.min(n, 12)) && out.length < cap; mask++) {
      const pick = []; for (let i = 0; i < n; i++) if (mask & (1 << i)) pick.push(i);
      if (pick.length < (m.min || 1) || pick.length > (m.max || 99)) continue;
      const S = sums(must.concat(pick.map(i => sel[i])));
      if (m.select_max) { if (![...S].some(x => x >= tgt)) continue; let minimal = true; for (const j of pick) { const S2 = sums(must.concat(pick.filter(i => i !== j).map(i => sel[i]))); if ([...S2].some(x => x >= tgt)) { minimal = false; break; } } if (!minimal) continue; }
      else if (!S.has(tgt)) continue;
      out.push(pick); }
    return out; }
  // default policy for decisions nobody scripted; returns [response, label]
  function defaultResp(m, o) {
    const T = m.type;
    switch (T) {
      case M.SELECT_IDLECMD: { const e = o.find(x => x[0] === 'End Phase'); return e ? [e[1], e[0]] : [o[0][1], o[0][0]]; }
      case M.SELECT_BATTLECMD: { const e = o.find(x => x[0] === 'End Phase') || o[o.length - 1]; return [e[1], e[0]]; }
      case M.SELECT_CHAIN: return m.forced ? [o[0][1], o[0][0]] : [{ type: R.SELECT_CHAIN, index: null }, 'pass'];
      case M.SELECT_EFFECTYN: case M.SELECT_YESNO: return [o[0][1], 'Yes'];
      case M.SELECT_OPTION: return [o[0][1], o[0][0]];
      case M.SELECT_CARD: case M.SELECT_TRIBUTE: { const k = Math.max(1, m.min); const idx = o.slice(0, k).map(x => x[1]); return [cardResp(T, idx), o.slice(0, k).map(x => x[0]).join(' + ')]; }
      case M.SELECT_SUM: { const s = sumSets(m, 1)[0] || [0]; return [cardResp(T, s), s.map(i => o[i][0]).join(' + ')]; }
      case M.SELECT_UNSELECT_CARD: { const f = o.find(x => x[0] === 'finish'); const c = f || o[0]; return [c[1], c[0]]; }
      case M.SELECT_PLACE: case M.SELECT_DISFIELD: { const picks = []; for (let i = 0; picks.length < m.count && i < o.length; i++) picks.push(o[i]); return [placeResp(m, picks.map(x => x[1])), picks.map(x => x[0]).join('|')]; }
      case M.SELECT_POSITION: { const d = o.find(x => x[0] === 'DEF') || o[0]; return [d[1], d[0]]; }
      case M.SORT_CHAIN: case M.SORT_CARD: return [{ type: R.SORT_CARD, order: null }, 'default'];
      case M.ANNOUNCE_NUMBER: return [o[0][1], o[0][0]];
      case M.ANNOUNCE_RACE: return [{ type: R.ANNOUNCE_RACE, races: [o[0][1]] }, o[0][0]];
      case M.ANNOUNCE_ATTRIB: return [{ type: R.ANNOUNCE_ATTRIB, attributes: [o[0][1]] }, o[0][0]];
      case M.ROCK_PAPER_SCISSORS: return [o[0][1], 'r'];
    }
    return null; }
  // alternatives to branch on (excluding the default), with a priority (lower = try first)
  function alternatives(m, o, chosenLabel) {
    const T = m.type, out = [], seen = new Set([chosenLabel]);
    const add = (resp, label, pri) => { if (seen.has(label)) return; seen.add(label); out.push({ resp, label, pri }); };
    switch (T) {
      case M.SELECT_CHAIN: if (!m.forced) o.forEach(x => add(x[1], x[0], 0)); add({ type: R.SELECT_CHAIN, index: null }, 'pass', 0); break;
      case M.SELECT_EFFECTYN: case M.SELECT_YESNO: o.forEach(x => add(x[1], x[0], 0)); break;
      case M.SELECT_OPTION: o.forEach(x => add(x[1], x[0], 0)); break;
      case M.SELECT_CARD: case M.SELECT_TRIBUTE: { const k = Math.max(1, m.min); const dist = []; const dl = new Set(); o.forEach(x => { if (!dl.has(x[0])) { dl.add(x[0]); dist.push(x); } });
        if (k === 1) dist.forEach(x => add(cardResp(T, [x[1]]), x[0], 1));
        else { const combos = []; const rec = (st, acc) => { if (combos.length >= 8) return; if (acc.length === k) { combos.push(acc); return; } for (let i = st; i < o.length; i++) rec(i + 1, acc.concat([o[i]])); }; rec(0, []);
          combos.forEach(cb => add(cardResp(T, cb.map(x => x[1])), cb.map(x => x[0]).join(' + '), 1)); }
        break; }
      case M.SELECT_SUM: sumSets(m, 6).forEach(s => add(cardResp(T, s), s.map(i => o[i][0]).join(' + '), 1)); break;
      case M.SELECT_UNSELECT_CARD: o.forEach(x => add(x[1], x[0], 1)); break;
      case M.SELECT_PLACE: case M.SELECT_DISFIELD: if (m.count === 1) o.filter(x => !x[0].startsWith('opp')).forEach(x => add(placeResp(m, [x[1]]), x[0], 2)); break;
      case M.SELECT_POSITION: o.forEach(x => add(x[1], x[0], 3)); break;
    }
    return out; }

  // ---------- board read + score ----------
  const QF = 1 | 2 | 16 | 128 | 0x80000 | 0x800000; // TYPE (8) breaks the 0.1.6 parser; type comes from card data
  const typ = c => (D.cdata(c.code) || {}).type || 0;
  const RACES = ['Warrior', 'Spellcaster', 'Fairy', 'Fiend', 'Zombie', 'Machine', 'Aqua', 'Pyro', 'Rock', 'Winged Beast', 'Plant', 'Insect', 'Thunder', 'Dragon', 'Beast', 'Beast-Warrior', 'Dinosaur', 'Fish', 'Sea Serpent', 'Reptile', 'Psychic', 'Divine-Beast', 'Creator God', 'Wyrm', 'Cyberse', 'Illusion'];
  function readBoard(h) {
    const q = loc => { try { return lib.duelQueryLocation(h, { flags: QF, controller: 0, location: loc }); } catch (e) { return []; } };
    const mz = q(L.MZONE).map(c => c && c.code ? c : null), sz = q(L.SZONE).map(c => c && c.code ? c : null);
    return { mz, sz, hand: q(L.HAND).filter(Boolean), gy: q(L.GRAVE).filter(Boolean), ban: q(L.REMOVED).filter(Boolean), ed: q(L.EXTRA).filter(Boolean) }; }
  function pointed(seq, marker) { const z = [];
    if (seq === 5 || seq === 6) { const col = seq === 5 ? 1 : 3; if (marker & 1) z.push(col - 1); if (marker & 2) z.push(col); if (marker & 4) z.push(col + 1); }
    else { if (marker & 8 && seq > 0) z.push(seq - 1); if (marker & 0x20 && seq < 4) z.push(seq + 1);
      const emz = col => col === 1 ? 5 : col === 3 ? 6 : -1; if (marker & 0x40) z.push(emz(seq - 1)); if (marker & 0x80) z.push(emz(seq)); if (marker & 0x100) z.push(emz(seq + 1)); }
    return z.filter(x => x >= 0); }
  const HTN = new Set([C.ash, C.imperm, C.droll, C.belle, C.drop, C.ogre].map(c => D.name(c)).filter(Boolean)); const HT = { has: c => HTN.has(D.name(c)) };
  function score(b, meta) {
    const parts = []; let s = 0; const add = (v, why) => { if (v) { s += v; parts.push([why, v]); } };
    const faceMon = b.mz.map((c, i) => c && up(c.position) ? { ...c, seq: i } : null).filter(Boolean);
    const has = code => faceMon.find(c => c.code === code);
    const negated = c => (c.status & 1) !== 0;
    const races = new Set(); for (const c of faceMon) for (let i = 0; i < 26; i++) if (Number(c.race) & (1 << i)) races.add(i);
    const med = has(C.mediclius); if (med && !negated(med)) { const mk = med.link?.marker ?? D.cdata(C.mediclius).link_marker; const n = pointed(med.seq, mk).filter(z => b.mz[z]).length; add(n >= 3 ? 2 : n === 2 ? 1 : 0, `Mediclius pointing at ${n}`); }
    const dia = has(C.diactorus); if (dia && !negated(dia) && races.size >= 3) add(1, `Diactorus (${races.size} Types)`);
    const fin = has(C.finmel); if (fin && races.size >= 3) add(1, `Finmel (${races.size} Types)`);
    const impSet = b.sz.some((c, i) => c && i < 5 && c.code === C.impasto && !up(c.position)); const fusion = faceMon.some(c => (typ(c) & 0x40) !== 0);
    if (impSet && fusion) add(1, 'Set Impasto + a Fusion to banish');
    const des = has(C.desirae); if (des) { const ct = b.sz.reduce((a, c) => a + (c && up(c.position) && (typ(c) & 0x4000000) ? (c.link?.rating || 0) : 0), 0); add(ct, `Desirae (${ct} negates)`); }
    if (has(C.nerva) && has(C.nonfinito)) add(1, 'Nerva + Non-Finito');
    if (has(C.fi) && b.sz.some((c, i) => c && i < 5 && c.code === C.cit && up(c.position))) add(1, 'Finite and Infinite + face-up Citrinitas');
    if (b.sz.some((c, i) => c && i < 5 && c.code === C.mindshuffle) && faceMon.some(c => (c.level || 0) >= 7 && !(typ(c) & 0x4000000))) add(0.5, 'Mind Shuffle + a Level 7+ monster');
    // hand traps still live (in hand, or Imperm/Droplet Set) — capped per card by the starting hand, so random draws don't count
    const cap = {}; for (const c of (meta && meta.hand) || []) if (HT.has(c)) cap[name(c)] = (cap[name(c)] || 0) + 1;
    const live = {}; for (const c of b.hand) if (HT.has(c.code)) live[name(c.code)] = (live[name(c.code)] || 0) + 1;
    for (const c of b.sz) if (c && (name(c.code) === name(C.imperm) || name(c.code) === name(C.drop)) && !up(c.position)) live[name(c.code)] = (live[name(c.code)] || 0) + 1;
    let ht = 0; for (const [n, v] of Object.entries(live)) ht += Math.min(v, cap[n] || 0);
    add(ht, `${ht} hand trap${ht === 1 ? '' : 's'} kept (hand or Set)`);
    let tb = 0; if (meta && impSet && meta.impAt != null && meta.impAt < 5) tb += 0.05; if (meta) tb -= 0.002 * meta.summons;
    return { score: Math.round((s + tb) * 1000) / 1000, base: s, parts }; }
  function boardText(b) {
    return { mz: b.mz.map((c, i) => c ? `${ZN(L.MZONE, i)} ${name(c.code)}${up(c.position) ? '' : ' (set)'}${c.position & 0xc ? ' DEF' : ''}` : null).filter(Boolean),
      sz: b.sz.map((c, i) => c ? `${ZN(L.SZONE, i)} ${name(c.code)}${up(c.position) ? '' : ' (set)'}` : null).filter(Boolean),
      hand: b.hand.map(c => name(c.code)), gy: b.gy.map(c => name(c.code)), ban: b.ban.map(c => c.code ? name(c.code) : 'face-down') }; }
  function signature(b, m) {
    const k = c => c ? c.code + ':' + c.position : '-';
    const srt = a => a.map(c => c.code || 0).sort((x, y) => x - y).join(',');
    const idle = m ? [...m.activates.map(c => c.code + '/' + c.description), 's' + m.summons.length, ...m.special_summons.map(c => c.code)].sort().join(',') : '';
    return [b.mz.map(k).join(' '), b.sz.map(k).join(' '), srt(b.hand), srt(b.gy), srt(b.ban), b.ed.filter(c => up(c.position)).map(c => c.code).sort().join(','), idle].join('|'); }

  // ---------- token policy (port of lab.mjs decide/prep) ----------
  function tokenPolicy(tokens) {
    const q = tokens.slice(); let lastChain = '';
    const match = (o, t) => { if (t.startsWith('#')) return +t.slice(1) - 1; const k = t.replace(/^~/, '').toLowerCase(); return o.findIndex(x => x[0].toLowerCase().includes(k)); };
    function fits(m, o, tok) { const T = m.type, k = tok.replace(/^\?/, '');
      if (T === M.SELECT_CHAIN) return /^~?Activate/i.test(k) && match(o, k) >= 0;
      if (T === M.SELECT_PLACE || T === M.SELECT_DISFIELD) return k.split(/[|\/]/).some(p => o.some(x => x[0] === p.replace(/^~/, '')));
      if (T === M.SELECT_EFFECTYN || T === M.SELECT_YESNO) return /^~?(yes|no)$/i.test(k);
      if (T === M.SELECT_POSITION) return o.some(x => x[0].toLowerCase() === k.replace(/^~/, '').toLowerCase());
      return match(o, k.split('|')[0]) >= 0; }
    function prep(m, o) {
      for (let pass = 0; pass < 2; pass++) { let found = -1;
        for (let j = 0; j < q.length; j++) { const t = String(q[j]); if (t.startsWith('@@')) continue; if (t.startsWith('?')) { if (fits(m, o, t)) { found = j; break; } continue; } if (fits(m, o, t)) found = j; break; }
        if (found >= 0) { const x = String(q[found]); const before = q.slice(0, found); q.splice(0, found + 1); const keep = [];
          for (const t of before) { const st = String(t); if (!st.startsWith('@@') && m.type !== M.SELECT_IDLECMD) keep.push(t); }
          q.unshift(x.replace(/^\?/, ''), ...keep); if (keep.length) { const first = q.shift(); q.splice(0, keep.length); q.unshift(first, ...keep); } return; }
        if (m.type === M.SELECT_IDLECMD) { let dropped = false; for (let j = 0; j < q.length; j++) { const t = String(q[j]); if (t.startsWith('@@')) continue; if (t.startsWith('?')) { q.splice(j, 1); j--; dropped = true; continue; } break; } if (dropped) continue; }
        return; } }
    function decide(m, o) { // returns [resp,label] or null
      prep(m, o); const t = (q[0] !== undefined && /^(@@|\?)/.test(String(q[0]))) ? undefined : q[0]; const tok = t === undefined ? null : String(t); const take = () => q.shift(); const T = m.type;
      if (T === M.SELECT_CHAIN) { if (tok && tok.includes('@')) { const [a, b] = tok.split('@'); if (lastChain.toLowerCase().includes(b.toLowerCase())) { const i = match(o, a); if (i >= 0) { take(); return [o[i][1], o[i][0]]; } } return [{ type: R.SELECT_CHAIN, index: null }, 'pass']; }
        if (tok && !/[|]/.test(tok) && /^~?(Activate|#)/i.test(tok)) { const i = match(o, tok); if (i >= 0) { take(); return [o[i][1], o[i][0]]; } if (/^~?pass$/i.test(tok)) take(); }
        if (m.forced) return [o[0][1], o[0][0]]; return [{ type: R.SELECT_CHAIN, index: null }, 'pass']; }
      if (T === M.SELECT_POSITION) { if (tok) { const i = o.findIndex(x => x[0].toLowerCase() === tok.replace(/^~/, '').toLowerCase()); if (i >= 0) { take(); return [o[i][1], o[i][0]]; } } const d = o.find(x => x[0] === 'DEF') || o[0]; return [d[1], d[0]]; }
      if (T === M.SELECT_PLACE || T === M.SELECT_DISFIELD) { const picks = []; if (tok) { for (const p of tok.split('|')) { const alts = p.replace(/^~/, '').split('/'); const i = o.findIndex(x => alts.includes(x[0])); if (i >= 0) picks.push(o[i]); } if (picks.length === m.count) take(); else picks.length = 0; }
        while (picks.length < m.count) picks.push(o[picks.length]); return [placeResp(m, picks.map(x => x[1])), picks.map(x => x[0]).join('|')]; }
      if (T === M.SORT_CHAIN || T === M.SORT_CARD || T === M.ROCK_PAPER_SCISSORS) return defaultResp(m, o);
      if (T === M.SELECT_EFFECTYN || T === M.SELECT_YESNO) { if (tok && /^~?(yes|no)$/i.test(tok)) { take(); const i = /no/i.test(tok) ? 1 : 0; return [o[i][1], o[i][0]]; } return [o[0][1], 'Yes']; }
      if (T === M.SELECT_UNSELECT_CARD && !tok) { const f = o.find(x => x[0] === 'finish'); if (f) return [f[1], 'finish']; }
      if ((T === M.SELECT_CARD || T === M.SELECT_TRIBUTE) && m.min === 1 && o.length > 1 && o.every(x => x[0] === o[0][0])) { if (tok && match(o, tok) >= 0) take(); return [cardResp(T, [o[0][1]]), o[0][0]]; }
      if ((T === M.SELECT_CARD || T === M.SELECT_TRIBUTE) && o.length === m.min && (!tok || match(o, tok.split('|')[0]) < 0 || o.length === 1)) { if (tok && match(o, tok.split('|')[0]) >= 0) take(); return [cardResp(T, o.map(x => x[1])), o.map(x => x[0]).join(' + ')]; }
      if (!tok) return null;
      if (T === M.SELECT_CARD || T === M.SELECT_TRIBUTE || T === M.SELECT_SUM) { const idx = []; for (const p of tok.split('|')) { if (p === 'f') continue; const k = p.replace(/^~/, '').toLowerCase(); const i = o.findIndex((x) => x[0].toLowerCase().includes(k) && !idx.includes(x[1])); if (i < 0) return null; idx.push(o[i][1]); }
        take(); return [cardResp(T, idx), idx.map(i => o.find(x => x[1] === i)[0]).join(' + ')]; }
      if (T === M.SELECT_UNSELECT_CARD) { const parts = tok.split('|'); const p = parts[0]; if (p === 'f') { parts.shift(); if (parts.length) q[0] = parts.join('|'); else take(); const f = o.find(x => x[0] === 'finish'); return f ? [f[1], 'finish'] : null; }
        const i = match(o, p); if (i < 0) { const f = o.find(x => x[0] === 'finish'); if (f) return [f[1], 'finish']; return null; } parts.shift(); if (parts.length) q[0] = parts.join('|'); else take(); return [o[i][1], o[i][0]]; }
      if (T === M.SELECT_OPTION && o.length === 1) { if (tok && match(o, tok) >= 0) take(); return [o[0][1], o[0][0]]; }
      if (T === M.ANNOUNCE_RACE) { take(); return [{ type: R.ANNOUNCE_RACE, races: [o[0][1]] }, o[0][0]]; }
      const i = match(o, tok); if (i < 0) return null; take(); return [o[i][1], o[i][0]]; }
    return { decide, q, setLast: n => { lastChain = n; } };
  }

  // ---------- one replay ----------
  // drive(m,o,k) -> [resp,label] | 'pause' | null(stop). Returns result with trace of our decisions.
  let replays = 0;
  function run(hand, seed, drive, opt = {}) {
    replays++;
    const h = newDuel(hand, seed); H = h;
    const trace = [], log = []; let turn = 0, summons = 0, last = null, stop = null, pend = null, impAt = null, pauseInfo = null, lastChainName = '';
    const L0 = opt.log;
    const onMsg = (m) => { switch (m.type) {
      case M.NEW_TURN: turn++; break;
      case M.SUMMONING: if (m.controller === 0) { summons++; if (L0) log.push({ k: 'ns', c: m.code, z: ZN(m.location, m.sequence), n: summons }); } break;
      case M.SPSUMMONING: if (m.controller === 0) { summons++; if (L0) log.push({ k: 'ss', c: m.code, z: ZN(m.location, m.sequence), n: summons, def: !!(m.position & 0xc) }); } break;
      case M.CHAINING: oppLastCtrl = m.controller; lastChainName = name(m.code); if (opt.tok) opt.tok.setLast(lastChainName); if (L0 && m.controller === 0) log.push({ k: 'act', c: m.code, z: ZN(m.triggering_location, m.triggering_sequence), d: desc(m.description) }); break;
      case M.CHAIN_NEGATED: case M.CHAIN_DISABLED: if (L0) log.push({ k: 'neg' }); break;
      case M.MOVE: { if (!L0 || !m.card) break; const { from, to } = m; if (to.controller !== 0 && from.controller !== 0) break;
        if (to.location === L.HAND && from.location !== L.HAND) log.push({ k: 'hand', c: m.card, f: ZN(from.location, from.sequence) });
        else if (to.location === L.GRAVE && from.location !== L.GRAVE) log.push({ k: 'gy', c: m.card, f: ZN(from.location, from.sequence) });
        else if (to.location === L.REMOVED) log.push({ k: 'ban', c: m.card, f: ZN(from.location, from.sequence), fd: !up(to.position) });
        else if (to.location === L.EXTRA && from.location !== L.EXTRA) log.push({ k: 'ed', c: m.card, up: up(to.position) });
        else if (to.location === L.DECK && from.location !== L.DECK) log.push({ k: 'deck', c: m.card });
        else if (to.location === L.SZONE && from.location !== L.SZONE && up(to.position)) log.push({ k: 'place', c: m.card, z: ZN(L.SZONE, to.sequence), f: ZN(from.location, from.sequence) });
        break; }
      case M.SET: if (m.controller === 0) { if (m.code === C.impasto) impAt = summons; if (L0) log.push({ k: 'set', c: m.code, z: ZN(m.location, m.sequence) }); } break;
      case M.DRAW: if (L0 && m.player === 0 && turn === 1 && m.drawn) log.push({ k: 'draw', n: m.drawn.length }); break;
      default: if ((m.type >= 10 && m.type <= 26) || (m.type >= 140 && m.type <= 143)) last = m; } };
    try {
      for (let g = 0; g < 20000 && !stop; g++) {
        if (pend) { const me = pend.player;
          if (me === 1) { setResp(h, goldfish(pend)); }
          else { const k = trace.length; let oc = null; const getO = () => oc || (oc = options(pend, 0)); const r = drive(pend, getO, k, { summons });
            if (r === 'pause') { stop = 'pause'; pauseInfo = { m: pend, o: getO() }; break; }
            if (!r) { stop = 'no-decision'; pauseInfo = { m: pend, o: getO() }; break; }
            trace.push({ resp: r[0], lab: r[1], t: pend.type, q: opt.snap ? opt.snap() : undefined }); if (L0) log.push({ k: 'dec', t: pend.type, lab: r[1] }); setResp(h, r[0]); }
          pend = null; }
        const st = lib.duelProcess(h); let retry = false;
        for (const m of lib.duelGetMessage(h)) { if (m.type === M.RETRY) retry = true; else onMsg(m); }
        if (retry) { stop = 'rejected'; break; }
        if (st === PR.END) { stop = 'end'; break; }
        if (turn > 1) { stop = 'turn over'; break; }
        if (st === PR.WAITING) pend = last;
      }
      const b = readBoard(h);
      const res = { stop, trace, summons, impAt, log, board: b, pause: pauseInfo };
      res.sc = score(b, { summons, impAt, hand });
      if (pauseInfo && pauseInfo.m.type === M.SELECT_IDLECMD) res.sig = signature(b, pauseInfo.m);
      return res;
    } finally { lib.destroyDuel(h); H = null; }
  }
  function setResp(h, r) { lib.duelSetResponse(h, r); }
  function goldfish(m) { const o = options(m, 1); const T = m.type;
    if (T === M.SELECT_IDLECMD) return o.find(x => x[0] === 'End Phase')[1];
    if (T === M.SELECT_BATTLECMD) return (o.find(x => x[0] === 'End Phase') || o[o.length - 1])[1];
    if (T === M.SELECT_CHAIN) { if (m.forced) return o[0][1];
      if (D.oppScript && oppLastCtrl !== 1) for (const re of D.oppScript) { const x = o.find(y => re.test(y[0])); if (x) return x[1]; }
      return { type: R.SELECT_CHAIN, index: null }; }
    if (T === M.SELECT_EFFECTYN || T === M.SELECT_YESNO) return o[1][1];
    if (T === M.SELECT_CARD || T === M.SELECT_TRIBUTE) return cardResp(T, Array.from({ length: m.min }, (_, i) => i));
    if (T === M.SELECT_UNSELECT_CARD) return (o.find(x => x[0] === 'finish') || o[0])[1];
    const d = defaultResp(m, o); return d ? d[0] : o[0]?.[1]; }

  // ---------- drivers ---------- (drive(m, getO, k) -> [resp,label] | 'pause' | null)
  // play a recorded prefix, then: 'idle' = pause at the next idle decision (recording branch points), 'end' = default to End Phase.
  function prefixDriver(prefix, mode, branches) {
    return (m, getO, k) => {
      if (k < prefix.length) return [prefix[k].resp, prefix[k].lab];
      const o = getO();
      if (m.type === M.SELECT_IDLECMD && mode === 'idle') return 'pause';
      const d = defaultResp(m, o); if (!d) return null;
      if (branches && m.type !== M.SELECT_IDLECMD) { const alts = alternatives(m, o, d[1]).filter(a => a.pri < 3); if (alts.length) branches.push({ k, alts }); }
      return d; };
  }
  // optional forced prefix (+ one alternative), then the token script; unscripted -> default (or stop if strict). rec: record alternatives per decision.
  function tokenDriver(tp, prefix, mode, rec) {
    return (m, getO, k) => {
      if (prefix && k < prefix.length) return [prefix[k].resp, prefix[k].lab];
      const o = getO();
      let r = tp.decide(m, o);
      if (!r) { if (mode === 'strict') return null; r = defaultResp(m, o); if (!r) return null; }
      if (rec) rec[k] = m.type === M.SELECT_IDLECMD ? o.filter(x => x[0] !== r[1] && !/^(Battle Phase|Pos )/.test(x[0])).map(x => ({ resp: x[1], label: x[0], pri: 0 })) : alternatives(m, o, r[1]).filter(a => a.pri < 3);
      return r; };
  }
  // ---------- search ----------
  // cands: [{key, title, top, seed, variants:[[tokens]]}] in helper order. progress(info) is called ~4x/s.
  function solve(hand, cands, budgetMs, progress, now = () => Date.now()) {
    const t0 = now(), end = t0 + budgetMs; let tried = 0, best = null, helper = null, helperFailed = false, phase = 'baseline', lastRep = 0;
    const baselines = [], doneSig = new Set();
    const rep = (force) => { const t = now(); if (!force && t - lastRep < 250) return; lastRep = t; progress && progress({ elapsed: t - t0, tried, best: best ? best.score : null, helper: helper ? helper.score : null, phase }); };
    const strip = tr => tr.map(({ resp, lab, t, q }) => ({ resp, lab, t, q }));
    const consider = (res, seed, origin) => { if (res.stop !== 'turn over') return false; const s = res.sc.score;
      if (!best || s > best.score + 1e-9) { best = { score: s, sc: res.sc, trace: strip(res.trace), seed, origin }; rep(true); return true; } return false; };
    const seedsFor = s0 => [s0, 601, 602, 603, 604, 605, 606, 607, 608].filter((v, i, a) => a.indexOf(v) === i);
    // Phase A: replay the helper's lines exactly (token scripts) — engine-confirmed baseline
    for (let ci = 0; ci < cands.length; ci++) { const c = cands[ci];
      if (now() > end || (baselines.length && now() > t0 + budgetMs * 0.4)) break;
      let ok = null;
      outer: for (const seed of seedsFor(c.seed).slice(0, c.top ? 9 : 2)) for (const toks of c.variants) {
        const tp = tokenPolicy(toks), rec = [];
        const res = run(hand, seed, tokenDriver(tp, null, 'strict', rec), { tok: tp, snap: () => tp.q.slice() }); tried++;
        if (res.stop === 'turn over' && !tp.q.some(t => !/^[?@]/.test(String(t)))) { ok = { res, seed, rec, toks }; break outer; }
        rep(); if (now() > end) break outer; }
      if (!ok && !(globalThis.NO_LOOSE)) for (const toks of c.variants) { if (now() > end) break; const tp = tokenPolicy(toks), rec = [];
        const res = run(hand, c.seed, tokenDriver(tp, null, 'loose', rec), { tok: tp, snap: () => tp.q.slice() }); tried++;
        if (res.stop === 'turn over') { ok = { res, seed: c.seed, rec, toks }; break; } }
      if (ok) { const b = { key: c.key, title: c.title, top: !!c.top, seed: ok.seed, score: ok.res.sc.score, sc: ok.res.sc, trace: strip(ok.res.trace), rec: ok.rec, toks: ok.toks };
        baselines.push(b); if (c.top) helper = b; consider(ok.res, ok.seed, { kind: 'helper', key: c.key, title: c.title }); }
      else if (c.top) helperFailed = true;
      rep(); }
    // Phase C: perturb the best lines one decision at a time, then let the rest of the script replay (hill-climb)
    phase = 'search'; rep(true);
    const jobs = [];
    const pushJobs = (b, boost) => { const n = b.trace.length; let lastIdle = -1; for (let k = n - 1; k >= 0; k--) if (b.trace[k].t === M.SELECT_IDLECMD) { lastIdle = k; break; }
      for (let k = 0; k < n; k++) for (const a of (b.rec[k] || [])) { const T = b.trace[k].t; let cls;
        if (T === M.SELECT_IDLECMD) cls = k === lastIdle ? 0 : 2; else if (T === M.SELECT_CARD || T === M.SELECT_SUM || T === M.SELECT_UNSELECT_CARD || T === M.SELECT_TRIBUTE) cls = 1; else if (T === M.SELECT_PLACE || T === M.SELECT_DISFIELD) cls = 4; else cls = 3;
        jobs.push({ b, k, a, pri: cls * 1000 + (cls === 2 ? n - k : k) - boost - b.score * 100 }); }
      jobs.sort((x, y) => x.pri - y.pri); };
    baselines.slice().sort((x, y) => y.score - x.score).slice(0, 3).forEach((b, i) => pushJobs(b, i === 0 ? 0 : -500));
    while (jobs.length && now() < end) { const { b, k, a } = jobs.shift();
      const idle = b.trace[k].t === M.SELECT_IDLECMD; const q0 = idle ? (k ? b.trace[k - 1].q : b.toks) : b.trace[k].q;
      if (!q0) continue;
      const tp = tokenPolicy(q0), rec = [];
      const prefix = b.trace.slice(0, k).concat([{ resp: a.resp, lab: a.label, t: b.trace[k].t, q: q0 }]);
      const res = run(hand, b.seed, tokenDriver(tp, prefix, 'loose', rec), { tok: tp, snap: () => tp.q.slice() }); tried++;
      if (res.stop === 'turn over') { const sig = signature(res.board) + '#' + res.sc.score; const nb = !doneSig.has(sig); doneSig.add(sig);
        if (consider(res, b.seed, { kind: 'search', from: b.key }) && nb) { const tr = strip(res.trace); for (let i = 0; i < k; i++) tr[i].q = b.trace[i].q; tr[k].q = idle ? q0 : b.trace[k].q;
          const nbsl = { key: b.key, title: b.title, seed: b.seed, score: res.sc.score, trace: tr, rec: b.rec.slice(0, k).concat(rec.slice(k)), toks: b.toks }; nbsl.rec[k] = []; pushJobs(nbsl, 3000); } }
      rep(); }
    // Phase B: best-first search over idle decisions from the opening (and from the best line's late idle points)
    phase = 'explore'; rep(true);
    const open = [], seenNode = new Set(); const seed0 = best ? best.seed : (cands[0] ? cands[0].seed : 601);
    const pushNode = (prefix, res) => { if (!res || res.stop !== 'pause' || !res.sig || seenNode.has(res.sig)) return; seenNode.add(res.sig);
      const m = res.pause.m; const h = res.sc.score + 0.12 * m.activates.length + 0.08 * m.special_summons.length + 0.05 * m.summons.length + 0.002 * res.trace.length;
      open.push({ prefix: strip(res.trace), h, o: res.pause.o, s: res.sc.score }); };
    const tryNode = (prefix, branches) => { const res = run(hand, seed0, prefixDriver(prefix, 'idle', branches)); tried++; return res; };
    const r0 = tryNode([]); pushNode([], r0);
    if (r0.stop === 'pause' && (!best || r0.sc.score > best.score)) { const f = run(hand, seed0, prefixDriver(strip(r0.trace), 'end')); tried++; consider(f, seed0, { kind: 'explore' }); }
    if (best && best.seed === seed0) { const idl = []; best.trace.forEach((e, k) => { if (e.t === M.SELECT_IDLECMD) idl.push(k); });
      for (const k of idl.slice(-3)) { if (now() > end) break; const res = tryNode(best.trace.slice(0, k)); pushNode(null, res); } }
    while (open.length && now() < end) {
      open.sort((x, y) => y.h - x.h); const nd = open.shift();
      for (const [lab, resp] of nd.o) { if (/^(Battle Phase|Pos |End Phase)/.test(lab) || now() > end) continue;
        const branches = []; const pre = nd.prefix.concat([{ resp, lab, t: M.SELECT_IDLECMD }]);
        const res = tryNode(pre, branches); rep();
        const evalRes = (r) => { if (r.stop === 'turn over') { consider(r, seed0, { kind: 'explore' }); return; } if (r.stop !== 'pause') return;
          if (!best || r.sc.score > best.score + 1e-9) { const f = run(hand, seed0, prefixDriver(strip(r.trace), 'end')); tried++; consider(f, seed0, { kind: 'explore' }); }
          pushNode(null, r); };
        evalRes(res);
        let nb = 0; for (const br of branches) for (const a of br.alts) { if (nb >= 4 || now() > end) break; nb++;
          const p2 = strip(res.trace).slice(0, br.k).concat([{ resp: a.resp, lab: a.label, t: 0 }]); const r2 = tryNode(p2); evalRes(r2); }
      } }
    rep(true);
    return { best, helper: helper ? { key: helper.key, title: helper.title, score: helper.score, sc: helper.sc } : null, helperFailed,
      baselines: baselines.map(b => ({ key: b.key, title: b.title, score: b.score })), tried, elapsed: now() - t0 };
  }
  // replay a finished line with the log on and turn it into readable steps
  function describe(hand, line) {
    const res = run(hand, line.seed, prefixDriver(line.trace, 'end'), { log: true });
    const steps = []; let cur = null, wantAct = false;
    const nm = c => name(c);
    const open = (t) => { cur = { t, d: [] }; steps.push(cur); };
    const sub = (x) => { if (!cur) open('Start of turn'); cur.d.push(x); };
    let pick = [];
    const flushPick = () => { if (pick.length) { sub('Choose: ' + pick.join(' + ')); pick = []; } };
    for (const e of res.log) {
      if (e.k === 'dec') {
        if (e.t === M.SELECT_UNSELECT_CARD) { if (e.lab !== 'finish') pick.push(e.lab); continue; }
        flushPick();
        if (e.t === M.SELECT_IDLECMD) { const l = e.lab;
          if (l === 'End Phase') { open('End Phase'); continue; }
          let m;
          if ((m = l.match(/^Activate (.+?) \(([^)]*)\): (.*)$/))) { open(`Activate ${m[1]}${m[2] === 'hand' ? ' from your hand' : m[2] === 'GY' ? ' in your GY' : m[2] === 'ED' ? ' in your Extra Deck' : m[2] === 'banished' ? ' (banished)' : ` (${m[2]})`}${m[3] && m[3] !== 'activate' ? ' — ' + m[3] : ''}`); wantAct = true; }
          else if ((m = l.match(/^Normal Summon (.+)$/))) open(`Normal Summon ${m[1]}`);
          else if ((m = l.match(/^SS proc (.+?) \(([^)]*)\)$/))) open(`Special Summon ${m[1]} by its procedure${m[2] === 'ED' ? ' from your Extra Deck' : ''}`);
          else if ((m = l.match(/^Set ST (.+)$/))) open(`Set ${m[1]}`);
          else if ((m = l.match(/^Set monster (.+)$/))) open(`Set ${m[1]} (face-down Defense)`);
          else open(l);
          continue; }
        if (e.t === M.SELECT_CHAIN) { if (e.lab !== 'pass') { const m = e.lab.match(/^Activate (.+?) \(([^)]*)\): (.*)$/); open(m ? `Activate ${m[1]} (${m[2]})${m[3] && m[3] !== 'activate' ? ' — ' + m[3] : ''}` : e.lab); wantAct = true; } continue; }
        if (e.t === M.SELECT_CARD || e.t === M.SELECT_TRIBUTE || e.t === M.SELECT_SUM) { sub('Choose: ' + e.lab); continue; }
        if (e.t === M.SELECT_OPTION) { sub('Option: ' + e.lab); continue; }
        if (e.t === M.SELECT_EFFECTYN || e.t === M.SELECT_YESNO) { if (e.lab === 'No') sub('Decline the optional effect'); continue; }
        continue; }
      flushPick();
      switch (e.k) {
        case 'act': if (wantAct) { wantAct = false; } else open(`${nm(e.c)} (${e.z}) — ${e.d === 'activate' ? 'its effect activates' : e.d}`); break;
        case 'ns': sub(`Normal Summon ${nm(e.c)} to ${e.z} — Summon ${e.n}`); break;
        case 'ss': if (cur && cur.t.startsWith(`Special Summon ${nm(e.c)} by its procedure`) && !cur.d.some(x => / — Summon /.test(x))) { const ty = (D.cdata(e.c) || {}).type || 0; if (ty & 0x4000000) cur.t = `Link Summon ${nm(e.c)}`; }
          sub(`Special Summon ${nm(e.c)} to ${e.z}${e.def ? ' in Defense Position' : ''} — Summon ${e.n}`); break;
        case 'hand': sub(`Add ${nm(e.c)} to your hand (from ${e.f})`); break;
        case 'gy': sub(`${nm(e.c)} goes to the GY (from ${e.f})`); break;
        case 'ban': sub(`${nm(e.c)} is banished${e.fd ? ' face-down' : ''} (from ${e.f})`); break;
        case 'ed': sub(`${nm(e.c)} goes to the Extra Deck${e.up ? ' face-up' : ''}`); break;
        case 'deck': sub(`${nm(e.c)} goes back to the Deck`); break;
        case 'place': sub(`${nm(e.c)} is placed in ${e.z}`); break;
        case 'set': sub(`Set ${nm(e.c)} in ${e.z}`); break;
        case 'neg': sub('It is negated'); break;
        case 'draw': sub(`Draw ${e.n}`); break; } }
    flushPick();
    return { steps: steps.filter(s => s.t !== 'End Phase' || s.d.length), board: boardText(res.board), sc: res.sc, summons: res.summons, ok: res.stop === 'turn over' };
  }
  const isIdle = t => t === M.SELECT_IDLECMD;
  return { setHandle: h => { H = h; }, solve, describe, run, options, alternatives, defaultResp, tokenPolicy, prefixDriver, tokenDriver, score, readBoard, boardText, desc, name, ZN, errs, isIdle, M, replays: () => replays, RACES };
}
if (typeof module !== 'undefined') module.exports = { makeSolver };

