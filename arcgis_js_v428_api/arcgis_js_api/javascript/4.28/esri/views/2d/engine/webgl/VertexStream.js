// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject","../../../webgl/VertexElementDescriptor"],function(d,a,e,f){class g{constructor(b,c){this._rctx=b;this._vertexBuffer=d.BufferObject.createVertex(b,a.Usage.STATIC_DRAW,new Uint16Array(c));this._vao=new e.VertexArrayObject(b,new Map([["a_position",0]]),{geometry:[new f.VertexElementDescriptor("a_position",2,a.DataType.SHORT,0,4)]},{geometry:this._vertexBuffer});this._count=c.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose()}draw(){this._rctx.bindVAO(this._vao);
this._rctx.drawArrays(a.PrimitiveType.TRIANGLE_STRIP,0,this._count)}}return g});