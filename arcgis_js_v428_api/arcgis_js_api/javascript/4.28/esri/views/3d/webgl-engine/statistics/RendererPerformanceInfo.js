// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../../../../core/PerformanceSampler","../../../../core/time","../../../webgl/TimerPool"],function(c,f,e,d,g){c.PerformanceCategory=void 0;(function(a){a.OVERLAY="overlay";a.PREPARE="prepare";a.SHADOW_MAP="shadow map";a.LINEAR_DEPTH="linear depth";a.ACCUMULATED_SHADOWS="accumulated shadows";a.OBJECT_AND_LAYER_ID_COLOR="object/layer id color";a.SSAO="SSAO";a.OPAQUE="opaque";a.OPAQUE_EDGES="opaque edges";a.VOXEL="voxel";a.TRANSPARENT="transparent";a.TRANSPARENT_EDGES=
"transparent edges";a.HUD_VISIBILITY="HUD visibility";a.TRANSPARENT_TERRAIN="transparent terrain";a.ENVIRONMENT="environment";a.LASER_LINES="laser lines";a.OCCLUDED="occluded";a.ANTIALIASING="antialiasing";a.HIGHLIGHTS="highlights";a.HUD="HUD";a.HUD_OCCLUDED="HUD occluded";a.FINISH="finish"})(c.PerformanceCategory||(c.PerformanceCategory={}));class h{constructor(a){this._rctx=a;this._startTimeStampCPU=d.Milliseconds(0);this._lastTimeStampCPU=d.Milliseconds(0);this._totalCPUTime=new e("Total");this._cpuTimeSamplers=
new Map(Object.values(c.PerformanceCategory).map(b=>[b,new e(b)]));this._enableGPUTimer=0;this._totalGPUTime=new e("GPU");this._gpuTimeSamplers=new Map(Object.values(c.PerformanceCategory).map(b=>[b,new e(b)]));this._totalTime=d.Milliseconds(0);this._totalFrameCount=0}get totalCPUTimeSampler(){return this._totalCPUTime}get cpuTimeSamplers(){return Array.from(this._cpuTimeSamplers.values())}get totalGPUTimeSampler(){return this._totalGPUTime}get gpuTimeSamplers(){return Array.from(this._gpuTimeSamplers.values())}get gpuSamplingEnabled(){return null!=
this._gpuTimerPool}get totalTime(){return this._totalTime}get totalFrameCount(){return this._totalFrameCount}get elapsedTime(){return d.Milliseconds(performance.now()-this._startTimeStampCPU)}enableGPUPerformanceInfo(){if(null==this._gpuTimerPool){const b=[...Object.values(c.PerformanceCategory),"Total"];this._gpuTimerPool=g.createElapsedTimerPool(this._rctx,b)}if(null==this._gpuTimerPool)return{hasGPUTimerSupport:!1,remove:()=>{}};++this._enableGPUTimer;let a=!1;return{hasGPUTimerSupport:!0,remove:()=>
{a||(a=!0,--this._enableGPUTimer,0===this._enableGPUTimer&&(this._gpuTimerPool=f.disposeMaybe(this._gpuTimerPool)))}}}startFrame(){this._startTimeStampCPU=this._lastTimeStampCPU=d.Milliseconds(performance.now());this._gpuTimerPool&&this._gpuTimerPool.start()}advance(a){var b=d.Milliseconds(performance.now());this._cpuTimeSamplers.get(a).record(b-this._lastTimeStampCPU);this._lastTimeStampCPU=b;this._gpuTimerPool&&(b=this._gpuTimerPool.stop(a),this._gpuTimeSamplers.get(a).record(b),this._gpuTimerPool.start())}finishFrame(){if(this._gpuTimerPool){var a=
this._gpuTimerPool.stop(c.PerformanceCategory.FINISH);this._gpuTimeSamplers.get(c.PerformanceCategory.FINISH).record(a);this._rctx.gl.flush()}a=d.Milliseconds(performance.now()-this._startTimeStampCPU);this._totalTime=d.Milliseconds(this._totalTime+a);this._totalCPUTime.record(a);this._gpuTimerPool&&this._totalGPUTime.record(this.gpuTimeSamplers.reduce((b,k)=>b+(k.last||0),0));++this._totalFrameCount}}c.RendererPerformanceInfo=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});