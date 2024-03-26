// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../analysis/LineOfSightAnalysis ../../analysis/LineOfSightAnalysisObserver ../../analysis/LineOfSightAnalysisTarget ../../core/Collection ../../core/collectionUtils ../../core/handleUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../support/elevationInfoUtils ./LineOfSightTarget ../support/AnalysisViewModel".split(" "),
function(g,n,t,u,d,p,v,e,k,z,A,B,w,l,q,x){const m=d.ofType(q);d=class extends x.AnalysisViewModel{constructor(a){super(a);this.analysis=null;this.supportedViewType="3d";this.unsupportedErrorMessage="LineOfSightViewModel is only supported in 3D views.";this._vmTargetsToConnection=new Map;this._analysisTargetsToConnection=new Map}initialize(){this.addHandles([this.targets.on("after-add",a=>this._onViewModelTargetAdded(a.item)),this.targets.on("after-remove",a=>this._onViewModelTargetRemoved(a.item)),
e.watch(()=>this.analysis,a=>this._onAnalysisChange(a),e.syncAndInitial)])}destroy(){this._analysisTargetsToConnection.forEach(a=>a.remove())}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get observer(){const {observer:a}=this.analysis;return null==a?.position?null:this._convertAnalysisPointToAbsoluteHeight(a.position,a.elevationInfo)}set observer(a){let b=null;a&&(b=a.clone(),b.hasZ||(b.z=0));this.analysis.observer=new t({position:b})}get targets(){return this._get("targets")||
new m}set targets(a){this._set("targets",p.referenceSetter(a,this.targets,m))}continue(){null!=this.tool&&this.tool.continue()}stop(){null!=this.tool&&this.tool.stop()}get testInfo(){return{analysisView:this.analysisView,getAnalysisTargetFromViewModelTarget:a=>this._vmTargetsToConnection.get(a)?.analysisTarget}}constructAnalysis(){return new n}async onConnectToAnalysisView(a){this.addHandles([a.on("result-changed",b=>{const c=this._analysisTargetsToConnection.get(b.target);c&&(null!=b.result?(c.viewModelTarget.intersectedGraphic=
b.result.intersectedGraphic,c.viewModelTarget.intersectedLocation=b.result.intersectedLocation,c.viewModelTarget.visible=b.result.visible):(c.viewModelTarget.intersectedGraphic=null,c.viewModelTarget.intersectedLocation=null,c.viewModelTarget.visible=void 0))})],"view")}onDisconnectFromAnalysisView(){this.removeHandles("view")}_onViewModelTargetAdded(a){if(!this._vmTargetsToConnection.get(a)){var b=new u({position:a.location});this._connectViewModelWithAnalysisTarget(a,b);this.analysis.targets.add(b)}}_onViewModelTargetRemoved(a){if(a=
this._vmTargetsToConnection.get(a))a.remove(),this.analysis.targets.remove(a.analysisTarget)}_onAnalysisTargetAdded(a){if(!this._analysisTargetsToConnection.get(a)){var {position:b}=a;b=new q({location:b?this._convertAnalysisPointToAbsoluteHeight(b,a.elevationInfo):null});this._connectViewModelWithAnalysisTarget(b,a);this.targets.add(b)}}_onAnalysisTargetRemoved(a){if(a=this._analysisTargetsToConnection.get(a))a.remove(),this.targets.remove(a.viewModelTarget)}_connectViewModelWithAnalysisTarget(a,
b){let c=!1;const y=v.handlesGroup([e.watch(()=>({position:b.position,elevationInfo:b.elevationInfo}),({position:h,elevationInfo:f})=>{c||(c=!0,a.location=h?this._convertAnalysisPointToAbsoluteHeight(h,f):null,c=!1)},e.sync),e.watch(()=>a.location,h=>{if(!c){c=!0;let f=null;h&&(f=h.clone(),f.hasZ||(f.z=0));b.position=f;b.elevationInfo=null;c=!1}},e.sync)]),r={analysisTarget:b,viewModelTarget:a,remove:()=>{y.remove();this._vmTargetsToConnection.delete(a);this._analysisTargetsToConnection.delete(b)}};
this._vmTargetsToConnection.set(a,r);this._analysisTargetsToConnection.set(b,r)}_onAnalysisChange(a){this.removeHandles("analysis");this.addHandles([this.analysis.targets.on("after-add",b=>this._onAnalysisTargetAdded(b.item)),this.analysis.targets.on("after-remove",b=>this._onAnalysisTargetRemoved(b.item))],"analysis");this.targets.removeAll();a.targets.forEach(b=>{this._onAnalysisTargetAdded(b)})}_convertAnalysisPointToAbsoluteHeight(a,b){const c=a.clone();null!=this.view&&(b=l.getEffectiveElevationInfo(a.hasZ,
b),c.z=l.getConvertedElevation(this.view,a,b,l.absoluteHeightElevationInfo));return c}};g.__decorate([k.property({type:n})],d.prototype,"analysis",void 0);g.__decorate([k.property({readOnly:!0})],d.prototype,"state",null);g.__decorate([k.property()],d.prototype,"observer",null);g.__decorate([k.property({type:m,cast:p.castForReferenceSetter,nonNullable:!0})],d.prototype,"targets",null);return d=g.__decorate([w.subclass("esri.widgets.lineOfSight.LineOfSightViewModel")],d)});