import fs from 'fs';
import { parseYdk, findCard, name } from './src/cards.mjs';
import { searchT1 } from './src/searchplayer.mjs';
import { disruption } from './src/disrupt.mjs';
const B=parseYdk(fs.readFileSync('decks/L2-sabotaged.ydk','utf8')),opp=parseYdk(fs.readFileSync('decks/goldfish.ydk','utf8'));
const take=(pool,qs)=>qs.map(q=>{const c=findCard(q);const i=pool.findIndex(k=>name(k)===name(c));return pool.splice(i,1)[0]});
for (const st of ['Theorealize Past Lull','Fiendsmith Engraver']) {
 const pool=B.main.slice(); const hand=take(pool,[st,'Dark Magician','Small World','Mind Shuffle','Griffoh']);
 const g={id:'d',seed:'1000',first:0,lab:true,seats:{0:{name:'A',deck:{...B,main:[...hand,...pool]},hand},1:{name:'o',deck:opp,hand:null}},responses:[],cursor:{0:0,1:0},goldfish:[1],bot:{},script:{1:[]},stopAfterTurn:null};
 const r=await searchT1(g,{maxMacros:60,guideW:0.3,evalFn:(S,s)=>disruption(S,s)}); console.log(st,r.score,r.error||'ok',r.nodes);
}
