// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/support/plane ../../../geometry/support/ray ../../../chunks/sphere ./normalizedPoint ../../support/geometry3dUtils ../../support/geometry2dUtils".split(" "),function(n,U,F,V,l,m,h,ha,I,k,e,N){function x(a,b){if(a instanceof G){var c=[];for(const d of a.constraints)(a=d.intersect(b))&&c.push(a);return O(c)}if(b instanceof G)return x(b,a);if(a instanceof
H)return W(a,b);if(b instanceof H)return W(b,a);if(t(a))return{point:c}=a,b=b.closestTo(c),l.equals(b,c)?a:void 0;if(u(a)){if(t(b))return x(b,a);if(u(b))return q(e.intersectLineLikes(a.lineLike,b.lineLike));if(y(b))return ia(a,b);if(v(b))return q(e.intersectVerticalPlaneAndLineLike(b.planeLike,a.lineLike));if(w(b))return q(e.intersectLineLikeAndVerticalCylinder(a.lineLike,b.center,b.radius));if(B(b))return q(e.intersectLineLikeAndCircle(a.lineLike,b));if(z(b))return ja(a,b);if(A(b))return ka(a,b)}else if(y(a)){if(t(b)||
u(b))return x(b,a);if(y(b))return e.isClose(a.z,b.z)?a:void 0;if(v(b))return la(a,b);if(w(b)){const [d,f]=b.center;return new J(k.fromValues(d,f,a.z),b.radius)}if(B(b))return ma(a,b);if(z(b))return e.isClose(b.center[2],a.z)?b:void 0;if(A(b))return na(a,b)}else if(v(a)){if(t(b)||u(b)||y(b))return x(b,a);if(v(b))return P(e.intersectVerticalPlanes(a.planeLike,b.planeLike));if(w(b))return P(e.intersectVerticalPlaneAndVerticalCylinder(a.planeLike,b.center,b.radius));if(B(b))return oa(a,b);if(z(b))return pa(a,
b);if(A(b))return qa(a,b)}else if(w(a)){if(t(b)||u(b)||y(b)||v(b))return x(b,a);if(w(b))return P(e.intersectVerticalCylinders(a.center,a.radius,b.center,b.radius));if(!B(b)){if(z(b))return c=F.squaredDistance(a.center,b.center),e.isClose(c,0)&&e.isClose(a.radius,b.radius)||(a=e.intersectVerticalCylinders(a.center,a.radius,b.center,b.radius),b=X(a,b.center[2])),b;A(b)}}else if(B(a)){if(t(b)||u(b)||y(b)||v(b)||w(b))return x(b,a);B(b)||(z(b)?b.asCircle():A(b))}else if(z(a)){if(t(b)||u(b)||y(b)||v(b)||
w(b)||B(b))return x(b,a);if(z(b))return e.vectorsHaveCloseZ(b.center,a.center)?(c=F.squaredDistance(b.center,a.center),e.isClose(c,0)&&e.isClose(b.radius,a.radius)||(a=e.intersectVerticalCylinders(b.center,b.radius,a.center,a.radius),b=X(a,b.center[2]))):b=void 0,b;A(b)}else if(A(a)){if(t(b)||u(b)||y(b)||v(b)||w(b)||z(b))return x(b,a);A(b)}}function ja({lineLike:a},{center:b,radius:c}){const d=b[2];a=e.intersectLineLikeAndVerticalCylinder(a,b,c).filter(f=>e.isClose(f[2],d));return q(a)}function ka({lineLike:a},
{sphere:b}){return q(I.intersectLine(b,a.start,a.end))}function la({z:a},{planeLike:b}){const [c,d]=b.start,[f,g]=b.end,p=k.fromValues(c,d,a);a=k.fromValues(f,g,a);return b.type===e.VerticalPlaneType.PLANE?new Q(p,a):new Y(p,a)}function na(a,{center:b,radius:c}){const d=Math.abs(b[2]-a.z);if(!(d>c)||e.isClose(d,c))if(a=k.fromValues(b[0],b[1],a.z),c=Math.sqrt(c**2-d**2),!e.isClose(c,0))return new J(a,c)}function W(a,b){const {planeLike:c,getZ:d}=a,f=[];if(t(b))a.addIfOnTheGround(f,e.intersectVerticalPlaneAndPoint(c,
b.point));else if(u(b))a.addIfOnTheGround(f,e.intersectVerticalPlaneAndLineLike(c,b.lineLike));else if(w(b))for(const [g,p]of e.intersectVerticalPlaneAndVerticalCylinder(c,b.center,b.radius))a=d(g,p),null!=a&&f.push(m.fromValues(g,p,a));else if(v(b)||b instanceof H)for(const [g,p]of e.intersectVerticalPlanes(c,b.planeLike))a=d(g,p)??0,f.push(m.fromValues(g,p,a));return q(f)}function P(a){return O(a.map(([b,c])=>{const d=k.fromValues(b,c,0);b=k.fromValues(b,c,1);return new Q(d,b)}))}function q(a){return O(a.map(b=>
b?new D(k.fromVec3(b)):void 0))}function X(a,b){return q(a.map(([c,d])=>[c,d,b]))}function O(a){if(0!==a.length)return 1===a.length?a[0]??void 0:new G(a.filter(U.isSome))}function t(a){return a instanceof D}function u(a){return a instanceof K}function y(a){return a instanceof Z}function v(a){return a instanceof L}function w(a){return a instanceof aa}function z(a){return a instanceof J}function B(a){return a instanceof M}function A(a){return a instanceof ba}class r{intersect(a){return x(this,a)}closestPoints(a){return[this.closestTo(a)]}}
class D extends r{constructor(a){super();this.point=a}equals(a){return this===a||t(a)&&l.exactEquals(this.point,a.point)}closestTo(){return k.clone(this.point)}}class K extends r{constructor(a,b,c){super();this.start=a;this.end=b;this.lineLike={start:a,end:b,type:c}}equals(a){return this===a||u(a)&&this.lineLike.type===a.lineLike.type&&l.exactEquals(this.start,a.start)&&l.exactEquals(this.end,a.end)}closestTo(a){a=e.projectPointToLineLike(a,this.lineLike);return k.fromVec3(a)}}class Q extends K{constructor(a,
b){super(a,b,N.LineType.LINE)}}class Y extends K{constructor(a,b){super(a,b,N.LineType.RAY)}}class G extends r{constructor(a){super();this.constraints=a}equals(a){return this===a||a instanceof G&&U.equals(this.constraints,a.constraints,(b,c)=>b.equals(c))}closestTo(a){let b=Infinity,c;for(const d of this.constraints){const f=d.closestTo(a),g=l.squaredDistance(a,f);g<b&&(b=g,c=f)}return c?k.clone(c):a}closestPoints(a){return this.constraints.flatMap(b=>b===this?[]:b.closestPoints(a))}}class aa extends r{constructor(a,
b){super();this.center=a;this.radius=b}equals(a){return this===a||w(a)&&this.center[0]===a.center[0]&&this.center[1]===a.center[1]&&this.radius===a.radius}closestTo(a){a=e.projectPointToVerticalCylinder(a,this.center,this.radius);return k.fromVec3(a)}}class J extends r{constructor(a,b){super();this.center=a;this.radius=b}equals(a){return this===a||z(a)&&l.exactEquals(this.center,a.center)&&this.radius===a.radius}closestTo(a){a=e.projectPointToVerticalCylinder(a,this.center,this.radius);a[2]=this.center[2];
return k.fromVec3(a)}asCircle(){return new M(k.clone(this.center),this.radius,k.fromValues(0,0,1))}}class M extends r{constructor(a,b,c,d){super();this.center=a;this.radius=b;this.normal=c;this.slicePlane=d}equals(a){return this===a||B(a)&&l.exactEquals(this.center,a.center)&&l.exactEquals(this.normal,a.normal)&&this.radius===a.radius}closestTo(a){const {center:b,radius:c}=this;h.projectPoint(this.getPlane(ra),a,R);var d=l.sub(R,R,b),f=l.squaredLength(d);if(e.isClose(f,0))return k.clone(a);f=c/Math.sqrt(f);
d=l.scaleAndAdd(m.create(),b,d,f);({slicePlane:f}=this);return f&&!e.isPointInsidePlane(f,d)?S(f,this)?.closestTo(a)??k.clone(a):k.fromVec3(d)}getPlane(a=h.create()){return h.fromPositionAndNormal(this.center,this.normal,a)}}const R=m.create(),ra=h.create();class Z extends r{constructor(a){super();this.z=a}equals(a){return this===a||y(a)&&this.z===a.z}closestTo(a){return k.fromVec3(m.fromValues(a[0],a[1],this.z))}getPlane(a=h.create()){l.set(ca,0,0,this.z);return h.fromPositionAndNormal(ca,m.UNIT_Z,
a)}}const ca=m.create();class L extends r{constructor(a,b,c){super();this.start=a;this.end=b;this.planeLike={start:a,end:b,type:c}}equals(a){return this===a||v(a)&&this.planeLike.type===a.planeLike.type&&l.exactEquals(this.start,a.start)&&l.exactEquals(this.end,a.end)}closestTo(a){return k.fromVec3(e.projectPointToVerticalPlane(a,this.planeLike))}closestEndTo(a){const {start:b,end:c}=this;return 0<Math.sign(F.dot(F.subtract(sa,c,b),F.subtract(ta,a,b)))?c:b}getPlane(a=h.create()){const b=l.copy(da,
this.end);b[2]+=1;return h.fromPoints(this.start,this.end,b,a)}getSlicePlane(a=h.create()){const {start:b,end:c,type:d}=this.planeLike;if(d!==e.VerticalPlaneType.PLANE){var f=l.set(da,b[0],b[1],0),g=l.set(ea,c[0],c[1],0);g=l.subtract(ea,g,f);h.fromPositionAndNormal(f,g,a);return a}}}const sa=V.create(),ta=V.create(),da=m.create(),ea=m.create();class ua extends L{constructor(a,b){super(a,b,e.VerticalPlaneType.HALF_PLANE)}}class va extends L{constructor(a,b){super(a,b,e.VerticalPlaneType.PLANE)}}class ba extends r{constructor(a,
b){super();this.sphere=I.fromCenterAndRadius(a,b)}equals(a){return this===a||A(a)&&I.exactEquals(this.sphere,a.sphere)}closestTo(a){a=I.projectPoint(this.sphere,a,m.create());return k.fromVec3(a)}get center(){return this.sphere}get radius(){return this.sphere[3]}}class H extends r{constructor(a,b,c){super();this.start=a;this.end=b;this.getZ=c;this.planeLike={start:a,end:b,type:e.VerticalPlaneType.PLANE}}equals(a){return this===a||a instanceof H&&l.exactEquals(this.start,a.start)&&l.exactEquals(this.end,
a.end)&&this.getZ===a.getZ}closestTo(a){a=e.projectPointToVerticalPlane(a,this.planeLike);a[2]=this.getZ(a[0],a[1])??0;return k.fromVec3(a)}addIfOnTheGround(a,b){for(const c of b)b=this.getZ(c[0],c[1])??0,e.isClose(c[2],b)&&(c[2]=b,a.push(c))}}const ia=(()=>{const a=h.create();return(b,c)=>{const {start:d,end:f}=b;if(e.vectorsHaveCloseZ(d,f)&&e.isClose(d[2],c.z))return b;b=m.create();if(h.intersectLine(c.getPlane(a),d,f,b))return new D(k.fromVec3(b))}})(),S=(()=>{const a=ha.create(),b=h.create(),
c={start:m.create(),end:m.create(),type:N.LineType.LINE};return(d,f,g)=>{const {normal:p,center:C,radius:T}=f;var E=l.dot(p,h.normal(d));const fa=e.isClose(h.distance(d,C),0);if(e.isClose(E,1)){if(fa)return f}else{f.getPlane(b);if(fa&&e.isClose(E,0)&&h.isVertical(d)&&h.isVertical(b)){if(e.isClose(T,0))return!g||e.isPointInsidePlane(g,C)?new D(k.clone(C)):void 0;d=m.clone(C);d[2]+=T;f=m.clone(C);f[2]-=T;E=[];g&&!e.isPointInsidePlane(g,d)||E.push(d);g&&!e.isPointInsidePlane(g,f)||E.push(f);return q(E)}if(h.intersectPlanes(d,
b,a))return l.copy(c.start,a.origin),l.add(c.end,a.origin,a.direction),d=e.intersectLineLikeAndCircle(c,f),q(g?e.pointsInsidePlane(g,d):d)}}})(),ma=(()=>{const a=h.create();return(b,c)=>S(b.getPlane(a),c)})(),pa=(()=>{const a=h.create();return(b,{center:c,radius:d})=>{d=e.intersectVerticalPlaneAndVerticalCylinder(b.planeLike,c,d);c=c[2];b.getSlicePlane(a);b=[];for(const [f,g]of d)d=[f,g,c],e.isPointInsidePlane(a,d)&&b.push(d);return q(b)}})(),oa=(()=>{const a=h.create(),b=h.create();return(c,d)=>
S(c.getPlane(a),d,c.getSlicePlane(b))})(),qa=(()=>{const a=h.create();return(b,{center:c,radius:d})=>{const f=b.getPlane(a),g=h.signedDistance(f,c);var p=Math.abs(g);if(!(p>d)||e.isClose(p,d)){p=m.clone(h.normal(f));var C=l.scaleAndAdd(m.create(),c,p,g);d=Math.sqrt(d**2-g**2);return e.isClose(d,0)?new D(k.fromVec3(h.projectPoint(f,c,m.create()))):new M(k.fromVec3(C),d,p,b.getSlicePlane())}}})();n.CircleConstraint=M;n.Constraint=r;n.DrapedLineConstraint=H;n.HorizontalCircleConstraint=J;n.HorizontalPlaneConstraint=
Z;n.LineConstraint=Q;n.LineLikeConstraint=K;n.PointConstraint=D;n.RayConstraint=Y;n.SetConstraint=G;n.SphereConstraint=ba;n.VerticalCylinderConstraint=aa;n.VerticalHalfPlaneConstraint=ua;n.VerticalPlaneConstraint=va;n.VerticalPlaneLikeConstraint=L;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});