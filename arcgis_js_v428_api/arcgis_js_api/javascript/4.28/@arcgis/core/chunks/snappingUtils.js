/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{watch as e,syncAndInitial as t}from"../core/reactiveUtils.js";import{e as n}from"../core/Accessor.js";import{sqlAnd as r}from"../core/sql.js";import{m as o}from"./timeUtils.js";import{a as s}from"./vec3.js";import{m as i}from"./dehydratedPoint.js";import a from"../rest/support/Query.js";import{V as l}from"./InputManager.js";import{a as u}from"./keybindings.js";import{a as c,f as p}from"./vec3f64.js";import{c as d,a as f}from"./elevationInfoUtils.js";function m(e,t,n){return p(e,t,n)}function g(e){return e}function E(e,t,n){return p(e,t,n)}function y(e){return c(e)}function j(e,t,{coordinateHelper:n,elevationInfo:r}){return e?v(n.vectorToDehydratedPoint(e,w),t,r):null}function v(e,t,n){if(null==e)return null;if(null==t)return p(e.x,e.y,e.z??0);if("2d"===t.type)return p(e.x,e.y,0);const r=d(t,e,n,f)??0;return p(e.x,e.y,r)}function h(e,t){return i(e[0],e[1],e[2],t)}const w=i(0,0,0,null);function x(e,t){const n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function R(e,t){return Math.sqrt(x(e,t))}function N(e,t){t.sort(((t,n)=>s(t.targetPoint,e)-s(n.targetPoint,e)))}var T;function b({point:e,distance:t,returnEdge:s,vertexMode:l,coordinateHelper:{spatialReference:u},filter:c},p,d){return d=null!=d?d.clone():new a({where:"1=1"}),c&&(d.geometry=c.geometry,d.distance=c.distance,d.spatialRelationship=c.spatialRelationship,d.where=r(d.where,c.where),d.timeExtent=o(d.timeExtent,c.timeExtent),d.objectIds=(f=d.objectIds,m=c.objectIds,f||m?m?f?Array.from(n(new Set(f),new Set(m))):m:f:null)),{point:i(e[0],e[1],e[2],u.toJSON()),mode:p,distance:t,returnEdge:s,vertexMode:l,query:d.toJSON()};var f,m}function O(e,t,n){return{left:j(e.leftVertex.pos,t,n),right:j(e.rightVertex.pos,t,n)}}function k(e){return e.createQuery()}function I(n,r=(()=>{})){const o=e((()=>({view:n.view,snappingOptions:n.snappingOptions})),(({view:e,snappingOptions:t})=>{const o="snapping-toggle",s=l.TOOL;if(n.removeHandles(o),e&&null!=t){const i=[e.on("key-down",(e=>{e.key!==u.toggle||e.repeat||(t.enabledToggled=!0,r())}),s),e.on("key-up",(e=>{e.key===u.toggle&&(t.enabledToggled=!1,r())}),s),e.on("pointer-move",(e=>{const n=e.native.ctrlKey;t.enabledToggled!==n&&(t.enabledToggled=n,r())}),s)];n.addHandles(i,o)}}),t);n.addHandles(o)}function C(e){return null!=e&&"object"==typeof e&&"declaredClass"in e&&"esri.WebMap"===e.declaredClass&&"utilityNetworks"in e&&!!e?.utilityNetworks?.length}!function(e){e[e.TARGET=0]="TARGET",e[e.REFERENCE=1]="REFERENCE",e[e.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"}(T||(T={}));export{T as L,N as a,R as b,x as c,g as d,O as e,j as f,E as g,v as h,C as i,y as j,m as k,b as l,k as m,I as s,h as t};
