/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{c as t}from"./maybe.js";import{isPromiseLike as e}from"../core/promiseUtils.js";import{N as s}from"./interfaces3.js";import{R as i}from"./basicInterfaces.js";import{G as u}from"./DefaultBufferWriter.js";class r extends u{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRepository,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t))}dispose(){this._texture=t(this._texture),this._textureNormal=t(this._textureNormal),this._textureEmissive=t(this._textureEmissive),this._textureOcclusion=t(this._textureOcclusion),this._textureMetallicRoughness=t(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return 0===this._numLoading?i.LOADED:i.LOADING}get textureBindParameters(){return new l(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=t(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)))}_acquire(s,i){if(null==s)return void i(null);const u=this._textureRepository.acquire(s);if(e(u))return++this._numLoading,void u.then((e=>{if(this._disposed)return t(e),void i(null);i(e)})).finally((()=>--this._numLoading));i(u)}}class l extends s{constructor(t=null,e=null,s=null,i=null,u=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=u}}export{r as G,l as a};
