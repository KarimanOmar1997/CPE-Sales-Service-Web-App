/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./typedArrayUtil.js";import"./Logger.js";import"./ensureType.js";import"../core/Error.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{d as s}from"./diffUtils.js";import{b as r}from"./heatmapUtils.js";import{o as i}from"./definitions.js";import{B as o}from"./BaseProcessor.js";import{g as a}from"./tileUtils.js";import"../config.js";import"../core/lang.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/property.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./screenUtils.js";import"./vec4.js";import"./vec4f64.js";class n{constructor(e,t){this.offset=e,this.extent=t}}let p=class extends o{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&s(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,s){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const o=this._tileKeyToFeatureSets.get(e.key.id);if(o&&null!=t.addOrUpdate&&t.addOrUpdate.hasFeatures&&o.set(t.addOrUpdate.instance,t),t.end){const t=[],o=function(e){const t=e.key,s=new Map,r=256,o=i,p=e.tileInfoView.tileInfo.isWrappable;return s.set(a(t,-1,-1,p).id,new n([-o,-o],[o-r,o-r,o,o])),s.set(a(t,0,-1,p).id,new n([0,-o],[0,o-r,o,o])),s.set(a(t,1,-1,p).id,new n([o,-o],[0,o-r,r,o])),s.set(a(t,-1,0,p).id,new n([-o,0],[o-r,0,o,o])),s.set(a(t,1,0,p).id,new n([o,0],[0,0,r,o])),s.set(a(t,-1,1,p).id,new n([-o,o],[o-r,0,o,r])),s.set(a(t,0,1,p).id,new n([0,o],[0,0,o,r])),s.set(a(t,1,1,p).id,new n([o,o],[0,0,r,r])),s}(e);this._tileKeyToFeatureSets.forEach(((s,r)=>{if(r===e.key.id)s.forEach((({addOrUpdate:e})=>{e&&t.push(e)}));else if(o.has(r)){const e=o.get(r),[i,a]=e.offset;s.forEach((({addOrUpdate:e})=>{if(e){const s=e.transform(i,a,1,1);t.push(s)}}))}}));const p=r(t,this._schema.mesh,512,512),m={tileKey:e.key.id,intensityInfo:p},l=[p.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",m,{...s,transferList:l})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};p=e([t("esri.views.2d.layers.features.processors.HeatmapProcessor")],p);const m=p;export{m as default};
