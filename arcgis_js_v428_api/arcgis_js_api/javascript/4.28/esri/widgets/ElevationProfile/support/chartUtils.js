// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/Responsive ../../../intl ../../../core/arrayUtils ../../../core/handleUtils ../../../core/promiseUtils ../../../core/signal ../../../core/unitFormatUtils ../../../core/unitUtils ../../../chunks/common ./constants ./intlUtils ./niceScale ../../../chunks/chartUtilsAm5 ../../support/widgetUtils ../../../support/themeUtils ../../../chunks/LineSeries ../../../chunks/Theme ../../../chunks/Tooltip ../../../intl/substitute ../../../intl/number".split(" "),function(D,E,Ea,ba,
z,ca,M,F,N,da,v,ea,fa,O,P,ha,r,p,Q,ia,ja){function ka({chart:a,xAxis:c,yAxis:b}){c=r.XYCursor.new(a.root,{behavior:"none",xAxis:c,yAxis:b});c.lineY.set("visible",!1);a.set("cursor",c)}function la(a){const {chart:c,xAxis:b,theme:d}=a;b.setAll({extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:R(a,"distance"),strictMinMax:!0,strictMinMaxSelection:!0});b.axisHeader.set("forceHidden",!0);a=b.get("renderer");a.setAll({inside:!1,minGridDistance:d.xAxisMinGridDistance});a.labels.template.setAll({centerX:p.p0,
centerY:p.p0,fill:p.color(d.axisLabelsColor),fontFamily:d.fontFamily,fontSize:d.axisLabelsFontSize,fontWeight:d.axisLabelsFontWeight,maxPosition:d.xAxisMaxLabelPosition,minPosition:d.xAxisMinLabelPosition,paddingLeft:0,paddingRight:0,paddingTop:d.xAxisLabelsSpacing});const h=b.set("tooltip",Q.Tooltip.new(c.root,{paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0}));h.get("background")?.setAll({fill:p.color(d.axisTooltipBackgroundColor),stroke:void 0});h.label.setAll({fill:p.color(d.axisTooltipLabelColor),
fontFamily:d.fontFamily,fontSize:d.axisTooltipFontSize,paddingBottom:d.axisTooltipPaddingBottom,paddingLeft:d.axisTooltipPaddingHorizontal,paddingRight:d.axisTooltipPaddingHorizontal,paddingTop:d.axisTooltipPaddingTop});a.grid.template.setAll({strokeOpacity:1,stroke:p.color(d.axisGridStroke)})}function ma(a){const {yAxis:c,theme:b}=a;c.setAll({baseValue:v.getConfig().noDataValue,extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:R(a,"elevation"),strictMinMax:!0,strictMinMaxSelection:!0,tooltip:void 0});
c.axisHeader.set("visible",!1);a=P.isRTL(a.params.container);const d=c.get("renderer");d.setAll({minGridDistance:b.yAxisMinGridDistance,opposite:a,inside:!0});d.labels.template.setAll({centerX:p.p0,centerY:p.p100,fill:p.color(b.axisLabelsColor),fontFamily:b.fontFamily,fontSize:b.axisLabelsFontSize,fontWeight:b.axisLabelsFontWeight,maxPosition:b.yAxisMaxLabelPosition,minPosition:b.yAxisMinLabelPosition,paddingBottom:0,paddingLeft:a?0:b.yAxisLabelSpacing,paddingRight:a?b.yAxisLabelSpacing:0,paddingTop:0,
textAlign:"start"});d.grid.template.setAll({strokeOpacity:1,stroke:p.color(b.axisGridStroke)})}function S(a){"destroyed"!==a.state&&(a.xAxis.zoom(0,1),a.yAxis.zoom(0,1))}function T({data:a,pixelWidth:c,pixelHeight:b}){if(null==a)return G;var d=a.statistics;const h=d?.maxDistance;let f=d?.minElevation;var e=d?.maxElevation;if(null==h||null==f||null==e)return G;d=Math.max(h-0,.001);let l=Math.max(e-f,.001);e=a.effectiveUnits;a.dynamicElevationRange&&(e=N.convertUnit(d,e.distance,e.elevation),l=Math.max(l,
e/v.getConfig().maxChartRatio));f-=.02*l;e=f+l+.1*l;[f,e]=fa.niceScale(f,e,10);l=e-f;return a.uniformScaling?na({data:a,bounds:{minX:0,maxX:h,minY:f,maxY:e},pixelWidth:c,pixelHeight:b,centered:!0}):{minX:0,maxX:0+d,minY:f,maxY:f+l}}function na({data:a,bounds:c,pixelWidth:b,pixelHeight:d,centered:h}){if(null==a)return c;let {minX:f,maxX:e,minY:l,maxY:g}=c;if(null==f||null==e||null==l||null==g)return G;c=e-f;a=a.effectiveUnits;b=N.convertUnit(g-l,a.elevation,a.distance)/d/(c/b);1<=b?[f,e]=U([f,e],b,
h):[l,g]=U([l,g],1/b,h);return{minX:f,maxX:e,minY:l,maxY:g}}function U([a,c],b,d){b*=c-a;return d?(a=(a+c)/2-b/2,[a,a+b]):[a,a+b]}function oa({theme:a},c,b){const d=p.color(b.color.toCss());b=b.samples??[];const h=0<b.length,{line:f,fill:e}=c;f.set("visible",h);f.set("stroke",d);e?.set("visible",h);e?.set("fill",p.Color.lighten(d,a.seriesFillLighten));f.data.setAll(b);e?.data.setAll(b)}function V(a,c){return r.LineSeries.new(a.chart.root,{connect:!1,excludeFromTotal:!0,fill:void 0,id:c,stroke:void 0,
valueXField:"distance",valueYField:"elevation",xAxis:a.xAxis,yAxis:a.yAxis})}function pa({theme:a,chart:c}){const b=Q.Tooltip.new(c.root,{forceHidden:!0,getFillFromSprite:!1,getLabelFillFromSprite:!1,pointerOrientation:"vertical",visible:!1});c=a.seriesTooltipPaddingHorizontal;const d=a.seriesTooltipPaddingVertical;b.label.setAll({fill:p.color(a.seriesTooltipLabelColor),fontFamily:a.fontFamily,fontSize:a.seriesTooltipFontSize,paddingBottom:d,paddingLeft:c,paddingRight:c,paddingTop:d,textAlign:"start"});
b.get("background")?.setAll({stroke:void 0,fill:p.color(a.seriesTooltipBackgroundColor)});b.adapters.add("dy",h=>{const f=a.seriesTooltipSpacing,e=b.get("pointTo")?.y??0;return(h??0)+(b.y()>e?f:-f)});return b}function qa(a,c){const {xAxis:b,yAxis:d}=a,h=()=>{c(W(b),W(d))};a=f=>[f.on("start",h),f.on("end",h)];return z.handlesGroup([...a(b),...a(d)].map(A))}function W(a){a=Math.abs((a.get("end")??0)-(a.get("start")??0));a=0!==a?1/a:1;return Math.abs(1-a)<da.getEpsilon()?1:a}function ra(a,c){const {chart:b,
xAxis:d,yAxis:h}=a,f=b.get("cursor"),e=b.plotContainer.events,l=()=>{a.pointerIsOver=!1;B(a);c(null,null)};return z.handlesGroup([f?.events.on("cursormoved",()=>{if(a.pointerIsOver){B(a);var g=f?.getPrivate("positionX")??0,w=f?.getPrivate("positionY")??0,k=a.data;if(null!=k?.statistics){const {maxDistance:q,minElevation:x,maxElevation:m}=k.statistics;if(null!=q){k=d.positionToValue(d.get("start")??0);var n=d.positionToValue(d.get("end")??1);g=(k+g*(n-k)-0)/(q-0)}null!=x&&null!=m&&(k=h.positionToValue(h.get("start")??
0),n=h.positionToValue(h.get("end")??1),w=(k+w*(n-k)-x)/(m-x))}c(g,w)}}),e.on("pointerover",()=>{a.pointerIsOver=!0;B(a)}),e.on("pointerout",l),e.on("blur",l)].map(A))}function B(a){const c=sa(a);c?(a.seriesInfos.forEach(b=>{b=b.line.get("tooltip");b.set("forceHidden",!1);b.label.set("text",c)}),a.xAxis.getTooltip().setAll({tooltipText:ta(a)})):a.seriesInfos.forEach(b=>{b.line.get("tooltip")?.set("forceHidden",!0)})}function sa(a){var {data:c}=a;return(c=c?.lines.map(b=>({line:b,y:X(a,b)?.elevation})).sort(ua))&&
0!==c.length&&null!=c[0].y?c.map(({y:b,line:d})=>{{const {data:f,messages:e}=a;if(null==f||null==e)d="";else{var h=v.getConfig().formatPrecision;b=ia.substitute(e.chartTooltip,{name:ea.getTranslatedLineTitle(d,e),elevation:null!=b?F.formatDecimal(e,b,f.effectiveUnits.elevation,h):v.notAvailable});d=`[${d.color.toHex()}]\u25cf[/] ${b}`}}return d}).join("\n"):null}function ua({y:a},{y:c}){return null==a?1:null==c?-1:c-a}function ta(a){const {data:c,messages:b}=a;if(null==c||null==b)return"";var d=c.lines[0];
a=d?X(a,d):null;d=v.getConfig().formatPrecision;return null!=a?F.formatDecimal(b,a.distance,c.effectiveUnits.distance,d):"-"}function R(a,c){const b=O.NumberFormatter.new(a.chart.root,{});b.format=(d,h,f)=>{const {data:e,messages:l}=a;return null==l||null==e||"string"===typeof d?"":`${ja.formatNumber(d,{maximumFractionDigits:f})} ${F.unitName(l,e.effectiveUnits[c],"abbr")}`};return b}function X({chart:a,xAxis:c},b){b=b.samples??[];if(0===b.length)return null;a=a.get("cursor")?.getPrivate("positionX")??
0;a=c.toAxisPosition(a);c=c.positionToValue(a);return ba.binaryFindClosest(b,c,d=>d.distance)}function A(a){return z.makeHandle(()=>{a?.dispose()})}const Y={fontFamily:"Avenir Next",paddingBottom:6,paddingLeft:0,paddingRight:0,paddingTop:0,axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:"#a9a9a9",axisTooltipFontSize:12,axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",axisTooltipPaddingTop:3,axisTooltipPaddingBottom:3,axisTooltipPaddingHorizontal:4,
xAxisMinGridDistance:50,xAxisLabelsSpacing:6,xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:4,yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:"#f8f8f8",seriesTooltipLabelColor:"#323232",seriesFillLighten:.9,seriesTooltipSpacing:6,seriesTooltipPaddingVertical:4,seriesTooltipPaddingHorizontal:4},va={...Y,axisGridStroke:"#323232",axisLabelsColor:"#a9a9a9",axisTooltipBackgroundColor:"#323232",axisTooltipLabelColor:"#f8f8f8",
seriesTooltipBackgroundColor:"#323232",seriesTooltipLabelColor:"#f8f8f8",seriesFillLighten:-.75},G={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};D.createChart=async function(a){const c=await O.createRoot(a.container);ca.throwIfAborted(a.abortOptions);var b=ha.isDarkTheme();const d=b?va:Y;c.setThemes(b?[E.responsiveTheme.new(c),E.darkTheme.new(c)]:[E.responsiveTheme.new(c)]);b=P.isRTL(a.container);b=c.container.children.push(r.XYChart.new(c,{panX:!0,panY:!0,paddingTop:d.paddingTop,paddingBottom:d.paddingBottom,
paddingLeft:b?d.paddingRight:d.paddingLeft,paddingRight:b?d.paddingLeft:d.paddingRight,maxTooltipDistance:0}));b.zoomOutButton.set("forceHidden",!0);const h=b.xAxes.push(r.ValueAxis.new(c,{renderer:r.AxisRendererX.new(c,{})})),f=b.yAxes.push(r.ValueAxis.new(c,{renderer:r.AxisRendererY.new(c,{})})),e=M.signal(null),l=M.signal("loading"),g={params:a,chart:b,xAxis:h,yAxis:f,seriesInfos:new Map,messages:null,theme:d,pointerIsOver:!1,get state(){return l.value},get data(){return e.value},set data(k){e.value=
k}};la(g);ma(g);ka(g);const w=z.handlesGroup([qa(g,a.onRangeChange),ra(g,a.onCursorPositionChange),A(c.events.once("frameended",()=>{l.value="ready"})),A(c)]);return{destroy:()=>{w.remove();l.value="destroyed"},update:k=>{if((k.data!==g.data||k.messages!==g.messages)&&"destroyed"!==g.state&&"destroyed"!==g.state){var n=g.data??void 0,q=k.data??void 0;g.chart.get("cursor")?.set("forceHidden",!q?.refined);var x=n?.uniformScaling!==q?.uniformScaling;g.data=q;g.messages=k.messages;if(n!==q||n?.effectiveUnits!==
q?.effectiveUnits){const {chart:wa,data:H,xAxis:Z,yAxis:aa}=g,{minX:xa,maxX:ya,minY:za,maxY:Aa}=T({data:H,pixelWidth:Z.width(),pixelHeight:aa.height()});k=!!H?.uniformScaling;n=!!H?.refined;wa.setAll({panX:!0,panY:k,pinchZoomX:n,pinchZoomY:n&&k,wheelX:"panX",wheelY:n?k?"zoomXY":"zoomX":"none"});Z.setAll({max:ya,min:xa,panX:!0,panY:!1,zoomX:!0,zoomY:k});aa.setAll({max:Aa,min:za,panX:!1,panY:k,zoomX:k,zoomY:k});const {chart:y,data:C,seriesInfos:Ba,xAxis:Ca,yAxis:Da}=g;if(null==C||0===C.lines.length)y.series.clear();
else{k=new Map;n=new Set(y.series.values);q=C.lines.length;for(let u=0;u<q;u++){const I=C.lines[u];var m=Ba.get(I.id);if(m)m.fill&&n.delete(m.fill),n.delete(m.line);else{m=g;var t=I;const {id:J}=t,K=V(m,`${"line"}-${J}`);K.setAll({dy:t.chartStrokeOffsetY,tooltip:pa(m)});K.strokes.template.setAll({strokeWidth:t.chartStrokeWidth});let L=null;t.chartFillEnabled&&(L=V(m,`${"fill"}-${J}`),L.fills.template.setAll({fillOpacity:1,visible:!0}));m={id:J,line:K,fill:L};m.fill&&y.series.push(m.fill);y.series.push(m.line)}k.set(m.id,
m);t=q-u-1;m.fill?.set("layer",t);m.line.set("layer",q+t);oa(g,m,I)}g.seriesInfos=k;for(const u of n)y.series.removeValue(u);Ca.set("layer",q+1);Da.set("layer",q+2)}}x&&S(g);B(g)}},zoomOut:()=>S(g)}};D.getAdjustedBounds=T;Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});