// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require exports ../../../Color ../../../symbols ../../../renderers/support/numberUtils ../../../symbols/support/cimSymbolUtils ../../../symbols/support/utils ./utils ../../support/widgetUtils ../../../support/themeUtils ../../../symbols/SimpleMarkerSymbol ../../../symbols/SimpleLineSymbol".split(" "),function(E,z,M,F,q,N,D,G,aa,O,P,Q){function R(a,b){const c=a.length-1;return a.map((e,g)=>G.createStopLabel(e,g,c,b))}function S(a,b){a=a?.authoringInfo;const c="univariate-color-size"===a?.type;
let e=[12,30];if(c){const g=b[0],m=b[b.length-1];e=b.map(k=>12+(k-g)/(m-g)*18)}c&&"below"===a?.univariateTheme&&e.reverse();return e}function T(a,b){const c=a.classBreakInfos,e=c.length;b=2>e||!(2<=b)?c[0].symbol.clone():c[e-1].symbol.clone();a.visualVariables.some(g=>"color"===g.type)&&(b.type.includes("3d")?H(b):I(b));return b}async function U(a,b){if("flow"===a.type)return G.getSymbolForFlowRenderer(a,b);if("pie-chart"===a.type)return new P({color:null,outline:a.outline?.width?a.outline:new Q});
let c=null,e=null;"simple"===a.type?c=a.symbol:"class-breaks"===a.type?(c=(a=a.classBreakInfos)&&a[0]&&a[0].symbol,e=1<a.length):"unique-value"===a.type&&(a=a.uniqueValueInfos,c=a?.[0]?.symbol,e=null!=a&&1<a.length);if(!c||V(c))return null;c=c.clone();if(b||e)c.type.includes("3d")?H(c):I(c);return c}function V(a){return a?F.isSymbol3D(a)?a.symbolLayers?a.symbolLayers.some(b=>b&&"fill"===b.type):!1:a.type.includes("fill"):!1}function H(a){"line-3d"===a.type?a.symbolLayers.forEach(b=>{b.material={color:v}}):
a.symbolLayers.forEach(b=>{"icon"!==b.type||b.resource?.href?b.material={color:J}:(b.material={color:K},b.outline={color:v,size:1.5})})}function I(a){const b=O.isDarkTheme();if("cim"===a.type)N.applyCIMSymbolColor(a,new M(J));else if(a.type.includes("line"))a.color=v;else if(a.color=b?v:K,"simple-marker"===a.type)a.outline?"#ffffff"===a.outline?.color?.toHex()&&(a.outline.color=v):a.outline={color:v,width:1.5}}async function W(a,b,c,e){const g=(await new Promise((f,h)=>E(["../../../renderers/visualVariables/support/visualVariableUtils"],
f,h))).getSizeRangeAtScale(a,c,e),m=g&&L(g);if(g&&m){var k=m.map(f=>{const h=g.minSize,d=g.maxSize,n=a.minDataValue,l=a.maxDataValue;return f<=h?n:f>=d?l:(f-h)/(d-h)*(l-n)+n});k=q.round(k);for(let f=1;f<k.length-1;f++){const h=await X(a,b,k[f],k[f-1],c,e);h&&(k[f]=h[0],m[f]=h[1])}return k}}function L(a){const b=a.minSize;a=(a.maxSize-b)/4;const c=[];for(let e=0;5>e;e++)c.push(b+a*e);return c}async function X(a,b,c,e,g,m){const k=await w(a,b,c,g,m);e=await w(a,b,e,g,m);var f=q.numDigits(c),h=f.fractional,
d=f.integer;let n=f=null;0<c&&1>c&&(f=10**h,c*=f,d=q.numDigits(c).integer);for(h=d-1;0<=h;h--){var l=10**h;d=Math.floor(c/l)*l;l*=Math.ceil(c/l);null!=f&&(d/=f,l/=f);let r=(d+l)/2;[,r]=q.round([d,r,l],{indexes:[1]});const x=await w(a,b,d,g,m),y=await w(a,b,l,g,m),A=await w(a,b,r,g,m),B=q.percentChange(k,x,e,null),C=q.percentChange(k,y,e,null),p=q.percentChange(k,A,e,null);let t=20>=B.previous,u=20>=C.previous;t&&u&&(B.previous<=C.previous?(t=!0,u=!1):(u=!0,t=!1));t?n=[d,x]:u?n=[l,y]:20>=p.previous&&
(n=[r,A]);if(n)break}return n}async function w(a,b,c,e,g){const {getSize:m}=await new Promise((k,f)=>E(["../../../renderers/visualVariables/support/visualVariableUtils"],k,f));return m(a,c,{scale:e,view:g,shape:"simple-marker"===b.type?b.style:null})}function Y(a,b){a=a.clone();if(F.isSymbol3D(a))D.isVolumetricSymbol(a)||a.symbolLayers.forEach(c=>{"fill"!==c.type&&(c.size=b)});else if("esri.symbols.SimpleMarkerSymbol"===a.declaredClass)a.size=b;else if("esri.symbols.PictureMarkerSymbol"===a.declaredClass){const c=
a.width,e=a.height;a.height=b;a.width=c/e*b}else"esri.symbols.SimpleLineSymbol"===a.declaredClass?a.width=b:"esri.symbols.TextSymbol"===a.declaredClass&&a.font&&(a.font.size=b);return a}const K=[255,255,255],J=[200,200,200],v=[128,128,128];z.getRampStops=async function(a,b,c,e,g,m,k){var f=b.legendOptions?.customValues;const h=k||await U(a,c);c=b.stops;var d=null!=b.minSize&&null!=b.maxSize;k=c&&1<c.length;var n=!!b.target;if(h&&(f||d||k&&!n)){var l=D.isVolumetricSymbol(h),r=!1,x=d=null;d=l&&!k?q.round([b.minDataValue,
b.maxDataValue]):f??await W(b,h,e,g?.type);f=a?.authoringInfo;var y=(n="univariate-color-size"===f?.type)&&"above-and-below"===f?.univariateTheme;!d&&k&&(d=c.map(p=>p.value),r=c.some(p=>!!p.label),"flow"===a.type&&(d=q.round(d)),r&&(x=c.map(p=>p.label)));l&&null!=d&&2<d?.length&&!y&&(d=[d[0],d[d.length-1]]);if(!d)return null;n&&5!==d?.length&&(d=L({minSize:d[0],maxSize:d[d.length-1]}));var A=l?S(a,d):null,B=D.getSymbolOutlineSize(h),C=r?null:R(d,m);return(await Promise.all(d.map(async(p,t)=>{const u=
l?A[t]:await w(b,h,p,e,g?.type),Z=Y(y&&"class-breaks"===a.type?T(a,t):h,u);return{value:p,symbol:Z,label:r?x[t]:C[t],size:u,outlineSize:B}}))).reverse()}};z.realWorldMaxSize=30;z.realWorldMinSize=12;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});