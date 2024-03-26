/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import o from"../../../Color.js";import{JSONSupport as r}from"../../../core/JSONSupport.js";import{t}from"../../../chunks/screenUtils.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import{I as i}from"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as p}from"../../../core/accessorSupport/decorators/subclass.js";import{w as c}from"../../../chunks/writer.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/lang.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/time.js";var l;let m=l=class extends r{constructor(s){super(s),this.color=null,this.label=null,this.size=null,this.value=null}writeValue(s,o,r){o[r]=s??0}clone(){return new l({color:this.color,label:this.label,size:this.size,value:this.value})}};s([e({type:o,json:{type:[i],write:!0}})],m.prototype,"color",void 0),s([e({type:String,json:{write:!0}})],m.prototype,"label",void 0),s([e({type:Number,cast:t,json:{write:!0}})],m.prototype,"size",void 0),s([e({type:Number,json:{write:{allowNull:!0}}})],m.prototype,"value",void 0),s([c("value")],m.prototype,"writeValue",null),m=l=s([p("esri.renderers.visualVariables.support.ColorSizeStop")],m);const u=m;export{u as default};
