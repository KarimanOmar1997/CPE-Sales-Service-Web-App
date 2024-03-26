// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../intl ../../../core/mathUtils ../../../core/timeUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../intl/duration ../../Widget ../css ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory ../../../intl/substitute".split(" "),function(a,d,u,f,g,e,v,w,x,m,n,p,h,y,q,k,r){const t=
g.convertTime(1,"minutes","milliseconds"),l=g.convertTime(15,"minutes","milliseconds");a.ShadowTooltipContent=class extends p{constructor(c,b){super(c,b);this._messages=this.accumulatedShadowTime=null}render(){const c=this._formattedContent;return k.tsx("div",{class:h.tooltipCss.base},c?k.tsx("div",{class:h.tooltipCss.content},c):null)}get _formattedContent(){const c=this._messages;var b=this.accumulatedShadowTime;if(null==c||null==b)return null;b=b<l?f.roundToNearest(b,t):f.roundToNearest(b,l);return r.substitute(c.timeInShadow,
{duration:n.formatDuration(b)})}};d.__decorate([e.property()],a.ShadowTooltipContent.prototype,"accumulatedShadowTime",void 0);d.__decorate([e.property()],a.ShadowTooltipContent.prototype,"view",void 0);d.__decorate([e.property(),q.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],a.ShadowTooltipContent.prototype,"_messages",void 0);d.__decorate([e.property({readOnly:!0})],a.ShadowTooltipContent.prototype,"_formattedContent",null);a.ShadowTooltipContent=d.__decorate([m.subclass("esri.widgets.ShadowCast.components.ShadowTooltipContent")],
a.ShadowTooltipContent);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});