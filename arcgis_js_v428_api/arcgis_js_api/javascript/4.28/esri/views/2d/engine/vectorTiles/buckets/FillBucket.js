// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../core/ArrayPool ../../../../../chunks/earcut ../../../../../geometry/libtess ../../../../../geometry/support/TileClipper ../enums ./BaseBucket".split(" "),function(z,A,C,y,D,E){class B extends E{constructor(a,b,c,d,q,g,e){super(a,b,c);this.type=D.BucketType.FILL;this._patternMap=new Map;this._fillVertexBuffer=d;this._fillIndexBuffer=q;this._outlineVertexBuffer=g;this._outlineIndexBuffer=e}get fillIndexStart(){return this._fillIndexStart}get fillIndexCount(){return this._fillIndexCount}get outlineIndexStart(){return this._outlineIndexStart}get outlineIndexCount(){return this._outlineIndexCount}getResources(a,
b,c){a=this.zoom;if(c=this.layer.getPaintProperty("fill-pattern"))if(c.isDataDriven)for(const d of this._features)b(c.getValue(a,d),!0);else b(c.getValue(a),!0)}processFeatures(a){this._fillIndexStart=3*this._fillIndexBuffer.index;this._fillIndexCount=0;this._outlineIndexStart=3*this._outlineIndexBuffer.index;this._outlineIndexCount=0;const b=this.layer,c=this.zoom,{fillMaterial:d,outlineMaterial:q,hasDataDrivenFill:g,hasDataDrivenOutline:e}=b;a&&a.setExtent(this.layerExtent);var n=b.getPaintProperty("fill-pattern"),
k=n?.isDataDriven;let h=!n&&b.getPaintValue("fill-antialias",c);if(b.outlineUsesFillColor){if(h&&!b.hasDataDrivenOpacity){var p=b.getPaintValue("fill-opacity",c),f=b.getPaintValue("fill-opacity",c+1);1>p&&1>f&&(h=!1)}h&&!b.hasDataDrivenColor&&(p=b.getPaintValue("fill-color",c),f=b.getPaintValue("fill-color",c+1),1>p[3]&&1>f[3]&&(h=!1))}f=this._features;p=a?.validateTessellation;if(k){var l=[];for(var m of f){k=n.getValue(c,m);k=this._spriteInfo[k];if(!k?.rect)continue;f=d.encodeAttributes(m,c,b,k);
const t=h&&e?q.encodeAttributes(m,c,b):[],w=m.getGeometry(a);l.push({ddFillAttributes:f,ddOutlineAttributes:t,page:k.page,geometry:w});l.sort((x,r)=>x.page-r.page);for(const {ddFillAttributes:x,ddOutlineAttributes:r,page:v,geometry:u}of l)this._processFeature(u,h,b.outlineUsesFillColor,x,r,p,v)}}else for(l of f)n=g?d.encodeAttributes(l,c,b):null,m=h&&e?q.encodeAttributes(l,c,b):null,k=l.getGeometry(a),this._processFeature(k,h,b.outlineUsesFillColor,n,m,p)}serialize(){var a=10+this.layerUIDs.length;
a+=this._fillVertexBuffer.array.length;a+=this._fillIndexBuffer.array.length;a+=this._outlineVertexBuffer.array.length;a+=this._outlineIndexBuffer.array.length;a+=3*this._patternMap.size+1;a=new Uint32Array(a);var b=new Int32Array(a.buffer);let c=0;a[c++]=this.type;a[c++]=this.layerUIDs.length;for(var d=0;d<this.layerUIDs.length;d++)a[c++]=this.layerUIDs[d];a[c++]=this._fillIndexStart;a[c++]=this._fillIndexCount;a[c++]=this._outlineIndexStart;a[c++]=this._outlineIndexCount;d=this._patternMap;const q=
d.size;a[c++]=q;if(0<q)for(const [g,[e,n]]of d)a[c++]=g,a[c++]=e,a[c++]=n;a[c++]=this._fillVertexBuffer.array.length;for(d=0;d<this._fillVertexBuffer.array.length;d++)b[c++]=this._fillVertexBuffer.array[d];a[c++]=this._fillIndexBuffer.array.length;for(d=0;d<this._fillIndexBuffer.array.length;d++)a[c++]=this._fillIndexBuffer.array[d];a[c++]=this._outlineVertexBuffer.array.length;for(d=0;d<this._outlineVertexBuffer.array.length;d++)b[c++]=this._outlineVertexBuffer.array[d];a[c++]=this._outlineIndexBuffer.array.length;
for(b=0;b<this._outlineIndexBuffer.array.length;b++)a[c++]=this._outlineIndexBuffer.array[b];return a.buffer}_processFeature(a,b,c,d,q,g,e){if(a){var n=a.length,k=!q||0===q.length;if(b&&(!c||k))for(b=0;b<n;b++)this._processOutline(a[b],q);for(q=0;q<n;q++)if(b=B._area(a[q]),32<b){void 0!==h&&this._processFill(a,h,d,g,e);var h=[q]}else-32>b&&void 0!==h&&h.push(q);void 0!==h&&this._processFill(a,h,d,g,e)}}_processOutline(a,b){const c=this._outlineVertexBuffer,d=this._outlineIndexBuffer,q=d.index;var g;
let e,n;const k=new y.Point(0,0),h=new y.Point(0,0),p=new y.Point(0,0);let f=-1,l=-1;var m=-1;let t=-1,w=-1,x=!1,r=a.length;if(!(2>r)){var v=a[0];for(g=a[r-1];r&&g.isEqual(v);)--r,g=a[r-1];if(!(2>r-0)){for(v=0;v<r;++v){0===v?(g=a[r-1],e=a[0],n=a[1],k.assignSub(e,g),k.normalize(),k.rightPerpendicular()):(g=e,e=n,n=v!==r-1?a[v+1]:a[0],k.assign(h));g=this._isClipEdge(g,e);-1===t&&(x=g);h.assignSub(n,e);h.normalize();h.rightPerpendicular();m=k.x*h.y-k.y*h.x;p.assignAdd(k,h);p.normalize();var u=-p.x*-k.x+
-p.y*-k.y;u=Math.abs(0!==u?1/u:1);8<u&&(u=8);0<=m?(m=c.add(e.x,e.y,k.x,k.y,0,1,b),-1===t&&(t=m),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),l=c.add(e.x,e.y,u*-p.x,u*-p.y,0,-1,b),-1===w&&(w=l),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),f=l,l=m,m=c.add(e.x,e.y,p.x,p.y,0,1,b),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),l=c.add(e.x,e.y,h.x,h.y,0,1,b)):(m=c.add(e.x,e.y,u*p.x,u*p.y,0,1,b),-1===t&&(t=m),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),l=c.add(e.x,e.y,-k.x,-k.y,0,-1,b),-1===w&&(w=l),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),f=l,l=m,m=
c.add(e.x,e.y,-p.x,-p.y,0,-1,b),0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m),f=c.add(e.x,e.y,-h.x,-h.y,0,-1,b));0<=f&&0<=l&&0<=m&&!g&&d.add(f,l,m)}0<=f&&0<=l&&0<=t&&!x&&d.add(f,l,t);0<=f&&0<=t&&0<=w&&!x&&d.add(f,w,t);this._outlineIndexCount+=3*(d.index-q)}}}_processFill(a,b,c,d,q){d=!0;var g;1<b.length&&(g=[]);var e=0;for(var n of b)0!==e&&g.push(e),e+=a[n].length;n=2*e;e=z.acquire();for(var k of b){const h=a[k],p=h.length;for(let f=0;f<p;++f)e.push(h[f].x,h[f].y)}k=A.earcut(e,g,2);if(d&&0<A.earcut.deviation(e,
g,2,k)){n=b.map(f=>a[f].length);const {buffer:h,vertexCount:p}=C.triangulate(e,n);if(0<p){n=this._fillVertexBuffer.index;for(b=0;b<p;b++)this._fillVertexBuffer.add(h[2*b],h[2*b+1],c);for(c=0;c<p;c+=3)b=n+c,this._fillIndexBuffer.add(b,b+1,b+2);void 0!==q&&(c=this._patternMap,(n=c.get(q))?n[1]+=p:c.set(q,[this._fillIndexStart+this._fillIndexCount,p]));this._fillIndexCount+=p}}else if(b=k.length,0<b){d=this._fillVertexBuffer.index;for(g=0;g<n;)this._fillVertexBuffer.add(e[g++],e[g++],c);for(c=0;c<b;)this._fillIndexBuffer.add(d+
k[c++],d+k[c++],d+k[c++]);void 0!==q&&(c=this._patternMap,(n=c.get(q))?n[1]+=b:c.set(q,[this._fillIndexStart+this._fillIndexCount,b]));this._fillIndexCount+=b}z.release(e)}_isClipEdge(a,b){return a.x===b.x?-64>=a.x||4160<=a.x:a.y===b.y?-64>=a.y||4160<=a.y:!1}static _area(a){let b=0;const c=a.length-1;for(let d=0;d<c;d++)b+=(a[d].x-a[d+1].x)*(a[d].y+a[d+1].y);b+=(a[c].x-a[0].x)*(a[c].y+a[0].y);return.5*b}}return B});