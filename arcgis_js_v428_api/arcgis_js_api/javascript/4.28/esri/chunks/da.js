// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(a,c){var b={name:"da",weekdays:"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),weekdaysShort:"s\u00f8n. man. tirs. ons. tors. fre. l\u00f8r.".split(" "),weekdaysMin:"s\u00f8. ma. ti. on. to. fr. l\u00f8.".split(" "),months:"januar februar marts april maj juni juli august september oktober november december".split(" "),monthsShort:"jan. feb. mar. apr. maj juni juli aug. sept. okt. nov. dec.".split(" "),weekStart:1,
ordinal:function(d){return d+"."},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"f\u00e5 sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m\u00e5ned",MM:"%d m\u00e5neder",y:"et \u00e5r",yy:"%d \u00e5r"}};c.d.locale(b,null,!0);a.default=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});