// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../request ../../../core/asyncUtils ../../../core/Error ../../../core/promiseUtils ../../../core/urlUtils".split(" "),function(c,f,g,h,d,e){class k{constructor(a){this._streamDataRequester=a}async loadJSON(a,b){return this._load("json",a,b)}async loadBinary(a,b){return e.isDataProtocol(a)?(d.throwIfAborted(b),e.dataToArrayBuffer(a)):this._load("binary",a,b)}async loadImage(a,b){return this._load("image",a,b)}async _load(a,b,l){if(null==this._streamDataRequester)return(await f(b,
{responseType:m[a]})).data;a=await g.result(this._streamDataRequester.request(b,a,l));if(!0===a.ok)return a.value;d.throwIfAbortError(a.error);throw new h("",`Request for resource failed: ${a.error}`);}}const m={image:"image",binary:"array-buffer",json:"json","image+type":void 0};c.DefaultLoadingContext=k;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});