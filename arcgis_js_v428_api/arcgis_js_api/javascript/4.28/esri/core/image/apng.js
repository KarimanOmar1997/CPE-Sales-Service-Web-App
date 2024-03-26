// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_commonjsHelpers","../promiseUtils","../time"],function(F,I,K,L){function J(r){const v=new Uint8Array(r);return!M.some((f,e)=>f!==v[e])}var G={exports:{}};G.exports;(function(r,v){(function(f,e){r.exports=e()})(I.commonjsGlobal,function(){return function(f){function e(l){if(g[l])return g[l].exports;var n=g[l]={exports:{},id:l,loaded:!1};f[l].call(n.exports,n,n.exports,e);n.loaded=!0;return n.exports}var g={};e.m=f;e.c=g;e.p="";return e(0)}([function(f,e,g){function l(p,
y){var z=new DataView(p.buffer),u=8,w=void 0,B=void 0,m=void 0;do B=z.getUint32(u),w=u+4,w=Array.prototype.slice.call(p.subarray(w,w+4)),w=String.fromCharCode.apply(String,w),m=y(w,p,u,B),u+=12+B;while(!1!==m&&"IEND"!=w&&u<p.length)}function n(p,y,z){var u=new Uint8Array(z);u.set(p.subarray(y,y+z));return u}Object.defineProperty(e,"__esModule",{value:!0});e.isNotPNG=function(p){return p===a};e.isNotAPNG=function(p){return p===d};e.default=function(p){var y=new Uint8Array(p);if(Array.prototype.some.call(k,
function(x,t){return x!==y[t]}))return a;var z=!1;l(y,function(x){return!(z="acTL"===x)});if(!z)return d;var u=[],w=[],B=null,m=null,D=0,C=new b.APNG;l(y,function(x,t,q,E){var A=new DataView(t.buffer);switch(x){case "IHDR":B=t.subarray(q+8,q+8+E);C.width=A.getUint32(q+8);C.height=A.getUint32(q+12);break;case "acTL":C.numPlays=A.getUint32(q+8+4);break;case "fcTL":m&&(C.frames.push(m),D++);m=new b.Frame;m.width=A.getUint32(q+8+4);m.height=A.getUint32(q+8+8);m.left=A.getUint32(q+8+12);m.top=A.getUint32(q+
8+16);x=A.getUint16(q+8+20);t=A.getUint16(q+8+22);0===t&&(t=100);m.delay=1E3*x/t;10>=m.delay&&(m.delay=100);C.playTime+=m.delay;m.disposeOp=A.getUint8(q+8+24);m.blendOp=A.getUint8(q+8+25);m.dataParts=[];0===D&&2===m.disposeOp&&(m.disposeOp=1);break;case "fdAT":m&&m.dataParts.push(t.subarray(q+8+4,q+8+E));break;case "IDAT":m&&m.dataParts.push(t.subarray(q+8,q+8+E));break;case "IEND":w.push(n(t,q,12+E));break;default:u.push(n(t,q,12+E))}});m&&C.frames.push(m);if(0==C.frames.length)return d;var N=new Blob(u),
O=new Blob(w);C.frames.forEach(function(x){var t=[];t.push(k);B.set(H(x.width),0);B.set(H(x.height),4);t.push(h("IHDR",B));t.push(N);x.dataParts.forEach(function(q){return t.push(h("IDAT",q))});t.push(O);x.imageData=new Blob(t,{type:"image/png"});delete x.dataParts;t=null});return C};var c=(f=g(1))&&f.__esModule?f:{default:f},b=g(2),a=Error("Not a PNG"),d=Error("Not an animated PNG"),k=new Uint8Array([137,80,78,71,13,10,26,10]),h=function(p,y){var z=p.length+y.length,u=new Uint8Array(z+8),w=new DataView(u.buffer);
w.setUint32(0,y.length);for(var B=u.set,m=new Uint8Array(p.length),D=0;D<p.length;D++)m[D]=p.charCodeAt(D);B.call(u,m,4);u.set(y,8);p=(0,c.default)(u,4,z);w.setUint32(z+4,p);return u},H=function(p){return new Uint8Array([p>>>24&255,p>>>16&255,p>>>8&255,p&255])}},function(f,e){Object.defineProperty(e,"__esModule",{value:!0});e.default=function(n){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,b=-1,a=c;for(c+=2<arguments.length&&void 0!==arguments[2]?arguments[2]:n.length-c;a<c;a++)b=
b>>>8^g[(b^n[a])&255];return b^-1};var g=new Uint32Array(256);for(f=0;256>f;f++){e=f;for(var l=0;8>l;l++)e=0!==(e&1)?3988292384^e>>>1:e>>>1;g[f]=e}},function(f,e,g){function l(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function");}Object.defineProperty(e,"__esModule",{value:!0});e.Frame=e.APNG=void 0;var n=function(){function b(a,d){for(var k=0;k<d.length;k++){var h=d[k];h.enumerable=h.enumerable||!1;h.configurable=!0;"value"in h&&(h.writable=!0);Object.defineProperty(a,
h.key,h)}}return function(a,d,k){d&&b(a.prototype,d);k&&b(a,k);return a}}(),c=(f=g(3))&&f.__esModule?f:{default:f};e.APNG=function(){function b(){l(this,b);this.playTime=this.numPlays=this.height=this.width=0;this.frames=[]}n(b,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(a){return a.createImage()}))}},{key:"getPlayer",value:function(a){var d=this,k=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!1;return this.createImages().then(function(){return new c.default(d,
a,k)})}}]);return b}();e.Frame=function(){function b(){l(this,b);this.blendOp=this.disposeOp=this.delay=this.height=this.width=this.top=this.left=0;this.imageElement=this.imageData=null}n(b,[{key:"createImage",value:function(){var a=this;return this.imageElement?Promise.resolve():new Promise(function(d,k){var h=URL.createObjectURL(a.imageData);a.imageElement=document.createElement("img");a.imageElement.onload=function(){URL.revokeObjectURL(h);d()};a.imageElement.onerror=function(){URL.revokeObjectURL(h);
a.imageElement=null;k(Error("Image creation error"))};a.imageElement.src=h})}}]);return b}()},function(f,e,g){function l(c,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);c.prototype=Object.create(b&&b.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(c,b):c.__proto__=b)}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function c(b,
a){for(var d=0;d<a.length;d++){var k=a[d];k.enumerable=k.enumerable||!1;k.configurable=!0;"value"in k&&(k.writable=!0);Object.defineProperty(b,k.key,k)}}return function(b,a,d){a&&c(b.prototype,a);d&&c(b,d);return b}}();f=g(4);f=function(c){function b(a,d,k){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var h=(b.__proto__||Object.getPrototypeOf(b)).call(this);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");h=!h||"object"!==
typeof h&&"function"!==typeof h?this:h;h.playbackRate=1;h._currentFrameNumber=0;h._ended=!1;h._paused=!0;h._numPlays=0;h._apng=a;h.context=d;h.stop();k&&h.play();return h}l(b,c);n(b,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length;this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,0!==this._apng.numPlays&&this._numPlays>=this._apng.numPlays&&(this._paused=this._ended=!0));this._prevFrame&&1==this._prevFrame.disposeOp?
this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var a=this.currentFrame;this._prevFrame=a;this._prevFrameData=null;2==a.disposeOp&&(this._prevFrameData=this.context.getImageData(a.left,a.top,a.width,a.height));0==a.blendOp&&this.context.clearRect(a.left,a.top,a.width,a.height);this.context.drawImage(a.imageElement,
a.left,a.top);this.emit("frame",this._currentFrameNumber);this._ended&&this.emit("end")}},{key:"play",value:function(){var a=this;this.emit("play");this._ended&&this.stop();this._paused=!1;var d=performance.now()+this.currentFrame.delay/this.playbackRate;requestAnimationFrame(function H(h){if(!a._ended&&!a._paused){if(h>=d){for(;h-d>=a._apng.playTime/a.playbackRate;)d+=a._apng.playTime/a.playbackRate,a._numPlays++;do a.renderNextFrame(),d+=a.currentFrame.delay/a.playbackRate;while(!a._ended&&h>d)}requestAnimationFrame(H)}})}},
{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop");this._numPlays=0;this._ended=!1;this._paused=!0;this._currentFrameNumber=-1;this.context.clearRect(0,0,this._apng.width,this._apng.height);this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},
{key:"ended",get:function(){return this._ended}}]);return b}((f&&f.__esModule?f:{default:f}).default);e.default=f},function(f,e){function g(){this._events=this._events||{};this._maxListeners=this._maxListeners||void 0}function l(c){return"function"===typeof c}function n(c){return"object"===typeof c&&null!==c}f.exports=g;g.EventEmitter=g;g.prototype._events=void 0;g.prototype._maxListeners=void 0;g.defaultMaxListeners=10;g.prototype.setMaxListeners=function(c){if("number"!==typeof c||0>c||isNaN(c))throw TypeError("n must be a positive number");
this._maxListeners=c;return this};g.prototype.emit=function(c){var b;this._events||(this._events={});if("error"===c&&(!this._events.error||n(this._events.error)&&!this._events.error.length)){var a=arguments[1];if(a instanceof Error)throw a;var d=Error('Uncaught, unspecified "error" event. ('+a+")");d.context=a;throw d;}d=this._events[c];if(void 0===d)return!1;if(l(d))switch(arguments.length){case 1:d.call(this);break;case 2:d.call(this,arguments[1]);break;case 3:d.call(this,arguments[1],arguments[2]);
break;default:a=Array.prototype.slice.call(arguments,1),d.apply(this,a)}else if(n(d)){a=Array.prototype.slice.call(arguments,1);var k=d.slice();d=k.length;for(b=0;b<d;b++)k[b].apply(this,a)}return!0};g.prototype.addListener=function(c,b){if(!l(b))throw TypeError("listener must be a function");this._events||(this._events={});this._events.newListener&&this.emit("newListener",c,l(b.listener)?b.listener:b);this._events[c]?n(this._events[c])?this._events[c].push(b):this._events[c]=[this._events[c],b]:
this._events[c]=b;n(this._events[c])&&!this._events[c].warned&&(b=void 0!==this._maxListeners?this._maxListeners:g.defaultMaxListeners)&&0<b&&this._events[c].length>b&&(this._events[c].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[c].length),"function"===typeof console.trace&&console.trace());return this};g.prototype.on=g.prototype.addListener;g.prototype.once=function(c,b){function a(){this.removeListener(c,
a);d||(d=!0,b.apply(this,arguments))}if(!l(b))throw TypeError("listener must be a function");var d=!1;a.listener=b;this.on(c,a);return this};g.prototype.removeListener=function(c,b){if(!l(b))throw TypeError("listener must be a function");if(!this._events||!this._events[c])return this;var a=this._events[c];var d=a.length;var k=-1;if(a===b||l(a.listener)&&a.listener===b)delete this._events[c],this._events.removeListener&&this.emit("removeListener",c,b);else if(n(a)){for(;0<d--;)if(a[d]===b||a[d].listener&&
a[d].listener===b){k=d;break}if(0>k)return this;1===a.length?(a.length=0,delete this._events[c]):a.splice(k,1);this._events.removeListener&&this.emit("removeListener",c,b)}return this};g.prototype.removeAllListeners=function(c){if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[c]&&delete this._events[c],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);this.removeAllListeners("removeListener");
this._events={};return this}var b=this._events[c];if(l(b))this.removeListener(c,b);else if(b)for(;b.length;)this.removeListener(c,b[b.length-1]);delete this._events[c];return this};g.prototype.listeners=function(c){return this._events&&this._events[c]?l(this._events[c])?[this._events[c]]:this._events[c].slice():[]};g.prototype.listenerCount=function(c){if(this._events){c=this._events[c];if(l(c))return 1;if(c)return c.length}return 0};g.listenerCount=function(c,b){return c.listenerCount(b)}}])})})(G,
G.exports);const P=I.getDefaultExportFromCjs(G.exports),M=[137,80,78,71,13,10,26,10];F.isAnimatedPNG=function(r){if(!J(r))return!1;const v=new DataView(r);r=new Uint8Array(r);let f=8,e;do{const g=v.getUint32(f);e=String.fromCharCode.apply(String,Array.prototype.slice.call(r.subarray(f+4,f+8)));if("acTL"===e)return!0;f+=12+g}while("IEND"!==e&&f<r.length);return!1};F.isPNG=J;F.parseApng=async function(r,v){r=P(r);if(r instanceof Error)throw r;await r.createImages();K.throwIfAborted(v);const {frames:f,
width:e,height:g}=r;v=document.createElement("canvas");v.width=e;v.height=g;v=v.getContext("2d",{willReadFrequently:!0});const l=[];r=[];let n=0;for(const a of f){var c=L.Milliseconds(a.delay||100);r.push(c);n+=c;var b=a.imageElement;v.globalCompositeOperation=0===a.blendOp?"copy":"source-over";c=2===a.disposeOp?v.getImageData(a.left,a.top,a.width,a.height):void 0;v.drawImage(b,a.left,a.top);b=v.getImageData(0,0,e,g);l.push(b);0!==a.disposeOp&&(1===a.disposeOp?v.clearRect(a.left,a.top,a.width,a.height):
2===a.disposeOp&&v.putImageData(c,a.left,a.top))}return{frameCount:f.length,duration:n,frameDurations:r,getFrame:a=>l[a],width:e,height:g}};Object.defineProperty(F,Symbol.toStringTag,{value:"Module"})});