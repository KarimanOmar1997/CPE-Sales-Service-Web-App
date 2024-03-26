// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../geometry ../request ../core/Error ../core/Evented ../core/Identifiable ../core/Loadable ../core/Logger ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./support/fromPortalItem ../geometry/Extent ../geometry/SpatialReference".split(" "),function(g,c,b,h,k,l,m,n,p,q,r,d,y,z,A,t,u,f,e){let v=0;b=class extends l.EventedMixin(m.IdentifiableMixin(n)){constructor(){super(...arguments);
this.attributionDataUrl=null;this.fullExtent=new f(-180,-90,180,90,e.WGS84);this.id=Date.now().toString(16)+"-layer-"+v++;this.legendEnabled=!0;this.listMode="show";this.opacity=1;this.parent=null;this.persistenceEnabled=!1;this.attributionVisible=this.popupEnabled=!0;this.spatialReference=e.WGS84;this.url=this.type=this.title=null;this.visible=!0}static async fromArcGISServerUrl(a){a="string"===typeof a?{url:a}:a;return(await new Promise((w,x)=>g(["./support/arcgisLayers"],w,x))).fromUrl(a)}static fromPortalItem(a){return u.fromPortalItem(a)}initialize(){this.when().catch(a=>
{q.isAbortError(a)||p.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:a})})}destroy(){const a=this.parent;a&&("layers"in a&&a.layers.includes(this)?a.layers.remove(this):"tables"in a&&a.tables.includes(this)?a.tables.remove(this):"baseLayers"in a&&a.baseLayers.includes(this)?a.baseLayers.remove(this):"referenceLayers"in a&&a.referenceLayers.includes(this)&&a.referenceLayers.remove(this),this._set("parent",null))}get hasAttributionData(){return null!=
this.attributionDataUrl}get parsedUrl(){return r.urlToObject(this.url)}async fetchAttributionData(){const a=this.attributionDataUrl;if(this.hasAttributionData&&a)return(await h(a,{query:{f:"json"},responseType:"json"})).data;throw new k("layer:no-attribution-data","Layer does not have attribution data");}};c.__decorate([d.property({type:String})],b.prototype,"attributionDataUrl",void 0);c.__decorate([d.property({type:f})],b.prototype,"fullExtent",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,
"hasAttributionData",null);c.__decorate([d.property({type:String,clonable:!1})],b.prototype,"id",void 0);c.__decorate([d.property({type:Boolean,nonNullable:!0})],b.prototype,"legendEnabled",void 0);c.__decorate([d.property({type:["show","hide","hide-children"]})],b.prototype,"listMode",void 0);c.__decorate([d.property({type:Number,range:{min:0,max:1},nonNullable:!0})],b.prototype,"opacity",void 0);c.__decorate([d.property({clonable:!1})],b.prototype,"parent",void 0);c.__decorate([d.property({readOnly:!0})],
b.prototype,"parsedUrl",null);c.__decorate([d.property({type:Boolean,readOnly:!0})],b.prototype,"persistenceEnabled",void 0);c.__decorate([d.property({type:Boolean})],b.prototype,"popupEnabled",void 0);c.__decorate([d.property({type:Boolean})],b.prototype,"attributionVisible",void 0);c.__decorate([d.property({type:e})],b.prototype,"spatialReference",void 0);c.__decorate([d.property({type:String})],b.prototype,"title",void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1}})],b.prototype,"type",
void 0);c.__decorate([d.property()],b.prototype,"url",void 0);c.__decorate([d.property({type:Boolean,nonNullable:!0})],b.prototype,"visible",void 0);return b=c.__decorate([t.subclass("esri.layers.Layer")],b)});