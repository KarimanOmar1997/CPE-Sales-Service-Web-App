/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as t}from"../../chunks/reader.js";import{subclass as r,W as i}from"../../core/accessorSupport/decorators/subclass.js";import{w as e}from"../../chunks/writer.js";import{collectField as a,collectArcadeFieldNames as p}from"../../layers/support/fieldUtils.js";import l from"../visualVariables/ColorVariable.js";import m from"../visualVariables/OpacityVariable.js";import n from"../visualVariables/RotationVariable.js";import u from"../visualVariables/SizeVariable.js";import c from"../visualVariables/VisualVariable.js";import j from"../../core/Accessor.js";import{J as b}from"../../chunks/jsonMap.js";import{L as y}from"../../chunks/Logger.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../core/promiseUtils.js";import"../../chunks/maybe.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../core/Handles.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../chunks/time.js";import"../../chunks/assets.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../visualVariables/support/ColorStop.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../visualVariables/support/OpacityStop.js";import"../../chunks/opacityUtils.js";import"../../chunks/screenUtils.js";import"../visualVariables/support/SizeStop.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/LegendOptions.js";function h(s){return s.match(V)?.[1]?.replace(/\\'/g,"'")??null}const V=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/,d={color:l,size:u,opacity:m,rotation:n},k=new b({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),f=/^\[([^\]]+)\]$/i;let g=class extends j{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(s){if(this._resetVariables(),s=s&&s.filter((s=>!!s)),s?.length){for(const o of s)switch(o.type){case"color":this.colorVariables.push(o);break;case"opacity":this.opacityVariables.push(o);break;case"rotation":this.rotationVariables.push(o);break;case"size":this.sizeVariables.push(o)}this.sizeVariables.length&&this.sizeVariables.some((s=>!!s.target))&&s.sort(((s,o)=>{let t=null;return t=s.target===o.target?0:s.target?1:-1,t}));for(let o=0;o<s.length;o++)s[o].index=o;this._set("visualVariables",s)}else this._set("visualVariables",s)}readVariables(s,o,t){const{rotationExpression:r,rotationType:e}=o,a=r?.match(f),p=a?.[1];if(p&&(s||(s=[]),s.push({type:"rotationInfo",rotationType:e,field:p})),s)return s.map((s=>{const o=k.read(s.type),r=d[o];r||(y.getLogger(this).warn(`Unknown variable type: ${o}`),t?.messages&&t.messages.push(new i("visual-variable:unsupported",`visualVariable of type '${o}' is not supported`,{definition:s,context:t})));const e=new r;return e.read(s,t),e}))}writeVariables(s,o){const t=[];for(const r of s){const s=r.toJSON(o);s&&t.push(s)}return t}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};s([o()],g.prototype,"visualVariables",null),g=s([r("esri.renderers.visualVariables.VisualVariableFactory")],g);const S=g,v={base:c,key:"type",typeMap:{opacity:m,color:l,rotation:n,size:u}},U=i=>{let l=class extends i{constructor(){super(...arguments),this._vvFactory=new S}set visualVariables(s){this._vvFactory.visualVariables=s,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(s,o,t){return this._vvFactory.readVariables(s,o,t)}writeVisualVariables(s,o,t,r){o[t]=this._vvFactory.writeVariables(s,r)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const s of this.visualVariables)if(s.arcadeRequired)return!0;return!1}hasVisualVariables(s,o){return s?this.getVisualVariablesForType(s,o).length>0:this.getVisualVariablesForType("size",o).length>0||this.getVisualVariablesForType("color",o).length>0||this.getVisualVariablesForType("opacity",o).length>0||this.getVisualVariablesForType("rotation",o).length>0}getVisualVariablesForType(s,o){const t=this.visualVariables;return t?t.filter((t=>t.type===s&&("string"==typeof o?t.target===o:!1!==o||!t.target))):[]}async collectVVRequiredFields(s,o){let t=[];this.visualVariables&&(t=t.concat(this.visualVariables));for(const r of t)r&&(r.field&&a(s,o,r.field),r.normalizationField&&a(s,o,r.normalizationField),r.valueExpression&&(D(r.valueExpression,s,o)||await p(s,o,r.valueExpression)))}};return s([o({types:[v],value:null,json:{write:!0}})],l.prototype,"visualVariables",null),s([t("visualVariables",["visualVariables","rotationType","rotationExpression"])],l.prototype,"readVisualVariables",null),s([e("visualVariables")],l.prototype,"writeVisualVariables",null),l=s([r("esri.renderers.mixins.VisualVariablesMixin")],l),l};function D(s,o,t){const r=h(s);return null!=r&&(a(o,t,r),!0)}export{U as VisualVariablesMixin,h as m};
