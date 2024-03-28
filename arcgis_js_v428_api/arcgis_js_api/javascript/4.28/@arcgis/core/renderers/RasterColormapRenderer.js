/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{e as t}from"../chunks/enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import c from"./support/ColormapInfo.js";import{c as p}from"../chunks/colorRampUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";import"../chunks/jsonMap.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";var m;let i=m=class extends r{constructor(o){super(o),this.colormapInfos=null,this.type="raster-colormap"}static createFromColormap(o,r){if(!o)return null;const s=5===o[0].length,t=[...o].sort(((o,r)=>o[0]-r[0])).map((o=>c.fromJSON({value:o[0],color:s?o.slice(1,5):o.slice(1,4).concat([255]),label:r?r[o[0]]??"":o[0]})));return new m({colormapInfos:t})}static createFromColorramp(o){const r=p(o);return m.createFromColormap(r)}clone(){return new m({colormapInfos:this.colormapInfos.map((o=>o.toJSON()))})}extractColormap(){return this.colormapInfos.map((({value:o,color:r})=>[o,r.r,r.g,r.b,r.a>1?r.a:255*r.a&255])).sort(((o,r)=>o[0]-r[0]))}};o([s({type:[c],json:{write:!0}})],i.prototype,"colormapInfos",void 0),o([t({rasterColormap:"raster-colormap"})],i.prototype,"type",void 0),i=m=o([e("esri.renderers.RasterColormapRenderer")],i);const n=i;export{n as default};