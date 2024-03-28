/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{J as t}from"./jsonMap.js";import{JSONSupport as l}from"../core/JSONSupport.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{e as a}from"./enumeration.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{L as r}from"./Logger.js";const i=new t({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),o=new t({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let u=class extends l{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};e([a({classBreaksDef:"class-breaks-definition"})],u.prototype,"type",void 0),e([n({json:{write:!0}})],u.prototype,"breakCount",void 0),e([n({json:{write:!0}})],u.prototype,"classificationField",void 0),e([n({type:String,json:{read:i.read,write:i.write}})],u.prototype,"classificationMethod",void 0),e([n({json:{write:!0}})],u.prototype,"normalizationField",void 0),e([n({json:{read:o.read,write:o.write}})],u.prototype,"normalizationType",void 0),e([n({value:null,json:{write:!0}})],u.prototype,"standardDeviationInterval",null),e([n({value:null,json:{write:!0}})],u.prototype,"definedInterval",null),u=e([s("esri.rest.support.ClassBreaksDefinition")],u);const c=u,f=r.getLogger("esri.rest.support.generateRendererUtils");function p(e,t){return Number(e.toFixed(t))}function d(e){const t=b(e),l=[],n=t.uniqueValues.length;for(let e=0;e<n;e++){const n=t.uniqueValues[e],a=t.valueFrequency[e],s=n.toString();l.push({value:n,count:a,label:s})}return{uniqueValues:l}}function m(e){const{normalizationTotal:t}=e,l=function(e){const t=e.definition,{classificationMethod:l,normalizationType:n,definedInterval:a}=t,s=t.breakCount??1,r=[];let i=e.values;if(0===i.length)return[];i=i.sort(((e,t)=>e-t));const o=i[0],u=i[i.length-1];if("equal-interval"===l)if(i.length>=s){const e=(u-o)/s;let t=o;for(let l=1;l<s;l++){const a=p(o+l*e,6);r.push({minValue:t,maxValue:a,label:h(t,a,n)}),t=a}r.push({minValue:t,maxValue:u,label:h(t,u,n)})}else i.forEach((e=>{r.push({minValue:e,maxValue:e,label:h(e,e,n)})}));else if("natural-breaks"===l){const t=b(i),l=e.valueFrequency||t.valueFrequency,a=function(e,t,l){const n=e.length,a=[];l>n&&(l=n);for(let e=0;e<l;e++)a.push(Math.round(e*n/l-1));a.push(n-1);let s=V(a,e,t,l);return function(e,t,l,n,a,s){let r=0,i=0,o=0,u=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<s-1;f++)for(;l[f+1]+1!==l[f+2];){l[f+1]=l[f+1]+1;const s=v(f,l,n,a);o=s.sbMean,r=s.sbSdcm;const p=v(f+1,l,n,a);if(u=p.sbMean,i=p.sbSdcm,!(r+i<t[f]+t[f+1])){l[f+1]=l[f+1]-1;break}t[f]=r,t[f+1]=i,e[f]=o,e[f+1]=u,c=!0}for(let f=s-1;f>0;f--)for(;l[f]!==l[f-1]+1;){l[f]=l[f]-1;const s=v(f-1,l,n,a);o=s.sbMean,r=s.sbSdcm;const p=v(f,l,n,a);if(u=p.sbMean,i=p.sbSdcm,!(r+i<t[f-1]+t[f])){l[f]=l[f]+1;break}t[f-1]=r,t[f]=i,e[f-1]=o,e[f]=u,c=!0}}return c}(s.mean,s.sdcm,a,e,t,l)&&(s=V(a,e,t,l)),a}(t.uniqueValues,l,s);let c=o;for(let e=1;e<s;e++)if(t.uniqueValues.length>e){const l=p(t.uniqueValues[a[e]],6);r.push({minValue:c,maxValue:l,label:h(c,l,n)}),c=l}r.push({minValue:c,maxValue:u,label:h(c,u,n)})}else if("quantile"===l)if(i.length>=s&&o!==u){let e=o,t=Math.ceil(i.length/s),l=0;for(let a=1;a<s;a++){let o=t+l-1;o>i.length&&(o=i.length-1),o<0&&(o=0),r.push({minValue:e,maxValue:i[o],label:h(e,i[o],n)}),e=i[o],l+=t,t=Math.ceil((i.length-l)/(s-a))}r.push({minValue:e,maxValue:u,label:h(e,u,n)})}else{let e=-1;for(let t=0;t<i.length;t++){const l=i[t];l!==e&&(e=l,r.push({minValue:e,maxValue:l,label:h(e,l,n)}),e=l)}}else if("standard-deviation"===l){const e=function(e){let t=0;for(let l=0;l<e.length;l++)t+=e[l];return t/=e.length,t}(i),t=function(e,t){let l=0;for(let n=0;n<e.length;n++){const a=e[n];l+=(a-t)*(a-t)}return l/=e.length,Math.sqrt(l)}(i,e);if(0===t)r.push({minValue:i[0],maxValue:i[0],label:h(i[0],i[0],n)});else{const l=function(e,t,l,n,a){let s=Math.max(n-e,t-n)/a/l;return s=s>=1?1:s>=.5?.5:.25,s}(o,u,s,e,t),a=l*t;let i=0,c=o;for(let t=s;t>=1;t--){const l=p(e-(t-.5)*a,6);r.push({minValue:c,maxValue:l,label:h(c,l,n)}),c=l,i++}let f=p(e+.5*a,6);r.push({minValue:c,maxValue:f,label:h(c,f,n)}),c=f,i++;for(let t=1;t<=s;t++)f=i===2*s?u:p(e+(t+.5)*a,6),r.push({minValue:c,maxValue:f,label:h(c,f,n)}),c=f,i++}}else if("defined-interval"===l){if(!a)return r;const e=i[0],t=i[i.length-1],l=Math.ceil((t-e)/a);let s=e;for(let t=1;t<l;t++){const l=p(e+t*a,6);r.push({minValue:s,maxValue:l,label:h(s,l,n)}),s=l}r.push({minValue:s,maxValue:t,label:h(s,t,n)})}return r}(e);return{classBreaks:l,normalizationTotal:t}}function h(e,t,l){let n=null;return n=e===t?l&&"percent-of-total"===l?e+"%":e.toString():l&&"percent-of-total"===l?e+"% - "+t+"%":e+" - "+t,n}function b(e){const t=[],l=[];let n=Number.MIN_VALUE,a=1,s=-1;for(let r=0;r<e.length;r++){const i=e[r];i===n?(a++,l[s]=a):null!==i&&(t.push(i),n=i,a=1,l.push(a),s++)}return{uniqueValues:t,valueFrequency:l}}function V(e,t,l,n){let a=[],s=[],r=[],i=0;const o=[],u=[];for(let a=0;a<n;a++){const n=v(a,e,t,l);o.push(n.sbMean),u.push(n.sbSdcm),i+=u[a]}let c,f=i,p=!0;for(;p||i<f;){p=!1,a=[];for(let t=0;t<n;t++)a.push(e[t]);for(let l=0;l<n;l++)for(let a=e[l]+1;a<=e[l+1];a++)if(c=t[a],l>0&&a!==e[l+1]&&Math.abs(c-o[l])>Math.abs(c-o[l-1]))e[l]=a;else if(l<n-1&&e[l]!==a-1&&Math.abs(c-o[l])>Math.abs(c-o[l+1])){e[l+1]=a-1;break}f=i,i=0,s=[],r=[];for(let a=0;a<n;a++){s.push(o[a]),r.push(u[a]);const n=v(a,e,t,l);o[a]=n.sbMean,u[a]=n.sbSdcm,i+=u[a]}}if(i>f){for(let t=0;t<n;t++)e[t]=a[t],o[t]=s[t],u[t]=r[t];i=f}return{mean:o,sdcm:u}}function v(e,t,l,n){let a=0,s=0;for(let r=t[e]+1;r<=t[e+1];r++){const e=n[r];a+=l[r]*e,s+=e}s<=0&&f.warn("Exception in Natural Breaks calculation");const r=a/s;let i=0;for(let a=t[e]+1;a<=t[e+1];a++)i+=n[a]*(l[a]-r)**2;return{sbMean:r,sbSdcm:i}}export{c as C,d as a,m as c};