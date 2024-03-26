// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../support/elevationInfoUtils ../sketch/normalizedPoint ./Settings ./SnappingAlgorithm ./snappingUtils ./candidates/ParallelLineSnappingCandidate ../support/viewUtils ../../support/geometry2dUtils".split(" "),function(w,x,A,r,l,y,B,t,C,u,v){class D extends B.SnappingAlgorithm{snapNewVertex(d,a){var b=a.editGeometryOperations.data.components[0],c=b.edges.length,e=b.vertices.length;const f=[];if(2>c)return f;const {view:g}=this,h=u.vectorToScreenPoint(d,
a.spatialReference,r.absoluteHeightElevationInfo,g);e=l.fromAnyMapPoint(b.vertices[e-1].pos,g,a);const m=l.fromAnyMapPoint(b.vertices[0].pos,g,a);c=b=b.edges[c-1];do{if(this.edgeExceedsShortLineThreshold(c,a)){const n=t.editEdgeToSnappingEdge(c,g,a);this._checkEdgeForParallelLines(n,e,d,h,a,f);this._checkEdgeForParallelLines(n,m,d,h,a,f)}c=c.leftVertex.leftEdge}while(c&&c!==b);return f}snapExistingVertex(d,a){const b=[],c=a.vertexHandle;var e=c.component;if(3>e.edges.length)return b;const {view:f}=
this,g=u.vectorToScreenPoint(d,a.spatialReference,r.absoluteHeightElevationInfo,f),h=c.leftEdge,m=c.rightEdge,n=e.vertices[0],E=l.fromAnyMapPoint(n.pos,f,a),z=e.vertices[e.vertices.length-1],F=l.fromAnyMapPoint(z.pos,f,a);let k=e=e.edges[0];do{if(k!==h&&k!==m&&this.edgeExceedsShortLineThreshold(k,a)){const q=t.editEdgeToSnappingEdge(k,f,a);h&&this._checkEdgeForParallelLines(q,l.fromAnyMapPoint(h.leftVertex.pos,f,a),d,g,a,b);m&&this._checkEdgeForParallelLines(q,l.fromAnyMapPoint(m.rightVertex.pos,
f,a),d,g,a,b);c===n?this._checkEdgeForParallelLines(q,F,d,g,a,b):c===z&&this._checkEdgeForParallelLines(q,E,d,g,a,b)}k=k.rightVertex.rightEdge}while(k&&k!==e);return b}_checkEdgeForParallelLines(d,a,b,c,e,f){const g=d.left,h=d.right;v.projectPointToLine(p,a,g,h);if(!(x.squaredDistance(p,a)<y.defaults.parallelLineThreshold)){v.projectPointToLine(p,b,g,h,a);var {spatialReference:m,pointer:n}=e;b=l.fromValues(p[0],p[1],b[2]);t.squaredScreenDistance(c,u.vectorToScreenPoint(b,m,r.absoluteHeightElevationInfo,
this.view))<this.squaredProximityThreshold(n)&&!(this.isVertical(b,a)||this.isVertical(g,h)||this._parallelToPreviousCandidate(d,f))&&f.push(new C.ParallelLineSnappingCandidate({referenceLine:d,lineStart:a,targetPoint:b,isDraped:"on-the-ground"===e.elevationInfo?.mode}))}}_parallelToPreviousCandidate(d,a){const b=d.left,c=d.right;for(const e of a)if(v.projectPointToLine(p,c,e.constraint.start,e.constraint.end,b),x.squaredDistance(p,c)<y.defaults.parallelLineThreshold)return e.addReferenceLine(d),
!0;return!1}}const p=A.create();w.ParallelLineSnapper=D;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});