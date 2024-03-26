// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Graphic ../../../core/Logger ../../../core/maybe ../../../core/ReactiveSet ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../core/sql/WhereClause ../../../layers/support/FeatureFilter ../../../layers/support/floorFilterUtils ../../../rest/support/Query ../../../support/featureFlags ./I3SMeshView3D ./II3SMeshView3D ./LayerView3D ./i3s/featureEditing ./i3s/I3SGeometryUtil ./i3s/I3SMeshViewFilter ./i3s/I3SNode ./i3s/I3SOverrides ./i3s/I3SQueryEngine ./i3s/I3SQueryFeatureAdapter ./i3s/I3SQueryFeatureStore ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/PopupSceneLayerView ./support/SceneLayerViewRequiredFields ../support/updatingProperties ../../layers/SceneLayerView ../../layers/support/popupUtils ../../support/Scheduler".split(" "),
function(f,u,v,w,x,q,g,m,S,T,y,z,A,B,n,p,d,C,D,l,E,r,t,F,G,H,I,k,J,K,L,M,N,O,P,Q){m=K.defineFieldProperties();d=class extends d.I3SMeshView3D(J.DefinitionExpressionSceneLayerView(L.PopupSceneLayerView(D.LayerView3D(O)))){constructor(){super(...arguments);this.type="scene-layer-3d";this._setVisibilityHiddenObjectIds=new x;this.progressiveLoadFactor=1;this._elevationContext="scene";this._isIntegratedMesh=!1;this._supportsLabeling=!0;this._pendingEditsQueue=Promise.resolve();this._interactiveEditingSessions=
new Map;this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(a,b){return a.url===this.layer.url&&this.i3sOverrides.isEmpty?a.load(b).then(()=>{k.checkRecyclable(this.layer,a,this.i3sOverrides);this.layer=a;this.i3sOverrides.destroy();this.i3sOverrides=new F.I3SOverrides({view:this.view,layer:a,memoryController:this.view.resourceController?.memoryController});this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){return this.layer.popupEnabled&&P.hasPopupTemplate(this.layer,
this.view.popup?.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(a){this._set("filter",r.I3SMeshViewFilter.checkSupport(a)?a:null)}get viewFilter(){const a=this.filter,b=this.layerFilter;if(null==a&&null==b)return null;const c=this._get("viewFilter");if(null==c)return new r.I3SMeshViewFilter({layerFilter:b,viewFilter:a,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,h)=>this.addSqlFilter(e,h,this.logError)});c.viewFilter=
a;c.layerFilter=b;return c}get requiredFields(){return this._fieldsHelper?.requiredFields??[]}get _floorFilterClause(){const a=B.getFloorFilterClause(this);return null!=a?z.WhereClause.create(a,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const a=this.layer.excludeObjectIds.toArray();return a.length?a.sort((b,c)=>b-c):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort((a,b)=>a-b):null}get _objectQualitySettings(){return this.view?.qualitySettings?.sceneService?.object}get lodFactor(){return this._objectQualitySettings?.lodFactor??
1}get lodCrossfadeinDuration(){return this._objectQualitySettings.lodCrossfadeinDuration??0}get lodCrossfadeoutDuration(){return this._objectQualitySettings.lodCrossfadeoutDuration??0}get lodCrossfadeUncoveredDuration(){return this._objectQualitySettings.lodCrossfadeUncoveredDuration??0}get updatingProgressValue(){return this._controller?.updatingProgress??0}initialize(){this._fieldsHelper=new M.SceneLayerViewRequiredFields({layerView:this});this._updatingHandles.add(()=>this.layer.rangeInfos,b=>
this._rangeInfosChanged(b),q.initial);this._updatingHandles.add(()=>this.layer.renderer,b=>this._updatingHandles.addPromise(this._rendererChange(b)),q.initial);const a=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,a);this._updatingHandles.add(()=>this.filter,a);this._updatingHandles.add(()=>this._floorFilterClause,a);this._updatingHandles.add(()=>this._excludeObjectIdsSorted,a);this._updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,a);this._updatingHandles.add(()=>
null!=this.viewFilter?this.viewFilter.sortedObjectIds:null,a);this._updatingHandles.add(()=>null!=this.viewFilter?this.viewFilter.parsedWhereClause:null,a);this._updatingHandles.add(()=>[null!=this.viewFilter?this.viewFilter.parsedGeometry:null,null!=this.filter?this.filter.spatialRelationship:null,null!=this.layer.filter?this.layer.filter.spatialRelationship:null],()=>this._geometryFilterChange());p.sceneLayerEditingEnabled()&&this.i3sOverrides.is3DOFL&&this._updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,
a);this.addHandles(this.layer.on("apply-edits",b=>this._updatingHandles.addPromise(b.result)));this.addHandles(this.layer.on("edits",b=>{const c=this._pendingEditsQueue.then(()=>this._handleEdits(b)).then();this._pendingEditsQueue=c;this._updatingHandles.addPromise(c)}))}destroy(){this._fieldsHelper=w.destroyMaybe(this._fieldsHelper)}_rangeInfosChanged(a){null!=a&&0<a.length&&v.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const a=
{outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(a):new n(a)}queryExtent(a,b){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(a),b?.signal)}queryFeatureCount(a,b){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(a),b?.signal)}queryFeatures(a,b){return this._ensureQueryEngine().executeQuery(this._ensureQuery(a),b?.signal).then(c=>{if(!c?.features)return c;const e=this.layer;
for(const h of c.features)h.layer=e,h.sourceLayer=e;return c})}queryObjectIds(a,b){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(a),b?.signal)}_ensureQueryEngine(){this._queryEngine||(this._queryEngine=this._createQueryEngine());return this._queryEngine}_createQueryEngine(){const a=E.createGetFeatureExtent(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new G.I3SQueryEngine({layerView:this,priority:Q.TaskPriority.FEATURE_QUERY_ENGINE,spatialIndex:new I.I3SQueryFeatureStore({featureAdapter:new H.I3SQueryFeatureAdapter({objectIdField:this.layer.objectIdField,
attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:a}),forAllFeatures:(b,c)=>this._forAllFeatures((e,h,R)=>b({id:e,index:h,meta:R}),c,C.ForAllFeaturesMode.QUERYABLE),getFeatureExtent:a,sourceSpatialReference:k.getIndexCrs(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(a){const b=this._highlights;if(a instanceof n){const {set:c,handle:e}=b.acquireSet();this.queryObjectIds(a).then(h=>b.setFeatureIds(c,h));return e}return super.highlight(a)}createInteractiveEditSession(a){return l.createInteractiveEditSession(this._attributeEditingContext,
a)}_createLayerGraphic(a){a=new u(null,null,a);a.layer=this.layer;a.sourceLayer=this.layer;return a}getFilters(){const a=super.getFilters();p.sceneLayerEditingEnabled()&&this.i3sOverrides.is3DOFL&&0<this.i3sOverrides.sortedGeometryChangedObjectIds.length&&a.push((e,h)=>{0<=h.node.index&&k.objectIdFilter(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,e)});const b=this._setVisibilityHiddenObjectIdsSorted;null!=b&&a.push(e=>k.objectIdFilter(b,!1,e));const c=this._excludeObjectIdsSorted;null!=c&&
a.push(e=>k.objectIdFilter(c,!1,e));this._floorFilterClause&&this.addSqlFilter(a,this._floorFilterClause,this.logError);this.addSqlFilter(a,this.parsedDefinitionExpression,this.logError);null!=this.viewFilter&&this.viewFilter.addFilters(a,this.view,this._controller.crsIndex,this._collection);return a}setVisibility(a,b){b?this._setVisibilityHiddenObjectIds.delete(a):this._setVisibilityHiddenObjectIds.add(a)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||null!=this.viewFilter&&this.viewFilter.updating||
null!=this.i3sOverrides&&this.i3sOverrides.updating}_ensureQuery(a){return this._addDefinitionExpressionToQuery(null==a?this.createQuery():n.from(a))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:a=>this._forAllNodes(b=>null!=b?a(b.node,b.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,
getAttributeData:a=>this.getAttributeData(a),setAttributeData:(a,b)=>this.setAttributeData(a,b),clearMemCache:()=>this.clearMemCache()}}async _handleEdits(a){const b=p.sceneLayerEditingEnabled(),c=this._attributeEditingContext;a=await l.normalizeEditResultsEvent(c,a);b&&l.processGeometryEdits(c,a);l.processAttributeEdits(c,a)}get hasGeometryFilter(){return null!=this.viewFilter?.parsedGeometry}computeNodeFiltering(a){const b=this.viewFilter;return null==b||!this.view.spatialReference||b.isMBSGeometryVisible(a,
this.view.spatialReference,this._controller.crsIndex)?t.NodeFilterImpact.Unmodified:t.NodeFilterImpact.Culled}};f.__decorate([g.property()],d.prototype,"i3slayer",null);f.__decorate([g.property(N.updatingProgress)],d.prototype,"updatingProgress",void 0);f.__decorate([g.property({type:A})],d.prototype,"filter",null);f.__decorate([g.property({readOnly:!0})],d.prototype,"viewFilter",null);f.__decorate([g.property(m.requiredFields)],d.prototype,"requiredFields",null);f.__decorate([g.property(m.availableFields)],
d.prototype,"availableFields",void 0);f.__decorate([g.property()],d.prototype,"_fieldsHelper",void 0);f.__decorate([g.property()],d.prototype,"_floorFilterClause",null);f.__decorate([g.property()],d.prototype,"_excludeObjectIdsSorted",null);f.__decorate([g.property()],d.prototype,"_setVisibilityHiddenObjectIds",void 0);f.__decorate([g.property()],d.prototype,"_setVisibilityHiddenObjectIdsSorted",null);f.__decorate([g.property()],d.prototype,"_objectQualitySettings",null);f.__decorate([g.property()],
d.prototype,"lodFactor",null);f.__decorate([g.property()],d.prototype,"updatingProgressValue",null);return d=f.__decorate([y.subclass("esri.views.3d.layers.SceneLayerView3D")],d)});