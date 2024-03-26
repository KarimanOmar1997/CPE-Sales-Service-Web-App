"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6085],{73173:(e,t,r)=>{r.d(t,{g:()=>u});var n=r(31450),o=(r(82058),r(60991)),s=r(92143),a=r(32101);const i=s.L.getLogger("esri.assets");function u(e){if(!n.default.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o.Z("assets:path-not-set","config.assetsPath is not set");return(0,a.v_)(n.default.assetsPath,e)}},29794:(e,t,r)=>{function n(){return 1e-6}r.d(t,{R:()=>o,a:()=>u,g:()=>n,t:()=>i});const o=Math.random,s=Math.PI/180,a=180/Math.PI;function i(e){return e*s}function u(e){return e*a}},82426:(e,t,r)=>{r.d(t,{a:()=>f,b:()=>h,c:()=>a,d:()=>l,e:()=>b,f:()=>m,g:()=>q,i:()=>i,l:()=>u,m:()=>w,n:()=>s,r:()=>d,s:()=>c,u:()=>M});var n=r(72836);const o=new Float32Array(1);function s(e){--e;for(let t=1;t<32;t<<=1)e|=e>>t;return e+1}function a(e,t,r){return Math.min(Math.max(e,t),r)}function i(e){return 0==(e&e-1)}function u(e,t,r){return e+(t-e)*r}function c(e,t,r,n,o){return u(n,o,(e-t)/(r-t))}function l(e){return e*Math.PI/180}function d(e){return 180*e/Math.PI}function h(e){return Math.acos(a(e,-1,1))}function f(e){return Math.asin(a(e,-1,1))}function m(e,t,r=1e-6){return e===t||!(!Number.isFinite(e)||!Number.isFinite(t))&&(e>t?e-t:t-e)<=r}const p=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));const g=BigInt("1000000");function w(e){return y(Math.max(-q,Math.min(e,q)))}function y(e){return o[0]=e,o[0]}function b(e,t){const r=(0,n.l)(e),o=f(e[2]/r),s=Math.atan2(e[1]/r,e[0]/r);return(0,n.s)(t,r,o,s),t}function M(e){const t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[3]*e[3]+e[4]*e[4]+e[5]*e[5],n=e[6]*e[6]+e[7]*e[7]+e[8]*e[8];return!(m(t,1)&&m(r,1)&&m(n,1))}!function(e){const t=function(e){return p.setFloat64(0,e),p.getBigInt64(0)}(e=Math.abs(e)),r=(n=t<=g?g:t-g,p.setBigInt64(0,n),p.getFloat64(0));var n;Math.abs(e-r)}(1);const q=y(34028234663852886e22)},72836:(e,t,r)=>{r.d(t,{A:()=>f,B:()=>l,D:()=>d,F:()=>x,G:()=>p,a:()=>b,b:()=>c,c:()=>a,d:()=>u,e:()=>P,f:()=>w,g:()=>O,h:()=>y,i:()=>v,j:()=>D,k:()=>T,l:()=>s,n:()=>M,p:()=>q,q:()=>g,r:()=>S,s:()=>i,t:()=>k,w:()=>F,x:()=>C,y:()=>h,z:()=>m});var n=r(66106),o=r(29794);function s(e){const t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function i(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function u(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function c(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function d(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function h(e,t){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e}function f(e,t){return e[0]=Math.sign(t[0]),e[1]=Math.sign(t[1]),e[2]=Math.sign(t[2]),e}function m(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function p(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function g(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function w(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function y(e,t){const r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)}function b(e,t){const r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}function M(e){const t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}function q(e,t){const r=t[0],n=t[1],o=t[2];let s=r*r+n*n+o*o;return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s),e}function v(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function T(e,t,r){const n=t[0],o=t[1],s=t[2],a=r[0],i=r[1],u=r[2];return e[0]=o*u-s*i,e[1]=s*a-n*u,e[2]=n*i-o*a,e}function O(e,t,r,n){const o=t[0],s=t[1],a=t[2];return e[0]=o+n*(r[0]-o),e[1]=s+n*(r[1]-s),e[2]=a+n*(r[2]-a),e}function k(e,t,r){const n=t[0],o=t[1],s=t[2];return e[0]=r[0]*n+r[4]*o+r[8]*s+r[12],e[1]=r[1]*n+r[5]*o+r[9]*s+r[13],e[2]=r[2]*n+r[6]*o+r[10]*s+r[14],e}function S(e,t,r){const n=t[0],o=t[1],s=t[2];return e[0]=n*r[0]+o*r[3]+s*r[6],e[1]=n*r[1]+o*r[4]+s*r[7],e[2]=n*r[2]+o*r[5]+s*r[8],e}function C(e,t,r){const n=r[0],o=r[1],s=r[2],a=r[3],i=t[0],u=t[1],c=t[2];let l=o*c-s*u,d=s*i-n*c,h=n*u-o*i,f=o*h-s*d,m=s*l-n*h,p=n*d-o*l;const g=2*a;return l*=g,d*=g,h*=g,f*=2,m*=2,p*=2,e[0]=i+l+f,e[1]=u+d+m,e[2]=c+h+p,e}const E=(0,n.c)(),L=(0,n.c)();function P(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function x(e,t,r){const n=r[0]-t[0],o=r[1]-t[1],s=r[2]-t[2];let a=n*n+o*o+s*s;return a>0?(a=1/Math.sqrt(a),e[0]=n*a,e[1]=o*a,e[2]=s*a,e):(e[0]=0,e[1]=0,e[2]=0,e)}const D=c,A=l,I=d,F=y,U=b,_=s,N=M;Object.freeze(Object.defineProperty({__proto__:null,abs:h,add:u,angle:function(e,t){a(E,e),a(L,t),q(E,E),q(L,L);const r=v(E,L);return r>1?0:r<-1?Math.PI:Math.acos(r)},bezier:function(e,t,r,n,o,s){const a=1-s,i=a*a,u=s*s,c=i*a,l=3*s*i,d=3*u*a,h=u*s;return e[0]=t[0]*c+r[0]*l+n[0]*d+o[0]*h,e[1]=t[1]*c+r[1]*l+n[1]*d+o[1]*h,e[2]=t[2]*c+r[2]*l+n[2]*d+o[2]*h,e},ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},copy:a,cross:T,direction:x,dist:F,distance:y,div:I,divide:d,dot:v,equals:function(e,t){if(e===t)return!0;const r=e[0],n=e[1],s=e[2],a=t[0],i=t[1],u=t[2],c=(0,o.g)();return Math.abs(r-a)<=c*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=c*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(s-u)<=c*Math.max(1,Math.abs(s),Math.abs(u))},exactEquals:P,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},hermite:function(e,t,r,n,o,s){const a=s*s,i=a*(2*s-3)+1,u=a*(s-2)+s,c=a*(s-1),l=a*(3-2*s);return e[0]=t[0]*i+r[0]*u+n[0]*c+o[0]*l,e[1]=t[1]*i+r[1]*u+n[1]*c+o[1]*l,e[2]=t[2]*i+r[2]*u+n[2]*c+o[2]*l,e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},len:_,length:s,lerp:O,max:p,min:m,mul:A,multiply:l,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},normalize:q,random:function(e,t){t=t||1;const r=o.R,n=2*r()*Math.PI,s=2*r()-1,a=Math.sqrt(1-s*s)*t;return e[0]=Math.cos(n)*a,e[1]=Math.sin(n)*a,e[2]=s*t,e},rotateX:function(e,t,r,n){const o=[],s=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],s[0]=o[0],s[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),s[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e},rotateY:function(e,t,r,n){const o=[],s=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],s[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),s[1]=o[1],s[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e},rotateZ:function(e,t,r,n){const o=[],s=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],s[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),s[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),s[2]=o[2],e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:g,scaleAndAdd:w,set:i,sign:f,sqrDist:U,sqrLen:N,squaredDistance:b,squaredLength:M,str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},sub:D,subtract:c,transformMat3:S,transformMat4:k,transformQuat:C},Symbol.toStringTag,{value:"Module"}))},66106:(e,t,r)=>{function n(){return[0,0,0]}function o(e){return[e[0],e[1],e[2]]}function s(e,t,r){return[e,t,r]}function a(e,t=[0,0,0]){const r=Math.min(3,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t}function i(e,t){return new Float64Array(e,t,3)}r.d(t,{O:()=>c,U:()=>h,Z:()=>u,a:()=>o,b:()=>i,c:()=>n,d:()=>l,e:()=>d,f:()=>s,g:()=>a});const u=[0,0,0],c=s(1,1,1),l=s(1,0,0),d=s(0,1,0),h=s(0,0,1)},82058:(e,t,r)=>{r.d(t,{Z:()=>p,l:()=>h,s:()=>d});var n=r(31450),o=r(88762),s=r(60991),a=r(48578),i=r(76506),u=r(50406),c=r(32101);r(92143),r(12047),r(29768),r(21972),r(17533),r(86656),r(66396),r(22723),r(6540),r(91306),r(34250),r(379),r(62062),r(6906),r(79456);const l=new Set(["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]);function d(e){const t=(0,c.P$)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!l.has(t)&&!e.endsWith("/sharing/rest/generateToken")}function h(e,t,r=!1,n){return new Promise(((o,s)=>{if((0,u.Hc)(n))return void s(f());let i=()=>{d(),s(new Error(`Unable to load ${t}`))},c=()=>{const t=e;d(),o(t)},l=()=>{if(!e)return;const t=e;d(),t.src="",s(f())};const d=()=>{(0,a.h)("esri-image-decode")||(e.removeEventListener("error",i),e.removeEventListener("load",c)),i=null,c=null,e=null,null!=n&&n.removeEventListener("abort",l),l=null,r&&URL.revokeObjectURL(t)};null!=n&&n.addEventListener("abort",l),(0,a.h)("esri-image-decode")?e.decode().then(c,i):(e.addEventListener("error",i),e.addEventListener("load",c))}))}function f(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}const m="Timeout exceeded";async function p(e,t){e instanceof URL&&(e=e.toString()),t?.query instanceof URLSearchParams&&(t.query=(0,c.u0)(t.query.toString().replaceAll("+"," ")));const i=(0,c.HK)(e),l=(0,c.jc)(e);l||i||(e=(0,c.Fv)(e));const h={url:e,requestOptions:{...t}};let f=(0,c.oh)(e);if(f){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=k("request:interceptor",e,t)}if((n instanceof Error||n instanceof s.Z)&&(r=k("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(f,h);if(null!=e)return{data:e,getHeader:v,httpStatus:200,requestOptions:h.requestOptions,url:h.url};f.after||f.error||(f=null)}if(e=h.url,"image"===(t=h.requestOptions).responseType&&((0,a.h)("host-webworker")||(0,a.h)("host-node")))throw k("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),h);if("head"===t.method){if(t.body)throw k("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),h);if(i||l)throw k("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),h)}if(await async function(){(0,a.h)("host-webworker")?g||(g=await r.e(9768).then(r.bind(r,89768))):p._abortableFetch||(p._abortableFetch=globalThis.fetch.bind(globalThis))}(),g)return g.execute(e,t);const m=new AbortController;(0,u.fu)(t,(()=>m.abort()));const b={controller:m,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:f,params:h,redoRequest:!1,useIdentity:w.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},M=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,s=e.controller.signal,a=r.body;let i=null,c=null;if(y&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(c=a),e.fetchOptions={cache:r.cacheBust&&!("polyfill"in p._abortableFetch)?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:w.priority,redirect:"follow",signal:s},(i||c)&&(e.fetchOptions.body=i||c),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||i?.get("token")),!e.hasToken&&n.default.apiKey&&d(t)&&(r.query||(r.query={}),r.query.token=n.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!C(t)&&!(0,u.Hc)(s)){let n;"immediate"===r.authMode?(await S(),n=await o.id.getCredential(t,{signal:s}),e.credential=n):"no-prompt"===r.authMode?(await S(),n=await o.id.getCredential(t,{prompt:!1,signal:s}).catch((()=>{})),e.credential=n):o.id&&(n=o.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[t,r]=await E(e)}while(!await P(e,t,r))}catch(r){const n=k("request:server",r,e.params,t);throw n.details.ssl=e.useSSL,e.interceptor?.error&&e.interceptor.error(n),n}const s=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(s)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,c.kl)(s)){const e=(0,c.P$)(s,!0);e&&w.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&function(e){n.default.request.crossOriginNoCorsDomains||(n.default.request.crossOriginNoCorsDomains={});const t=n.default.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,c.P$)(r)??""]=0:(t[(0,c.P$)("http://"+r)??""]=0,t[(0,c.P$)("https://"+r)??""]=0)}(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&o.id){const e=o.id.findServerInfo(a.server);let t=e?.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,a.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t?.headers.get(e):v,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(b);return f?.after?.(M),M}let g;const w=n.default.request,y="FormData"in globalThis,b=new Set([499,498,403,401]),M=new Set(["COM_0056","COM_0057","SB_0008"]),q=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],v=()=>null,T=Symbol();function O(e){const t=(0,c.P$)(e);return!t||t.endsWith(".arcgis.com")||p._corsServers.includes(t)||(0,c.kl)(t)}function k(e,t,r,n){let o="Error";const a={url:r.url,requestOptions:r.requestOptions,getHeader:v,ssl:!1};if(t instanceof s.Z)return t.details?(t.details=(0,i.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n?.status,s=t.message;s&&(o=s),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=T in t?t[T]:t}return(0,u.D_)(t)?(0,u.zE)():new s.Z(e,o,a)}async function S(){o.id||await Promise.all([r.e(6968),r.e(5037)]).then(r.bind(r,85037))}function C(e){return q.some((t=>t.test(e)))}async function E(e){let t=e.params.url;const r=e.params.requestOptions,s=e.fetchOptions??{},i=(0,c.jc)(t)||(0,c.HK)(t),l=r.responseType||"json",d=i?0:null!=r.timeout?r.timeout:w.timeout;let h=!1;if(!i){e.useSSL&&(t=(0,c.hO)(t)),r.cacheBust&&"default"===s.cache&&(t=(0,c.ZN)(t,"request.preventCache",Date.now()));let i={...r.query};e.credentialToken&&(i.token=e.credentialToken);let u=(0,c.B7)(i);(0,a.h)("esri-url-encodes-apostrophe")&&(u=u.replaceAll("'","%27"));const l=t.length+1+u.length;let d;h="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>w.maxUrlLength;const f=r.useProxy||!!(0,c.ed)(t);if(f){const e=(0,c.b7)(t);d=e.path,!h&&d.length+1+l>w.maxUrlLength&&(h=!0),e.query&&(i={...e.query,...i})}if("HEAD"===s.method&&(h||f)){if(h){if(l>w.maxUrlLength)throw k("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw k("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(f)throw k("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(h?(s.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,c.fl)(t,i):(s.body=(0,c.B7)(i),s.headers||(s.headers={}),s.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,c.fl)(t,i),f&&(e.useProxy=!0,t=`${d}?${t}`),i.token&&y&&s.body instanceof FormData&&!(0,c.i)(t)&&s.body.set("token",i.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,c.D6)(t,(0,c.TI)()))if((0,c.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r?.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(s.credentials="include",function(e){const t=n.default.request.crossOriginNoCorsDomains;if(t){let r=(0,c.P$)(e);if(r)return r=r.toLowerCase(),!(0,c.D6)(r,(0,c.TI)())&&t[r]<Date.now()-36e5}return!1}(t)&&await async function(e){const t=n.default.request.crossOriginNoCorsDomains,r=(0,c.P$)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const o=(0,c.mN)(e);e=o.path,"json"===o.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}(h?(0,c.fl)(t,i):t))}let f,g,b=0,M=!1;d>0&&(b=setTimeout((()=>{M=!0,e.controller.abort()}),d));try{if("native-request-init"===r.responseType)g=s,g.url=t;else if("image"!==r.responseType||"default"!==s.cache||"GET"!==s.method||h||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!i&&!e.useProxy&&w.proxyUrl&&!O(t)){if(f=await p._abortableFetch(t,s),e.useProxy||function(e){const t=(0,c.P$)(e);t&&!p._corsServers.includes(t)&&p._corsServers.push(t)}(t),"native"===r.responseType)g=f;else if("HEAD"!==s.method)if(f.ok){switch(l){case"array-buffer":g=await f.arrayBuffer();break;case"blob":case"image":g=await f.blob();break;default:g=await f.text()}if(b&&(clearTimeout(b),b=0),"json"===l||"xml"===l||"document"===l)if(g)switch(l){case"json":g=JSON.parse(g);break;case"xml":g=L(g,"application/xml");break;case"document":g=L(g,"text/html")}else g=null;if(g){if("array-buffer"===l||"blob"===l){const e=f.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&g["blob"===l?"size":"byteLength"]<=750)try{const e=await new Response(g).json();e.error&&(g=e)}catch{}}"image"===l&&g instanceof Blob&&(g=await x(URL.createObjectURL(g),e,!0))}}else{g=await f.text();try{g=JSON.parse(g)}catch{}}}else g=await x(t,e)}catch(n){if("AbortError"===n.name){if(M)throw new Error(m);throw(0,u.zE)("Request canceled")}if(!(!f&&n instanceof TypeError&&w.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||O(t))throw n;e.redoRequest=!0,(0,c.tD)({proxyUrl:w.proxyUrl,urlPrefix:(0,c.P$)(t)??""})}finally{b&&clearTimeout(b)}return[f,g]}function L(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function P(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let s,a;if(r&&(r.error?s=r.error:"error"===r.status&&Array.isArray(r.messages)&&(s={...r},s[T]=r,s.details=r.messages)),!s&&!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[T]=r,s;let i,u=null;s&&(a=Number(s.code),u=s.hasOwnProperty("subcode")?Number(s.subcode):null,i=s.messageCode,i=i?.toUpperCase());const c=n.authMode;if(403===a&&(4===u||s.message?.toLowerCase().includes("ssl")&&!s.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&b.has(a)&&!C(e.params.url)&&(403!==a||(!i||!M.has(i))&&(null==u||2===u&&e.credentialToken))){await S();try{const t=await o.id.getCredential(e.params.url,{error:k("request:server",s,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;s=t}}if(s)throw s;return!0}function x(e,t,r=!1){const n=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=w.priority,o.src=e,h(o,e,r,n)}p._abortableFetch=null,p._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]}}]);