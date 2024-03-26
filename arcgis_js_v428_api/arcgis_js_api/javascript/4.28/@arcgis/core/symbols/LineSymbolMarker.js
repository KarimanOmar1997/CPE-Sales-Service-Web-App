/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import o from"../Color.js";import{JSONSupport as s}from"../core/JSONSupport.js";import{clone as t}from"../core/lang.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as i}from"../chunks/enumeration.js";import{r as p}from"../chunks/reader.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{w as l}from"../chunks/writer.js";import{l as c}from"../chunks/lineMarkers.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/typedArrayUtil.js";import"../chunks/Logger.js";import"../config.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";import"../chunks/jsonMap.js";var m;let a=m=class extends s{constructor(r){super(r),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(r,o,s,t){o[s]="web-map"===t?.origin?"arrow":r}set color(r){this._set("color",r)}readColor(r){return null!=r?.[0]?[r[0],r[1],r[2],r[3]/255]:r}writeColor(r,o,s,t){"web-map"===t?.origin||(o[s]=r)}clone(){return new m({color:t(this.color),placement:this.placement,style:this.style})}hash(){return`${this.placement}.${this.color?.hash()}.${this.style}`}};r([e({type:["begin","end","begin-end"],json:{write:!0}})],a.prototype,"placement",void 0),r([i({"line-marker":"line-marker"},{readOnly:!0}),e({json:{origins:{"web-map":{write:!1}}}})],a.prototype,"type",void 0),r([e({type:c})],a.prototype,"style",void 0),r([l("style")],a.prototype,"writeStyle",null),r([e({type:o,value:null,json:{write:{allowNull:!0}}})],a.prototype,"color",null),r([p("color")],a.prototype,"readColor",null),r([l("color")],a.prototype,"writeColor",null),a=m=r([n("esri.symbols.LineSymbolMarker")],a);const u=a;export{u as default};
