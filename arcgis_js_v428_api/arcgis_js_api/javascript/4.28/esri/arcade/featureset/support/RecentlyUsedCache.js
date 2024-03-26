// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(function(){class f{constructor(a){const b=this;b._keys=[];b._values=[];b.length=0;a&&a.forEach(c=>{b.set(c[0],c[1])})}entries(){return[].slice.call(this.keys().map((a,b)=>[a,this._values[b]]))}keys(){return[].slice.call(this._keys)}values(){return[].slice.call(this._values)}has(a){return this._keys.includes(a)}get(a){a=this._keys.indexOf(a);return-1<a?this._values[a]:null}deepGet(a){if(!a?.length)return null;const b=(c,d)=>null==c?null:d.length?b(c instanceof f?c.get(d[0]):c[d[0]],d.slice(1)):
c;return b(this.get(a[0]),a.slice(1))}set(a,b){const c=this._keys.indexOf(a);-1<c?this._values[c]=b:(this._keys.push(a),this._values.push(b),this.length=this._values.length);return this}sortedSet(a,b,c,d){var e=this._keys.length;c=c||0;d=void 0!==d?d:e-1;if(0===e)return this._keys.push(a),this._values.push(b),this;if(a===this._keys[c])return this._values.splice(c,0,b),this;if(a===this._keys[d])return this._values.splice(d,0,b),this;if(a>this._keys[d])return this._keys.splice(d+1,0,a),this._values.splice(d+
1,0,b),this;if(a<this._keys[c])return this._values.splice(c,0,b),this._keys.splice(c,0,a),this;if(c>=d)return this;e=c+Math.floor((d-c)/2);return a<this._keys[e]?this.sortedSet(a,b,c,e-1):a>this._keys[e]?this.sortedSet(a,b,e+1,d):this}size(){return this.length}clear(){this._keys.length=this.length=this._values.length=0;return this}delete(a){a=this._keys.indexOf(a);return-1<a?(this._keys.splice(a,1),this._values.splice(a,1),this.length=this._keys.length,!0):!1}forEach(a){this._keys.forEach((b,c)=>
{a(this._values[c],b,c)})}map(a){return this.keys().map((b,c)=>a(this._values[c],b,c))}filter(a){const b=this;b._keys.forEach((c,d)=>{!1===a(b._values[d],c,d)&&b.delete(c)});return this}clone(){return new f(this.entries())}}class g{constructor(a=20){this._maxEntries=a;this._values=new f}delete(a){this._values.has(a)&&this._values.delete(a)}get(a){let b=null;this._values.has(a)&&(b=this._values.get(a),this._values.delete(a),this._values.set(a,b));return b}put(a,b){if(this._values.size()>=this._maxEntries){const c=
this._values.keys()[0];this._values.delete(c)}this._values.set(a,b)}}class h{constructor(a=20){this._maxEntries=a;this._cache=new g(this._maxEntries)}clear(){this._cache=new g(this._maxEntries)}addToCache(a,b){this._cache.put(a,b)}removeFromCache(a){this._cache.delete(a)}getFromCache(a){return this._cache.get(a)}}return h});