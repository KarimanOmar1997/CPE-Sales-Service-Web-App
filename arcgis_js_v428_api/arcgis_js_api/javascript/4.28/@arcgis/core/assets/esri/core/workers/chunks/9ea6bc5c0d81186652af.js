(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3786],{73786:(t,e,n)=>{"use strict";n.r(e),n.d(e,{b:()=>l});var r,i,o,a=n(5777),u={exports:{}};r=u,i=(i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",o=function(t){var e,r,o=void 0!==(t=t||{})?t:{};o.ready=new Promise((function(t,n){e=t,r=n}));var u,s,l,c,f,p={};for(u in o)o.hasOwnProperty(u)&&(p[u]=o[u]);c="object"==typeof window,f="function"==typeof importScripts,s="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l=!c&&!s&&!f;var d,y,h,v,m="";s?(m=f?n(5017).dirname(m)+"/":"//",d=function(t,e){return h||(h=n(7002)),v||(v=n(5017)),t=v.normalize(t),h.readFileSync(t,e?null:"utf8")},y=function(t){var e=d(t,!0);return e.buffer||(e=new Uint8Array(e)),_(e.buffer),e},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof Pe))throw t})),process.on("unhandledRejection",et),o.inspect=function(){return"[Emscripten Module object]"}):l?("undefined"!=typeof read&&(d=function(t){return read(t)}),y=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(_("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(c||f)&&(f?m=self.location.href:document.currentScript&&(m=document.currentScript.src),i&&(m=i),m=0!==m.indexOf("blob:")?m.substr(0,m.lastIndexOf("/")+1):"",d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},f&&(y=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var g,b,$=o.print||console.log.bind(console),C=o.printErr||console.warn.bind(console);for(u in p)p.hasOwnProperty(u)&&(o[u]=p[u]);p=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(g=o.wasmBinary),o.noExitRuntime&&o.noExitRuntime,"object"!=typeof WebAssembly&&et("no native wasm support detected");var w=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),T=!1;function _(t,e){t||et("Assertion failed: "+e)}var P="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function A(t,e,n){for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.subarray&&P)return P.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function W(t,e){return t?A(k,t,e):""}var E,S,k,O,j,F,R,x,D,I="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function U(t,e){for(var n=t,r=n>>1,i=r+e/2;!(r>=i)&&j[r];)++r;if((n=r<<1)-t>32&&I)return I.decode(k.subarray(t,n));for(var o=0,a="";;){var u=O[t+2*o>>1];if(0==u||o==e/2)return a;++o,a+=String.fromCharCode(u)}}function M(t,e,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var r=e,i=(n-=2)<2*t.length?n/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);O[e>>1]=a,e+=2}return O[e>>1]=0,e-r}function V(t){return 2*t.length}function H(t,e){for(var n=0,r="";!(n>=e/4);){var i=F[t+4*n>>2];if(0==i)break;if(++n,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function z(t,e,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var r=e,i=r+n-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),F[e>>2]=a,(e+=4)+4>i)break}return F[e>>2]=0,e-r}function B(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&++n,e+=4}return e}function N(t){E=t,o.HEAP8=S=new Int8Array(t),o.HEAP16=O=new Int16Array(t),o.HEAP32=F=new Int32Array(t),o.HEAPU8=k=new Uint8Array(t),o.HEAPU16=j=new Uint16Array(t),o.HEAPU32=R=new Uint32Array(t),o.HEAPF32=x=new Float32Array(t),o.HEAPF64=D=new Float64Array(t)}var G=o.INITIAL_MEMORY||16777216;function L(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var n=e.func;"number"==typeof n?void 0===e.arg?o.dynCall_v(n):o.dynCall_vi(n,e.arg):n(void 0===e.arg?null:e.arg)}else e(o)}}(b=o.wasmMemory?o.wasmMemory:new WebAssembly.Memory({initial:G/65536,maximum:32768}))&&(E=b.buffer),G=E.byteLength,N(E),F[80624]=5565536;var q=[],X=[],J=[],Y=[],Z=Math.ceil,K=Math.floor,Q=0,tt=null;function et(t){o.onAbort&&o.onAbort(t),C(t+=""),T=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw r(e),e}function nt(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}function rt(t){return nt(t,"data:application/octet-stream;base64,")}function it(t){return nt(t,"file://")}o.preloadedImages={},o.preloadedAudios={};var ot,at="basis_transcoder.wasm";function ut(){try{if(g)return new Uint8Array(g);if(y)return y(at);throw"both async and sync fetching of the wasm failed"}catch(t){et(t)}}rt(at)||(ot=at,at=o.locateFile?o.locateFile(ot,m):m+ot),X.push({func:function(){Ce()}});var st={};function lt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function ct(t){return this.fromWireType(R[t>>2])}var ft={},pt={},dt={},yt=48,ht=57;function vt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=yt&&e<=ht?"_"+t:t}function mt(t,e){return t=vt(t),function(){return e.apply(this,arguments)}}function gt(t,e){var n=mt(e,(function(t){this.name=e,this.message=t;var n=new Error(t).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))}));return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var bt=void 0;function $t(t){throw new bt(t)}function Ct(t,e,n){function r(e){var r=n(e);r.length!==t.length&&$t("Mismatched type converter count");for(var i=0;i<t.length;++i)Wt(t[i],r[i])}t.forEach((function(t){dt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){pt.hasOwnProperty(t)?i[e]=pt[t]:(o.push(t),ft.hasOwnProperty(t)||(ft[t]=[]),ft[t].push((function(){i[e]=pt[t],++a===o.length&&r(i)})))})),0===o.length&&r(i)}function wt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var Tt=void 0;function _t(t){for(var e="",n=t;k[n];)e+=Tt[k[n++]];return e}var Pt=void 0;function At(t){throw new Pt(t)}function Wt(t,e,n){if(n=n||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(t||At('type "'+r+'" must have a positive integer typeid pointer'),pt.hasOwnProperty(t)){if(n.ignoreDuplicateRegistrations)return;At("Cannot register type '"+r+"' twice")}if(pt[t]=e,delete dt[t],ft.hasOwnProperty(t)){var i=ft[t];delete ft[t],i.forEach((function(t){t()}))}}function Et(t){At(t.$$.ptrType.registeredClass.name+" instance already deleted")}var St=!1;function kt(t){}function Ot(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function jt(t){return"undefined"==typeof FinalizationGroup?(jt=function(t){return t},t):(St=new FinalizationGroup((function(t){for(var e=t.next();!e.done;e=t.next()){var n=e.value;n.ptr?Ot(n):console.warn("object already deleted: "+n.ptr)}})),jt=function(t){return St.register(t,t.$$,t.$$),t},kt=function(t){St.unregister(t.$$)},jt(t))}var Ft=void 0,Rt=[];function xt(){for(;Rt.length;){var t=Rt.pop();t.$$.deleteScheduled=!1,t.delete()}}function Dt(){}var It={};function Ut(t,e,n){if(void 0===t[e].overloadTable){var r=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||At("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[r.argCount]=r}}function Mt(t,e,n){o.hasOwnProperty(t)?((void 0===n||void 0!==o[t].overloadTable&&void 0!==o[t].overloadTable[n])&&At("Cannot register public name '"+t+"' twice"),Ut(o,t,t),o.hasOwnProperty(n)&&At("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),o[t].overloadTable[n]=e):(o[t]=e,void 0!==n&&(o[t].numArguments=n))}function Vt(t,e,n,r,i,o,a,u){this.name=t,this.constructor=e,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Ht(t,e,n){for(;e!==n;)e.upcast||At("Expected null or instance of "+n.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function zt(t,e){if(null===e)return this.isReference&&At("null is not a valid "+this.name),0;e.$$||At('Cannot pass "'+se(e)+'" as a '+this.name),e.$$.ptr||At("Cannot pass deleted object as a pointer of type "+this.name);var n=e.$$.ptrType.registeredClass;return Ht(e.$$.ptr,n,this.registeredClass)}function Bt(t,e){var n;if(null===e)return this.isReference&&At("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,n),n):0;e.$$||At('Cannot pass "'+se(e)+'" as a '+this.name),e.$$.ptr||At("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&At("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;if(n=Ht(e.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&At("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?n=e.$$.smartPtr:At("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:n=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)n=e.$$.smartPtr;else{var i=e.clone();n=this.rawShare(n,oe((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,n)}break;default:At("Unsupporting sharing policy")}return n}function Nt(t,e){if(null===e)return this.isReference&&At("null is not a valid "+this.name),0;e.$$||At('Cannot pass "'+se(e)+'" as a '+this.name),e.$$.ptr||At("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&At("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;return Ht(e.$$.ptr,n,this.registeredClass)}function Gt(t,e,n){if(e===n)return t;if(void 0===n.baseClass)return null;var r=Gt(t,e,n.baseClass);return null===r?null:n.downcast(r)}var Lt={};function qt(t,e){return e.ptrType&&e.ptr||$t("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&$t("Both smartPtrType and smartPtr must be specified"),e.count={value:1},jt(Object.create(t,{$$:{value:e}}))}function Xt(t,e,n,r,i,o,a,u,s,l,c){this.name=t,this.registeredClass=e,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==e.baseClass?this.toWireType=Bt:r?(this.toWireType=zt,this.destructorFunction=null):(this.toWireType=Nt,this.destructorFunction=null)}function Jt(t,e,n){o.hasOwnProperty(t)||$t("Replacing nonexistant public symbol"),void 0!==o[t].overloadTable&&void 0!==n?o[t].overloadTable[n]=e:(o[t]=e,o[t].argCount=n)}function Yt(t,e){t=_t(t);var n,r,i=o["dynCall_"+t],a=(n=i,r=[e],function(){r.length=arguments.length+1;for(var t=0;t<arguments.length;t++)r[t+1]=arguments[t];return n.apply(null,r)});return"function"!=typeof a&&At("unknown function pointer with signature "+t+": "+e),a}var Zt=void 0;function Kt(t){var e=_e(t),n=_t(e);return Te(e),n}function Qt(t,e){var n=[],r={};throw e.forEach((function t(e){r[e]||pt[e]||(dt[e]?dt[e].forEach(t):(n.push(e),r[e]=!0))})),new Zt(t+": "+n.map(Kt).join([", "]))}function te(t,e){for(var n=[],r=0;r<t;r++)n.push(F[(e>>2)+r]);return n}function ee(t,e,n,r,i){var o=e.length;o<2&&At("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==n,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var l="void"!==e[0].name,c=o-2,f=new Array(c),p=[],d=[];return function(){var n;arguments.length!==c&&At("function "+t+" called with "+arguments.length+" arguments, expected "+c+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(n=e[1].toWireType(d,this),p[1]=n);for(var o=0;o<c;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=r.apply(null,p);if(u)lt(d);else for(o=a?1:2;o<e.length;o++){var y=1===o?n:f[o-2];null!==e[o].destructorFunction&&e[o].destructorFunction(y)}if(l)return e[0].fromWireType(s)}}var ne=[],re=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function ie(t){t>4&&0==--re[t].refcount&&(re[t]=void 0,ne.push(t))}function oe(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=ne.length?ne.pop():re.length;return re[e]={refcount:1,value:t},e}}function ae(t,e,n){switch(e){case 0:return function(t){var e=n?S:k;return this.fromWireType(e[t])};case 1:return function(t){var e=n?O:j;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=n?F:R;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function ue(t,e){var n=pt[t];return void 0===n&&At(e+" has unknown type "+Kt(t)),n}function se(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function le(t,e){switch(e){case 2:return function(t){return this.fromWireType(x[t>>2])};case 3:return function(t){return this.fromWireType(D[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function ce(t,e,n){switch(e){case 0:return n?function(t){return S[t]}:function(t){return k[t]};case 1:return n?function(t){return O[t>>1]}:function(t){return j[t>>1]};case 2:return n?function(t){return F[t>>2]}:function(t){return R[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function fe(t){return t||At("Cannot use deleted val. handle = "+t),re[t].value}var pe={};function de(t){var e=pe[t];return void 0===e?_t(t):e}var ye=[];function he(){if("object"==typeof globalThis)return globalThis;function t(t){t.$$$embind_global$$$=t;var e="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return e||delete t.$$$embind_global$$$,e}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof a.c&&t(a.c)?$$$embind_global$$$=a.c:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var ve={};function me(t){try{return b.grow(t-E.byteLength+65535>>>16),N(b.buffer),1}catch(t){}}var ge={mappings:{},buffers:[null,[],[]],printChar:function(t,e){var n=ge.buffers[t];0===e||10===e?((1===t?$:C)(A(n,0)),n.length=0):n.push(e)},varargs:void 0,get:function(){return ge.varargs+=4,F[ge.varargs-4>>2]},getStr:function(t){return W(t)},get64:function(t,e){return t}};bt=o.InternalError=gt(Error,"InternalError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Tt=t}(),Pt=o.BindingError=gt(Error,"BindingError"),Dt.prototype.isAliasOf=function(t){if(!(this instanceof Dt))return!1;if(!(t instanceof Dt))return!1;for(var e=this.$$.ptrType.registeredClass,n=this.$$.ptr,r=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)n=e.upcast(n),e=e.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return e===r&&n===i},Dt.prototype.clone=function(){if(this.$$.ptr||Et(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=jt(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},Dt.prototype.delete=function(){this.$$.ptr||Et(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&At("Object already scheduled for deletion"),kt(this),Ot(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},Dt.prototype.isDeleted=function(){return!this.$$.ptr},Dt.prototype.deleteLater=function(){return this.$$.ptr||Et(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&At("Object already scheduled for deletion"),Rt.push(this),1===Rt.length&&Ft&&Ft(xt),this.$$.deleteScheduled=!0,this},Xt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Xt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Xt.prototype.argPackAdvance=8,Xt.prototype.readValueFromPointer=ct,Xt.prototype.deleteObject=function(t){null!==t&&t.delete()},Xt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var n=function(t,e){return e=function(t,e){for(void 0===e&&At("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),Lt[e]}(this.registeredClass,e);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=e,n.$$.smartPtr=t,n.clone();var r=n.clone();return this.destructor(t),r}function i(){return this.isSmartPointer?qt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):qt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),u=It[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=Gt(e,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?qt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):qt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})},o.getInheritedInstanceCount=function(){return Object.keys(Lt).length},o.getLiveInheritedInstances=function(){var t=[];for(var e in Lt)Lt.hasOwnProperty(e)&&t.push(Lt[e]);return t},o.flushPendingDeletes=xt,o.setDelayFunction=function(t){Ft=t,Rt.length&&Ft&&Ft(xt)},Zt=o.UnboundTypeError=gt(Error,"UnboundTypeError"),o.count_emval_handles=function(){for(var t=0,e=5;e<re.length;++e)void 0!==re[e]&&++t;return t},o.get_first_emval=function(){for(var t=5;t<re.length;++t)if(void 0!==re[t])return re[t];return null};var be={u:function(t){var e=st[t];delete st[t];var n=e.rawConstructor,r=e.rawDestructor,i=e.fields;Ct([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(e,n){var r=e.fieldName,a=t[n],u=e.getter,s=e.getterContext,l=t[n+i.length],c=e.setter,f=e.setterContext;o[r]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,e){var n=[];c(f,t,l.toWireType(n,e)),lt(n)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var n in o)e[n]=o[n].read(t);return r(t),e},toWireType:function(t,e){for(var i in o)if(!(i in e))throw new TypeError('Missing field:  "'+i+'"');var a=n();for(i in o)o[i].write(a,e[i]);return null!==t&&t.push(r,a),a},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:r}]}))},J:function(t,e,n,r,i){var o=wt(n);Wt(t,{name:e=_t(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===n)r=S;else if(2===n)r=O;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+e);r=F}return this.fromWireType(r[t>>o])},destructorFunction:null})},y:function(t,e,n,r,i,o,a,u,s,l,c,f,p){c=_t(c),o=Yt(i,o),u&&(u=Yt(a,u)),l&&(l=Yt(s,l)),p=Yt(f,p);var d=vt(c);Mt(d,(function(){Qt("Cannot construct "+c+" due to unbound types",[r])})),Ct([t,e,n],r?[r]:[],(function(e){var n,i;e=e[0],i=r?(n=e.registeredClass).instancePrototype:Dt.prototype;var a=mt(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new Pt("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new Pt(c+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new Pt("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Vt(c,a,s,p,n,o,u,l),y=new Xt(c,f,!0,!1,!1),h=new Xt(c+"*",f,!1,!1,!1),v=new Xt(c+" const*",f,!1,!0,!1);return It[t]={pointerType:h,constPointerType:v},Jt(d,a),[y,h,v]}))},x:function(t,e,n,r,i,o){_(e>0);var a=te(e,n);i=Yt(r,i);var u=[o],s=[];Ct([],[t],(function(t){var n="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new Pt("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){Qt("Cannot construct "+t.name+" due to unbound types",a)},Ct([],a,(function(r){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&At(n+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var t=1;t<e;++t)u[t]=r[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return lt(s),r[0].fromWireType(o)},[]})),[]}))},d:function(t,e,n,r,i,o,a,u){var s=te(n,r);e=_t(e),o=Yt(i,o),Ct([],[t],(function(t){var r=(t=t[0]).name+"."+e;function i(){Qt("Cannot call "+r+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var l=t.registeredClass.instancePrototype,c=l[e];return void 0===c||void 0===c.overloadTable&&c.className!==t.name&&c.argCount===n-2?(i.argCount=n-2,i.className=t.name,l[e]=i):(Ut(l,e,r),l[e].overloadTable[n-2]=i),Ct([],s,(function(i){var u=ee(r,i,t,o,a);return void 0===l[e].overloadTable?(u.argCount=n-2,l[e]=u):l[e].overloadTable[n-2]=u,[]})),[]}))},k:function(t,e,n){t=_t(t),Ct([],[e],(function(e){return e=e[0],o[t]=e.fromWireType(n),[]}))},I:function(t,e){Wt(t,{name:e=_t(e),fromWireType:function(t){var e=re[t].value;return ie(t),e},toWireType:function(t,e){return oe(e)},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:null})},n:function(t,e,n,r){var i=wt(n);function o(){}e=_t(e),o.values={},Wt(t,{name:e,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:ae(e,i,r),destructorFunction:null}),Mt(e,o)},a:function(t,e,n){var r=ue(t,"enum");e=_t(e);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:mt(r.name+"_"+e,(function(){}))}});i.values[n]=o,i[e]=o},B:function(t,e,n){var r=wt(n);Wt(t,{name:e=_t(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+se(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:le(e,r),destructorFunction:null})},i:function(t,e,n,r,i,o){var a=te(e,n);t=_t(t),i=Yt(r,i),Mt(t,(function(){Qt("Cannot call "+t+" due to unbound types",a)}),e-1),Ct([],a,(function(n){var r=[n[0],null].concat(n.slice(1));return Jt(t,ee(t,r,null,i,o),e-1),[]}))},j:function(t,e,n,r,i){e=_t(e),-1===i&&(i=4294967295);var o=wt(n),a=function(t){return t};if(0===r){var u=32-8*n;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");Wt(t,{name:e,fromWireType:a,toWireType:function(t,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+se(n)+'" to '+this.name);if(n<r||n>i)throw new TypeError('Passing a number "'+se(n)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+r+", "+i+"]!");return s?n>>>0:0|n},argPackAdvance:8,readValueFromPointer:ce(e,o,0!==r),destructorFunction:null})},h:function(t,e,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=R,n=e[t>>=2],i=e[t+1];return new r(E,i,n)}Wt(t,{name:n=_t(n),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(t,e){var n="std::string"===(e=_t(e));Wt(t,{name:e,fromWireType:function(t){var e,r=R[t>>2];if(n)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==k[a]){var u=W(i,a-i);void 0===e?e=u:(e+=String.fromCharCode(0),e+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(k[t+4+o]);e=s.join("")}return Te(t),e},toWireType:function(t,e){var r;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var i="string"==typeof e;i||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||At("Cannot pass non-string to std::string"),r=n&&i?function(){return function(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++n)),r<=127?++e:e+=r<=2047?2:r<=65535?3:4}return e}(e)}:function(){return e.length};var o=r(),a=we(4+o+1);if(R[a>>2]=o,n&&i)!function(t,e,n,r){if(!(r>0))return 0;for(var i=n+r-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(n>=i)break;e[n++]=a}else if(a<=2047){if(n+1>=i)break;e[n++]=192|a>>6,e[n++]=128|63&a}else if(a<=65535){if(n+2>=i)break;e[n++]=224|a>>12,e[n++]=128|a>>6&63,e[n++]=128|63&a}else{if(n+3>=i)break;e[n++]=240|a>>18,e[n++]=128|a>>12&63,e[n++]=128|a>>6&63,e[n++]=128|63&a}}e[n]=0}(e,k,a+4,o+1);else if(i)for(var u=0;u<o;++u){var s=e.charCodeAt(u);s>255&&(Te(a),At("String has UTF-16 code units that do not fit in 8 bits")),k[a+4+u]=s}else for(u=0;u<o;++u)k[a+4+u]=e[u];return null!==t&&t.push(Te,a),a},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:function(t){Te(t)}})},w:function(t,e,n){var r,i,o,a,u;n=_t(n),2===e?(r=U,i=M,a=V,o=function(){return j},u=1):4===e&&(r=H,i=z,a=B,o=function(){return R},u=2),Wt(t,{name:n,fromWireType:function(t){for(var n,i=R[t>>2],a=o(),s=t+4,l=0;l<=i;++l){var c=t+4+l*e;if(l==i||0==a[c>>u]){var f=r(s,c-s);void 0===n?n=f:(n+=String.fromCharCode(0),n+=f),s=c+e}}return Te(t),n},toWireType:function(t,r){"string"!=typeof r&&At("Cannot pass non-string to C++ string type "+n);var o=a(r),s=we(4+o+e);return R[s>>2]=o>>u,i(r,s+4,o+e),null!==t&&t.push(Te,s),s},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:function(t){Te(t)}})},v:function(t,e,n,r,i,o){st[t]={name:_t(e),rawConstructor:Yt(n,r),rawDestructor:Yt(i,o),fields:[]}},c:function(t,e,n,r,i,o,a,u,s,l){st[t].fields.push({fieldName:_t(e),getterReturnType:n,getter:Yt(r,i),getterContext:o,setterArgumentType:a,setter:Yt(u,s),setterContext:l})},K:function(t,e){Wt(t,{isVoid:!0,name:e=_t(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},m:function(t,e,n){t=fe(t),e=ue(e,"emval::as");var r=[],i=oe(r);return F[n>>2]=i,e.toWireType(r,t)},s:function(t,e,n,r){(t=ye[t])(e=fe(e),n=de(n),null,r)},b:ie,z:function(t){return 0===t?oe(he()):(t=de(t),oe(he()[t]))},t:function(t,e){var n,r,i=function(t,e){for(var n=new Array(t),r=0;r<t;++r)n[r]=ue(F[(e>>2)+r],"parameter "+r);return n}(t,e),o=i[0],a=new Array(t-1);return n=function(e,n,r,u){for(var s=0,l=0;l<t-1;++l)a[l]=i[l+1].readValueFromPointer(u+s),s+=i[l+1].argPackAdvance;var c=e[n].apply(e,a);for(l=0;l<t-1;++l)i[l+1].deleteObject&&i[l+1].deleteObject(a[l]);if(!o.isVoid)return o.toWireType(r,c)},r=ye.length,ye.push(n),r},r:function(t){return t=de(t),oe(o[t])},e:function(t,e){return oe((t=fe(t))[e=fe(e)])},g:function(t){t>4&&(re[t].refcount+=1)},q:function(t,e,n,r){t=fe(t);var i=ve[e];return i||(i=function(t){var e=new Array(t+1);return function(n,r,i){e[0]=n;for(var o=0;o<t;++o){var a=ue(F[(r>>2)+o],"parameter "+o);e[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return oe(new(n.bind.apply(n,e)))}}(e),ve[e]=i),i(t,n,r)},f:function(t){return oe(de(t))},l:function(t){lt(re[t].value),ie(t)},p:function(){et()},F:function(t,e,n){k.copyWithin(t,e,e+n)},G:function(t){t>>>=0;var e=k.length,n=2147483648;if(t>n)return!1;for(var r,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),me(Math.min(n,((r=Math.max(16777216,t,o))%65536>0&&(r+=65536-r%65536),r))))return!0}return!1},H:function(t){return 0},D:function(t,e,n,r,i){},A:function(t,e,n,r){for(var i=0,o=0;o<n;o++){for(var a=F[e+8*o>>2],u=F[e+(8*o+4)>>2],s=0;s<u;s++)ge.printChar(t,k[a+s]);i+=u}return F[r>>2]=i,0},memory:b,o:function(t){return(t=+t)>=0?+K(t+.5):+Z(t-.5)},E:function(t){},table:w};!function(){var t={a:be};function e(t,e){var n=t.exports;o.asm=n,function(t){if(Q--,o.monitorRunDependencies&&o.monitorRunDependencies(Q),0==Q&&tt){var e=tt;tt=null,e()}}()}function n(t){e(t.instance)}function r(e){return(g||!c&&!f||"function"!=typeof fetch||it(at)?new Promise((function(t,e){t(ut())})):fetch(at,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+at+"'";return t.arrayBuffer()})).catch((function(){return ut()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){C("failed to asynchronously prepare wasm: "+t),et(t)}))}if(Q++,o.monitorRunDependencies&&o.monitorRunDependencies(Q),o.instantiateWasm)try{return o.instantiateWasm(t,e)}catch(t){return C("Module.instantiateWasm callback failed with error: "+t),!1}!function(){if(g||"function"!=typeof WebAssembly.instantiateStreaming||rt(at)||it(at)||"function"!=typeof fetch)return r(n);fetch(at,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(n,(function(t){return C("wasm streaming compile failed: "+t),C("falling back to ArrayBuffer instantiation"),r(n)}))}))}()}();var $e,Ce=o.___wasm_call_ctors=function(){return(Ce=o.___wasm_call_ctors=o.asm.L).apply(null,arguments)},we=o._malloc=function(){return(we=o._malloc=o.asm.M).apply(null,arguments)},Te=o._free=function(){return(Te=o._free=o.asm.N).apply(null,arguments)},_e=o.___getTypeName=function(){return(_e=o.___getTypeName=o.asm.O).apply(null,arguments)};function Pe(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Ae(t){function n(){$e||($e=!0,o.calledRun=!0,T||(L(X),L(J),e(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),Y.unshift(t);var t;L(Y)}()))}Q>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),q.unshift(t);var t;L(q)}(),Q>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),n()}),1)):n()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.P).apply(null,arguments)},o.dynCall_viii=function(){return(o.dynCall_viii=o.asm.Q).apply(null,arguments)},o.dynCall_vi=function(){return(o.dynCall_vi=o.asm.R).apply(null,arguments)},o.dynCall_v=function(){return(o.dynCall_v=o.asm.S).apply(null,arguments)},o.dynCall_i=function(){return(o.dynCall_i=o.asm.T).apply(null,arguments)},o.dynCall_iii=function(){return(o.dynCall_iii=o.asm.U).apply(null,arguments)},o.dynCall_ii=function(){return(o.dynCall_ii=o.asm.V).apply(null,arguments)},o.dynCall_vii=function(){return(o.dynCall_vii=o.asm.W).apply(null,arguments)},o.dynCall_iiii=function(){return(o.dynCall_iiii=o.asm.X).apply(null,arguments)},o.dynCall_iiiii=function(){return(o.dynCall_iiiii=o.asm.Y).apply(null,arguments)},o.dynCall_iiiiii=function(){return(o.dynCall_iiiiii=o.asm.Z).apply(null,arguments)},o.dynCall_iiiiiiii=function(){return(o.dynCall_iiiiiiii=o.asm._).apply(null,arguments)},o.dynCall_iiiiiiiii=function(){return(o.dynCall_iiiiiiiii=o.asm.$).apply(null,arguments)},o.dynCall_viiii=function(){return(o.dynCall_viiii=o.asm.aa).apply(null,arguments)},o.dynCall_iiiiiii=function(){return(o.dynCall_iiiiiii=o.asm.ba).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiiii=o.asm.ca).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiiiii=o.asm.da).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiii=o.asm.ea).apply(null,arguments)},o.dynCall_viiiii=function(){return(o.dynCall_viiiii=o.asm.fa).apply(null,arguments)},o.dynCall_iiiiiiiiii=function(){return(o.dynCall_iiiiiiiiii=o.asm.ga).apply(null,arguments)},o.dynCall_iiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiii=o.asm.ha).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.ia).apply(null,arguments)},o.dynCall_viiiiii=function(){return(o.dynCall_viiiiii=o.asm.ja).apply(null,arguments)},tt=function t(){$e||Ae(),$e||(tt=t)},o.run=Ae,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Ae(),t.ready},r.exports=o;var s=u.exports;const l=function(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,a.g)(s)},[s])},7002:()=>{},5017:()=>{}}]);