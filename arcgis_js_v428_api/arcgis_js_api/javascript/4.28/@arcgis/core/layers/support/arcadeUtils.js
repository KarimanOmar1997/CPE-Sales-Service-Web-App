/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,n){const r=[];if(!e)return r;if("valueExpression"in e&&e.valueExpression){const o={expression:e.valueExpression,title:e.valueExpressionTitle,profileInfo:{name:"visualization",context:`${e.type}-renderer`,source:n}};r.push(o)}if("visualVariables"in e&&e.visualVariables){const o=e.visualVariables.filter((({valueExpression:e})=>e&&"$view.scale"!==e)).map((({valueExpression:e,valueExpressionTitle:r,type:o})=>({expression:e,title:r,profileInfo:{name:"visualization",context:`${o}-variable`,source:n}})));r.push(...o)}if("attributes"in e&&e.attributes){const o=e?.attributes.filter((({valueExpression:e})=>e)).map((({valueExpression:r,valueExpressionTitle:o})=>({expression:r,title:o,profileInfo:{name:"visualization",context:`${e.type}-renderer`,source:n}})));r.push(...o)}return r}function n(e,n){const r=[];if(e?.expressionInfos){const o=e?.expressionInfos.map((({title:e,name:r,expression:o,returnType:t})=>({title:e,name:r,expression:o,profileInfo:{name:"layer"===n?"popup":"feature-reduction-popup",context:"popup-template",returnType:t,source:n}})));r.push(...o)}if(e?.content&&Array.isArray(e.content)){const o=e?.content.filter((({type:e})=>"expression"===e)).map((({expressionInfo:e})=>({title:e.title,expression:e.expression,profileInfo:{name:"layer"===n?"popup-element":"feature-reduction-popup-element",context:"popup-expression-content",returnType:e.returnType,source:n}})));r.push(...o)}return r}function r(e,n){const r=[];if(e){const o=e.filter((({labelExpressionInfo:e})=>e?.expression)).map((({labelExpressionInfo:e})=>({expression:e?.expression,title:e?.title,profileInfo:{name:"labeling",context:"label-class",source:n}})));r.push(...o)}return r}function o(o){const t=[...r(o.labelingInfo,"layer"),...n(o.popupTemplate,"layer"),...e(o.renderer,"layer")];var s;return"elevationInfo"in o&&t.push(...function(e){const n=[];if(e?.featureExpressionInfo?.expression){const r={expression:e?.featureExpressionInfo?.expression,profileInfo:{name:"feature-z",context:"elevation-info",source:"layer"}};n.push(r)}return n}(o.elevationInfo)),"featureReduction"in o&&t.push(...(s=o.featureReduction,[...n(s?.popupTemplate,"feature-reduction"),...r(s?.labelingInfo,"feature-reduction"),...e(s?.renderer,"feature-reduction")])),"orderBy"in o&&t.push(...function(e){const n=[];if(e){const r=e.filter((({valueExpression:e})=>e)).map((({valueExpression:e})=>({expression:e,profileInfo:{name:"feature-z",context:"order-by",source:"layer"}})));n.push(...r)}return n}(o.orderBy)),"formTemplate"in o&&t.push(...function(e){const n=[];if(e?.expressionInfos){const r=e?.expressionInfos.map((({title:e,name:n,expression:r,returnType:o})=>({title:e,name:n,expression:r,profileInfo:{name:"boolean"===o?"form-constraint":"form-calculation",context:"form-template",returnType:o,source:"layer"}})));n.push(...r)}return n}(o.formTemplate)),t}export{o as getExpressionsFromLayer};
