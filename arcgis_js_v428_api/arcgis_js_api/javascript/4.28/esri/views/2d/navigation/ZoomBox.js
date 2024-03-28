// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../input/InputManager".split(" "),function(k,g,n,l,q,r,t,p,m){g=class extends g{constructor(a){super(a);this._boxShape=this._backgroundShape=this._overlay=this._container=null;this._box={x:0,y:0,width:0,height:0};this._rafId=null;this._redraw=
this._redraw.bind(this)}destroy(){this.view=null}set view(a){this.removeAllHandles();this._destroyOverlay();this._set("view",a);a&&this.addHandles([a.on("drag",["Shift"],c=>this._handleDrag(c,1),m.ViewEventPriorities.INTERNAL),a.on("drag",["Shift","Ctrl"],c=>this._handleDrag(c,-1),m.ViewEventPriorities.INTERNAL)])}_start(){this._createContainer();this._createOverlay();this.navigation.begin()}_update(a,c,b,d){this._box.x=a;this._box.y=c;this._box.width=b;this._box.height=d;this._rafId||(this._rafId=
requestAnimationFrame(this._redraw))}_end(a,c,b,d,e){const f=this.view;a=f.toMap(n.createScreenPoint(a+.5*b,c+.5*d));b=Math.max(b/f.width,d/f.height);-1===e&&(b=1/b);this._destroyOverlay();this.navigation.end();f.goTo({center:a,scale:f.scale*b})}_updateBox(a,c,b,d){const e=this._boxShape;e.setAttributeNS(null,"x",""+a);e.setAttributeNS(null,"y",""+c);e.setAttributeNS(null,"width",""+b);e.setAttributeNS(null,"height",""+d);e.setAttributeNS(null,"class","esri-zoom-box__outline")}_updateBackground(a,
c,b,d){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(a,c,b,d,this.view.width,this.view.height))}_createContainer(){const a=document.createElement("div");a.className="esri-zoom-box__container";this.view.root.appendChild(a);this._container=a}_createOverlay(){var a=this.view.width,c=this.view.height;const b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttributeNS(null,"d","M 0 0 L "+a+" 0 L "+a+" "+c+" L 0 "+c+" Z");b.setAttributeNS(null,"class","esri-zoom-box__overlay-background");
a=document.createElementNS("http://www.w3.org/2000/svg","rect");c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");c.setAttributeNS(null,"class","esri-zoom-box__overlay");c.appendChild(b);c.appendChild(a);this._container.appendChild(c);this._backgroundShape=b;this._boxShape=a;this._overlay=c}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container);
this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(a,c,b,d,e,f){b=a+b;d=c+d;return"M 0 0 L "+e+" 0 L "+e+" "+f+" L 0 "+f+" ZM "+a+" "+c+" L "+a+" "+d+" L "+b+" "+d+" L "+b+" "+c+" Z"}_handleDrag(a,c){var b=a.x,d=a.y,e=a.origin.x;const f=a.origin.y;let h;b>e?(h=e,e=b-e):(h=b,e-=b);d>f?(b=f,d-=f):(b=d,d=f-d);switch(a.action){case "start":this._start();break;case "update":this._update(h,b,e,d);break;case "end":this._end(h,b,e,d,c)}a.stopPropagation()}_redraw(){if(this._rafId&&
(this._rafId=null,this._overlay)){var {x:a,y:c,width:b,height:d}=this._box;this._updateBox(a,c,b,d);this._updateBackground(a,c,b,d);this._rafId=requestAnimationFrame(this._redraw)}}};k.__decorate([l.property()],g.prototype,"navigation",void 0);k.__decorate([l.property()],g.prototype,"view",null);return g=k.__decorate([p.subclass("esri.views.2d.navigation.ZoomBox")],g)});