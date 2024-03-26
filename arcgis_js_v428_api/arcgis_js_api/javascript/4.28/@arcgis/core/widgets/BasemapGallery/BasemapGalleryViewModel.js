/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Basemap.js";import s from"../../core/Collection.js";import i from"../../core/Loadable.js";import{watch as r,on as o,when as a}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import{cast as p}from"../../core/accessorSupport/decorators/cast.js";import{i as c}from"../../chunks/typedArrayUtil.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{canProjectWithoutEngine as l,isLoaded as u,load as h}from"../../geometry/projection.js";import{f}from"../../chunks/unitUtils.js";import{j as d}from"../../chunks/basemapUtils.js";import j from"../../core/Error.js";import{throwIfAborted as y}from"../../core/promiseUtils.js";import{m as g,r as b,t as v}from"../../chunks/layerUtils2.js";import{s as k,V as w}from"../../chunks/ViewingMode.js";import{P as B,O as _}from"../../chunks/terrainUtils.js";import{T as R}from"../../chunks/TerrainConst.js";import{i as I}from"../../chunks/spatialReferenceSupport.js";import P from"./support/BasemapGalleryItem.js";import U from"./support/LocalBasemapsSource.js";import L from"./support/PortalBasemapsSource.js";import"../../request.js";import"../../config.js";import"../../core/lang.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../chunks/time.js";import"../../chunks/ensureType.js";import"../../chunks/collectionUtils.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../chunks/writer.js";import"../../geometry/SpatialReference.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../portal/Portal.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/locale.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../core/Promise.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/messages.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/vec3f64.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/utils3.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/Util.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/Scheduler.js";import"../../core/signal.js";import"../../chunks/debugFlags.js";import"../../chunks/RenderState.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../layers/support/LOD.js";import"../../layers/support/TileInfo.js";import"../../chunks/TileKey.js";import"../../core/Identifiable.js";async function S(e,t={}){const{basemap:s,view:i}=e;await s.load(t),function(e){if(0===e.baseLayers.length&&0===e.referenceLayers.length)return;const t=e.baseLayers.concat(e.referenceLayers).toArray().filter((e=>!b(e))).map((e=>function(e){return new j("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}(e)));if(t.length)throw t[0]}(s),await async function(e,t,s){if(0===e.baseLayers.length)return;const i=e.baseLayers.at(0);if(v(i)){try{await i.load(s)}catch(e){const t="basemap-compatibility:unknown-error",s="Unknown basemap compatibility error",{name:i=t,message:r=s,details:o}=e;throw new j(i,r,o)}!function(e,t){const s=t.state.viewingMode;if(!s)return;let i,r;if("wmts"===e?.type){const o=B(e,t.spatialReference,s);if(null==o.tileInfo)throw new j("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");i=o.tileInfo,r=o.fullExtent}else i=e.tileInfo,r=e.fullExtent;if(null==i)return;if(!I(i.spatialReference,s))throw new j(`basemapgalleryitem:spatial-reference-unsupported-${k(s)}`,`Basemap spatial reference is unsupported in ${k(s)} mode`);const o=i.spatialReference.isGeographic,a="vector-tile"===e?.type?i.getOrCreateCompatible(256,o?1:2):null;if(s===w.Global){let t=_(i,r,null,s);if(t&&"vector-tile"===e?.type&&null!=r&&a&&!_(a,r,null,s)&&(t=null),t){const e=i.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new j(`basemapgalleryitem:tiling-scheme-unsupported-${e}-global`,"Basemap tiling scheme is unsupported in global mode",{error:t})}}else if(R.checkUnsupported(i))throw new j("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const n=t.basemapTerrain?.tilingScheme;if(n&&!n.compatibleWith(i)&&("vector-tile"!==e?.type||!a||!n.compatibleWith(a)))throw new j("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(i,t)}}(s,i,t),y(t)}async function A(e,t={}){const{basemap:s,view:i}=e;if(y(t),!i||"spatialReferenceLocked"in i&&!i.spatialReferenceLocked)return;if(await s.load(t),y(t),0===s.baseLayers.length)return;const r=s.baseLayers.at(0);if(!g(r))return;if(s.spatialReference){if(i.spatialReference.equals(s.spatialReference))return;x()}await r.load(t),y(t);const o=(("supportedSpatialReferences"in r?r.supportedSpatialReferences:null)||["tileInfo"in r?r.tileInfo?.spatialReference:null]).filter(c);0!==o.length&&o.every((e=>!i.spatialReference.equals(e)))&&x()}function x(){throw new j("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}const E=s.ofType(P);let C=class extends i{constructor(e){super(e),this._loadingProjectionEngine=!1,this._originalActiveBasemap=null,this.includeCurrentBasemap=!1,this.items=new E,this.source=new L,this.view=null}initialize(){const e=()=>this._recreateItems();this.addHandles([r((()=>[this.view,this.view?.ready]),(()=>{this.view?.ready&&(this._originalActiveBasemap=this.activeBasemap)}),{initial:!0}),r((()=>"ready"===this.state?this.compatibilityFunction:null),(()=>this._updateItems())),r((()=>[this._effectiveIncludeCurrentBasemap,this._originalActiveBasemap]),e),o((()=>this.source?.basemaps),"change",e,{onListenerAdd:e}),a((()=>this.view),(()=>{this.source instanceof L&&(this.source.viewType=this.view?.type)}),{once:!0})])}destroy(){const e=this.source.basemaps.find((e=>e===this.activeBasemap));e&&this.source.basemaps.remove(e),this.source?.destroy()}get _effectiveIncludeCurrentBasemap(){return this.includeCurrentBasemap&&this.source?.basemaps.every((e=>"loading"!==e.loadStatus))}get activeBasemap(){return this.view?.map?.basemap??null}set activeBasemap(e){const s=this.view;if(!s?.map)return;const i="string"==typeof e?t.fromId(e):e;if(!i||!s.ready)return s.map.basemap=i,void this._clearOverride("activeBasemap");const r=i.spatialReference||this.items?.find((e=>this.basemapEquals(i,e.basemap)))?.spatialReference;if(r&&"spatialReferenceLocked"in s&&!s.spatialReferenceLocked){const t=s.spatialReference;if(null!=r&&!f(t,r)&&!l(s.spatialReference,r)&&!u())return this._override("activeBasemap",i),this._loadingProjectionEngine=!0,void h().then((()=>{this._get("activeBasemap")===e&&(s.map.basemap=e,s.spatialReference=r,this._clearOverride("activeBasemap"))}),(()=>{})).then((()=>{this._loadingProjectionEngine=!1}));s.map.basemap=i,this._clearOverride("activeBasemap"),null==r||f(s.spatialReference,r)||(s.spatialReference=r)}else s.map.basemap=i,this._clearOverride("activeBasemap")}get activeBasemapIndex(){const{state:e,activeBasemap:t}=this;return"ready"!==e?-1:this._findBasemapIndex(t)}get compatibilityFunction(){return"3d"===this.view?.type?S:A}set compatibilityFunction(e){this._overrideIfSome("compatibilityFunction",e)}castSource(e){return Array.isArray(e)||s.isCollection(e)?new U({basemaps:e}):function(e){return e&&"esri.portal.Portal"===e.declaredClass}(e)?new L({portal:e}):function(e){return e&&!(e instanceof L)&&(!!e.portal||!!e.query)}(e)?new L(e):function(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}(e)?e:null}get state(){return this.view?.ready&&this.source?this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(e,t){return d(e,t)}refresh(){this._recreateItems()}load(e){return this.addResolvingPromise(i.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)}_findBasemapIndex(e){const{items:t}=this,s=t.findIndex((t=>t.basemap===e));return-1===s?t.findIndex((t=>this.basemapEquals(t.basemap,e))):s}_recreateItems(){const e=this.source?.basemaps,{view:t,compatibilityFunction:s}=this,i=new Map(this.items.map((e=>[e.basemap,e])));function r(e){const r=i.get(e);return r?(i.delete(e),r):new P({basemap:e,compatibilityFunction:s,view:t})}this.items.removeAll(),e&&this.items.addMany(e.map(r));const o=-1!==this._findBasemapIndex(this._originalActiveBasemap);this._effectiveIncludeCurrentBasemap&&!o&&null!=this._originalActiveBasemap&&this.items.unshift(r(this._originalActiveBasemap)),i.forEach((e=>e.destroy()))}_updateItems(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view}};e([n()],C.prototype,"_effectiveIncludeCurrentBasemap",null),e([n()],C.prototype,"_loadingProjectionEngine",void 0),e([n()],C.prototype,"_originalActiveBasemap",void 0),e([n()],C.prototype,"activeBasemap",null),e([n({readOnly:!0})],C.prototype,"activeBasemapIndex",null),e([n()],C.prototype,"compatibilityFunction",null),e([n()],C.prototype,"includeCurrentBasemap",void 0),e([n({readOnly:!0,type:E})],C.prototype,"items",void 0),e([n()],C.prototype,"source",void 0),e([p("source")],C.prototype,"castSource",null),e([n({readOnly:!0})],C.prototype,"state",null),e([n()],C.prototype,"view",void 0),C=e([m("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],C);const O=C;export{O as default};
