// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,f,e,l,m,n,g,h){var c;a.RasterDataSource=c=class extends f.JSONSupport{constructor(d){super(d);this.type="raster"}clone(){const {workspaceId:d,dataSourceName:k}=this;return new c({workspaceId:d,
dataSourceName:k})}};b.__decorate([g.enumeration({raster:"raster"})],a.RasterDataSource.prototype,"type",void 0);b.__decorate([e.property({type:String,json:{write:!0}})],a.RasterDataSource.prototype,"dataSourceName",void 0);b.__decorate([e.property({type:String,json:{write:!0}})],a.RasterDataSource.prototype,"workspaceId",void 0);a.RasterDataSource=c=b.__decorate([h.subclass("esri.layers.support.source.RasterDataSource")],a.RasterDataSource);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});