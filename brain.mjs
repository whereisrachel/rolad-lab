#!/usr/bin/env node
// The brain: a Claude model that runs the lab by itself through the Anthropic API.
//   set ANTHROPIC_API_KEY=sk-ant-...        (Windows cmd: set ANTHROPIC_API_KEY=...   PowerShell: $env:ANTHROPIC_API_KEY="...")
//   node brain.mjs "find a bridge for dead Dark Magician hands in decks\ROLAD-L2.ydk"
//   node brain.mjs                 (asks for the task)
//   node brain.mjs --selftest      (checks the tools, no API call, no cost)
//   FREE local mode (no key, no cost):  set YGO_BACKEND=ollama   (needs Ollama running; model via YGO_MODEL, e.g. qwen2.5:14b)
// Limits (change with env vars):  YGO_MAX_USD=3   YGO_MAX_TURNS=60   YGO_MODEL=claude-sonnet-5-5
//   Prices used for the spend estimate: YGO_PRICE_IN=3 YGO_PRICE_OUT=15  (USD per million tokens) — set to your model's real prices.
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { ROOT } from './src/cards.mjs';
import { TOOLS, toolDefs, callTool } from './src/tools.mjs';

for (const ev of ['uncaughtException', 'unhandledRejection']) process.on(ev, e => { console.error('ERROR: ' + (e && e.message || e)); process.exit(1); });
const LOCAL = (process.env.YGO_BACKEND || '').toLowerCase() === 'ollama';
const MODEL = process.env.YGO_MODEL || (LOCAL ? 'qwen2.5:14b' : 'claude-sonnet-5-5');
const OLLAMA = process.env.OLLAMA_URL || 'http://localhost:11434';
const CTX = +(process.env.YGO_CTX || 16384);
const MAX_USD = +(process.env.YGO_MAX_USD || 3), MAX_TURNS = +(process.env.YGO_MAX_TURNS || 60);
const P_IN = +(process.env.YGO_PRICE_IN || 3), P_OUT = +(process.env.YGO_PRICE_OUT || 15);
const notesPath = path.join(ROOT, 'notes', 'NOTES.md');

if (process.argv.includes('--selftest')) {
  const t = async (n, i) => { const r = await callTool(n, i); console.log(`[${n}] ${r.error ? 'FAIL' : 'ok'}: ${r.text.split('\n')[0].slice(0, 110)}`); };
  await t('search_cards', { text: 'Light and Darkness Ritual', type: 'monster', level: '1-4', legal: true, limit: 3 });
  await t('card_text', { card: 'Griffoh' }); await t('check_deck', { path: 'decks/ROLAD-L2.ydk' }); await t('list_files', { dir: 'decks' });
  await t('read_file', { path: 'notes/NOTES.md' }); await t('game', { args: ['card', 'Mind Shuffle'] }); await t('read_file', { path: '../package.json' });
  process.exit(0);
}
const key = process.env.ANTHROPIC_API_KEY;
if (!LOCAL && !key) { console.error('No ANTHROPIC_API_KEY set. Get a key at console.anthropic.com, then set it (see top of brain.mjs).\nOr run free with a local model: set YGO_BACKEND=ollama'); process.exit(1); }

const SYSTEM = `You are the testing brain for Belal's Yu-Gi-Oh! ROLAD (Ritual of Light and Darkness) deck work. You run a local lab on the real EDOPro rules engine through tools. Be direct and concise; report in short point form, numbers first.

HARD RULES
- Never state what a card does from memory. Call card_text (or search_cards) first, every time. Card names in the engine can be OCG/Master Duel names.
- Follow the standing rules in the notes below. In particular: no list change from a proxy score (hand_odds, stress_test); only paired real piloted games on the same seeds can justify a change; locked cards stay; one change at a time; before using any test say what it cannot see; write predictions before testing.
- Never overwrite an existing deck. Put new candidates in new files (decks/<name>.ydk) and run check_deck on them.
- Real game piloting is expensive. Use autot1 for a first turn, bots for opponent turns, and decide only where it matters. Stop and report instead of looping if results are unclear.
- Keep a short running tally of what you ran (tool, args, result). End with: what you did, what the numbers say, what the test cannot see, and one recommended next step. If you learn something durable, call save_note.

You have a spend cap. Prefer cheap tools first (search_cards, card_text, check_deck) before slow ones.`;

