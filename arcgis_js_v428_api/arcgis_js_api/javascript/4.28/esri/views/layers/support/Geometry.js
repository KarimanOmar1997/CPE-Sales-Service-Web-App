// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../geometry/Geometry ../../../geometry/support/jsonUtils ./ClipArea ../../../geometry/Extent ../../../geometry/Polygon".split(" "),function(c,d,e,n,p,q,f,g,h,a,k,l){var b;d={base:g,key:"type",typeMap:{extent:k,polygon:l}};a=b=class extends a{constructor(m){super(m);
this.type="geometry";this.geometry=null}clone(){return new b({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};c.__decorate([e.property({types:d,json:{read:h.fromJSON,write:!0}})],a.prototype,"geometry",void 0);return a=b=c.__decorate([f.subclass("esri.views.layers.support.Geometry")],a)});