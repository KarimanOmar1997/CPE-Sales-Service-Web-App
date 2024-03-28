// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../css ../TooltipContentWithHelpMessage ../TooltipField ../ValueByValue ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(b,l,v,w,x,y,z,m,f,n,c,p,q,A,a){var r=`${f.content} ${`${f.content}--draw-rectangle`}`;
b.TooltipContentDrawCircle=class extends q.TooltipContent{render(){const {area:t,radius:g,xSize:h,ySize:k,tooltipOptions:u}=this.info,{visibleElements:d}=u,e=this._messagesTooltip.sketch;return a.tsx(n.TooltipContentWithHelpMessage,{className:r,helpMessage:this._getHelpMessage()},d.radius&&null!=g?a.tsx(c.TooltipField,{title:e.radius,value:this._formatLength(g)}):null,d.size&&null!=h&&null!=k?a.tsx(c.TooltipField,{title:e.size,value:a.tsx(p.ValueByValue,{left:this._formatLength(h),right:this._formatLength(k)})}):
null,d.area?a.tsx(c.TooltipField,{title:e.area,value:this._formatArea(t)}):null)}};b.TooltipContentDrawCircle=l.__decorate([m.subclass("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],b.TooltipContentDrawCircle);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});