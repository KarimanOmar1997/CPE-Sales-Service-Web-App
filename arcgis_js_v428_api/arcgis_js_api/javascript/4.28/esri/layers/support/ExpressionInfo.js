// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,c,g,h,k,e){a=class extends a.ClonableMixin(d.JSONSupport){constructor(f){super(f);this.returnType=this.title=this.expression=null}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"expression",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"title",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"returnType",void 0);return a=b.__decorate([e.subclass("esri.layers.support.ExpressionInfo")],a)});