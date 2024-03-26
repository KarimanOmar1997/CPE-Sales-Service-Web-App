/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import s from"../../../Basemap.js";import r from"../../../core/Collection.js";import o from"../../../core/Error.js";import e from"../../../core/Loadable.js";import{L as a}from"../../../chunks/Logger.js";import{EsriPromiseMixin as i}from"../../../core/Promise.js";import{isAbortError as l}from"../../../core/promiseUtils.js";import{watch as p,initial as m}from"../../../core/reactiveUtils.js";import{property as n}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as c}from"../../../core/accessorSupport/decorators/subclass.js";import u from"../../../portal/Portal.js";import h from"./LocalBasemapsSource.js";import"../../../request.js";import"../../../config.js";import"../../../core/lang.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../chunks/time.js";import"../../../chunks/collectionUtils.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../chunks/writer.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/assets.js";import"../../../portal/PortalItem.js";import"../../../chunks/reader.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/locale.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../chunks/messages.js";import"../../../support/BasemapStyle.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils2.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";const j=r.ofType(s);let d=class extends(e.LoadableMixin(i(h))){constructor(t){super(t),this._lastPortalBasemapFetchController=null,this.basemaps=new j,this.filterFunction=null,this.portal=u.getDefault(),this.query=null,this.updateBasemapsCallback=null,this.viewType=null}initialize(){this.addHandles([p((()=>[this.filterFunction,this.loadStatus,this.portal?.basemapGalleryGroupQuery,this.portal?.basemapGalleryGroupQuery3D,this.portal?.user,this.query,this.updateBasemapsCallback]),(()=>this.refresh()),m)])}destroy(){this.filterFunction=null,this.portal=null,this.basemaps.forEach((t=>t.destroy()))}get state(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"}load(t){return this.addResolvingPromise(this.portal.load(t)),Promise.resolve(this)}async refresh(){if("loaded"!==this.loadStatus)return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const t=this.portal,s=new AbortController;this._lastPortalBasemapFetchController=s,this.notifyChange("state");try{const r=await t.fetchBasemaps(this._toQueryString(this.query),{signal:s.signal,include3d:"3d"===this.viewType||void 0});await this._updateBasemaps(r)}catch(t){if(l(t))throw t;a.getLogger(this).warn(new o("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:t})),await this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")}_toQueryString(t){return t&&"string"!=typeof t?Object.keys(t).map((s=>`${s}:${t[s]}`)).join(" AND "):t}async _updateBasemaps(t=[]){let s=await this._filterBasemaps(t);s=this.updateBasemapsCallback?this.updateBasemapsCallback(s):s,this.basemaps.removeAll(),this.basemaps.addMany(s)}async _filterBasemaps(t){if(!this.filterFunction)return t;const s=t.map(this.filterFunction),r=await Promise.all(s);return t.filter(((t,s)=>r[s]))}};t([n({readOnly:!0,type:j})],d.prototype,"basemaps",void 0),t([n()],d.prototype,"filterFunction",void 0),t([n({type:u})],d.prototype,"portal",void 0),t([n()],d.prototype,"query",void 0),t([n({readOnly:!0})],d.prototype,"state",null),t([n()],d.prototype,"updateBasemapsCallback",void 0),t([n()],d.prototype,"viewType",void 0),d=t([c("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],d);const y=d;export{y as default};
