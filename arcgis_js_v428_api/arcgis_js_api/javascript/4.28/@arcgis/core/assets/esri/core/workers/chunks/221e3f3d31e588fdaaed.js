"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8827,6646],{8827:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>l,executeRelationshipQueryForCount:()=>p});var r=o(19124),i=o(82058),s=o(53785),n=o(26900),d=o(87258),a=o(46646);function u(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSR&&(o.outSR=(0,s.U)(o.outSR)),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function c(e,t,o={},r){const s=(0,n.m)({...e.query,f:"json",...r,...u(t,r)});return(0,i.Z)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...s}})}async function l(e,t,o){return t=a.default.from(t),async function(e,t,o){const r=await c(e,t,o),i=r.data,s=i.geometryType,n=i.spatialReference,d={};for(const e of i.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:n,hasZ:!!i.hasZ,hasM:!!i.hasM,features:e.relatedRecords};if(null!=e.objectId)d[e.objectId]=t;else for(const o of Object.keys(e))"relatedRecords"!==o&&(d[e[o]]=t)}return{...r,data:d}}((0,r.p)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=d.Z.fromJSON(t[e]))),o}))}async function p(e,t,o){return t=a.default.from(t),async function(e,t,o){const r=await c(e,t,o,{returnCountOnly:!0}),i=r.data,s={};for(const e of i.relatedRecordGroups)null!=e.objectId&&(s[e.objectId]=e.count);return{...r,data:s}}((0,r.p)(e),t,{...o}).then((e=>e.data))}o(31450),o(48578),o(76506),o(88762),o(32101),o(60991),o(92143),o(12047),o(29768),o(21972),o(17533),o(86656),o(66396),o(22723),o(6540),o(91306),o(34250),o(379),o(62062),o(6906),o(79456),o(50406),o(57251),o(89623),o(73173),o(74569),o(21801),o(73796),o(97714),o(60947),o(2906),o(91597),o(86787),o(35132),o(84069),o(44567),o(89034),o(98380),o(92482),o(82426),o(72836),o(66106),o(29794),o(92896),o(22781),o(32422),o(23761),o(86748),o(66122),o(15324),o(75067),o(89914),o(14249),o(66284),o(8925),o(3482),o(76131),o(36097),o(87239),o(60217),o(29107),o(30574),o(2157),o(25977),o(58076),o(98242),o(7471),o(54414),o(59465),o(1648),o(45154),o(16769),o(93603),o(15438),o(593),o(48027),o(54174),o(85699),o(55531),o(96055),o(47776),o(18033),o(6331),o(62048),o(56890),o(30493),o(4292),o(75626),o(72652),o(29641),o(70821),o(3296),o(34229),o(37029),o(96467),o(63571),o(30776),o(63130),o(25696),o(94216),o(42775),o(95834),o(34394),o(57150),o(76726),o(20444),o(76393),o(78548),o(2497),o(49906),o(46527),o(11799),o(48649),o(81731),o(9960),o(30823),o(53326),o(5853),o(39141),o(38742),o(52461),o(48243),o(34635),o(10401),o(49900),o(81184),o(33101),o(58943),o(67477),o(78533),o(74653),o(91091),o(70737),o(36834),o(8487),o(17817),o(90814),o(15459),o(97189),o(61847),o(28212),o(16955),o(22401),o(48699),o(77894),o(55187),o(8586),o(44509),o(69814),o(11305),o(62259),o(44790),o(58085),o(41864),o(5909),o(60669),o(48208),o(51589),o(97546),o(9801),o(53523),o(42911),o(46826),o(45433),o(54732),o(69218)},46646:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var r,i=o(29768),s=(o(74569),o(12047)),n=o(76506),d=o(34250),a=o(91306),u=o(17533),c=o(2906),l=o(69218),p=o(60947);o(21801),o(92143),o(31450),o(48578),o(73796),o(97714),o(21972),o(86656),o(66396),o(22723),o(379),o(62062),o(6540),o(6906),o(79456),o(50406),o(60991),o(53785),o(57251),o(89623),o(73173),o(82058),o(88762),o(32101),o(91597),o(86787),o(35132),o(84069),o(44567),o(89034),o(98380),o(92482),o(82426),o(72836),o(66106),o(29794),o(92896),o(22781),o(32422),o(59465),o(97546),o(9801),o(53523),o(42911),o(46826),o(45433),o(54732);let y=r=class extends s.wq{constructor(e){super(e),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(t.definitionExpression="1=1")}clone(){return new r((0,n.d9)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,i._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"cacheHint",void 0),(0,i._)([(0,d.Cb)({type:l.D,json:{write:!0}})],y.prototype,"dynamicDataSource",void 0),(0,i._)([(0,d.Cb)({type:String,json:{write:!0}})],y.prototype,"gdbVersion",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],y.prototype,"geometryPrecision",void 0),(0,i._)([(0,d.Cb)({type:Date})],y.prototype,"historicMoment",void 0),(0,i._)([(0,c.w)("historicMoment")],y.prototype,"_writeHistoricMoment",null),(0,i._)([(0,d.Cb)({type:Number,json:{write:!0}})],y.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,d.Cb)({type:[Number],json:{write:!0}})],y.prototype,"objectIds",void 0),(0,i._)([(0,d.Cb)({type:[String],json:{write:!0}})],y.prototype,"orderByFields",void 0),(0,i._)([(0,d.Cb)({type:[String],json:{write:!0}})],y.prototype,"outFields",void 0),(0,i._)([(0,d.Cb)({type:p.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],y.prototype,"outSpatialReference",void 0),(0,i._)([(0,d.Cb)({json:{write:!0}})],y.prototype,"relationshipId",void 0),(0,i._)([(0,d.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],y.prototype,"start",void 0),(0,i._)([(0,c.w)("start"),(0,c.w)("num")],y.prototype,"writeStart",null),(0,i._)([(0,d.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],y.prototype,"num",void 0),(0,i._)([(0,d.Cb)({json:{write:!0}})],y.prototype,"returnGeometry",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],y.prototype,"returnM",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],y.prototype,"returnZ",void 0),(0,i._)([(0,d.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],y.prototype,"where",void 0),y=r=(0,i._)([(0,u.j)("esri.rest.support.RelationshipQuery")],y),y.from=(0,a.j)(y);const h=y}}]);