/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{substitute as t}from"../intl.js";import{e as s}from"../core/promiseUtils.js";import{watch as i}from"../core/reactiveUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import n from"./Widget.js";import r from"./FloorFilter/FloorFilterViewModel.js";import{g as a}from"../chunks/globalCss.js";import{H as c,i as h}from"../chunks/Heading.js";import{l as u}from"../chunks/legacyIcon.js";import{i as d,b as m}from"../chunks/widgetUtils.js";import{m as v}from"../chunks/messageBundle.js";import{t as p}from"../chunks/jsxFactory.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../config.js";import"../core/lang.js";import"../chunks/locale.js";import"../chunks/handleUtils.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/Logger.js";import"../chunks/messages.js";import"../core/Error.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../chunks/assets.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/Widgets.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../TimeInterval.js";import"../core/Clonable.js";import"../chunks/enumeration.js";import"./support/GoTo.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";const f="esri-floor-filter",M=`${f}__filter-menu`,g={floorFilter:f,floorFilterLayout:`${f}__layout--`,floorFilterPosition:`${f}__position--`,buttonContainer:`${f}__button-container`,buttonContainerLevels:`${f}__button-container--levels`,buttonInfo:`${f}__button-info`,buttonLabel:`${f}__button-label`,browseButton:`${f}__browse-button`,closeLevelsButton:`${f}__close-levels-button`,zoomButton:`${f}__zoom-button`,zoomButtonLevels:`${f}__zoom-button--levels`,minimizeToggleButton:`${f}__minimize-toggle-button`,levelsContainer:`${f}__levels-container`,levelButton:`${f}__level-button`,levelButtonActive:`${f}__level-button--active`,separator:`${f}__separator`,filterMenu:M,filterMenuHeader:`${M}-header`,filterMenuHeaderTextGroup:`${M}-header-text-group`,filterMenuHeaderText:`${M}-header-text`,filterMenuHeaderSubtext:`${M}-header-subtext`,filterMenuHeaderBack:`${M}-header-back`,filterMenuSearch:`${M}-search`,filterMenuSearchInput:`${M}-search-input`,filterMenuItems:`${M}-items`,filterMenuItemName:`${M}-item-name`,filterMenuSelectedItem:`${M}-item-name--selected`,filterMenuSite:`${M}-site`,filterMenuFacility:`${M}-facility`,selectedItemCircle:`${f}__selected-item-circle`},_=new Set(["ArrowUp","ArrowDown","End","Home"]);let b=class extends n{constructor(e,t){super(e,t),this._activeMenu=null,this._activeMenuIndex={levels:-1,menuItems:-1},this._baseNode=null,this._facilitiesListNode=null,this._levelsListNode=null,this._sitesListNode=null,this._searchInput=null,this.viewModel=new r,this.messages=null,this.messagesCommon=null,this.headingLevel=2,this._resizeObserver=new ResizeObserver((()=>this.scheduleRender())),this.addHandles(i((()=>this._searchInput),(()=>this._focusSearch())))}destroy(){this._resizeObserver?.disconnect()}get enabled(){return this.viewModel.enabled}set enabled(e){this.viewModel.enabled=e}get longNames(){return this.viewModel.longNames}set longNames(e){this.viewModel.longNames=e}get minimized(){return this.viewModel.minimized}set minimized(e){this.viewModel.minimized=e}get pinnedLevels(){return this.viewModel.pinnedLevels}set pinnedLevels(e){this.viewModel.pinnedLevels=e}get site(){return this.viewModel.site}set site(e){this.viewModel.site=e}get facility(){return this.viewModel.facility}set facility(e){this.viewModel.facility=e}get level(){return this.viewModel.level}set level(e){this.viewModel.level=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}updateWebDocument(e){return this.viewModel.updateWebDocument(e)}render(){const{longNames:e}=this,t=e&&this.viewModel.isNormalMode?"expanded":"collapsed",s=this._renderButtons(),i=this._renderFilterMenu(),l=p("div",{class:this.classes(g.separator)}),o=this._getComponentPosition(),n=this._getPosition(o),r="top-right"===o||"bottom-right"===o,c="top-left"===o||"bottom-left"===o,h=d(this.container),u=h&&c||!h&&r?i:s,m=h&&c||!h&&r?s:i;return p("div",{afterCreate:this._afterBaseNodeCreate,class:this.classes(g.floorFilter,a.widget,`${g.floorFilterLayout}${t}`,`${g.floorFilterPosition}${n}`),key:"floor-filter-menu"},u,this.viewModel?.filterMenuOpen?l:null,m)}_renderButtons(){const e=this._getComponentPosition(),t=[];return"top"===this._getPosition(e)?(t.push(this._renderBrowseButton()),t.push(this._renderLevelButtons()),t.push(this._renderCloseLevelsButton()),t.push(this._renderZoomButton()),t.push(this._renderCollapseToggleButton())):(t.push(this._renderCollapseToggleButton()),t.push(this._renderZoomButton()),t.push(this._renderCloseLevelsButton()),t.push(this._renderLevelButtons()),t.push(this._renderBrowseButton())),p("div",{class:this.classes(a.widget,g.buttonContainer),key:"button-container"},t)}_renderBrowseButton(){const{longNames:e,messages:t}=this;return p("button",{"aria-expanded":this.viewModel.filterMenuOpen.toString(),"aria-label":t.buttons.browse,bind:this,class:this.classes(a.widget,a.widgetButton,a.interactive,("loading"===this.viewModel.state||"disabled"===this.viewModel.state)&&a.buttonDisabled,g.browseButton,this.viewModel?.filterMenuOpen&&a.widgetButtonActive),key:"browse-button",onclick:this._toggleFilterMenu,title:t.buttons.browse,type:"button"},p("div",{class:this.classes(g.buttonInfo)},p("span",{class:this.classes(u.icon,u.urbanModel)}),p("span",{class:this.classes(g.buttonLabel)},e&&this.viewModel.isNormalMode?t.buttons.browse:null)))}_renderLevelButtons(){if(!this.viewModel?.filterFeatures?.levels?.levelsInfo||!this.facility)return null;const{facility:e,messagesCommon:s,messages:i}=this,l=this.viewModel?.getFacility(e),o=this.viewModel?.getFacilityLevels(e),n=o.map((e=>this._renderLevelButton(e)));if(!n.length)return null;const r=l&&t(i.selector.levelsLabel,{name:`"${l.name}"`});if(this._isWebScene(this.view?.map)&&n?.length>1){const t={id:`all--${e}`,facilityId:e,shortName:s.all,longName:s.all,levelNumber:null,verticalOrder:null},i=this._renderLevelButton(t);n.push(i)}return p("ul",{afterCreate:m,"aria-label":r,bind:this,class:this.classes(g.levelsContainer),"data-id":"levels","data-node-ref":"_levelsListNode",key:"levels-button-container",onkeydown:this._handleListKeydown},n)}_renderLevelButton(e){const{longNames:t}=this,{shortName:s,longName:i,id:l}=e,o=`levels--${l}`,n=this.level===l,r=t&&this.viewModel.isNormalMode?i:s;return this.viewModel.isNormalMode||n||this.viewModel.levelsExpanded?p("li",{key:o},p("button",{bind:this,class:this.classes(a.widgetButton,n?a.widgetButtonActive:null,a.interactive,g.levelButton),"data-id":l,"data-list-id":"levels",onclick:this._levelSelected,onfocus:this._onItemFocus,type:"button"},r)):null}_renderCloseLevelsButton(){if(!this.level||this.viewModel.isNormalMode||!this.viewModel.levelsExpanded)return null;const{messagesCommon:e}=this;return p("button",{"aria-label":e.close,bind:this,class:this.classes(a.widget,a.widgetButton,a.interactive,g.closeLevelsButton),key:"close-levels-button",onclick:this._closeLevels,title:e.close,type:"button"},p("div",{class:this.classes(g.buttonInfo)},p("span",{class:this.classes(u.icon,u.close)})))}_renderZoomButton(){const{longNames:e,messages:t,facility:s,site:i}=this,l=this.viewModel?.filterMenuType,o=this.viewModel?.filterMenuOpen,n=this.viewModel?.getSite(i),r=this.viewModel?.getFacility(s),c="site"===l&&o?!n:!r;return p("button",{"aria-label":t.buttons.zoomTo,bind:this,class:this.classes(a.widget,a.widgetButton,c&&a.buttonDisabled,a.interactive,this.viewModel?.getFacilityLevels(s).length>0?g.zoomButtonLevels:g.zoomButton),key:"zoom-button",onclick:this._zoomToClicked,title:t.buttons.zoomTo,type:"button"},p("div",{class:this.classes(g.buttonInfo)},p("span",{class:this.classes(u.icon,u.zoomToObject)}),p("span",{class:this.classes(g.buttonLabel)},e&&this.viewModel.isNormalMode?t.buttons.zoomTo:null)))}_renderCollapseToggleButton(){const{longNames:e,messagesCommon:t}=this,s=e?u.collapse:u.expand,i=this.classes(u.icon,s),l=e?t.collapse:t.expand;return p("button",{"aria-label":l,bind:this,class:this.classes(a.widget,a.widgetButton,a.interactive,g.minimizeToggleButton),key:"minimize-toggle-button",onclick:this._toggleCollapsed,title:l,type:"button"},p("div",{class:this.classes(g.buttonInfo)},p("span",{class:i}),p("span",{class:this.classes(g.buttonLabel)},e&&this.viewModel.isNormalMode?t.collapse:null)))}_renderFilterMenu(){return this.viewModel?.filterMenuOpen?"site"===this.viewModel?.filterMenuType?this._renderSiteFilterMenu():"facility"===this.viewModel?.filterMenuType?this._renderFacilityFilterMenu():null:null}_renderSiteFilterMenu(){const{messages:e,messagesCommon:t}=this,s=this.site?this.viewModel?.getSite(this.site)?.name:e.selector.selectSite,i=p("div",{class:this.classes(`${g.filterMenuHeader}`),key:"filter-menu-site-header"},p("div",{class:this.classes(g.filterMenuHeaderTextGroup)},p(c,{class:this.classes(g.filterMenuHeaderText),level:this.headingLevel},s)),p("button",{bind:this,class:this.classes(u.icon,u.close),onclick:this._closeClicked,title:t.close,type:"button"})),l=this._renderSearchInput(),o=this._renderSiteItems();return p("div",{class:this.classes(g.filterMenu),key:"filter-menu-site"},i,l,o)}_renderFacilityFilterMenu(){const{messages:e,messagesCommon:t,site:s}=this,i=this.viewModel?.getSite(s)?.name,l=this.facility&&this.viewModel?.getFacility(this.facility)?.name||e.selector.selectFacility,o=this.viewModel.hasMultipleSites?p("button",{bind:this,class:this.classes(g.filterMenuHeaderBack),onclick:this._backClicked,title:t.back,type:"button"},p("span",{class:this.classes(d(this.container)?u.right:u.left)})):null,n=this.viewModel.hasMultipleSites?p(c,{class:this.classes(g.filterMenuHeaderSubtext),level:h(this.headingLevel)},i):null,r=p("div",{class:this.classes(g.filterMenuHeader),key:"filter-menu-site-header"},o,p("div",{class:this.classes(g.filterMenuHeaderTextGroup)},p(c,{class:this.classes(g.filterMenuHeaderText),level:this.headingLevel},l),n),p("button",{bind:this,class:this.classes(u.icon,u.close),onclick:this._closeClicked,title:t.close,type:"button"})),a=this._renderSearchInput(),m=this._renderFacilityItems();return p("div",{class:this.classes(g.filterMenu),key:"filter-menu-facility"},r,a,m)}_renderSearchInput(){const{messagesCommon:e}=this;return p("div",{class:this.classes(g.filterMenuSearch),key:"filter-menu-search"},p("span",{class:this.classes(u.icon,u.search)}),p("input",{afterCreate:m,bind:this,class:this.classes(g.filterMenuSearchInput),"data-node-ref":"_searchInput",key:"filter-menu-search__input",oninput:this._onSearchChange,onpaste:this._onSearchChange,placeholder:e.search,value:this.viewModel.searchTerm??void 0}))}_renderBlueCircle(){return p("span",{class:this.classes(g.selectedItemCircle),key:"floor-filter__selected-item-circle"})}_renderSiteItems(){if(!this.viewModel?.filterFeatures?.sites?.sitesInfo)return null;const{messages:e}=this,t=this.viewModel.filterFeatures.sites.sitesInfo,s=this.viewModel.filterSites(t).map((e=>this._renderSiteItem(e))),i=0===s.length&&this.viewModel?.searchTerm&&p("div",{class:this.classes(a.empty)},e.noResults);return p("ul",{afterCreate:m,"aria-label":e.selector.sitesLabel,bind:this,class:this.classes(g.filterMenuItems),"data-id":"sites","data-node-ref":"_sitesListNode",key:"filter-menu-items--sites",onkeydown:this._handleListKeydown,tabIndex:-1},s,i)}_renderSiteItem(e){const{name:t,id:s}=e,i=`filter-menu-site--${s}`,l=this.site===s;return p("li",{key:i},p("button",{bind:this,class:this.classes(g.filterMenuSite),"data-id":s,"data-list-id":"sites",onclick:this._siteSelected,onfocus:this._onItemFocus,type:"button"},l?this._renderBlueCircle():null,p("span",{class:this.classes(l?g.filterMenuSelectedItem:g.filterMenuItemName)},t),p("span",{class:this.classes(d(this.container)?u.left:u.right)})))}_renderFacilityItems(){if(!this.viewModel?.filterFeatures?.facilities?.facilitiesInfo)return null;const{messages:e,site:s}=this,i=this.viewModel.getSite(s),l=this.viewModel.filterFeatures.facilities.facilitiesInfo,o=this.viewModel.filterFacilities(l).map((e=>this._renderFacilityItem(e))),n=0===o.length&&this.viewModel?.searchTerm&&p("div",{class:this.classes(a.empty)},e.noResults),r=i?t(e.selector.siteFacilitiesLabel,{name:`"${i.name}"`}):e.selector.facilitiesLabel;return p("ul",{afterCreate:m,"aria-label":r,bind:this,class:this.classes(g.filterMenuItems),"data-id":"facilities","data-node-ref":"_facilitiesListNode",key:"filter-menu-items--facilities",onkeydown:this._handleListKeydown,tabIndex:-1},o,n)}_renderFacilityItem(e){const{name:t,id:s}=e,i=`filter-menu-facility--${s}`,l=this.facility===s;return p("li",{key:i},p("button",{bind:this,class:this.classes(g.filterMenuFacility),"data-id":s,"data-list-id":"facilities",onclick:this._facilitySelected,onfocus:this._onItemFocus,type:"button"},l?this._renderBlueCircle():null,p("span",{class:this.classes(l?g.filterMenuSelectedItem:g.filterMenuItemName)},t)))}_afterBaseNodeCreate(e){this._baseNode&&this._resizeObserver?.unobserve(this._baseNode),this._baseNode=e,this._resizeObserver?.observe(this._baseNode)}_toggleCollapsed(){this.longNames=!this.longNames}_toggleFilterMenu(){const e=this.viewModel?.filterMenuOpen??!1;this.viewModel.filterMenuOpen=!e}_setFilterMenuType(e){this.viewModel.filterMenuType=e}_zoomToClicked(){if(this.site&&"site"===this.viewModel?.filterMenuType&&this.viewModel?.filterMenuOpen){const e=this.viewModel?.getSite(this.site);this.viewModel.goTo(e)}else if(this.facility){const e=this.viewModel?.getFacility(this.facility);this.viewModel.goTo(e)}else if(this.site){const e=this.viewModel?.getSite(this.site);this.viewModel.goTo(e)}}_onSearchChange(e){const t=e.target;""===t.value?this.viewModel.searchTerm=null:t.value&&this.viewModel?.searchTerm!==t.value&&(this.viewModel.searchTerm=t.value)}_closeClicked(){this.viewModel.searchTerm=null,this.viewModel.filterMenuOpen=!1}_backClicked(){this._setFilterMenuType("site"),this.viewModel.searchTerm=null}_siteSelected(e){const t=e.currentTarget.getAttribute("data-id"),s=this.viewModel.getSite(t);let i=!1;this.site!==t&&(this.facility=null,this.level=null,i=!0,this.viewModel.levelsExpanded=!1),this.site=t,this.viewModel.searchTerm=null,this._setFilterMenuType("facility"),this.viewModel.goTo(s),i&&this.viewModel.setFloors(null)}_facilitySelected(e){const t=e.currentTarget.getAttribute("data-id"),s=this.viewModel.getFacility(t);let i=!1;if(this.facility!==t){if("base-floors"===this.viewModel.filterMode){const e=this.viewModel?.getBaseLevel(s);this.level=e?e.id:null}else this.level=null;i=!0,this.viewModel.levelsExpanded=!1}if(this.facility=t,this.viewModel.goTo(s),i){const e=this.viewModel.getLevel(this.level);this.viewModel.setFloors(e)}if(!this.viewModel.isNormalMode){const e=this.viewModel.getFacilityLevels(t);e?.length>1&&(this.viewModel.levelsExpanded=!0)}setTimeout((()=>this._focusActiveLevel()),50)}_levelSelected(e){const t=e.currentTarget.getAttribute("data-id");this.level=t}_closeLevels(){this.viewModel.levelsExpanded=!1}_isWebScene(e){return"esri.WebScene"===e?.declaredClass}_getComponentPosition(){return null!=this.container?this.view?.ui?.getPosition(this.container):null}_getPosition(e){switch(e){case"bottom-right":case"bottom-left":return"bottom";default:return"top"}}_handleListKeydown(e){const t=e.currentTarget.getAttribute("data-id");let i=null;"sites"===t||"facilities"===t?(this._activeMenu!==t&&(this._activeMenuIndex.menuItems=-1),this._activeMenu=t,i="menuItems"):"levels"===t&&(i="levels");const l="sites"===t?this._sitesListNode:"facilities"===t?this._facilitiesListNode:"levels"===t?this._levelsListNode:null,o=s(e),n="Tab"===o,r=_.has(o);r&&e.preventDefault();const a=l?.getElementsByTagName("li");a&&0!==a.length&&(r||n)&&this._handleItemNavigation(o,e.shiftKey,a,n,i)}_handleItemNavigation(e,t,s,i,l){if(!l)return;this._activeMenuIndex[l]===s.length&&this._activeMenuIndex[l]--,-1===this._activeMenuIndex[l]&&this._activeMenuIndex[l]++;const o=this._activeMenuIndex[l];switch(e){case"Home":this._activeMenuIndex[l]=0;break;case"End":this._activeMenuIndex[l]=s.length-1;break;case"ArrowUp":this._activeMenuIndex[l]=this._activeMenuIndex[l]<=0?s.length-1:this._activeMenuIndex[l]-1;break;case"ArrowDown":this._activeMenuIndex[l]=this._activeMenuIndex[l]===s.length-1?0:this._activeMenuIndex[l]+1}if("Tab"===e&&t&&this._activeMenuIndex[l]>=0&&this._activeMenuIndex[l]--,"Tab"===e&&!t&&this._activeMenuIndex[l]<s.length&&this._activeMenuIndex[l]++,o!==this._activeMenuIndex[l]&&this._activeMenuIndex[l]>-1&&this._activeMenuIndex[l]<s.length&&!i){const e=s[this._activeMenuIndex[l]].getElementsByTagName("button"),t=1===e?.length?e[0]:null;t?.focus()}}_focusSearch(){this._searchInput?.focus()}_focusActiveLevel(){const{level:e}=this,t=this._levelsListNode,s=t?.getElementsByTagName("li");if(!e||!t||!s)return;const i=this._facilitiesListNode?.getElementsByTagName("li");this._activeMenuIndex.menuItems=i?i.length-1:-1;const l=[];for(let e=0;e<s.length;e++){const t=s[e].getElementsByTagName("button");1===t?.length&&l.push(t[0])}l.forEach(((t,s)=>{t.getAttribute("data-id")===e&&(t.focus(),this._activeMenuIndex.levels=s)}))}_onItemFocus(e){const t=e.currentTarget,s=t.getAttribute("data-list-id"),i=t.getAttribute("data-id"),l="sites"===s?this._sitesListNode:"facilities"===s?this._facilitiesListNode:"levels"===s?this._levelsListNode:null;if(!l)return;const o=l?.getElementsByTagName("li");if(!o)return;const n=[];Array.from(o).forEach((e=>{const t=e.getElementsByTagName("button");1===t?.length&&n.push(t[0])}));let r=null;switch(s){case"sites":case"facilities":r="menuItems";break;case"levels":r="levels"}if(!r)return;const a=r;n.forEach(((e,t)=>{e.getAttribute("data-id")===i&&this._activeMenuIndex[a]!==t&&(this._activeMenuIndex[a]=t)}))}};e([l()],b.prototype,"_searchInput",void 0),e([l()],b.prototype,"enabled",null),e([l()],b.prototype,"longNames",null),e([l()],b.prototype,"minimized",null),e([l()],b.prototype,"pinnedLevels",null),e([l()],b.prototype,"site",null),e([l()],b.prototype,"facility",null),e([l()],b.prototype,"level",null),e([l()],b.prototype,"view",null),e([l({type:r})],b.prototype,"viewModel",void 0),e([l(),v("esri/widgets/FloorFilter/t9n/FloorFilter")],b.prototype,"messages",void 0),e([l(),v("esri/t9n/common")],b.prototype,"messagesCommon",void 0),e([l()],b.prototype,"goToOverride",null),e([l()],b.prototype,"headingLevel",void 0),b=e([o("esri.widgets.FloorFilter")],b);const w=b;export{w as default};
