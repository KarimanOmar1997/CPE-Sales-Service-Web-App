/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import r from"./Input.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/lang.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../chunks/time.js";var e;let p=e=class extends r{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new e({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};o([s({type:String,json:{write:!0}})],p.prototype,"noValueOptionLabel",void 0),o([s({type:Boolean,json:{write:!0}})],p.prototype,"showNoValueOption",void 0),o([s({type:["combo-box"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=e=o([t("esri.form.elements.inputs.ComboBoxInput")],p);const i=p;export{i as default};
