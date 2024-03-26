// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../core/maybe ../../../../../core/RandomLCG ../definitions ../enums ./WGLGeometryBrushFill ../techniques/utils ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/FramebufferObject ../../../../webgl/Renderbuffer ../../../../webgl/RenderbufferDescriptor ../../../../webgl/Texture ../../../../webgl/TextureDescriptor ../../../../webgl/VertexArrayObject".split(" "),function(t,x,m,u,y,p,z,h,A,B,C,D,v,E){class F extends y{constructor(){super(...arguments);this._dotTextureSize=
0;this._dotTextures=null;this._dotSamplers=new Int32Array([m.textureBindingRenderer0,m.textureBindingRenderer1]);this._dotVAO=null;this._dotDesc={vsPath:"dot/dot",fsPath:"dot/dot",attributes:new Map([["a_pos",0]])}}dispose(){super.dispose();this._disposeTextures();this._dotFBO=t.disposeMaybe(this._dotFBO);this._dotVAO=t.disposeMaybe(this._dotVAO)}getGeometryType(){return u.WGLGeometryType.FILL}supportsSymbology(c){return c===u.WGLSymbologyType.DOT_DENSITY}_drawFills(c,b,a,d,f,e){const {passOptions:k}=
c;null!=k&&"hittest"===k.type?super._drawFills(c,b,a,d,f,e):(a=this._drawDotLocations(c,b,a,f,e),this._drawDotDensity(c,b,a))}_drawDotDensity(c,b,a){const {context:d,painter:f,rendererInfo:e,requestRender:k,allowDelayedRender:q}=c,g=f.materialManager.getProgram(this._dotDesc);if(q&&null!=k&&!g.compiled)k();else{var {rendererSchema:l}=e;p.assertRendererSchema(l,"dot-density");var n=this._createDotDensityMesh(d,this._dotDesc.attributes,{geometry:[{name:"a_pos",count:2,type:h.DataType.SHORT,divisor:0,
normalized:!1,offset:0,stride:4}]});d.setStencilTestEnabled(!0);d.useProgram(g);g.setUniform1f("u_tileZoomFactor",1);g.setUniform1i("u_texture",this._dotSamplers[0]);g.setUniform1f("u_dotSize",Math.max(l.dotSize,1));g.setUniform1f("u_pixelRatio",window.devicePixelRatio);this._setSharedUniforms(g,c,b);d.bindTexture(a,this._dotSamplers[0]);d.bindVAO(n);d.drawArrays(h.PrimitiveType.POINTS,0,262144)}}_drawDotLocations(c,b,a,d,f){const {context:e,rendererInfo:k,requiredLevel:q}=c,g=e.getViewport();var {rendererSchema:l}=
k;p.assertRendererSchema(l,"dot-density");const {dotScale:n,colors:G,activeDots:H,backgroundColor:I,dotValue:J}=l;e.setViewport(0,0,512,512);l=e.getBoundFramebufferObject();const w=this._createFBO(e);e.bindFramebuffer(w);e.setClearColor(0,0,0,0);e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.STENCIL_BUFFER_BIT);e.setStencilTestEnabled(!1);b=1/2**(q-b.key.level);const r=m.tileSize,K=r*window.devicePixelRatio*r*window.devicePixelRatio,L=1/b*(1/b);c=n?c.state.scale/n:1;a.setUniform1f("u_tileZoomFactor",b);a.setUniform1f("u_tileDotsOverArea",
K/(m.tileSize*window.devicePixelRatio*m.tileSize*window.devicePixelRatio));a.setUniformMatrix4fv("u_dotColors",G);a.setUniform4fv("u_isActive",H);a.setUniform4fv("u_dotBackgroundColor",I);a.setUniform1f("u_dotValue",Math.max(1,J*c*L));this._bindDotDensityTextures(e,a,k,r);e.drawElements(h.PrimitiveType.TRIANGLES,d,h.DataType.UNSIGNED_INT,f);e.setViewport(g.x,g.y,g.width,g.height);e.bindFramebuffer(l);return w.colorTexture}_createFBO(c){if(null==this._dotFBO){const b=new v.TextureDescriptor(512,512);
b.samplingMode=h.TextureSamplingMode.NEAREST;b.wrapMode=h.TextureWrapMode.CLAMP_TO_EDGE;const a=new B.Renderbuffer(c,new C.RenderbufferDescriptor(h.RenderbufferFormat.DEPTH_STENCIL,512,512));this._dotFBO=new A.FramebufferObject(c,b,a)}return this._dotFBO}_disposeTextures(){if(this._dotTextures){for(let c=0;c<this._dotTextures.length;c++)this._dotTextures[c].dispose();this._dotTextures=null}}_bindDotDensityTextures(c,b,a,d){({rendererSchema:a}=a);p.assertRendererSchema(a,"dot-density");d=this._createDotDensityTextures(c,
d,a.seed);b.setUniform1iv("u_dotTextures",this._dotSamplers);for(b=0;b<d.length;b++)c.bindTexture(d[b],this._dotSamplers[b])}_createDotDensityMesh(c,b,a){if(null==this._dotVAO){var d=new Int16Array(524288);for(let f=0;512>f;f++)for(let e=0;512>e;e++)d[2*(e+512*f)]=e,d[2*(e+512*f)+1]=f;d=z.BufferObject.createVertex(c,h.Usage.STATIC_DRAW,d);this._dotVAO=new E.VertexArrayObject(c,b,a,{geometry:d},null)}return this._dotVAO}_createDotDensityTextures(c,b,a){if(this._dotTextureSize!==b||this._seed!==a)this._disposeTextures(),
this._dotTextureSize=b,this._seed=a;null===this._dotTextures&&(a=new x(a),this._dotTextures=[this._allocDotDensityTexture(c,b,a),this._allocDotDensityTexture(c,b,a)]);return this._dotTextures}_allocDotDensityTexture(c,b,a){const d=new Float32Array(b*b*4);for(let f=0;f<d.length;f++)d[f]=a.getFloat();a=new v.TextureDescriptor;a.dataType=h.PixelType.FLOAT;a.samplingMode=h.TextureSamplingMode.NEAREST;a.width=b;a.height=b;return new D.Texture(c,a,d)}}return F});