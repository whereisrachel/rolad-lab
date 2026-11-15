// Tools the brain can call. Each returns a string (capped). Everything runs locally; no network.
import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import { ROOT, findCard, name, parseYdk } from './cards.mjs';
import { searchCards, lineOf, fullText } from './search.mjs';

const CAP = 8000;
const cap = (s) => (s.length > CAP ? s.slice(0, CAP) + `\n...[cut, ${s.length - CAP} more chars; narrow the request]` : s);
const SAFE_DIRS = ['decks', 'results', 'notes'];
function safePath(p, write = false) {
  const abs = path.resolve(ROOT, String(p || '')); const rel = path.relative(ROOT, abs);
  const top = rel.split(path.sep)[0];
  if (rel.startsWith('..') || path.isAbsolute(rel) || !SAFE_DIRS.includes(top)) throw new Error(`path must be inside ${SAFE_DIRS.join(', ')} (got "${p}")`);
  if (write && !/\.(ydk|md|txt|json)$/i.test(abs)) throw new Error('only .ydk .md .txt .json files can be written');
  return abs;
}
function runNode(args, timeoutMs = 20 * 60 * 1000) {
  return new Promise((resolve) => {
    execFile(process.execPath, args, { cwd: ROOT, timeout: timeoutMs, maxBuffer: 64 * 1024 * 1024 }, (err, stdout, stderr) => {
      let s = (stdout || '').trim();
      if (!s && stderr) s = String(stderr).trim().split('\n').slice(-12).join('\n');
      if (err && err.killed) s += '\n[stopped: time limit]'; else if (err && !s) s = String(err.message).slice(0, 500);
      resolve(cap(s || '(no output)'));
    });
  });
}
const GAME_CMDS = ['new', 'view', 'act', 'autot1', 'status', 'log', 'card', 'undo', 'fork'];

