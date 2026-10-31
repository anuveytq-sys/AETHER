(()=>{'use strict';
function init(){
  const pointer=()=>document.querySelector('.cosmosim-tracking-pointer.is-active');
  const dwellEnabled=()=>{const c=document.querySelector('[data-a8="dwell"]');return !!c?.checked};
  let direction=0,startedAt=0,lastScrollAt=0;
  function reset(){direction=0;startedAt=0;lastScrollAt=0}
  function pageScroller(){
    const root=document.scrollingElement;
    if(root&&root.scrollHeight>root.clientHeight+2)return root;
    const candidates=[document.documentElement,document.body,...document.querySelectorAll('main,[role="main"],section,div')];
    let best=null,bestArea=0;
    for(const el of candidates){
      if(!(el instanceof HTMLElement)||el===document.body)continue;
      const r=el.getBoundingClientRect(),cs=getComputedStyle(el);
      if(r.width<innerWidth*.75||r.height<innerHeight*.75)continue;
      if(!/(auto|scroll|overlay)/.test(cs.overflowY)||el.scrollHeight<=el.clientHeight+2)continue;
      const area=Math.max(0,Math.min(r.right,innerWidth)-Math.max(r.left,0))*Math.max(0,Math.min(r.bottom,innerHeight)-Math.max(r.top,0));
      if(area>bestArea){best=el;bestArea=area}
    }
    return best;
  }
  function tick(now){
    const p=pointer();
    if(!p||!dwellEnabled()){reset();requestAnimationFrame(tick);return}
    const r=p.getBoundingClientRect(),edge=64;
    let next=0;
    if(r.top<=edge)next=-1;
    else if(r.bottom>=innerHeight-edge)next=1;
    if(!next){reset();requestAnimationFrame(tick);return}
    if(next!==direction){direction=next;startedAt=now;lastScrollAt=now;requestAnimationFrame(tick);return}
    if(now-startedAt>=300){
      const elapsed=Math.min(50,Math.max(0,now-lastScrollAt));
      if(elapsed>0){
        const target=pageScroller();
        if(target){target.scrollTop+=direction*Math.max(4,elapsed*.72)}
        else window.scrollBy({top:direction*Math.max(4,elapsed*.72),behavior:'auto'});
        lastScrollAt=now;
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();