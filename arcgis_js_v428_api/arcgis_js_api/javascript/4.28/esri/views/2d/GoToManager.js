// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/Error ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../ViewAnimation ./viewpointUtils".split(" "),function(e,g,l,h,m,k,n,p,A,B,C,q,r,t){e.GoToManager=class extends l{constructor(a){super(a);this._gotoTask=null}destroy(){this._gotoTask=null}async goTo(a,
c){if(a){this.view.animation&&(this.view.animation=null);var d=this._createAnimation();await n.whenOnce(()=>this.view.ready,c);var b={animate:!0,...c},{extent:f,spatialReference:u,size:v,viewpoint:w,constraints:x,padding:y,allLayerViews:z}=this.view;a=t.create(a,{extent:f,spatialReference:u,size:v,viewpoint:w,constraints:x,padding:y,allLayerViews:z,pickClosestTarget:c?.pickClosestTarget??!0});d?.update(a);this._gotoTask={};return b.animate?this._gotoAnimated(a,b):this._gotoImmediate(a,b)}m.getLogger(this).error("#goTo()",
"target cannot be null or undefined")}_gotoImmediate(a,c){const d=this._gotoTask,b=this.view.animation;a=a.then(f=>{k.throwIfAborted(c);if(d!==this._gotoTask)throw new h("view:goto-interrupted","Goto was interrupted");this.view.viewpoint=b.target=f;b.finish()});return this._cancellableGoTo(d,b,a)}_gotoAnimated(a,c){const d=this._gotoTask,b=this.view.animation;if(!b)return Promise.resolve();a=a.then(f=>{k.throwIfAborted(c);if(d!==this._gotoTask)throw new h("view:goto-interrupted","Goto was interrupted");
b.update(f);this.view.animationManager.animate(b,this.view.viewpoint,c);return b.when().then(()=>{},()=>{})});return this._cancellableGoTo(d,b,a)}_createAnimation(){if(!this.view.animation||this.view.animation.done)this.view.animation=new r;return this.view.animation}_cancellableGoTo(a,c,d){const b=()=>a===this._gotoTask;return d.finally(()=>{b()&&(c.done||c.stop(),this.view.animation=null)})}};g.__decorate([p.property({constructOnly:!0})],e.GoToManager.prototype,"view",void 0);e.GoToManager=g.__decorate([q.subclass("esri.views.2d.GoToManager")],
e.GoToManager);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});