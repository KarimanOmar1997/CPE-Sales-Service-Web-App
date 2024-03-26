/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{B as i}from"./BitmapTileContainer.js";const r=r=>{let o=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new i(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return o=e([t("esri.views.2d.layers.BitmapTileLayerView2D")],o),o};function o(e,t,i,r){if(i.level===r.level)return t;const o=e.tileInfo.size,s=e.getTileResolution(i.level),a=e.getTileResolution(r.level);let l=e.getLODInfoAt(r.level);const c=l.getXForColumn(r.col),m=l.getYForRow(r.row);l=e.getLODInfoAt(i.level);const h=l.getXForColumn(i.col),u=l.getYForRow(i.row),d=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/o[0],p=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/o[1],g=Math.round(d*((c-h)/s)),w=Math.round(p*(-(m-u)/s)),f=Math.round(d*o[0]*(a/s)),v=Math.round(p*o[1]*(a/s)),T=n(o);return T.getContext("2d").drawImage(t,g,w,f,v,0,0,o[0],o[1]),T}function n(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{r as B,n as c,o as r};
