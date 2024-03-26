// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["../enums","./BaseBucket","../../webgl/TurboLine"],function(E,F,G){class H extends F{constructor(a,d,b,e,c){super(a,d,b);this.type=E.BucketType.LINE;this._tessellationOptions={pixelCoordRatio:8,halfWidth:0,offset:0};this._patternMap=new Map;this.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_ddValues:null};this.tessellationProperties._lineVertexBuffer=e;this.tessellationProperties._lineIndexBuffer=c;this._lineTessellator=new G.LineTessellation(I(this.tessellationProperties),
J(this.tessellationProperties),a.canUseThinTessellation)}get lineIndexStart(){return this._lineIndexStart}get lineIndexCount(){return this._lineIndexCount}getResources(a,d,b){a=this.layer;const e=this.zoom,c=a.getPaintProperty("line-pattern"),g=a.getPaintProperty("line-dasharray"),h=a.getLayoutProperty("line-cap");if(c||g){b=h?.getValue(e)||0;var l=h?.isDataDriven,p=c?.isDataDriven;if(p||g?.isDataDriven)for(var n of this._features)p?d(c.getValue(e,n)):d(this._getDashArrayKey(n,e,a,g,l,h,b));else c?
d(c.getValue(e)):g&&(n=g.getValue(e),d(a.getDashKey(n,b)))}}processFeatures(a){this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index;this._lineIndexCount=0;const d=this.layer,b=this.zoom;var e=this._features;const c=this._tessellationOptions,{hasDataDrivenLine:g,lineMaterial:h}=d;a&&a.setExtent(this.layerExtent);var l=d.getPaintProperty("line-pattern"),p=d.getPaintProperty("line-dasharray"),n=l?.isDataDriven,r=p?.isDataDriven;var f=d.getLayoutProperty("line-cap");const q=f?.isDataDriven?
f:null,y=q?null:d.getLayoutValue("line-cap",b),K=y||0,L=!!q;f=d.getLayoutProperty("line-join");const t=f?.isDataDriven?f:null,z=t?null:d.getLayoutValue("line-join",b);f=d.getLayoutProperty("line-miter-limit");const u=f?.isDataDriven?f:null,A=u?null:d.getLayoutValue("line-miter-limit",b);f=d.getLayoutProperty("line-round-limit");const v=f?.isDataDriven?f:null,B=v?null:d.getLayoutValue("line-round-limit",b);f=d.getPaintProperty("line-width");const w=f?.isDataDriven?f:null,C=w?null:d.getPaintValue("line-width",
b);f=d.getPaintProperty("line-offset");const D=(f=f?.isDataDriven?f:null)?null:d.getPaintValue("line-offset",b);if(n||r){var m=[];for(const k of e){e=n?l.getValue(b,k):this._getDashArrayKey(k,b,d,p,L,q,K);e=this._spriteInfo[e];if(!e?.rect)continue;r=h.encodeAttributes(k,b,d,e);const x=k.getGeometry(a);m.push({ddAttributes:r,page:e.page,cap:q?q.getValue(b,k):y,join:t?t.getValue(b,k):z,miterLimit:u?u.getValue(b,k):A,roundLimit:v?v.getValue(b,k):B,halfWidth:.5*(w?w.getValue(b,k):C),offset:f?f.getValue(b,
k):D,geometry:x})}m.sort((k,x)=>k.page-x.page);c.textured=!0;for(const {ddAttributes:k,page:x,cap:M,join:N,miterLimit:O,roundLimit:P,halfWidth:Q,offset:R,geometry:S}of m)c.capType=M,c.joinType=N,c.miterLimit=O,c.roundLimit=P,c.halfWidth=Q,c.offset=R,this._processFeature(S,k,x)}else{if(l&&(n=l.getValue(b),!this._spriteInfo[n]?.rect))return;c.textured=!(!l&&!p);c.capType=y;c.joinType=z;c.miterLimit=A;c.roundLimit=B;c.halfWidth=.5*C;c.offset=D;for(m of e)l=g?h.encodeAttributes(m,b,d):null,q&&(c.capType=
q.getValue(b,m)),t&&(c.joinType=t.getValue(b,m)),u&&(c.miterLimit=u.getValue(b,m)),v&&(c.roundLimit=v.getValue(b,m)),w&&(c.halfWidth=.5*w.getValue(b,m)),f&&(c.offset=f.getValue(b,m)),p=m.getGeometry(a),this._processFeature(p,l)}}serialize(){var a=6+this.layerUIDs.length;a+=this.tessellationProperties._lineVertexBuffer.array.length;a+=this.tessellationProperties._lineIndexBuffer.array.length;a+=3*this._patternMap.size+1;a=new Uint32Array(a);var d=new Int32Array(a.buffer);let b=0;a[b++]=this.type;a[b++]=
this.layerUIDs.length;for(var e=0;e<this.layerUIDs.length;e++)a[b++]=this.layerUIDs[e];a[b++]=this._lineIndexStart;a[b++]=this._lineIndexCount;e=this._patternMap;const c=e.size;a[b++]=c;if(0<c)for(const [g,[h,l]]of e)a[b++]=g,a[b++]=h,a[b++]=l;a[b++]=this.tessellationProperties._lineVertexBuffer.array.length;for(e=0;e<this.tessellationProperties._lineVertexBuffer.array.length;e++)d[b++]=this.tessellationProperties._lineVertexBuffer.array[e];a[b++]=this.tessellationProperties._lineIndexBuffer.array.length;
for(d=0;d<this.tessellationProperties._lineIndexBuffer.array.length;d++)a[b++]=this.tessellationProperties._lineIndexBuffer.array[d];return a.buffer}_processFeature(a,d,b){if(a){var e=a.length;for(let c=0;c<e;c++)this._processGeometry(a[c],d,b)}}_processGeometry(a,d,b){if(!(2>a.length)){for(var e=a[0],c=1,g,h;c<a.length;)g=a[c].x-e.x,h=a[c].y-e.y,1E-6>g*g+h*h?a.splice(c,1):(e=a[c],++c);2>a.length||(c=this.tessellationProperties._lineIndexBuffer,e=3*c.index,this._tessellationOptions.initialDistance=
0,this._tessellationOptions.wrapDistance=65535,this.tessellationProperties._ddValues=d,this._lineTessellator.tessellate(a,this._tessellationOptions),a=3*c.index-e,void 0!==b&&(d=this._patternMap,(c=d.get(b))?c[1]+=a:d.set(b,[e+this._lineIndexCount,a])),this._lineIndexCount+=a)}}_getDashArrayKey(a,d,b,e,c,g,h){c=c?g.getValue(d,a):h;a=e.getValue(d,a);return b.getDashKey(a,c)}}const I=a=>(d,b,e,c,g,h,l,p,n,r,f)=>{a._lineVertexBuffer.add(d,b,l,p,e,c,g,h,n,r,f,a._ddValues);return a._lineVertexBuffer.index-
1},J=a=>(d,b,e)=>{a._lineIndexBuffer.add(d,b,e)};return H});