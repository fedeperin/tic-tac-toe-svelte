function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function M(){return Object.create(null)}function v(t){t.forEach(j)}function A(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t){let n;return y(t,e=>n=e)(),n}function S(t,n,e){t.$$.on_destroy.push(y(n,e))}function U(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function C(t,n,e,o,r,l){if(r){const f=m(n,e,o,l);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let i;function _(t){i=t}function p(){if(!i)throw new Error("Function called outside component initialization");return i}function H(t){p().$$.on_mount.push(t)}function I(t){p().$$.after_update.push(t)}function J(t){p().$$.on_destroy.push(t)}const a=[],g=[];let s=[];const b=[],x=Promise.resolve();let h=!1;function E(){h||(h=!0,x.then(q))}function K(){return E(),x}function O(t){s.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<a.length;){const n=a[c];c++,_(n),z(n.$$)}}catch(n){throw a.length=0,c=0,n}for(_(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(a.length);for(;b.length;)b.pop()();h=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function L(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{E as A,I as a,g as b,J as c,w as d,U as e,B as f,G as g,S as h,P as i,y as j,A as k,M as l,q as m,k as n,H as o,F as p,O as q,v as r,D as s,K as t,C as u,L as v,i as w,_ as x,j as y,a as z};
