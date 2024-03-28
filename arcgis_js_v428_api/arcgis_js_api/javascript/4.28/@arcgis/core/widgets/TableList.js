/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Collection.js";import{e as s}from"../core/promiseUtils.js";import{watch as i,on as o,initial as n}from"../core/reactiveUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{cast as a}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import c from"./Widget.js";import{g as d}from"../chunks/globalCss.js";import{l as m}from"../chunks/legacyIcon.js";import{a as u}from"../chunks/accessibleHandler.js";import{m as h}from"../chunks/messageBundle.js";import{v as p}from"../chunks/vmEvent.js";import{t as g}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import _ from"./TableList/ListItem.js";import b from"./TableList/TableListViewModel.js";import{S as y}from"../chunks/sortable.esm.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../core/Error.js";import"../chunks/ensureType.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../core/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"../chunks/layerListUtils.js";function I(t,e){const s=t.layer?.uid;return null!=s?e.find((t=>t.layer?.uid===s)):null}function v(t,e,s){t.splice(s,0,t.splice(e,1)[0])}const f=e.ofType(_),j="data-layer-uid",k="esri-table-list",A={base:k,widgetIcon:m.table,noItems:`${k}__no-items`,list:`${k}__list`,listRoot:`${k}__list--root`,item:`${k}__item`,itemChosen:`${k}__item--chosen`,itemMessage:`${k}__item--has-message`,itemSelectable:`${k}__item--selectable`,itemContainer:`${k}__item-container`,actionsMenu:`${k}__item-actions-menu`,actionsMenuItem:`${k}__item-actions-menu-item`,actionsMenuItemActive:`${k}__item-actions-menu-item--active`,actions:`${k}__item-actions`,actionsList:`${k}__item-actions-list`,action:`${k}__item-action`,actionIcon:`${k}__item-action-icon`,actionImage:`${k}__item-action-image`,actionTitle:`${k}__item-action-title`,actionToggle:`${k}__action-toggle`,actionToggleOn:`${k}__action-toggle--on`,message:`${k}__item-message`,title:`${k}__item-title`,publishing:`${k}__publishing`},S="actions",w="action-section",T="items",C={statusIndicators:!0,errors:!1};let $=class extends c{constructor(t,e){super(t,e),this._sortable=null,this._sortableNode=null,this._focusSortUid=null,this.visibleItems=null,this.iconClass=A.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.selectionEnabled=!1,this.selectedItems=new f,this.viewModel=new b,this.visibleElements={...C}}initialize(){this._setVisibleItems(this.tableItems),this.addHandles([i((()=>this.visibleElements),(()=>this._itemsChanged())),o((()=>this.viewModel.tableItems),"change",(()=>this._itemsChanged())),i((()=>this.selectionEnabled),(()=>this._toggleSorting()),n)])}destroy(){this._destroySortable()}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(t){this.viewModel.listItemCreatedFunction=t}get map(){return this.viewModel.map}set map(t){this.viewModel.map=t}get tableItems(){return this.viewModel.tableItems}castVisibleElements(t){return{...C,...t}}triggerAction(t,e){return this.viewModel.triggerAction(t,e)}render(){const{visibleItems:t}=this,e=this.viewModel?.state,s={[d.hidden]:"loading"===e,[d.disabled]:"disabled"===e};return g("div",{class:this.classes(A.base,d.widget,d.panel,s)},t?.length?this._renderList():this._renderNoItems())}_renderNoItems(){return g("div",{class:A.noItems},this.messages.noItemsToDisplay)}_renderList(){const{visibleItems:t,messages:e,selectionEnabled:s}=this;return g("ul",{afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"aria-label":e.widgetLabel,bind:this,class:this.classes(A.list,A.listRoot),"data-node-ref":"_sortableNode",role:s?"listbox":void 0},t?.map((t=>this._renderItem(t))).toArray())}_renderItem(t){const{id:e,selectionEnabled:s,selectedItems:i}=this,o=`${e}_${t.uid}__title`,n=this._hasMessage(t),r={[A.itemMessage]:!!n,[A.itemSelectable]:s};if(s){const e={[j]:t.layer?.uid};return g("li",{afterCreate:this._focusListItem,afterUpdate:this._focusListItem,"aria-labelledby":o,"aria-selected":I(t,i)?"true":"false",bind:this,class:this.classes(A.item,r),"data-item":t,key:`item-with-selection-${t.uid}`,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,role:"option",tabIndex:0,...e},this._renderItemContent(t,o))}return g("li",{afterCreate:this._focusListItem,afterUpdate:this._focusListItem,"aria-labelledby":o,bind:this,class:this.classes(A.item,r),key:`item-no-selection-${t.uid}`},this._renderItemContent(t,o))}_renderActionsMenuIcon(t,e){const{messagesCommon:s}=this,i={[A.actionsMenuItemActive]:t.actionsOpen};return g("div",{"aria-controls":e,"aria-label":s.options,bind:this,class:this.classes(A.actionsMenuItem,i),"data-item":t,key:"actions-menu-toggle",onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,role:"button",tabIndex:0,title:s.options},g("span",{"aria-hidden":"true",class:m.handleHorizontal}))}_renderActionsMenu(t,e,s,i){const o=1===s&&this._getSingleActionButton(e),n=o?this._renderAction({item:t,action:o,singleAction:!0}):null,r=!o&&s?this._renderActionsMenuIcon(t,i):null;return r||o?g("div",{class:A.actionsMenu,key:"actions-menu"},n,r):null}_renderItemMessage(t){return t.error?g("div",{class:A.message,key:"esri-table-list__error",role:"alert"},g("span",{"aria-hidden":"true",class:m.noticeTriangle}),this.messages.tableError):null}_renderItemStatus(t){const{visibleElements:e}=this;if(!e.statusIndicators)return null;const{publishing:s}=t;return g("span",{class:this.classes({[A.publishing]:s}),key:"layer-item-status"})}_renderItemContent(t,e){const{id:s}=this,i=`${s}_${t.uid}_actions`,o=this._filterActions(t.actionsSections),n=this._countActions(o);return[g("div",{class:A.itemContainer,key:"list-item-container"},this._renderTitle(t,e),this._renderItemStatus(t),this._renderActionsMenu(t,o,n,i)),this._renderItemMessage(t),n?this._renderActionsSections(t,o,i):null]}_renderTitle(t,e){const{messages:s}=this,i=t.title||s.untitledTable;return g("span",{class:A.title,id:e,key:"layer-title-container"},i)}_renderActionsSections(t,e,s){const i=e.toArray().map(((e,s)=>g("ul",{class:A.actionsList,key:`${t}-action-section-${s}`},this._renderActionSection(t,e))));return g("div",{"aria-expanded":t.actionsOpen?"true":"false",class:A.actions,hidden:!t.actionsOpen||null,id:s,key:"actions-section",role:"group"},i)}_renderActionSection(t,e){return(e&&e.toArray()).map((e=>this._renderAction({item:t,action:e})))}_renderActionIcon(t){const{active:e,className:s}=t,i=this._getIconImageStyles(t),o="button"!==t.type||t.image||s?s:m.defaultAction,n={[A.actionImage]:!e&&!!i["background-image"],[m.loadingIndicator]:e,[d.rotating]:e};return o&&!e&&(n[o]=!0),g("span",{"aria-hidden":"true",class:this.classes(A.actionIcon,n),key:"action-icon",styles:i})}_renderActionTitle(t,e){return e?null:g("span",{class:A.actionTitle,key:"action-title"},t)}_renderAction(t){const{item:e,action:s,singleAction:i}=t,{active:o,disabled:n,title:r}=s,a={[A.actionsMenuItem]:i&&"button"===s.type,[A.action]:o||!i&&"toggle"!==s.type,[A.actionToggle]:!o&&"toggle"===s.type,[A.actionToggleOn]:!o&&"toggle"===s.type&&s.value,[d.disabledElement]:n},l=[this._renderActionIcon(s),this._renderActionTitle(r,i)];return i?g("div",{"aria-label":r,bind:this,classes:a,"data-action":s,"data-item":e,key:`single-action-${s.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:0,title:r??void 0},l):g("li",{"aria-label":r,bind:this,classes:a,"data-action":s,"data-item":e,key:`action-${s.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:0,title:r??void 0},l)}_hasMessage(t){return!!t.error}_filterActions(t){return t.map((t=>t.filter((t=>t.visible))))}_setVisibleItems(t){this.visibleItems=t?.filter((t=>!t.hidden&&(this.visibleElements.errors||!t.error)))}_destroySortable(){const{_sortable:t}=this;t&&t.destroy(),this._sortable=null}_toggleSorting(){const{_sortable:t,_sortableNode:e,selectionEnabled:s}=this;if(e)if(t)t.option("disabled",!s);else{const t=y.create(e,{dataIdAttr:j,group:"root-tables",fallbackTolerance:4,disabled:!s,onSort:()=>this._sortTablesToItems(t.toArray()),chosenClass:A.itemChosen});this._sortable=t}}_sortNodeCreated(t){this._sortableNode=t,this._toggleSorting()}_sortTablesToItems(t){const e=this.map?.tables;e&&e.sort(((e,s)=>{const i=t.indexOf(e.uid),o=t.indexOf(s.uid);return i>o?-1:i<o?1:0}))}_getSingleActionButton(t){return t.reduce((t=>t)).filter((t=>t&&"button"===t.type)).at(0)}_focusListItem(t){const{_focusSortUid:e}=this;if(!t||!e)return;const s=M(t);s.layer?.uid===e&&(t.focus(),this._focusSortUid=null)}_watchActionSectionChanges(t){this.addHandles(t.on("change",(()=>this.scheduleRender())),w),t.forEach((t=>this._renderOnActionChanges(t)))}_renderOnActionChanges(t){const e=()=>this.scheduleRender();"toggle"!==t.type?"slider"!==t.type?this.addHandles(i((()=>[t.className,t.image,t.id,t.title,t.visible]),e,n),S):this.addHandles(i((()=>[t.className,t.id,t.title,t.visible,t.value,t.displayValueEnabled,t.max,t.min,t.step]),e,n),S):this.addHandles(i((()=>[t.className,t.image,t.id,t.title,t.visible,t.value]),e,n),S)}_renderOnItemChanges(t){const e=()=>this.scheduleRender();this.addHandles([i((()=>[t.actionsOpen,t.title,t.error,t.publishing]),e,n),i((()=>[t.hidden,t.error]),(()=>this._setVisibleItems(this.tableItems))),t.actionsSections.on("change",e)],T),t.actionsSections.forEach((t=>this._watchActionSectionChanges(t)))}_itemsChanged(){const{tableItems:t}=this.viewModel;this._setVisibleItems(t),this.removeHandles(w),this.removeHandles(S),this.removeHandles(T),t.forEach((t=>this._renderOnItemChanges(t))),this.scheduleRender()}_countActions(t){return t.reduce(((t,e)=>t+e.length),0)}_getIconImageStyles(t){const e="esri.support.Action.ActionButton"===t.declaredClass||"esri.support.Action.ActionToggle"===t.declaredClass?t.image:null;return{"background-image":e?`url("${e}")`:void 0}}_selectionKeydown(t){const e=s(t);if(!["ArrowDown","ArrowUp"].includes(e))return void this._toggleSelection(t);t.stopPropagation();const i=t.currentTarget["data-item"],{_sortable:o,selectedItems:n}=this;if(!o)return;const r=I(i,n),a=o.toArray(),l=t.target,c=a.indexOf(l.dataset.layerUid);if(-1!==c){if("ArrowDown"===e){const t=c+1;if(t>=a.length)return;r?(v(a,c,t),o.sort(a),this._sortTablesToItems(o.toArray()),this._focusSortUid=i.layer?.uid):(this._focusSortUid=i.layer?.uid,this.scheduleRender())}if("ArrowUp"===e){const t=c-1;if(t<=-1)return;r?(v(a,c,t),o.sort(a),this._sortTablesToItems(o.toArray()),this._focusSortUid=i.layer?.uid):(this._focusSortUid=i.layer?.uid,this.scheduleRender())}}}_toggleActionsOpen(t){const e=M(t.currentTarget),{actionsOpen:s}=e,i=!s;i&&this.tableItems.forEach((t=>function(t){const{actionsOpen:e}=t;e&&(t.actionsOpen=!1)}(t))),e.actionsOpen=i,t.stopPropagation()}_triggerAction(t){const e=t.currentTarget,s=e["data-action"],i=M(e);"toggle"===s.type&&(s.value=!s.value),this.triggerAction(s,i),t.stopPropagation()}_toggleSelection(t){t.stopPropagation();const{multipleSelectionEnabled:e,selectedItems:s}=this,i=e&&(t.metaKey||t.ctrlKey),o=M(t.currentTarget),n=I(o,s),{length:r}=s;if(!i)return!r||n&&1===r?void(n?s.remove(n):s.add(o)):(s.removeAll(),void s.add(o));n?s.remove(n):s.add(o)}get test(){return{visibleItems:this.visibleItems}}};function M(t){return t["data-item"]}t([r()],$.prototype,"visibleItems",void 0),t([r()],$.prototype,"iconClass",void 0),t([r()],$.prototype,"icon",void 0),t([r()],$.prototype,"label",null),t([r()],$.prototype,"listItemCreatedFunction",null),t([r()],$.prototype,"map",null),t([r(),h("esri/widgets/TableList/t9n/TableList")],$.prototype,"messages",void 0),t([r(),h("esri/t9n/common")],$.prototype,"messagesCommon",void 0),t([r()],$.prototype,"multipleSelectionEnabled",void 0),t([r()],$.prototype,"selectionEnabled",void 0),t([r()],$.prototype,"selectedItems",void 0),t([r({readOnly:!0})],$.prototype,"tableItems",null),t([p("trigger-action"),r({type:b})],$.prototype,"viewModel",void 0),t([r()],$.prototype,"visibleElements",void 0),t([a("visibleElements")],$.prototype,"castVisibleElements",null),t([u()],$.prototype,"_toggleActionsOpen",null),t([u()],$.prototype,"_triggerAction",null),t([u()],$.prototype,"_toggleSelection",null),$=t([l("esri.widgets.TableList")],$);const E=$;export{E as default};