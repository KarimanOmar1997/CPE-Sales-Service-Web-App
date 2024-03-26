// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/mathUtils ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../core/libs/gl-matrix-2/types/mat4 ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/buffer/BufferView ../../layers/support/FastSymbolUpdates ../../support/debugFlags ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/hud/HUD.glsl ../lib/GLTextureMaterial ../lib/Material ../lib/RenderSlot ../lib/screenSizePerspectiveUtils ../lib/Util ../lib/VertexAttribute ./ScaleInfo ./internal/bufferWriterUtils ./internal/MaterialUtil ../../../../chunks/HUDMaterial.glsl ../shaders/HUDMaterialTechnique ../shaders/HUDMaterialTechniqueConfiguration".split(" "),
function(J,ca,da,R,S,ea,fa,ha,T,h,C,E,ia,ja,ka,la,ma,na,D,oa,U,V,G,I,pa,l,qa,A,ra,W,sa,ta){function ua(a,b,d,c=va){ha.copy(c,a.anchorPosition);c[0]*=-b[0];c[1]*=-b[1];c[0]+=a.screenOffset[0]*d;c[1]+=a.screenOffset[1]*d;return c}function X(a,b,d,c,e,k,g,n){b=b-e-(0<n[0]?c[0]*n[0]:0);let r=b+c[0]+2*e;d=d-e-(0<n[1]?c[1]*n[1]:0);e=d+c[1]+2*e;n=g.distanceFieldBoundingBox;g.textureIsSignedDistanceField&&null!=n&&(b+=c[0]*n[0],d+=c[1]*n[1],r-=c[0]*(1-n[2]),e-=c[1]*(1-n[3]),b-=k,r+=k,d-=k,e+=k);return a[0]>
b&&a[0]<r&&a[1]>d&&a[1]<e}class wa extends V.Material{constructor(a){super(a,new Y);this._configuration=new ta.HUDMaterialTechniqueConfiguration}getConfiguration(a,b){this._configuration.output=a;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset;this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective;this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits;
this._configuration.hasPolygonOffset=this.parameters.polygonOffset;this._configuration.draped=this.parameters.isDraped;this._configuration.occlusionTestEnabled=this.parameters.occlusionTest;this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled;this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField;this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter;this._configuration.vvSize=!!this.parameters.vvSize;
this._configuration.vvColor=!!this.parameters.vvColor;this._configuration.occlusionPass=b.slot===G.RenderSlot.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(a===D.ShaderOutput.Color||a===D.ShaderOutput.Alpha);a===D.ShaderOutput.Color&&(this._configuration.debugDrawLabelBorder=!!ma.debugFlags.LABELS_SHOW_BORDER);this._configuration.depthEnabled=this.parameters.depthEnabled;this._configuration.transparencyPassType=b.transparencyPassType;this._configuration.multipassEnabled=b.multipassEnabled;this._configuration.cullAboveGround=
b.multipassTerrain.cullAboveGround;return this._configuration}intersect(a,b,d,c,e,k){if(d.options.selectionMode&&d.options.hud&&a.visible&&d.point){c=this.parameters;e=d.point;var g=d.camera,{scaleX:n,scaleY:r}=this._getScreenScale(a);n*=g.pixelRatio;r*=g.pixelRatio;R.fromMat4(K,b);if(a.attributes.has(l.VertexAttribute.FEATUREATTRIBUTE)){var f=K,w=f[0],t=f[1],u=f[2],y=f[3],x=f[4],m=f[5],z=f[6],F=f[7];const L=f[8],M=1/Math.sqrt(w*w+t*t+u*u),N=1/Math.sqrt(y*y+x*x+m*m),O=1/Math.sqrt(z*z+F*F+L*L);f[0]=
w*M;f[1]=t*M;f[2]=u*M;f[3]=y*N;f[4]=x*N;f[5]=m*N;f[6]=z*O;f[7]=F*O;f[8]=L*O}f=a.attributes.get(l.VertexAttribute.POSITION);w=a.attributes.get(l.VertexAttribute.SIZE);t=a.attributes.get(l.VertexAttribute.NORMAL);a=a.attributes.get(l.VertexAttribute.AUXPOS1);pa.assert(3<=f.size);u=W.calculateAnchorPosForRendering(c);y="screen"===this.parameters.centerOffsetUnits;for(x=0;x<f.data.length/f.size;x++)m=x*f.size,h.set(q,f.data[m],f.data[m+1],f.data[m+2]),h.transformMat4(q,q,b),m=x*w.size,B[0]=w.data[m]*
n,B[1]=w.data[m+1]*r,h.transformMat4(q,q,g.viewMatrix),m=x*a.size,h.set(v,a.data[m],a.data[m+1],a.data[m+2]),y||(q[0]+=v[0],q[1]+=v[1],0!==v[2]&&(m=v[2],h.normalize(v,q),h.subtract(q,q,h.scale(v,v,m)))),m=x*t.size,h.set(H,t.data[m],t.data[m+1],t.data[m+2]),this._normalAndViewAngle(H,K,g,P),this._applyVerticalOffsetTransformationView(q,P,g,Q),g.applyProjection(q,p),-1<p[0]&&(y&&(v[0]||v[1])&&(p[0]+=v[0]*g.pixelRatio,0!==v[1]&&(p[1]+=I.applyScaleFactor(v[1],Q.factorAlignment)*g.pixelRatio),g.unapplyProjection(p,
q)),p[0]+=this.parameters.screenOffset[0]*g.pixelRatio,p[1]+=this.parameters.screenOffset[1]*g.pixelRatio,p[0]=Math.floor(p[0]),p[1]=Math.floor(p[1]),I.applyPrecomputedScaleFactor(B,Q.factor,B),m=1*g.pixelRatio,z=0,c.textureIsSignedDistanceField&&(z=c.outlineSize*g.pixelRatio/2),X(e,p[0],p[1],B,m,z,c,u)&&(z=d.ray,h.transformMat4(Z,q,ea.invert(xa,g.viewMatrix)),p[0]=e[0],p[1]=e[1],g.unprojectFromRenderScreen(p,q)&&(m=C.create(),h.copy(m,z.direction),F=1/h.length(m),h.scale(m,m,F),z=h.distance(z.origin,
q)*F,k(z,m,-1,!0,1,Z))))}}intersectDraped(a,b,d,c,e,k){b=a.attributes.get(l.VertexAttribute.POSITION);d=a.attributes.get(l.VertexAttribute.SIZE);const g=this.parameters,n=W.calculateAnchorPosForRendering(g);let {scaleX:r,scaleY:f}=this._getScreenScale(a);r*=a.screenToWorldRatio;f*=a.screenToWorldRatio;const w=2*a.screenToWorldRatio;for(let y=0;y<b.data.length/b.size;y++){var t=y*b.size;const x=b.data[t];t=b.data[t+1];var u=y*d.size;B[0]=d.data[u]*r;B[1]=d.data[u+1]*f;u=0;g.textureIsSignedDistanceField&&
(u=g.outlineSize*a.screenToWorldRatio/2);X(c,x,t,B,w,u,g,n)&&e(k.dist,k.normal,-1,!1)}}createBufferWriter(){return new ya(this)}_normalAndViewAngle(a,b,d,c){ia.isMat4(b)&&(b=R.fromMat4(za,b));h.transformMat3(c.normal,a,b);h.transformMat4(c.normal,c.normal,d.viewInverseTransposeMatrix);c.cosAngle=h.dot(aa,Aa);return c}_updateScaleInfo(a,b,d){const c=this.parameters;null!=c.screenSizePerspective?I.precomputeScaleFactor(d,b,c.screenSizePerspective,a.factor):(a.factor.scale=1,a.factor.factor=0,a.factor.minScaleFactor=
0);null!=c.screenSizePerspectiveAlignment?I.precomputeScaleFactor(d,b,c.screenSizePerspectiveAlignment,a.factorAlignment):(a.factorAlignment.factor=a.factor.factor,a.factorAlignment.scale=a.factor.scale,a.factorAlignment.minScaleFactor=a.factor.minScaleFactor)}applyShaderOffsetsView(a,b,d,c,e,k,g){b=this._normalAndViewAngle(b,d,e,P);this._applyVerticalGroundOffsetView(a,b,e,g);this._applyVerticalOffsetTransformationView(g,b,e,k);this._applyPolygonOffsetView(g,b,c[3],e,g);this._applyCenterOffsetView(g,
c,g);return g}applyShaderOffsetsNDC(a,b,d,c,e){this._applyCenterOffsetNDC(a,b,d,c);null!=e&&h.copy(e,c);this._applyPolygonOffsetNDC(c,b,d,c);return c}_applyPolygonOffsetView(a,b,d,c,e){var k=c.aboveGround?1:-1;d=Math.sign(d);0===d&&(d=k);k*=d;if(0>=this.parameters.shaderPolygonOffset)return h.copy(e,a);b=da.clamp(Math.abs(b.cosAngle),.01,1);c=1-Math.sqrt(1-b*b)/b/c.viewport[2];0<k?h.scale(e,a,c):h.scale(e,a,1/c);return e}_applyVerticalGroundOffsetView(a,b,d,c){const e=h.length(a),k=d.aboveGround?
1:-1;d=d.computeRenderPixelSizeAtDist(e)*oa.HUDVerticalPixelOffset;b=h.scale(q,b.normal,k*d);h.add(c,a,b);return c}_applyVerticalOffsetTransformationView(a,b,d,c){const e=this.parameters;if(!e.verticalOffset?.screenLength){if(e.screenSizePerspective||e.screenSizePerspectiveAlignment){var k=h.length(a);this._updateScaleInfo(c,k,b.cosAngle)}else c.factor.scale=1,c.factorAlignment.scale=1;return a}k=h.length(a);d=ra.verticalOffsetAtDistance(d,k,e.verticalOffset,b.cosAngle,e.screenSizePerspectiveAlignment??
e.screenSizePerspective);this._updateScaleInfo(c,k,b.cosAngle);h.scale(b.normal,b.normal,d);return h.add(a,a,b.normal)}_applyCenterOffsetView(a,b,d){const c="screen"!==this.parameters.centerOffsetUnits;d!==a&&h.copy(d,a);c&&(d[0]+=b[0],d[1]+=b[1],b[2]&&(h.normalize(H,d),h.add(d,d,h.scale(H,H,b[2]))));return d}_applyCenterOffsetNDC(a,b,d,c){const e="screen"!==this.parameters.centerOffsetUnits;c!==a&&h.copy(c,a);e||(c[0]+=b[0]/d.fullWidth*2,c[1]+=b[1]/d.fullHeight*2);return c}_applyPolygonOffsetNDC(a,
b,d,c){const e=this.parameters.shaderPolygonOffset;a!==c&&h.copy(c,a);e&&(a=d.aboveGround?1:-1,c[2]-=(a*Math.sign(b[3])||a)*e);return c}produces(a,b){if(b===D.ShaderOutput.Color||b===D.ShaderOutput.Alpha||b===D.ShaderOutput.Highlight||b===D.ShaderOutput.ObjectAndLayerIdColor){if(a===G.RenderSlot.DRAPED_MATERIAL)return!0;const {drawInSecondSlot:d,occlusionTest:c}=this.parameters;return a===(d?G.RenderSlot.LABEL_MATERIAL:G.RenderSlot.HUD_MATERIAL)||c&&a===G.RenderSlot.OCCLUSION_PIXELS}return!1}createGLMaterial(a){return new Ba(a)}calculateRelativeScreenBounds(a,
b,d=ja.create()){ua(this.parameters,a,b,d);d[2]=d[0]+a[0];d[3]=d[1]+a[1];return d}_getScreenScale(a){a=a.attributes.get(l.VertexAttribute.FEATUREATTRIBUTE);if(null==a)return{scaleX:1,scaleY:1};a=E.fromArray(a.data,Ca);const [b,d]=la.evaluateModelTransformScale(Da,this.parameters,a);return{scaleX:b,scaleY:d}}}class Ba extends U.GLTextureMaterial{constructor(a){super({...a,...a.material.parameters})}selectProgram(a){return this.ensureTechnique(sa.HUDMaterialTechnique,a)}beginSlot(a){this.updateTexture(this._material.parameters.textureId);
this._material.setParameters(this.textureBindParameters);return this.selectProgram(a)}}const Q=new qa.ScaleInfo,va=T.create(),q=C.create(),H=C.create(),p=E.create(),aa=C.create(),Z=C.create(),K=S.create(),za=S.create(),xa=fa.create(),v=C.create(),Da=E.create(),Ca=E.create(),P={normal:aa,cosAngle:0},B=[0,0],Aa=C.fromValues(0,0,1);class Y extends U.GLTextureMaterialBindParameters{constructor(){super(...arguments);this.renderOccluded=V.RenderOccludedFlag.Occlude;this.isDecoration=!1;this.color=E.fromValues(1,
1,1,1);this.texCoordScale=[1,1];this.polygonOffset=!1;this.anchorPosition=T.fromValues(.5,.5);this.screenOffset=[0,0];this.shaderPolygonOffset=1E-5;this.sampleSignedDistanceFieldTexelCenter=this.textureIsSignedDistanceField=!1;this.outlineColor=E.fromValues(1,1,1,1);this.outlineSize=0;this.vvSizeEnabled=!1;this.vvSymbolRotationMatrix=this.vvSymbolAnchor=this.vvOpacity=this.vvColor=this.vvSize=null;this.hasSlicePlane=!1;this.occlusionTest=this.pixelSnappingEnabled=!0;this.centerOffsetUnits="world";
this.drawInSecondSlot=!1;this.depthEnabled=!0;this.isDraped=!1}}const ba=na.newLayout().vec3f(l.VertexAttribute.POSITION).vec3f(l.VertexAttribute.NORMAL).vec2f(l.VertexAttribute.UV0).vec4u8(l.VertexAttribute.COLOR).vec2f(l.VertexAttribute.SIZE).vec4f(l.VertexAttribute.AUXPOS1).vec4f(l.VertexAttribute.FEATUREATTRIBUTE),Ea=ba.clone().vec4u8(l.VertexAttribute.OBJECTANDLAYERIDCOLOR);class ya{constructor(a){this._material=a;this.vertexBufferLayout=ca("enable-feature:objectAndLayerId-rendering")?Ea:ba}elementCount(a){return 6*
a.attributes.get(l.VertexAttribute.POSITION).indices.length}write(a,b,d,c,e){A.writePosition(d.attributes.get(l.VertexAttribute.POSITION),a,c.position,e,6);A.writeNormal(d.attributes.get(l.VertexAttribute.NORMAL),b,c.normal,e,6);a=d.attributes.get(l.VertexAttribute.UV0).data;var k;if(null==a||4>a.length){a=this._material.parameters;var g=k=0;var n=a.texCoordScale[0];var r=a.texCoordScale[1]}else k=a[0],g=a[1],n=a[2],r=a[3];n=Math.min(1.99999,n+1);r=Math.min(1.99999,r+1);a=d.attributes.get(l.VertexAttribute.POSITION).indices.length;
b=e;var f=c.uv0;for(let u=0;u<a;++u)f.set(b,0,k),f.set(b,1,g),b++,f.set(b,0,n),f.set(b,1,g),b++,f.set(b,0,n),f.set(b,1,r),b++,f.set(b,0,n),f.set(b,1,r),b++,f.set(b,0,k),f.set(b,1,r),b++,f.set(b,0,k),f.set(b,1,g),b++;A.writeColor(d.attributes.get(l.VertexAttribute.COLOR),4,c.color,e,6);const {data:w,indices:t}=d.attributes.get(l.VertexAttribute.SIZE);a=t.length;k=c.size;b=e;for(g=0;g<a;++g)for(n=w[2*t[g]],r=w[2*t[g]+1],f=0;6>f;++f)k.set(b,0,n),k.set(b,1,r),b++;d.attributes.get(l.VertexAttribute.AUXPOS1)?
A.writeBufferVec4(d.attributes.get(l.VertexAttribute.AUXPOS1),c.auxpos1,e,6):A.writeBufferVec4Zeros(c.auxpos1,e,6*a);d.attributes.get(l.VertexAttribute.FEATUREATTRIBUTE)?A.writeBufferVec4(d.attributes.get(l.VertexAttribute.FEATUREATTRIBUTE),c.featureAttribute,e,6):A.writeBufferVec4Zeros(c.featureAttribute,e,6*a);null!=d.objectAndLayerIdColor&&(a=d.attributes.get(l.VertexAttribute.POSITION)?.indices)&&(a=a.length,c=c.getField(l.VertexAttribute.OBJECTANDLAYERIDCOLOR,ka.BufferViewVec4u8),A.writeObjectAndLayerIdColor(d.objectAndLayerIdColor,
c,a,e,6))}}J.HUDMaterial=wa;J.Parameters=Y;Object.defineProperty(J,Symbol.toStringTag,{value:"Module"})});