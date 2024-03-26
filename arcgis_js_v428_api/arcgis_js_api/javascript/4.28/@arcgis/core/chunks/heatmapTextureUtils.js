/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{b as t,c as r,P as a,S as o}from"./enums3.js";class l{constructor(e,t,r,a){this.dataType=e,this.samplingMode=t,this.pixelFormat=r,this.internalFormat=a}}function n(n,i){const{textureFloat:s,colorBufferFloat:f}=n.capabilities,u=s?.textureFloat,_=s?.textureFloatLinear,m=s?.textureHalfFloat,h=s?.textureHalfFloatLinear,p=f?.textureFloat,c=f?.textureHalfFloat,d=f?.floatBlend,b=n.driverTest.floatBufferBlend.result;if(!u&&!m)throw new e("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.");if(!p&&!c)throw new e("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(d&&b||c))throw new e("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(b?"":" This device claims support for EXT_float_blend, but does not actually support it."));const x=u&&p&&d&&b,E=m&&c,R=_,F=h,L=!!f?.R32F,w=!!f?.R16F;if(x&&(R||!F))return R||i.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),new l(t.FLOAT,R?r.LINEAR:r.NEAREST,L?a.RED:a.RGBA,L?o.R32F:a.RGBA);if(E)return F||i.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),new l(t.HALF_FLOAT,F?r.LINEAR:r.NEAREST,w?a.RED:a.RGBA,w?o.R16F:a.RGBA);throw new e("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}export{n as l};
