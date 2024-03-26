// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ./support/VisualVariableLegendOptions".split(" "),function(b,e,a,f,c,g,h,k,l){e=new e.JSONMap({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});a=class extends a.JSONSupport{constructor(d){super(d);
this.legendOptions=this.valueExpressionTitle=this.valueExpression=this.field=this.type=this.index=null}castField(d){return null==d?d:"function"===typeof d?(f.getLogger(this).error(".field: field must be a string value"),null):k.ensureString(d)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};b.__decorate([c.property()],a.prototype,"index",void 0);b.__decorate([c.property({type:e.apiValues,readOnly:!0,json:{read:e.read,
write:e.write}})],a.prototype,"type",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);b.__decorate([g.cast("field")],a.prototype,"castField",null);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"arcadeRequired",null);b.__decorate([c.property({type:l,json:{write:!0}})],
a.prototype,"legendOptions",void 0);return a=b.__decorate([h.subclass("esri.renderers.visualVariables.VisualVariable")],a)});