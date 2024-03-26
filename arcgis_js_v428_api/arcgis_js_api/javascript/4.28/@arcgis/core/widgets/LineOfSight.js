/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i,{l as r}from"./Widget.js";import n from"./LineOfSight/LineOfSightViewModel.js";import{g as p}from"../chunks/globalCss.js";import{l as m}from"../chunks/legacyIcon.js";import"../chunks/widgetUtils.js";import{m as l}from"../chunks/messageBundle.js";import{t as a}from"../chunks/jsxFactory.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../analysis/LineOfSightAnalysis.js";import"../chunks/Analysis.js";import"../core/Clonable.js";import"../core/Identifiable.js";import"../analysis/LineOfSightAnalysisObserver.js";import"../chunks/featureReferenceUtils.js";import"../chunks/persistable.js";import"../chunks/MD5.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/Point.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/ElevationInfo.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../analysis/LineOfSightAnalysisTarget.js";import"../chunks/collectionUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/aaBoundingBox.js";import"../chunks/elevationInfoUtils.js";import"./LineOfSight/LineOfSightTarget.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/AnalysisViewModel.js";const u="esri-line-of-sight",c={base:u,actions:`${u}__actions`,container:`${u}__container`,error:`${u}__error`,hint:`${u}__hint`,hintText:`${u}__hint-text`,newAnalysisButton:`${u}__new-analysis-button`,widgetIcon:m.lineOfSight},j={newAnalysisButton:`${u}__new-button`,continueButton:`${u}__continue-button`,doneButton:`${u}__done-button`};let h=class extends i{constructor(s,o){super(s,o),this.iconClass=c.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new n,this._onNewAnalysis=()=>{t(this.viewModel.start())},this._onDone=()=>{this.viewModel.stop()},this._onContinue=()=>{this.viewModel.continue()}}loadDependencies(){return r({button:()=>import("../chunks/calcite-button.js")})}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(s){this.viewModel.analysis=s}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}get visible(){return this.viewModel.visible}set visible(s){this.viewModel.visible=s}render(){return a("div",{class:this.classes(c.base,p.widget,p.panel),role:"presentation"},this._renderContainerNode())}_renderContainerNode(){if(!this.visible)return null;if(!this.viewModel.supported)return this._renderUnsupportedMessage();let s=null;const t=[this._renderNewAnalysisButton()];return"creating"===this.viewModel.state?(s=this._renderHint(),t.unshift(this._renderDoneButton())):"created"===this.viewModel.state&&this.viewModel.targets.length>0&&t.unshift(this._renderContinueButton()),a("div",{class:c.container},s,a("div",{class:c.actions},t))}_renderUnsupportedMessage(){return a("div",{class:c.error,key:"esri-line-of-sight__unsupported"},a("p",null,this.messages.unsupported))}_renderHint(){return a("div",{class:c.hint,key:"esri-line-of-sight__hint"},a("p",{class:c.hintText},this.messages.hint))}_renderNewAnalysisButton(){return this._renderButton({className:c.newAnalysisButton,id:j.newAnalysisButton,label:this.messages.newAnalysis,onClick:this._onNewAnalysis,primary:!0})}_renderDoneButton(){return this._renderButton({id:j.doneButton,label:this.messages.done,onClick:this._onDone,primary:!1})}_renderContinueButton(){return this._renderButton({id:j.newAnalysisButton,label:this.messages.continueAnalysis,onClick:this._onContinue,primary:!1})}_renderButton({className:s,id:t,label:o,onClick:e,primary:i}){const r="disabled"===this.viewModel.state;return a("calcite-button",{appearance:i?"solid":"outline-fill",class:s,"data-id":t,disabled:r,key:t,onclick:e},o)}get test(){return{IDS:j}}};s([o()],h.prototype,"active",null),s([o({constructOnly:!0,nonNullable:!0})],h.prototype,"analysis",null),s([o()],h.prototype,"iconClass",void 0),s([o()],h.prototype,"icon",void 0),s([o()],h.prototype,"label",null),s([o(),l("esri/widgets/LineOfSight/t9n/LineOfSight")],h.prototype,"messages",void 0),s([o()],h.prototype,"view",null),s([o({type:n})],h.prototype,"viewModel",void 0),s([o()],h.prototype,"visible",null),h=s([e("esri.widgets.LineOfSight")],h);const y=h;export{y as default};
