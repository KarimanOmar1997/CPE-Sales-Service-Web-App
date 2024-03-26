// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../Color ../../../../../core/colorUtils ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/screenUtils ../../../../../chunks/vec3f64 ../../Manipulator3D ../../manipulatorUtils ../../RenderObject ../support/PickRequest ../../visualElements/LaserlineVisualElement ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/IntersectorInterfaces ../../../../interactive/ManipulatorCollection".split(" "),
function(l,h,t,k,g,u,m,n,p,q,v,w,r,x,y,z){function A(a,b,c,d){for(;a.length<b;)a.push(c());if(d)for(;a.length>b;)c=a.pop(),d(c);else a.length=b}class B{constructor(a){this.vertexManipulators=[];this._destroyed=!1;this._visible=this._isManipulatorsOwner=!0;this._listenerHandles=null;this._tempHandlePosition=m.create();const {analysisViewData:b,manipulators:c,toolState:d,view:e,visible:C}=a;this._analysisViewData=b;this._toolState=d;null!=c?(this._manipulators=c,this._isManipulatorsOwner=!1):this._manipulators=
new z.ManipulatorCollection;this._view=e;this._intersector=x.newIntersector(e.state.viewingMode);this._intersector.options.store=y.StoreResults.MIN;a=p.createManipulatorMaterial(this._handleColor);var f=[new q.RenderObject(r.createSphereGeometry(a,1,32,32))];f=new n.Manipulator3D({view:e,renderObjects:f});f.available=!1;f.radius=5;f.interactive=!1;this._manipulators.add(f);this._cursorManipulator=f;this._cursorManipulatorMaterial=a;this._laserLine=new w.LaserlineVisualElement({view:e,attached:!0,
style:{glowWidth:8,glowFalloff:8,innerWidth:1},isDecoration:!0});this._updateVisibility(C??!0)}destroy(){this._listenerHandles=k.destroyMaybe(this._listenerHandles);this._manipulators=this._isManipulatorsOwner?k.destroyMaybe(this._manipulators):null;this._laserLine=k.destroyMaybe(this._laserLine);this._destroyed=!0}get destroyed(){return this._destroyed}get visible(){return this._visible}set visible(a){a?this.show():this.hide()}get testData(){const a=this._laserLine.testData;return{laserLineRenderer:null!=
a?{heightManifoldEnabled:a.heightManifoldEnabled,heightManifoldTarget:a.heightManifoldTarget,pointDistanceEnabled:a.pointDistanceEnabled,pointDistanceOrigin:a.pointDistanceOrigin,pointDistanceTarget:a.pointDistanceTarget,lineVerticalPlaneEnabled:a.lineVerticalPlaneEnabled}:{heightManifoldEnabled:!1,heightManifoldTarget:null,pointDistanceEnabled:!1,pointDistanceOrigin:null,pointDistanceTarget:null,lineVerticalPlaneEnabled:!1}}}show(){this._setVisibility(!0)}hide(){this._setVisibility(!1)}_setVisibility(a){this._destroyed||
this._visible===a||this._updateVisibility(a)}_updateVisibility(a){this._visible=a;(this._laserLine.visible=a)?(this._initializeListeners(),this._updateAll()):(this._destroyListeners(),this.vertexManipulators.forEach(({manipulator:b})=>this._removeVertexManipulator(b)),this.vertexManipulators=[],this._view.cursor=null)}vertexHandleAt(a,b){return this._manipulators.intersect(a,b)?.metadata}pick(a){var b=this._view.spatialReference;a=u.screenPointObjectToArray(a.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(a,
this._intersector);const c=this._intersector.results.min;a=m.create();if(!c.getIntersectionPoint(a))return null;b=this._view.renderCoordsHelper.fromRenderCoords(a,b);return null==b?null:new v.PickResult(a,b)}_updateAll(){this._visible&&(this._updateVertexManipulators(),this._updateLaserLine())}_createVertexManipulator(){const a=p.createManipulatorMaterial(this._handleColor);var b=[new q.RenderObject(r.createSphereGeometry(a,1,32,32))];b=new n.Manipulator3D({view:this._view,renderObjects:b});b.radius=
5;this._manipulators.add(b);return{manipulator:b,material:a}}_removeVertexManipulator(a){this._manipulators.remove(a)}_updateVertexManipulators(){const {viewData:a}=this._analysisViewData,b=this._analysisViewData.path?this._analysisViewData.path.vertices:[],c=this.vertexManipulators;A(c,b.length,()=>this._createVertexManipulator(),({manipulator:d})=>this._removeVertexManipulator(d));c.forEach(({manipulator:d},e)=>{d.metadata=b[e];d.renderLocation=a.positionsRenderCoords[e];d.cursor=0===e&&"drawing"===
this._toolState.polygonState?"crosshair":null});"drawing"===this._toolState.polygonState&&null!=this._analysisViewData.stagedPoint?(this._cursorManipulator.available=!0,this._cursorManipulator.location=this._analysisViewData.stagedPoint):this._cursorManipulator.available=!1}get _handleColor(){return h.multiplyOpacityToUnitRGBA(this._view.effectiveTheme.accentColor,.5)}_getFocusPoint(){const {lastDraggedVertex:a}=this._analysisViewData;switch(this._toolState.polygonState){case "drawing":return null!=
this._analysisViewData.stagedPoint?this._analysisViewData.stagedPoint:null!=a?this._analysisViewData.path.getVertexPositionAsPoint(a):this._analysisViewData.path.lastPoint;case "editing":return null!=a?this._analysisViewData.path.getVertexPositionAsPoint(a):null;default:return this._analysisViewData.stagedPoint}}_updateLaserLine(){var a="measured"!==this._toolState.polygonState&&this._toolState.active;const b=this._getFocusPoint();a&&null!=b?(a=this._tempHandlePosition,this._view.renderCoordsHelper.toRenderCoords(b,
a),this._laserLine.heightManifoldTarget=a):this._laserLine.heightManifoldTarget=null}_initializeListeners(){this._listenerHandles=new t;this._listenerHandles.add([g.watch(()=>this._toolState.polygonState,()=>this._updateLaserLine()),g.watch(()=>this._analysisViewData.viewData,()=>this._updateAll(),g.sync),g.watch(()=>({lastDraggedVertex:this._analysisViewData.lastDraggedVertex,cursorPoint:this._analysisViewData.stagedPoint}),()=>this._updateLaserLine()),g.watch(()=>this._toolState.active,()=>this._updateAll()),
g.watch(()=>this._view.effectiveTheme.accentColor,a=>{var b=h.multiplyOpacityToUnitRGBA(a,.5);for(var {material:c}of this.vertexManipulators)c.setParameters({color:b});this._cursorManipulatorMaterial.setParameters({color:b});b=l.toUnitRGB(a);c=l.toUnitRGB(h.getContrast(a));const d=this._laserLine;d.style={...d.style,glowColor:b,innerColor:c,globalAlpha:.75*a.a}},{initial:!0,equals:h.colorEquals})])}_destroyListeners(){this._listenerHandles=k.destroyMaybe(this._listenerHandles)}}return B});