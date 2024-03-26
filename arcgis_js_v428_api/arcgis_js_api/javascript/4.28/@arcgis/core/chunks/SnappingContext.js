/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{h as e}from"./handleUtils.js";import{I as t,P as i,R as s}from"./IntersectionSnappingHint.js";import{L as n}from"./LineSnappingHint.js";import{P as a}from"./PointSnappingHint.js";class r{draw(r,o){const l=this._getUniqueHints(r),u=this.sortUniqueHints(l),p=[];for(const e of u)e instanceof t&&p.push(this.visualizeIntersectionPoint(e,o)),e instanceof n&&p.push(this.visualizeLine(e,o)),e instanceof i&&p.push(this.visualizeParallelSign(e,o)),e instanceof s&&p.push(this.visualizeRightAngleQuad(e,o)),e instanceof a&&p.push(this.visualizePoint(e,o));return e(p)}sortUniqueHints(e){return e}_getUniqueHints(e){const t=[];for(const i of e){let e=!0;for(const s of t)if(i.equals(s)){e=!1;break}e&&t.push(i)}return t}}class o{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.feature=e.feature,this.visualizer=e.visualizer,this.selfSnappingZ=e.selfSnappingZ}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}export{o as S,r as a};
