/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{m as e}from"./handleUtils.js";import{r as s}from"./typedArrayUtil.js";class r{constructor(e,s){this._observers=e,this._observer=s}remove(){s(this._observers,this._observer)}}class t{constructor(){this._observers=null,this.destroyed=!1}observe(e){if(this.destroyed||e.destroyed)return o;null==this._observers&&(this._observers=[]);const s=this._observers;let t=!1,i=!1;const n=s.length;for(let r=0;r<n;++r){const o=s[r];if(o.destroyed)i=!0;else if(o===e){t=!0;break}}return t||(s.push(e),i&&this._removeDestroyedObservers()),new r(s,e)}_removeDestroyedObservers(){const e=this._observers;if(!e||0===e.length)return;const s=e.length;let r=0;for(let t=0;t<s;++t){for(;t+r<s&&e[t+r].destroyed;)++r;if(r>0){if(!(t+r<s))break;e[t]=e[t+r]}}e.length=s-r}destroy(){if(this.destroyed)return;this.destroyed=!0;const e=this._observers;if(null!=e){for(const s of e)s.onCommitted();this._observers=null}}}const o=e();export{t as O};
