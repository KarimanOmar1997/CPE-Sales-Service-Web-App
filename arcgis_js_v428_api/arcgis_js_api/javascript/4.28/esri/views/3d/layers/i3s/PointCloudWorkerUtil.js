// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../renderers/PointCloudClassBreaksRenderer ../../../../renderers/PointCloudStretchRenderer ../../../../renderers/PointCloudUniqueValueRenderer ./I3SBinaryReader ./LEPCC".split(" "),function(q,D,z,A,B,v,C){function x(a,c){const h=new Float64Array(c);for(let l=0;l<c;l++)h[l]=a[3*l+2];return h}function w(a){switch(a){default:case null:case "none":return c=>c;case "low-four-bit":return c=>c&15;case "high-four-bit":return c=>(c&240)>>4;case "absolute-value":return c=>
Math.abs(c);case "modulo-ten":return c=>c%10}}function y(a){let c=0;for(const h of a||[])c|=1<<h;return c}q.elevationFromPositions=x;q.evaluateRenderer=function(a,c,h,l){const {rendererJSON:m,isRGBRenderer:n}=a;var g=a=null;if(c&&n)a=c;else if(c&&"pointCloudUniqueValueRenderer"===m?.type){g=B.fromJSON(m);var b=g.colorUniqueValueInfos;a=new Uint8Array(3*l);var f=w(g.fieldTransformType);for(var e=0;e<l;e++){var k=(f?f(c[e]):c[e])+"";for(var d=0;d<b.length;d++)if(b[d].values.includes(k)){a[3*e]=b[d].color.r;
a[3*e+1]=b[d].color.g;a[3*e+2]=b[d].color.b;break}}}else if(c&&"pointCloudStretchRenderer"===m?.type)for(g=A.fromJSON(m),b=g.stops,a=new Uint8Array(3*l),f=w(g.fieldTransformType),e=0;e<l;e++)if(k=f?f(c[e]):c[e],d=b.length-1,k<b[0].value)a[3*e]=b[0].color.r,a[3*e+1]=b[0].color.g,a[3*e+2]=b[0].color.b;else if(k>=b[d].value)a[3*e]=b[d].color.r,a[3*e+1]=b[d].color.g,a[3*e+2]=b[d].color.b;else for(d=1;d<b.length;d++){if(k<b[d].value){k=(k-b[d-1].value)/(b[d].value-b[d-1].value);a[3*e]=b[d].color.r*k+b[d-
1].color.r*(1-k);a[3*e+1]=b[d].color.g*k+b[d-1].color.g*(1-k);a[3*e+2]=b[d].color.b*k+b[d-1].color.b*(1-k);break}}else if(c&&"pointCloudClassBreaksRenderer"===m?.type)for(g=z.fromJSON(m),b=g.colorClassBreakInfos,a=new Uint8Array(3*l),f=w(g.fieldTransformType),e=0;e<l;e++)for(k=f?f(c[e]):c[e],d=0;d<b.length;d++){if(k>=b[d].minValue&&k<=b[d].maxValue){a[3*e]=b[d].color.r;a[3*e+1]=b[d].color.g;a[3*e+2]=b[d].color.b;break}}else a=(new Uint8Array(3*l)).fill(255);if(h&&g?.colorModulation)for(c=g.colorModulation.minValue,
g=g.colorModulation.maxValue,b=0;b<l;b++)f=h[b],f=f>=g?1:f<=c?.3:.3+.7*(f-c)/(g-c),a[3*b]*=f,a[3*b+1]*=f,a[3*b+2]*=f;return a};q.filterInPlace=function(a,c,h,l,m){const n=a.length/3;let g=0;for(let p=0;p<n;p++){let r=!0;for(let t=0;t<l.length&&r;t++){var {filterJSON:b}=l[t],f=m[t].values[p];switch(b.type){case "pointCloudValueFilter":var e="exclude"===b.mode;b.values.includes(f)===e&&(r=!1);break;case "pointCloudBitfieldFilter":e=y(b.requiredSetBits);b=y(b.requiredClearBits);if((f&e)!==e||0!==(f&
b))r=!1;break;case "pointCloudReturnFilter":var k=f&15,d=f>>>4&15;f=1<d;e=1===k;k=k===d;d=!1;for(const u of b.includedReturns)if("last"===u&&k||"firstOfMany"===u&&e&&f||"lastOfMany"===u&&k&&f||"single"===u&&!f){d=!0;break}d||(r=!1)}}r&&(h[g]=p,a[3*g]=a[3*p],a[3*g+1]=a[3*p+1],a[3*g+2]=a[3*p+2],c[3*g]=c[3*p],c[3*g+1]=c[3*p+1],c[3*g+2]=c[3*p+2],g++)}return g};q.getAttributeValues=function(a,c,h){return a?.attributeInfo.useElevation?c?x(c,h):null:a?.attributeInfo.storageInfo?v.readBinaryAttribute(a.attributeInfo.storageInfo,
a.buffer,h):null};q.readGeometry=function(a,c){if(null==a.encoding||""===a.encoding){a=v.createGeometryIndexFromSchema(c,a);if(null==a.vertexAttributes.position)return;c=v.createTypedView(c,a.vertexAttributes.position);var h=a.header.fields;a=[h.offsetX,h.offsetY,h.offsetZ];h=[h.scaleX,h.scaleY,h.scaleZ];const l=c.length/3,m=new Float64Array(3*l);for(let n=0;n<l;n++)m[3*n]=c[3*n]*h[0]+a[0],m[3*n+1]=c[3*n+1]*h[1]+a[1],m[3*n+2]=c[3*n+2]*h[2]+a[2];return m}if("lepcc-xyz"===a.encoding)return C.decodeXYZ(c).result};
Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});