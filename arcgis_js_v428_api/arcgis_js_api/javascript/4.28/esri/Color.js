// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["./colorUtils","./core/mathUtils","./core/accessorSupport/ensureType"],function(l,m,n){function g(a){return m.clamp(n.ensureInteger(a),0,255)}function h(a,c,b){a=Number(a);return isNaN(a)?b:a<c?c:a>b?b:a}function k(a,c){a=a.toString(16).padStart(2,"0");return c?a.substring(0,1):a}class d{static blendColors(a,c,b,e=new d){e.r=Math.round(a.r+(c.r-a.r)*b);e.g=Math.round(a.g+(c.g-a.g)*b);e.b=Math.round(a.b+(c.b-a.b)*b);e.a=a.a+(c.a-a.a)*b;return e._sanitize()}static fromRgb(a,c){var b=a.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);
if(b){a=b[2].split(/\s*,\s*/);b=b[1];if("rgb"===b&&3===a.length||"rgba"===b&&4===a.length)return b=a[0],"%"===b.charAt(b.length-1)?(b=a.map(e=>2.56*parseFloat(e)),4===a.length&&(b[3]=parseFloat(a[3])),d.fromArray(b,c)):d.fromArray(a.map(e=>parseFloat(e)),c);if("hsl"===b&&3===a.length||"hsla"===b&&4===a.length)return d.fromArray(l.hsla2rgba(parseFloat(a[0]),parseFloat(a[1])/100,parseFloat(a[2])/100,parseFloat(a[3])),c)}return null}static fromHex(a,c=new d){if("#"!==a[0]||isNaN(Number(`0x${a.substring(1)}`)))return null;
switch(a.length){case 4:case 5:var b=parseInt(a.substring(1,2),16),e=parseInt(a.substring(2,3),16),f=parseInt(a.substring(3,4),16);a=5===a.length?15:parseInt(a.substring(4),16);return d.fromArray([b+16*b,e+16*e,f+16*f,(a+16*a)/255],c);case 7:case 9:return b=parseInt(a.substring(1,3),16),e=parseInt(a.substring(3,5),16),f=parseInt(a.substring(5,7),16),a=7===a.length?255:parseInt(a.substring(7),16),d.fromArray([b,e,f,a/255],c);default:return null}}static fromArray(a,c=new d){c._set(Number(a[0]),Number(a[1]),
Number(a[2]),Number(a[3]));isNaN(c.a)&&(c.a=1);return c._sanitize()}static fromString(a,c){const b=l.isNamedColor(a)?l.getNamedColor(a):null;return b&&d.fromArray(b,c)||d.fromRgb(a,c)||d.fromHex(a,c)}static fromJSON(a){return null!=a?new d([a[0],a[1],a[2],(a[3]??255)/255]):void 0}static toUnitRGB(a){return null!=a?[a.r/255,a.g/255,a.b/255]:null}static toUnitRGBA(a){return null!=a?[a.r/255,a.g/255,a.b/255,null!=a.a?a.a:1]:null}constructor(a){this.b=this.g=this.r=255;this.a=1;a&&this.setColor(a)}get isBright(){return 127<=
.299*this.r+.587*this.g+.114*this.b}setColor(a){"string"===typeof a?d.fromString(a,this):Array.isArray(a)?d.fromArray(a,this):(this._set(a.r??0,a.g??0,a.b??0,a.a??1),a instanceof d||this._sanitize());return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(a){const c=a?.capitalize??!1;var b=a?.digits??6;a=3===b||4===b;const e=4===b||8===b;b=k(this.r,a);const f=k(this.g,a),p=k(this.b,a);a=e?k(Math.round(255*this.a),a):"";a=`#${b}${f}${p}${a}`;return c?a.toUpperCase():
a}toCss(a=!1){const c=this.r+", "+this.g+", "+this.b;return a?`rgba(${c}, ${this.a})`:`rgb(${c})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(a=d.AlphaMode.ALWAYS){const c=g(this.r),b=g(this.g),e=g(this.b);return a===d.AlphaMode.ALWAYS||1!==this.a?[c,b,e,g(255*this.a)]:[c,b,e]}clone(){return new d(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(a){return null!=a&&a.r===this.r&&a.g===this.g&&a.b===this.b&&a.a===this.a}_sanitize(){this.r=Math.round(h(this.r,
0,255));this.g=Math.round(h(this.g,0,255));this.b=Math.round(h(this.b,0,255));this.a=h(this.a,0,1);return this}_set(a,c,b,e){this.r=a;this.g=c;this.b=b;this.a=e}}d.prototype.declaredClass="esri.Color";(function(a){a=a.AlphaMode||(a.AlphaMode={});a[a.ALWAYS=0]="ALWAYS";a[a.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"})(d||(d={}));return d});