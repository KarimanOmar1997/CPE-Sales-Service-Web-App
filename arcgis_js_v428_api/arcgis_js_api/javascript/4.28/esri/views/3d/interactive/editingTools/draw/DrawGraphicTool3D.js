// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/colorUtils ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../support/elevationInfoUtils ../../../../../symbols/support/ElevationInfo ../../SegmentLabels3D ../../SnappingVisualizer3D ../meshFastUpdateUtils ../settings ../../visualElements/ExtendedLineVisualElement ../../visualElements/OutlineVisualElement ../../visualElements/VerticesVisualElement ../../../layers/graphics/elevationAlignmentUtils ../../../layers/graphics/ElevationContext ../../../layers/graphics/GraphicState ../../../webgl-engine/lib/Material ../../../../draw/DrawGraphicTool ../../../../draw/DrawOperation ../../../../draw/drawSurfaces ../../../../draw/support/helpMessageUtils3d".split(" "),
function(h,m,p,g,q,f,r,P,Q,R,y,z,A,t,B,C,D,E,F,G,H,u,I,J,K,L,v,M,w,N){h.DrawGraphicTool3D=class extends v.DrawGraphicTool{constructor(a){super(a);this._verticalLineVisualElement=this._verticesVisualElement=this._outlineVisualElement=this._createGraphicState=this._activeVertexVisualElement=null;this._settings=new F.Settings({getTheme:()=>this.view.effectiveTheme});this.geometryType=null;this.type="draw-3d"}initialize(){const {mode:a,offset:b}=this.elevationInfo;this.internalGraphicsLayer.elevationInfo=
new B({mode:a,offset:b})}normalizeCtorArgs(a){return a.elevationInfo?a:{...a,elevationInfo:t.getEffectiveElevationInfo(a.hasZ??!0)}}initializeGraphic(a){const {view:b}=this,c=this._createGraphicState=new K.GraphicState({graphic:a});return g.handlesGroup([b.maskOccludee(a),b.trackGraphicState(c),f.watch(()=>({element:this._outlineVisualElement,isDraped:c.isDraped}),({element:d,isDraped:e})=>{d&&(d.isDraped=e)},f.syncAndInitial),this._setupLoadingIndicator(c),...E.meshTransformFastUpdateHandles(c)])}updateDrawMeshTooltipInfo(a){const {graphic:b,
tooltipOptions:c,view:d}=this;a.tooltipOptions=c;a.viewType=d.type;a.helpMessage=N.getDrawMeshHelpMessage(b,this.view);this.updateElevation(a.elevation)}makeDrawOperation(){const {geometryType:a}=this,b="circle"!==a&&"rectangle"!==a;return new M.DrawOperation({view:this.view,manipulators:this.manipulators,geometryType:v.geometryTypeToDrawOperationGeometryType(a),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new w.SceneDrawSurface(this.view,
this.elevationInfo,[this.internalGraphicsLayer]),elevationDrawSurface:new w.ElevationDrawSurface(this.elevationInfo,this.defaultZ,this.view,this.internalGraphicsLayer),hasM:!1,elevationInfo:this.elevationInfo,snappingManager:this.snappingManager,snappingVisualizer:new D.SnappingVisualizer3D,segmentLabels:b?new C.SegmentLabels3D:null,labelOptions:this.labelOptions,tooltipOptions:this.tooltipOptions,isDraped:this._createGraphicState?this._createGraphicState.isDraped:"on-the-ground"===t.getEffectiveElevationMode(this.hasZ,
this.elevationInfo),cursor:this.cursor})}onActiveVertexChanged(a){const {view:b}=this;if(this._activeVertexVisualElement)return this._activeVertexVisualElement.vertices=[a],this._updateVerticalLineVisualElement(a),g.makeHandle();const c=this._settings,d=c.manipulators.vertex,e=new u.VerticesVisualElement({view:b,spatialReference:b.spatialReference,vertices:[a],elevationInfo:this.internalGraphicsLayer.elevationInfo,size:d.size,outlineSize:d.outlineSize,renderOccluded:d.renderOccluded,attached:!1,isDecoration:!0});
this._activeVertexVisualElement=e;const k=new G.ExtendedLineVisualElement({view:b,extensionType:c.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:L.RenderOccludedFlag.OccludeAndTransparent,isDecoration:!0});this._verticalLineVisualElement=k;a=g.handlesGroup([f.watch(()=>c.visualElements.zVerticalLine,n=>n.apply(k),f.initial),f.watch(()=>({selectedColor:p.unitRGBAFromColor(c.colors.selected),outlineColor:p.unitRGBAFromColor(c.manipulators.vertex.outlineColor)}),
({selectedColor:n,outlineColor:O})=>{e.color=n;e.outlineColor=O},f.initial),g.makeHandle(()=>{this._activeVertexVisualElement=q.destroyMaybe(this._activeVertexVisualElement);this._verticalLineVisualElement=q.destroyMaybe(this._verticalLineVisualElement)})]);e.attached=!0;return a}_updateVerticalLineVisualElement(a){const b=this._verticalLineVisualElement;if(b){var {renderCoordsHelper:c,elevationProvider:d}=this.view;z.set(l,a[0],a[1],a[2]);x.setFromElevationInfo(this.elevationInfo);l[2]=I.evaluateElevationAlignmentAtPoint(l,
d,x,c);c.toRenderCoords(l,this.view.spatialReference,l)?(b.setStartEndFromWorldDownAtLocation(l),b.attached=!0):b.attached=!1}}onOutlineChanged(a){if(this._outlineVisualElement)return this._outlineVisualElement.geometry=a,g.makeHandle();const b=this.internalGraphicsLayer.elevationInfo,{view:c}=this,d=this._settings,e=new H.OutlineVisualElement({view:c,geometry:a,elevationInfo:b,isDraped:this._createGraphicState?this._createGraphicState.isDraped:"on-the-ground"===t.getEffectiveElevationMode(this.hasZ,
b),attached:!1,isDecoration:!0});this._outlineVisualElement=e;a=g.handlesGroup([f.watch(()=>d.visualElements.lineGraphics.outline,k=>k.apply(e),f.initial),f.watch(()=>d.visualElements.lineGraphics.shadowStyle,k=>k.apply(e),f.initial),g.makeHandle(()=>{this._outlineVisualElement=q.destroyMaybe(this._outlineVisualElement)})]);e.attached=!0;e.laserlineEnabled=!0;return a}onRegularVerticesChanged(a){if(this._verticesVisualElement)return this._verticesVisualElement.vertices=a,g.makeHandle();const {view:b}=
this,c=this._settings,d=c.manipulators.vertex,e=new u.VerticesVisualElement({view:b,spatialReference:b.spatialReference,vertices:a,elevationInfo:this.internalGraphicsLayer.elevationInfo,size:d.size,outlineSize:d.outlineSize,renderOccluded:d.renderOccluded,attached:!1,isDecoration:!0});a=g.handlesGroup([f.watch(()=>({color:p.unitRGBAFromColor(c.manipulators.vertex.color),outlineColor:p.unitRGBAFromColor(c.manipulators.vertex.outlineColor)}),({color:k,outlineColor:n})=>{e.color=k;e.outlineColor=n},
f.initial),g.makeHandle(()=>{this._verticesVisualElement=q.destroyMaybe(this._verticesVisualElement)})]);e.attached=!0;this._verticesVisualElement=e;return a}updateGraphicGeometry(a,b){if("mesh"===this.geometryType&&"point"===b?.type){const c=this.geometryToPlace;c&&c.centerAt(b);c&&a.geometry===c?c.vertexSpace.isGeoreferenced?a.notifyGeometryChanged():a.notifyMeshTransformChanged():a.geometry=c}else super.updateGraphicGeometry(a,b)}_setupLoadingIndicator(a){const {drawOperation:b}=this;if(!this.geometryToPlace)return b.loading=
!1,null;b.loading=!0;const c=g.makeHandle(()=>{b.loading=!1});let d=void 0;return g.handlesGroup([f.when(()=>a.displaying,()=>{d&&cancelAnimationFrame(d);d=requestAnimationFrame(()=>c.remove())},{...f.syncAndInitial,once:!0}),g.makeHandle(()=>d&&cancelAnimationFrame(d)),c])}};m.__decorate([r.property({constructOnly:!0})],h.DrawGraphicTool3D.prototype,"elevationInfo",void 0);m.__decorate([r.property({constructOnly:!0})],h.DrawGraphicTool3D.prototype,"geometryType",void 0);m.__decorate([r.property()],
h.DrawGraphicTool3D.prototype,"type",void 0);m.__decorate([r.property({constructOnly:!0})],h.DrawGraphicTool3D.prototype,"view",void 0);h.DrawGraphicTool3D=m.__decorate([y.subclass("esri.views.3d.interactive.editingTools.draw.DrawGraphicTool3D")],h.DrawGraphicTool3D);const x=new J.ElevationContext,l=A.create();Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});