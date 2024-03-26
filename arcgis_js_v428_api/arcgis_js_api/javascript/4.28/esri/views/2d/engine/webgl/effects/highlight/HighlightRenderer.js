// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../definitions ./parameters ../../shaders/HighlightPrograms ../../../../../webgl/BufferObject ../../../../../webgl/enums ../../../../../webgl/ProgramTemplate ../../../../../webgl/VertexArrayObject ../../../../../webgl/VertexElementDescriptor".split(" "),function(e,g,k,n,c,l,p,m){class q{constructor(){this._height=this._width=void 0;this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),
this._resources.blurProgram.dispose(),this._resources=null)}preBlur(a,b){a.bindTexture(b,e.textureBindingHighlight0);a.useProgram(this._resources.blurProgram);this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]);this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",g.alphaToRgbaChannelSelectorMatrix);a.bindVAO(this._resources.quadVAO);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);a.bindVAO()}finalBlur(a,b){a.bindTexture(b,e.textureBindingHighlight0);a.useProgram(this._resources.blurProgram);
this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]);this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",g.rgbaToRgbaChannelSelectorMatrix);a.bindVAO(this._resources.quadVAO);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);a.bindVAO()}renderHighlight(a,b,d){a.bindTexture(b,e.textureBindingHighlight0);a.useProgram(this._resources.highlightProgram);d.applyHighlightOptions(a,this._resources.highlightProgram);a.bindVAO(this._resources.quadVAO);a.setBlendingEnabled(!0);
a.setBlendFunction(c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);a.bindVAO()}_initialize(a,b,d){this._width=b;this._height=d;b=n.BufferObject.createVertex(a,c.Usage.STATIC_DRAW,(new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1])).buffer);d=new p.VertexArrayObject(a,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new m.VertexElementDescriptor("a_position",2,c.DataType.BYTE,0,4),new m.VertexElementDescriptor("a_texcoord",2,c.DataType.UNSIGNED_BYTE,
2,4)]},{geometry:b});const f=l.createProgram(a,k.highlight),h=l.createProgram(a,k.blur);a.useProgram(f);f.setUniform1i("u_texture",e.textureBindingHighlight0);f.setUniform1i("u_shade",e.textureBindingHighlight1);f.setUniform1f("u_sigma",g.sigma);a.useProgram(h);h.setUniform1i("u_texture",e.textureBindingHighlight0);h.setUniform1f("u_sigma",g.sigma);this._resources={quadGeometry:b,quadVAO:d,highlightProgram:f,blurProgram:h}}setup(a,b,d){this._resources?(this._width=b,this._height=d):this._initialize(a,
b,d)}}return q});