// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,c,h,k,l,e,f){a=class extends a.ClonableMixin(d.JSONSupport){constructor(g){super(g);this.layerUrl=this.layerId=null;this.type="feature-layer"}};b.__decorate([c.property({type:String,
json:{write:{overridePolicy(){return{isRequired:null===this.layerUrl}}}}})],a.prototype,"layerId",void 0);b.__decorate([c.property({type:String,json:{write:{overridePolicy(){return{isRequired:null===this.layerId}}}}})],a.prototype,"layerUrl",void 0);b.__decorate([e.enumeration({featureLayer:"feature-layer"},{readOnly:!0})],a.prototype,"type",void 0);return a=b.__decorate([f.subclass("esri.webdoc.geotriggersInfo.FeatureLayerSource")],a)});