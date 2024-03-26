// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/screenUtils","../../../../../../renderers/support/heatmapUtils","../Technique","../../../../../webgl/enums"],function(f,m,n,p,d){class e extends p.Technique{static getStorageSpec({field:b,valueExpression:c}){return{visualVariables:!1,attributes:b||c?[{field:b,valueExpression:c}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(b,
c){const {radius:q,minDensity:g,maxDensity:r,referenceScale:t,field:u,valueExpression:v,colorStops:h}=c;c=r-g;const w=u||v?1:0,k=h.map(({color:x,ratio:y})=>`${y}:${x.toString()}`).join();let l=!0,a;null!=b&&"heatmap"===b.type?(a=b,l=k!==b.gradientHash):a=this._createRendererSchema();a.radius=m.pt2px(q);a.minDensity=g;a.densityRange=c;a.referenceScale=t;a.isFieldActive=w;l&&(a.gradient=n.generateGradient(h),a.gradientHash=k);return a}}e.type="heatmap";e.programSpec={shader:"materials/icon/heatmapAccumulate",
vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:d.DataType.SHORT},{location:1,name:"a_vertexOffset",count:2,type:d.DataType.SHORT},{location:4,name:"a_id",count:4,type:d.DataType.UNSIGNED_BYTE}]}};f.HeatmapTechnique=e;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});