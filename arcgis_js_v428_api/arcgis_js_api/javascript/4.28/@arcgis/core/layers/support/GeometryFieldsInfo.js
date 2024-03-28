/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{E as e,F as t}from"../../chunks/unitUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";let c=class extends(r(o)){constructor(s){super(s),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};s([i({type:String,json:{read:{source:"shapeAreaFieldName"}}})],c.prototype,"shapeAreaField",void 0),s([i({type:String,json:{read:{source:"shapeLengthFieldName"}}})],c.prototype,"shapeLengthField",void 0),s([i({type:String,json:{read:s=>e.read(s)||t.read(s)}})],c.prototype,"units",void 0),c=s([p("esri.layers.support.GeometryFieldsInfo")],c);const n=c;export{n as default};