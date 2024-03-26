/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import s from"../../core/Error.js";import{f as e}from"../../chunks/messages.js";import r from"../../renderers/support/AuthoringInfo.js";import o from"../../renderers/support/AuthoringInfoVisualVariable.js";import{r as t}from"../../chunks/numberUtils.js";import i from"../../renderers/visualVariables/OpacityVariable.js";import{v as p,b as n,o as m,f as a,n as l,q as u,a as c}from"../../chunks/utils16.js";import{createVisualVariables as j}from"./size.js";import{createRenderer as y}from"./type.js";import d from"../statistics/predominantCategories.js";import h from"../statistics/summaryStatistics.js";import{getPredominanceExpressions as b}from"../statistics/support/predominanceUtils.js";import{v as k}from"../../chunks/binningUtils.js";import{b as g,f,c as S,g as v}from"../../chunks/layerUtils3.js";import{cloneScheme as U,getSchemes as w}from"../symbology/predominance.js";import"../../core/lang.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/handleUtils.js";import"../../core/promiseUtils.js";import"../../chunks/maybe.js";import"../../chunks/locale.js";import"../../chunks/tslib.es6.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../chunks/time.js";import"../../chunks/reader.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/enumeration.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../core/accessorSupport/decorators/cast.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../chunks/writer.js";import"../../chunks/opacityUtils.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/scaleUtils.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../chunks/utils11.js";import"../../chunks/timeUtils.js";import"../../chunks/quantizationUtils.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/generateRendererUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/arcgisLayerUrl.js";import"../../renderers/support/jsonUtils.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/Version.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../chunks/executeQuery.js";import"../../chunks/infoFor3D.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils6.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils7.js";import"../../chunks/urlUtils2.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/FullTextSearch.js";import"../../chunks/QuantizationParameters.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/statsWorker.js";import"../../chunks/utils13.js";import"../../views/support/colorUtils.js";import"../../chunks/colorUtils2.js";import"../../renderers/support/utils.js";import"../../chunks/utils8.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils9.js";import"../../chunks/ageUnit.js";import"../statistics/summaryStatisticsForAge.js";import"../statistics/support/ageUtils.js";import"../heuristics/sizeRange.js";import"../heuristics/scaleRange.js";import"../symbology/size.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils17.js";import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/PointCloudStretchRenderer.js";import"../../renderers/PointCloudUniqueValueRenderer.js";import"../statistics/uniqueValues.js";import"../symbology/type.js";import"../../chunks/colors2.js";async function V(V){const C=await async function(e){if(!(e?.layer&&e.view&&e.fields?.length))throw new s("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(e.fields.length<2)throw new s("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(e.fields.length>10)throw new s("predominance-renderer:invalid-parameters","Maximum 10 fields are supported");e.forBinning&&k(e,"predominance-renderer");const r={...e,layer:e.layer,fields:e.fields};r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled??=!0,r.includeOpacityVariable=e.includeOpacityVariable||!1,r.includeSizeVariable=e.includeSizeVariable||!1,r.sortBy??="count";const o=e.forBinning?g:f,t=S(r.layer,o,e.forBinning);if(!t)throw new s("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+v(f).join(", "));r.layer=t;const i=null!=r.signal?{signal:r.signal}:null;await t.load(i);const n=t.geometryType,m=r.symbolType.includes("3d");if(r.outlineOptimizationEnabled="polygon"===n&&r.outlineOptimizationEnabled,r.includeSizeVariable||(r.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&r.sizeOptimizationEnabled),"mesh"===n)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none",r.sizeOptimizationEnabled=!1;else{if(m&&("polyline"===n||"polygon"===n))throw new s("predominance-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(r.symbolType.includes("3d-volumetric")&&(!r.view||"3d"!==r.view.type))throw new s("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const a=r.fields.map((s=>s.name)),l=p(t,a,"predominance-renderer:invalid-parameters");if(l)throw l;return r}(V),I=C.layer,z=await async function(s){let e=s.predominanceScheme,r=null,o=null;const t=await n(s.basemap,s.view);if(r=null!=t.basemapId?t.basemapId:null,o=null!=t.basemapTheme?t.basemapTheme:null,e)return{scheme:U(e),basemapId:r,basemapTheme:o};const i=w({basemapTheme:o,geometryType:s.geometryType,numColors:s.numColors,theme:s.theme,worldScale:s.worldScale,view:s.view});return i&&(e=i.primaryScheme,r=i.basemapId,o=i.basemapTheme),{scheme:e,basemapId:r,basemapTheme:o}}({basemap:C.basemap,geometryType:I.geometryType,numColors:C.fields.length,predominanceScheme:C.predominanceScheme,worldScale:!!C.symbolType?.includes("3d-volumetric"),view:C.view}),T=z.scheme,x=C.fields.map((s=>s.name)),M=b(I,x),E=async function(s,o,t,i){const p=await e("esri/smartMapping/t9n/smartMapping"),n=s.layer,j={layer:s.layer,view:s.view,signal:s.signal},[h,b]=await Promise.all([d({layer:n,fields:i,view:s.view,signal:s.signal}),s.outlineOptimizationEnabled?m(j).catch(a):null]);let k=h;h?.predominantCategoryInfos||(k={predominantCategoryInfos:i.map((s=>({value:s,count:0})))});const g=b&&b.opacity,f=await y({layer:n,basemap:s.basemap,valueExpression:o.valueExpression,valueExpressionTitle:p.predominantCategory,numTypes:-1,defaultSymbolEnabled:s.defaultSymbolEnabled,sortBy:s.sortBy,typeScheme:t,statistics:{uniqueValueInfos:k.predominantCategoryInfos},legendOptions:s.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:(!s.includeSizeVariable||!s.sizeOptimizationEnabled)&&s.sizeOptimizationEnabled,symbolType:s.symbolType,colorMixMode:s.colorMixMode,edgesType:s.edgesType,view:s.view,signal:s.signal}),{renderer:S,basemapId:v,basemapTheme:U,uniqueValueInfos:w,excludedUniqueValueInfos:V}=f,C=S.uniqueValueInfos??[],I={};for(const e of s.fields){const s=n.getField(e.name);I[s.name]=e.label||s&&s.alias||e.name}if(C.forEach(((s,e)=>{const r=I[s.value];s.label=r,w[e].label=r})),s.includeSizeVariable){let e=n.geometryType,r=null;if("polygon"===e){const o=t.sizeScheme,i=o.background;S.backgroundFillSymbol=l(e,{type:s.symbolType,color:i.color,outline:u(i,e,g)}),r=o.marker.size,e="point"}else r="polyline"===e?t.width:t.size;const o=c(t.colors,C.length);C.forEach(((i,p)=>{const n=l(e,{type:s.symbolType,color:o[p],size:r,outline:u(t,e,g),meshInfo:{colorMixMode:s.colorMixMode,edgesType:s.edgesType}});i.symbol=n,w[p].symbol=n.clone()}))}return b&&b.visualVariables&&b.visualVariables.length&&(S.visualVariables=b.visualVariables.map((s=>s.clone()))),S.authoringInfo=new r({type:"predominance",fields:[...i]}),{renderer:S,predominantCategoryInfos:w,excludedCategoryInfos:V,predominanceScheme:t,basemapId:v,basemapTheme:U}}(C,M.predominantCategory,T,x),D=C.includeSizeVariable?async function(s,r,o){const t=await e("esri/smartMapping/t9n/smartMapping");return j({layer:s.layer,basemap:s.basemap,valueExpression:r.valueExpression,sqlExpression:r.statisticsQuery.sqlExpression,sqlWhere:r.statisticsQuery.sqlWhere,sizeScheme:o,sizeOptimizationEnabled:s.sizeOptimizationEnabled,worldScale:!!s.symbolType?.includes("3d-volumetric"),legendOptions:{title:t.sumOfCategories},view:s.view,signal:s.signal})}(C,M.size,T.sizeScheme):null,P=C.includeOpacityVariable?async function(s,p){const n=await e("esri/smartMapping/t9n/smartMapping"),m=await h({layer:s.layer,valueExpression:p.valueExpression,sqlExpression:p.statisticsQuery.sqlExpression,sqlWhere:p.statisticsQuery.sqlWhere,view:s.view,signal:s.signal}),{avg:a,stddev:l}=m,u=null==a||null==l,c=1/s.fields.length*100;let j=u?100:a+1.285*l;j>100&&(j=100);const y=t([c,j],{strictBounds:!0}),d=new i({valueExpression:p.valueExpression,stops:[{value:y[0],opacity:.15},{value:y[1],opacity:1}],legendOptions:{title:n.strengthOfPredominance}}),b=new o({type:"opacity",minSliderValue:m.min,maxSliderValue:m.max});return{visualVariable:d,statistics:m,defaultValuesUsed:u,authoringInfo:new r({visualVariables:[b]})}}(C,M.opacity):null,[O,R,q]=await Promise.all([E,D,P]),L=[],F=[];if(R&&(Array.prototype.push.apply(L,R.visualVariables.map((s=>s.clone()))),delete R.sizeScheme,O.size=R,Array.prototype.push.apply(F,R.authoringInfo.visualVariables.map((s=>s.clone())))),q&&(L.push(q.visualVariable.clone()),O.opacity=q,Array.prototype.push.apply(F,q.authoringInfo.visualVariables.map((s=>s.clone())))),L.length){const s=O.renderer.visualVariables||[];Array.prototype.push.apply(s,L),O.renderer.visualVariables=s,O.renderer.authoringInfo.visualVariables=F}return O}export{V as createRenderer};
