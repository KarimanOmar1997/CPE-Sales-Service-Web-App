/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{r as t}from"./mathUtils.js";import{g as e,R as s}from"./unitUtils.js";import{s as o}from"./mat4.js";import{c as i}from"./vec3.js";import{j as r,k as a}from"./typedArrayUtil.js";import{p as n}from"./projectPointToVector.js";import{p as m}from"./projectVectorToDehydratedPoint.js";import{p as c}from"./projectVectorToPoint.js";import{p as l}from"./projectVectorToVector.js";import{A as d}from"./Axis.js";import{c as p,s as h,a as f,b as u,d as y,n as j,e as S,f as _,i as A,g,h as w,j as P}from"./coordinateSystem.js";import{o as R}from"./plane.js";import{s as C,l as M}from"./vector.js";import{i as U}from"./dehydratedFeatureUtils.js";import{V}from"./ViewingMode.js";class v{constructor(t,e,s,o){this.viewingMode=t,this.spatialReference=e,this.unitInMeters=s,this._coordinateSystem=o,this._tmpCoordinateSystem=p(o)}set extent(t){t&&h(this._coordinateSystem,t,this._coordinateSystem)}getAltitude(t){return f(this._coordinateSystem,t)}setAltitude(t,e,s=t){return u(this._coordinateSystem,s,e,t)}setAltitudeOfTransformation(t,e){y(this._coordinateSystem,e,t,e)}worldUpAtPosition(t,e){return j(this._coordinateSystem,t,e)}worldBasisAtPosition(t,e,s){return S(this._coordinateSystem,t,e,s)}basisMatrixAtPosition(t,e){const s=this.worldBasisAtPosition(t,d.X,C.get()),i=this.worldBasisAtPosition(t,d.Y,C.get()),r=this.worldBasisAtPosition(t,d.Z,C.get());return o(e,s[0],s[1],s[2],0,i[0],i[1],i[2],0,r[0],r[1],r[2],0,0,0,0,1),e}headingAtPosition(e,s){const o=this.worldUpAtPosition(e,C.get()),i=this.worldBasisAtPosition(e,d.Y,C.get()),r=M(s,i,o);return t(r)}intersectManifoldClosestSilhouette(t,e,s){return _(this._coordinateSystem,e,this._tmpCoordinateSystem),A(this._tmpCoordinateSystem,t,s),s}intersectManifold(t,e,s){_(this._coordinateSystem,e,this._tmpCoordinateSystem);const o=C.get();return g(this._tmpCoordinateSystem,t,o)?i(s,o):null}intersectInfiniteManifold(t,e,s){if(this.viewingMode===V.Global)return this.intersectManifold(t,e,s);_(this._coordinateSystem,e,this._tmpCoordinateSystem);const o=this._tmpCoordinateSystem.value,r=C.get();return R(o.plane,t,r)?i(s,r):null}toRenderCoords(t,e,s){return U(t)?n(t,e,this.spatialReference):l(t,e,s,this.spatialReference)}fromRenderCoords(t,e,s=null){return U(e)?(null!=s&&(e.spatialReference=s),m(t,this.spatialReference,e)):function(t){return r(t)&&t.length>=3}(o=e)||function(t){return(a(t)||Array.isArray(t))&&t.length>=3}(o)?l(t,this.spatialReference,e,s)?e:null:c(t,this.spatialReference,e);var o}static create(t,s){switch(t){case V.Local:return new v(V.Local,s,e(s),P());case V.Global:return new v(V.Global,s,1,w(s))}}static renderUnitScaleFactor(t,e){return s(t)/s(e)}}export{v as R};
