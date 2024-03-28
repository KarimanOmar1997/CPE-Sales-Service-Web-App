/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{z as e}from"./unitFormatUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{S as i}from"./automaticLengthMeasurementUtils.js";let a=class extends i{constructor(t){super(t),this.type="translate-graphic",this.distance=e}clear(){this.distance=e}};t([o()],a.prototype,"type",void 0),t([o()],a.prototype,"distance",void 0),a=t([s("esri.views.interactive.tooltip.TranslateGraphicTooltipInfo")],a);let r=class extends i{constructor(t){super(t),this.type="translate-graphic-z",this.distance=e}clear(){this.distance=e}};t([o()],r.prototype,"type",void 0),t([o()],r.prototype,"distance",void 0),r=t([s("esri.views.interactive.tooltip.TranslateGraphicZTooltipInfo")],r);let l=class extends i{constructor(t){super(t),this.type="translate-graphic-xy",this.distance=e}};t([o()],l.prototype,"type",void 0),t([o()],l.prototype,"distance",void 0),l=t([s("esri.views.interactive.tooltip.TranslateGraphicXYTooltipInfo")],l);let p=class extends i{constructor(t){super(t),this.type="translate-vertex",this.distance=e,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=e,this.elevation=null,this.area=null,this.totalLength=null}};t([o()],p.prototype,"type",void 0),t([o()],p.prototype,"distance",void 0),t([o()],p.prototype,"elevation",void 0),t([o()],p.prototype,"area",void 0),t([o()],p.prototype,"totalLength",void 0),p=t([s("esri.views.interactive.tooltip.TranslateVertexTooltipInfo")],p);let n=class extends i{constructor(t){super(t),this.type="translate-vertex-z",this.distance=e,this.elevation=null}clear(){this.distance=e,this.elevation=null}};t([o()],n.prototype,"type",void 0),t([o()],n.prototype,"distance",void 0),t([o()],n.prototype,"elevation",void 0),n=t([s("esri.views.interactive.tooltip.TranslateVertexZTooltipInfo")],n);let c=class extends i{constructor(t){super(t),this.type="translate-vertex-xy",this.distance=e,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=e,this.elevation=null,this.area=null,this.totalLength=null}};t([o()],c.prototype,"type",void 0),t([o()],c.prototype,"distance",void 0),t([o()],c.prototype,"elevation",void 0),t([o()],c.prototype,"area",void 0),t([o()],c.prototype,"totalLength",void 0),c=t([s("esri.views.interactive.tooltip.TranslateVertexXYTooltipInfo")],c);export{a as T,r as a,l as b,n as c,c as d,p as e};