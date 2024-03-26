// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../core/Error ../../../core/promiseUtils ../../../layers/support/layerUtils ../../../views/ViewingMode ../../../views/3d/terrain/terrainUtils ../../../views/3d/terrain/TilingScheme ../../../views/support/spatialReferenceSupport".split(" "),function(l,r,f,k,m,n,p,t,u){function q(){throw new f("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view");}function v(a){if(0!==a.baseLayers.length||0!==
a.referenceLayers.length)if(a=a.baseLayers.concat(a.referenceLayers).toArray().filter(b=>!m.isBasemap3DSupportedLayer(b)).map(b=>new f("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:b,operationalLayerType:b.operationalLayerType||"unknown"})),a.length)throw a[0];}async function w(a,b,c){if(0!==a.baseLayers.length&&(a=a.baseLayers.at(0),m.isBasemapSupportedTiledLayer(a))){try{await a.load(c)}catch(e){const {name:h="basemap-compatibility:unknown-error",
message:x="Unknown basemap compatibility error",details:y}=e;throw new f(h,x,y);}{const e=b.state.viewingMode;if(e){if("wmts"===a?.type){var d=p.getTileInfoAndExtentFromWMTSLayer(a,b.spatialReference,e);if(null==d.tileInfo)throw new f("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");c=d.tileInfo;d=d.fullExtent}else c=a.tileInfo,d=a.fullExtent;if(null!=c){if(!u.isSpatialReferenceSupported(c.spatialReference,e))throw new f(`basemapgalleryitem:spatial-reference-unsupported-${n.stringFromViewingMode(e)}`,
`Basemap spatial reference is unsupported in ${n.stringFromViewingMode(e)} mode`);var g=c.spatialReference.isGeographic;g="vector-tile"===a?.type?c.getOrCreateCompatible(256,g?1:2):null;if(e===n.ViewingMode.Global){let h=p.checkIfTileInfoSupportedForView(c,d,null,e);h&&"vector-tile"===a?.type&&null!=d&&g&&!p.checkIfTileInfoSupportedForView(g,d,null,e)&&(h=null);if(h)throw new f(`basemapgalleryitem:tiling-scheme-unsupported-${c.spatialReference.isWebMercator?"web-mercator":"wgs84"}-global`,"Basemap tiling scheme is unsupported in global mode",
{error:h});}else if(t.TilingScheme.checkUnsupported(c))throw new f("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");b=b.basemapTerrain?.tilingScheme;if(!(!b||b.compatibleWith(c)||"vector-tile"===a?.type&&g&&b.compatibleWith(g)))throw new f("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");}}}}}l.default2DCompatibility=async function(a,b={}){const {basemap:c,view:d}=a;k.throwIfAborted(b);
if(!(!d||"spatialReferenceLocked"in d&&!d.spatialReferenceLocked)&&(await c.load(b),k.throwIfAborted(b),0!==c.baseLayers.length&&(a=c.baseLayers.at(0),m.isTiledLayer(a)))){if(c.spatialReference){if(d.spatialReference.equals(c.spatialReference))return;q()}await a.load(b);k.throwIfAborted(b);b=(("supportedSpatialReferences"in a?a.supportedSpatialReferences:null)||["tileInfo"in a?a.tileInfo?.spatialReference:null]).filter(r.isSome);0!==b.length&&b.every(g=>!d.spatialReference.equals(g))&&q()}};l.default3DCompatibility=
async function(a,b={}){const {basemap:c,view:d}=a;await c.load(b);v(c);await w(c,d,b);k.throwIfAborted(b)};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});