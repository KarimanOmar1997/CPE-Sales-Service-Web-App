// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../request ../../core/arrayUtils ../../core/Error ../../core/Identifiable ../../core/JSONSupport ../../core/lang ../../core/Loadable ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../geometry/SpatialReference ../../layers/graphics/applyEditsUtils ../../layers/graphics/editingSupport ../../layers/mixins/EditBusLayer ../utils ../query/operations/editsZScale ../support/jsonUtils ../../versionManagement/support/versionManagementUtils".split(" "),
function(m,v,z,B,k,C,D,E,n,M,F,G,A,q,w,H,t,I,l,x){function J(a,c){a=a?a.toLowerCase().split(",").map(e=>e.trim()):[];const f=a.includes("query"),b=a.includes("editing")&&!c.datesInUnknownTimezone;let d=b&&a.includes("create"),g=b&&a.includes("delete"),h=b&&a.includes("update");const p=a.includes("changetracking");!b||d||g||h||(d=g=h=!0);return{supportsAdd:d,supportsDelete:g,supportsEditing:b,supportsChangeTracking:p,supportsQuery:f,supportsQueryDataElements:l.readBoolean(c,"supportsQueryDataElements",
!1),supportsQueryDomains:l.readBoolean(c,"supportsQueryDomains",!1),supportsQueryContingentValues:l.readBoolean(c,"supportsQueryContingentValues",!1),supportsSync:a.includes("sync"),supportsUpdate:h}}k=class extends C.JSONSupportMixin(k.IdentifiableMixin(E)){constructor(a){super(a);this.sourceJSON=this.url=null;this.userTypeExtensions=[];this.layerInfos=[];this.tableInfos=[];this.capabilities=null}read(a,c){this.sourceJSON=a;super.read(a,c)}get utilityNetworkUrl(){for(const a of this.sourceJSON.layers)if("Utility Network Layer"===
a.type)return`${this.url}/${a.id}`;return null}get versionManagementServiceUrl(){return this.sourceJSON.hasBranchVersionedData?this.url.replace(/\/FeatureServer/i,"/VersionManagementServer"):null}readCapabilities(a,c){a={isDataVersioned:l.readBoolean(c,"hasVersionedData",!1)};var f=c?.syncCapabilities;var b=f?.supportedSyncDataOptions;f={supportsAsync:l.readBoolean(f,"supportsAsync",!1),supportedSyncDataOptions:{annotations:1===(b&1),dimensions:2===(b&2),contingentValues:4===(b&4),attributeRules:8===
(b&8),utilityNetworkSystem:16===(b&16),annotationFullModel:32===(b&32),include3DObjects:64===(b&64),utilityNetworkMissingLayers:128===(b&128),preserveTrueCurves:256===(b&256)}};b=J(c.capabilities,c);var d={maxRecordCountFactor:l.readNumber(c,"maxRecordCountFactor",void 0),maxRecordCount:l.readNumber(c,"maxRecordCount",void 0)};const g=c?.advancedEditingCapabilities;c={supportsGlobalId:l.readBoolean(c,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:l.readBoolean(g,
"supportsReturnServiceEditsInSourceSR",!1),supportsSplit:l.readBoolean(g,"supportsSplit",!1),supportsAsyncApplyEdits:l.readBoolean(g,"supportsAsyncApplyEdits",!1)};return{data:a,sync:f,operations:b,query:d,editing:c}}load(a){this.addResolvingPromise(this._fetchService(this.url,a));return Promise.resolve(this)}async applyEdits(a,c){let f=null;try{const {results:b,edits:d,editedFeatures:g}=await this._internalApplyEdits(a,c),h=e=>e.filter(r=>!r.error).map(D.clone);let p=0;b.map(e=>{f=H.emitApplyEditsEvent(this.url,
e.id,c?.gdbVersion,!0);e={edits:d[p],addedFeatures:h(e.addFeatureResults),updatedFeatures:h(e.updateFeatureResults),deletedFeatures:h(e.deleteFeatureResults),addedAttachments:h(e.addAttachmentResults),updatedAttachments:h(e.updateAttachmentResults),deletedAttachments:h(e.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:e.editMoment?new Date(e.editMoment):null};p+=1;0<g.length&&(e.editedFeatures=g);f.resolve(e);f=null});return b}catch(b){throw f&&f.reject(b),b;}}async _internalApplyEdits(a,
c){const f=c?.globalIdUsed??!1,b=A.fromJSON(this.sourceJSON.spatialReference),{edits:d,options:g}=await this._processApplyEditsParams(a,c);var h=await Promise.all(d.map(async e=>{var r=e.addFeatures?.map(y=>q.getFeatureJSON({spatialReference:b},y,null))??[];r=(await Promise.all(r)).filter(z.isSome);var u=e.updateFeatures?.map(y=>q.getFeatureJSON({spatialReference:b},y,null))??[];u=(await Promise.all(u)).filter(z.isSome);const K=q.getFeatureIds(e.identifierFields,e.deleteFeatures,f);I.unapplyEditsZUnitScaling(r,
u,b);const L=await q.getAttachmentEditsJSON(e.identifierFields,e);return{id:e.id,adds:r,updates:u,deletes:K,attachments:L}}));a={gdbVersion:g?.gdbVersion,rollbackOnFailure:!0,useGlobalIds:f,returnEditMoment:!0,honorSequenceOfEdits:g?.honorSequenceOfEdits,usePreviousEditMoment:g?.usePreviousEditMoment,returnServiceEditsInSourceSR:g?.returnServiceEditsInSourceSR,returnServiceEditsOption:"originalAndCurrentFeatures",async:!1};await x.isSafeToEditVersion(this.url,c?.gdbVersion,!0);c=x.isVersionInEditSession(this.url,
c?.gdbVersion||null);a.edits=JSON.stringify(h);h=t.parseUrl(this.url);a=t.asValidOptions(h.query,{query:t.encode({...a,f:"json"}),method:"post"});c&&(a.authMode="immediate",a.query.sessionId=x.currentSessionId);let p;try{p=await v(this.url+"/applyEdits",a)}catch(e){if(q.isProtectedOrPrivateVersionError(e))a.authMode="immediate",p=await v(this.url+"/applyEdits",a);else throw e;}return{...this._createServiceEditsResult(p),edits:d}}_createServiceEditsResult(a){const c=[];return{results:a.data.map(f=>
{const b=q.unpackEditResultData({addResults:f.addResults??[],updateResults:f.updateResults??[],deleteResults:f.deleteResults??[],attachments:f.attachments,editMoment:f.editMoment});var d=f.editedFeatures;const g=d?.spatialReference?new A({wkid:d?.spatialReference.wkid,wkt:d?.spatialReference.wkt,latestWkid:d?.spatialReference.latestWkid,latestVcsWkid:d?.spatialReference.latestVcsWkid,vcsWkid:d?.spatialReference.vcsWkid}):null;(d=d?q.createEditedFeatures(d,g):null)&&c.push({layerId:f.id,editedFeatures:d});
return{id:f.id,editedFeatures:d,...b}}),editedFeatures:c}}async _processApplyEditsParams(a,c){const f={...c};return{edits:await Promise.all(a.map(async b=>{var d=this.capabilities;w.checkEditingCapabilities(b,d,c,!(!b||!(b.addFeatures||b.updateFeatures||b.deleteFeatures)),!(!b||!(b.addAttachments||b.updateAttachments||b.deleteAttachments)),"feature-service");if(!d.data.isDataVersioned&&c?.gdbVersion)throw new B("feature-service:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
d=w.normalizeEdits(b,d,"feature-service");return{...(await w.normalizeGeometries(d)),id:b.id,identifierFields:b.identifierFields}})),options:f}}async _fetchService(a,c){this.sourceJSON?this.read(this.sourceJSON,{origin:"service",url:t.parseUrl(a)}):(a=await v(a,{responseType:"json",query:{f:"json"},...c}),this.read(a.data))}};m.__decorate([n.property()],k.prototype,"url",void 0);m.__decorate([n.property()],k.prototype,"sourceJSON",void 0);m.__decorate([n.property({readOnly:!0})],k.prototype,"utilityNetworkUrl",
null);m.__decorate([n.property({readOnly:!0})],k.prototype,"versionManagementServiceUrl",null);m.__decorate([n.property()],k.prototype,"userTypeExtensions",void 0);m.__decorate([n.property({json:{read:{source:"layers"}}})],k.prototype,"layerInfos",void 0);m.__decorate([n.property({json:{read:{source:"tables"}}})],k.prototype,"tableInfos",void 0);m.__decorate([n.property({readOnly:!0,json:{read:{source:"hasVersionedData capabilities supportsQueryDataElements supportsQueryDomains supportsQueryContingentValues maxRecordCountFactor maxRecordCount advancedEditingCapabilities supportsApplyEditsWithGlobalIds syncCapabilities datesInUnknownTimezone".split(" ")}}})],
k.prototype,"capabilities",void 0);m.__decorate([F.reader("service","capabilities")],k.prototype,"readCapabilities",null);return k=m.__decorate([G.subclass("esri.services.FeatureService")],k)});