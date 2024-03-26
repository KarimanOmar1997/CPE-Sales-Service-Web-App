// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./FeatureSet ./NAMessage".split(" "),function(b,a,c,h,k,l,e,d,f){a=class extends a.JSONSupport{constructor(g){super(g);this.serviceAreaPolygons=this.serviceAreaPolylines=this.polygonBarriers=this.polylineBarriers=this.pointBarriers=this.messages=this.facilities=null}};b.__decorate([c.property({type:d})],
a.prototype,"facilities",void 0);b.__decorate([c.property({type:[f]})],a.prototype,"messages",void 0);b.__decorate([c.property({type:d,json:{read:{source:"barriers"}}})],a.prototype,"pointBarriers",void 0);b.__decorate([c.property({type:d})],a.prototype,"polylineBarriers",void 0);b.__decorate([c.property({type:d})],a.prototype,"polygonBarriers",void 0);b.__decorate([c.property({type:d,json:{read:{source:"saPolylines"}}})],a.prototype,"serviceAreaPolylines",void 0);b.__decorate([c.property({type:d,
json:{read:{source:"saPolygons"}}})],a.prototype,"serviceAreaPolygons",void 0);return a=b.__decorate([e.subclass("esri.rest.support.ServiceAreaSolveResult")],a)});