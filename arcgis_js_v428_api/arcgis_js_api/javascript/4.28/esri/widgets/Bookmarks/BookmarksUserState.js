// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,f,g,h,e){a=class extends a{constructor(c){super(c)}get editedBookmark(){const {bookmark:c}=this;return c?this._get("editedBookmark")||c.clone():null}get state(){return this._get("state")}set state(c){this.loading=this.validationState=void 0;this._set("state",
c)}};b.__decorate([d.property()],a.prototype,"bookmark",void 0);b.__decorate([d.property({readOnly:!0})],a.prototype,"editedBookmark",null);b.__decorate([d.property()],a.prototype,"state",null);b.__decorate([d.property()],a.prototype,"validationState",void 0);b.__decorate([d.property()],a.prototype,"loading",void 0);return a=b.__decorate([e.subclass("esri.widgets.Bookmarks.UserState")],a)});