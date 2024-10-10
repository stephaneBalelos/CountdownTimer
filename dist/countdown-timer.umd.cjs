(function(r,u){typeof exports=="object"&&typeof module<"u"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(r=typeof globalThis<"u"?globalThis:r||self,u(r.CountdownTimer={}))})(this,function(r){"use strict";function u(){var o,t,s,i,T,M,L,q;const a=Array.from(document.querySelectorAll("[countdown-timer]"));for(const e of a){const S=new Date(e.getAttribute("data-date"));if(isNaN(S.getTime())){console.error("Invalid date:",e.getAttribute("data-date")),e.innerHTML="** Countdown Timer Invalid Date, check console for more info **";continue}const d=e.querySelector("[days]"),l=e.querySelector("[hours]"),m=e.querySelector("[minutes]"),f=e.querySelector("[seconds]");if(!d||!l||!m||!f){console.error("Missing elements:",e),e.innerHTML="** Countdown Timer Error, check console for more info **";continue}const c=e.querySelector("[data-expired-message]"),H=(c==null?void 0:c.innerHTML)??"Expired";c==null||c.remove();const p=[((o=d.querySelector("[data-unit]"))==null?void 0:o.innerHTML)??"day",((t=d.querySelector("[data-days]"))==null?void 0:t.innerHTML)??"days"],g=[((s=l.querySelector("[data-init]"))==null?void 0:s.innerHTML)??"hour",((i=l.querySelector("[data-inits]"))==null?void 0:i.innerHTML)??"hours"],v=[((T=m.querySelector("[data-unit]"))==null?void 0:T.innerHTML)??"minute",((M=m.querySelector("[data-units]"))==null?void 0:M.innerHTML)??"minutes"],w=[((L=f.querySelector("[data-unit]"))==null?void 0:L.innerHTML)??"seconds",((q=f.querySelector("[data-units]"))==null?void 0:q.innerHTML)??"seconds"],b=h(S);if(!b){e.innerHTML=H;continue}const{days:A,hours:I,minutes:U,seconds:x}=b;n(d,A,p),n(l,I,g),n(m,U,v),n(f,x,w);const C=setInterval(()=>{const y=h(S);if(!y){clearInterval(C),e.innerHTML=H;return}n(d,y.days,p),n(l,y.hours,g),n(m,y.minutes,v),n(f,y.seconds,w)},1e3)}}const n=(a,o,t)=>{const s=o.toString().padStart(2,"0"),i=o===1?t[0]:t[1];a.innerHTML=`${s} ${i}`},h=a=>{const o=new Date,t=a.getTime()-o.getTime();if(t<0)return null;const s=Math.floor(t/(1e3*60*60*24)),i=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),T=Math.floor(t%(1e3*60*60)/(1e3*60)),M=Math.floor(t%(1e3*60)/1e3);return{days:s,hours:i,minutes:T,seconds:M}};r.setupTimers=u,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
