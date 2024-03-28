/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as s}from"../../core/Clonable.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import{I as e}from"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{e as p}from"../../chunks/enumeration.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{e as c}from"../../chunks/date.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";let m=class extends(s(r)){constructor(o){super(o),this.dateFormat=null,this.digitSeparator=!1,this.places=null}};o([p(c)],m.prototype,"dateFormat",void 0),o([t({type:Boolean,json:{write:!0}})],m.prototype,"digitSeparator",void 0),o([t({type:e,json:{write:!0}})],m.prototype,"places",void 0),m=o([i("esri.popup.support.FieldInfoFormat")],m);const a=m;export{a as default};