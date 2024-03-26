// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ./index ./conditionalSlot ./dom ./loadable ./locale ./t9n ./openCloseComponent ./icon".split(" "),function(e,b,h,f,g,k,c,l,p){function m(){"undefined"!==typeof customElements&&["calcite-notice","calcite-icon"].forEach(a=>{switch(a){case "calcite-notice":customElements.get(a)||customElements.define(a,n);break;case "calcite-icon":customElements.get(a)||p.defineCustomElement()}})}var d;(function(a){a.brand="lightbulb";a.danger="exclamationMarkTriangle";a.info="information";a.success=
"checkCircle";a.warning="exclamationMarkTriangle"})(d||(d={}));const n=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteNoticeBeforeClose=b.createEvent(this,"calciteNoticeBeforeClose",6);this.calciteNoticeBeforeOpen=b.createEvent(this,"calciteNoticeBeforeOpen",6);this.calciteNoticeClose=b.createEvent(this,"calciteNoticeClose",6);this.calciteNoticeOpen=b.createEvent(this,"calciteNoticeOpen",6);this.setTransitionEl=a=>{this.transitionEl=
a};this.close=()=>{this.open=!1};this.openTransitionProp="opacity";this.open=!1;this.kind="brand";this.closable=!1;this.icon=void 0;this.iconFlipRtl=!1;this.scale="m";this.width="auto";this.defaultMessages=this.effectiveLocale=this.messageOverrides=this.messages=void 0}openHandler(){l.onToggleOpenCloseComponent(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=f.setRequestedIcon(d,this.icon,this.kind)}connectedCallback(){h.connectConditionalSlotComponent(this);k.connectLocalized(this);
c.connectMessages(this)}disconnectedCallback(){h.disconnectConditionalSlotComponent(this);k.disconnectLocalized(this);c.disconnectMessages(this)}async componentWillLoad(){g.setUpLoadableComponent(this);this.requestedIcon=f.setRequestedIcon(d,this.icon,this.kind);await c.setUpMessages(this);if(this.open)l.onToggleOpenCloseComponent(this)}componentDidLoad(){g.setComponentLoaded(this)}render(){var {el:a}=this;const r=b.h("button",{"aria-label":this.messages.close,class:"notice-close",onClick:this.close,
ref:q=>this.closeButton=q},b.h("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"}));a=f.getSlotted(a,"actions-end");return b.h("div",{class:"container",ref:this.setTransitionEl},this.requestedIcon?b.h("div",{class:"notice-icon"},b.h("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,b.h("div",{class:"notice-content"},b.h("slot",{name:"title"}),b.h("slot",{name:"message"}),b.h("slot",{name:"link"})),a?b.h("div",{class:"actions-end"},b.h("slot",
{name:"actions-end"})):null,this.closable?r:null)}async setFocus(){await g.componentFocusable(this);const a=this.el.querySelector("calcite-link");if(this.closeButton||a){if(a)return a.setFocus();this.closeButton&&this.closeButton.focus()}}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){c.updateMessages(this,this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],
messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([scale\x3ds]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale\x3ds]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3ds]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3ds]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3ds]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale\x3ds]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale\x3ds]) .notice-close{padding:0.5rem}:host([scale\x3dm]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale\x3dm]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3dm]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale\x3dm]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3dm]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3dm]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3dl]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale\x3dl]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3dl]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale\x3dl]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3dl]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale\x3dl]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width\x3dauto]){--calcite-notice-width:auto}:host([width\x3dhalf]){--calcite-notice-width:50%}:host([width\x3dfull]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name\x3dtitle]::slotted(*),.container *::slotted([slot\x3dtitle]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name\x3dmessage]::slotted(*),.container *::slotted([slot\x3dmessage]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind\x3dbrand]) .container{border-color:var(--calcite-ui-brand)}:host([kind\x3dbrand]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([kind\x3dinfo]) .container{border-color:var(--calcite-ui-info)}:host([kind\x3dinfo]) .container .notice-icon{color:var(--calcite-ui-info)}:host([kind\x3ddanger]) .container{border-color:var(--calcite-ui-danger)}:host([kind\x3ddanger]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([kind\x3dsuccess]) .container{border-color:var(--calcite-ui-success)}:host([kind\x3dsuccess]) .container .notice-icon{color:var(--calcite-ui-success)}:host([kind\x3dwarning]) .container{border-color:var(--calcite-ui-warning)}:host([kind\x3dwarning]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-notice",{open:[1540],kind:[513],closable:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],width:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);m();e.CalciteNotice=n;e.defineCustomElement=m;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});