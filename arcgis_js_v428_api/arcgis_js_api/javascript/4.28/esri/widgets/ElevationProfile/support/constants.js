// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/unitUtils","../../../chunks/vec4f64","../../../views/3d/webgl-engine/lib/Material"],function(b,d,e,f){b.ElevationProfileState=void 0;(function(a){a.Disabled="disabled";a.Ready="ready";a.Creating="creating";a.Created="created";a.Selecting="selecting";a.Selected="selected"})(b.ElevationProfileState||(b.ElevationProfileState={}));b.ElevationProfileErrorState=void 0;(function(a){a.NoValidInput="no-valid-input";a.NoVisibleProfiles="no-visible-profiles";a.InvalidGeometry=
"invalid-geometry";a.TooComplex="too-complex";a.InvalidElevationInfo="invalid-elevation-info";a.UnknownError="unknown-error";a.RefinedButNoChartData="refined-but-no-chart-data";a.None="none"})(b.ElevationProfileErrorState||(b.ElevationProfileErrorState={}));let c={noDataValue:-5E5,defaultQueryOptions:()=>({noDataValue:c.noDataValue,demResolution:"auto",maximumAutoTileRequests:150,ignoreInvisibleLayers:!0}),updateThrottleMillis:100,delayAfterPreviewMillis:500,defaultDemResolution:d.convertUnit(10,
"centimeters","meters"),densificationMaxSamples:3E3,largeChartSamples:1E4,maxTotalSamples:1E5,maxChartRatio:300,minSlopeSampleDistance:10,formatPrecision:1,portraitModePixelBreakpoint:400,profileLinesStyle3D:{width:3,outlineSize:0,falloff:0,outlineColor:e.fromArray([1,1,1,0]),renderOccluded:f.RenderOccludedFlag.Opaque},hoveredPointsStyle:{size:14,borderStyle:"solid",borderWidth:3,borderColor:"#ffffff",boxShadow:"0px 0px 0px 5px rgba(255,255,255,0.2)"}};b.errorResult={progress:1,hasZ:!1,samples:[],
statistics:null,spatialReference:null};b.getConfig=function(){return c};b.notAvailable=" \u2015 ";b.setConfig=function(a){c=a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});