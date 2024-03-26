// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../chunks/vec3 ../../../chunks/vec3f64 ../../spatialReferenceEllipsoidUtils ../../projection/projectPointToVector ../MeshTransform ./geographicUtils ./projection".split(" "),function(v,z,l,m,A,u,B,w,n){function x(a,h,c=m.ZEROS){if(a)for(let f=0;f<a.length;f+=3){for(var d=0;3>d;d++)p[d]=a[f+d]-c[d];l.scale(p,p,h);for(d=0;3>d;d++)a[f+d]=p[d]+c[d]}}const p=m.create(),y=m.create(),g=m.create();v.scale=function(a,h,c){if(a.vertexAttributes?.position){var {spatialReference:d,
vertexSpace:f}=a;if(f.isRelative){w.validateGeographicFlag(f,"esri.geometry.support.meshUtils.scale",c);var b=c?.origin??a.origin;a.transform??(a.transform=new B);a=a.transform;c=f.origin;b=l.set(p,b.x,b.y,b.z);b=l.subtract(p,b,c);a.applyLocalInverse(b,y);h=l.scale(m.create(),a.scale,h);a.scale=h;a.applyLocalInverse(b,b);l.subtract(b,b,y);a.translation=l.add(m.create(),a.translation,b)}else{b=w.isGeographicMesh(d,c);c=c?.origin??a.origin;if(b){b=a.spatialReference;var e=A.getSphericalPCPF(b);u.projectPointToVector(c,
g,e)||u.projectPointToVector(a.origin,g,e);c=a.vertexAttributes.position;e=a.vertexAttributes.normal;const q=a.vertexAttributes.tangent,k=new Float64Array(c.length),r=null!=e?new Float32Array(e.length):null,t=null!=q?new Float32Array(q.length):null;n.projectToPCPF(c,b,k);null!=e&&null!=r&&n.projectNormalToPCPF(e,c,k,b,r);null!=q&&null!=t&&n.projectTangentToPCPF(q,c,k,b,t);x(k,h,g);n.projectFromPCPF(k,c,b);null!=e&&null!=r&&n.projectNormalFromPCPF(r,c,k,b,e);null!=q&&null!=t&&n.projectTangentFromPCPF(t,
c,k,b,q)}else b=c,u.projectPointToVector(b,g,a.spatialReference)||(c=a.origin,g[0]=c.x,g[1]=c.y,g[2]=c.z,z.getLogger("esri.geometry.support.meshUtils.scale").error(`Failed to project specified origin (wkid:${b.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+"Projection may be possible after calling projection.load().")),x(a.vertexAttributes.position,h,g);a.vertexAttributesChanged()}}};Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});