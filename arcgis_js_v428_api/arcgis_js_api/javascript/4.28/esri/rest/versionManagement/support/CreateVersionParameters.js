// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,h,k,g){var d;a=d=class extends a.JSONSupport{static from(e){return f.ensureClass(d,e)}constructor(e){super(e);this.versionName=void 0;this.description=null;this.access="private"}};b.__decorate([c.property({type:String,json:{write:!0}})],
a.prototype,"versionName",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:["private","public","protected","hidden"],json:{name:"accessPermission",write:!0}})],a.prototype,"access",void 0);return a=d=b.__decorate([g.subclass("esri.rest.versionManagement.support.CreateVersionParameters")],a)});