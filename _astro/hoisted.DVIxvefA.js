let S=null;try{const e=localStorage.getItem("theme");e==="dark"&&(S="dark"),e==="light"&&(S="light")}catch{}const U=window.matchMedia("(prefers-color-scheme: dark)");let I=S||(U.matches?"dark":"light");const oe=new Event("themeChange");function O(e,t){window.__theme=e,I=e,t.style.setProperty("color-scheme",e),t.classList.remove("light"),t.classList.remove("dark"),t.classList.add(e),window.dispatchEvent(oe)}window.__setPreferredTheme=function(e){O(e,document.documentElement);try{localStorage.setItem("theme",e)}catch{}};U.addEventListener("change",function(e){window.__setPreferredTheme(e.matches?"dark":"light")});O(I,document.documentElement);document.addEventListener("astro:before-swap",({newDocument:e})=>O(I,e.documentElement));const re="astro:before-preparation",se="astro:after-preparation",ie="astro:before-swap",ae="astro:after-swap",ce=e=>document.dispatchEvent(new Event(e));class B extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,u,f,s,m){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=u,this.sourceElement=f,this.info=s,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class le extends B{formData;loader;constructor(t,n,o,r,a,u,f,s,m){super(re,{cancelable:!0},t,n,o,r,a,u,f),this.formData=s,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ue extends B{direction;viewTransition;swap;constructor(t,n,o){super(ie,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function de(e,t,n,o,r,a,u,f){const s=new le(e,t,n,o,r,a,window.document,u,f);return document.dispatchEvent(s)&&(await s.loader(),s.defaultPrevented||(ce(se),s.navigationType!=="traverse"&&H({scrollX,scrollY}))),s}async function fe(e,t,n){const o=new ue(e,t,n);return document.dispatchEvent(o),o.swap(),o}const me=history.pushState.bind(history),L=history.replaceState.bind(history),H=e=>{history.state&&(history.scrollRestoration="manual",L({...history.state,...e},""))},M=!!document.startViewTransition,N=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),V=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let D,y,P=!1,W;const j=e=>document.dispatchEvent(new Event(e)),K=()=>j("astro:page-load"),he=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},p="data-astro-transition-persist",G="data-astro-transition",Q="data-astro-transition-fallback";let F,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):N()&&(L({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function we(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function z(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function pe(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const a=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>a)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const J=(e,t,n,o,r)=>{const a=V(t,e),u=document.title;document.title=o;let f=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const s=history.state;L({...n.state,index:s.index,scrollX:s.scrollX,scrollY:s.scrollY},"",e.href)}else me({...n.state,index:++E,scrollX:0,scrollY:0},"",e.href);if(document.title=u,D=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),f=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const s=history.state;location.href=e.href,history.state||(L(s,""),a&&window.dispatchEvent(new PopStateEvent("popstate")))}else f||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ye(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${p}="${n.getAttribute(p)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function X(e,t,n,o){const r=(i,l)=>{const h=i.getAttribute(p),b=h&&l.head.querySelector(`[${p}="${h}"]`);if(b)return b;if(i.matches("link[rel=stylesheet]")){const v=i.getAttribute("href");return l.head.querySelector(`link[rel=stylesheet][href="${v}"]`)}return null},a=()=>{const i=document.activeElement;if(i?.closest(`[${p}]`)){if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){const l=i.selectionStart,h=i.selectionEnd;return{activeElement:i,start:l,end:h}}return{activeElement:i}}else return{activeElement:null}},u=({activeElement:i,start:l,end:h})=>{i&&(i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(i.selectionStart=l,i.selectionEnd=h))},f=i=>{const l=i.dataset.astroTransitionPersistProps;return l==null||l==="false"},s=i=>{const l=document.documentElement,h=[...l.attributes].filter(({name:c})=>(l.removeAttribute(c),c.startsWith("data-astro-")));[...i.newDocument.documentElement.attributes,...h].forEach(({name:c,value:d})=>l.setAttribute(c,d));for(const c of document.scripts)for(const d of i.newDocument.scripts)if(!d.hasAttribute("data-astro-rerun")&&(!c.src&&c.textContent===d.textContent||c.src&&c.type===d.type&&c.src===d.src)){d.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const d=r(c,i.newDocument);d?d.remove():c.remove()}document.head.append(...i.newDocument.head.children);const b=document.body,v=a();document.body.replaceWith(i.newDocument.body);for(const c of b.querySelectorAll(`[${p}]`)){const d=c.getAttribute(p),T=document.querySelector(`[${p}="${d}"]`);T&&(T.replaceWith(c),T.localName==="astro-island"&&f(c)&&(c.setAttribute("ssr",""),c.setAttribute("props",T.getAttribute("props"))))}u(v)};async function m(i){function l(c){const d=c.effect;return!d||!(d instanceof KeyframeEffect)||!d.target?!1:window.getComputedStyle(d.target,d.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(Q,i);const v=document.getAnimations().filter(c=>!h.includes(c)&&!l(c));return Promise.all(v.map(c=>c.finished))}if(!P)document.documentElement.setAttribute(G,e.direction),o==="animate"&&await m("old");else throw new DOMException("Transition was skipped");const g=document.title,w=await fe(e,y,s);J(w.to,w.from,t,g,n),j(ae),o==="animate"&&!P&&m("new").then(()=>W())}async function Z(e,t,n,o,r){if(!N()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&H({scrollX,scrollY}),V(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){J(n,t,o,document.title,r);return}const u=await de(t,n,e,a,o.sourceElement,o.info,o.formData,f);if(u.defaultPrevented){location.href=n.href;return}async function f(s){const m=s.to.href,g={};if(s.formData){g.method="POST";const l=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");g.body=l?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const w=await we(m,g);if(w===null){s.preventDefault();return}if(w.redirected&&(s.to=new URL(w.redirected)),F??=new DOMParser,s.newDocument=F.parseFromString(w.html,w.mediaType),s.newDocument.querySelectorAll("noscript").forEach(l=>l.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const i=ye(s.newDocument);i.length&&await Promise.all(i)}if(P=!1,M)y=document.startViewTransition(async()=>await X(u,o,r));else{const s=(async()=>{await new Promise(m=>setTimeout(m)),await X(u,o,r,z())})();y={updateCallbackDone:s,ready:s,finished:new Promise(m=>W=m),skipTransition:()=>{P=!0}}}y.ready.then(async()=>{await pe(),K(),he()}),y.finished.then(()=>{document.documentElement.removeAttribute(G),document.documentElement.removeAttribute(Q)}),await y.ready}async function Y(e,t){await Z("forward",D,new URL(e,location.href),t??{})}function ge(e){if(!N()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>E?"forward":"back";E=n,Z(o,D,new URL(location.href),{},t)}const C=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&H({scrollX,scrollY})};{if(M||z()!=="none")if(D=new URL(location.href),addEventListener("popstate",ge),addEventListener("load",K),"onscrollend"in window)addEventListener("scrollend",C);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,C();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const ee=new Set,k=new WeakSet;let R,te,$=!1;function be(e){$||($=!0,R??=e?.prefetchAll??!1,te??=e?.defaultStrategy??"hover",ve(),Te(),Ee(),Se())}function ve(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{A(t.target,"tap")&&x(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function Te(){let e;document.body.addEventListener("focusin",o=>{A(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),_(()=>{for(const o of document.getElementsByTagName("a"))k.has(o)||A(o,"hover")&&(k.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{x(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function Ee(){let e;_(()=>{for(const t of document.getElementsByTagName("a"))k.has(t)||A(t,"viewport")&&(k.add(t),e??=Ae(),e.observe(t))})}function Ae(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),x(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function Se(){_(()=>{for(const e of document.getElementsByTagName("a"))A(e,"load")&&x(e.href,{with:"link"})})}function x(e,t){const n=t?.ignoreSlowConnection??!1;if(!Le(e,n))return;if(ee.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Le(e,t){if(!navigator.onLine||!t&&ne())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!ee.has(e)}catch{}return!1}function A(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||R)&&ne()?!0:n==null&&R||n===""?t===te:n===t}function ne(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function _(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Pe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return e.dataset.astroReload!==void 0}(M||Pe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),Y(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const u=o?.getAttribute("formmethod")??n.method;if(u==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(u==="get"){const s=new URLSearchParams(r),m=new URL(a);m.search=s.toString(),a=m.toString()}else f.formData=r;e.preventDefault(),Y(a,f)}),be({prefetchAll:!0}));