// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/projection ../../../../../geometry/spatialReferenceEllipsoidUtils ../../../../../geometry/projection/projectVectorToVector ../../../../../geometry/support/vectorStacks ../../../support/mathUtils".split(" "),function(q,d,e,v,w,p,x,t){class u{constructor(c=e.create(),a=e.create()){this.startRenderSpace=c;this.endRenderSpace=a;this.type="euclidean"}eval(c,a,b){d.lerp(a,this.startRenderSpace,this.endRenderSpace,
c);b&&(d.subtract(b,this.endRenderSpace,this.startRenderSpace),d.normalize(b,b));return a}createRenderGeometry(c,a){const b=[],g=[],k=(m,h)=>{const f=r;d.subtract(f,m,c);b.push([f[0],f[1],f[2]]);g.push([h[0],h[1],h[2]])};a=a.worldUpAtPosition(this.eval(.5,l),x.sv3d.get());k(this.startRenderSpace,a);k(this.endRenderSpace,a);return{points:b,normals:g}}static fromPositionAndVector(c,a,b=1){d.scale(l,a,b);d.add(l,c,l);return new u(e.clone(c),e.clone(l))}}class y{_projectIn(c,a){this._project?p.projectVectorToVector(c,
this.renderSpatialReference,a,this._pcpf):d.copy(a,c)}constructor(c,a,b){this.startRenderSpace=c;this.endRenderSpace=a;this.renderSpatialReference=b;this.type="geodesic";this._start=e.create();this._end=e.create();this._pcpf=w.getSphericalPCPF(b);this._project=v.canProjectWithoutEngine(b,this._pcpf);this._projectIn(c,this._start);this._projectIn(a,this._end)}eval(c,a,b){if(this._project)if(b){const g=r;t.slerpTangent(this._start,this._end,c,a,g);d.add(n,a,g);p.projectVectorToVector(a,this._pcpf,a,
this.renderSpatialReference);p.projectVectorToVector(n,this._pcpf,n,this.renderSpatialReference);d.subtract(b,n,a);d.normalize(b,b)}else t.slerp(this._start,this._end,c,a),p.projectVectorToVector(a,this._pcpf,a,this.renderSpatialReference);else d.lerp(a,this._start,this._end,c),b&&(d.subtract(b,this._end,this._start),d.normalize(b,b));return a}createRenderGeometry(c,a){const b=[],g=[];for(let m=0;128>m;++m){const h=l;var k=r;this.eval(m/127,h);a.worldUpAtPosition(h,k);const f=n;d.subtract(f,h,c);
b.push([f[0],f[1],f[2]]);g.push([k[0],k[1],k[2]])}return{points:b,normals:g}}}const l=e.create(),r=e.create(),n=e.create();q.EuclideanSegment=u;q.GeodesicSegment=y;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});