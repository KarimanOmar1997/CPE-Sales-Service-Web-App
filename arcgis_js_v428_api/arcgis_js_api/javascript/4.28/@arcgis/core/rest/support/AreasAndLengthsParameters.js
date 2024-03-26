/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{J as t}from"../../chunks/jsonMap.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import i from"../../geometry/Polygon.js";import{U as n}from"../../chunks/unitUtils.js";import"../../config.js";import"../../core/lang.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/zmUtils.js";const p=new t({preserveShape:"preserve-shape",planar:"planar",geodesic:"geodesic"}),c=new t({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),a=new t({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let m=class extends r{constructor(s){super(s),this.areaUnit=null,this.calculationType=null,this.lengthUnit=null,this.polygons=null}toJSON(){const s={};if(this.polygons&&this.polygons.length>0){const t=this.polygons.map((s=>s.toJSON()));s.polygons=JSON.stringify(t);const r=this.polygons[0].spatialReference;s.sr=n(r)}if(this.lengthUnit&&(s.lengthUnit=a.toJSON(this.lengthUnit)),this.areaUnit){const t=c.toJSON(this.areaUnit);s.areaUnit="string"==typeof t?JSON.stringify({areaUnit:t}):t}return this.calculationType&&(s.calculationType=p.toJSON(this.calculationType)),s}};s([e({type:String,json:{write:!0}})],m.prototype,"areaUnit",void 0),s([e({type:String,json:{write:!0}})],m.prototype,"calculationType",void 0),s([e({type:String,json:{write:!0}})],m.prototype,"lengthUnit",void 0),s([e({type:[i],json:{write:!0}})],m.prototype,"polygons",void 0),m=s([o("esri.rest.support.AreasAndLengthsParameters")],m);const l=m;export{l as default};
