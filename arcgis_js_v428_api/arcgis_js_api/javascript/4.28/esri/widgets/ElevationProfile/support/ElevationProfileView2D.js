// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ./constants ./HoveredPoints ./InputRepresentation2D".split(" "),function(f,g,e,b,h,k,l){class m{constructor(c,d){this._handles=new g;this._inputRepresentation=new l.InputRepresentation2D({view:c});this._hoveredPoints=new k.HoveredPoints({view:c});this._handles.add([b.watch(()=>d.viewModel.hoveredPoints,a=>this._hoveredPoints.update(a),b.syncAndInitial),b.watch(()=>{const {state:a,highlightEnabled:n,viewModel:p}=
d;return{input:p.input,state:a,highlightEnabled:n}},a=>this._updateInputRepresentation(a),b.syncAndInitial)])}destroy(){this._handles=e.destroyMaybe(this._handles);this._inputRepresentation=e.destroyMaybe(this._inputRepresentation);this._hoveredPoints=e.destroyMaybe(this._hoveredPoints)}_updateInputRepresentation({input:c,state:d,highlightEnabled:a}){d===h.ElevationProfileState.Selected&&a?this._inputRepresentation.update(c):this._inputRepresentation.remove()}}f.ElevationProfileView2D=m;Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});