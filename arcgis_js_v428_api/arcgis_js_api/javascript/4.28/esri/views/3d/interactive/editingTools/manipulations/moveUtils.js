// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../interactive/dragEventPipeline"],function(h,l){h.axisConstrainedDragSign=function(b){if(null==b?.axis)return 1;const {mapStart:d,mapEnd:e,axis:f}=b;b=[e.x-d.x,e.y-d.y];return 0<b[0]*f[0]+b[1]*f[1]?1:-1};h.createGraphicMoveDragPipeline=function(b,d,e,f){const g=(m,c)=>d({action:m,graphic:b,dxScreen:c.screenDeltaX,dyScreen:c.screenDeltaY});return e((m,c,k)=>{c.next(a=>{"start"===a.action&&g("start",a);return a}).next(l.dragGraphic(b,f)).next(a=>{switch(a.action){case "start":case "update":(a.translationX||
a.translationY||a.translationZ)&&g("update",a);break;case "end":g("end",a)}return a});k=k.next(l.resetGraphic(b)).next(a=>{g("end",{screenDeltaX:0,screenDeltaY:0});return a});return{steps:c,cancel:k}})};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});