/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import r from"../Graphic.js";import"./Logger.js";import{j as t}from"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{s}from"./shared.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import i from"../core/Collection.js";import{c as n,r as l}from"./collectionUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";let p=class extends i{constructor(e){super(e),this.addHandles([this.on("before-add",(e=>{null==e.item&&e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(i.ofType(this.itemType.Type))(e):new i(e)}};function c(e,r){return{type:e,cast:n,set(t){const s=l(t,this._get(r),e);s.owner=this,this._set(r,s)}}}e([a()],p.prototype,"owner",null),p=e([o("esri.core.support.OwningCollection")],p);let m=class extends p{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};e([s({Type:r,ensureType:t(r)})],m.prototype,"itemType",void 0),m=e([o("esri.support.GraphicsCollection")],m);export{m as G,p as O,c as o};
