// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function d(a){if(null==a)return null;const b=null!=a.layer?a.layer.id:"";let e=null;e=null!=a.objectId?a.objectId:null!=a.layer&&"objectIdField"in a.layer&&null!=a.layer.objectIdField&&null!=a.attributes?a.attributes[a.layer.objectIdField]:a.uid;return null==e?null:`o-${b}-${e}`}const f={json:{write:{writer:function(a,b){null!=a?.layer?.objectIdField&&null!=a.attributes&&(b.feature={layerId:a.layer.id,objectId:a.attributes[a.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,
String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(a){if(null!=a.layerId&&null!=a.objectId)return{uid:null,layer:{id:a.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:a.objectId}}}}}}};c.featureReferenceEquals=function(a,b){return d(a)===d(b)};c.featureReferenceProperty=f;c.getFeatureId=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});