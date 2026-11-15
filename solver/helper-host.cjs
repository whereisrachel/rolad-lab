// Runs the guide's own helper JS (hand analysis) in a vm with a DOM stub; exposes solverCands(handKeys)
const vm=require('vm'),fs=require('fs');
function stub(){const f=function(){return p};const p=new Proxy(f,{get:(t,k)=>k===Symbol.toPrimitive?()=>'':k==='length'?0:k==='then'?undefined:p,apply:()=>p,construct:()=>p,set:()=>true,has:()=>true});return p}
const S=stub();
const ctx={console,document:S,window:undefined,navigator:S,localStorage:S,setTimeout:()=>0,requestAnimationFrame:()=>0,Worker:function(){return S},URL:{createObjectURL:()=>''},Blob:function(){},matchMedia:()=>S,Intl,JSON,Math,Date,Set,Map,Array,Object,String,Number,RegExp,Symbol,BigInt};
ctx.window=ctx;vm.createContext(ctx);
let src=fs.readFileSync(__dirname+'/page-main.js','utf8');
try{vm.runInContext(src+'\n;globalThis.__h={solverCands,counts,analyze};',ctx,{filename:'page'})}catch(e){console.error('LOAD ERR',e.message.slice(0,300))}
module.exports=ctx.__h;
