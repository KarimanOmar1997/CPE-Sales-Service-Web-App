// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../../geometry/GeometryCursor ../../definitions ../../enums ../../number ../../TurboLine ../../materialKey/MaterialKey ./templateUtils".split(" "),function(u,v,w,h,x,k,y){const z=(b,c,a)=>(e,d,l,m,p,f,n,g,q,r,t)=>{l=h.i1616to32(t,Math.ceil(16*b._halfWidth));n=h.i8888to32(Math.round(16*n),Math.round(16*g),Math.round(16*q),Math.round(16*r));p=h.i8888to32(16*p,16*f,0,b._bitset);f=b.out;f.vertexBounds(e,d,c,a);f.vertexWrite(h.i1616to32(8*e,8*d));f.vertexWrite(b.id);f.vertexWrite(b._fillColor);
f.vertexWrite(n);f.vertexWrite(l);f.vertexWrite(b._tl);f.vertexWrite(b._br);f.vertexWrite(p);f.vertexWrite(h.i1616to32(Math.ceil(16*b._halfReferenceWidth),0));f.vertexWrite(b.minMaxZoom);f.vertexEnd();return b.offset+b.vertexCount++},A=(b,c,a)=>(e,d,l,m,p,f,n,g,q,r,t)=>{l=h.i1616to32(16*b._halfWidth,16*b._halfReferenceWidth);n=h.i8888to32(16*n+128,16*g+128,16*q+128,16*r+128);g=b.out;q=b._bitset<<24|b.id;g.vertexBounds(e,d,c,a);g.vertexWrite(h.i1616to32(8*e,8*d));g.vertexWrite(q);g.vertexWrite(b._fillColor);
e=k.hasSimpleSymbology(b.key);e||(g.vertexWrite(0),g.vertexWrite(0));g.vertexWrite(0);g.vertexWrite(l);g.vertexWrite(n);e||g.vertexWrite(b.minMaxZoom);g.vertexEnd();return b.offset+b.vertexCount++},B=b=>(c,a,e)=>{const d=b.out;d.indexWrite(c);d.indexWrite(a);d.indexWrite(e);b.indexCount+=3};return b=>class extends b{constructor(...c){super(...c);this.tessellationProperties={};this._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0};this.geometryType=w.WGLGeometryType.LINE}writeGeometry(c,
a,e,d){this._writeGeometry(c,a,e,d)}_initializeTessellator(c){var a=k.LineMaterialKey.load(this._materialKey),e=k.FillMaterialKey.load(this._materialKey),d=this._tessellationOptions;a=a.vvSizeFieldStops||a.vvSizeMinMaxValue||a.vvSizeScaleStops||a.vvSizeUnitValue;c=this.tessellationProperties._halfWidth<v.thinLineHalfWidthThreshold&&!c&&!a;this.tessellationProperties.minMaxZoom=this._minMaxZoom;d.wrapDistance=65535;d.textured=this._isDashed||this._hasPattern;d.offset=this.tessellationProperties.offset;
d.halfWidth=this.tessellationProperties._halfWidth;d=c?0:1;e=k.hasOutlineFillSymbology(e)?A:z;this._lineTessellator=new x.LineTessellation(e(this.tessellationProperties,d,d),B(this.tessellationProperties),c)}_write(c,a,e,d){e="esriGeometryPoint"===a.geometryType;c.recordStart(a.getDisplayId(),this._materialKey,this.geometryType,e);this._writeGeometry(c,a,d,e);c.recordEnd()}_writeGeometry(c,a,e,d){if(e=e||u.GeometryCursor.fromFeatureSetReaderCIM(a))d=this._getLines(e,d),null!=d&&this._writeVertices(c,
a,d)}_getLines(c,a){return y.clipLinesMarshall(c,a?256:16)}_writeVertices(c,a,e){const d=a.getDisplayId(),l=c.vertexCount(),m=this.tessellationProperties;a=this._tessellationOptions;m.out=c;m.id=d;m.indexCount=0;m.vertexCount=0;m.offset=l;a.capType=this._capType;a.joinType=this._joinType;c=k.FillMaterialKey.load(this._materialKey);this.tessellationProperties.key=k.hasOutlineFillSymbology(c)?c:k.LineMaterialKey.load(this._materialKey);for(const {line:p,start:f}of e)a.initialDistance=f%65535,this._lineTessellator.tessellate(p,
a)}}});