// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./TileCoverage","./TileKey"],function(n,r,p){class t{constructor(a){this._tiles=new Map;this.buffer=0;this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;this.buffer=a.buffer}destroy(){}clear(){this._tiles.forEach(a=>this._releaseTile(a))}tileKeys(){const a=[];this._tiles.forEach((b,c)=>a.push(c));return a}update(a){a=this.tileInfoView.getTileCoverage(a.state,this.buffer,!0,"closest");const {spans:b,lodInfo:c}=a,{level:e}=c,d=[],g=[],k=
new Set,l=new Set;for(const {row:f,colFrom:u,colTo:v}of b)for(let h=u;h<=v;h++){const q=p.getId(e,f,c.normalizeCol(h),c.getWorldForColumn(h)),m=this._getOrAcquireTile(d,q);k.add(q);m.isReady?m.visible=!0:l.add(m.key)}l.forEach(f=>this._addPlaceholders(k,f));this._tiles.forEach(f=>{k.has(f.key.id)||(g.push(f.key.id),this._releaseTile(f))});r.pool.release(a);return{hasMissingTiles:0<l.size,added:d,removed:g}}_getOrAcquireTile(a,b){if(!this._tiles.has(b)){const c=this.acquireTile(new p(b));a.push(b);
this._tiles.set(b,c);c.visible=!1}return this._tiles.get(b)}_getTile(a){return this._tiles.get(a)}_releaseTile(a){this._tiles.delete(a.key.id);this.releaseTile(a)}_addPlaceholders(a,b){const c=this._addPlaceholderChildren(a,b);1E-6>Math.abs(1-c)||this._addPlaceholderParent(a,b)||(this._getTile(b.id).visible=!0)}_addPlaceholderChildren(a,b){let c=0;this._tiles.forEach(e=>{c+=this._addPlaceholderChild(a,e,b)});return c}_addPlaceholderChild(a,b,c){if(b.key.level<=c.level||!b.hasData||!c.contains(b.key))return 0;
b.visible=!0;a.add(b.key.id);return 1/(1<<2*(b.key.level-c.level))}_addPlaceholderParent(a,b){b=b.getParentKey();var c=0;let e=null;for(;null!=b;){if(a.has(b.id))return!0;const d=this._getTile(b.id);if(d?.isReady){for(const g of a)(c=this._getTile(g))&&b.contains(c.key)&&(c.visible=!1);d.visible=!0;a.add(d.key.id);return!0}d?.hasData&&d.patchCount>c&&(c=d.patchCount,e=d);b=b.getParentKey()}return e?(e.visible=!0,a.add(e.key.id),!0):!1}}n.TileManager=t;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});