/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{clone as s}from"../../core/lang.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import{I as i}from"../../chunks/ensureType.js";import{e}from"../../chunks/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import m from"./ColorRamp.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";var c;let l=c=class extends m{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new c({fromColor:s(this.fromColor),toColor:s(this.toColor),algorithm:this.algorithm})}};o([e({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],l.prototype,"algorithm",void 0),o([t({type:r,json:{type:[i],write:!0}})],l.prototype,"fromColor",void 0),o([t({type:r,json:{type:[i],write:!0}})],l.prototype,"toColor",void 0),o([t({type:["algorithmic"]})],l.prototype,"type",void 0),l=c=o([p("esri.rest.support.AlgorithmicColorRamp")],l);const h=l;export{h as default};
