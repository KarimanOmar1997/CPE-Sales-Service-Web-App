// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./ExpressionInfo ./elements/GroupElement ./support/elements".split(" "),function(b,a,k,d,l,m,n,p,q,r,e){var f;const g=e.buildTypeMaps(r);a=f=class extends a.JSONSupport{constructor(c){super(c);this.expressionInfos=this.elements=
this.description=null;this.preserveFieldValuesWhenHidden=!1;this.title=null}castElements(c){return e.ensureType(c,g)}readElements(c,h){return e.fromJSON(h.formElements,g)}writeElements(c,h){h.formElements=e.toJSON(c,g)}clone(){return new f({description:this.description,expressionInfos:k.clone(this.expressionInfos),elements:k.clone(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}};b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,
"description",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"elements",void 0);b.__decorate([l.cast("elements")],a.prototype,"castElements",null);b.__decorate([m.reader("elements",["formElements"])],a.prototype,"readElements",null);b.__decorate([p.writer("elements")],a.prototype,"writeElements",null);b.__decorate([d.property({type:[q],json:{write:!0}})],a.prototype,"expressionInfos",void 0);b.__decorate([d.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"preserveFieldValuesWhenHidden",
void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);return a=f=b.__decorate([n.subclass("esri.form.FormTemplate")],a)});