const noteTool = { name: 'save_note', description: 'Append one durable finding or decision to notes/NOTES.md (read at the start of every future run).', input_schema: { type: 'object', properties: { note: { type: 'string' } }, required: ['note'] } };
const tools = [...toolDefs(), noteTool]; tools[tools.length - 1].cache_control = { type: 'ephemeral' };

let task = process.argv.slice(2).filter(a => !a.startsWith('--')).join(' ').trim();
if (!task) { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); task = await new Promise(r => rl.question('Task: ', a => { rl.close(); r(a); })); }
if (!task) process.exit(0);

fs.mkdirSync(path.join(ROOT, 'logs'), { recursive: true });
const logFile = path.join(ROOT, 'logs', new Date().toISOString().replace(/[:.]/g, '-') + '.jsonl');
const log = (o) => fs.appendFileSync(logFile, JSON.stringify(o) + '\n');
const notes = fs.existsSync(notesPath) ? fs.readFileSync(notesPath, 'utf8') : '';
const system = [{ type: 'text', text: SYSTEM + '\n\nNOTES\n' + notes, cache_control: { type: 'ephemeral' } }];
const messages = [{ role: 'user', content: task }];
let inTok = 0, outTok = 0, cacheRead = 0, cacheWrite = 0;
const usd = () => (inTok * P_IN + cacheWrite * P_IN * 1.25 + cacheRead * P_IN * 0.1 + outTok * P_OUT) / 1e6;
console.log(`Task: ${task}\nModel ${MODEL} ${LOCAL ? '(local Ollama, free)' : `cap $${MAX_USD}`}, ${MAX_TURNS} turns. Log: ${path.relative(ROOT, logFile)}\n`);

