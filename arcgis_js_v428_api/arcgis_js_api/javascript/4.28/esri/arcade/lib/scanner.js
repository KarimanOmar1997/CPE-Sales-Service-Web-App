// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./assert","./character","./types"],function(l,m,f,e){const h=[[],[],[]];e.UpdateOperators.forEach(a=>h[a.length-1].push(a));e.UnaryOperators.forEach(a=>h[a.length-1].push(a));e.LogicalOperators.forEach(a=>h[a.length-1].push(a));e.AssignmentOperators.forEach(a=>h[a.length-1].push(a));e.BinaryOperators.forEach(a=>h[a.length-1].push(a));class q{constructor(a,b){this.source=a;this.errorHandler=b;this._length=a.length;this.index=0;this.lineNumber=1;this.lineStart=0;this.curlyStack=[]}saveState(){return{index:this.index,
lineNumber:this.lineNumber,lineStart:this.lineStart,curlyStack:this.curlyStack.slice()}}restoreState(a){this.index=a.index;this.lineNumber=a.lineNumber;this.lineStart=a.lineStart;this.curlyStack=a.curlyStack}eof(){return this.index>=this._length}throwUnexpectedToken(a=e.ParsingErrorCodes.UnexpectedToken){this.errorHandler.throwError({code:a,index:this.index,line:this.lineNumber,column:this.index-this.lineStart+1})}tolerateUnexpectedToken(a=e.ParsingErrorCodes.UnexpectedToken){this.errorHandler.tolerateError({code:a,
index:this.index,line:this.lineNumber,column:this.index-this.lineStart+1})}skipSingleLineComment(a){const b=[],c=this.index-a,d={start:{line:this.lineNumber,column:this.index-this.lineStart-a},end:{line:0,column:0}};for(;!this.eof();){const k=this.source.charCodeAt(this.index);++this.index;if(f.Character.isLineTerminator(k))return d&&(d.end={line:this.lineNumber,column:this.index-this.lineStart-1},b.push({multiLine:!1,start:c+a,end:this.index-1,range:[c,this.index-1],loc:d})),13===k&&10===this.source.charCodeAt(this.index)&&
++this.index,++this.lineNumber,this.lineStart=this.index,b}d&&(d.end={line:this.lineNumber,column:this.index-this.lineStart},b.push({multiLine:!1,start:c+a,end:this.index,range:[c,this.index],loc:d}));return b}skipMultiLineComment(){const a=[],b=this.index-2,c={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{line:0,column:0}};for(;!this.eof();){const d=this.source.charCodeAt(this.index);if(f.Character.isLineTerminator(d))13===d&&10===this.source.charCodeAt(this.index+1)&&++this.index,
++this.lineNumber,++this.index,this.lineStart=this.index;else{if(42===d&&47===this.source.charCodeAt(this.index+1))return this.index+=2,c&&(c.end={line:this.lineNumber,column:this.index-this.lineStart},a.push({multiLine:!0,start:b+2,end:this.index-2,range:[b,this.index],loc:c})),a;++this.index}}c&&(c.end={line:this.lineNumber,column:this.index-this.lineStart},a.push({multiLine:!0,start:b+2,end:this.index,range:[b,this.index],loc:c}));this.tolerateUnexpectedToken();return a}scanComments(){let a=[];
for(;!this.eof();){var b=this.source.charCodeAt(this.index);if(f.Character.isWhiteSpace(b))++this.index;else if(f.Character.isLineTerminator(b))++this.index,13===b&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index;else if(47===b)if(b=this.source.charCodeAt(this.index+1),47===b)this.index+=2,b=this.skipSingleLineComment(2),a=[...a,...b];else if(42===b)this.index+=2,b=this.skipMultiLineComment(),a=[...a,...b];else break;else break}return a}isKeyword(a){a=
a.toLowerCase();switch(a.length){case 2:return a===e.Keywords.If||a===e.Keywords.In;case 3:return a===e.Keywords.Var||a===e.Keywords.For;case 4:return a===e.Keywords.Else;case 5:return a===e.Keywords.Break||a===e.Keywords.While;case 6:return a===e.Keywords.Return||a===e.Keywords.Import||a===e.Keywords.Export;case 8:return a===e.Keywords.Function||a===e.Keywords.Continue;default:return!1}}codePointAt(a){let b=this.source.charCodeAt(a);55296<=b&&56319>=b&&(a=this.source.charCodeAt(a+1),56320<=a&&57343>=
a&&(b=1024*(b-55296)+a-56320+65536));return b}scanHexEscape(a){a="u"===a?4:2;let b=0;for(let c=0;c<a;++c)if(!this.eof()&&f.Character.isHexDigit(this.source.charCodeAt(this.index)))b=16*b+"0123456789abcdef".indexOf(this.source[this.index++].toLowerCase());else return null;return String.fromCharCode(b)}scanUnicodeCodePointEscape(){let a=this.source[this.index],b=0;for("}"===a&&this.throwUnexpectedToken();!this.eof();){a=this.source[this.index++];if(!f.Character.isHexDigit(a.charCodeAt(0)))break;b=16*
b+"0123456789abcdef".indexOf(a.toLowerCase())}(1114111<b||"}"!==a)&&this.throwUnexpectedToken();return f.Character.fromCodePoint(b)}getIdentifier(){const a=this.index++;for(;!this.eof();){const b=this.source.charCodeAt(this.index);if(92===b||55296<=b&&57343>b)return this.index=a,this.getComplexIdentifier();if(f.Character.isIdentifierPart(b))++this.index;else break}return this.source.slice(a,this.index)}getComplexIdentifier(){let a=this.codePointAt(this.index),b=f.Character.fromCodePoint(a);this.index+=
b.length;let c;92===a&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,c=this.scanUnicodeCodePointEscape()):(c=this.scanHexEscape("u"),null!==c&&"\\"!==c&&f.Character.isIdentifierStart(c.charCodeAt(0))||this.throwUnexpectedToken()),b=c);for(;!this.eof();){a=this.codePointAt(this.index);if(!f.Character.isIdentifierPart(a))break;c=f.Character.fromCodePoint(a);b+=c;this.index+=c.length;92===a&&(b=b.substring(0,b.length-1),
117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,c=this.scanUnicodeCodePointEscape()):(c=this.scanHexEscape("u"),null!==c&&"\\"!==c&&f.Character.isIdentifierPart(c.charCodeAt(0))||this.throwUnexpectedToken()),b+=c)}return b}octalToDecimal(a){let b="0"!==a,c="01234567".indexOf(a);!this.eof()&&f.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(b=!0,c=8*c+"01234567".indexOf(this.source[this.index++]),"0123".includes(a)&&
!this.eof()&&f.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(c=8*c+"01234567".indexOf(this.source[this.index++])));return{code:c,octal:b}}scanIdentifier(){let a;const b=this.index,c=92===this.source.charCodeAt(b)?this.getComplexIdentifier():this.getIdentifier();a=1===c.length?e.TokenType.Identifier:this.isKeyword(c)?e.TokenType.Keyword:c.toLowerCase()===e.Keywords.Null?e.TokenType.NullLiteral:c.toLowerCase()===e.Keywords.True||c.toLowerCase()===e.Keywords.False?e.TokenType.BooleanLiteral:
e.TokenType.Identifier;if(a!==e.TokenType.Identifier&&b+c.length!==this.index){const d=this.index;this.index=b;this.tolerateUnexpectedToken(e.ParsingErrorCodes.InvalidEscapedReservedWord);this.index=d}return{type:a,value:c,lineNumber:this.lineNumber,lineStart:this.lineStart,start:b,end:this.index}}scanPunctuator(){const a=this.index;let b=this.source[this.index];switch(b){case "(":case "{":"{"===b&&this.curlyStack.push("{");++this.index;break;case ".":++this.index;break;case "}":++this.index;this.curlyStack.pop();
break;case ")":case ";":case ",":case "[":case "]":case ":":case "?":case "~":++this.index;break;default:for(let c=h.length;0<c;c--)if(b=this.source.substring(this.index,this.index+c),h[c-1].includes(b)){this.index+=c;break}}this.index===a&&this.throwUnexpectedToken();return{type:e.TokenType.Punctuator,value:b,lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}}scanHexLiteral(a){let b="";for(;!this.eof()&&f.Character.isHexDigit(this.source.charCodeAt(this.index));)b+=this.source[this.index++];
0===b.length&&this.throwUnexpectedToken();f.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken();return{type:e.TokenType.NumericLiteral,value:parseInt("0x"+b,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}}scanBinaryLiteral(a){let b="";for(;!this.eof();){var c=this.source[this.index];if("0"!==c&&"1"!==c)break;b+=this.source[this.index++]}0===b.length&&this.throwUnexpectedToken();this.eof()||(c=this.source.charCodeAt(this.index),
(f.Character.isIdentifierStart(c)||f.Character.isDecimalDigit(c))&&this.throwUnexpectedToken());return{type:e.TokenType.NumericLiteral,value:parseInt(b,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}}scanOctalLiteral(a,b){let c="",d=!1;f.Character.isOctalDigit(a.charCodeAt(0))?(d=!0,c="0"+this.source[this.index++]):++this.index;for(;!this.eof()&&f.Character.isOctalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];d||0!==c.length||this.throwUnexpectedToken();
(f.Character.isIdentifierStart(this.source.charCodeAt(this.index))||f.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken();return{type:e.TokenType.NumericLiteral,value:parseInt(c,8),lineNumber:this.lineNumber,lineStart:this.lineStart,start:b,end:this.index}}scanNumericLiteral(){const a=this.index;let b=this.source[a];m.assert(f.Character.isDecimalDigit(b.charCodeAt(0))||"."===b,"Numeric literal must start with a decimal digit or a decimal point");let c="";if("."!==
b){c=this.source[this.index++];b=this.source[this.index];if("0"===c){if("x"===b||"X"===b)return++this.index,this.scanHexLiteral(a);if("b"===b||"B"===b)return++this.index,this.scanBinaryLiteral(a);if("o"===b||"O"===b)return this.scanOctalLiteral(b,a)}for(;f.Character.isDecimalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];b=this.source[this.index]}if("."===b){for(c+=this.source[this.index++];f.Character.isDecimalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];
b=this.source[this.index]}if("e"===b||"E"===b){c+=this.source[this.index++];b=this.source[this.index];if("+"===b||"-"===b)c+=this.source[this.index++];if(f.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;f.Character.isDecimalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];else this.throwUnexpectedToken()}f.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken();return{type:e.TokenType.NumericLiteral,value:parseFloat(c),
lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}}scanStringLiteral(){const a=this.index;let b=this.source[a];m.assert("'"===b||'"'===b,"String literal must starts with a quote");++this.index;let c="";for(;!this.eof();){var d=this.source[this.index++];if(d===b){b="";break}if("\\"===d)if((d=this.source[this.index++])&&f.Character.isLineTerminator(d.charCodeAt(0)))++this.lineNumber,"\r"===d&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(d){case "u":"{"===
this.source[this.index]?(++this.index,c+=this.scanUnicodeCodePointEscape()):(d=this.scanHexEscape(d),null===d&&this.throwUnexpectedToken(),c+=d);break;case "x":d=this.scanHexEscape(d);null===d&&this.throwUnexpectedToken(e.ParsingErrorCodes.InvalidHexEscapeSequence);c+=d;break;case "n":c+="\n";break;case "r":c+="\r";break;case "t":c+="\t";break;case "b":c+="\b";break;case "f":c+="\f";break;case "v":c+="\v";break;case "8":case "9":c+=d;this.tolerateUnexpectedToken();break;default:d&&f.Character.isOctalDigit(d.charCodeAt(0))?
(d=this.octalToDecimal(d),c+=String.fromCharCode(d.code)):c+=d}else if(f.Character.isLineTerminator(d.charCodeAt(0)))break;else c+=d}""!==b&&(this.index=a,this.throwUnexpectedToken());return{type:e.TokenType.StringLiteral,value:c,lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}}scanTemplate(){let a="",b=!1;const c=this.index,d="`"===this.source[c];let k=!1,n=2;for(++this.index;!this.eof();){var g=this.source[this.index++];if("`"===g){n=1;b=k=!0;break}if("$"===g){if("{"===
this.source[this.index]){this.curlyStack.push("${");++this.index;b=!0;break}a+=g}else if("\\"===g)if(g=this.source[this.index++],f.Character.isLineTerminator(g.charCodeAt(0)))++this.lineNumber,"\r"===g&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(g){case "n":a+="\n";break;case "r":a+="\r";break;case "t":a+="\t";break;case "u":if("{"===this.source[this.index])++this.index,a+=this.scanUnicodeCodePointEscape();else{const r=this.index,p=this.scanHexEscape(g);null!==
p?a+=p:(this.index=r,a+=g)}break;case "x":g=this.scanHexEscape(g);null===g&&this.throwUnexpectedToken(e.ParsingErrorCodes.InvalidHexEscapeSequence);a+=g;break;case "b":a+="\b";break;case "f":a+="\f";break;case "v":a+="\v";break;default:"0"===g?(f.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(e.ParsingErrorCodes.TemplateOctalLiteral),a+="\x00"):f.Character.isOctalDigit(g.charCodeAt(0))?this.throwUnexpectedToken(e.ParsingErrorCodes.TemplateOctalLiteral):a+=
g}else f.Character.isLineTerminator(g.charCodeAt(0))?(++this.lineNumber,"\r"===g&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,a+="\n"):a+=g}b||this.throwUnexpectedToken();d||this.curlyStack.pop();return{type:e.TokenType.Template,value:this.source.slice(c+1,this.index-n),cooked:a,head:d,tail:k,lineNumber:this.lineNumber,lineStart:this.lineStart,start:c,end:this.index}}lex(){if(this.eof())return{type:e.TokenType.EOF,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,
start:this.index,end:this.index};const a=this.source.charCodeAt(this.index);return f.Character.isIdentifierStart(a)?this.scanIdentifier():40===a||41===a||59===a?this.scanPunctuator():39===a||34===a?this.scanStringLiteral():46===a?f.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():f.Character.isDecimalDigit(a)?this.scanNumericLiteral():96===a||125===a&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():55296<=a&&57343>
a&&f.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()}}l.Scanner=q;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});