export const TOOLS = [
  { name: 'search_cards', description: 'Search the full card database (TCG cards). text = words that must ALL appear in the name or card text; use "quoted phrases" for exact phrases. Filters: type (monster, spell, trap, ritual, fusion, synchro, xyz, link, pendulum, tuner, effect, quick-play, continuous, field, equip), attribute, race, level (e.g. 4 or 1-4), atk, def (ranges like 2000-), name (part of name), legal (true = not Forbidden on the 2026.10 TCG list). Returns passcode, name, type line. RULES: put attribute, race and level in THEIR OWN fields, never in text. Leave text empty unless you need words from the card text. Example: DARK Spellcaster level 4 or lower => {"attribute":"DARK","race":"Spellcaster","level":"1-4","type":"monster","legal":true}.',
    input_schema: { type: 'object', properties: { text: { type: 'string' }, type: { type: 'string' }, attribute: { type: 'string' }, race: { type: 'string' }, level: { type: 'string' }, atk: { type: 'string' }, def: { type: 'string' }, name: { type: 'string' }, legal: { type: 'boolean' }, limit: { type: 'integer' } } },
    run: async (a) => { const r = searchCards(a); if (r.error) return 'ERROR: ' + r.error; return cap(`${r.total} match(es)${r.total > r.shown ? `, showing ${r.shown}` : ''}\n` + r.cards.map(lineOf).join('\n')); } },
  { name: 'card_text', description: 'Exact card text from the database for one card (name or passcode). ALWAYS use this instead of memory before relying on what a card does.',
    input_schema: { type: 'object', properties: { card: { type: 'string' } }, required: ['card'] },
    run: async (a) => { const c = findCard(a.card); if (!c) return 'not found'; if (Array.isArray(c)) return 'Several matches:\n' + c.map(x => `${x}  ${name(x)}`).join('\n');
      const r = searchCards({ name: name(c), limit: 100 }); const hit = r.cards && r.cards.find(x => x.id === c); if (hit) return cap(fullText(hit));
      return cap(name(c) + ' (not a TCG card in the pool; see passcode ' + c + ')'); } },
  { name: 'check_deck', description: 'Legality of a .ydk deck on the 2026.10 TCG list, copy limits, missing scripts, and a card-count summary. Path like decks/ROLAD-L2.ydk.',
    input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] },
    run: async (a) => runNode(['check.mjs', path.relative(ROOT, safePath(a.path))]) },
  { name: 'hand_odds', description: 'Opening-turn screen (goldfish): solves N random 5-card hands going first and reports the mean solver score and how many hands score >=5, >=3, <2. A PROXY ONLY (suggests candidates, never justifies a list change). ROLAD lists only. Slow: about hands x secs seconds.',
    input_schema: { type: 'object', properties: { deck: { type: 'string' }, hands: { type: 'integer' }, secs: { type: 'integer' }, seed: { type: 'integer' } }, required: ['deck'] },
    run: async (a) => { const n = Math.min(+a.hands || 30, 120), s = Math.min(+a.secs || 4, 15); return runNode(['evaldeck.mjs', path.relative(ROOT, safePath(a.deck)), String(n), String(s), String(+a.seed || 11)]); } },
  { name: 'stress_test', description: 'Same hands solved against scripted opponent hand traps (none, Ash, Droll, Imperm, Nibiru, combos). PESSIMISTIC lower bound: the solver often finds nothing under a trap. Use only to find hands that collapse. Slow: 7 x hands x secs seconds.',
    input_schema: { type: 'object', properties: { deck: { type: 'string' }, hands: { type: 'integer' }, secs: { type: 'integer' }, seed: { type: 'integer' } }, required: ['deck'] },
    run: async (a) => { const n = Math.min(+a.hands || 12, 40), s = Math.min(+a.secs || 3, 10); return runNode(['oppstress.mjs', path.relative(ROOT, safePath(a.deck)), String(n), String(s), String(+a.seed || 11)]); } },
  { name: 'game', description: `Run one ygo.mjs command on the real EDOPro engine. args = the command line after "node ygo.mjs", as an array. Commands: ${GAME_CMDS.join(', ')}. Examples: ["new","g1","--p0","decks/o_despia.ydk","--p1","decks/ROLAD-L2.ydk","--first","0","--seed","6","--lab","--bot0","despia"], ["view","g1","1"], ["act","g1","1","~Normal Summon Medius; ~Pass","-q"], ["autot1","g2","0","8"]. Option labels (~text) match any part of the label. Read GAMES.txt for details.`,
    input_schema: { type: 'object', properties: { args: { type: 'array', items: { type: 'string' } } }, required: ['args'] },
    run: async (a) => { const v = a.args || []; if (!GAME_CMDS.includes(v[0])) return 'ERROR: first arg must be one of ' + GAME_CMDS.join(', ');
      return runNode(['ygo.mjs', ...v.map(String)], 10 * 60 * 1000); } },
  { name: 'list_files', description: 'List files in decks, results or notes.', input_schema: { type: 'object', properties: { dir: { type: 'string' } }, required: ['dir'] },
    run: async (a) => { const p = safePath(a.dir); return fs.readdirSync(p).join('\n') || '(empty)'; } },
  { name: 'read_file', description: 'Read a text file from decks, results or notes.', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] },
    run: async (a) => cap(fs.readFileSync(safePath(a.path), 'utf8')) },
  { name: 'write_file', description: 'Write a .ydk/.md/.txt/.json file in decks, results or notes (e.g. a candidate deck, a findings report). Refuses to overwrite an existing file unless you pass overwrite: true, so changes go into NEW candidate files.',
    input_schema: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' }, overwrite: { type: 'boolean' } }, required: ['path', 'content'] },
    run: async (a) => { const p = safePath(a.path, true); if (fs.existsSync(p) && !a.overwrite) return 'ERROR: file exists; choose a new name (changes go into NEW candidate files) or pass overwrite: true.';
      fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, a.content); if (/\.ydk$/i.test(p)) { const d = parseYdk(a.content); return `written (main ${d.main.length}, extra ${d.extra.length}, side ${d.side.length})`; } return 'written'; } },
];
export const toolDefs = () => TOOLS.map(({ name, description, input_schema }) => ({ name, description, input_schema }));
export async function callTool(n, input) {
  const t = TOOLS.find(x => x.name === n); if (!t) return { text: `unknown tool ${n}`, error: true };
  try { return { text: await t.run(input || {}) }; } catch (e) { return { text: 'ERROR: ' + (e.message || e), error: true }; }
}
