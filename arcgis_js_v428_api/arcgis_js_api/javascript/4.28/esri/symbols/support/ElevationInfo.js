// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./FeatureExpressionInfo ./unitConversionUtils".split(" "),function(d,e,b,l,g,f,u,v,m,n,p,k,q){var h;f=e.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",
relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"});e=new e.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});b=h=class extends b.JSONSupport{constructor(a){super(a);this.offset=null}readFeatureExpressionInfo(a,c){if(null!=a)return a;if(c.featureExpression&&0===c.featureExpression.value)return{expression:"0"}}writeFeatureExpressionInfo(a,c,r,t){c[r]=a.write({},t);"0"===a.expression&&(c.featureExpression={value:0})}get mode(){const {offset:a,
featureExpressionInfo:c}=this;return this._isOverridden("mode")?this._get("mode"):null!=a||c?"relative-to-ground":"on-the-ground"}set mode(a){this._override("mode",a)}set unit(a){this._set("unit",a)}write(a,c){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(a,c):null}clone(){return new h({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(a){return this.mode===a.mode&&
this.offset===a.offset&&this.unit===a.unit&&l.equalsMaybe(this.featureExpressionInfo,a.featureExpressionInfo)}};d.__decorate([g.property({type:k,json:{write:!0}})],b.prototype,"featureExpressionInfo",void 0);d.__decorate([m.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],b.prototype,"readFeatureExpressionInfo",null);d.__decorate([p.writer("featureExpressionInfo",{featureExpressionInfo:{type:k},"featureExpression.value":{type:[0]}})],b.prototype,"writeFeatureExpressionInfo",
null);d.__decorate([g.property({type:f.apiValues,nonNullable:!0,json:{type:f.jsonValues,read:f.read,write:{writer:f.write,isRequired:!0}}})],b.prototype,"mode",null);d.__decorate([g.property({type:Number,json:{write:!0}})],b.prototype,"offset",void 0);d.__decorate([g.property({type:q.supportedUnits,json:{type:String,read:e.read,write:e.write}})],b.prototype,"unit",null);return b=h=d.__decorate([n.subclass("esri.layers.support.ElevationInfo")],b)});