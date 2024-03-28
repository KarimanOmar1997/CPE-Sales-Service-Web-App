// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/asyncUtils ../../core/colorUtils ../../core/handleUtils ../../core/promiseUtils ../../core/quantityFormatUtils ../../core/reactiveUtils ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../chunks/vec2 ../../chunks/vec2f64 ../../chunks/vec3 ../../geometry/support/coordsUtils ../../intl/messages ../../support/elevationInfoUtils ../../support/getDefaultUnitForView ../overlay/TextOverlayItem ../support/automaticLengthMeasurementUtils".split(" "),
function(f,l,B,C,D,v,E,F,G,w,y,n,S,T,U,H,p,z,I,J,K,L,M,N,O){const P={default:15,far:25};f.SegmentLabels=class extends C{constructor(a){super(a);this.stagedVertex=this.context=null;this.visible=!0;this.edgeDistance="default";this._messagesUnits=null;this._labelInfos=[];this._nextLabelIndex=0}initialize(){const a=D.createTask(async b=>{const c=await K.fetchMessageBundle("esri/core/t9n/Units");F.throwIfAborted(b);this._messagesUnits=c});this.addHandles([w.watch(()=>[null!=this.context&&this.getCameraOrExtent(this.context),
this.visible,this._edgeDistancePixels,this.stagedVertex,this._messagesUnits],()=>this._update()),...["vertex-add","vertex-update","vertex-remove"].map(b=>w.on(()=>this.context?.editGeometryOperations,b,()=>this._update())),E.makeHandle(()=>a.abort()),w.watch(()=>this._colors,b=>this._updateStyle(b))])}destroy(){for(this._nextLabelIndex=0;this._labelInfos.length;)this._destroyLabel(this._labelInfos.pop())}get updating(){return null==this._messagesUnits}get test(){return{labelContents:this._labelInfos.slice(0,
this._nextLabelIndex).map(a=>a.label.text)}}get _edgeDistancePixels(){return P[this.edgeDistance]}get _colors(){const a=this.context?.view.effectiveTheme.textColor??B.fromArray([255,255,255]),b=v.multiplyOpacity(v.getContrast(a,v.BrightnessThreshold.Low),.6);return{textColor:a,backgroundColor:b}}_update(){if(!this.destroyed){this._nextLabelIndex=0;var a=this.context;if(null!=a){var {components:b,geometry:c,coordinateHelper:g}=a.editGeometryOperations.data;if(c){var h=b.length;for(let q=0;q<h;++q){const d=
[];b[q].iterateVertices(x=>{d.push(g.toXYZ(x.pos))});0===q&&null!=this.stagedVertex&&d.push(g.toXYZ(this.stagedVertex));if(2>d.length)continue;var e=d[0],m=d[d.length-1];"polygon"===c.type&&2<d.length&&!I.equals(e,m)&&d.push(e);m=1===h?!J.isClockwise(d):!1;let t=Q,u=R;this.toScreenPointArray(a,e,t);for(e=1;e<d.length;++e){const x=d[e-1],A=d[e];this.toScreenPointArray(a,A,u);this._addLabel(a,x,t,A,u,m);[t,u]=[u,t]}}}}this._destroyUnusedLabels()}}_updateStyle({textColor:a,backgroundColor:b}){const c=
this._nextLabelIndex,g=this._labelInfos;for(let h=0;h<c;++h){const {label:e}=g[h];e.textColor=a;e.backgroundColor=b}}_addLabel(a,b,c,g,h,e){const {label:m}=this._getOrCreateLabel(a);if(!this.visible||3025>p.squaredDistance(c,h))m.visible=!1;else{var q=null!=a.graphicState?a.graphicState.isDraped?"on-the-ground":"absolute-height":L.getGeometryEffectiveElevationMode(a.editGeometryOperations.data.geometry,a.elevationInfo),{spatialReference:d}=a.editGeometryOperations.data;b=O.autoDirectDistanceByElevationMode(b,
g,d,q);g=this._messagesUnits;a=M.getDefaultUnitForView(a.view);m.text=null!=g&&null!=b?G.formatLength(g,b,a):"";m.visible=!0;a=h[0]-c[0];b=h[1]-c[1];e?p.set(k,-b,a):p.set(k,b,-a);p.normalize(k,k);p.scale(k,k,this._edgeDistancePixels);p.lerp(r,c,h,.5);p.add(r,r,k);m.position=[r[0],r[1]];m.anchor=Math.abs(k[0])>Math.abs(k[1])?0<k[0]?"left":"right":0>-k[1]?"top":"bottom"}}_getOrCreateLabel(a){var b=this._labelInfos.length>this._nextLabelIndex;const {textColor:c,backgroundColor:g}=this._colors;if(b)return a=
this._labelInfos[this._nextLabelIndex++],{label:b}=a,b.textColor=c,b.backgroundColor=g,a;b=new N({anchor:"center",fontSize:10,textColor:c,backgroundColor:g});a.view.overlay?.items.add(b);a={label:b};this._labelInfos.push(a);this._nextLabelIndex=this._labelInfos.length;return a}_destroyUnusedLabels(){for(;this._labelInfos.length>this._nextLabelIndex;)this._destroyLabel(this._labelInfos.pop())}_destroyLabel({label:a}){this.context?.view.overlay?.items.remove(a);a.destroy()}};l.__decorate([n.property()],
f.SegmentLabels.prototype,"context",void 0);l.__decorate([n.property()],f.SegmentLabels.prototype,"stagedVertex",void 0);l.__decorate([n.property()],f.SegmentLabels.prototype,"visible",void 0);l.__decorate([n.property()],f.SegmentLabels.prototype,"edgeDistance",void 0);l.__decorate([n.property()],f.SegmentLabels.prototype,"updating",null);l.__decorate([n.property()],f.SegmentLabels.prototype,"_messagesUnits",void 0);l.__decorate([n.property()],f.SegmentLabels.prototype,"_edgeDistancePixels",null);
l.__decorate([n.property()],f.SegmentLabels.prototype,"_colors",null);f.SegmentLabels=l.__decorate([H.subclass("esri.views.interactive")],f.SegmentLabels);const k=z.create(),r=z.create(),Q=y.createScreenPointArray(),R=y.createScreenPointArray();Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});