/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{clone as o}from"../core/lang.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{w as i}from"../chunks/writer.js";import{collectArcadeFieldNames as e}from"../layers/support/fieldUtils.js";import p from"./Renderer.js";import{VisualVariablesMixin as l}from"./mixins/VisualVariablesMixin.js";import{DictionaryLoader as m}from"../chunks/DictionaryLoader.js";import"../chunks/typedArrayUtil.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../chunks/time.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./support/AuthoringInfo.js";import"./support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./visualVariables/ColorVariable.js";import"./visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"./visualVariables/support/ColorStop.js";import"./visualVariables/OpacityVariable.js";import"./visualVariables/support/OpacityStop.js";import"../chunks/opacityUtils.js";import"./visualVariables/RotationVariable.js";import"./visualVariables/SizeVariable.js";import"../chunks/screenUtils.js";import"./visualVariables/support/SizeStop.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"../layers/support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";var n;let a=n=class extends(l(p)){constructor(s){super(s),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new m(this.url,this.config,this.fieldMap)}writeData(s,o){s&&(o.scalingExpressionInfo={expression:s,returnType:"number"})}writeVisualVariables(s,o,t,r){r?.origin||super.writeVisualVariables(s,o,t,r)}clone(){return new n({config:o(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:o(this.fieldMap),url:o(this.url),visualVariables:o(this.visualVariables)})}async getSymbolAsync(s,o){return this._loader.getSymbolAsync(s,o)}async collectRequiredFields(s,o){await this.collectVVRequiredFields(s,o),this.scaleExpression&&await e(s,o,this.scaleExpression);for(const t in this.fieldMap){const r=this.fieldMap[t];o.has(r)&&s.add(r)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((s,o)=>s+o.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};s([t({type:m})],a.prototype,"_loader",null),s([t({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],a.prototype,"config",void 0),s([t({type:Object,json:{write:!0}})],a.prototype,"fieldMap",void 0),s([t({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],a.prototype,"scaleExpression",void 0),s([i("scaleExpression")],a.prototype,"writeData",null),s([t({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(s){return{enabled:!!s&&!!this.scaleExpression}}}}})],a.prototype,"scaleExpressionTitle",void 0),s([t({type:String,json:{write:!0}})],a.prototype,"url",void 0),s([i("visualVariables")],a.prototype,"writeVisualVariables",null),a=n=s([r("esri.renderers.DictionaryRenderer")],a);const u=a;export{u as default};