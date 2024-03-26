/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{a as e}from"./tslib.es6.js";import{w as t,c as i,S as s,a,T as r}from"./Tick.js";import{ai as l,aJ as n,aA as o,av as h,Y as c,aK as u,aL as d,al as g,X as p,aa as y,m as b,T as m,a as f,b as _,a8 as x,e as v,aM as w,a0 as D,aN as k,aB as A,aC as R,ar as P}from"./Theme.js";import{C as T}from"./ColorSet.js";import{s as L}from"./DefaultTheme.js";class N extends l{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)})}_afterNew(){super._afterNew()}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*n,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds())}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:l.classNames.concat([N.className])});class C extends o{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew()}_makeText(){this._text=this.children.push(N.new(this._root,{}))}baseRadius(){const e=this.getPrivate("radius",0),t=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return t+h(i,e-t)}radius(){const e=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(e?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const e=this.get("textType","adjusted"),t=this.get("inside",!1),i=this.get("orientation");let s=c(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",t);const a=u(s),r=d(s);let l=this.baseRadius(),n=this.radius();if(this._display.angle=0,"circular"==e)this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this._text.set("orientation",i),this._text.set("radius",n);else{0==l&&(s=0,n=0);let t=n*r,o=n*a;"radial"==e?(this.setRaw("x",t),this.setRaw("y",o),s<90||s>270||"auto"!=i?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==e?(this.setRaw("centerX",g),this.setRaw("centerY",g),this.setRaw("x",t),this.setRaw("y",o)):"regular"==e&&(this.setRaw("x",t),this.setRaw("y",o))}this.markDirtyPosition(),this.markDirtyBounds()}}_updatePosition(){const e=this.get("textType","regular"),t=this.get("inside",!1);let i=0,s=0,a=this.get("labelAngle",0),r=this.localBounds(),l=r.right-r.left,n=r.bottom-r.top;if("radial"==e){if(this._flipped){let e=this.get("centerX");e instanceof p&&(l*=1-2*e.value),i=l*d(a),s=l*u(a)}}else t||"adjusted"!=e||(i=l/2*d(a),s=n/2*u(a));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition()}get text(){return this._text}}Object.defineProperty(C,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(C,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:o.classNames.concat([C.className])});const j=Math.abs,S=Math.atan2,O=Math.cos,I=Math.max,M=Math.min,B=Math.sin,F=Math.sqrt,X=1e-12,Y=Math.PI,H=Y/2,V=2*Y;function z(e){return e>=1?H:e<=-1?-H:Math.asin(e)}function W(e){return e.innerRadius}function U(e){return e.outerRadius}function K(e){return e.startAngle}function q(e){return e.endAngle}function E(e){return e&&e.padAngle}function J(e,t,i,s,a,r,l){var n=e-i,o=t-s,h=(l?r:-r)/F(n*n+o*o),c=h*o,u=-h*n,d=e+c,g=t+u,p=i+c,y=s+u,b=(d+p)/2,m=(g+y)/2,f=p-d,_=y-g,x=f*f+_*_,v=a-r,w=d*y-p*g,D=(_<0?-1:1)*F(I(0,v*v*x-w*w)),k=(w*_-f*D)/x,A=(-w*f-_*D)/x,R=(w*_+f*D)/x,P=(-w*f+_*D)/x,T=k-b,L=A-m,N=R-b,C=P-m;return T*T+L*L>N*N+C*C&&(k=R,A=P),{cx:k,cy:A,x01:-c,y01:-u,x11:k*(a/v-1),y11:A*(a/v-1)}}function G(){var e=W,s=U,a=i(0),r=null,l=K,n=q,o=E,h=null,c=t(u);function u(){var t,i,u,d=+e.apply(this,arguments),g=+s.apply(this,arguments),p=l.apply(this,arguments)-H,y=n.apply(this,arguments)-H,b=j(y-p),m=y>p;if(h||(h=t=c()),g<d&&(i=g,g=d,d=i),g>X)if(b>V-X)h.moveTo(g*O(p),g*B(p)),h.arc(0,0,g,p,y,!m),d>X&&(h.moveTo(d*O(y),d*B(y)),h.arc(0,0,d,y,p,m));else{var f,_,x=p,v=y,w=p,D=y,k=b,A=b,R=o.apply(this,arguments)/2,P=R>X&&(r?+r.apply(this,arguments):F(d*d+g*g)),T=M(j(g-d)/2,+a.apply(this,arguments)),L=T,N=T;if(P>X){var C=z(P/d*B(R)),I=z(P/g*B(R));(k-=2*C)>X?(w+=C*=m?1:-1,D-=C):(k=0,w=D=(p+y)/2),(A-=2*I)>X?(x+=I*=m?1:-1,v-=I):(A=0,x=v=(p+y)/2)}var W=g*O(x),U=g*B(x),K=d*O(D),q=d*B(D);if(T>X){var E,G=g*O(v),Q=g*B(v),Z=d*O(w),$=d*B(w);if(b<Y)if(E=function(e,t,i,s,a,r,l,n){var o=i-e,h=s-t,c=l-a,u=n-r,d=u*o-c*h;if(!(d*d<X))return[e+(d=(c*(t-r)-u*(e-a))/d)*o,t+d*h]}(W,U,Z,$,G,Q,K,q)){var ee=W-E[0],te=U-E[1],ie=G-E[0],se=Q-E[1],ae=1/B(((u=(ee*ie+te*se)/(F(ee*ee+te*te)*F(ie*ie+se*se)))>1?0:u<-1?Y:Math.acos(u))/2),re=F(E[0]*E[0]+E[1]*E[1]);L=M(T,(d-re)/(ae-1)),N=M(T,(g-re)/(ae+1))}else L=N=0}A>X?N>X?(f=J(Z,$,W,U,g,N,m),_=J(G,Q,K,q,g,N,m),h.moveTo(f.cx+f.x01,f.cy+f.y01),N<T?h.arc(f.cx,f.cy,N,S(f.y01,f.x01),S(_.y01,_.x01),!m):(h.arc(f.cx,f.cy,N,S(f.y01,f.x01),S(f.y11,f.x11),!m),h.arc(0,0,g,S(f.cy+f.y11,f.cx+f.x11),S(_.cy+_.y11,_.cx+_.x11),!m),h.arc(_.cx,_.cy,N,S(_.y11,_.x11),S(_.y01,_.x01),!m))):(h.moveTo(W,U),h.arc(0,0,g,x,v,!m)):h.moveTo(W,U),d>X&&k>X?L>X?(f=J(K,q,G,Q,d,-L,m),_=J(W,U,Z,$,d,-L,m),h.lineTo(f.cx+f.x01,f.cy+f.y01),L<T?h.arc(f.cx,f.cy,L,S(f.y01,f.x01),S(_.y01,_.x01),!m):(h.arc(f.cx,f.cy,L,S(f.y01,f.x01),S(f.y11,f.x11),!m),h.arc(0,0,d,S(f.cy+f.y11,f.cx+f.x11),S(_.cy+_.y11,_.cx+_.x11),m),h.arc(_.cx,_.cy,L,S(_.y11,_.x11),S(_.y01,_.x01),!m))):h.arc(0,0,d,D,w,m):h.lineTo(K,q)}else h.moveTo(0,0);if(h.closePath(),t)return h=null,t+""||null}return u.centroid=function(){var t=(+e.apply(this,arguments)+ +s.apply(this,arguments))/2,i=(+l.apply(this,arguments)+ +n.apply(this,arguments))/2-Y/2;return[O(i)*t,B(i)*t]},u.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:i(+t),u):e},u.outerRadius=function(e){return arguments.length?(s="function"==typeof e?e:i(+e),u):s},u.cornerRadius=function(e){return arguments.length?(a="function"==typeof e?e:i(+e),u):a},u.padRadius=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:i(+e),u):r},u.startAngle=function(e){return arguments.length?(l="function"==typeof e?e:i(+e),u):l},u.endAngle=function(e){return arguments.length?(n="function"==typeof e?e:i(+e),u):n},u.padAngle=function(e){return arguments.length?(o="function"==typeof e?e:i(+e),u):o},u.context=function(e){return arguments.length?(h=e??null,u):h},u}class Q extends y{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:G()})}_getTooltipPoint(){let e=this.get("tooltipX"),t=this.get("tooltipY"),i=0,s=0;b(e)&&(i=e),b(t)&&(s=t);let a=this.get("radius",0),r=this.get("innerRadius",0);return a+=this.get("dRadius",0),r+=this.get("dInnerRadius",0),r<0&&(r=a+r),e instanceof p&&(i=this.ix*(r+(a-r)*e.value)),t instanceof p&&(s=this.iy*(r+(a-r)*t.value)),this.get("arc")>=360&&0==r&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){let e=this.get("startAngle",0),t=this.get("arc",0);const i=this._generator;t<0&&(e+=t,t*=-1),t>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),a=this.get("innerRadius",0);s+=this.get("dRadius",0),a+=this.get("dInnerRadius",0),a<0&&(a=s+a),i({innerRadius:a,outerRadius:s,startAngle:(e+90)*n,endAngle:(e+t+90)*n});let r=e+t/2;this.ix=d(r),this.iy=u(r)}if(this.isDirty("shiftRadius")){const e=this.get("shiftRadius",0);this.setRaw("dx",this.ix*e),this.setRaw("dy",this.iy*e),this.markDirtyPosition()}}}Object.defineProperty(Q,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty(Q,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:y.classNames.concat([Q.className])});class Z extends m{setupDefaultRules(){super.setupDefaultRules();const e=this._root.interfaceColors,t=this.rule.bind(this);t("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:T.new(this._root,{}),width:f,height:f}),t("PieChart").setAll({radius:_(80),startAngle:-90,endAngle:270}),t("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),t("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),t("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),t("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),t("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),t("Slice",["pie"]).states.create("hover",{scale:1.04}),t("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),t("Tick",["pie"]).setAll({location:1}),t("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),t("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),t("FunnelSlice").setAll({interactive:!0,expandDistance:0}),t("FunnelSlice").states.create("hover",{expandDistance:.15}),t("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:g}),t("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:g,rotation:-90}),t("Label",["funnel","vertical"]).setAll({centerY:g,centerX:0}),t("Tick",["funnel"]).setAll({location:1}),t("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),t("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),t("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),t("PyramidSeries").setAll({valueIs:"area"}),t("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),t("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),t("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),t("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),t("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),t("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:g}),t("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:g,rotation:-90}),t("Label",["pyramid","vertical"]).setAll({centerY:g,centerX:0}),t("Tick",["pyramid"]).setAll({location:1}),t("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),t("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:g}),t("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:g,rotation:-90}),t("Label",["pictorial","vertical"]).setAll({centerY:g,centerX:0}),t("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),t("Tick",["pictorial"]).setAll({location:.5});{const i=t("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),L(i,"fill",e,"alternativeBackground")}}}class $ extends s{_afterNew(){this._defaultThemes.push(Z.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(e){super._processSeries(e),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.classNames.concat([$.className])});class ee extends a{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()})}makeSlice(e){const t=this.slicesContainer.children.push(this.slices.make());return t.on("fill",(()=>{this.updateLegendMarker(e)})),t.on("stroke",(()=>{this.updateLegendMarker(e)})),t._setDataItem(e),e.set("slice",t),this.slices.push(t),t}makeLabel(e){const t=this.labelsContainer.children.push(this.labels.make());return t._setDataItem(e),e.set("label",t),this.labels.push(t),t}_shouldMakeBullet(e){return null!=e.get("value")}makeTick(e){const t=this.ticksContainer.children.push(this.ticks.make());return t._setDataItem(e),e.set("tick",t),this.ticks.push(t),t}_afterNew(){this.fields.push("category","fill"),super._afterNew()}_onDataClear(){const e=this.get("colors");e&&e.reset()}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let e=0,t=0,i=0,s=1/0,a=0;v(this._dataItems,(i=>{let s=i.get("valueWorking",0);e+=s,t+=Math.abs(s)})),v(this._dataItems,(e=>{let r=e.get("valueWorking",0);r>i&&(i=r),r<s&&(s=r),a++;let l=r/t;0==t&&(l=0),e.setRaw("valuePercentTotal",100*l)})),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",e),this.setPrivateRaw("valueAverage",e/a),this.setPrivateRaw("valueAbsoluteSum",t)}}show(t){const i=Object.create(null,{show:{get:()=>super.show}});return e(this,void 0,void 0,(function*(){let e=[];e.push(i.show.call(this,t)),e.push(this._sequencedShowHide(!0,t)),yield Promise.all(e)}))}hide(t){const i=Object.create(null,{hide:{get:()=>super.hide}});return e(this,void 0,void 0,(function*(){let e=[];e.push(i.hide.call(this,t)),e.push(this._sequencedShowHide(!1,t)),yield Promise.all(e)}))}_updateChildren(){super._updateChildren(),this._valuesDirty&&v(this._dataItems,(e=>{e.get("label").text.markDirtyText()})),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&v(this._dataItems,(e=>{this.updateLegendValue(e)})),this._arrange()}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),v(this.dataItems,(e=>{this._updateTick(e)}))}_afterChanged(){super._afterChanged(),this._arrange()}processDataItem(e){if(super.processDataItem(e),null==e.get("fill")){let t=this.get("colors");t&&e.setRaw("fill",t.next())}}showDataItem(t,i){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return e(this,void 0,void 0,(function*(){const e=[s.showDataItem.call(this,t,i)];b(i)||(i=this.get("stateAnimationDuration",0));const a=this.get("stateAnimationEasing");let r=t.get("value");const l=t.animate({key:"valueWorking",to:r,duration:i,easing:a});l&&e.push(l.waitForStop());const n=t.get("tick");n&&e.push(n.show(i));const o=t.get("label");o&&e.push(o.show(i));const h=t.get("slice");h&&e.push(h.show(i)),h.get("active")&&h.states.applyAnimate("active"),yield Promise.all(e)}))}hideDataItem(t,i){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return e(this,void 0,void 0,(function*(){const e=[s.hideDataItem.call(this,t,i)],a=this.states.create("hidden",{});b(i)||(i=a.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const r=a.get("stateAnimationEasing",this.get("stateAnimationEasing")),l=t.animate({key:"valueWorking",to:0,duration:i,easing:r});l&&e.push(l.waitForStop());const n=t.get("tick");n&&e.push(n.hide(i));const o=t.get("label");o&&e.push(o.hide(i));const h=t.get("slice");h.hideTooltip(),h&&e.push(h.hide(i)),yield Promise.all(e)}))}disposeDataItem(e){super.disposeDataItem(e);let t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());let i=e.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=e.get("slice");s&&(this.slices.removeValue(s),s.dispose())}hoverDataItem(e){const t=e.get("slice");t&&!t.isHidden()&&t.hover()}unhoverDataItem(e){const t=e.get("slice");t&&t.unhover()}updateLegendMarker(e){if(e){const t=e.get("slice");if(t){const i=e.get("legendDataItem");if(i){const e=i.get("markerRectangle");v(w,(i=>{null!=t.get(i)&&e.set(i,t.get(i))}))}}}}_arrangeDown(e){if(e){let t=this._getNextDown();e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),v(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.top;e.y+s<t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.bottom}))}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(e){if(e){let t=this._getNextUp();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),v(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.bottom;e.y+s>t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.top}))}}_arrangeRight(e){if(e){let t=0;e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),v(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.left;e.y+s<t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.right}))}}_arrangeLeft(e){if(e){let t=this.labelsContainer.maxWidth();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),v(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.right;e.y+s>t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.left}))}}_updateSize(){super._updateSize(),this.markDirty()}_updateTick(e){}_dispose(){super._dispose();const e=this.chart;e&&e.series.removeValue(this)}}Object.defineProperty(ee,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(ee,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.classNames.concat([ee.className])});class te extends ${constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:g,y:g})}_prepareChildren(){super._prepareChildren();const e=this.chartContainer,t=e.innerWidth(),i=e.innerHeight(),s=this.get("startAngle",0),a=this.get("endAngle",0),r=this.get("innerRadius");let l=D(0,0,s,a,1);const n=t/(l.right-l.left),o=i/(l.bottom-l.top);let c={left:0,right:0,top:0,bottom:0};if(r instanceof p){let e=r.value,l=Math.min(n,o);e=Math.max(l*e,l-Math.min(i,t))/l,c=D(0,0,s,a,e),this.setPrivateRaw("irModifyer",e/r.value)}l=k([l,c]);const u=this._maxRadius;this._maxRadius=Math.min(n,o);const d=h(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-d*(l.bottom+l.top)/2,dx:-d*(l.right+l.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||u!=this._maxRadius)&&this.series.each((e=>{e._markDirtyKey("startAngle")})),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each((e=>{e._markDirtyKey("innerRadius")}))}radius(e){let t=h(this.get("radius",0),this._maxRadius),i=h(this.get("innerRadius",0),t);if(e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("radius");return null!=r?i+h(r,t-i):i+(t-i)/a*(s+1)}return t}innerRadius(e){const t=this.radius();let i=h(this.get("innerRadius",0),t);if(i<0&&(i=t+i),e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("innerRadius");return null!=r?i+h(r,t-i):i+(t-i)/a*s}return i}}Object.defineProperty(te,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(te,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:$.classNames.concat([te.className])});class ie extends ee{_makeSlices(){return new A(R.new({}),(()=>Q._new(this._root,{themeTags:P(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template])))}_makeLabels(){return new A(R.new({}),(()=>C._new(this._root,{themeTags:P(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template])))}_makeTicks(){return new A(R.new({}),(()=>r._new(this._root,{themeTags:P(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template])))}processDataItem(e){super.processDataItem(e);const t=this.makeSlice(e);t.on("scale",(()=>{this._updateTick(e)})),t.on("shiftRadius",(()=>{this._updateTick(e)})),t.events.on("positionchanged",(()=>{this._updateTick(e)}));const i=this.makeLabel(e);i.events.on("positionchanged",(()=>{this._updateTick(e)})),this.makeTick(e),t.events.on("positionchanged",(()=>{i.markDirty()}))}_getNextUp(){const e=this.chart;return e?e._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const e=this.chart;return e?-e._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const e=this.chart;if(e){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else{let t=e.get("textType");null!=t&&"aligned"!=t||e.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const t=this.get("startAngle",e.get("startAngle",-90)),i=this.get("endAngle",e.get("endAngle",270))-t;let s=t;const a=e.radius(this);this.setPrivateRaw("radius",a);let r=e.innerRadius(this)*e.getPrivate("irModifyer",1);r<0&&(r=a+r),v(this._dataItems,(e=>{this.updateLegendValue(e);let t=i*e.get("valuePercentTotal")/100;const l=e.get("slice");if(l){l.set("radius",a),l.set("innerRadius",r),l.set("startAngle",s),l.set("arc",t);const i=e.get("fill");l._setDefault("fill",i),l._setDefault("stroke",i)}let n=c(s+t/2);const o=e.get("label");if(o&&(o.setPrivate("radius",a),o.setPrivate("innerRadius",r),o.set("labelAngle",n),"aligned"==o.get("textType"))){let e=a+o.get("radius",0),t=a*u(n);n>90&&n<=270?(o.isHidden()||o.isHiding()||this._lLabels.push({label:o,y:t}),e*=-1,e-=this.labelsContainer.get("paddingLeft",0),o.set("centerX",f),o.setPrivateRaw("left",!0)):(o.isHidden()||o.isHiding()||this._rLabels.push({label:o,y:t}),e+=this.labelsContainer.get("paddingRight",0),o.set("centerX",0),o.setPrivateRaw("left",!1)),o.set("x",e),o.set("y",a*u(n))}s+=t,this._updateTick(e)}))}}}_updateTick(e){const t=e.get("tick"),i=e.get("label"),s=e.get("slice"),a=t.get("location",1);if(t&&i&&s){const e=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*a,r=i.get("labelAngle",0),l=d(r),n=u(r),o=this.labelsContainer,h=o.get("paddingLeft",0),c=o.get("paddingRight",0);let g=0,p=0;if(g=i.x(),p=i.y(),"circular"==i.get("textType")){const e=i.radius()-i.get("paddingBottom",0),t=i.get("labelAngle",0);g=e*d(t),p=e*u(t)}let y=-c;i.getPrivate("left")&&(y=h),t.set("points",[{x:s.x()+e*l,y:s.y()+e*n},{x:g+y,y:p},{x:g,y:p}])}}_positionBullet(e){const t=e.get("sprite");if(t){const i=t.dataItem.get("slice");if(i){const s=i.get("innerRadius",0),a=i.get("radius",0),r=i.get("startAngle",0)+i.get("arc",0)*e.get("locationX",.5),l=s+(a-s)*e.get("locationY",.5);t.setAll({x:d(r)*l,y:u(r)*l})}}}}Object.defineProperty(ie,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(ie,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ee.classNames.concat([ie.className])});export{te as PieChartAm5,ie as PieSeriesAm5};
