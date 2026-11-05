/* AETHER SCI-FI ASSEMBLY — decorative UI only; no app data or feature logic */
(()=>{'use strict';
if(window.__AETHER_ASSEMBLY_UI__)return;window.__AETHER_ASSEMBLY_UI__=true;
const SELECTOR='.hero,.page-head,.section-title,.stats article,.panel,.memory,.event,.vision-notice,.vision-card,.vision-side .panel,.support-banner,.settings-grid>article,.p5-card,.p5-item,.p5-ai-planner,.p9-card,.p9-feature,footer';
const reduced=()=>document.body.classList.contains('reduced-motion')||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let observer=null,frame=0;
function prepare(root=document){
 if(reduced()){root.querySelectorAll?.(SELECTOR).forEach(el=>el.classList.add('is-assembled'));return}
 const nodes=root.matches?.(SELECTOR)?[root]:[];
 nodes.push(...(root.querySelectorAll?.(SELECTOR)||[]));
 nodes.forEach((el,i)=>{
  if(el.classList.contains('aether-assembly-target'))return;
  el.classList.add('aether-assembly-target');
  const n=(i%7),x=[-18,15,-11,20,-7,12,0][n],y=[26,18,34,22,30,16,25][n],r=[2,-2,1.5,-1.5,1,-1,0][n];
  el.style.setProperty('--assembly-x',x+'px');el.style.setProperty('--assembly-y',y+'px');el.style.setProperty('--assembly-r',r+'deg');
  el.style.setProperty('--assembly-delay',Math.min((i%4)*75,225)+'ms');
  if(observer)observer.observe(el);else el.classList.add('is-assembled');
 });
}
function init(){
 if('IntersectionObserver'in window&&!reduced()){
  observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){const el=entry.target;el.classList.add('is-assembled');if(el.matches('.panel,.memory,.event,.vision-card,.p5-card,.p9-card,.p9-feature'))el.classList.add('aether-assembly-glow');observer.unobserve(el)}
  }),{root:null,rootMargin:'0px 0px -9% 0px',threshold:.08});
 }
 prepare(document);
 const main=document.querySelector('main');
 if(main&&'MutationObserver'in window){
  const mo=new MutationObserver(records=>{
   let refresh=false;
   records.forEach(r=>{if(r.type==='childList')r.addedNodes.forEach(n=>{if(n.nodeType===1){prepare(n);refresh=true}});if(r.type==='attributes'&&r.attributeName==='class'&&r.target.classList?.contains('active'))refresh=true});
   if(refresh){cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>prepare(main))}
  });
  mo.observe(main,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
 }
 const fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
 if(fine){
  let raf=0;
  window.addEventListener('pointermove',e=>{
   if(raf)return;const x=e.clientX,y=e.clientY;raf=requestAnimationFrame(()=>{document.body.style.setProperty('--aether-pointer-x',x+'px');document.body.style.setProperty('--aether-pointer-y',y+'px');document.body.style.setProperty('--aether-pointer-opacity','1');raf=0});
  },{passive:true});
  window.addEventListener('pointerleave',()=>document.body.style.setProperty('--aether-pointer-opacity','0'),{passive:true});
 }
 const motion=document.getElementById('reducedMotion');
 if(motion){const sync=()=>{if(motion.checked){document.body.classList.add('reduced-motion');document.querySelectorAll('.aether-assembly-target').forEach(el=>el.classList.add('is-assembled'))}else{document.body.classList.remove('reduced-motion');prepare(document)}};motion.addEventListener('change',sync);if(motion.checked)sync()}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();