// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../core/promiseUtils ../utils ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject ../../../../webgl/VertexElementDescriptor".split(" "),function(m,g,k,e,n,h){class l{constructor(a){this._params=a}get animated(){return 0<this._params.flowSpeed}isCompatible(a){return a instanceof l?g.areStreamlinesCompatible(this._params,a._params):!1}async load(a,c){const {extent:d,size:b}=a;m.throwIfAborted(c);a=await this._params.loadImagery(d,b[0],b[1],
this._params.timeExtent,c);const {vertexData:p,indexData:q}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,a,c);return new r(p,q,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(a,c,d){({context:a}=a);const {program:b}=d;a.setFaceCullingEnabled(!1);a.setBlendingEnabled(!0);a.setBlendFunction(e.BlendFactor.ONE,e.BlendFactor.ONE_MINUS_SRC_ALPHA);a.useProgram(b);b.setUniform1f("u_time",c.time);b.setUniform1f("u_trailLength",this._params.trailLength);
b.setUniform1f("u_flowSpeed",this._params.flowSpeed);b.setUniform1f("u_featheringSize",this._params.featheringSize);b.setUniform1f("u_featheringOffset",this._params.featheringOffset);b.setUniform1f("u_introFade",this._params.introFade?1:0);b.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0);b.setUniform1f("u_decayRate",this._params.decayRate);b.setUniformMatrix3fv("u_dvsMat3",c.dvsMat3);b.setUniformMatrix3fv("u_displayViewMat3",c.displayViewMat3);g.setUniforms(b,"color","vec4",this._params.color);
g.setUniforms(b,"opacity","float",this._params.opacity);g.setUniforms(b,"size","float",this._params.size);a.bindVAO(d.vertexArray);a.drawElements(e.PrimitiveType.TRIANGLES,d.indexCount,e.DataType.UNSIGNED_INT,0)}}const f=new Map;f.set("a_positionAndSide",0);f.set("a_timeInfo",1);f.set("a_extrude",2);f.set("a_speed",3);const t={geometry:[new h.VertexElementDescriptor("a_positionAndSide",3,e.DataType.FLOAT,0,36),new h.VertexElementDescriptor("a_timeInfo",3,e.DataType.FLOAT,12,36),new h.VertexElementDescriptor("a_extrude",
2,e.DataType.FLOAT,24,36),new h.VertexElementDescriptor("a_speed",1,e.DataType.FLOAT,32,36)]},u={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:f};class r{constructor(a,c,d){this._vertexData=a;this._indexData=c;this._values=d}attach(a){var {context:c}=a,d=k.BufferObject.createVertex(c,e.Usage.STATIC_DRAW,this._vertexData);const b=k.BufferObject.createIndex(c,e.Usage.STATIC_DRAW,this._indexData);c=new n.VertexArrayObject(c,f,t,{geometry:d},b);d=[];"ramp"===this._values.color.kind&&
d.push("vvColor");"ramp"===this._values.opacity.kind&&d.push("vvOpacity");"ramp"===this._values.size.kind&&d.push("vvSize");a=a.painter.materialManager.getProgram(u,d);this.vertexArray=c;this.program=a;this.indexCount=this._indexData.length;this._indexData=this._vertexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}return l});