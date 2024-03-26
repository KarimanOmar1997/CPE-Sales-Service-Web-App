// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ../core/Accessor ../core/Collection ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass".split(" "),function(a,c,h,f,g,e,l,m,n,k){a.BasemapView=class extends h{constructor(b){super(b);this.view=null;this.baseLayerViews=new f;this.referenceLayerViews=new f;this._loadingHandle=g.watch(()=>this.view?.map?.basemap,d=>{d&&d.load().catch(()=>{})},
g.initial)}destroy(){this._set("view",null);this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null);for(const b of this.baseLayerViews)b.destroy();this.baseLayerViews.length=0;for(const b of this.referenceLayerViews)b.destroy();this.referenceLayerViews.length=0}get suspended(){return this.view?this.view.suspended:!0}get updating(){if(this.view&&this.view.suspended)return!1;const b=this.view?.map?.basemap;return b&&b.loaded?this.baseLayerViews.some(d=>d.updating)||this.referenceLayerViews.some(d=>
d.updating):!1}};c.__decorate([e.property({constructOnly:!0})],a.BasemapView.prototype,"view",void 0);c.__decorate([e.property({readOnly:!0})],a.BasemapView.prototype,"baseLayerViews",void 0);c.__decorate([e.property({readOnly:!0})],a.BasemapView.prototype,"referenceLayerViews",void 0);c.__decorate([e.property({readOnly:!0})],a.BasemapView.prototype,"suspended",null);c.__decorate([e.property({type:Boolean,readOnly:!0})],a.BasemapView.prototype,"updating",null);a.BasemapView=c.__decorate([k.subclass("esri.views.BasemapView")],
a.BasemapView);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});