/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import s from"./mixins/MediaInfo.js";import o from"./support/ImageMediaInfoValue.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";var i;let p=i=class extends s{constructor(r){super(r),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};r([t({type:Number,json:{write:!0}})],p.prototype,"refreshInterval",void 0),r([t({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),r([t({type:o,json:{write:!0}})],p.prototype,"value",void 0),p=i=r([e("esri.popup.content.ImageMediaInfo")],p);const n=p;export{n as default};
