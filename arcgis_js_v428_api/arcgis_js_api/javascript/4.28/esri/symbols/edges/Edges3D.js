// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/lang ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../support/materialUtils".split(" "),function(b,f,a,g,h,c,l,k,d){a=class extends a.JSONSupport{constructor(e){super(e);this.color=new f([0,0,0,1]);this.extensionLength=0;this.size=h.px2pt(1)}clone(){}cloneProperties(){return{color:g.clone(this.color),size:this.size,
extensionLength:this.extensionLength}}};b.__decorate([c.property({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0);b.__decorate([c.property(d.colorAndTransparencyProperty)],a.prototype,"color",void 0);b.__decorate([c.property({...d.screenSizeProperty,json:{write:{overridePolicy(e){return{enabled:!!e}}}}})],a.prototype,"extensionLength",void 0);b.__decorate([c.property(d.screenSizeProperty)],a.prototype,"size",void 0);return a=b.__decorate([k.subclass("esri.symbols.edges.Edges3D")],
a)});