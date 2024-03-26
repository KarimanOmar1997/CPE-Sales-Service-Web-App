// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey ../techniques/utils ../../../../webgl/enums".split(" "),function(p,v,w,x,y,b){const z={shader:"materials/icon",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:b.DataType.SHORT},{location:1,name:"a_vertexOffset",count:2,type:b.DataType.SHORT},{location:2,name:"a_texCoords",count:2,type:b.DataType.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:b.DataType.UNSIGNED_SHORT},{location:4,name:"a_id",
count:4,type:b.DataType.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:b.DataType.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:b.DataType.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};class A extends w{dispose(){}getGeometryType(){return p.WGLGeometryType.MARKER}supportsSymbology(d){return d!==
p.WGLSymbologyType.HEATMAP&&d!==p.WGLSymbologyType.PIE_CHART}drawGeometry(d,h,e,a){const {context:f,painter:k,rendererInfo:l,state:q,passOptions:r,requestRender:t,allowDelayedRender:B}=d;var c=x.MarkerMaterialKey.load(e.materialKey),m=y.getTechniqueFromMaterialKey(c.data);const n=null!=r&&"hittest"===r.type,{shader:C,vertexLayout:D,hittestAttributes:E}=m.programSpec??z;m=b.PrimitiveType.TRIANGLES;var g=v.createProgramDescriptor(c.data,D);n&&(g=this._getTriangleDesc(e.materialKey,g,E),m=b.PrimitiveType.POINTS);
const {attributes:u,bufferLayouts:F}=g;a=k.materialManager.getMaterialProgram(d,c,C,u,a);B&&null!=t&&!a.compiled?t():(f.useProgram(a),c.textureBinding&&k.textureManager.bindTextures(f,a,c,!0),this._setSharedUniforms(a,d,h),a.setUniformMatrix3fv("u_displayMat3",c.vvRotation?q.displayViewMat3:q.displayMat3),this._setSizeVVUniforms(c,a,l,h),this._setColorAndOpacityVVUniforms(c,a,l),this._setRotationVVUniforms(c,a,l),c=e.target.getVAO(f,F,u,n),g=e.indexCount,e=e.indexFrom*Uint32Array.BYTES_PER_ELEMENT,
n&&(g/=3,e/=3),f.bindVAO(c),this._drawMarkers(d,h,a,m,g,e,n),f.bindVAO(null))}_drawMarkers(d,h,e,a,f,k,l){d.context.drawElements(a,f,b.DataType.UNSIGNED_INT,k)}}return A});