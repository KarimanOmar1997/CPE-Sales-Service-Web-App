/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{clone as o}from"../core/lang.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as s}from"../chunks/enumeration.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{w as i}from"../chunks/writer.js";import n,{h as l,l as c,v as a}from"./Font.js";import p from"./Symbol3DLayer.js";import{c as m,s as h}from"../chunks/materialUtils.js";import u from"../Color.js";import{JSONSupport as j}from"../core/JSONSupport.js";import{S as y}from"../chunks/Symbol3DMaterial.js";import{ClonableMixin as d}from"../core/Clonable.js";import"../chunks/typedArrayUtil.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../chunks/screenUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../chunks/time.js";import"../chunks/opacityUtils.js";import"../chunks/colorUtils.js";var f;let g=f=class extends j{constructor(){super(...arguments),this.color=new u([0,0,0,1]),this.size=0}clone(){const t={color:o(this.color),size:this.size};return new f(t)}};t([e(m)],g.prototype,"color",void 0),t([e(h)],g.prototype,"size",void 0),g=f=t([r("esri.symbols.support.Symbol3DHalo")],g);let k=class extends(d(j)){constructor(t){super(t),this.color=null}};var z;t([e(m)],k.prototype,"color",void 0),k=t([r("esri.symbols.support.Symbol3DTextBackground")],k);let b=z=class extends p{constructor(t){super(t),this._userSize=void 0,this.halo=null,this.horizontalAlignment="center",this.lineHeight=1,this.material=null,this.background=null,this.text=null,this.type="text",this.verticalAlignment="baseline"}get font(){return this._get("font")||null}set font(t){null!=t&&null!=this._userSize&&(t.size=this._userSize),this._set("font",t)}writeFont(t,o,e,s){const r={...s,textSymbol3D:!0};o.font=t.write({},r),delete o.font.size}get size(){return null!=this._userSize?this._userSize:null!=this.font?.size?this.font.size:9}set size(t){this._userSize=t,null!=this.font&&(this.font.size=this._userSize),this.notifyChange("size")}clone(){const t=new z({enabled:this.enabled,font:this.font&&o(this.font),halo:this.halo&&o(this.halo),horizontalAlignment:this.horizontalAlignment,lineHeight:this.lineHeight,material:null!=this.material?this.material.clone():null,text:this.text,verticalAlignment:this.verticalAlignment,background:o(this.background)});return t._userSize=this._userSize,t}static fromTextSymbol(t){return new z({font:null!=t.font?t.font.clone():new n,halo:(e=t.haloColor,s=t.haloSize,e&&null!=s&&s>0?new g({color:o(e),size:s}):null),horizontalAlignment:t.horizontalAlignment,lineHeight:t.lineHeight,material:t.color?new y({color:t.color.clone()}):null,text:t.text,verticalAlignment:t.verticalAlignment,background:t.backgroundColor?new k({color:t.backgroundColor.clone()}):null});var e,s}};t([e({type:n,json:{write:!0}})],b.prototype,"font",null),t([i("font")],b.prototype,"writeFont",null),t([e({type:g,json:{write:!0}})],b.prototype,"halo",void 0),t([e({...l,json:{default:"center",write:!0}})],b.prototype,"horizontalAlignment",void 0),t([e({...c,json:{default:1,write:!0}})],b.prototype,"lineHeight",void 0),t([e({type:y,json:{write:!0}})],b.prototype,"material",void 0),t([e({type:k,json:{write:!0}})],b.prototype,"background",void 0),t([e(h)],b.prototype,"size",null),t([e({type:String,json:{write:!0}})],b.prototype,"text",void 0),t([s({Text:"text"},{readOnly:!0})],b.prototype,"type",void 0),t([e({...a,json:{default:"baseline",write:!0}})],b.prototype,"verticalAlignment",void 0),b=z=t([r("esri.symbols.TextSymbol3DLayer")],b);const v=b;export{v as default};
