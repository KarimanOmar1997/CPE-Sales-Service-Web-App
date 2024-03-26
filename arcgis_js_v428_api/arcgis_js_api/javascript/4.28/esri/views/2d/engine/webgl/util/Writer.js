// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(function(){class d{get length(){return this._pos}constructor(a,b){this._pos=0;b=b?this._roundToNearest(b,a.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(b);this._buffer=new a(this._array);this._ctor=a;this._i16View=new Int16Array(this._array)}_roundToNearest(a,b){a=Math.round(a);return 1===b?a:a+(b-a%b)}_ensureSize(a){if(this._pos+a>=this._buffer.length){a=this._roundToNearest(1.25*(this._array.byteLength+a*this._buffer.BYTES_PER_ELEMENT),this._buffer.BYTES_PER_ELEMENT);a=new ArrayBuffer(a);
const b=new this._ctor(a);b.set(this._buffer,0);this._array=a;this._buffer=b;this._i16View=new Int16Array(this._array)}}ensureSize(a){this._ensureSize(a)}writeF32(a){this._ensureSize(1);const b=this._pos;(new Float32Array(this._array,4*this._pos,1))[0]=a;this._pos++;return b}push(a){this._ensureSize(1);const b=this._pos;this._buffer[this._pos++]=a;return b}writeFixed(a){this._buffer[this._pos++]=a}setValue(a,b){this._buffer[a]=b}i1616Add(a,b,c){this._i16View[2*a]+=b;this._i16View[2*a+1]+=c}getValue(a){return this._buffer[a]}incr(a){if(this._buffer.length<
a)throw Error("Increment index overflows the target buffer");this._buffer[a]++}decr(a){this._buffer[a]--}writeRegion(a){this._ensureSize(a.length);const b=this._pos;this._buffer.set(a,this._pos);this._pos+=a.length;return b}writeManyFrom(a,b,c){for(this._ensureSize(c-b);b!==c;b++)this.writeFixed(a._buffer[b])}buffer(){const a=this._array.slice(0,4*this._pos);this.destroy();return a}toArray(){return[...this._buffer]}seek(a){this._pos=a}destroy(){this._buffer=this._array=null}}return d});