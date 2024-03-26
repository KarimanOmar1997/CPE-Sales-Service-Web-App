// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../Color ../../../../../../core/screenUtils ../../color ../../definitions ../Technique ../../../../../webgl/enums".split(" "),function(g,m,n,d,h,p,b){class e extends p.Technique{static getStorageSpec({attributes:a}){return{visualVariables:!0,attributes:a??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*h.chartMaxFields),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,
sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(a,c){const {attributes:f,defaultColor:q,holePercentage:r,othersCategory:k,outline:l}=c;a=null!=a&&"pie-chart"===a.type?a:this._createRendererSchema();for(c=0;c<h.chartMaxFields;c++){const t=c>=f.length?new m([0,0,0,0]):f[c].color;d.writeColor(a.colors,t,4*c)}d.writeColor(a.defaultColor,q);d.writeColor(a.othersColor,k?.color);d.writeColor(a.outlineColor,l?.color);a.outlineWidth=n.pt2px(l?.width||0);a.holePercentage=
r;a.sectorThreshold=k?.threshold||0;a.numberOfFields=f.length;return a}static getVariation(a){return{numberOfFields:a.numberOfFields}}static getVariationHash(a){return a.numberOfFields}}e.type="pie-chart";e.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:b.DataType.SHORT},{location:1,name:"a_vertexOffset",count:2,type:b.DataType.SHORT},{location:2,name:"a_texCoords",count:2,type:b.DataType.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,
type:b.DataType.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:b.DataType.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:b.DataType.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:b.DataType.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};g.PieChartTechnique=e;Object.defineProperty(g,
Symbol.toStringTag,{value:"Module"})});