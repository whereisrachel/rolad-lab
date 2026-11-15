import fs from 'fs';
import { parseYdk, findCard, name } from './src/cards.mjs';
import { searchT1 } from './src/searchplayer.mjs';
import { disruption } from './src/disrupt.mjs';
const A=parseYdk(fs.readFileSync('decks/ROLAD-L2.ydk','utf8')),opp=parseYdk(fs.readFileSync('decks/goldfish.ydk','utf8'));
const take=(pool,qs)=>qs.map(q=>{const c=findCard(q);const i=pool.findIndex(k=>name(k)===name(c));return pool.splice(i,1)[0]});
for (const gw of [0,0.3,0.6,1.0]) {
 const pool=A.main.slice(); const hand=take(pool,['Medius the Pure','Dark Magician','Small World','Mind Shuffle','Griffoh']);
 const g={id:'d',seed:'153',first:0,lab:true,seats:{0:{name:'A',deck:{...A,main:[...hand,...pool]},hand},1:{name:'o',deck:opp,hand:null}},responses:[],cursor:{0:0,1:0},goldfish:[1],bot:{},script:{1:[]},stopAfterTurn:null};
 const r=await searchT1(g,{ms:120000,maxMacros:300,guideW:gw,altCap:4,maxMacro:25,frontierCap:400,evalFn:(S,s)=>disruption(S,s)}); console.log('guide',gw,r.score.toFixed(2),r.nodes,r.ms+'ms');
}
