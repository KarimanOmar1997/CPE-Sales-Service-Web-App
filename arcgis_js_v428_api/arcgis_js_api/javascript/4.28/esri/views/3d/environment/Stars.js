// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../assets ../../../core/Accessor ../../../core/asyncUtils ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../core/support/UpdatingHandles ./StarsTechnique ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/VertexArrayObject ../webgl-engine/lib/VertexAttribute ../../webgl/BufferObject ../../webgl/enums".split(" "),
function(e,h,A,B,C,v,D,r,E,F,l,R,S,T,G,n,w,H,x,I,J,K,L,t,M,y){e.Stars=class extends B{get updating(){return this._updatingTracking.updating||this.loading}get loading(){return null!=this._loadDataTask&&!this._loadDataTask.finished}constructor(a){super(a);this._loadDataTask=null;this._numPoints=0;this._renderParameter=new x.StarPassParameters;this._updatingTracking=new H.UpdatingHandles}initialize(){this._loadDataTask=this._createLoadDataTask()}destroy(){this._loadDataTask=r.abortMaybe(this._loadDataTask);
this._updatingTracking.destroy();this._numPoints=0;this._technique=r.releaseMaybe(this._technique);this._vao=r.disposeMaybe(this._vao);f=null}render(a){const {rctx:b}=a;this._ensureResources(b);null!=this._technique&&null!=this._vao&&(this._technique.compiled?(a=b.bindTechnique(this._technique,this._renderParameter,a.bindParameters),b.bindVAO(this._vao),a.assertCompatibleVertexAttributeLocations(this._vao),b.drawArrays(y.PrimitiveType.POINTS,0,this._numPoints)):this.requestRender())}_ensureResources(a){if(null==
this._technique&&null!=f){this._technique=new x.StarsTechnique({rctx:a,viewingMode:this.view.state.viewingMode});this._numPoints=f.byteLength/9;var b=new Float32Array(f,0,2*this._numPoints),c=new Uint8Array(f,8*this._numPoints,this._numPoints);this._vao=this._createVertexArrayObject(a,b,c,this._numPoints);this._updatingTracking.add(()=>"virtual"!==this.view.environment.lighting.type?this.view.environment.lighting.date:null,k=>this._update(k),F.initial)}}_computeDayDuration(a){const b=new Date(a.getFullYear(),
0,1,11,58,56),c=new Date(a.getFullYear()+1,0,1,11,58,55);return(+a-+b)/(+c-+b)}_update(a){if(a){var b=a.getHours()/12,c=a.getMinutes()/60*(2/24),k=a.getSeconds()/60*(2/1440);b=(b+c+k-.9972222)%2;a=2*this._computeDayDuration(a);c=n.copy(this._renderParameter.modelMatrix,N);n.rotateZ(c,c,-a*Math.PI);n.multiply(c,O,c);n.rotateZ(c,c,-b*Math.PI);this.requestRender()}}_hexToRGB(a){return[parseInt(a.substring(0,2),16),parseInt(a.substring(2,4),16),parseInt(a.substring(4,6),16)]}_unpackUint8Attributes(a){return 192<=
a?[2.9,a-192]:160<=a?[2.5,a-160]:128<=a?[2,a-128]:96<=a?[1.5,a-96]:64<=a?[1,a-64]:32<=a?[.7,a-32]:[.4,a]}_createVertexArrayObject(a,b,c,k){const p=z.createBuffer(k),u=p.position,q=p.color,P=p.size;for(let d=0;d<k;d++){var m=b[2*d],g=b[2*d+1];u.set(d,0,-Math.cos(m)*Math.sin(g));u.set(d,1,-Math.sin(m)*Math.sin(g));u.set(d,2,-Math.cos(g));m=this._unpackUint8Attributes(c[d]);g=this._hexToRGB(Q[m[1]]);q.set(d,0,255*g[0]);q.set(d,1,255*g[1]);q.set(d,2,255*g[2]);q.set(d,3,255);P.set(d,m[0])}return new L.VertexArrayObject(a,
K.Default3D,{geometry:I.glLayout(z)},{geometry:M.BufferObject.createVertex(a,y.Usage.STATIC_DRAW,p.buffer)})}_createLoadDataTask(){if(null!=f)return null;const a=C.createTask(async b=>{({data:b}=await A.fetchAsset("esri/views/3d/environment/resources/stars.wsv",{responseType:"array-buffer",signal:b}));this._verifyStarData(b);f=b});a.promise.catch(b=>{E.isAbortError(b)||D.getLogger(this).error(b)}).then(()=>{this.destroyed||(this.requestRender(),this.notifyChange("updating"))});return a}_verifyStarData(a){if(!a)throw new v("stars:no-data-received",
"Failed to create stars because star catalogue is missing");a=a.byteLength/9;if(0!==a%1||5E4<a||5E3>a)throw new v("stars:invalid-data","Failed to create stars because star catalogue data is invalid");}};h.__decorate([l.property({constructOnly:!0})],e.Stars.prototype,"view",void 0);h.__decorate([l.property({constructOnly:!0})],e.Stars.prototype,"requestRender",void 0);h.__decorate([l.property({readOnly:!0})],e.Stars.prototype,"updating",null);h.__decorate([l.property()],e.Stars.prototype,"_loadDataTask",
void 0);h.__decorate([l.property()],e.Stars.prototype,"_updatingTracking",void 0);e.Stars=h.__decorate([G.subclass("esri.views.3d.environment.Stars")],e.Stars);const Q="9bb2ff;9eb5ff;aabfff;bbccff;ccd8ff ;dae2ff;e4e9ff;eeefff;f8f6ff;fff9fb;fff5ef;fff1e5;ffeddb;ffe9d2;ffe6ca;ffe3c3;ffe0bb;ffddb4;ffdaad;ffd6a5;ffd29c;ffcc8f;ffc178;ffa94b;ff7b00".split(";"),O=w.fromValues(1,0,0,0,0,.9174771405229186,.39778850739794974,0,0,-.39778850739794974,.9174771405229186,0,0,0,0,1),N=w.fromValues(1,0,0,0,0,.9174771405229186,
-.39778850739794974,0,0,.39778850739794974,.9174771405229186,0,0,0,0,1),z=J.newLayout().vec3f(t.VertexAttribute.POSITION).vec4u8(t.VertexAttribute.COLOR).f32(t.VertexAttribute.SIZE);let f=null;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});