// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Handles ../../../../../chunks/vec2 ../../../../../chunks/vec2f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/boundedPlane ../../../../../geometry/support/spatialReferenceUtils ./Manipulation ./utils ../../../../interactive/dragEventPipeline ../../../../interactive/GraphicManipulator ../../../../interactive/editGeometry/interfaces ../../../../interactive/editGeometry/operations/UpdateVertices ../../../../interactive/editGeometry/support/editPlaneUtils".split(" "),
function(x,K,F,L,d,r,q,M,G,N,H,O,I,P,Q){function y(b){const g=d.length(b.basis1);b=d.length(b.basis2);return.3*Math.min(g,b)}class R extends G.Manipulation{constructor(b){super();this._handles=new K;this._planeStart=q.create();this._displayPlaneStart=q.create();this._originCache=r.create();this._axisCache=L.create();this._renderStartCache=r.create();this._renderEndCache=r.create();this._resizeOriginCache=r.create();this._view=b.view;this._tool=b.tool;this._graphic=b.graphic;this._direction=b.direction;
this._preserveAspectRatio=b.preserveAspectRatio;this._manipulator=this._createManipulator();this._handles.add([this._manipulator.events.on("grab-changed",g=>N.onGrabChangedHandle(g,this._manipulator))]);this.forEachManipulator(g=>this._tool.manipulators.add(g))}destroy(){this._handles.destroy();this.forEachManipulator(b=>{this._tool.manipulators.remove(b);b.destroy()});this._preserveAspectRatio=this._resizeOriginCache=this._renderEndCache=this._renderStartCache=this._axisCache=this._originCache=this._displayPlaneStart=
this._planeStart=this._handles=this._direction=this._manipulator=this._graphic=this._view=this._tool=null}forEachManipulator(b){b(this._manipulator,G.ManipulatorType.SCALE)}createDragPipeline(b,g){let t=null,z=null,p=null,A=0,B=null,C=null;const h=this._planeStart,k=this._displayPlaneStart,f=this._direction;return H.createManipulatorDragEventPipeline(this._manipulator,(J,S)=>{S.next(c=>{if("start"===c.action){J.cursor="grabbing";var a=b();t=a.plane;z=a.displayPlane;p=a.editGeometryOperations;A=10*
this._view.resolution;q.copy(t,h);q.copy(z,k);B=(a=M.getInfo(p.data.spatialReference))?a.valid[1]-a.valid[0]-30*this._view.resolution:null}return c}).next(H.screenToMap(this._view)).next(c=>{const a=d.copy(this._renderStartCache,[c.mapStart.x,c.mapStart.y,0]),l=d.copy(this._renderEndCache,[c.mapEnd.x,c.mapEnd.y,0]);var e=d.copy(this._resizeOriginCache,k.origin);d.scaleAndAdd(e,e,k.basis1,-f[0]);d.scaleAndAdd(e,e,k.basis2,-f[1]);d.subtract(l,l,e);d.subtract(a,a,e);const D=0!==f[0]&&0!==f[1];e=y(k);
const T=y(z)/e;var w=(m,E)=>{if(0===m)return 1;let n=d.length(E),u=.5*m*d.dot(E,l)/n;const v=0>u?-1:1;D&&(m=n-.5*m*d.dot(E,a)/n,u+=m*v*T);m=n<1.5*A?1:1E-6;n=Math.max(n-A,1E-6);0<v&&(u-=10*this._view.resolution);return v*Math.max(u/n*v,m)};e=w(f[0],k.basis1);w=w(f[1],k.basis2);return{...c,direction:f,factor1:e,factor2:w}}).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(c=>{var a=d.copy(this._originCache,h.origin);d.scaleAndAdd(a,a,h.basis1,-f[0]);
d.scaleAndAdd(a,a,h.basis2,-f[1]);const l=F.set(this._axisCache,h.basis1[0],h.basis1[1]);F.normalize(l,l);const e=[];for(const D of p.data.components)e.push(...D.vertices);a=p.scaleVertices(e,a,l,c.factor1,c.factor2,"start"===c.action?I.AccumulationBehaviour.NEW_STEP:I.AccumulationBehaviour.ACCUMULATE_STEPS,P.AccumulationType.REPLACE);B&&B<p.data.geometry.extent.width&&C?p.updateVertices(e,C):(q.copy(h,t),Q.apply(a,t),C=a.operation,g(c,a));return c}).next(c=>{"end"===c.action&&(J.cursor="grab");return c})})}_createManipulator(){return new O.GraphicManipulator({view:this._view,
graphic:this._graphic,selectable:!0,cursor:"grab"})}}x.ScaleManipulation=R;x.calculateDiagonalResizeHandleScale=y;Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});