/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../Color.js";import s from"../Graphic.js";import{d as r}from"./maybe.js";import{watch as i,initial as o}from"../core/reactiveUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import l from"../layers/GraphicsLayer.js";import{ClonableMixin as a}from"../core/Clonable.js";import{JSONSupport as n}from"../core/JSONSupport.js";import{L as j}from"./LayerView2D.js";import{G as y}from"./GraphicContainer.js";import{G as c}from"./GraphicsView2D.js";import h from"../views/layers/LayerView.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./Logger.js";import"../config.js";import"../core/lang.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../core/Accessor.js";import"../core/Handles.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObjectPool.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./GraphicsCollection.js";import"../layers/Layer.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/ScaleRangeLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./scaleUtils.js";import"./Container.js";import"./mat3f32.js";import"./EffectView.js";import"./DisplayObject.js";import"./definitions.js";import"./enums3.js";import"./Texture.js";import"./contextUtils.js";import"./HighlightOptions.js";import"./ClipRect.js";import"./enums4.js";import"./BaseGraphicContainer.js";import"./FeatureContainer.js";import"./Queue.js";import"./AttributeStoreView.js";import"./mat2d.js";import"./mat2df32.js";import"./mat3.js";import"./TiledDisplayObject.js";import"./TileKey2.js";import"./diffUtils.js";import"./labelingInfo.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./layerUtils2.js";import"./defaults.js";import"./defaultsJSON.js";import"../symbols/support/jsonUtils.js";import"./color.js";import"./enums.js";import"./VertexElementDescriptor.js";import"./number.js";import"./WGLContainer.js";import"./BufferObject.js";import"./VertexArrayObject.js";import"./WGLBrushVTLSymbol.js";import"./vec4f32.js";import"./StyleDefinition.js";import"./vec2f32.js";import"./config.js";import"./GeometryUtils2.js";import"./ShaderCompiler.js";import"./ProgramTemplate.js";import"./Program.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./heatmapUtils.js";import"./vec4.js";import"./vec4f64.js";import"./FramebufferObject.js";import"./heatmapTextureUtils.js";import"./isWebGL2Context.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./visualVariablesUtils.js";import"./createSymbolSchema.js";import"./CIMSymbolHelper.js";import"./shapingUtils.js";import"./BidiEngine.js";import"./Rect.js";import"./fontUtils.js";import"./labelPoint.js";import"./GeometryUtils.js";import"./utils9.js";import"./callExpressionWithFeature.js";import"./quantizationUtils.js";import"./cimAnalyzer.js";import"./floatRGBA.js";import"./ExpandedCIM.js";import"./capabilities2.js";import"./clusterUtils.js";import"./MD5.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/SizeStop.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./util2.js";import"./TileContainer.js";import"./vec3f32.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils6.js";import"./utils7.js";import"./normalizeUtilsSync.js";import"./projectionSupport.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./json.js";import"./Matcher.js";import"./TileInfoView.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"../core/signal.js";import"./tileUtils.js";import"./libtess.js";import"./TurboLine.js";import"./LRUCache.js";import"./MemCache.js";import"./ComputedAttributeStorage.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"./FeatureSetReader.js";import"./TimeOnly.js";import"./UpdatingHandles.js";import"./rbush.js";import"./quickselect.js";let u=class extends(a(n)){constructor(t){super(t),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};t([p({type:Boolean})],u.prototype,"frameCenter",void 0),t([p({type:Boolean})],u.prototype,"frameOutline",void 0),t([p({type:Boolean})],u.prototype,"lineOfSight",void 0),t([p({type:Boolean})],u.prototype,"sensorLocation",void 0),t([p({type:Boolean})],u.prototype,"sensorTrail",void 0),u=t([m("esri.layers.support.TelemetryDisplay")],u);const b=u,d=new e([255,127,0]);let f=class extends(j(h)){constructor(){super(...arguments),this._graphicsLayer=new l,this._frameOutlineGraphic=new s({symbol:{type:"simple-fill",outline:{type:"simple-line",color:d}}}),this._sensorTrailGraphic=new s({symbol:{type:"simple-line",color:d}}),this._lineOfSightGraphic=new s({symbol:{type:"simple-line",color:d}}),this._sensorLocationGraphic=new s({symbol:{type:"simple-marker",color:d}}),this._frameCenterGraphic=new s({symbol:{type:"simple-marker",color:d}}),this.layer=null,this.symbolColor=d,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=r(this._graphicsLayer)}initialize(){this.addHandles(i((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor}),o)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new b({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this.graphicsView=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new y(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([i((()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight]),(()=>this._updateVisibleTelemetryElements()),o),i((()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight]),(()=>this._updateGraphicGeometries()),o)])}detach(){this.container.removeAllChildren(),this.graphicsView=r(this.graphicsView)}supportsSpatialReference(t){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(t){this.graphicsView.processUpdate(t)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:t}=this.layer,{visibleTelemetryElements:e}=this;t&&e&&(e.frameOutline&&t.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&t.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&t.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&t.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&t.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};t([p()],f.prototype,"graphicsView",void 0),t([p()],f.prototype,"layer",void 0),t([p()],f.prototype,"symbolColor",void 0),t([p({type:b})],f.prototype,"visibleTelemetryElements",void 0),f=t([m("esri.views.2d.layers.VideoLayerView2D")],f);const g=f;export{g as default};
