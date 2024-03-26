// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../time/timeZoneUtils".split(" "),function(c,g,f,b,l,e,p,q,r,h,m,k,n){b=class extends b.ClonableMixin(l.JSONSupport){constructor(d){super(d);
this.cumulative=!1;this.fullTimeExtent=this.endField=null;this.hasLiveData=!1;this.trackIdField=this.timeZone=this.startField=this.interval=null;this.useTime=!0}readFullTimeExtent(d,a){return a.timeExtent&&Array.isArray(a.timeExtent)&&2===a.timeExtent.length?new g({start:new Date(a.timeExtent[0]),end:new Date(a.timeExtent[1])}):null}writeFullTimeExtent(d,a){a.timeExtent=null!=d?.start&&null!=d.end?[d.start.getTime(),d.end.getTime()]:null}readInterval(d,a){return a.timeInterval&&a.timeIntervalUnits?
f.fromJSON({value:a.timeInterval,unit:a.timeIntervalUnits}):a.defaultTimeInterval&&a.defaultTimeIntervalUnits?f.fromJSON({value:a.defaultTimeInterval,unit:a.defaultTimeIntervalUnits}):null}writeInterval(d,a){a.timeInterval=d?.toJSON().value??null;a.timeIntervalUnits=d?.toJSON().unit??null}};c.__decorate([e.property({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],b.prototype,"cumulative",void 0);c.__decorate([e.property({type:String,json:{name:"endTimeField",write:{enabled:!0,
allowNull:!0}}})],b.prototype,"endField",void 0);c.__decorate([e.property({type:g,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"fullTimeExtent",void 0);c.__decorate([h.reader("fullTimeExtent",["timeExtent"])],b.prototype,"readFullTimeExtent",null);c.__decorate([k.writer("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null);c.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"hasLiveData",void 0);c.__decorate([e.property({type:f,json:{write:{enabled:!0,allowNull:!0}}})],
b.prototype,"interval",void 0);c.__decorate([h.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],b.prototype,"readInterval",null);c.__decorate([k.writer("interval")],b.prototype,"writeInterval",null);c.__decorate([e.property({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],b.prototype,"startField",void 0);c.__decorate([e.property(n.timeZoneProperty("timeReference",!0))],b.prototype,"timeZone",void 0);c.__decorate([e.property({type:String,
json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"trackIdField",void 0);c.__decorate([e.property({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],b.prototype,"useTime",void 0);return b=c.__decorate([m.subclass("esri.layers.support.TimeInfo")],b)});