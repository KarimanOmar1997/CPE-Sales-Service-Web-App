// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../definitions","./Effect","../../../../webgl/enums"],function(m,t,u,n){class v extends u.Effect{constructor(){super(...arguments);this.name=this.constructor.name;this.defines=["id"];this._lastSize=0;this._boundFBO=null}dispose(){null!=this._fbo&&this._fbo.dispose()}bind({context:a,painter:d}){this._boundFBO=a.getBoundFramebufferObject();d=d.getFbos().effect0;a.bindFramebuffer(d);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)}unbind({context:a}){a.bindFramebuffer(this._boundFBO);
this._boundFBO=null}draw(a,d,f=2*t.hittestRadius){this._resolve(a,d,f)}async _resolve({context:a,state:d,pixelRatio:f},p,w){const x=a.getBoundFramebufferObject(),y=d.size[1]*f,b=Math.round(w*f),q=b/2,r=b/2;this._ensureBuffer(b);p.forEach(async(z,l)=>{var g=new Map;await x.readPixelsAsync(Math.floor(l.x*f-b/2),Math.floor(y-l.y*f-b/2),b,b,n.PixelFormat.RGBA,n.PixelType.UNSIGNED_BYTE,this._buf);for(let c=0;c<this._buf32.length;c++){const e=this._buf32[c];if(4294967295!==e&&0!==e){var h=c%b,k=b-Math.floor(c/
b);h=(q-h)*(q-h)+(r-k)*(r-k);k=g.has(e)?g.get(e):4294967295;g.set(e,Math.min(h,k))}}g=Array.from(g).sort((c,e)=>c[1]-e[1]).map(c=>c[0]);z.resolve(g);p.delete(l)})}_ensureBuffer(a){this._lastSize!==a&&(this._lastSize=a,this._buf=new Uint8Array(4*a*a),this._buf32=new Uint32Array(this._buf.buffer))}}m.HittestEffectVTL=v;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});