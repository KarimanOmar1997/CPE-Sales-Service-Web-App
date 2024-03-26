/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../request.js";import r from"../../core/Error.js";import{L as s}from"../../chunks/Logger.js";import{debounce as o}from"../../core/promiseUtils.js";import{urlToObject as i}from"../../core/urlUtils.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as n}from"../../chunks/reader.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{w as p}from"../../chunks/writer.js";import{u as m}from"../../chunks/originUtils.js";import c from"../../geometry/Extent.js";import u from"../../geometry/HeightModelInfo.js";import h from"../../geometry/SpatialReference.js";import{t as d,p as y,c as f,a as j,w as g}from"../../chunks/arcgisLayerUrl.js";import{i as v,u as S}from"../../chunks/commonProperties2.js";import{f as w}from"../../chunks/I3SIndexInfo.js";import I from"../../portal/Portal.js";import x from"../../portal/PortalItem.js";import{v as k}from"../../chunks/saveAPIKeyUtils.js";import{s as U,u as b}from"../../chunks/saveUtils.js";import"../../config.js";import"../../core/lang.js";import"../../kernel.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../chunks/time.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../geometry/Geometry.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/layerContainerType.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/opacityUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/asyncUtils.js";import"../../chunks/uuid.js";import"../../chunks/resourceUtils.js";const _="esri.layers.mixins.SceneService",R=s.getLogger(_),A=s=>{let A=class extends s{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=o((async(e,t,r)=>{switch(e){case T.SAVE:return this._save(t);case T.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return h.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,s=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=s?new h(s):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const s=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return c.fromJSON(s,r)}const s=t.store,o=this._readSpatialReference(t);return null==o||null==s?.extent||!Array.isArray(s.extent)||s.extent.some((e=>e<P))?null:new c({xmin:s.extent[0],ymin:s.extent[1],xmax:s.extent[2],ymax:s.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,s=null!=r.version?r.version.toString():"";return this.parseVersionString(s)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return d(this.url,t.name);let s=t.name;if(!s&&this.url){const e=y(this.url);null!=e&&(s=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(s=r+" - "+s),f(s)}set url(e){const t=j({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,s){g(this,e,"layers",t,s)}get parsedUrl(){const e=this._get("url"),t=i(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=w(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,s=e.rootPage?.nodes?.[t];if(null==s?.obb?.center||null==s.obb.halfSize)throw new r("sceneservice:invalid-node-page","Invalid node page.");if(s.obb.center[0]<P||null==this.fullExtent||this.fullExtent.hasZ)return;const o=s.obb.halfSize,i=s.obb.center[2],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-a,this.fullExtent.zmax=i+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<P)return;const r=t[2],s=t[3],{fullExtent:o}=this;o&&(o.zmin=r-s,o.zmax=r+s)}}async _fetchService(e){if(null==this.url)throw new r("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await t(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await t(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let s=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(s=!0),s)return this._fetchVoxelServiceLayer();const o=r.data;this.read(o,this._getServiceContext()),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const r=(await t(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const s=t.getTypeKeywords();for(const t of s)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===E.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const s={...O,...t};let o=x.from(e);if(!o)throw new r("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");k(o),o.id&&(o=o.clone(),o.id=null);const i=o.portal||I.getDefault();await this._ensureLoadBeforeSave(),o.type=N,o.portal=i;const a={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,s),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,s,E.newItem),await i.signIn(),await(i.user?.addItem({item:o,folder:s?.folder,data:n})),await U(this.resourceReferences,a,null),this.portalItem=o,m(a),a.portalItem=o,o}async _save(e){const t={...O,...e};if(!this.portalItem)throw new r("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(k(this.portalItem),this.portalItem.type!==N)throw new r("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${N}"`);await this._ensureLoadBeforeSave();const s={origin:"portal-item",url:this.portalItem.itemUrl&&i(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||I.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(o,s,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,E.existingItem),await b(this.portalItem,o,this.resourceReferences,s,null),m(s),this.portalItem}async _validateAgainstJSONSchema(e,t,s){let o=t.messages?.filter((e=>"error"===e.type)).map((e=>new r(e.name,e.message,e.details)))??[];if(s?.validationOptions?.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.length>0)throw new r("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return e([a(v)],A.prototype,"id",void 0),e([a({type:h})],A.prototype,"spatialReference",void 0),e([n("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],A.prototype,"readSpatialReference",null),e([a({type:c})],A.prototype,"fullExtent",void 0),e([n("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],A.prototype,"readFullExtent",null),e([a({readOnly:!0,type:u})],A.prototype,"heightModelInfo",void 0),e([a({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],A.prototype,"minScale",void 0),e([a({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],A.prototype,"maxScale",void 0),e([a({readOnly:!0})],A.prototype,"version",void 0),e([n("version",["store.version"])],A.prototype,"readVersion",null),e([a({type:String,json:{read:{source:"copyrightText"}}})],A.prototype,"copyright",void 0),e([a({type:String,json:{read:!1}})],A.prototype,"sublayerTitleMode",void 0),e([a({type:String})],A.prototype,"title",void 0),e([n("portal-item","title")],A.prototype,"readTitlePortalItem",null),e([n("service","title",["name"])],A.prototype,"readTitleService",null),e([a({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],A.prototype,"layerId",void 0),e([a(S)],A.prototype,"url",null),e([p("url")],A.prototype,"writeUrl",null),e([a()],A.prototype,"parsedUrl",null),e([a({readOnly:!0})],A.prototype,"store",void 0),e([a({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],A.prototype,"rootNode",void 0),A=e([l(_)],A),A},P=-1e38;var E;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(E||(E={}));const N="Scene Service",O={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var T;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(T||(T={}));export{T as SaveOperationType,A as SceneService,N as sceneServiceItemType};
