// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec4f64","../support/edgeUtils","../support/symbolColorUtils"],function(c,g,h,k){c.FilterModeEnum=void 0;(function(a){a[a.Solid=0]="Solid";a[a.WireFrame=1]="WireFrame";a[a.XRay=2]="XRay"})(c.FilterModeEnum||(c.FilterModeEnum={}));var e=null,f=null;c.applyFilterMode=function(a,b){if(null==b)a.color[3]=0,a.edgeMaterial=null,a.pickable=!1;else switch(b.mode){case c.FilterModeEnum.WireFrame:a.color[3]=0;a.edgeMaterial=b.edgeMaterial;a.pickable=!1;break;case c.FilterModeEnum.XRay:a.color[0]=
1;a.color[1]=1;a.color[2]=1;a.color[3]*=.15;a.colorMixMode=k.ColorMixModeEnum.Replace;a.castShadows=!1;a.pickable=!1;b=a.edgeMaterial;if(null==b)b=null;else{if(f!==b){const d=g.clone(b.color);d[3]*=.075;e={...b,color:d};f=b}b=e}a.edgeMaterial=b}};c.parseFilterMode=function(a){switch(a.filterMode.type){case "solid":return{mode:c.FilterModeEnum.Solid};case "wire-frame":return{mode:c.FilterModeEnum.WireFrame,edgeMaterial:h.createMaterialFromEdges(a.filterMode.edges,{})};case "x-ray":return{mode:c.FilterModeEnum.XRay}}};
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});