// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/has ../../../../../core/reactiveUtils ../ManipulatorType ./config ./Manipulation ./MoveXYAxisManipulation ./MoveXYDiscManipulation ./MoveZManipulation".split(" "),function(g,q,n,r,t,m,p,u,v,w,x){class y extends u.Manipulation{constructor(a){super();this._handles=new q;this._interactive=!0;const {tool:b,view:e,snapToScene:c,radius:d}=a;this._view=e;this.xyManipulation=new w.MoveXYDiscManipulation({tool:b,
view:e,snapToScene:c,radius:d});this.xyAxisManipulation=new v.MoveXYAxisManipulation({tool:b,view:e,radius:d});this.zManipulation=new x.MoveZManipulation({tool:b,view:e,radius:d});this.xyManipulation.available=a.xyAvailable;this.xyAxisManipulation.available=a.xyAxisAvailable;this.zManipulation.available=a.zAvailable;this._autoHideXYAxis();this.forEachManipulator(f=>this._handles.add(f.events.on("grab-changed",()=>this._updateManipulatorInteractivity())))}destroy(){this._handles.destroy();this.xyManipulation.destroy();
this.xyAxisManipulation.destroy();this.zManipulation.destroy()}createGraphicDragPipeline(a,b,e){return n.handlesGroup([this.xyManipulation.createGraphicDragPipeline((c,d,f,h,k)=>a(g.ManipulationType.XY,c,d,f,h,k),b,e),this.xyAxisManipulation.createGraphicDragPipeline((c,d,f,h,k)=>a(g.ManipulationType.XY_AXIS,c,d,f,h,k),b,e),this.zManipulation.createGraphicDragPipeline((c,d,f,h,k)=>a(g.ManipulationType.Z,c,d,f,h,k),b,e)])}createDragPipeline(a,b,e,c){return n.handlesGroup([this.xyManipulation.createDragPipeline((d,
f,h,k,l)=>a(g.ManipulationType.XY,d,f,h,k,l),b,e,c),this.xyAxisManipulation.createDragPipeline((d,f,h,k,l)=>a(g.ManipulationType.XY_AXIS,d,f,h,k,l),b,e,c),this.zManipulation.createDragPipeline((d,f,h,k,l)=>a(g.ManipulationType.Z,d,f,h,k,l),e)])}set snapToScene(a){this.xyManipulation.snapToScene=a}set angle(a){this.xyAxisManipulation.angle=a}set interactive(a){this._interactive!==a&&(this._interactive=a,this._updateManipulatorInteractivity())}set radius(a){this.xyAxisManipulation.radius=a;this.xyManipulation.radius=
a;this.zManipulation.radius=a}set displayScale(a){this.xyManipulation.displayScale=a;this.xyAxisManipulation.displayScale=a}forEachManipulator(a){this.xyManipulation.forEachManipulator(b=>a(b,m.ManipulatorType.TRANSLATE_XY));this.xyAxisManipulation.forEachManipulator(b=>a(b,m.ManipulatorType.TRANSLATE_XY));this.zManipulation.forEachManipulator(b=>a(b,m.ManipulatorType.TRANSLATE_Z))}get _xyAxisVisible(){const a=this.xyManipulation.someManipulator(b=>b.focused)||this.xyAxisManipulation.someManipulator(b=>
b.focused);return this._view.inputManager&&"touch"===this._view.inputManager.latestPointerType||a}_autoHideXYAxis(){const a=this.xyAxisManipulation;var b=this.xyManipulation;if(!r("esri-mobile")){var e=[];b.forEachManipulator(c=>e.push(c));a.forEachManipulator(c=>e.push(c));b=()=>{const c=[];this._xyAxisVisible||a.forEachManipulator(d=>c.push(d.disableDisplay()));this._handles.remove("disable-xy-axis-display");this._handles.add(c,"disable-xy-axis-display")};for(const c of e)this._handles.add(c.events.on("focus-changed",
b));this._view.inputManager&&this._handles.add(t.when(()=>this._view.inputManager?.latestPointerType,b));b()}}_updateManipulatorInteractivity(){const a=this.grabbing;this.forEachManipulator(b=>{b.interactive=!a&&this._interactive||b.grabbing})}static radiusForSymbol(a){return(a=null!=a&&"point-3d"===a.type&&a.symbolLayers)&&a.some(b=>"icon"===b.type)?p.discRadiusSmall:p.discRadius}}g.ManipulationType=void 0;(function(a){a[a.XY=0]="XY";a[a.XY_AXIS=1]="XY_AXIS";a[a.Z=2]="Z"})(g.ManipulationType||(g.ManipulationType=
{}));g.MoveManipulation=y;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});