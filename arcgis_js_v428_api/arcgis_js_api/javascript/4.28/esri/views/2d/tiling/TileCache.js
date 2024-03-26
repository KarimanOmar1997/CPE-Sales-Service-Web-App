// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["../../../chunks/vec2"],function(k){class q{constructor(a,c,d){this.maxSize=a;this._tileInfoView=c;this._removedFunc=d;this._tilePerId=new Map;this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear();this._tileKeysPerLevel=[]}has(a){return this._tilePerId.has(a)}get(a){return this._tilePerId.get(a)}pop(a){const c=this._tilePerId.get(a);if(c){var d=this._tileKeysPerLevel[c.key.level];this._tilePerId["delete"](a);for(let b=0;b<d.length;b++)if(d[b].id===a){d.splice(b,1);break}c.visible=!0;return c}}add(a){a.visible=
!1;const c=a.key,d=c.id;this._tilePerId.has(d)||(this._tilePerId.set(d,a),a=c.level,this._tileKeysPerLevel[a]||(this._tileKeysPerLevel[a]=[]),this._tileKeysPerLevel[a].push(c))}prune(a,c,d){let b=this._tilePerId.size;if(!(b<=this.maxSize)){for(var e=this._tileKeysPerLevel.length-1;b>this.maxSize&&0<=e;)e!==a&&(b=this._pruneAroundCenterTile(b,c,d,e)),e--;b>this.maxSize&&(b=this._pruneAroundCenterTile(b,c,d,a))}}_pruneAroundCenterTile(a,c,d,b){b=this._tileKeysPerLevel[b];if(!b||0===b.length)return a;
const {size:e,origin:f}=this._tileInfoView.tileInfo,l=d*e[0],m=d*e[1],g=[0,0],h=[0,0];for(b.sort((n,p)=>{g[0]=f.x+l*(n.col+.5);g[1]=f.y-m*(n.row+.5);h[0]=f.x+l*(p.col+.5);h[1]=f.y-m*(p.row+.5);return k.squaredDistance(g,c)-k.squaredDistance(h,c)});0<b.length&&(d=b.pop(),this._removeTile(d.id),a--,a!==this.maxSize););return a}_removeTile(a){const c=this._tilePerId.get(a);this._removedFunc&&c&&this._removedFunc(c);this._tilePerId["delete"](a)}}return q});