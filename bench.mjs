// node bench.mjs [nhands] [macros]  -> deterministic scores + timing + profile
import fs from 'fs'; import path from 'path';
import { parseYdk, ROOT } from './src/cards.mjs';
import { searchT1 } from './src/searchplayer.mjs';
import { disruption } from './src/disrupt.mjs';
let MAXO=0; const N=+process.argv[2]||6, MAC=+process.argv[3]||200;
const OPP=parseYdk(fs.readFileSync(path.join(ROOT,'decks','oppHT.ydk'),'utf8')); const deck=parseYdk(fs.readFileSync(path.join(ROOT,'decks','ROLAD-L2.ydk'),'utf8'));
const GS=13039848; let sc=[],tt=0; const P={snap:0,rest:0,ns:0,nr:0,pages:0};
for(let h=0;h<N;h++){
 const hidx=[...Array(deck.main.length).keys()].sort((a,b)=>((a*7919+h*104729)%1009)-((b*7919+h*104729)%1009)).slice(0,5);
 const hand=hidx.map(i=>deck.main[i]), rest=deck.main.filter((_,i)=>!hidx.includes(i)); const op=OPP.main.slice(),oh=[]; while(oh.length<5){const i=op.indexOf(GS);oh.push(op.splice(i,1)[0]);}
 const g={id:'b',seed:String(h+1),first:0,lab:true,seats:{0:{name:'A',deck:{...deck,main:[...hand,...rest]},hand},1:{name:'o',deck:{...OPP,main:[...oh,...op]},hand:oh}},responses:[],cursor:{0:0,1:0},goldfish:[1],bot:{},script:{1:[]},stopAfterTurn:null};
 const t=Date.now(); const r=await searchT1(g,{ms:90000,maxMacros:MAC,guideW:0.3,patience:+process.argv[4]||Infinity,altCap:+(process.env.ALT||4),maxMacro:+(process.env.MM||25),frontierCap:400,evalFn:(S,s)=>disruption(S,s)}); const d=Date.now()-t; tt+=d; sc.push(+(r.score||0).toFixed(3));
 for(const k in P) P[k]+=r.prof[k]||0; MAXO=Math.max(MAXO,r.prof.maxo); console.log(h,r.score?.toFixed(3),r.nodes,r.macros,d+'ms');
}
console.log('maxo',MAXO);console.log('SCORES',sc.join(','),'TOTAL',tt+'ms','snap',P.snap|0,'rest',P.rest|0,'ns',P.ns,'nr',P.nr,'pages/snap',(P.pages/P.ns).toFixed(1));
