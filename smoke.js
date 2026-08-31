// Load the page for real and fail loudly on any runtime error. A syntax check
// cannot catch a temporal-dead-zone ReferenceError; this can.
const {JSDOM}=require('jsdom'), fs=require('fs');
const mobile=process.argv[3]==='mobile';
const errs=[];
const dom=new JSDOM(fs.readFileSync(process.argv[2],'utf8'),{
  runScripts:'dangerously',pretendToBeVisual:true,url:'https://x.test/',
  beforeParse(w){
    w.matchMedia=q=>({matches: mobile && /coarse|760/.test(q),
                      addEventListener(){},addListener(){},removeEventListener(){}});
    const stub=new Proxy({},{get:(t,k)=>{
      if(k==='canvas') return {};
      if(k==='measureText') return ()=>({width:40});
      if(typeof k==='string'&&/Parameter$/.test(k)) return ()=>true;   // link/compile ok
      if(typeof k==='string'&&/^create|^getUniformLocation/.test(k)) return ()=>({});
      if(k==='getAttribLocation') return ()=>0;
      return ()=>undefined;
    }});
    w.HTMLCanvasElement.prototype.getContext=()=>stub;
    w.requestAnimationFrame=()=>0; w.cancelAnimationFrame=()=>{};
    w.fetch=()=>Promise.reject(new Error('offline'));
    w.onerror=(m,s,l,c,e)=>errs.push((e&&e.stack)||m);
    w.addEventListener('unhandledrejection',e=>errs.push('unhandled: '+e.reason));
  }});
setTimeout(()=>{
  const d=dom.window.document;
  const need=mobile?['fabs','nav','nowpill','fGyro','fMoon','fSet','fPrev','fNext','close']
                   :['list','sel','cal','gl','ov'];
  const missing=need.filter(i=>!d.getElementById(i));
  const cls=d.body.className||'(none)';
  const ok = !errs.length && !missing.length && (!mobile || cls.includes('mobile'));
  console.log(`${mobile?'MOBILE':'DESKTOP'}: ${ok?'PASS':'FAIL'}  body="${cls}"`);
  if(errs.length)    console.log('  errors:\n   '+errs.join('\n   '));
  if(missing.length) console.log('  missing elements: '+missing.join(', '));
  if(mobile && !cls.includes('mobile')) console.log('  body.mobile never applied');
  process.exit(ok?0:1);
},500);
