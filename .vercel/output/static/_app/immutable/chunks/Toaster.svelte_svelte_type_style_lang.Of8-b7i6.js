import{d as _,w as S}from"./index.Kz5XLsdZ.js";import{i as y}from"./scheduler.i0SJtRCT.js";function x(e,r,i,u){var a,g,f=!1,M=i.length>=2,R=(s,t,c)=>{if(a=t,M&&(g=s),!f){let d=r(s,t,c);if(r.length<2)t(d);else return d}f=!1},p=_(e,R,u),V=!Array.isArray(e);function k(s){var t=i(s,g);V?(f=!0,e.set(t)):t.forEach((c,d)=>{f=!0,e[d].set(c)}),f=!1}var v=!1;function T(s){var t,c,d,l;if(v){l=s(y(p)),a(l);return}var P=p.subscribe(Q=>{v?t?c=!0:t=!0:d=Q});l=s(d),v=!0,a(l),P(),v=!1,c&&(l=y(p)),t&&k(l)}return{subscribe:p.subscribe,set(s){T(()=>s)},update:T}}const E=20,o=S([]),h=S(null),b=new Map,w=e=>{if(b.has(e))return;const r=setTimeout(()=>{b.delete(e),A(e)},1e3);b.set(e,r)},j=e=>{const r=b.get(e);r&&clearTimeout(r)};function B(e){e.id&&j(e.id),o.update(r=>r.map(i=>i.id===e.id?{...i,...e}:i))}function H(e){o.update(r=>[e,...r].slice(0,E))}function L(e){y(o).find(r=>r.id===e.id)?B(e):H(e)}function N(e){o.update(r=>(e?w(e):r.forEach(i=>{w(i.id)}),r.map(i=>i.id===e||e===void 0?{...i,visible:!1}:i)))}function A(e){o.update(r=>e===void 0?[]:r.filter(i=>i.id!==e))}function G(e){h.set(e)}function J(e){let r;h.update(i=>(r=e-(i||0),null)),o.update(i=>i.map(u=>({...u,pauseDuration:u.pauseDuration+r})))}const U={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3};function K(e={}){return{toasts:x(o,i=>i.map(u=>({...e,...e[u.type],...u,duration:u.duration||e[u.type]?.duration||e?.duration||U[u.type],style:[e.style,e[u.type]?.style,u.style].join(";")})),i=>i),pausedAt:h}}const W=e=>typeof e=="function",D=(e,r)=>W(e)?e(r):e,q=(()=>{let e=0;return()=>(e+=1,e.toString())})(),X=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){const r=matchMedia("(prefers-reduced-motion: reduce)");e=!r||r.matches}return e}})(),z=(e,r="blank",i)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...i,id:i?.id||q()}),m=e=>(r,i)=>{const u=z(r,e,i);return L(u),u.id},n=(e,r)=>m("blank")(e,r);n.error=m("error");n.success=m("success");n.loading=m("loading");n.custom=m("custom");n.dismiss=e=>{N(e)};n.remove=e=>A(e);n.promise=(e,r,i)=>{const u=n.loading(r.loading,{...i,...i?.loading});return e.then(a=>(n.success(D(r.success,a),{id:u,...i,...i?.success}),a)).catch(a=>{n.error(D(r.error,a),{id:u,...i,...i?.error})}),e};export{B as a,J as e,X as p,G as s,n as t,K as u};
