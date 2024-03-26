/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{j as e}from"./mat4.js";import{a as s}from"./mat4f64.js";import{V as r}from"./VisualElement.js";import{W as t,U as o,O as i}from"./TriangleMaterial.js";class a extends r{constructor(e){super(e),this._resources=null,this._transform=s()}get object(){return null!=this._resources?this._resources.object:null}get transform(){return this._transform}set transform(s){e(this._transform,s),null!=this._resources&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(null==this._resources)return;const e=this._resources.object,s=this.view._stage;s.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),e.visible=this.visible,s.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const s=new t(e,{pickable:!1,updatePolicy:o.SYNC}),r=new i({castShadow:!1});r.transformation=this._transform,this.createExternalResources(),this.createGeometries(r),e.addMany(r.geometries),this.forEachExternalMaterial((s=>e.add(s))),e.add(r),s.add(r),r.visible=this.visible,this._resources={layer:s,object:r}}destroyResources(){const e=this.view._stage;null!=this._resources&&e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial((s=>{e.remove(s)})),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){null!=this._resources&&(this._resources.object.visible=e)}}export{a as O};
