// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ./MeshMaterial ./MeshMaterialMetallicRoughness ./MeshVertexAttributes".split(" "),function(c,b,f,l,d,h,m,g,k,n,p){var e;const q=l.getLogger("esri.geometry.support.MeshComponent");b=e=class extends b.JSONSupport{static from(a){return g.ensureClass(e,
a)}constructor(a){super(a);this.material=this.faces=null;this.name=void 0;this.shading="source";this.trustSourceNormals=!1}castFaces(a){return p.castArray(a,Uint32Array,[Uint16Array],{loggerTag:".faces\x3d",stride:3},q)}castMaterial(a){return a&&"object"===typeof a&&("metallic"in a||"roughness"in a||"metallicRoughnessTexture"in a)?g.ensureClass(n,a):g.ensureClass(k,a)}clone(){return new e({faces:f.clone(this.faces),shading:this.shading,material:f.clone(this.material),trustSourceNormals:this.trustSourceNormals,
name:this.name})}cloneWithDeduplication(a,r){a={faces:f.clone(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(a,r):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new e(a)}get memoryUsage(){let a=0;null!=this.faces&&(a+=this.faces.byteLength);null!=this.material&&(a+=this.material.memoryUsage);return a}};c.__decorate([d.property({json:{write:!0}})],b.prototype,"faces",void 0);c.__decorate([h.cast("faces")],b.prototype,"castFaces",
null);c.__decorate([d.property({type:k,json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([h.cast("material")],b.prototype,"castMaterial",null);c.__decorate([d.property()],b.prototype,"name",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"shading",void 0);c.__decorate([d.property({type:Boolean})],b.prototype,"trustSourceNormals",void 0);return b=e=c.__decorate([m.subclass("esri.geometry.support.MeshComponent")],b)});