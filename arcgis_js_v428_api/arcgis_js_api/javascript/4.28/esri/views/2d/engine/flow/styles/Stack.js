// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){class f{constructor(a){this._styles=a}get animated(){return this._styles.reduce((a,b)=>a||b.animated,!1)}isCompatible(a){if(!(a instanceof f)||this._styles.length!==a._styles.length)return!1;const b=this._styles.length;for(let c=0;c<b;c++)if(!this._styles[c].isCompatible(a._styles[c]))return!1;return!0}async load(a,b){const c=await Promise.all(this._styles.map(d=>d.load(a,b)));return new g(c)}render(a,b,c){for(let d=0;d<this._styles.length;d++)this._styles[d].render(a,
b,c.resources[d])}}class g{constructor(a){this.resources=a}attach(a){for(const b of this.resources)b.attach(a)}detach(){for(const a of this.resources)a.detach()}get ready(){return this.resources.reduce((a,b)=>a&&b.ready,!0)}}e.Stack=f;e.StackResources=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});