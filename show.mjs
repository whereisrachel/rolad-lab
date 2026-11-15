// node show.mjs "Griffoh;Small World;..." -> best end board + line found by the search, scored
import fs from 'fs'; import path from 'path';
import { parseYdk, findCard, name, ROOT } from './src/cards.mjs'; import { searchT1 } from './src/searchplayer.mjs'; import { disruption, setProgress } from './src/disrupt.mjs'; setProgress(+(process.env.PROG||0));
const hand=process.argv[2].split(';').map(s=>s.trim()); const deck=parseYdk(fs.readFileSync(path.join(ROOT,'decks','ROLAD-L2.ydk'),'utf8')); const OPP=parseYdk(fs.readFileSync(path.join(ROOT,'decks','oppHT.ydk'),'utf8'));
const pool=deck.main.slice(); const h=hand.map(n=>{const c=findCard(n);const i=pool.findIndex(k=>name(k)===name(c));return pool.splice(i,1)[0]});
const GS=13039848,op=OPP.main.slice(),oh=[];while(oh.length<5)oh.push(op.splice(op.indexOf(GS),1)[0]);
const g={id:'s',seed:'7',first:0,lab:true,seats:{0:{name:'A',deck:{...deck,main:[...h,...pool]},hand:h},1:{name:'o',deck:{...OPP,main:[...oh,...op]},hand:oh}},responses:[],cursor:{0:0,1:0},goldfish:[1],bot:{},script:{1:[]},stopAfterTurn:null};
const r=await searchT1(g,{ms:90000,maxMacros:+(process.argv[3]||400),guideW:0.3,altCap:+(process.env.ALT||4),maxMacro:+(process.env.MM||25),frontierCap:400,patience:Infinity,script:process.env.SCRIPT?JSON.parse(fs.readFileSync(process.env.SCRIPT,"utf8")):null,evalFn:(S,s)=>disruption(S,s)});
console.log('SCORE',r.score.toFixed(2),'macros',r.macros);console.log('LINE:\n'+(r.line||[]).map((x,i)=>(i+1)+'. '+x).join('\n'));console.log('BOARD:',JSON.stringify(r.board,null,1));
