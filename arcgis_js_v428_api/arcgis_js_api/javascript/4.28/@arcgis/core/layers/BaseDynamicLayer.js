/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import s from"../request.js";import r from"../core/Error.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import i from"./Layer.js";import{BlendLayer as m}from"./mixins/BlendLayer.js";import{RefreshableLayer as p}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as a}from"./mixins/ScaleRangeLayer.js";import"../config.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../chunks/time.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Evented.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/utils3.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/layerContainerType.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";var n;let c=n=class extends(m(a(p(i)))){constructor(){super(...arguments),this.type="base-dynamic"}getImageUrl(){throw new r("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")}async fetchImage(t,r,e,o){const i=this.getImageUrl(t,r,e),m={responseType:"image",signal:o?.signal,query:{...this.refreshParameters}};if("string"==typeof i){const{data:t}=await s(i,m);return t}const p=await i,{data:a}=await s(p,m);return a}async fetchImageBitmap(t,e,o,i={}){if(this.fetchImage!==n.prototype.fetchImage){const s=await this.fetchImage(t,e,o,i);try{return createImageBitmap(s)}catch(s){throw new r("request:server","Unable to load image",{error:s,extent:t,width:e,height:o})}}const m=this.getImageUrl(t,e,o),p={responseType:"blob",signal:i?.signal,query:{...this.refreshParameters}};if("string"==typeof m){const{data:t}=await s(m,p);return createImageBitmap(t)}const a=await m,{data:c}=await s(a,p);return createImageBitmap(c)}};t([e({readOnly:!0,value:"base-dynamic"})],c.prototype,"type",void 0),t([e({type:["show","hide"]})],c.prototype,"listMode",void 0),c=n=t([o("esri.layers.BaseDynamicLayer")],c);const j=c;export{j as default};
