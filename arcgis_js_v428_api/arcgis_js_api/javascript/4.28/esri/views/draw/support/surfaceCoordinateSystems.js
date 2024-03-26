// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/arrayUtils ../../../chunks/mat2d ../../../chunks/mat2df64 ../../../chunks/quat ../../../chunks/quatf64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/support/Axis ../../../geometry/Point".split(" "),function(d,w,u,v,k,p,q,e,c,l,h){function g(a,b,f=null){return null!=f?[a,b,f]:[a,b]}function m(a,b,f=null){return null!=f?{x:a,y:b,z:f}:{x:a,y:b}}class n{constructor(a){this.spatialReference=a}mapToLocalMultiple(a){return a.map(b=>this.mapToLocal(b)).filter(u.isSome)}get doUnnormalization(){return!1}}
class r extends n{constructor(a,b,f=null){super(b);this._defaultZ=f;this.transform=k.create();this.transformInv=k.create();this.transform=k.clone(a);v.invert(this.transformInv,this.transform)}makeMapPoint(a,b){return g(a,b,this._defaultZ)}mapToLocal(a){return m(this.transform[0]*a[0]+this.transform[2]*a[1]+this.transform[4],this.transform[1]*a[0]+this.transform[3]*a[1]+this.transform[5])}localToMap(a){return g(this.transformInv[0]*a.x+this.transformInv[2]*a.y+this.transformInv[4],this.transformInv[1]*
a.x+this.transformInv[3]*a.y+this.transformInv[5],this._defaultZ)}}class t extends n{constructor(a,b){super(a.spatialReference);this.view=a;this.defaultZ=null;this.pWS=c.create();this.tangentFrameUpWS=c.create();this.tangentFrameRightWS=c.create();this.tangentFrameForwardWS=c.create();this.localFrameRightWS=c.create();this.localFrameUpWS=c.create();this.worldToLocalTransform=q.create();this.localToWorldTransform=q.create();this.scale=1;this.scale=a.resolution;this.referenceMapPoint=b;this.defaultZ=
b.hasZ?b.z:null;a=a.state.camera.viewRight;this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint,this.pWS);this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,l.Axis.X,this.tangentFrameRightWS);this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,l.Axis.Y,this.tangentFrameUpWS);this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,l.Axis.Z,this.tangentFrameForwardWS);b=c.create();e.scale(b,this.tangentFrameForwardWS,e.dot(a,this.tangentFrameForwardWS));e.subtract(this.localFrameRightWS,
a,b);e.normalize(this.localFrameRightWS,this.localFrameRightWS);e.cross(this.localFrameUpWS,this.tangentFrameForwardWS,this.localFrameRightWS);p.rotationTo(this.worldToLocalTransform,this.localFrameRightWS,this.tangentFrameRightWS);p.invert(this.localToWorldTransform,this.worldToLocalTransform)}get doUnnormalization(){return"global"===this.view.viewingMode}makeMapPoint(a,b){return g(a,b,this.defaultZ)}mapToLocal(a){const b=c.create();this.view.renderCoordsHelper.toRenderCoords(new h({x:a[0],y:a[1],
spatialReference:this.spatialReference}),b);e.transformQuat(b,b,this.worldToLocalTransform);a=this.view.renderCoordsHelper.fromRenderCoords(b,this.view.spatialReference);return null!=a?m(a.x/this.scale,a.y/this.scale):null}localToMap(a){const b=c.create();this.view.renderCoordsHelper.toRenderCoords(new h({x:a.x*this.scale,y:a.y*this.scale,spatialReference:this.spatialReference}),b);e.transformQuat(b,b,this.localToWorldTransform);a=this.view.renderCoordsHelper.fromRenderCoords(b,this.view.spatialReference);
return null!=a?g(a.x,a.y,this.defaultZ):null}}d.AffineCoordinateSystem=r;d.SceneViewCoordinateSystem=t;d.SurfaceCoordinateSystem=n;d.createViewAlignedCoordinateSystem=function(a,b){return"2d"===a.type?new r(a.state.transform,a.spatialReference,2<b.length?b[2]:null):"3d"===a.type?(b=2<b.length?new h({x:b[0],y:b[1],z:b[2],spatialReference:a.spatialReference}):new h({x:b[0],y:b[1],spatialReference:a.spatialReference}),new t(a,b)):null};d.makeMapPoint=g;d.makeSurfacePoint=m;Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});