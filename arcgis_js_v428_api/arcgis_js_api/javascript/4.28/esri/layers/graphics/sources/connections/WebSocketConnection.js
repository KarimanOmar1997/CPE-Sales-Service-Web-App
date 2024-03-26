// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Error ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/zscale ../../../support/StreamConnection".split(" "),function(k,n,g,f,r,v,t,z,A,B,w,x,y){var l;(function(a){a[a.CONNECTING=0]=
"CONNECTING";a[a.OPEN=1]="OPEN";a[a.CLOSING=2]="CLOSING";a[a.CLOSED=3]="CLOSED"})(l||(l={}));k.WebSocketConnection=class extends y{constructor(a){super();this._outstandingMessages=[];this.errorString=null;const {geometryType:b,spatialReference:d,sourceSpatialReference:c}=a;this._config=a;this._featureZScaler=x.getGeometryZScaler(b,c,d);this._open()}async _open(){await this._tryCreateWebSocket();this.destroyed||await this._handshake()}destroy(){super.destroy();null!=this._websocket&&(this._websocket.onopen=
null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close());this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case l.CONNECTING:case l.OPEN:return"connected";case l.CLOSING:case l.CLOSED:return"disconnected"}}sendMessageToSocket(a){null==this._websocket?this._outstandingMessages.push(a):this._websocket.send(JSON.stringify(a))}sendMessageToClient(a){this._onMessage(a)}updateCustomParameters(a){this._config.customParameters=
a;null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(a=this._config.source.path,b=1E3,d=0){try{if(!this.destroyed){var c=v.addQueryParameters(a,this._config.customParameters??{});this._websocket=await this._createWebSocket(c);this.notifyChange("connectionStatus")}}catch(e){if(c=b/1E3,this._config.maxReconnectionAttempts&&d>=this._config.maxReconnectionAttempts)f.getLogger(this).error(new g("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),
this.destroy();else return f.getLogger(this).error(new g("websocket-connection",`Failed to connect. Attempting to reconnect in ${c}s`,e)),await r.after(b),this._tryCreateWebSocket(a,Math.min(1.5*b,1E3*this._config.maxReconnectionInterval),d+1)}}_setWebSocketJSONParseHandler(a){a.onmessage=b=>{try{const d=JSON.parse(b.data);this._onMessage(d)}catch(d){f.getLogger(this).error(new g("websocket-connection","Failed to parse message, invalid JSON",{error:d}))}}}_createWebSocket(a){return new Promise((b,
d)=>{const c=new WebSocket(a);c.onopen=()=>{c.onopen=null;this.destroyed?(c.onclose=null,c.close()):(c.onclose=e=>this._onClose(e),c.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(c),b(c))};c.onclose=e=>{c.onopen=c.onclose=null;d(e)}})}async _handshake(a=1E4){const b=this._websocket;if(null!=b){var d=r.createResolver(),c=b.onmessage,{filter:e,outFields:p,spatialReference:q}=this._config;d.timeout(a);b.onmessage=m=>{let h=null;try{h=JSON.parse(m.data)}catch(u){}h&&"object"===typeof h||
(f.getLogger(this).error(new g("websocket-connection","Protocol violation. Handshake failed - malformed message",m.data)),d.reject(),this.destroy());h.spatialReference?.wkid!==q?.wkid&&(f.getLogger(this).error(new g("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${q.wkid}`,m.data)),d.reject(),this.destroy());"json"!==h.format&&(f.getLogger(this).error(new g("websocket-connection","Protocol violation. Handshake failed - format is not set",m.data)),d.reject(),this.destroy());
e&&h.filter!==e&&f.getLogger(this).error(new g("websocket-connection","Tried to set filter, but server doesn't support it"));p&&h.outFields!==p&&f.getLogger(this).error(new g("websocket-connection","Tried to set outFields, but server doesn't support it"));b.onmessage=c;for(const u of this._outstandingMessages)b.send(JSON.stringify(u));this._outstandingMessages=[];d.resolve()};b.send(JSON.stringify({filter:e,outFields:p,format:"json",spatialReference:{wkid:q.wkid}}));return d.promise}}_onMessage(a){this.onMessage(a);
if("type"in a)switch(a.type){case "features":case "featureResult":for(const b of a.features)null!=this._featureZScaler&&this._featureZScaler(b.geometry),this.onFeature(b)}}_onError(a){this._set("errorString","Encountered an error over WebSocket connection");f.getLogger(this).error("websocket-connection","Encountered an error over WebSocket connection")}_onClose(a){this._websocket=null;this.notifyChange("connectionStatus");1E3!==a.code&&f.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${a.code}`);
this.destroyed||this._open()}};n.__decorate([t.property()],k.WebSocketConnection.prototype,"connectionStatus",null);n.__decorate([t.property()],k.WebSocketConnection.prototype,"errorString",void 0);k.WebSocketConnection=n.__decorate([w.subclass("esri.layers.graphics.sources.connections.WebSocketConnection")],k.WebSocketConnection);Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});