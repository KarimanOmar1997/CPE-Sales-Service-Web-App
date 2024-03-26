/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{L as t}from"../../../chunks/Logger.js";import{e as n,a as r,b as e,c as s,i as o,d as i,f as a,g as u,h as c,j as f}from"../../../chunks/ensureType.js";import{a as l,g as p,i as g}from"../../../chunks/utils.js";import{a as y,m}from"../../../chunks/metadata.js";import d from"../../Error.js";import{h}from"../../../chunks/typedArrayUtil.js";import"../../../config.js";import"../../lang.js";import"../../../chunks/handleUtils.js";function j(t,n){const r="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=n.getItemAt||Array.isArray(n)){const t=parseInt(r,10);if(!isNaN(t))return Array.isArray(n)?n[t]:n.at(t)}const e=p(n);return g(e,r)?e.get(r):n[r]}function v(t,n,r){if(null==t)return t;const e=j(n[r],t);return!e&&r<n.length-1?void 0:r===n.length-1?e:v(e,n,r+1)}function w(t,n,r=0){return"string"!=typeof n||n.includes(".")?v(t,l(n),r):j(n,t)}function A(t,n){return w(t,n)}function O(t,n){return void 0!==w(n,t)}function k(t,n,r){if(t&&n)if("object"==typeof n)for(const r of Object.getOwnPropertyNames(n))k(t,r,n[r]);else{if(n.includes(".")){const e=n.split("."),s=e.splice(-1,1)[0];return void k(A(t,e),s,r)}const e=t.__accessor__;null!=e&&function(t,n){if(h("esri-unknown-property-errors")&&!function(t,n){return null!=n.metadatas[t]}(t,n))throw new d("set:unknown-property",function(t,n){return"setting unknown property '"+t+"' on instance of "+n.host.declaredClass}(t,n))}(n,e),t[n]=r}}function b(l={}){return(p,g)=>{if(p===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${p.name}.${g}. Accessor does not support static properties.`);const d=Object.getOwnPropertyDescriptor(p,g),h=y(p,g);d&&(d.get||d.set?(h.get=d.get||h.get,h.set=d.set||h.set):"value"in d&&("value"in l&&t.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${g}" on "${p.constructor.name}" already defined in the metadata`,l),h.value=l.value=d.value)),null!=l.readOnly&&(h.readOnly=l.readOnly);const j=l.aliasOf;if(j){const t="string"==typeof j?j:j.source,n="string"==typeof j?null:!0===j.overridable;let r;h.dependsOn=[t],h.get=function(){let n=A(this,t);if("function"==typeof n){r||(r=t.split(".").slice(0,-1).join("."));const e=A(this,r);e&&(n=n.bind(e))}return n},h.readOnly||(h.set=n?function(t){this._override(g,t)}:function(n){k(this,t,n)})}const v=l.type,w=l.types;h.cast||(v?h.cast=function(t){let n=0,r=t;if(e(t))return s(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],n++;const l=r;if(o(l))return 0===n?i(l):a(i(l),n);if(1===n)return u(l);if(n>1)return c(l,n);const p=t;return p.from?p.from:f(p)}(v):w&&(Array.isArray(w)?h.cast=n(r(w[0])):h.cast=r(w))),m(h,l),l.range&&(h.cast=x(h.cast,l.range))}}function _(t,n,r){const e=y(t,r);e.json||(e.json={});let s=e.json;return void 0!==n&&(s.origins||(s.origins={}),s.origins[n]||(s.origins[n]={}),s=s.origins[n]),s}function x(t,n){return r=>{let e=+t(r);return null!=n.step&&(e=Math.round(e/n.step)*n.step),null!=n.min&&(e=Math.max(n.min,e)),null!=n.max&&(e=Math.min(n.max,e)),e}}export{O as e,x as ensureRange,A as g,b as property,_ as propertyJSONMeta,k as s,w as v};
