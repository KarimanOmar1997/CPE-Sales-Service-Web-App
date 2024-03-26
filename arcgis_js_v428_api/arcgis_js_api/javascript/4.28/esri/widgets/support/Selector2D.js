// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./Selector2D/SelectionOperation2D ./Selector2D/selectorUtils".split(" "),function(c,a,h,e,n,p,q,k,l,m){a=class extends a{constructor(b){super(b);this._defaultSelectionOptions={intersects:!0,overlaps:!0,contains:!0};this.view=this.sources=this.options=this.cursor=
null}draw(b){const {operationOptions:d}=b,{view:f}=this;return new l({cursor:this.cursor,sources:b.sources??this.sources??[],options:{...d,selectionOptions:{...this._defaultSelectionOptions,...this.options,...d?.selectionOptions}},view:f})}async selectionFrom(b){const {view:d}=this,f=b.sources??this.sources??[];if(!f.length||!d)return[];const g=new h;await m.getSelectionFromGeometry({selector:b.geometry,currentSelection:g,sources:f,options:{...this._defaultSelectionOptions,...this.options,...b.selectionOptions},
view:d});return g.toArray()}};c.__decorate([e.property()],a.prototype,"cursor",void 0);c.__decorate([e.property()],a.prototype,"options",void 0);c.__decorate([e.property()],a.prototype,"sources",void 0);c.__decorate([e.property()],a.prototype,"view",void 0);return a=c.__decorate([k.subclass("esri.widgets.support.Selector2D")],a)});