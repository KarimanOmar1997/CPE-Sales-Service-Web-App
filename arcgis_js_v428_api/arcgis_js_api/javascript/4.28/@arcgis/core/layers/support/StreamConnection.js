/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import s from"../../core/Error.js";import o from"../../core/Evented.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";let i=class extends o.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new s("stream-connection",this.errorString):null}onFeature(r){this.emit("data-received",r)}onMessage(r){this.emit("message-received",r)}};r([e({readOnly:!0})],i.prototype,"connectionError",null),i=r([t("esri.layers.support.StreamConnection")],i);const c=i;export{c as default};
