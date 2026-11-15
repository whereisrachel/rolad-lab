import fs from 'fs';
import { parseYdk, banlist, name } from './src/cards.mjs';
const lim = banlist();
for (const f of process.argv.slice(2)) { const d = parseYdk(fs.readFileSync(f,'utf8')); const cnt={}; for (const c of [...d.main,...d.extra,...(d.side||[])]) cnt[c]=(cnt[c]||0)+1;
 const bad=Object.entries(cnt).filter(([c,n])=>n>(lim.has(+c)?lim.get(+c):3)).map(([c,n])=>name(+c)+' x'+n+' (max '+(lim.has(+c)?lim.get(+c):3)+')'); console.log(f, bad.length?'ILLEGAL: '+bad.join('; '):'legal'); if(bad.length) process.exitCode=1; }
