/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import i from"../Slider/SliderViewModel.js";import{formatDateLabel as e,formatNumberLabel as r,getStopChanges as n}from"./support/utils.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../intl.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../renderers/support/utils.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils3.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/utils8.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils9.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";let p=class extends i{constructor(t){super(t),this._initialStopValues=[],this._max=null,this._min=null,this.hasTimeData=!1,this.inputFormatFunction=(t,s)=>"max"===s?this.getUnzoomedMax().toString():"min"===s?this.getUnzoomedMin().toString():t.toString(),this.inputParseFunction=null,this.labelFormatFunction=t=>{if(this.hasTimeData)return e(t);const{max:s,min:o,precision:i}=this,n=s-o>10?2:i;return r(parseFloat(t.toFixed(n)))},this.thumbsConstrained=!1,this.zoomingEnabled=!0}set breaks(t){this._set("breaks",t),this.notifyChange("max"),this.notifyChange("min")}set stops(t){if(t?.length){const{max:s,min:o}=this,i=this.getValuesFromStops(t),e={};null!=o&&i.some((t=>t<o))&&(e.min=Math.min(...i)),null!=s&&i.some((t=>t>s))&&(e.max=Math.max(...i)),this.set({...e}),this._initialStopValues=i}else this._initialStopValues=null;this._set("stops",t||null),this.notifyChange("values")}get labels(){const{values:t}=this,s=t&&t.length?t.map(((t,s)=>this.getLabelForValue(t,"value",s))):[],o=this.getUnzoomedMax(),i=this.getUnzoomedMin();return{max:this.getLabelForValue(o,"max"),min:this.getLabelForValue(i,"min"),values:s}}get max(){const{breaks:t}=this;return t?.length?t[t.length-1].max:this.max}set max(t){const{zoomOptions:s}=this;if(null!=s?.max){const o=this.values;let i=s.max;if(t<i&&(i=t,s.max=t),o&&o.length)for(let s=0;s<o.length;s++)t<o[s]&&this.setValue(s,t);this._storeZoomMax(i,t)}else this.updateBreakMax(t),this.setMax(t);this.notifyChange("labels")}get min(){const{breaks:t}=this;return t?.length?t[0].min:this.min}set min(t){const{zoomOptions:s}=this;if(null!=s?.min){const o=this.values;let i=s.min;if(t>i&&(i=t,s.min=t),o&&o.length)for(let s=0;s<o.length;s++)t>o[s]&&this.setValue(s,t);this._storeZoomMin(i,t)}else this.updateBreakMin(t),this.setMin(t);this.notifyChange("labels")}get state(){const{max:t,min:s,values:o}=this;return null!=t&&null!=s&&o.length>0?"ready":"disabled"}get values(){const{breaks:t,stops:s}=this;if(!t&&!s)return[];if(t?.length){const s=t.map((t=>t.max));return s.pop(),s}if(s?.length<2)return[];const o=this.getValuesFromStops();return[o[0],o[o.length-1]]}set zoomOptions(t){const{zoomingEnabled:s,zoomOptions:o}=this;if(s){if(o){const s=null!=this._max?this._max:this.max,o=null!=this._min?this._min:this.min;if(t){const{max:i,min:e}=t,r=null!=i,n=null!=e,p=n?t.min:o,m=n?o:null,l=r?t.max:s,a=r?s:null;this._storeZoomMin(p,m),this._storeZoomMax(l,a)}else this.setMax(s),this.setMin(o),this._min=null,this._max=null}else if(t){const{max:s,min:o}=t;null!=o&&this._storeZoomMin(t.min,this.min),null!=s&&this._storeZoomMax(t.max,this.max)}this._set("zoomOptions",t),this.notifyChange("max"),this.notifyChange("min")}}getStopIndexFromValueIndex(t){const{stops:s}=this,o=this.values[t];return 0===t?o<=this.values[1]?0:s.length-1:1===t?this.values[0]>=o?0:s.length-1:null}getStopChanges(t,s){const o=this.stops,i=this.getStopIndexFromValueIndex(t),e=this.getValuesFromStops();e[i]=s;const[r,n]=[e[0],e[e.length-1]].sort(((t,s)=>t>s?1:-1)),p=n-r,m=o.length-1;return e.map(((t,s)=>({index:s,value:this.toPrecision(r+s*p/m)})))}setValue(t,s){const{max:o,min:i,values:e}=this,r=e[t];if(isNaN(s)||r===s||s>o||s<i)return;e[t]=this.toPrecision(s),this._set("values",[...e]);const p=e.slice().sort(((t,s)=>t>s?1:-1)),m=p[0],l=p[p.length-1],a=n(m,l,this._initialStopValues??[]);this.updateStops(a),this.updateBreaks(),this.notifyChange("labels")}getValuesFromStops(t){const s=t||this.stops;return s?.map((t=>t.hasOwnProperty("ratio")?t.ratio:t.value))}updateBreaks(){const{breaks:t,values:s}=this;t?.length&&s.slice().sort(((t,s)=>t>s?1:-1)).forEach(((s,o)=>{t[o].max=s,null!=t[o+1]&&(t[o+1].min=s)}))}updateBreakMax(t){const{breaks:s,max:o,min:i}=this;!isNaN(t)&&o!==t&&null!=i&&t>i&&s?.length&&(s[s.length-1].max=t)}updateBreakMin(t){const{breaks:s,max:o,min:i}=this;!isNaN(t)&&i!==t&&null!=o&&t<o&&s?.length&&(s[0].min=t)}updateStops(t){const{stops:s}=this,o=this.getValuesFromStops();if(o?.length){for(const s of t)o[s.index]=s.value;s.forEach(((t,s)=>{t.hasOwnProperty("ratio")?t.ratio=o[s]:t.value=o[s]}))}}getUnzoomedMax(){return this.zoomOptions&&null!=this._max?this._max:this.max}getUnzoomedMin(){return this.zoomOptions&&null!=this._min?this._min:this.min}_storeZoomMax(t,s){this._max=s,this.setMax(t)}_storeZoomMin(t,s){this._min=s,this.setMin(t)}};t([s()],p.prototype,"breaks",null),t([s()],p.prototype,"stops",null),t([s()],p.prototype,"hasTimeData",void 0),t([s()],p.prototype,"inputFormatFunction",void 0),t([s()],p.prototype,"inputParseFunction",void 0),t([s()],p.prototype,"labelFormatFunction",void 0),t([s({readOnly:!0})],p.prototype,"labels",null),t([s()],p.prototype,"max",null),t([s()],p.prototype,"min",null),t([s({readOnly:!0})],p.prototype,"state",null),t([s()],p.prototype,"thumbsConstrained",void 0),t([s({readOnly:!0})],p.prototype,"values",null),t([s()],p.prototype,"zoomingEnabled",void 0),t([s()],p.prototype,"zoomOptions",null),p=t([o("esri.widgets.smartMapping.SmartMappingSliderViewModel")],p);const m=p;export{m as default};