// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../css ../TooltipContentWithHelpMessage ../TooltipField ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,e,p,q,r,t,u,f,b,g,h,k,v,c){var l=`${b.content} ${`${b.content}--translate-graphic-z`}`;a.TooltipContentTranslateGraphicZ=
class extends k.TooltipContent{render(){const {info:d}=this,{visibleElements:m}=d.tooltipOptions,n=this._messagesTooltip.sketch;return c.tsx(g.TooltipContentWithHelpMessage,{className:l,helpMessage:this._getHelpMessage()},m.distance?c.tsx(h.TooltipField,{title:n.distance,value:this._formatRelativeVerticalLength(d.distance)}):null)}};a.TooltipContentTranslateGraphicZ=e.__decorate([f.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],a.TooltipContentTranslateGraphicZ);
Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});