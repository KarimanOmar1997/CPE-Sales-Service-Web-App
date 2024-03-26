/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Collection.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/widgetUtils.js";import{t as i}from"../../chunks/jsxFactory.js";import{V as r}from"../../chunks/ValuePickerBaseComponent.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../Widget.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/projector.js";import"../../chunks/dom.js";import"../../chunks/index.js";import"../../chunks/legacyIcon.js";let c=class extends r{constructor(t,s){super(t,s),this.collection=null,this.type="collection"}get canNext(){return!(!this.collection?.length||!this.viewModel)&&this.collection.at(-1)!==this.viewModel.values?.[0]}get canPlay(){return null!=this.viewModel&&!!this.collection?.length}get canPrevious(){return!(!this.collection?.length||!this.viewModel)&&this.collection.at(0)!==this.viewModel.values?.[0]}render(){return i("div",null)}animate(t){this._step(1,t)}next(){this._step(1)}previous(){this._step(-1)}_step(t,s=!1){if(!this.viewModel||!this.collection?.length)return;if(!this.viewModel.values)return void(this.viewModel.values=[this.collection.at(0)]);if(!this.collection.includes(this.viewModel.values[0]))return void(this.viewModel.values=[this.collection.at(0)]);const o=this.collection.indexOf(this.viewModel.values[0])+t;o<0||o>=this.collection.length?this.viewModel.loop||s?this.viewModel.values=[this.collection.at(1===t?0:-1)]:"playing"===this.viewModel.state&&this.viewModel.pause():this.viewModel.values=[this.collection.at(o)]}};t([o()],c.prototype,"canNext",null),t([o()],c.prototype,"canPlay",null),t([o()],c.prototype,"canPrevious",null),t([o({type:s})],c.prototype,"collection",void 0),t([o()],c.prototype,"type",void 0),c=t([e("esri.widgets.ValuePicker.ValuePickerCollection")],c);const l=c;export{l as default};
