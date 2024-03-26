// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/events ../../../core/mathUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../Widget ../../../chunks/constants ./css ./Label ./LevelItem ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(e,p,t,k,f,d,z,A,u,v,g,l,w,x,y,n){const r={selectLevel:"selectLevel",clearLevel:"clearLevel",
nextLevel:"nextLevel",previousLevel:"previousLevel",currentLevel:"{{value}}"};d=class extends v{constructor(a,b){super(a,b);this._levelHandlesKey="levelHandles";this._levelEventHandlesKey="levelEventHandles";this._levelWidgets=[];this._labelWidget=new w.Label({onClear:()=>this.vm.clear()});this._hoveredLevel=null;this._expandedLevelsHeight=void 0;this._normalizedPointerPosition=0;this._hovering=!1;this._levelsContainer=this._containerPosTop=null;this._onPointerUp=()=>{window.getSelection()?.removeAllRanges();
if(null!=this._hoveredLevel){var {vm:c}=this;c.enabled&&this._hoveredLevel===c.value?c.clear():c.select(this._hoveredLevel)}};this._onPointerEnter=()=>{this._hovering||null==this._levelsContainer||(this._hovering=!0,this._containerPosTop=this._levelsContainer.getBoundingClientRect().top??0)};this._onPointerLeave=()=>{this._hovering&&(this._normalizedPointerPosition=0,this._hoveredLevel=null,this._hovering=!1)};this._onPointerMove=c=>{if(!this._hovering)return!1;window.getSelection()?.removeAllRanges();
if(null!=this._containerPosTop){const h=this._levelHeight/2;c=(c.clientY-(this._containerPosTop+g.levelsPadding*g.levelsMarginFactor+this._expandedLevelsMargin+h))/(this._levelsHeight-h);this._normalizedPointerPosition=c+=g.levelsPointerAdjustment}return!1}}postInitialize(){this.addHandles([k.watch(()=>this._levelsContainer,()=>this._onContainerChange(),k.initial),k.watch(()=>this._levels,()=>this._createLevelWidgets(),k.initial),k.watch(()=>this.messages,()=>{this._labelWidget.messages=this.messages??
r},k.initial)])}destroy(){this._levelWidgets.forEach(a=>a.destroy());this._labelWidget.destroy()}get _levels(){return this.vm.allowedValues}get _numLevels(){return this._levels.length}get _levelsHeight(){return Math.round(this._levelHeight*this._numLevels)}get _expandedLevelsMargin(){return Math.round(((this._expandedLevelsHeight??0)-this._levelsHeight)/2)}get _levelWidth(){const {levelWidthNominator:a,levelWidthConstant:b}=g.constants;return Math.round(t.clamp(a/Math.sqrt(this._numLevels)+b,g.levelWidthMin,
g.levelWidthMax))}get _levelHeight(){const a=g.levelHeightDefault;return Math.round(t.clamp(2*a/Math.sqrt(this._numLevels),2,a))}get _gaussianFactor(){const a=this._numLevels;return a/Math.log(g.alphaLevelDependencyFactor*a)*g.alphaSpreadFactor}get _levelClosestToPointer(){if(!this._hovering)return null;const a=this._numLevels-1,b=this._normalizedPointerPosition;return 0<=a&&null!=b?this._levels[Math.round((1-b)*a)]:null}render(){const a=this._levelWidgets.length,b=1<a?this._levelWidgets.map(q=>q.render()):
null;var c=g.levelsPadding*g.levelsMarginFactor;const h=-c/g.levelsMarginFactor,m=this._levelsHeight;c=m+2*c;return n.tsx("div",{bind:this,class:this.classes("esri-widget",l.css.container,{[l.css.animateLevel]:!this._hovering,[l.css.noLevel]:2>a}),key:this,onkeydown:this._onKeyDown},this._renderLabelContainer(),n.tsx("div",{afterCreate:y.storeNode,bind:this,class:l.css.levelsContainer,"data-node-ref":"_levelsContainer",onfocus:this._onFocus,styles:{height:`${c}px`,marginTop:`${h}px`,marginBottom:`${h}px`}},
n.tsx("div",{class:l.css.innerLevelsContainer,styles:{height:`${m}px`,margin:`${g.levelsPadding-this._expandedLevelsMargin}px 0 0 0`}},b)))}_renderLabelContainer(){var a=this.messages??r;const b=a.previousLevel;a=a.nextLevel;return n.tsx("div",{class:l.css.labelContainer,tabIndex:0},n.tsx("button",{"aria-label":a,bind:this,class:l.css.arrowUp,disabled:!this.vm.hasNext,onclick:this._onArrowUpClick,title:a,type:"button"}),this._labelWidget.render(),n.tsx("button",{"aria-label":b,bind:this,class:l.css.arrowDown,
disabled:!this.vm.hasPrevious,onclick:this._onArrowDownClick,title:b,type:"button"}))}_updateComponents(){const a=this.messages??r,b=this.vm.enabled?this.vm.value:null,c=null!=this._hoveredLevel?this._hoveredLevel:b;this._levelWidgets.forEach(h=>{const m=this.vm.getValueLabel(h.level);h.label=null!=m?m:a.currentLevel?.replace("{{level}}",String(h.level));h.active=h.level===b;h.hovering=h.level===this._hoveredLevel});this._labelWidget.level=c;this._labelWidget.active=c===b;this._labelWidget.hovering=
null!=this._hoveredLevel}_createLevelWidgets(){this._levelWidgets.forEach(a=>a.destroy());this._levelWidgets=this._levels.map(a=>new x.LevelItem({level:a,onSelect:()=>this._onLevelToggle(a)}));this.removeHandles(this._levelHandlesKey);this.addHandles([k.watch(()=>{const {vm:a}=this;return[this.messages,a?.value,a?.enabled,this._hoveredLevel,this._hovering]},()=>this._updateComponents(),k.initial),k.watch(()=>[this._normalizedPointerPosition,this._hovering],()=>this._onPointerPositionChange(),k.initial),
k.watch(()=>this._levelWidth,a=>this._levelWidgets.forEach(b=>b.width=a),k.initial)],this._levelHandlesKey)}_onContainerChange(){const a=this._levelsContainer;null!=a&&(this.removeHandles(this._levelEventHandlesKey),this.addHandles([p.on(a,"pointerenter",this._onPointerEnter),p.on(a,"pointerover",this._onPointerEnter),p.on(a,"pointerleave",this._onPointerLeave),p.on(a,"pointerup",this._onPointerUp),p.on(a,"pointermove",this._onPointerMove)],this._levelEventHandlesKey))}_onKeyDown(a){switch(a.key){case "ArrowDown":case "ArrowLeft":a.preventDefault();
a.stopPropagation();this.vm.previous();this._focusCurrentLevel();break;case "ArrowUp":case "ArrowRight":a.preventDefault(),a.stopPropagation(),this.vm.next(),this._focusCurrentLevel()}}_focusCurrentLevel(){const a=this._levelWidgets.find(b=>b.level===this.vm.value);a&&a.focus()}_onFocus(){this._hoveredLevel=0<this._levels.length?this._levels[0]:null}_onLevelToggle(a){const {vm:b}=this;b.enabled&&b.value===a?b.clear():b.select(a)}_onArrowUpClick(){this.vm.next()}_onArrowDownClick(){this.vm.previous()}_onPointerPositionChange(){let a=
0;this._levelWidgets.forEach((c,h)=>{const {width:m,height:q}=this._getLevelWidgetSize(h);c.height=q;c.width=m;a+=q});this._hoveredLevel=this._levelClosestToPointer;const b=this._expandedLevelsHeight;if(null==b||30<Math.abs(b-a))this._expandedLevelsHeight=a}_getLevelWidgetSize(a){const b={width:this._levelWidth,height:this._levelHeight};this._hovering&&(a=this._getGaussianFactor(a,this._normalizedPointerPosition),b.width+=g.levelHoveredExtraWidth*a,b.height+=g.levelHoveredExtraHeight*a);return b}_getGaussianFactor(a,
b){const c=this._numLevels-1;return Math.exp(-((this._gaussianFactor*((c-a)/c-b))**2))}};e.__decorate([f.property()],d.prototype,"vm",void 0);e.__decorate([f.property()],d.prototype,"messages",void 0);e.__decorate([f.property()],d.prototype,"_levelWidgets",void 0);e.__decorate([f.property()],d.prototype,"_labelWidget",void 0);e.__decorate([f.property()],d.prototype,"_hoveredLevel",void 0);e.__decorate([f.property()],d.prototype,"_levels",null);e.__decorate([f.property()],d.prototype,"_numLevels",
null);e.__decorate([f.property({readOnly:!0})],d.prototype,"_levelsHeight",null);e.__decorate([f.property()],d.prototype,"_expandedLevelsHeight",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"_expandedLevelsMargin",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"_levelWidth",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"_levelHeight",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"_gaussianFactor",null);e.__decorate([f.property({readOnly:!0})],
d.prototype,"_levelClosestToPointer",null);e.__decorate([f.property({type:Number,range:{min:0,max:1}})],d.prototype,"_normalizedPointerPosition",void 0);e.__decorate([f.property()],d.prototype,"_hovering",void 0);e.__decorate([f.property()],d.prototype,"_containerPosTop",void 0);e.__decorate([f.property()],d.prototype,"_levelsContainer",void 0);return d=e.__decorate([u.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.BuildingLevelPicker")],d)});