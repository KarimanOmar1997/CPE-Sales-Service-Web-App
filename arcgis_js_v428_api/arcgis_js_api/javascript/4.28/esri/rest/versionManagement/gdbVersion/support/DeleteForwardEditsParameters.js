// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/JSONSupport ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass".split(" "),function(c,a,e,f,k,l,g){var d;a=d=class extends a.JSONSupport{static from(b){return f.ensureClass(d,b)}constructor(b){super(b);this.sessionId=void 0;this.moment=null}};c.__decorate([e.property({type:String,json:{write:!0}})],
a.prototype,"sessionId",void 0);c.__decorate([e.property({type:Date,json:{type:Number,write:{writer:(b,h)=>{h.moment=b?b.getTime():null}}}})],a.prototype,"moment",void 0);return a=d=c.__decorate([g.subclass("esri.rest.versionManagement.gdbVersion.support.PostParameters")],a)});