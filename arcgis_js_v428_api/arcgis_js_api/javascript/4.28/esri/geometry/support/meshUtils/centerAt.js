// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../chunks/vec3 ../../../chunks/vec3f64 ../../projection/projectPointToVector ./geographicUtils ./georeference".split(" "),function(l,f,m,g,h,n,p){const k=g.create(),e=g.create(),r=g.create();l.centerAt=function(a,b,c){if(a.vertexAttributes?.position){var {vertexSpace:q}=a,d=c?.origin??a.origin;if(q.isRelative)n.validateGeographicFlag(q,"esri.geometry.support.meshUtils.centerAt",c),{vertexSpace:c}=a,c.isRelative&&(h.projectPointToVector(b,k,a.spatialReference)?
(h.projectPointToVector(d,e,a.spatialReference)||(b=a.origin,e[0]=b.x,e[1]=b.y,e[2]=b.z,f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project specified origin (wkid:${d.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+"Projection may be possible after calling projection.load().")),a=m.subtract(r,k,e),d=c.origin,c.origin=m.add(g.create(),d,a)):f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project centerAt location (wkid:${b.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+
"Projection may be possible after calling projection.load()."));else if(n.isGeographicMesh(a.spatialReference,c)){d=p.ungeoreference(a.vertexAttributes,d,{geographic:!0});const {position:t,normal:u,tangent:v}=p.georeference(d,b,{geographic:!0});a.vertexAttributes.position=t;a.vertexAttributes.normal=u;a.vertexAttributes.tangent=v;a.vertexAttributesChanged()}else if(h.projectPointToVector(b,k,a.spatialReference)){h.projectPointToVector(d,e,a.spatialReference)||(b=a.origin,e[0]=b.x,e[1]=b.y,e[2]=b.z,
f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project specified origin (wkid:${d.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+"Projection may be possible after calling projection.load()."));if(d=a.vertexAttributes.position)for(b=0;b<d.length;b+=3)for(c=0;3>c;c++)d[b+c]+=k[c]-e[c];a.vertexAttributesChanged()}else f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project centerAt location (wkid:${b.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+
"Projection may be possible after calling projection.load().")}};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});