// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../chunks/sphere ./elevationAlignmentUtils ./featureExpressionInfoUtils ./graphicUtils ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/edgeRendering/interfaces".split(" "),function(r,q,t,m,x,y,z,A,v,u){function w(a){return a.isVisible()?a.parameters.transparent?u.Transparency.TRANSPARENT:u.Transparency.OPAQUE:u.Transparency.INVISIBLE}class B{constructor(a,b,d){this.baseMaterial=
a;this.edgeMaterials=b;this.properties=d}}class C{get isElevationSource(){return!!this.stageObject.lastValidElevationBB}constructor(a,b,d,g,c,f,h,e=null){this.graphics3DSymbolLayer=a;this.stageObject=b;this._uniqueGeometries=d;this._uniqueMaterials=g;this._sharedResource=c;this.elevationAligner=f;this.elevationContext=h;this._edgeState=e;this.type="object3d";this._stageLayer=null;this._addedToStage=this._visible=!1;this.alignedSampledElevation=0;this.useObjectOriginAsAttachmentOrigin=this.needsElevationUpdates=
!1}initialize(a){this._stageLayer=a;a=a.stage;a.addMany(this._uniqueMaterials);a.addMany(this._uniqueGeometries);a.add(this.stageObject)}destroy(){if(this._stageLayer){var a=this._stageLayer.stage;a.removeMany(this._uniqueMaterials);a.removeMany(this._uniqueGeometries);a.remove(this.stageObject);this._addedToStage&&(this._stageLayer.remove(this.stageObject),this._addedToStage=!1);a=a.renderer.edgeView;a?.hasObject(this.stageObject)&&a.removeObject(this.stageObject);this.stageObject.dispose();this._sharedResource?.release();
this._visible=!1;this._stageLayer=null}}layerOpacityChanged(a,b){if(null!=this._edgeState){var d=w(this._edgeState.baseMaterial),g=!1;for(const c of this._edgeState.edgeMaterials)c.objectTransparency!==d&&(c.objectTransparency=d,g=!0);g&&this.resetEdgeObject(b);this._stageLayer.stage.renderer.ensureEdgeView().updateAllComponentOpacities(this.stageObject,[a])}}slicePlaneEnabledChanged(a,b){null!=this._edgeState&&(this._stageLayer.stage.renderer.ensureEdgeView().updateAllComponentMaterials(this.stageObject,
this._edgeState.edgeMaterials,{hasSlicePlane:a},!b),this._edgeState.properties.hasSlicePlane=a)}setVisibility(a){if(null!=this._stageLayer&&this._visible!==a&&(this._visible=a,this.stageObject.visible=a,this._visible&&!this._addedToStage&&(this._stageLayer.add(this.stageObject),this._addedToStage=!0),this._edgeState)){const b=this._stageLayer.stage.renderer.ensureEdgeView();b.hasObject(this.stageObject)?b.updateObjectVisibility(this.stageObject,a):a&&this._addOrUpdateEdgeObject(b,!1)}}get visible(){return this._visible}alignWithElevation(a,
b,d,g){null!=this.elevationAligner&&(null!=d&&z.setContextFeature(this.elevationContext.featureExpressionInfoContext,d),this.alignedSampledElevation=this.elevationAligner(this,this.elevationContext,a.spatialReference,(c,f)=>y.evaluateElevationInfoAtPoint(c,a,this.elevationContext,b,f),b),this.resetEdgeObject(g))}alignWithAbsoluteElevation(a,b,d){this.alignedSampledElevation=this.elevationAligner(this,this.elevationContext,null,(g,c)=>{c.sampledElevation=a;c.verticalDistanceToGround=0;c.z=a},b);this.resetEdgeObject(d)}getCenterObjectSpace(a=
t.create()){return q.copy(a,x.getCenter(this.stageObject.boundingVolumeObjectSpace.bounds))}getBoundingBoxObjectSpace(a=m.create()){const b=this.stageObject.boundingVolumeObjectSpace;m.setMin(a,b.min);m.setMax(a,b.max);return a}computeAttachmentOrigin(a){const b=this.stageObject.effectiveTransformation;if(this.useObjectOriginAsAttachmentOrigin)a.render.origin[0]+=b[12],a.render.origin[1]+=b[13],a.render.origin[2]+=b[14],a.render.num++;else for(const d of this.stageObject.geometries)d.computeAttachmentOrigin(k)&&
(q.transformMat4(k,k,b),q.add(a.render.origin,a.render.origin,k),a.render.num++)}async getProjectedBoundingBox(a,b,d,g,c){c=this.getBoundingBoxObjectSpace(c);var f=D,h=m.isPoint(c)?1:f.length;for(var e=0;e<h;e++){const p=f[e];l[0]=c[p[0]];l[1]=c[p[1]];l[2]=c[p[2]];q.transformMat4(l,l,this.stageObject.transformation);n[3*e]=l[0];n[3*e+1]=l[1];n[3*e+2]=l[2]}if(!a(n,0,h))return null;m.empty(c);a=null;this.calculateRelativeScreenBounds&&(a=this.calculateRelativeScreenBounds());for(f=0;f<3*h;f+=3){for(e=
0;3>e;e++)c[e]=Math.min(c[e],n[f+e]),c[e+3]=Math.max(c[e+3],n[f+e]);a&&d.push({location:n.slice(f,f+3),screenSpaceBoundingRect:a})}if(b?.service&&"absolute-height"!==this.elevationContext.mode){m.center(c,k);d="relative-to-scene"===this.elevationContext.mode?"scene":"ground";h=0;if(b.useViewElevation)h=b.service.getElevation(k[0],k[1],d)??0;else try{const p=A.demResolutionForBoundingBox(c,b.service.spatialReference,b);h=await b.service.queryElevation(k[0],k[1],g,p,d)??0}catch(p){}m.offset(c,0,0,-this.alignedSampledElevation+
h)}return c}addObjectState(a,b){a===v.Object3DState.Highlight&&b.addObject(this.stageObject,this.stageObject.highlight());a===v.Object3DState.MaskOccludee&&b.addObject(this.stageObject,this.stageObject.maskOccludee())}removeObjectState(a){a.removeObject(this.stageObject)}resetEdgeObject(a){if(null!=this._edgeState){var b=this._stageLayer.stage.renderer.ensureEdgeView();this._visible?this._addOrUpdateEdgeObject(b,a):b.removeObject(this.stageObject)}}_addOrUpdateEdgeObject(a,b){const d=this._edgeState;
if(null!=d){var g=w(d.baseMaterial);for(const c of d.edgeMaterials)c.objectTransparency=g;a.addOrUpdateObject3D(this.stageObject,d.edgeMaterials,d.properties,!b).then(()=>this._stageLayer?.sync())}}}const n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],l=t.create(),k=t.create(),D=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];r.Graphics3DObject3DGraphicLayer=C;r.Object3DEdgeState=B;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});