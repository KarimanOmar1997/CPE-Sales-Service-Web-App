// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../support/arcgisLayerUrl".split(" "),function(d,c,g,e,k,l,m,h,f){d.ArcGISService=b=>{b=class extends b{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const a=f.parse(this.url);if(null!=a&&a.title)return a.title}return this._get("title")||
""}set title(a){this._set("title",a)}set url(a){this._set("url",f.sanitizeUrl(a,g.getLogger(this)))}};c.__decorate([e.property()],b.prototype,"title",null);c.__decorate([e.property({type:String})],b.prototype,"url",null);return b=c.__decorate([h.subclass("esri.layers.mixins.ArcGISService")],b)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});