// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/has ../../../../core/Logger ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ./defaultSymbolComplexity ./elevationAlignmentUtils ./ElevationContext ./featureExpressionInfoUtils ./graphicUtils ./interfaces ./Loadable ../support/FastSymbolUpdates".split(" "),function(n,t,E,u,v,w,x,k,p,y,l,z,A,m){function q(a){const b={color:!1,opacity:!1,opacityAlwaysOpaque:!0,size:!1};a&&"visualVariables"in a&&a.visualVariables&&a.visualVariables.forEach(c=>{switch(c.type){case "color":b.color=
!0;if(c.stops)for(let d=0;d<c.stops.length;d++){const e=c.stops[d].color;e&&(b.opacity=!0,1>e.a&&(b.opacityAlwaysOpaque=!1))}break;case "opacity":b.opacity=!0;b.opacityAlwaysOpaque=!1;break;case "size":b.size=!0}});return b}const g=u.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");class B extends A.Loadable{constructor(a,b,c,d){super(c.schedule);this.symbol=a;this.symbolLayer=b;this._context=c;this.ignoreDrivers=!1;this._drivenProperties={color:!1,opacity:!1,opacityAlwaysOpaque:!0,
size:!1};this._materials=[];this.usedMemory=0;this.logger=g;this._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0};this.skipHighSymbolLodsChanged=!0;this._renderPriority=d.renderPriority;this._renderPriorityStep=d.renderPriorityStep;this._elevationContext=new p.ElevationContext;this.complexity=this.computeComplexity();this.ignoreDrivers=d.ignoreDrivers;this.ignoreDrivers||(this._drivenProperties=q(this._context.renderer));this._updateElevationContext()}getCachedSize(){return null}get extentPadding(){return 0}get materials(){return this._materials}_drivenPropertiesChanged(a){if(this.ignoreDrivers)return!1;
const b=this._drivenProperties;a=q(a);return a.color!==b.color||a.opacity!==b.opacity||a.opacityAlwaysOpaque!==b.opacityAlwaysOpaque||a.size!==b.size}get needsDrivenTransparentPass(){return this._drivenProperties.opacity&&!this._drivenProperties.opacityAlwaysOpaque}_logGeometryCreationWarnings(a,b,c,d){const e="polygons"in a?a.polygons:null,f=`${d} geometry failed to be created`;let h=null;a.projectionSuccess?!this._logGeometryValidationWarnings(b,c,d)&&e&&0===e.length&&"rings"===c&&0<b.length&&2<
b[0].length&&(h=`${f} (filled rings should use clockwise winding - try reversing the order of vertices)`):h=`${f} (failed to project geometry to view spatial reference)`;h&&g.warnOncePerTick(h)}_logGeometryValidationWarnings(a,b,c){c=`${c} geometry failed to be created`;return!a.length||1===a.length&&!a[0].length?(g.warnOncePerTick(`${c} (no ${b} were defined)`),!0):Array.isArray(a)&&Array.isArray(a[0])?!1:(g.warnOncePerTick(`${c} (${b} should be defined as a 2D array)`),!0)}_validateGeometry(a,b=
null,c=null){return null==b||b.includes(a.type)?"point"!==a.type||isFinite(a.x)&&isFinite(a.y)?!0:(g.warn("point coordinate is not a valid number, graphic skipped"),!1):(this.logger.warn("unsupported geometry type for "+c+` symbol: ${a.type}`),!1)}_defaultElevationInfoNoZ(){return C}_defaultElevationInfoZ(){return D}_updateElevationContext(){null!=this._elevationInfoOverride?(this._elevationContext.setFromElevationInfo(this._elevationInfoOverride),this._elevationContext.updateFeatureExpressionInfoContext(null)):
this._context.layer.elevationInfo?(this._elevationContext.setFromElevationInfo(this._context.layer.elevationInfo),this._elevationContext.updateFeatureExpressionInfoContext(this._context.featureExpressionInfoContext)):this._elevationContext.reset()}getDefaultElevationInfo(a){return a.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ()}getGeometryElevationMode(a,b=this.getDefaultElevationInfo(a)){return this._elevationContext.mode||b.mode}setElevationInfoOverride(a){this._elevationInfoOverride=
a;this._updateElevationContext()}setGraphicElevationContext(a,b=new p.ElevationContext){var c=a.geometry;const d=this.getDefaultElevationInfo(c);b.unit=null!=this._elevationContext.unit?this._elevationContext.unit:d.unit;b.mode=this.getGeometryElevationMode(c,d);b.offsetMeters=this._elevationContext.meterUnitOffset??d.offset??0;if(c=!this._elevationOptions.supportsOnTheGround&&"on-the-ground"===b.mode)b.mode="relative-to-ground",b.offsetMeters=0;b.updateFeatureExpressionInfoContext(c?y.zeroContext:
this._elevationContext.featureExpressionInfoContext,a,this._context.layer);return b}prepareSymbolLayerPatch(a){}updateGeometry(a,b){return!1}updateTransform(a,b,c,d){return!1}onRemoveGraphic(a){}_getLayerOpacity(){if(this._context.graphicsCoreOwner&&"fullOpacity"in this._context.graphicsCoreOwner)return this._context.graphicsCoreOwner.fullOpacity??0;const a=this._context.layer.opacity;return null==a?1:a}_getCombinedOpacity(a,b=r){let c=1;this.draped||(c*=this._getLayerOpacity());if(this._drivenProperties.opacity)return c;
null!=a?c*=a.a:b.hasIntrinsicColor||(c=0);return c}_getCombinedOpacityAndColor(a,b=r){b=this._getCombinedOpacity(a,b);if(this._drivenProperties.color)return l.mixinColorAndOpacity(null,b);a=null!=a?t.toUnitRGB(a):v.ONES;return l.mixinColorAndOpacity(a,b)}_getVertexOpacityAndColor(a,b=null){a=l.mixinColorAndOpacity(this._drivenProperties.color?a.color:null,this._drivenProperties.opacity?a.opacity:null);b&&(a[0]*=b,a[1]*=b,a[2]*=b,a[3]*=b);return a}isFastUpdatesEnabled(){return null!=this._fastUpdates}computeComplexity(){return x.defaultSymbolLayerComplexity(this.symbol,
this.symbolLayer)}globalPropertyChanged(a,b,c){switch(a){case "opacity":return this.layerOpacityChanged(b,c),!0;case "elevationInfo":return a=this._elevationContext.mode,this._updateElevationContext(),this.layerElevationInfoChanged(b,c,a)===k.SymbolUpdateType.RECREATE?!1:!0;case "slicePlaneEnabled":return this.slicePlaneEnabledChanged(b,c);case "physicalBasedRenderingEnabled":return this.physicalBasedRenderingChanged();case "pixelRatio":return this.pixelRatioChanged;case "skipHighSymbolLods":return this.skipHighSymbolLodsChanged;
default:return!1}}get pixelRatioChanged(){return!0}updateGraphics3DGraphicElevationInfo(a,b,c){let d=k.SymbolUpdateType.UPDATE;a.forEach(e=>{const f=b(e);null!=f?(this.setGraphicElevationContext(e.graphic,f.elevationContext),f.needsElevationUpdates=c(f.elevationContext.mode)):d=k.SymbolUpdateType.RECREATE});return d}applyRendererDiff(a,b){return z.ApplyRendererDiffResult.RecreateSymbol}getFastUpdateAttrValues(a){if(!this._fastUpdates)return null;const b=this._fastUpdates.visualVariables,c=b.size?
m.getAttributeValue(b.size.field,a):0,d=b.color?m.getAttributeValue(b.color.field,a):0;a=b.opacity?m.getAttributeValue(b.opacity.field,a):0;return w.fromValues(c,d,a,0)}get draped(){return this._draped}ensureDrapedStatus(a){if(null==this._draped)return this._draped=a,!0;a!==this.draped&&g.warnOnce("A symbol can only produce either draped or non-draped visualizations. Use two separate symbol instances for draped and non-draped graphics if necessary.");return!1}test(){return{drivenProperties:this._drivenProperties,
getVisVarFields:()=>({size:this._fastUpdates?.visualVariables.size?.field??null,color:this._fastUpdates?.visualVariables.color?.field??null,opacity:this._fastUpdates?.visualVariables.opacity?.field??null,rotation:this._fastUpdates?.visualVariables.rotation?.field??null})}}}const C={mode:"on-the-ground",offset:0,unit:"meters"},D={mode:"absolute-height",offset:0,unit:"meters"},r={hasIntrinsicColor:!1};n.Graphics3DSymbolLayer=B;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});