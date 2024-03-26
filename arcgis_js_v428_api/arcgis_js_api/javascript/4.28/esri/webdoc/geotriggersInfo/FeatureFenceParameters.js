// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./FeatureFilter ./FeatureLayerSource".split(" "),function(b,a,d,c,l,m,n,e,f,g,h){a=class extends a.ClonableMixin(d.JSONSupport){constructor(k){super(k);this.bufferDistance=this.filter=this.fenceSource=null;this.type=
"features"}};b.__decorate([c.property({type:h,json:{write:{isRequired:!0}}})],a.prototype,"fenceSource",void 0);b.__decorate([c.property({type:g,json:{write:!0}})],a.prototype,"filter",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"bufferDistance",void 0);b.__decorate([e.enumeration({features:"features"},{readOnly:!0})],a.prototype,"type",void 0);return a=b.__decorate([f.subclass("esri.webdoc.geotriggersInfo.FeatureFenceParameters")],a)});