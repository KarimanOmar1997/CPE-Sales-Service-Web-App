// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./get","./utils","./extensions/serializableProperty"],function(q,r,z,m){const v={origin:"service"};q.read=function(l,c,f=v){if(c&&"object"===typeof c){var d=z.getProperties(l),e=d.metadatas,t={};for(const n of Object.getOwnPropertyNames(c)){var g=t,a=e,u=n,A=c,w=f,b=m.originSpecificReadPropertyDefinition(a[u],w);b&&(!b.read||!1!==b.read.enabled&&!b.read.source)&&(g[u]=!0);for(const x of Object.getOwnPropertyNames(a)){b=m.originSpecificReadPropertyDefinition(a[x],w);a:{var h=u;var y=
A;if(b?.read&&!1!==b.read.enabled&&b.read.source){b=b.read.source;if("string"===typeof b){if(b===h||b.includes(".")&&0===b.indexOf(h)&&r.exists(b,y)){h=!0;break a}}else for(const p of b)if(p===h||p.includes(".")&&0===p.indexOf(h)&&r.exists(p,y)){h=!0;break a}h=!1}else h=!1}h&&(g[x]=!0)}}d.setDefaultOrigin(f.origin);for(var k of Object.getOwnPropertyNames(t))g=m.originSpecificReadPropertyDefinition(e[k],f).read,a=(a=g?.source)&&"string"===typeof a?r.valueOf(c,a):c[k],g?.reader&&(a=g.reader.call(l,
a,c,f)),void 0!==a&&d.set(k,a);if(!f||!f.ignoreDefaults){d.setDefaultOrigin("defaults");for(const n of Object.getOwnPropertyNames(e))t[n]||(k=l,c=n,e=d,g=f,a=m.originSpecificPropertyDefinition(e.metadatas[c],g)?.default,void 0!==a&&(k="function"===typeof a?a.call(k,c,g):a,void 0!==k&&e.set(c,k)))}d.setDefaultOrigin("user")}};q.readLoadable=function(l,c,f,d=v){c={...d,messages:[]};f(c);c.messages?.forEach(e=>{"warning"!==e.type||l.loaded?d?.messages&&d.messages.push(e):l.loadWarnings.push(e)})};Object.defineProperty(q,
Symbol.toStringTag,{value:"Module"})});