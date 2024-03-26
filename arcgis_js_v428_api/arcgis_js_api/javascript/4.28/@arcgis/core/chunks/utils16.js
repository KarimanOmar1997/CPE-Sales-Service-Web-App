/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import e from"../Color.js";import"../symbols.js";import t from"../core/Collection.js";import"./typedArrayUtil.js";import n from"../core/Error.js";import{f as i,c as o}from"./date.js";import{r as s}from"./numberUtils.js";import{a as r}from"./PointSizeSplatAlgorithm.js";import{a}from"./scaleUtils.js";import l from"../renderers/visualVariables/SizeVariable.js";import{s as u}from"./spatialStatistics.js";import{v as m}from"./binningUtils.js";import{b as c,f,c as d,g as p}from"./layerUtils3.js";import y from"../smartMapping/statistics/classBreaks.js";import w from"../smartMapping/statistics/summaryStatistics.js";import{i as h,h as g,j as b,k as v}from"./utils2.js";import j from"../symbols/edges/SketchEdges3D.js";import S from"../symbols/edges/SolidEdges3D.js";import{g as z,c as D}from"./timeZoneUtils.js";import{getBackgroundColorTheme as x}from"../views/support/colorUtils.js";import U from"../symbols/MeshSymbol3D.js";import V from"../symbols/FillSymbol3DLayer.js";import T from"../symbols/SimpleFillSymbol.js";import k from"../symbols/PolygonSymbol3D.js";import L from"../symbols/ExtrudeSymbol3DLayer.js";import B from"../symbols/SimpleLineSymbol.js";import I from"../symbols/LineSymbol3D.js";import F from"../symbols/LineSymbol3DLayer.js";import M from"../symbols/PathSymbol3DLayer.js";import C from"../symbols/SimpleMarkerSymbol.js";import Z from"../symbols/PointSymbol3D.js";import A from"../symbols/IconSymbol3DLayer.js";import E from"../symbols/ObjectSymbol3DLayer.js";const P=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];async function R(e){const{layerAdapter:t,...i}=await async function(e){const{view:t}=e;if(!(e&&t&&e.layer))throw new n("outline:missing-parameters","'view' and 'layer' parameters are required");e.forBinning&&m(e,"outline");const{layer:i,...o}=e,s=e.forBinning?c:f,r=d(i,s,e.forBinning);if(!r)throw new n("outline:invalid-parameters","'layer' must be one of these types: "+p(s).join(", "));const a={layerAdapter:r,...o,view:t};await t.when();const l=null!=a.signal?{signal:a.signal}:null;if(await r.load(l),"polygon"!==r.geometryType)throw new n("outline:not-supported",`outline is not supported for geometryType: ${r.geometryType}`);return a}(e),o=await t.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...i});if(!o?.length)throw new n("outline:insufficient-info","No features are available to calculate statistics");const s=await u({features:o,geometryType:t.geometryType});if(!(s&&"avgSize"in s&&s.avgSize))throw new n("outline:insufficient-info","average polygon size is invalid");return function(e,t){const n=e.avgSize,i=a(1,t.spatialReference),o=P.map((e=>({size:e.width,value:Math.round(n/e.size*i)})));return o.sort(((e,t)=>e.value-t.value)),{visualVariables:[new l({target:"outline",valueExpression:"$view.scale",stops:o})],opacity:.25}}({...s,avgSize:s.avgSize},i.view)}const q=/^(\d+(\.\d+)?)\s*(%)$/i,N=[0,0,0,.4],Y=new Set(["hours","minutes","seconds"]),$=[...g.light,...g.dark];function W(e,t,n,s){if("string"==typeof e){const t=n.getField(e);if(t&&h(t))return t.alias||t.name}else if("number"==typeof e||e instanceof Date){const r=null!=t&&Y.has(t),a=o(r?"short-date-short-time":"short-date");if(s&&r){const t=n.layer,{timeZone:o}=z("preferredTimeZone"in t?t.preferredTimeZone:null,"datesInUnknownTimezone"in t&&t.datesInUnknownTimezone,s.timeZone,a,"date");return i(e,{...a,timeZone:o,timeZoneName:D})}return i(e,a)}return e}function G(e,t,n){return e+t>0&&0>e-t&&n<0?0:e}function O(e,t,n,i,o){const s="90-10"===n&&t?{min:t.classBreakInfos[0].maxValue,max:t.classBreakInfos[t.classBreakInfos.length-1].minValue,avg:null,stddev:null}:e,{avg:r,stddev:a,min:l,max:u}=s,m=H(s,!!i,o??!0);let c=m?m[0]:l,f=m?m[1]:u;return m?{minDataValue:c,maxDataValue:f,defaultValuesUsed:!0}:("above"===n?c=G(r,a,l):"below"===n&&(f=G(r,a,l)),{minDataValue:c,maxDataValue:f,defaultValuesUsed:!1})}function H(e,t,n){let i,o;const s=function(e){let t,n,i=e&&e.statistics;if(i||(i={}),null==i.min)if(e.isDate){const e=J();t=e[0],n=e[1]}else t=0,n=100;else if(i.min===i.max)if(e.isDate){const e=J(i.min);t=e[0],n=e[1]}else i.min<0?(t=2*i.min,n=0):i.min>0?(t=0,n=2*i.min):(t=0,n=100);return{min:null!=t?t:i.min,max:null!=n?n:i.max,defaultValuesUsed:null!=t||null!=n}}({statistics:e,isDate:t});return s.defaultValuesUsed?(i=s.min,o=s.max):!n||null!=e.avg&&e.stddev||(i=e.min,o=e.max),null!=i&&null!=o?[i,o]:null}function J(e){const t=("number"==typeof e?new Date(e):new Date).getUTCFullYear();let n=Date.UTC(t,0,1,12,0,0,0),i=Date.UTC(t,11,31,12,0,0,0);return"number"==typeof e&&(e<n&&(n=e),e>i&&(i=e)),[n,i]}function K(t,n){const i=[],o=t.length;for(let s=0;s<n;s++)i.push(new e(t[s%o]));return i}function Q({minDataValue:e,maxDataValue:t,defaultValuesUsed:n},i,o,s=!0){return n||"above"===o||"below"===o||"90-10"===o?ee(e,t,5):te(i,s)}function X(e,t){const{avg:n,stddev:i}=e,o=e.min,r=e.max;if(null==n||null==i){const[n,i]=H(e,t,!0);return ee(n,i,5)}const a=G(n,i,o),l=r-a,u=a-o,m=Math.max(l,u);return s([a-m,a-m/2,a,m/2+a,a+m],{strictBounds:!0})}function _(e,t){const{min:n,max:i}=t,[o,r,a,l,u]=e,m=null!=n&&o<n,c=null!=i&&u>i;if(null==n||null==i||!m&&!c)return e;const f=m?n:o,d=c?i:u;return s([f,m?f+(a-f)/2:r,a,c?a+(d-a)/2:l,d],{strictBounds:!0})}function ee(e,t,n){const i=(t-e)/(n-1),o=[e];for(let t=1;t<=n-2;t++)o.push(e+t*i);return o.push(t),s(o,{strictBounds:!0})}function te({min:e,max:t,avg:n,stddev:i},o=!0){if(null==e||null==t||null==n||null==i)return[];let r=n-i,a=n+i;r<e&&(r=e),a>t&&(a=t),o&&(n=r+(a-r)/2);let l=s([r,a],{strictBounds:!0});return r=l[0],a=l[1],l=[r,r+(n-r)/2,n,n+(a-n)/2,a],s(l,{strictBounds:!0})}function ne(e,t,n){switch(t){case"point":case"multipoint":return n?"noDataSize"in e?e.noDataSize:null:"size"in e?e.size:null;case"polyline":return n?"noDataWidth"in e?e.noDataWidth:null:"width"in e?e.width:null;case"polygon":return"size"in e?e.size:null;default:return}}function ie(e,t,n){switch(t){case"point":case"multipoint":case"polygon":{if(!("outline"in e))return null;const t={color:e.outline.color,width:e.outline.width};if(null!=n&&t.color){const e=t.color.clone();e.a=n,t.color=e}return t}default:return}}function oe(e,n){const{type:i,size:o,color:s,outline:r}=n;let a;switch(e){case"point":case"multipoint":if("2d"===i)a=new C({color:s,size:o,outline:{color:r.color,width:r.width}});else if("3d-flat"===i)a=new Z({symbolLayers:new t([new A({size:o,resource:{primitive:"circle"},material:{color:s},outline:{color:r.color,size:r.width}})])});else if(i?.includes("3d-volumetric")){const e="3d-volumetric-uniform"===i,r=new E({height:o,resource:{primitive:e?"sphere":"cylinder"},material:{color:s}});e||(r.width=n.widthAndDepth,r.depth=n.widthAndDepth),a=new Z({symbolLayers:new t([r])})}break;case"polyline":"2d"===i?a=new B({color:s,width:o}):"3d-flat"===i?a=new I({symbolLayers:new t([new F({size:o,material:{color:s}})])}):"3d-volumetric"===i&&(a=new I({symbolLayers:new t([new M({width:"number"==typeof o?o:parseFloat(o),height:"number"==typeof o?o:parseFloat(o),material:{color:s}})])}));break;case"polygon":"2d"===i?a=new T({color:s,outline:{color:r.color,width:r.width}}):"3d-flat"===i?a=new k({symbolLayers:new t([new V({material:{color:s},outline:{color:r.color,size:r.width}})])}):"3d-volumetric"===i&&(a=new k({symbolLayers:new t([new L({size:o,material:{color:s}})])}));break;case"mesh":{const e=n.meshInfo?.colorMixMode,i=n.meshInfo?.edgesType;a=new U({symbolLayers:new t([new V({material:{color:s,colorMixMode:e||null},edges:"solid"===i?new S({color:N}):"sketch"===i?new j({color:N}):null})])});break}}return a}function se(e,t,i){const o=function(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}({layer:e,fields:t});if(o.length)return new n(i,"Unknown fields: "+o.join(", ")+". You can only use fields defined in the layer schema");const s=function(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsRenderer}))}({layer:e,fields:t});return s.length?new n(i,"Unsupported fields: "+s.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}async function re(e,t){const n={layer:e.layer,view:e.view,signal:e.signal},[i,o]=await Promise.all([y(e).catch(de),t?R(n).catch(de):null]),s=H({min:i?.minValue,max:i?.maxValue,avg:null,stddev:null},!1,!1);return{result:s?await y({...e,classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:s[0],maxValue:s[1],normalizationTotal:s[0]+s[1]}):i,defaultValuesUsed:!!s,outlineResult:o}}function ae(e){return w(e)}function le(e,t){let{minSize:n,maxSize:i}=e;return"height"===t&&(n=((i-n)/2+n)/4.6,i*=2),{minSize:n,maxSize:i}}function ue(e){return q.test(e)}function me(e){if(null==e)return;const t=e.match(q),n=Number(t[1]);return"%"===t[3]?new r({scaleFactor:n/100}):void 0}function ce(e,t,n,i){e.startTime=t instanceof Date?t.getTime():t,e.endTime=n instanceof Date?n.getTime():n,e.units=i,e.field="string"==typeof t?t:"string"==typeof n?n:null}async function fe(e,t){let n=null,i=null;if(!e&&!t)return{basemapId:n,basemapTheme:i};if(t&&(i=await x(t),e||(e=t.map?.basemap)),e&&(n=b(e,$,!1),n&&!i)){const e=v(n);null!=e&&(i=e)}return!n&&i&&(n="dark"===i?"dark-gray":"gray"),{basemapId:n,basemapTheme:i}}function de(e){const t=e.name?.toLowerCase();if(!t||t?.includes(":insufficient-info")||t?.includes(":insufficient-data"))return null;throw e}export{K as a,fe as b,Q as c,ae as d,re as e,de as f,O as g,me as h,W as i,ue as j,H as k,ee as l,te as m,oe as n,R as o,ne as p,ie as q,le as r,X as s,_ as t,ce as u,se as v};
