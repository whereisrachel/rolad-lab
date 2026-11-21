// Shared helpers for unattended play: the scripted-seat advance loop (copied from ygo.mjs, without human auto-pass).
import { push, decision, answer, autoResponse, teamOf, seatOf, M, R } from './engine.mjs';
import { policyAnswer, trapRegexes } from './bots.mjs';
export function polOf(g, seat) {
  if (g.bot && g.bot[seat]) return { bot: g.bot[seat], script: trapRegexes((g.script || {})[seat]) };
  if ((g.goldfish || []).includes(seat)) return { script: trapRegexes((g.script || {})[seat]), after: (g.after || {})[seat] || 0 };
  return null;
}
function applyText(S, seat, t) {
  const res = answer(S, seat, t); if (!res || res.error) return false;
  if (res.resps) { for (const r of res.resps) if (!push(S, { seat, resp: r.resp, label: r.label, auto: true })) return false; return true; }
  if (res.multiStep) { const d = decision(S, seat); const op = d.options.find(o => o.finish) || d.options[0]; return push(S, { seat, resp: op.resp, label: op.label, auto: true }); }
  return false;
}
export function autoAdvance(S) {
  for (let i = 0; i < 20000 && S.pending && !S.ended; i++) {
    const seat = seatOf(S.game, S.pending.player);
    const a = autoResponse(S);
    if (a) { if (!push(S, { seat, resp: a, auto: true })) break; continue; }
    const pol = polOf(S.game, seat);
    if (pol) { const t = policyAnswer(S, seat, pol); if (!t || !applyText(S, seat, t)) break; continue; }
    break;
  }
  return S;
}
