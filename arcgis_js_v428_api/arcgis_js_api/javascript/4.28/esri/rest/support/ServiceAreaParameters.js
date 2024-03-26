// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/Collection ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./commonProperties ./networkEnums ./TravelMode ../../geometry/SpatialReference".split(" "),
function(b,a,q,r,t,d,u,z,A,h,n,v,k,w,g,x,y){function m(c,e,f){null!=c&&(e[f]=r.isCollection(c)?{features:c.toArray().map(l=>l.toJSON())}:c.toJSON())}var p;a=p=class extends q.ClonableMixin(t.JSONSupport){constructor(c){super(c);this.impedanceAttribute=this.ignoreInvalidLocations=this.geometryPrecisionZ=this.geometryPrecisionM=this.geometryPrecision=this.facilities=this.excludeSourcesFromPolygons=this.defaultBreaks=this.attributeParameterValues=this.apiKey=this.accumulateAttributes=null;this.mergeSimilarPolygonRanges=
!1;this.outSpatialReference=this.outputPolygons=this.outputLines=this.outputGeometryPrecisionUnits=this.outputGeometryPrecision=null;this.overlapPolygons=this.overlapLines=!1;this.restrictUTurns=this.restrictionAttributes=this.preserveObjectID=this.polylineBarriers=this.polygonBarriers=this.pointBarriers=this.overrides=null;this.splitPolygonsAtBreaks=this.splitLinesAtBreaks=this.returnPolylineBarriers=this.returnPolygonBarriers=this.returnPointBarriers=this.returnFacilities=!1;this.travelMode=this.travelDirection=
this.timeOfDayIsUTC=this.timeOfDay=null;this.trimOuterPolygon=!1;this.useHierarchy=this.trimPolygonDistanceUnits=this.trimPolygonDistance=null}static from(c){return u.ensureClass(p,c)}readAccumulateAttributes(c){return null==c?null:c.map(e=>g.impedanceAttributeNameJsonMap.fromJSON(e))}writeAccumulateAttributes(c,e,f){c?.length&&(e[f]=c.map(l=>g.impedanceAttributeNameJsonMap.toJSON(l)))}writeFacilities(c,e,f){m(c,e,f)}writePointBarriers(c,e,f){m(c,e,f)}writePolygonBarrier(c,e,f){m(c,e,f)}writePolylineBarrier(c,
e,f){m(c,e,f)}readRestrictionAttributes(c){return null==c?null:c.map(e=>g.restrictionAttributeNameJsonMap.fromJSON(e))}writeRestrictionAttributes(c,e,f){c?.length&&(e[f]=c.map(l=>g.restrictionAttributeNameJsonMap.toJSON(l)))}readTimeOfDay(c,e){({timeOfDay:c}=e);return null==c?null:"now"===c?"now":new Date(c)}writeTimeOfDay(c,e){null!=c&&(e.timeOfDay="now"===c?"now":c.getTime())}};b.__decorate([d.property({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],a.prototype,"accumulateAttributes",
void 0);b.__decorate([n.reader("accumulateAttributes")],a.prototype,"readAccumulateAttributes",null);b.__decorate([k.writer("accumulateAttributes")],a.prototype,"writeAccumulateAttributes",null);b.__decorate([d.property(w.apiKey)],a.prototype,"apiKey",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"attributeParameterValues",void 0);b.__decorate([d.property({type:[Number],json:{write:!0}})],a.prototype,"defaultBreaks",void 0);b.__decorate([d.property({type:[String],json:{write:!0}})],
a.prototype,"excludeSourcesFromPolygons",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"facilities",void 0);b.__decorate([k.writer("facilities")],a.prototype,"writeFacilities",null);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecisionM",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecisionZ",void 0);b.__decorate([d.property({type:Boolean,
json:{write:!0}})],a.prototype,"ignoreInvalidLocations",void 0);b.__decorate([h.enumeration(g.impedanceAttributeNameJsonMap,{name:"impedanceAttributeName",ignoreUnknown:!1})],a.prototype,"impedanceAttribute",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"mergeSimilarPolygonRanges",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"outputGeometryPrecision",void 0);b.__decorate([h.enumeration(g.lengthUnitJsonMap)],a.prototype,"outputGeometryPrecisionUnits",
void 0);b.__decorate([h.enumeration(g.outputLineJsonMap)],a.prototype,"outputLines",void 0);b.__decorate([h.enumeration(g.outputPolygonJsonMap)],a.prototype,"outputPolygons",void 0);b.__decorate([d.property({type:y,json:{name:"outSR",write:!0}})],a.prototype,"outSpatialReference",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"overlapLines",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"overlapPolygons",void 0);b.__decorate([d.property({json:{write:!0}})],
a.prototype,"overrides",void 0);b.__decorate([d.property({json:{name:"barriers",write:!0}})],a.prototype,"pointBarriers",void 0);b.__decorate([k.writer("pointBarriers")],a.prototype,"writePointBarriers",null);b.__decorate([d.property({json:{write:!0}})],a.prototype,"polygonBarriers",void 0);b.__decorate([k.writer("polygonBarriers")],a.prototype,"writePolygonBarrier",null);b.__decorate([d.property({json:{write:!0}})],a.prototype,"polylineBarriers",void 0);b.__decorate([k.writer("polylineBarriers")],
a.prototype,"writePolylineBarrier",null);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"preserveObjectID",void 0);b.__decorate([d.property({type:[String],json:{name:"restrictionAttributeNames",write:!0}})],a.prototype,"restrictionAttributes",void 0);b.__decorate([n.reader("restrictionAttributes")],a.prototype,"readRestrictionAttributes",null);b.__decorate([k.writer("restrictionAttributes")],a.prototype,"writeRestrictionAttributes",null);b.__decorate([h.enumeration(g.restrictUTurnJsonMap)],
a.prototype,"restrictUTurns",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"returnFacilities",void 0);b.__decorate([d.property({type:Boolean,json:{name:"returnBarriers",write:!0}})],a.prototype,"returnPointBarriers",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPolygonBarriers",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPolylineBarriers",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],
a.prototype,"splitLinesAtBreaks",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"splitPolygonsAtBreaks",void 0);b.__decorate([d.property({type:Date,json:{type:Number,write:!0}})],a.prototype,"timeOfDay",void 0);b.__decorate([n.reader("timeOfDay")],a.prototype,"readTimeOfDay",null);b.__decorate([k.writer("timeOfDay")],a.prototype,"writeTimeOfDay",null);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"timeOfDayIsUTC",void 0);b.__decorate([h.enumeration(g.travelDirectionJsonMap)],
a.prototype,"travelDirection",void 0);b.__decorate([d.property({type:x,json:{write:!0}})],a.prototype,"travelMode",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"trimOuterPolygon",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"trimPolygonDistance",void 0);b.__decorate([h.enumeration(g.lengthUnitJsonMap)],a.prototype,"trimPolygonDistanceUnits",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"useHierarchy",
void 0);return a=p=b.__decorate([v.subclass("esri.rest.support.ServiceAreaParameters")],a)});