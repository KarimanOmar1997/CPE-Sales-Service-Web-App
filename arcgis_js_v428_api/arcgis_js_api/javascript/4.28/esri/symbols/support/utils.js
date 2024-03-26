// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require exports ../../Color ../../symbols ../../core/asyncUtils ../../core/has ../../core/screenUtils ../../chunks/vec3f64 ../../layers/effects/jsonUtils ./cimSymbolUtils ./gfxUtils ./Symbol3DMaterial".split(" "),function(t,f,l,h,u,J,v,w,x,y,z,A){function B(a){a=a.symbolLayers;if(!a)return null;let b=null;a.forEach(c=>{"object"===c.type&&c.resource?.href||(b="water"===c.type?c.color:c.material?c.material.color:null)});return b?new l(b):null}function k(a,b){if(null==b||null==a)return a;a=a.toRgba();
a[3]*=b;return new l(a)}function C(a,b,c){if(a=a.symbolLayers){var e=d=>{b=b??d??(null!=c?D:null);return k(b,c)};a.forEach(d=>{if("object"!==d.type||!d.resource?.href||b)if("water"===d.type)d.color=e(d.color);else{const m=e(null!=d.material?d.material.color:null);null==d.material?d.material=new A.Symbol3DMaterial({color:m}):d.material.color=m;null!=c&&"outline"in d&&null!=d.outline?.color&&(d.outline.color=k(d.outline.color,c))}})}}async function E(a,b){(a=a.symbolLayers)&&await u.forEach(a,async c=>
F(c,b))}async function F(a,b){switch(a.type){case "extrude":a.size="number"===typeof b[2]?b[2]:0;break;case "icon":case "line":case "text":b=q(b);null!=b&&(a.size=b);break;case "path":const c=r(b,w.ONES,[a.width,void 0,a.height]);a.width=n(b[0],a.width,1,c);a.height=n(b[2],a.height,1,c);break;case "object":await G(a,b)}}function q(a){for(const b of a)if("number"===typeof b)return b;return null}async function G(a,b){const {resourceSize:c,symbolSize:e}=await H(a),d=r(b,c,e);a.width=n(b[0],e[0],c[0],
d);a.depth=n(b[1],e[1],c[1],d);a.height=n(b[2],e[2],c[2],d)}function r(a,b,c){for(let e=0;3>e;e++){const d=a[e];switch(d){case "symbol-value":return a=c[e],null!=a?a/b[e]:1;case "proportional":break;default:if(d&&b[e])return d/b[e]}}return 1}async function H(a){var {computeObjectLayerResourceSize:b}=await new Promise((p,I)=>t(["./symbolLayerUtils"],p,I));b=await b(a,10);const {width:c,height:e,depth:d}=a;a=[c,d,e];let m=1;for(var g=0;3>g;g++){const p=a[g];if(null!=p){m=p/b[g];break}}for(g=0;3>g;g++)null==
a[g]&&(a[g]=b[g]*m);return{resourceSize:b,symbolSize:a}}function n(a,b,c,e){switch(a){case "proportional":return c*e;case "symbol-value":return null!=b?b:c;default:return a}}const D=new l("white");f.applyColorToSymbol=function(a,b,c){if(a&&(b||null!=c))if(b&&(b=new l(b)),h.isSymbol3D(a))C(a,b,c);else if(h.isSymbol2D(a)){if(b=b??a.color)a.color=k(b,c);null!=c&&"outline"in a&&a.outline?.color&&(a.outline.color=k(a.outline.color,c))}};f.applyOpacityToColor=k;f.applyRotationToSymbol=function(a,b,c){a&&
null!=b&&(h.isSymbol3D(a)?(a=a.symbolLayers)&&a.forEach(e=>{if(e&&"object"===e.type)switch(c){case "tilt":e.tilt=b;break;case "roll":e.roll=b;break;default:e.heading=b}}):!h.isSymbol2D(a)||"simple-marker"!==a.type&&"picture-marker"!==a.type&&"text"!==a.type||(a.angle=b))};f.applySizesToSymbol=async function(a,b){if(a&&b){if(h.isSymbol3D(a))return E(a,b);if(h.isSymbol2D(a)&&(b=q(b),null!=b))switch(a.type){case "simple-marker":a.size=b;break;case "picture-marker":const c=a.width/a.height;1<c?(a.width=
b,a.height=b*c):(a.width=b*c,a.height=b);break;case "simple-line":a.width=b;break;case "text":a.font.size=b}}};f.fetchWebStyleSymbol=async function(a,b){const c=await a.fetchSymbol(b);return c?c:a.fetchCIMSymbol(b)};f.getCSSFilterFromEffectList=function(a){if(!a)return null;a=a.effects.filter(b=>"bloom"!==b.type).map(b=>b.toJSON());return x.effectFunctionsFromJSON(a)};f.getColorFromSymbol=function(a,b){if(!a)return null;let c=null;h.isSymbol3D(a)?c=B(a):h.isSymbol2D(a)&&(c="cim"===a.type?y.getCIMSymbolColor(a):
a.color?new l(a.color):null);return c?k(c,b):null};f.getIconHref=function(a){return a.resource?.href??""};f.getSymbolOutlineSize=function(a){return a?h.isSymbol3D(a)?(a=(a=a.symbolLayers?.at(-1))&&"outline"in a?a?.outline?.size:void 0,null!=a?a:0):v.px2pt(z.getStroke(a)?.width):0};f.isVolumetricSymbol=function(a){if(null==a||!("symbolLayers"in a)||null==a.symbolLayers)return!1;switch(a.type){case "point-3d":return a.symbolLayers.some(b=>"object"===b.type);case "line-3d":return a.symbolLayers.some(b=>
"path"===b.type);case "polygon-3d":return a.symbolLayers.some(b=>"object"===b.type||"extrude"===b.type);default:return!1}};f.symbolHasExtrudeSymbolLayer=function(a){return null!=a&&"polygon-3d"===a.type&&a.symbolLayers.some(b=>"extrude"===b.type)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});