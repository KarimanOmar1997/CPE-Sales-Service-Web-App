/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as o,a as n}from"./index.js";import{t as s,q as r,h as l,j as a}from"./dom.js";import{c,d,a as h,r as p,F as u}from"./floating-ui.js";import{g as f}from"./guid.js";import{o as m}from"./openCloseComponent.js";import{F as v}from"./FloatingArrow.js";import"./debounce.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const g="aria-describedby";function T(e){const{referenceElement:t}=e;return("string"==typeof t?r(e,{id:t}):t)||null}const E=new class{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.hoveredTooltip=null,this.clickedTooltip=null,this.activeTooltip=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key&&!e.defaultPrevented){const{activeTooltip:t}=this;if(t?.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=T(t);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.pointerMoveHandler=e=>{const t=e.composedPath(),{activeTooltip:i}=this;if(i?.open&&t.includes(i))return void this.clearHoverTimeout();const o=this.queryTooltip(t);this.hoveredTooltip=o,this.isClosableClickedTooltip(o)||(this.clickedTooltip=null,o?this.openHoveredTooltip(o):i&&this.closeHoveredTooltip())},this.pointerDownHandler=e=>{if(!l(e))return;const t=this.queryTooltip(e.composedPath());this.clickedTooltip=t,t?.closeOnClick&&(this.toggleTooltip(t,!1),this.clearHoverTimeout())},this.focusInHandler=e=>{this.queryFocusedTooltip(e,!0)},this.focusOutHandler=e=>{this.queryFocusedTooltip(e,!1)},this.openHoveredTooltip=e=>{this.hoverOpenTimeout=window.setTimeout((()=>{null!==this.hoverOpenTimeout&&(this.clearHoverCloseTimeout(),this.activeTooltip!==this.hoveredTooltip&&(this.closeActiveTooltip(),e===this.hoveredTooltip&&this.toggleTooltip(e,!0)))}),this.activeTooltip?0:300)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout((()=>{null!==this.hoverCloseTimeout&&this.closeActiveTooltip()}),500)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler,{capture:!0}),e.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler,{capture:!0}),e.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:!0}),document.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.addEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.addEventListener("focusin",this.focusInHandler,{capture:!0}),document.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.removeEventListener("focusin",this.focusInHandler,{capture:!0}),document.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeActiveTooltip(){const{activeTooltip:e}=this;e?.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){this.closeActiveTooltip(),t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}queryFocusedTooltip(e,t){const i=this.queryTooltip(e.composedPath());i&&!this.isClosableClickedTooltip(i)&&this.toggleFocusedTooltip(i,t)}isClosableClickedTooltip(e){return e?.closeOnClick&&e===this.clickedTooltip}registerShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=(t.get(e)??0)+1;1===i&&this.addShadowListeners(e),t.set(e,i)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e)-1;0===i&&this.removeShadowListeners(e),t.set(e,i)}getReferenceElShadowRootNode(e){return e instanceof Element?a(e):null}},w=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=i(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=i(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=i(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=i(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${f()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=T(this.el),c(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:o}=this;e&&i&&!o&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(g,t),E.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(g),E.unregisterElement(e))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=d,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){m(this),e&&this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded),this.open&&m(this)}async componentWillLoad(){this.open&&m(this)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),h(this,this.effectiveReferenceElement,this.el)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:o,overlayPositioning:n,offsetDistance:s,offsetSkidding:r,arrowEl:l}=this;return p(this,{floatingEl:t,referenceEl:i,overlayPositioning:n,placement:o,offsetDistance:s,offsetSkidding:r,arrowEl:l,type:"tooltip"},e)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:e,label:t,open:i,floatingLayout:r}=this,l=e&&i,a=!l;return o(n,{"aria-hidden":s(a),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":a,id:this.getId(),role:"tooltip"},o("div",{class:{[u.animation]:!0,[u.animationActive]:l},ref:this.setTransitionEl},o(v,{floatingLayout:r,ref:e=>this.arrowEl=e}),o("div",{class:"container"},o("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-app-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],floatingLayout:[32],reposition:[64]}]);function H(){"undefined"!=typeof customElements&&["calcite-tooltip"].forEach((e=>{"calcite-tooltip"===e&&(customElements.get(e)||customElements.define(e,w))}))}H();const y=w,b=H;export{y as CalciteTooltip,b as defineCustomElement};
