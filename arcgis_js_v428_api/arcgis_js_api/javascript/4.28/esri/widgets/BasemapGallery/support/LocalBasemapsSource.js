// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Basemap ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,f,g,d,k,l,m,h){const e=g.ofType(a);a=class extends f{constructor(c){super(c);this.basemaps=new e}destroy(){this.basemaps.forEach(c=>c.destroy())}get state(){return"ready"}refresh(){}};b.__decorate([d.property({type:e})],
a.prototype,"basemaps",void 0);b.__decorate([d.property({readOnly:!0})],a.prototype,"state",null);return a=b.__decorate([h.subclass("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],a)});