async function post(url, headers, body, label) {
  for (let attempt = 0; attempt < 4; attempt++) {
    let r; try { r = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) }); } catch (e) { throw new Error(`${label}: cannot connect (${e.cause?.code || e.message}). ${LOCAL ? 'Is Ollama running? Start it, then try again.' : ''}`); }
    if (r.ok) return r.json();
    const txt = await r.text();
    if ((r.status === 429 || r.status >= 500) && attempt < 3) { await new Promise(s => setTimeout(s, 4000 * (attempt + 1))); continue; }
    throw new Error(`${label} ${r.status}: ${txt.slice(0, 400)}`);
  }
}
// Streaming call to Ollama: headers come back at once, so a slow model load or long generation never hits the 5-minute fetch timeout.
async function ollamaChat(body) {
  let r; try { r = await fetch(OLLAMA + '/api/chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }); } catch (e) { throw new Error(`Ollama: cannot connect (${e.cause?.code || e.message}). Is Ollama running? Start it, then try again.`); }
  if (!r.ok) throw new Error(`Ollama ${r.status}: ${(await r.text()).slice(0, 400)}`);
  const dec = new TextDecoder(); let buf = '', content = '', tool_calls = [], last = {};
  const eat = (line) => { if (!line.trim()) return; const j = JSON.parse(line); if (j.error) throw new Error('Ollama: ' + j.error); const m = j.message || {}; if (m.content) content += m.content; if (m.tool_calls) tool_calls.push(...m.tool_calls); if (j.done) last = j; };
  try { for await (const chunk of r.body) { buf += dec.decode(chunk, { stream: true }); let i; while ((i = buf.indexOf('\n')) >= 0) { eat(buf.slice(0, i)); buf = buf.slice(i + 1); } } eat(buf); }
  catch (e) { throw new Error('Ollama stream failed: ' + (e.cause?.code || e.message)); }
  return { message: { content, ...(tool_calls.length ? { tool_calls } : {}) }, prompt_eval_count: last.prompt_eval_count, eval_count: last.eval_count };
}
const runTool = async (name, input) => {
  if (name === 'save_note') { fs.appendFileSync(notesPath, '\n- ' + String(input.note || '').replace(/\n/g, ' ') + '\n'); return { text: 'saved' }; }
  const out = await callTool(name, input); if (LOCAL && out.text.length > 4000) out.text = out.text.slice(0, 4000) + '\n...[cut for the local model; narrow the request]'; return out;
};
let stopReason = 'done';
if (!LOCAL) {
  for (let turn = 1; turn <= MAX_TURNS; turn++) {
    if (usd() >= MAX_USD) { stopReason = `spend cap reached ($${usd().toFixed(2)})`; break; }
    const res = await post(process.env.YGO_API_URL || 'https://api.anthropic.com/v1/messages', { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' }, { model: MODEL, max_tokens: 4096, system, tools, messages }, 'API');
    const u = res.usage || {}; inTok += u.input_tokens || 0; outTok += u.output_tokens || 0; cacheRead += u.cache_read_input_tokens || 0; cacheWrite += u.cache_creation_input_tokens || 0;
    messages.push({ role: 'assistant', content: res.content });
    for (const b of res.content) if (b.type === 'text' && b.text.trim()) { console.log(b.text.trim() + '\n'); log({ turn, text: b.text }); }
    const uses = res.content.filter(b => b.type === 'tool_use');
    if (!uses.length) { stopReason = res.stop_reason === 'max_tokens' ? 'reply cut off (max_tokens)' : 'finished'; break; }
    const results = [];
    for (const b of uses) {
      const out = await runTool(b.name, b.input);
      console.log(`> ${b.name} ${JSON.stringify(b.input).slice(0, 140)}  [${out.error ? 'error' : 'ok'}]  ~$${usd().toFixed(3)}`);
      log({ turn, tool: b.name, input: b.input, error: !!out.error, output: out.text.slice(0, 2000) });
      results.push({ type: 'tool_result', tool_use_id: b.id, content: out.text, is_error: !!out.error });
    }
    messages.push({ role: 'user', content: results });
    if (turn === MAX_TURNS) stopReason = 'turn limit reached';
  }
  console.log(`\n--- ${stopReason}. Tokens: ${inTok} in, ${cacheRead} cached, ${outTok} out. Estimated cost $${usd().toFixed(3)} (check your real prices). ---`);
} else {
  // Local model through Ollama's chat API (free). Smaller models need shorter instructions and shorter tool output.
  const lsys = SYSTEM + '\n\nNOTES\n' + notes.slice(0, 3000) + '\n\nUse tools one at a time. After a tool result, either call the next tool or give your final answer. For search_cards use the attribute/race/level/type fields for those properties and keep text empty unless you need card-text words. Never name a card you did not see in a tool result; use card_text before saying what a card does.';
  const ltools = toolDefs().concat([{ name: noteTool.name, description: noteTool.description, input_schema: noteTool.input_schema }]).map(t => ({ type: 'function', function: { name: t.name, description: t.description, parameters: t.input_schema } }));
  const lm = [{ role: 'system', content: lsys }, { role: 'user', content: task }];
  const t0 = Date.now(); const MAX_MIN = +(process.env.YGO_MAX_MIN || 120);
  for (let turn = 1; turn <= MAX_TURNS; turn++) {
    if ((Date.now() - t0) / 60000 > MAX_MIN) { stopReason = `time limit reached (${MAX_MIN} min)`; break; }
    const res = await ollamaChat({ model: MODEL, messages: lm, tools: ltools, stream: true, options: { num_ctx: CTX, temperature: 0.2, num_predict: +(process.env.YGO_MAX_OUT || 1500) } });
    const m = res.message || {}; inTok += res.prompt_eval_count || 0; outTok += res.eval_count || 0;
    lm.push({ role: 'assistant', content: m.content || '', ...(m.tool_calls ? { tool_calls: m.tool_calls } : {}) });
    if (m.content && m.content.trim()) { console.log(m.content.trim() + '\n'); log({ turn, text: m.content }); }
    const calls = m.tool_calls || [];
    if (!calls.length) { stopReason = 'finished'; break; }
    for (const c of calls) {
      const fn = c.function || {}; let input = fn.arguments || {}; if (typeof input === 'string') { try { input = JSON.parse(input); } catch (e) { input = {}; } }
      const out = await runTool(fn.name, input);
      console.log(`> ${fn.name} ${JSON.stringify(input).slice(0, 140)}  [${out.error ? 'error' : 'ok'}]`);
      log({ turn, tool: fn.name, input, error: !!out.error, output: out.text.slice(0, 2000) });
      lm.push({ role: 'tool', tool_name: fn.name, content: out.text });
    }
    if (turn === MAX_TURNS) stopReason = 'turn limit reached';
  }
  console.log(`\n--- ${stopReason}. Local model, no cost. Tokens: ${inTok} in, ${outTok} out. ---`);
}
