// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/clock","../../../core/maybe","../InputHandler","./support"],function(h,k,l,m,f){class n extends m.InputHandler{constructor(a=f.DefaultParameters.maximumClickDelay,b=f.DefaultParameters.movementUntilMouseDrag,d=f.DefaultParameters.movementUntilPenDrag,c=f.DefaultParameters.movementUntilTouchDrag,e=f.DefaultParameters.holdDelay,p=k.clock){super(!1);this._maximumClickDelay=a;this._movementUntilMouseDrag=b;this._movementUntilPenDrag=d;this._movementUntilTouchDrag=c;this._holdDelay=
e;this._clock=p;this._pointerState=new Map;this._pointerDrag=this.registerOutgoing("pointer-drag");this._immediateClick=this.registerOutgoing("immediate-click");this._pointerHold=this.registerOutgoing("hold");this.registerIncoming("pointer-down",this._handlePointerDown.bind(this));this.registerIncoming("pointer-up",g=>{this._handlePointerLoss(g,"pointer-up")});this.registerIncoming("pointer-capture-lost",g=>{this._handlePointerLoss(g,"pointer-capture-lost")});this.registerIncoming("pointer-cancel",
g=>{this._handlePointerLoss(g,"pointer-cancel")});this._moveHandle=this.registerIncoming("pointer-move",this._handlePointerMove.bind(this));this._moveHandle.pause()}onUninstall(){this._pointerState.forEach(a=>{a.holdTimeout=l.removeMaybe(a.holdTimeout)});super.onUninstall()}_handlePointerDown(a){const b=a.data,d=b.native.pointerId;var c=null;0===this._pointerState.size&&(c=this._clock.setTimeout(()=>{const e=this._pointerState.get(d);e&&(e.isDragging||(this._pointerHold.emit(e.previousEvent,void 0,
a.modifiers),e.holdEmitted=!0),e.holdTimeout=null)},this._holdDelay));c={startEvent:b,previousEvent:b,startTimestamp:a.timestamp,isDragging:!1,downButton:b.native.button,holdTimeout:c,modifiers:new Set};this._pointerState.set(d,c);this.startCapturingPointer(b.native);this._moveHandle.resume();1<this._pointerState.size&&this._startDragging(a)}_createPointerDragData(a,b,d){return{action:a,startEvent:b.startEvent,previousEvent:b.previousEvent,currentEvent:d}}_handlePointerMove(a){const b=a.data,d=this._pointerState.get(b.native.pointerId);
if(d){if(d.isDragging)this._pointerDrag.emit(this._createPointerDragData("update",d,b),void 0,d.modifiers);else{const c=f.euclideanDistance(b,d.startEvent),e=this._getDragThreshold(b.native.pointerType);c>e&&this._startDragging(a)}d.previousEvent=b}}_getDragThreshold(a){switch(a){case "touch":return this._movementUntilTouchDrag;case "pen":return this._movementUntilPenDrag;default:return this._movementUntilMouseDrag}}_startDragging(a){const b=a.data,d=b.native.pointerId;this._pointerState.forEach(c=>
{null!=c.holdTimeout&&(c.holdTimeout.remove(),c.holdTimeout=null);c.isDragging||(c.modifiers=a.modifiers,c.isDragging=!0,d===c.startEvent.native.pointerId?this._pointerDrag.emit(this._createPointerDragData("start",c,b)):this._pointerDrag.emit(this._createPointerDragData("start",c,c.previousEvent),a.timestamp))})}_handlePointerLoss(a,b){const d=a.data,c=d.native.pointerId,e=this._pointerState.get(c);e&&(null!=e.holdTimeout&&(e.holdTimeout.remove(),e.holdTimeout=null),e.isDragging?this._pointerDrag.emit(this._createPointerDragData("end",
e,"pointer-up"===b?d:e.previousEvent),void 0,e.modifiers):"pointer-up"===b&&e.downButton===d.native.button&&a.timestamp-e.startTimestamp<=this._maximumClickDelay&&!e.holdEmitted&&this._immediateClick.emit(d),this._pointerState.delete(c),this.stopCapturingPointer(d.native),0===this._pointerState.size&&this._moveHandle.pause())}}h.PointerClickHoldAndDrag=n;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});