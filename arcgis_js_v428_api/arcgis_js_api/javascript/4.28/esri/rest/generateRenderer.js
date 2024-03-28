// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../request ../renderers/support/jsonUtils ./query/executeQuery ./utils ../kernel ../core/urlUtils ./query/support/AttachmentInfo ./support/AttachmentQuery ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/support/normalizeUtils ../geometry/support/spatialReferenceUtils ../core/Error ../core/pbf ../core/unitUtils ../geometry/ellipsoidUtils ./support/Query ../geometry ./support/FeatureSet ../layers/graphics/featureConversionUtils ./support/RelationshipQuery ./support/TopFeaturesQuery ./support/StatisticDefinition".split(" "),
function(m,q,r,t,u,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,v,N,O,P,Q,R,n){function w(b,a){const {field:c,checkValueRange:g,url:d}=b,e=a?.data;if(e){if(!g)return b=p(e),Promise.resolve(b);b=new n({statisticType:"min",onStatisticField:c});a=new n({statisticType:"max",onStatisticField:c});b=new v({outStatistics:[b,a]});return t.executeQuery(d,b).then(f=>{f=f.features[0].attributes;let h=null,k=null;for(const l in f)0===l.toLowerCase().indexOf("min")?h=f[l]:k=f[l];return p(e,h,k)})}}function p(b,a,c){if("classBreaks"===
b.type){const d=r.fromJSON(b);return{classBreaks:d.classBreakInfos.map((e,f)=>{0===f&&void 0!==a&&null!==a&&(e.minValue=a);f===d.classBreakInfos.length-1&&void 0!==c&&null!==c&&(e.maxValue=c);return{minValue:e.minValue,maxValue:e.maxValue,label:e.label}}),normalizationTotal:d.normalizationTotal}}const {uniqueValueInfos:g}=b;return{uniqueValues:g?.map((d,e)=>{0===e&&void 0!==a&&null!==a&&(d.value=a);e===g.length-1&&void 0!==c&&null!==c&&(d.value=c);return{count:d.count,value:d.value,label:d.label}})??
[]}}m.generateRenderer=async function(b,a,c,g){b=u.parseUrl(b);const {source:d,checkValueRange:e}=a;({classificationDefinition:a}=c);const f={...c.toJSON(),f:"json"};c=null;c="class-breaks-definition"===a?.type?a.classificationField:a?.attributeField;d&&(a={source:d?.toJSON()},f.layer=JSON.stringify(a));f.classificationDef&&(f.classificationDef=JSON.stringify(f.classificationDef));a={query:f};g&&(a={...g,...a});const h={url:b.path,field:c,checkValueRange:e};return q(b.path+"/generateRenderer",a).then(k=>
w(h,k))};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});