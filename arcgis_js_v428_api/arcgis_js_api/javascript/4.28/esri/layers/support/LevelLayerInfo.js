// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,g,h,d){a=class extends a.JSONSupport{constructor(e){super(e);this.verticalOrderField=this.sublayerId=this.shortNameField=this.longNameField=this.levelNumberField=this.levelIdField=this.layerId=this.facilityIdField=null}};b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"facilityIdField",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"layerId",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"levelIdField",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"levelNumberField",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"longNameField",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"shortNameField",
void 0);b.__decorate([c.property({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"sublayerId",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"verticalOrderField",void 0);return a=b.__decorate([d.subclass("esri.layers.support.LevelLayerInfo")],a)});