// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../geometry/Circle","../../../../../support/elevationInfoUtils","../isSupportedGraphicUtils"],function(d,h,f,b){function g(a){if("graphics"!==a.layer?.type)return{result:b.SupportedGraphicResult.GRAPHICS_LAYER_MISSING,geometry:null};const {geometry:e}=a;if(null==e)return{result:b.SupportedGraphicResult.GEOMETRY_MISSING,geometry:null};if("on-the-ground"!==f.getGraphicEffectiveElevationMode(a)&&f.hasGraphicFeatureExpressionInfo(a))return{result:b.SupportedGraphicResult.ELEVATION_MODE_UNSUPPORTED,
geometry:null};const c=e.type;return"point"!==c&&"mesh"!==c&&"polyline"!==c&&("polygon"!==c||a.geometry instanceof h)?{result:b.SupportedGraphicResult.GEOMETRY_TYPE_UNSUPPORTED,geometry:null}:{result:b.SupportedGraphicResult.SUPPORTED,geometry:e}}d.geometryOfSupportedGraphic=function(a){return g(a).geometry};d.isSupportedGraphic=function(a){return g(a).result};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});