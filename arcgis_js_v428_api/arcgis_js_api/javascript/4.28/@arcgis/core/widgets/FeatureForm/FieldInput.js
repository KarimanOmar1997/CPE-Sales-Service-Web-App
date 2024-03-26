/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Error.js";import{watch as i,sync as s}from"../../core/reactiveUtils.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import n,{C as o}from"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import{g as a,h as u,j as p,isFieldVisibleByDefault as m,getLowerCaseEditTrackingFields as d,isNumericField as c,isStringField as h,isTimeOnlyField as y,getFieldRange as f,t as g,k as j,l as b,TypeValidationError as x,m as v,NumericRangeValidationError as E,v as k,validateFieldValue as _}from"../../layers/support/fieldUtils.js";import{i as V}from"../../chunks/utils2.js";import{b as w}from"../../chunks/featureUtils.js";import T from"./EditableInput.js";import{p as F,q as U,d as D,r as A,s as N,t as O,L as I}from"../../chunks/featureFormUtils.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils3.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"./InputBase.js";import"../../chunks/compilerUtils.js";var R;!function(e){e.Text="text",e.Number="number",e.Date="date",e.Unsupported="unsupported"}(R||(R={}));const S="__internal-type-based-coded-value-domain__";let L=class extends T{constructor(e){super(e),this._storedValue=null,this.error=null,this.preservesValueWhenHidden=!0,this.field=null,this.group=null,this.requiredExpressionExecutor=null,this.type="field",this._fieldInputWasVisibleDuringLifetime=!1,this.valueExpressionExecutor=null}initialize(){this.addHandles(i((()=>this.feature),(()=>this._fieldInputWasVisibleDuringLifetime=!1),s))}get _dateFormRange(){const{element:e,field:t}=this;if("date"!==this.dataType)return{};const i=e?.domain?a(t,e.domain):null;if(!e?.input)return i??{};const s=e.input,{type:r}=s;let l={};if("date-picker"!==r&&"time-picker"!==r&&"datetimeoffset-picker"!==r||(l=u(t,s.max,s.min)),"datetime-picker"===r){const{max:e,min:t}=s;l={max:null!=e&&M(e)?e.getTime():null,min:null!=t&&M(t)?t.getTime():null}}const{max:n,min:o}=l;if(i){const{max:e,min:t}=i,s=p(e)&&(null==n||null!=n&&e<n),r=p(t)&&(null==o||null!=o&&t>o);return{max:s?e:n??null,min:r?t:o??null,rawMax:s?i.rawMax:l?.rawMax??null,rawMin:r?i.rawMin:l?.rawMin??null}}return{min:o,max:n,rawMax:l?.rawMax??null,rawMin:l?.rawMin??null}}get _dateRange(){const{_dateFormRange:e,field:t}=this;if("date"!==this.dataType)return{};const i=a(t);if(!i)return e;const{max:s,min:r,rawMax:l,rawMin:n}=e;if("date"===t.type){const{max:e,min:t}=i;return{max:p(s)&&(null===e||null!=e&&s<e)?s:e??null,min:p(r)&&(null===t||null!=t&&r>t)?r:t??null}}if("date-only"===t.type||"time-only"===t.type||"timestamp-offset"===t.type){const{max:e,min:t,rawMax:o,rawMin:a}=i,u=p(s)&&l&&(null==e||s<e);return{max:u?s:e,min:p(r)&&n&&(null==t||r>t)?r:t,rawMax:u?l:o,rawMin:u?n:a}}return{max:null,min:null}}get _configAllowsEdits(){const{element:e,layer:t,name:i}=this;if(null!=e)return e.editableExpression?!!this.evaluatedEditableExpression:!1!==e.editable;if(t?.userHasUpdateItemPrivileges)return!0;const s=t&&"popupTemplate"in t?t?.popupTemplate?.fieldInfos?.find((({fieldName:e})=>e===i)):null;return s?.isEditable??!0}get _layerAndFieldAllowEdits(){return this.layerAllowsEdits&&this.field?.editable}get _isVisibleByDefault(){const{field:e,layer:t}=this;return!!e?.visible&&m(e,t)}get _isEditTrackingField(){return d(this.layer).includes(this.name?.toLowerCase())}get _shouldUseValueExpression(){return this._layerAndFieldAllowEdits&&!this._configAllowsEdits&&null!=this.valueExpressionExecutor}get _isSubtypeField(){const{layer:e}=this;if(e&&"subtypeField"in e){const{subtypeField:t,fieldsIndex:i}=e;return(i.get(t)?.name??t)===this.name}return!1}get test(){return{_isSubtypeField:this._isSubtypeField}}get dataType(){const{field:e}=this;return c(e)?R.Number:h(e)?R.Text:V(e)||y(e)?R.Date:R.Unsupported}get dateDataType(){if(this.dataType===R.Date)return"date"!==this.field.type?"string":"number"}get description(){const{element:e,feature:t,layer:i,timeZone:s}=this,r=e?.description;return null!=i&&null!=r?F({label:r,attributes:t.attributes,fieldsIndex:i.fieldsIndex,timeZone:s}):r}get domain(){const{layer:e}=this,{typeFieldName:t,types:i}=U(e);if(this._isSubtypeField&&"subtypes"in e&&e.subtypes)return new n({name:S,codedValues:e.subtypes.map((({code:e,name:t})=>new o({code:e,name:t})))});if(t===this.name&&null==this.field.domain)return new n({name:S,codedValues:i.map((({code:e,name:t})=>new o({code:e,name:t})))});const{feature:s}=this,r=e?.getFieldDomain(this.name,{feature:s}),l=this.element?.domain;return null!=l&&this._isDomainCompatible(l)?l:r}get editable(){return!!this._layerAndFieldAllowEdits&&(this.evaluatedEditableExpression??this._configAllowsEdits)}get evaluatedRequiredExpression(){const{requiredExpressionExecutor:e}=this;return null!=e?!!e.lastEvaluatedValue:null}get evaluatedValueExpression(){const{valueExpressionExecutor:e}=this;return null!=e?e.lastEvaluatedValue:null}get hint(){return this.element?.hint}get includeDate(){return!(this.dataType!==R.Date||"time-only"===this.field.type)}get includeTime(){const{element:e,field:t}=this;if(this.dataType!==R.Date)return!1;if("time-only"===t.type)return!0;if("date-only"===t.type)return!1;const i="datetime-picker"===e?.input?.type?e.input.includeTime:void 0;return void 0===i||i}get includeTimeOffset(){if("timestamp-offset"!==this.field.type)return!1;const e=this.element?.input;return!e||"datetimeoffset-picker"===e.type&&e.includeTimeOffset}set initialFeature(e){this._set("initialFeature",e),this.notifyChange("valid")}get inputType(){return this.element?.input?.type}get hasInvalidSwitchValue(){const{element:e}=this,t=D(e,"switch")?e.input:null;return!t||A(this.value,t)}get isRelationshipKeyField(){const{field:e,layer:t}=this;return w(t)&&!!t.relationships?.some((t=>t.keyField===e.name))}get label(){const{element:e,feature:t,field:i,layer:s,timeZone:r}=this;return null!=s&&null!=e?.label?F({label:e.label,attributes:t.attributes,fieldsIndex:s.fieldsIndex,timeZone:r}):e?.label||i.alias||i.name}get maxLength(){if(this.dataType===R.Date)return-1;const{field:e,element:t}=this,i=e?.length??-1,s=N(t)?t.input.maxLength:NaN;return null!=s&&!isNaN(s)&&s>=-1&&(-1===i||s<=i)?s:i}get minLength(){if(this.dataType===R.Date)return-1;const{field:e,element:t}=this,i=e?.length??-1,s=N(t)?t.input.minLength:NaN;return null!=s&&!isNaN(s)&&s>=-1&&(-1===i||s<=i)?s:-1}get name(){return this.field?.name}get range(){const{domain:e,element:t,field:i}=this;if("date"===this.dataType)return this._dateRange;const s=a(i,e)||f(i,e),r=s?.max===Number.MAX_VALUE?null:s?.max??null,l=s?.min===-Number.MAX_VALUE?null:s?.min??null;if(!t?.domain||"range"!==t.domain.type)return{max:r,min:l};const{max:n,min:o}=a(i)||{};return{max:null!=n&&(null===r||null!=r&&n<r)?n:r,min:null!=o&&(null===l||null!=l&&o>l)?o:l}}get required(){const{editable:e,evaluatedRequiredExpression:t,field:i,visible:s,_isSubtypeField:r}=this;return!!e&&(!1===i?.nullable||!!r||!(!s||null==t)&&t)}set required(e){this._overrideIfSome("required",e)}get showNoValueOptionEnabled(){const{element:e}=this;return!this.required&&(!O(e)||e.input.showNoValueOption)}get showNoValueLabel(){const{element:e}=this;return O(e)?e.input.noValueOptionLabel:null}get submittable(){const{field:e,required:t,valid:i,value:s}=this;return!(t&&null==s||!i&&this.initialFeature.getAttribute(e.name)!==s)}get timeResolution(){const e=this.element?.input;if(e&&("datetimeoffset-picker"===e.type||"time-picker"===e.type))return e.timeResolution??"minutes"}get timeStep(){return null!=this.timeResolution?g.get(this.timeResolution):void 0}get updating(){const{editableExpressionExecutor:e,valueExpressionExecutor:t,visibilityExpressionExecutor:i,preservesValueWhenHidden:s}=this;return null!=t&&t.updating||null!=e&&e.updating||!1===s&&null!=i&&i.updating}get valid(){const e=this.editable?this._validate():null;return this._set("error",e),null===e}get value(){if(this._fieldInputWasVisibleDuringLifetime=this._fieldInputWasVisibleDuringLifetime||this.visible&&!1!==this.group?.visible,!1===this.preservesValueWhenHidden&&this._fieldInputWasVisibleDuringLifetime&&(!1===this.visibilityExpressionExecutor?.lastEvaluatedValue||!1===this.group?.visibilityExpressionExecutor?.lastEvaluatedValue))return null!==this._storedValue&&this.set("_storedValue",null),null;if(this._shouldUseValueExpression){const e=this.evaluatedValueExpression;return this.dataType===R.Date?this._arcadeOutputToDateFieldValue(e):null!=e&&"object"==typeof e?e.toString():e}return this._storedValue}set value(e){this.notifyChange("evaluatedVisibilityExpression"),this.set("_storedValue",e)}get visible(){return!this._isEditTrackingField&&(null!=this.evaluatedVisibilityExpression?this.evaluatedVisibilityExpression:null!=this.element||this._isVisibleByDefault)}_arcadeOutputToDateFieldValue(e){const i=this.field.type;try{if("object"==typeof e){if(null===e)throw new t("feature-form:invalid-date-value");if(j(e))return b(e,i);if("getTime"in e&&"function"==typeof e.getTime&&"date"===i)return parseInt(e.getTime(),10);if("date-only"===i||"time-only"===i||"timestamp-offset"===i)return e.toString()}else{if("string"==typeof e)return"date"===i?parseInt(e,10):e;if("number"==typeof e&&"date"===i)return e}throw new t("feature-form:invalid-date-value")}catch{return"date"===i?NaN:""}}_isDomainCompatible(e){const{field:t}=this;if("coded-value"===e?.type){const i=typeof e.codedValues[0].code;if("string"===i&&h(t)||"number"===i&&c(t))return!0}return!!("range"===e?.type&&c(t)||V(t)||y(t))}_validate(){const{dataType:e,domain:t,field:i,initialFeature:s,minLength:r,range:l,required:n,valid:o,value:a}=this,u=n&&null==a,p=void 0!==o;return!u&&s.getAttribute(i.name)===a&&p?null:u?x.INVALID_TYPE:"text"===e&&r>-1&&"string"==typeof a&&a.length<r?I.TOO_SHORT:"date"!==e||null==a||v({type:i.type,range:l,value:a})?t?null!==a||n?k(i,a):null:_(i,a):E.OUT_OF_RANGE}};e([r()],L.prototype,"_dateFormRange",null),e([r()],L.prototype,"_dateRange",null),e([r()],L.prototype,"_storedValue",void 0),e([r()],L.prototype,"_configAllowsEdits",null),e([r()],L.prototype,"_layerAndFieldAllowEdits",null),e([r()],L.prototype,"_isVisibleByDefault",null),e([r()],L.prototype,"_isEditTrackingField",null),e([r()],L.prototype,"_shouldUseValueExpression",null),e([r()],L.prototype,"_isSubtypeField",null),e([r()],L.prototype,"dataType",null),e([r()],L.prototype,"dateDataType",null),e([r()],L.prototype,"description",null),e([r()],L.prototype,"domain",null),e([r()],L.prototype,"editable",null),e([r({readOnly:!0})],L.prototype,"error",void 0),e([r({constructOnly:!0})],L.prototype,"preservesValueWhenHidden",void 0),e([r()],L.prototype,"evaluatedRequiredExpression",null),e([r()],L.prototype,"evaluatedValueExpression",null),e([r()],L.prototype,"field",void 0),e([r()],L.prototype,"group",void 0),e([r({readOnly:!0})],L.prototype,"hint",null),e([r()],L.prototype,"includeDate",null),e([r()],L.prototype,"includeTime",null),e([r()],L.prototype,"includeTimeOffset",null),e([r()],L.prototype,"initialFeature",null),e([r({readOnly:!0})],L.prototype,"inputType",null),e([r()],L.prototype,"hasInvalidSwitchValue",null),e([r()],L.prototype,"isRelationshipKeyField",null),e([r()],L.prototype,"label",null),e([r()],L.prototype,"maxLength",null),e([r()],L.prototype,"minLength",null),e([r({readOnly:!0})],L.prototype,"name",null),e([r()],L.prototype,"range",null),e([r()],L.prototype,"required",null),e([r()],L.prototype,"requiredExpressionExecutor",void 0),e([r()],L.prototype,"showNoValueOptionEnabled",null),e([r()],L.prototype,"submittable",null),e([r()],L.prototype,"timeResolution",null),e([r()],L.prototype,"timeStep",null),e([r({readOnly:!0})],L.prototype,"type",void 0),e([r()],L.prototype,"updating",null),e([r()],L.prototype,"valid",null),e([r({value:null})],L.prototype,"value",null),e([r()],L.prototype,"valueExpressionExecutor",void 0),e([r()],L.prototype,"visible",null),L=e([l("esri.widgets.FeatureForm.FieldInput")],L);const M=e=>e&&!Number.isNaN(e.valueOf()),P=L;export{P as default};
