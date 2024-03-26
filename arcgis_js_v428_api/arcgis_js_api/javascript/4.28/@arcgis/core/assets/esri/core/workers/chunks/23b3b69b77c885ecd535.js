"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3558],{63558:(t,e,r)=>{r.r(e),r.d(e,{executeTopFeaturesQuery:()=>l});var i=r(19124),o=r(66977),s=r(87258),n=r(39210);async function l(t,e,r,l){const u=(0,i.p)(t),p={...l},{data:a}=await(0,o.e)(u,n.Z.from(e),r,p);return s.Z.fromJSON(a)}r(31450),r(48578),r(76506),r(88762),r(32101),r(60991),r(92143),r(12047),r(29768),r(21972),r(17533),r(86656),r(66396),r(22723),r(6540),r(91306),r(34250),r(379),r(62062),r(6906),r(79456),r(50406),r(82058),r(32422),r(21801),r(73796),r(97714),r(60947),r(53785),r(57251),r(89623),r(73173),r(2906),r(91597),r(86787),r(35132),r(84069),r(44567),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(95533),r(94751),r(95307),r(74569),r(22781),r(20438),r(55823),r(92847),r(23761),r(86748),r(66122),r(15324),r(75067),r(89914),r(14249),r(66284),r(8925),r(3482),r(76131),r(36097),r(87239),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(45154),r(16769),r(93603),r(15438),r(593),r(48027),r(54174),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(96467),r(63571),r(30776),r(63130),r(25696),r(94216),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(81731),r(9960),r(30823),r(53326),r(5853),r(39141),r(38742),r(52461),r(48243),r(34635),r(10401),r(49900),r(81184),r(33101),r(58943),r(67477),r(78533),r(74653),r(91091),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(58085),r(41864),r(5909),r(60669),r(48208),r(51589),r(97546),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732),r(93314),r(35197),r(90549)},66977:(t,e,r)=>{r.d(e,{a:()=>c,b:()=>h,c:()=>m,e:()=>y});var i=r(82058),o=r(32101),s=r(32422),n=r(95533),l=r(53785),u=r(26900),p=r(55823);const a="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,s.Ji)(r),o.inSR=(0,l.U)(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=(0,l.U)(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function y(t,e,r,i){const o=await w(t,e,"json",i);return(0,p.a)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,s={},l={}){const p="string"==typeof t?(0,o.mN)(t):t,a=e.geometry?[e.geometry]:[];return s.responseType="pbf"===r?"array-buffer":"json",(0,n.aX)(a,null,s).then((t=>{const n=t?.[0];null!=n&&((e=e.clone()).geometry=n);const a=(0,u.m)({...p.query,f:r,...l,...d(e,l)});return(0,i.Z)((0,o.v_)(p.path,"queryTopFeatures"),{...s,query:{...a,...s.query}})}))}},39210:(t,e,r)=>{r.d(e,{Z:()=>j});var i,o=r(29768),s=r(74569),n=r(93314),l=r(57251),u=r(12047),p=r(76506),a=r(34250),d=r(91306),y=r(17533),c=r(2906),h=r(32422),m=r(90549),w=r(60947);r(21801),r(92143),r(31450),r(48578),r(73796),r(97714),r(21972),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(60991),r(53785),r(89623),r(73173),r(82058),r(88762),r(32101),r(91597),r(86787),r(35132),r(84069),r(44567),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(35197),r(8925),r(3482),r(76131),r(36097);const b=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),v=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let F=i=class extends u.wq{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new i((0,p.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"cacheHint",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],F.prototype,"distance",void 0),(0,o._)([(0,a.Cb)({types:s.qM,json:{read:h.im,write:!0}})],F.prototype,"geometry",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{write:!0}})],F.prototype,"geometryPrecision",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{write:!0}})],F.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],F.prototype,"num",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],F.prototype,"objectIds",void 0),(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],F.prototype,"orderByFields",void 0),(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],F.prototype,"outFields",void 0),(0,o._)([(0,a.Cb)({type:w.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],F.prototype,"outSpatialReference",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],F.prototype,"resultType",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],F.prototype,"returnGeometry",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],F.prototype,"returnM",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],F.prototype,"returnZ",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],F.prototype,"start",void 0),(0,o._)([(0,c.w)("start"),(0,c.w)("num")],F.prototype,"writeStart",null),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"spatialRel",reader:b.read},write:{target:"spatialRel",writer:b.write}}})],F.prototype,"spatialRelationship",void 0),(0,o._)([(0,a.Cb)({type:n.Z,json:{write:!0}})],F.prototype,"timeExtent",void 0),(0,o._)([(0,a.Cb)({type:m.Z,json:{write:!0}})],F.prototype,"topFilter",void 0),(0,o._)([(0,a.Cb)({type:String,json:{read:v.read,write:{writer:v.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],F.prototype,"units",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],F.prototype,"where",void 0),F=i=(0,o._)([(0,y.j)("esri.rest.support.TopFeaturesQuery")],F),F.from=(0,d.j)(F);const j=F},90549:(t,e,r)=>{r.d(e,{Z:()=>p});var i,o=r(29768),s=r(12047),n=r(34250),l=(r(91306),r(48578),r(17533));r(21972),r(92143),r(31450),r(76506),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(60991);let u=i=class extends s.wq{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,n.Cb)({type:[String],json:{write:!0}})],u.prototype,"groupByFields",void 0),(0,o._)([(0,n.Cb)({type:Number,json:{write:!0}})],u.prototype,"topCount",void 0),(0,o._)([(0,n.Cb)({type:[String],json:{write:!0}})],u.prototype,"orderByFields",void 0),u=i=(0,o._)([(0,l.j)("esri.rest.support.TopFilter")],u);const p=u}}]);