<<<<<<< Updated upstream
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});
jQuery.extend({
    createUploadIframe: function (id, uri) {
        //create frame
        var frameId = 'jUploadFrame' + id;
        var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
        if (window.ActiveXObject) {
            if (typeof uri == 'boolean') {
                iframeHtml += ' src="' + 'javascript:false' + '"';

            }
            else if (typeof uri == 'string') {
                iframeHtml += ' src="' + uri + '"';

            }
        }
        iframeHtml += ' />';
        jQuery(iframeHtml).appendTo(document.body);

        return jQuery('#' + frameId).get(0);
    },
    createUploadForm: function (id, fileElementId, data, fileElement) {
        //create form	
        var formId = 'jUploadForm' + id;
        var fileId = 'jUploadFile' + id;
        var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
        if (data) {
            for (var i in data) {
                jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
            }
        }
        var oldElement;
        if (fileElement == null)
            oldElement = jQuery('#' + fileElementId);
        else
            oldElement = fileElement;

        var newElement = jQuery(oldElement).clone();
        jQuery(oldElement).attr('id', fileId);
        jQuery(oldElement).before(newElement);
        jQuery(oldElement).appendTo(form);

        //set attributes
        jQuery(form).css('position', 'absolute');
        jQuery(form).css('top', '-1200px');
        jQuery(form).css('left', '-1200px');
        jQuery(form).appendTo('body');
        return form;
    },

    ajaxFileUpload: function (s) {
        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout		
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        var id = new Date().getTime()
        var form = jQuery.createUploadForm(id, s.fileElementId, (typeof(s.data) == 'undefined' ? false : s.data), s.fileElement);
        var io = jQuery.createUploadIframe(id, s.secureuri);
        var frameId = 'jUploadFrame' + id;
        var formId = 'jUploadForm' + id;
        // Watch for a new set of requests
        if (s.global && !jQuery.active++) {
            jQuery.event.trigger("ajaxStart");
        }
        var requestDone = false;
        // Create the request object
        var xml = {}
        if (s.global)
            jQuery.event.trigger("ajaxSend", [xml, s]);
        // Wait for a response to come back
        var uploadCallback = function (isTimeout) {
            var io = document.getElementById(frameId);
            try {
                if (io.contentWindow) {
                    xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML : null;
                    xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document;

                } else if (io.contentDocument) {
                    xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML : null;
                    xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentDocument.document;
                }
            } catch (e) {
                jQuery.handleError(s, xml, null, e);
            }
            if (xml || isTimeout == "timeout") {
                requestDone = true;
                var status;
                try {
                    status = isTimeout != "timeout" ? "success" : "error";
                    // Make sure that the request was successful or notmodified
                    if (status != "error") {
                        // process the data (runs the xml through httpData regardless of callback)
                        var data = jQuery.uploadHttpData(xml, s.dataType);
                        // If a local callback was specified, fire it and pass it the data
                        if (s.success)
                            s.success(data, status);

                        // Fire the global callback
                        if (s.global)
                            jQuery.event.trigger("ajaxSuccess", [xml, s]);
                    } else
                        jQuery.handleError(s, xml, status);
                } catch (e) {
                    status = "error";
                    jQuery.handleError(s, xml, status, e);
                }

                // The request was completed
                if (s.global)
                    jQuery.event.trigger("ajaxComplete", [xml, s]);

                // Handle the global AJAX counter
                if (s.global && !--jQuery.active)
                    jQuery.event.trigger("ajaxStop");

                // Process result
                if (s.complete)
                    s.complete(xml, status);

                jQuery(io).unbind()

                setTimeout(function () {
                    try {
                        jQuery(io).remove();
                        jQuery(form).remove();

                    } catch (e) {
                        jQuery.handleError(s, xml, null, e);
                    }

                }, 100)

                xml = null

            }
        }
        // Timeout checker
        if (s.timeout > 0) {
            setTimeout(function () {
                // Check to see if the request is still happening
                if (!requestDone) uploadCallback("timeout");
            }, s.timeout);
        }
        try {

            var form = jQuery('#' + formId);
            jQuery(form).attr('action', s.url);
            jQuery(form).attr('method', 'POST');
            jQuery(form).attr('target', frameId);
            if (form.encoding) {
                jQuery(form).attr('encoding', 'multipart/form-data');
            }
            else {
                jQuery(form).attr('enctype', 'multipart/form-data');
            }
            jQuery(form).submit();

        } catch (e) {
            jQuery.handleError(s, xml, null, e);
        }

        jQuery('#' + frameId).load(uploadCallback);
        return {
            abort: function () {
                try {
                    jQuery('#' + frameId).remove();
                    jQuery(form).remove();
                }
                catch (e) {
                }
            }
        };
    },

    uploadHttpData: function (r, type) {
        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;

        // If the type is "script", eval it in global context
        if (type == "script")
            jQuery.globalEval(data);
        // Get the JavaScript object, if JSON is used.
        if (type == "json")
            eval("data = " + data);
        // evaluate scripts within html
        if (type == "html")
            jQuery("<div>").html(data).evalScripts();

        return data;
    },

    handleError: function (s, xml, status, e) {
        // If a local callback was specified, fire it
        if (s.error)
            s.error(xml, status, e);

        // Fire the global callback
        if (s.global)
            jQuery.event.trigger("ajaxError", [xml, s, e]);
    }
});
// Copyright 2012, Terry Tai, Pragmatic.ly
// https://pragmatic.ly/
// Licensed under the MIT license.
// https://github.com/pragmaticly/smart-time-ago/blob/master/LICENSE
//
// Generated by CoffeeScript 1.5.0
(function() {
    var TimeAgo;

    TimeAgo = (function() {

        function TimeAgo(element, options) {
            this.startInterval = 60000;
            this.init(element, options);
        }

        TimeAgo.prototype.init = function(element, options) {
            this.$element = $(element);
            this.options = $.extend({}, $.fn.timeago.defaults, options);
            this.updateTime();
            return this.startTimer();
        };

        TimeAgo.prototype.startTimer = function() {
            var self;
            self = this;
            return this.interval = setInterval((function() {
                return self.refresh();
            }), this.startInterval);
        };

        TimeAgo.prototype.stopTimer = function() {
            return clearInterval(this.interval);
        };

        TimeAgo.prototype.restartTimer = function() {
            this.stopTimer();
            return this.startTimer();
        };

        TimeAgo.prototype.refresh = function() {
            this.updateTime();
            return this.updateInterval();
        };

        TimeAgo.prototype.updateTime = function() {
            var self;
            self = this;
            return this.$element.findAndSelf(this.options.selector).each(function() {
                var timeAgoInWords;
                timeAgoInWords = self.timeAgoInWords($(this).attr(self.options.attr));
                return $(this).html(timeAgoInWords);
            });
        };

        TimeAgo.prototype.updateInterval = function() {
            var filter, newestTime, newestTimeInMinutes, newestTimeSrc;
            if (this.$element.findAndSelf(this.options.selector).length > 0) {
                if (this.options.dir === "up") {
                    filter = ":first";
                } else if (this.options.dir === "down") {
                    filter = ":last";
                }
                newestTimeSrc = this.$element.findAndSelf(this.options.selector).filter(filter).attr(this.options.attr);
                newestTime = this.parse(newestTimeSrc);
                newestTimeInMinutes = this.getTimeDistanceInMinutes(newestTime);
                if (newestTimeInMinutes >= 0 && newestTimeInMinutes <= 44 && this.startInterval !== 60000) {
                    this.startInterval = 60000;
                    return this.restartTimer();
                } else if (newestTimeInMinutes >= 45 && newestTimeInMinutes <= 89 && this.startInterval !== 60000 * 22) {
                    this.startInterval = 60000 * 22;
                    return this.restartTimer();
                } else if (newestTimeInMinutes >= 90 && newestTimeInMinutes <= 2519 && this.startInterval !== 60000 * 30) {
                    this.startInterval = 60000 * 30;
                    return this.restartTimer();
                } else if (newestTimeInMinutes >= 2520 && this.startInterval !== 60000 * 60 * 12) {
                    this.startInterval = 60000 * 60 * 12;
                    return this.restartTimer();
                }
            }
        };

        TimeAgo.prototype.timeAgoInWords = function(timeString) {
            var absolutTime;
            absolutTime = this.parse(timeString);
            return "" + this.options.lang.prefixes.ago + (this.distanceOfTimeInWords(absolutTime)) + this.options.lang.suffix;
        };

        TimeAgo.prototype.parse = function(iso8601) {
            var timeStr;
            timeStr = $.trim(iso8601);
            timeStr = timeStr.replace(/\.\d\d\d+/, "");
            timeStr = timeStr.replace(/-/, "/").replace(/-/, "/");
            timeStr = timeStr.replace(/T/, " ").replace(/Z/, " UTC");
            timeStr = timeStr.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
            return new Date(timeStr);
        };

        TimeAgo.prototype.getTimeDistanceInMinutes = function(absolutTime) {
            var timeDistance;
            timeDistance = new Date().getTime() - absolutTime.getTime();
            return Math.round((Math.abs(timeDistance) / 1000) / 60);
        };

        TimeAgo.prototype.distanceOfTimeInWords = function(absolutTime) {
            var dim;
            dim = this.getTimeDistanceInMinutes(absolutTime);
            if (dim === 0) {
                return "" + this.options.lang.prefixes.lt + " " + this.options.lang.units.minute;
            } else if (dim === 1) {
                return "1 " + this.options.lang.units.minute;
            } else if (dim >= 2 && dim <= 44) {
                return "" + dim + " " + this.options.lang.units.minutes;
            } else if (dim >= 45 && dim <= 89) {
                return "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.hour;
            } else if (dim >= 90 && dim <= 1439) {
                return "" + this.options.lang.prefixes.about + " " + (Math.round(dim / 60)) + " " + this.options.lang.units.hours;
            } else if (dim >= 1440 && dim <= 2519) {
                return "1 " + this.options.lang.units.day;
            } else if (dim >= 2520 && dim <= 43199) {
                return "" + (Math.round(dim / 1440)) + " " + this.options.lang.units.days;
            } else if (dim >= 43200 && dim <= 86399) {
                return "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.month;
            } else if (dim >= 86400 && dim <= 525599) {
                return "" + (Math.round(dim / 43200)) + " " + this.options.lang.units.months;
            } else if (dim >= 525600 && dim <= 655199) {
                return "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.year;
            } else if (dim >= 655200 && dim <= 914399) {
                return "" + this.options.lang.prefixes.over + " 1 " + this.options.lang.units.year;
            } else if (dim >= 914400 && dim <= 1051199) {
                return "" + this.options.lang.prefixes.almost + " 2 " + this.options.lang.units.years;
            } else {
                return "" + this.options.lang.prefixes.about + " " + (Math.round(dim / 525600)) + " " + this.options.lang.units.years;
            }
        };

        return TimeAgo;

    })();

    $.fn.timeago = function(options) {
        if (options == null) {
            options = {};
        }
        return this.each(function() {
            var $this, data;
            $this = $(this);
            data = $this.data("timeago");
            if (!data) {
                return $this.data("timeago", new TimeAgo(this, options));
            } else if (typeof options === 'string') {
                return data[options]();
            }
        });
    };

    $.fn.findAndSelf = function(selector) {
        return this.find(selector).add(this.filter(selector));
    };

    $.fn.timeago.Constructor = TimeAgo;

    $.fn.timeago.defaults = {
        selector: 'time.timeago',
        attr: 'datetime',
        dir: 'up',
        lang: carbonLines
    };

}).call(this);
/**
 * selectFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

    'use strict';

    /**
     * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
     */
    function hasParent( e, p ) {
        if (!e) return false;
        var el = e.target||e.srcElement||e||false;
        while (el && el != p) {
            el = el.parentNode||false;
        }
        return (el!==false);
    };

    /**
     * extend obj function
     */
    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    /**
     * SelectFx function
     */
    function SelectFx( el, options ) {
        this.el = el;
        this.options = extend( {}, this.options );
        extend( this.options, options );
        this._init();
    }

    /**
     * SelectFx options
     */
    SelectFx.prototype.options = {
        // if true all the links will open in a new tab.
        // if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
        newTab : true,
        // when opening the select element, the default placeholder (if any) is shown
        stickyPlaceholder : true,
        // callback when changing the value
        onChange : function( val ) { return false; }
    }

    /**
     * init function
     * initialize and cache some vars
     */
    SelectFx.prototype._init = function() {
        // check if we are using a placeholder for the native select box
        // we assume the placeholder is disabled and selected by default
        var selectedOpt = this.el.querySelector( 'option[selected]' );
        this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

        // get selected option (either the first option with attr selected or just the first option)
        this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

        // create structure
        this._createSelectEl();

        // all options
        this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );

        // total options
        this.selOptsCount = this.selOpts.length;

        // current index
        this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;

        // placeholder elem
        this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

        // init events
        this._initEvents();
    }

    /**
     * creates the structure for the select element
     */
    SelectFx.prototype._createSelectEl = function() {
        var self = this, options = '', createOptionHTML = function(el) {
            var optclass = '', classes = '', link = '';

            if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
                classes += 'cs-selected ';
                this.foundSelected = true;
            }
            // extra classes
            if( el.getAttribute( 'data-class' ) ) {
                classes += el.getAttribute( 'data-class' );
            }
            // link options
            if( el.getAttribute( 'data-link' ) ) {
                link = 'data-link=' + el.getAttribute( 'data-link' );
            }

            if( classes !== '' ) {
                optclass = 'class="' + classes + '" ';
            }

            return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
        };

        [].slice.call( this.el.children ).forEach( function(el) {
            if( el.disabled ) { return; }

            var tag = el.tagName.toLowerCase();

            if( tag === 'option' ) {
                options += createOptionHTML(el);
            }
            else if( tag === 'optgroup' ) {
                options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
                [].slice.call( el.children ).forEach( function(opt) {
                    options += createOptionHTML(opt);
                } );
                options += '</ul></li>';
            }
        } );

        var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
        this.selEl = document.createElement( 'div' );
        this.selEl.className = this.el.className;
        this.selEl.tabIndex = this.el.tabIndex;
        this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
        this.el.parentNode.appendChild( this.selEl );
        this.selEl.appendChild( this.el );
    }

    /**
     * initialize the events
     */
    SelectFx.prototype._initEvents = function() {
        var self = this;

        // open/close select
        this.selPlaceholder.addEventListener( 'click', function() {
            self._toggleSelect();
        } );

        // clicking the options
        this.selOpts.forEach( function(opt, idx) {
            opt.addEventListener( 'click', function() {
                self.current = idx;
                self._changeOption();
                // close select elem
                self._toggleSelect();
            } );
        } );

        // close the select element if the target it´s not the select element or one of its descendants..
        document.addEventListener( 'click', function(ev) {
            var target = ev.target;
            if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
                self._toggleSelect();
            }
        } );

        // keyboard navigation events
        this.selEl.addEventListener( 'keydown', function( ev ) {
            var keyCode = ev.keyCode || ev.which;

            switch (keyCode) {
                // up key
                case 38:
                    ev.preventDefault();
                    self._navigateOpts('prev');
                    break;
                // down key
                case 40:
                    ev.preventDefault();
                    self._navigateOpts('next');
                    break;
                // space key
                case 32:
                    ev.preventDefault();
                    if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
                        self._changeOption();
                    }
                    self._toggleSelect();
                    break;
                // enter key
                case 13:
                    ev.preventDefault();
                    if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
                        self._changeOption();
                        self._toggleSelect();
                    }
                    break;
                // esc key
                case 27:
                    ev.preventDefault();
                    if( self._isOpen() ) {
                        self._toggleSelect();
                    }
                    break;
            }
        } );
    }

    /**
     * navigate with up/dpwn keys
     */
    SelectFx.prototype._navigateOpts = function(dir) {
        if( !this._isOpen() ) {
            this._toggleSelect();
        }

        var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;

        if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
            // save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
            this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
            // remove focus class if any..
            this._removeFocus();
            // add class focus - track which option we are navigating
            classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
        }
    }

    /**
     * open/close select
     * when opened show the default placeholder if any
     */
    SelectFx.prototype._toggleSelect = function() {
        // remove focus class if any..
        this._removeFocus();

        if( this._isOpen() ) {
            if( this.current !== -1 ) {
                // update placeholder text
                this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
            }
            classie.remove( this.selEl, 'cs-active' );
        }
        else {
            if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
                // everytime we open we wanna see the default placeholder text
                this.selPlaceholder.textContent = this.selectedOpt.textContent;
            }
            classie.add( this.selEl, 'cs-active' );
        }
    }

    /**
     * change option - the new value is set
     */
    SelectFx.prototype._changeOption = function() {
        // if pre selected current (if we navigate with the keyboard)...
        if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
            this.current = this.preSelCurrent;
            this.preSelCurrent = -1;
        }

        // current option
        var opt = this.selOpts[ this.current ];

        // update current selected value
        this.selPlaceholder.textContent = opt.textContent;

        // change native select element´s value
        this.el.value = opt.getAttribute( 'data-value' );

        // remove class cs-selected from old selected option and add it to current selected option
        var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
        if( oldOpt ) {
            classie.remove( oldOpt, 'cs-selected' );
        }
        classie.add( opt, 'cs-selected' );

        // if there´s a link defined
        if( opt.getAttribute( 'data-link' ) ) {
            // open in new tab?
            if( this.options.newTab ) {
                window.open( opt.getAttribute( 'data-link' ), '_blank' );
            }
            else {
                window.location = opt.getAttribute( 'data-link' );
            }
        }

        // callback
        this.options.onChange( this.el.value );
    }

    /**
     * returns true if select element is opened
     */
    SelectFx.prototype._isOpen = function(opt) {
        return classie.has( this.selEl, 'cs-active' );
    }

    /**
     * removes the focus class from the option
     */
    SelectFx.prototype._removeFocus = function(opt) {
        var focusEl = this.selEl.querySelector( 'li.cs-focus' )
        if( focusEl ) {
            classie.remove( focusEl, 'cs-focus' );
        }
    }

    /**
     * add to global namespace
     */
    window.SelectFx = SelectFx;

} )( window );

!function(e,t,n){"use strict";function s(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function a(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function r(e,t,n){a(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function l(e,t,n){n?e.addClass(t):e.removeClass(t)}function u(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),l(e,n.checkedClass,a)}function o(e,t,n){l(e,n.disabledClass,t.is(":disabled"))}function c(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function d(e,n,a){var r,i,l;return a||(a={}),a=t.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),r=t("<div />"),i=t("<span />"),n.autoHide&&e.is(":hidden")&&"none"===e.css("display")&&r.hide(),a.divClass&&r.addClass(a.divClass),n.wrapperClass&&r.addClass(n.wrapperClass),a.spanClass&&i.addClass(a.spanClass),l=s(e,"id"),n.useID&&l&&s(r,"id",n.idPrefix+"-"+l),a.spanHtml&&i.html(a.spanHtml),r=c(e,r,a.divWrap),i=c(e,i,a.spanWrap),o(r,e,n),{div:r,span:i}}function f(e,n){var s;return n.wrapperClass?(s=t("<span />").addClass(n.wrapperClass),s=c(e,s,"wrap")):null}function p(){var n,s,a,r;return r="rgb(120,2,153)",s=t('<div style="width:0;height:0;color:'+r+'">'),t("body").append(s),a=s.get(0),n=e.getComputedStyle?e.getComputedStyle(a,"").color:(a.currentStyle||a.style||{}).color,s.remove(),n.replace(/ /g,"")!==r}function m(e){return e?t("<span />").text(e).html():""}function v(){return navigator.cpuClass&&!navigator.product}function h(){return void 0!==e.XMLHttpRequest?!0:!1}function C(e){var t;return e[0].multiple?!0:(t=s(e,"size"),!t||1>=t?!1:!0)}function b(){return!1}function y(e,t){var n="none";a(e,t,{"selectstart dragstart mousedown":b}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function w(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function g(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function k(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),g(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function H(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var x=!0,A=!1,W=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(t,n){var l,u,c,f,p;return u=n.submitDefaultHtml,t.is(":reset")&&(u=n.resetDefaultHtml),f=t.is("a, button")?function(){return t.html()||u}:function(){return m(s(t,"value"))||u},c=d(t,n,{divClass:n.buttonClass,spanHtml:f()}),l=c.div,r(t,l,n),p=!1,a(l,n,{"click touchend":function(){var n,a,r,i;p||t.is(":disabled")||(p=!0,t[0].dispatchEvent?(n=document.createEvent("MouseEvents"),n.initEvent("click",!0,!0),a=t[0].dispatchEvent(n),t.is("a")&&a&&(r=s(t,"target"),i=s(t,"href"),r&&"_self"!==r?e.open(i,r):document.location.href=i)):t.click(),p=!1)}}),y(l,n),{remove:function(){return l.after(t),l.remove(),t.unbind(n.eventNamespace),t},update:function(){i(l,n),o(l,t,n),t.detach(),c.span.html(f()).append(t)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,s,l;return n=d(e,t,{divClass:t.checkboxClass}),s=n.div,l=n.span,r(e,s,t),a(e,t,{"click touchend":function(){u(l,e,t)}}),u(l,e,t),{remove:H(e,t),update:function(){i(s,t),l.removeClass(t.checkedClass),u(l,e,t),o(s,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(e,n){function l(){w(e,p,n)}var u,f,p,m;return u=d(e,n,{divClass:n.fileClass,spanClass:n.fileButtonClass,spanHtml:n.fileButtonHtml,spanWrap:"after"}),f=u.div,m=u.span,p=t("<span />").html(n.fileDefaultHtml),p.addClass(n.filenameClass),p=c(e,p,"after"),s(e,"size")||s(e,"size",f.width()/10),r(e,f,n),l(),v()?a(e,n,{click:function(){e.trigger("change"),setTimeout(l,0)}}):a(e,n,{change:l}),y(p,n),y(m,n),{remove:function(){return p.remove(),m.remove(),e.unwrap().unbind(n.eventNamespace)},update:function(){i(f,n),w(e,p,n),o(f,e,n)}}}},{match:function(e){if(e.is("input")){var t=(" "+s(e,"type")+" ").toLowerCase(),n=" color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t)>=0}return!1},apply:function(e,t){var n,a;return n=s(e,"type"),e.addClass(t.inputClass),a=f(e,t),r(e,e,t),t.inputAddTypeAsClass&&e.addClass(n),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(n),a&&e.unwrap()},update:b}}},{match:function(e){return e.is(":radio")},apply:function(e,n){var l,c,f;return l=d(e,n,{divClass:n.radioClass}),c=l.div,f=l.span,r(e,c,n),a(e,n,{"click touchend":function(){t.uniform.update(t(':radio[name="'+s(e,"name")+'"]'))}}),u(f,e,n),{remove:H(e,n),update:function(){i(c,n),u(f,e,n),o(c,e,n)}}}},{match:function(e){return e.is("select")&&!C(e)?!0:!1},apply:function(e,n){var s,l,u,c;return n.selectAutoWidth&&k(e,function(){c=e.width()}),s=d(e,n,{divClass:n.selectClass,spanHtml:(e.find(":selected:first")||e.find("option:first")).html(),spanWrap:"before"}),l=s.div,u=s.span,n.selectAutoWidth?k(e,function(){g(t([u[0],l[0]]),{display:"block"},function(){var e;e=u.outerWidth()-u.width(),l.width(c+e),u.width(c)})}):l.addClass("fixedWidth"),r(e,l,n),a(e,n,{change:function(){u.html(e.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var t=e.find(":selected").html();u.html()!==t&&e.trigger("change")},keyup:function(){u.html(e.find(":selected").html())}}),y(u,n),{remove:function(){return u.remove(),e.unwrap().unbind(n.eventNamespace),e},update:function(){n.selectAutoWidth?(t.uniform.restore(e),e.uniform(n)):(i(l,n),u.html(e.find(":selected").html()),o(l,e,n))}}}},{match:function(e){return e.is("select")&&C(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:b}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:b}}}];v()&&!h()&&(x=!1),t.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},t.fn.uniform=function(n){var s=this;return n=t.extend({},t.uniform.defaults,n),A||(A=!0,p()&&(x=!1)),x?(n.resetSelector&&t(n.resetSelector).mouseup(function(){e.setTimeout(function(){t.uniform.update(s)},10)}),this.each(function(){var e,s,a,r=t(this);if(r.data("uniformed"))return t.uniform.update(r),void 0;for(e=0;e<W.length;e+=1)if(s=W[e],s.match(r,n))return a=s.apply(r,n),r.data("uniformed",a),t.uniform.elements.push(r.get(0)),void 0})):this},t.uniform.restore=t.fn.uniform.restore=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n,s=t(this);n=s.data("uniformed"),n&&(n.remove(),e=t.inArray(this,t.uniform.elements),e>=0&&t.uniform.elements.splice(e,1),s.removeData("uniformed"))})},t.uniform.update=t.fn.uniform.update=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n=t(this);e=n.data("uniformed"),e&&e.update(n,e.options)})}}(this,jQuery);
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"100%",size:"7px",color:"#ccc",position:"right",distance:"0",start:"top",opacity:0.3,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:1,wheelStep:20,touchScrollStep:200,borderRadius:"0",railBorderRadius:"0"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return f({type:O.error,iconClass:g().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=g()),v=e("#"+t.containerId),v.length?v:(n&&(v=c(t)),v)}function i(e,t,n){return f({type:O.info,iconClass:g().iconClasses.info,message:e,optionsOverride:n,title:t})}function o(e){w=e}function s(e,t,n){return f({type:O.success,iconClass:g().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return f({type:O.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e){var t=g();v||n(t),l(e,t)||u(t)}function d(t){var i=g();return v||n(i),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function u(t){for(var n=v.children(),i=n.length-1;i>=0;i--)l(e(n[i]),t)}function l(t,n){return t&&0===e(":focus",t).length?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0):!1}function c(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass).attr("aria-live","polite").attr("role","alert"),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function m(e){w&&w(e)}function f(t){function i(t){return!e(":focus",l).length||t?(clearTimeout(O.intervalId),l[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){h(l),r.onHidden&&"hidden"!==b.state&&r.onHidden(),b.state="hidden",b.endTime=new Date,m(b)}})):void 0}function o(){(r.timeOut>0||r.extendedTimeOut>0)&&(u=setTimeout(i,r.extendedTimeOut),O.maxHideTime=parseFloat(r.extendedTimeOut),O.hideEta=(new Date).getTime()+O.maxHideTime)}function s(){clearTimeout(u),O.hideEta=0,l.stop(!0,!0)[r.showMethod]({duration:r.showDuration,easing:r.showEasing})}function a(){var e=(O.hideEta-(new Date).getTime())/O.maxHideTime*100;f.width(e+"%")}var r=g(),d=t.iconClass||r.iconClass;if("undefined"!=typeof t.optionsOverride&&(r=e.extend(r,t.optionsOverride),d=t.optionsOverride.iconClass||d),r.preventDuplicates){if(t.message===C)return;C=t.message}T++,v=n(r,!0);var u=null,l=e("<div/>"),c=e("<div/>"),p=e("<div/>"),f=e("<div/>"),w=e(r.closeHtml),O={intervalId:null,hideEta:null,maxHideTime:null},b={toastId:T,state:"visible",startTime:new Date,options:r,map:t};return t.iconClass&&l.addClass(r.toastClass).addClass(d),t.title&&(c.append(t.title).addClass(r.titleClass),l.append(c)),t.message&&(p.append(t.message).addClass(r.messageClass),l.append(p)),r.closeButton&&(w.addClass("toast-close-button").attr("role","button"),l.prepend(w)),r.progressBar&&(f.addClass("toast-progress"),l.prepend(f)),l.hide(),r.newestOnTop?v.prepend(l):v.append(l),l[r.showMethod]({duration:r.showDuration,easing:r.showEasing,complete:r.onShown}),r.timeOut>0&&(u=setTimeout(i,r.timeOut),O.maxHideTime=parseFloat(r.timeOut),O.hideEta=(new Date).getTime()+O.maxHideTime,r.progressBar&&(O.intervalId=setInterval(a,10))),l.hover(s,o),!r.onclick&&r.tapToDismiss&&l.click(i),r.closeButton&&w&&w.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),i(!0)}),r.onclick&&l.click(function(){r.onclick(),i()}),m(b),r.debug&&console&&console.log(b),l}function g(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),C=void 0))}var v,w,C,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:d,error:t,getContainer:n,info:i,options:{},subscribe:o,success:s,version:"2.1.0",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Meta info, accessible in the global scope unless you use AMD option.
 */

require.loader = 'component';

/**
 * Internal helper object, contains a sorting function for semantiv versioning
 */
require.helper = {};
require.helper.semVerSort = function(a, b) {
  var aArray = a.version.split('.');
  var bArray = b.version.split('.');
  for (var i=0; i<aArray.length; ++i) {
    var aInt = parseInt(aArray[i], 10);
    var bInt = parseInt(bArray[i], 10);
    if (aInt === bInt) {
      var aLex = aArray[i].substr((""+aInt).length);
      var bLex = bArray[i].substr((""+bInt).length);
      if (aLex === '' && bLex !== '') return 1;
      if (aLex !== '' && bLex === '') return -1;
      if (aLex !== '' && bLex !== '') return aLex > bLex ? 1 : -1;
      continue;
    } else if (aInt > bInt) {
      return 1;
    } else {
      return -1;
    }
  }
  return 0;
}

/**
 * Find and require a module which name starts with the provided name.
 * If multiple modules exists, the highest semver is used. 
 * This function can only be used for remote dependencies.

 * @param {String} name - module name: `user~repo`
 * @param {Boolean} returnPath - returns the canonical require path if true, 
 *                               otherwise it returns the epxorted module
 */
require.latest = function (name, returnPath) {
  function showError(name) {
    throw new Error('failed to find latest module of "' + name + '"');
  }
  // only remotes with semvers, ignore local files conataining a '/'
  var versionRegexp = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;
  var remoteRegexp = /(.*)~(.*)/;
  if (!remoteRegexp.test(name)) showError(name);
  var moduleNames = Object.keys(require.modules);
  var semVerCandidates = [];
  var otherCandidates = []; // for instance: name of the git branch
  for (var i=0; i<moduleNames.length; i++) {
    var moduleName = moduleNames[i];
    if (new RegExp(name + '@').test(moduleName)) {
        var version = moduleName.substr(name.length+1);
        var semVerMatch = versionRegexp.exec(moduleName);
        if (semVerMatch != null) {
          semVerCandidates.push({version: version, name: moduleName});
        } else {
          otherCandidates.push({version: version, name: moduleName});
        } 
    }
  }
  if (semVerCandidates.concat(otherCandidates).length === 0) {
    showError(name);
  }
  if (semVerCandidates.length > 0) {
    var module = semVerCandidates.sort(require.helper.semVerSort).pop().name;
    if (returnPath === true) {
      return module;
    }
    return require(module);
  }
  // if the build contains more than one branch of the same module
  // you should not use this funciton
  var module = otherCandidates.pop().name;
  if (returnPath === true) {
    return module;
  }
  return require(module);
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("abpetkov~transitionize@0.0.3", function (exports, module) {

/**
 * Transitionize 0.0.2
 * https://github.com/abpetkov/transitionize
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * Expose `Transitionize`.
 */

module.exports = Transitionize;

/**
 * Initialize new Transitionize.
 *
 * @param {Object} element
 * @param {Object} props
 * @api public
 */

function Transitionize(element, props) {
  if (!(this instanceof Transitionize)) return new Transitionize(element, props);

  this.element = element;
  this.props = props || {};
  this.init();
}

/**
 * Detect if Safari.
 *
 * @returns {Boolean}
 * @api private
 */

Transitionize.prototype.isSafari = function() {
  return (/Safari/).test(navigator.userAgent) && (/Apple Computer/).test(navigator.vendor);
};

/**
 * Loop though the object and push the keys and values in an array.
 * Apply the CSS3 transition to the element and prefix with -webkit- for Safari.
 *
 * @api private
 */

Transitionize.prototype.init = function() {
  var transitions = [];

  for (var key in this.props) {
    transitions.push(key + ' ' + this.props[key]);
  }

  this.element.style.transition = transitions.join(', ');
  if (this.isSafari()) this.element.style.webkitTransition = transitions.join(', ');
};
});

require.register("ftlabs~fastclick@v0.6.11", function (exports, module) {
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.11
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
	'use strict';
	var oldOnClick, self = this;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (!layer || !layer.nodeType) {
		throw new TypeError('Layer must be a document node');
	}

	/** @type function() */
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };

	/** @type function() */
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };

	/** @type function() */
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };

	/** @type function() */
	this.onTouchMove = function() { return FastClick.prototype.onTouchMove.apply(self, arguments); };

	/** @type function() */
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };

	/** @type function() */
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Set up event handlers as required
	if (this.deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((this.deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !this.deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (this.deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!this.deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (this.deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (this.deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (this.deviceIsIOS && !this.deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (this.deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (FastClick.prototype.deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');
			
			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}

});

require.register("switchery", function (exports, module) {
/**
 * Switchery 0.6.3
 * http://abpetkov.github.io/switchery/
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013-2014, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * External dependencies.
 */

var transitionize = require('abpetkov~transitionize@0.0.3')
  , fastclick = require('ftlabs~fastclick@v0.6.11');

/**
 * Expose `Switchery`.
 */

module.exports = Switchery;

/**
 * Set Switchery default values.
 *
 * @api public
 */

var defaults = {
    color          : '#64bd63'
  , secondaryColor : '#dfdfdf'
  , jackColor      : '#fff'
  , className      : 'switchery'
  , disabled       : false
  , disabledOpacity: 0.5
  , speed          : '0.4s'
};

/**
 * Create Switchery object.
 *
 * @param {Object} element
 * @param {Object} options
 * @api public
 */

function Switchery(element, options) {
  if (!(this instanceof Switchery)) return new Switchery(element, options);

  this.element = element;
  this.options = options || {};

  for (var i in defaults) {
    if (this.options[i] == null) {
      this.options[i] = defaults[i];
    }
  }

  if (this.element != null && this.element.type == 'checkbox') this.init();
}

/**
 * Hide the target element.
 *
 * @api private
 */

Switchery.prototype.hide = function() {
  this.element.style.display = 'none';
};

/**
 * Show custom switch after the target element.
 *
 * @api private
 */

Switchery.prototype.show = function() {
  var switcher = this.create();
  this.insertAfter(this.element, switcher);
};

/**
 * Create custom switch.
 *
 * @returns {Object} this.switcher
 * @api private
 */

Switchery.prototype.create = function() {
  this.switcher = document.createElement('span');
  this.jack = document.createElement('small');
  this.switcher.appendChild(this.jack);
  this.switcher.className = this.options.className;

  return this.switcher;
};

/**
 * Insert after element after another element.
 *
 * @param {Object} reference
 * @param {Object} target
 * @api private
 */

Switchery.prototype.insertAfter = function(reference, target) {
  reference.parentNode.insertBefore(target, reference.nextSibling);
};

/**
 * See if input is checked.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isChecked = function() {
  return this.element.checked;
};

/**
 * See if switcher should be disabled.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isDisabled = function() {
  return this.options.disabled || this.element.disabled;
};

/**
 * Set switch jack proper position.
 *
 * @param {Boolean} clicked - we need this in order to uncheck the input when the switch is clicked
 * @api private
 */

Switchery.prototype.setPosition = function (clicked) {
  var checked = this.isChecked()
    , switcher = this.switcher
    , jack = this.jack;

  if (clicked && checked) checked = false;
  else if (clicked && !checked) checked = true;

  if (checked === true) {
    this.element.checked = true;

    if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - parseInt(window.getComputedStyle(jack).width) + 'px';
    else jack.style.left = parseInt(switcher.currentStyle['width']) - parseInt(jack.currentStyle['width']) + 'px';

    if (this.options.color) this.colorize();
    this.setSpeed();
  } else {
    jack.style.left = 0;
    this.element.checked = false;
    this.switcher.style.boxShadow = 'inset 0 0 0 0 ' + this.options.secondaryColor;
    this.switcher.style.borderColor = this.options.secondaryColor;
    this.switcher.style.backgroundColor = (this.options.secondaryColor !== defaults.secondaryColor) ? this.options.secondaryColor : '#fff';
    this.jack.style.backgroundColor = this.options.jackColor;
    this.setSpeed();
  }
};

/**
 * Set speed.
 *
 * @api private
 */

Switchery.prototype.setSpeed = function() {
  var switcherProp = {}
    , jackProp = { 'left': this.options.speed.replace(/[a-z]/, '') / 2 + 's' };

  if (this.isChecked()) {
    switcherProp = {
        'border': this.options.speed
      , 'box-shadow': this.options.speed
      , 'background-color': this.options.speed.replace(/[a-z]/, '') * 3 + 's'
    };
  } else {
    switcherProp = {
        'border': this.options.speed
      , 'box-shadow': this.options.speed
    };
  }

  transitionize(this.switcher, switcherProp);
  transitionize(this.jack, jackProp);
};

/**
 * Set switch color.
 *
 * @api private
 */

Switchery.prototype.colorize = function() {
  this.switcher.style.backgroundColor = this.options.color;
  this.switcher.style.borderColor = this.options.color;
  this.switcher.style.boxShadow = 'inset 0 0 0 16px ' + this.options.color;
  this.jack.style.backgroundColor = this.options.jackColor;
};

/**
 * Handle the onchange event.
 *
 * @param {Boolean} state
 * @api private
 */

Switchery.prototype.handleOnchange = function(state) {
  if (document.dispatchEvent) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, true);
    this.element.dispatchEvent(event);
  } else {
    this.element.fireEvent('onchange');
  }
};

/**
 * Handle the native input element state change.
 * A `change` event must be fired in order to detect the change.
 *
 * @api private
 */

Switchery.prototype.handleChange = function() {
  var self = this
    , el = this.element;

  if (el.addEventListener) {
    el.addEventListener('change', function() {
      self.setPosition();
    });
  } else {
    el.attachEvent('onchange', function() {
      self.setPosition();
    });
  }
};

/**
 * Handle the switch click event.
 *
 * @api private
 */

Switchery.prototype.handleClick = function() {
  var self = this
    , switcher = this.switcher
    , parent = self.element.parentNode.tagName.toLowerCase()
    , labelParent = (parent === 'label') ? false : true;

  if (this.isDisabled() === false) {
    fastclick(switcher);

    if (switcher.addEventListener) {
      switcher.addEventListener('click', function() {
        self.setPosition(labelParent);
        self.handleOnchange(self.element.checked);
      });
    } else {
      switcher.attachEvent('onclick', function() {
        self.setPosition(labelParent);
        self.handleOnchange(self.element.checked);
      });
    }
  } else {
    this.element.disabled = true;
    this.switcher.style.opacity = this.options.disabledOpacity;
  }
};

/**
 * Mark an individual switch as already handled.
 *
 * @api private
 */

Switchery.prototype.markAsSwitched = function() {
  this.element.setAttribute('data-switchery', true);
};

/**
 * Check if an individual switch is already handled.
 *
 * @api private
 */

Switchery.prototype.markedAsSwitched = function() {
  return this.element.getAttribute('data-switchery');
};

/**
 * Initialize Switchery.
 *
 * @api private
 */

Switchery.prototype.init = function() {
  this.hide();
  this.show();
  this.setPosition();
  this.markAsSwitched();
  this.handleChange();
  this.handleClick();
};

});

if (typeof exports == "object") {
  module.exports = require("switchery");
} else if (typeof define == "function" && define.amd) {
  define("Switchery", [], function(){ return require("switchery"); });
} else {
  (this || window)["Switchery"] = require("switchery");
}
})()

!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
(function() {

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    function init() {

        var menu = document.getElementById( 'Menu' ),
            trigger = menu ? menu.querySelector( 'a.Menu-trigger' ) : null,
            // triggerPlay only for demo 6
            triggerPlay = document.querySelector( 'a.Menu-trigger-out' ),
            // event type (if mobile use touch events)
            eventtype = mobilecheck() ? 'touchstart' : 'click',
            resetMenu = function() {
                classie.remove( menu, 'Menu--open' );
                classie.add( menu, 'Menu--close' );
            },
            closeClickFn = function( ev ) {
                resetMenu();
                overlay.removeEventListener( eventtype, closeClickFn );
            };

        var overlay = document.createElement('div');
        overlay.className = 'Menu__overlay';
        if (menu)
            menu.appendChild( overlay );

        if (trigger) {
            trigger.addEventListener(eventtype, function (ev) {
                ev.stopPropagation();
                ev.preventDefault();

                if (classie.has(menu, 'Menu--open')) {
                    resetMenu();
                }
                else {
                    classie.remove(menu, 'Menu--close');
                    classie.add(menu, 'Menu--open');
                    overlay.addEventListener(eventtype, closeClickFn);
                }
            });
        }

        if( triggerPlay ) {
            triggerPlay.addEventListener( eventtype, function( ev ) {
                ev.stopPropagation();
                ev.preventDefault();

                classie.remove( menu, 'Menu--close' );
                classie.add( menu, 'Menu--open' );
                overlay.addEventListener( eventtype, closeClickFn );
            });
        }

    }

    init();

})();
/*!
 * Pusher JavaScript Library v3.1.0
 * http://pusher.com/
 *
 * Copyright 2016, Pusher
 * Released under the MIT licence.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pusher=e():t.Pusher=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(1);t.exports=i["default"]},function(t,e,n){"use strict";function i(t){if(null===t||void 0===t)throw"You must pass your app key when you instantiate Pusher."}var o=n(2),r=n(9),s=n(23),a=n(38),c=n(39),u=n(40),l=n(12),h=n(5),f=n(62),p=n(8),d=n(42),y=function(){function t(e,n){var l=this;i(e),n=n||{},this.key=e,this.config=r.extend(f.getGlobalConfig(),n.cluster?f.getClusterConfig(n.cluster):{},n),this.channels=d["default"].createChannels(),this.global_emitter=new s["default"],this.sessionID=Math.floor(1e9*Math.random()),this.timeline=new a["default"](this.key,this.sessionID,{cluster:this.config.cluster,features:t.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:c["default"].INFO,version:h["default"].VERSION}),this.config.disableStats||(this.timelineSender=d["default"].createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+o["default"].TimelineTransport.name}));var y=function(t){var e=r.extend({},l.config,t);return u.build(o["default"].getDefaultStrategy(e),e)};this.connection=d["default"].createConnectionManager(this.key,r.extend({getStrategy:y,timeline:this.timeline,activityTimeout:this.config.activity_timeout,pongTimeout:this.config.pong_timeout,unavailableTimeout:this.config.unavailable_timeout},this.config,{encrypted:this.isEncrypted()})),this.connection.bind("connected",function(){l.subscribeAll(),l.timelineSender&&l.timelineSender.send(l.connection.isEncrypted())}),this.connection.bind("message",function(t){var e=0===t.event.indexOf("pusher_internal:");if(t.channel){var n=l.channel(t.channel);n&&n.handleEvent(t.event,t.data)}e||l.global_emitter.emit(t.event,t.data)}),this.connection.bind("disconnected",function(){l.channels.disconnect()}),this.connection.bind("error",function(t){p["default"].warn("Error",t)}),t.instances.push(this),this.timeline.info({instances:t.instances.length}),t.isReady&&this.connect()}return t.ready=function(){t.isReady=!0;for(var e=0,n=t.instances.length;n>e;e++)t.instances[e].connect()},t.log=function(e){var n=Function("return this")();t.logToConsole&&n.console&&n.console.log&&n.console.log(e)},t.getClientFeatures=function(){return r.keys(r.filterObject({ws:o["default"].Transports.ws},function(t){return t.isSupported({})}))},t.prototype.channel=function(t){return this.channels.find(t)},t.prototype.allChannels=function(){return this.channels.all()},t.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var t=this.connection.isEncrypted(),e=this.timelineSender;this.timelineSenderTimer=new l.PeriodicTimer(6e4,function(){e.send(t)})}},t.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},t.prototype.bind=function(t,e){return this.global_emitter.bind(t,e),this},t.prototype.bind_all=function(t){return this.global_emitter.bind_all(t),this},t.prototype.subscribeAll=function(){var t;for(t in this.channels.channels)this.channels.channels.hasOwnProperty(t)&&this.subscribe(t)},t.prototype.subscribe=function(t){var e=this.channels.add(t,this);return"connected"===this.connection.state&&e.subscribe(),e},t.prototype.unsubscribe=function(t){var e=this.channels.remove(t);e&&"connected"===this.connection.state&&e.unsubscribe()},t.prototype.send_event=function(t,e,n){return this.connection.send_event(t,e,n)},t.prototype.isEncrypted=function(){return"https:"===o["default"].getProtocol()?!0:Boolean(this.config.encrypted)},t.instances=[],t.isReady=!1,t.logToConsole=!1,t.Runtime=o["default"],t.ScriptReceivers=o["default"].ScriptReceivers,t.DependenciesReceivers=o["default"].DependenciesReceivers,t.auth_callbacks=o["default"].auth_callbacks,t}();e.__esModule=!0,e["default"]=y,o["default"].setup(y)},function(t,e,n){"use strict";var i=n(3),o=n(7),r=n(14),s=n(15),a=n(16),c=n(4),u=n(17),l=n(18),h=n(25),f=n(26),p=n(27),d=n(28),y={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:c.ScriptReceivers,DependenciesReceivers:i.DependenciesReceivers,getDefaultStrategy:f["default"],Transports:l["default"],transportConnectionInitializer:p["default"],HTTPFactory:d["default"],TimelineTransport:u["default"],getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(t){var e=this;window.Pusher=t;var n=function(){e.onDocumentBody(t.ready)};window.JSON?n():i.Dependencies.load("json2",{},n)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getGlobal:function(){return window},getAuthorizers:function(){return{ajax:o["default"],jsonp:r["default"]}},onDocumentBody:function(t){var e=this;document.body?t():setTimeout(function(){e.onDocumentBody(t)},0)},createJSONPRequest:function(t,e){return new a["default"](t,e)},createScriptRequest:function(t){return new s["default"](t)},getLocalStorage:function(){try{return window.localStorage}catch(t){return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var t=this.getXHRAPI();return new t},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return h.Network},createWebSocket:function(t){var e=this.getWebSocketAPI();return new e(t)},createSocketRequest:function(t,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(t,e);if(this.isXDRSupported(0===e.indexOf("https:")))return this.HTTPFactory.createXDR(t,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var t=this.getXHRAPI();return Boolean(t)&&void 0!==(new t).withCredentials},isXDRSupported:function(t){var e=t?"https:":"http:",n=this.getProtocol();return Boolean(window.XDomainRequest)&&n===e},addUnloadListener:function(t){void 0!==window.addEventListener?window.addEventListener("unload",t,!1):void 0!==window.attachEvent&&window.attachEvent("onunload",t)},removeUnloadListener:function(t){void 0!==window.addEventListener?window.removeEventListener("unload",t,!1):void 0!==window.detachEvent&&window.detachEvent("onunload",t)}};e.__esModule=!0,e["default"]=y},function(t,e,n){"use strict";var i=n(4),o=n(5),r=n(6);e.DependenciesReceivers=new i.ScriptReceiverFactory("_pusher_dependencies","Pusher.DependenciesReceivers"),e.Dependencies=new r["default"]({cdn_http:o["default"].cdn_http,cdn_https:o["default"].cdn_https,version:o["default"].VERSION,suffix:o["default"].dependency_suffix,receivers:e.DependenciesReceivers})},function(t,e){"use strict";var n=function(){function t(t,e){this.lastId=0,this.prefix=t,this.name=e}return t.prototype.create=function(t){this.lastId++;var e=this.lastId,n=this.prefix+e,i=this.name+"["+e+"]",o=!1,r=function(){o||(t.apply(null,arguments),o=!0)};return this[e]=r,{number:e,id:n,name:i,callback:r}},t.prototype.remove=function(t){delete this[t.number]},t}();e.ScriptReceiverFactory=n,e.ScriptReceivers=new n("_pusher_script_","Pusher.ScriptReceivers")},function(t,e){"use strict";var n={VERSION:"3.1.0",PROTOCOL:7,host:"ws.pusherapp.com",ws_port:80,wss_port:443,sockjs_host:"sockjs.pusher.com",sockjs_http_port:80,sockjs_https_port:443,sockjs_path:"/pusher",stats_host:"stats.pusher.com",channel_auth_endpoint:"/pusher/auth",channel_auth_transport:"ajax",activity_timeout:12e4,pong_timeout:3e4,unavailable_timeout:1e4,cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:".min"};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(4),o=n(2),r=function(){function t(t){this.options=t,this.receivers=t.receivers||i.ScriptReceivers,this.loading={}}return t.prototype.load=function(t,e,n){var i=this;if(i.loading[t]&&i.loading[t].length>0)i.loading[t].push(n);else{i.loading[t]=[n];var r=o["default"].createScriptRequest(i.getPath(t,e)),s=i.receivers.create(function(e){if(i.receivers.remove(s),i.loading[t]){var n=i.loading[t];delete i.loading[t];for(var o=function(t){t||r.cleanup()},a=0;a<n.length;a++)n[a](e,o)}});r.send(s)}},t.prototype.getRoot=function(t){var e,n=o["default"].getDocument().location.protocol;return e=t&&t.encrypted||"https:"===n?this.options.cdn_https:this.options.cdn_http,e.replace(/\/*$/,"")+"/"+this.options.version},t.prototype.getPath=function(t,e){return this.getRoot(e)+"/"+t+this.options.suffix+".js"},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(8),o=n(2),r=function(t,e,n){var r,s=this;r=o["default"].createXHR(),r.open("POST",s.options.authEndpoint,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var a in this.authOptions.headers)r.setRequestHeader(a,this.authOptions.headers[a]);return r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var t,e=!1;try{t=JSON.parse(r.responseText),e=!0}catch(o){n(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+r.responseText)}e&&n(!1,t)}else i["default"].warn("Couldn't get auth info from your webapp",r.status),n(!0,r.status)},r.send(this.composeQuery(e)),r};e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(9),o=n(1),r={debug:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];o["default"].log&&o["default"].log(i.stringify.apply(this,arguments))},warn:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var n=i.stringify.apply(this,arguments),r=Function("return this")();r.console&&(r.console.warn?r.console.warn(n):r.console.log&&r.console.log(n)),o["default"].log&&o["default"].log(n)}};e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var o=0;o<e.length;o++){var r=e[o];for(var s in r)r[s]&&r[s].constructor&&r[s].constructor===Object?t[s]=i(t[s]||{},r[s]):t[s]=r[s]}return t}function o(){for(var t=["Pusher"],e=0;e<arguments.length;e++)"string"==typeof arguments[e]?t.push(arguments[e]):t.push(JSON.stringify(arguments[e]));return t.join(" : ")}function r(t,e){var n=Array.prototype.indexOf;if(null===t)return-1;if(n&&t.indexOf===n)return t.indexOf(e);for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1}function s(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)}function a(t){var e=[];return s(t,function(t,n){e.push(n)}),e}function c(t){var e=[];return s(t,function(t){e.push(t)}),e}function u(t,e,n){for(var i=0;i<t.length;i++)e.call(n||w,t[i],i,t)}function l(t,e){for(var n=[],i=0;i<t.length;i++)n.push(e(t[i],i,t,n));return n}function h(t,e){var n={};return s(t,function(t,i){n[i]=e(t)}),n}function f(t,e){e=e||function(t){return!!t};for(var n=[],i=0;i<t.length;i++)e(t[i],i,t,n)&&n.push(t[i]);return n}function p(t,e){var n={};return s(t,function(i,o){(e&&e(i,o,t,n)||Boolean(i))&&(n[o]=i)}),n}function d(t){var e=[];return s(t,function(t,n){e.push([n,t])}),e}function y(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1}function m(t,e){for(var n=0;n<t.length;n++)if(!e(t[n],n,t))return!1;return!0}function v(t){return h(t,function(t){return"object"==typeof t&&(t=JSON.stringify(t)),encodeURIComponent(b["default"](t.toString()))})}function g(t){var e=p(t,function(t){return void 0!==t}),n=l(d(v(e)),k["default"].method("join","=")).join("&");return n}function _(t){var e=[],n=JSON.stringify(t,function(t,n){if("object"==typeof n&&null!==n){if(-1!==e.indexOf(n))return;e.push(n)}return n});return e=null,n}var b=n(10),k=n(11),w=Function("return this")();e.extend=i,e.stringify=o,e.arrayIndexOf=r,e.objectApply=s,e.keys=a,e.values=c,e.apply=u,e.map=l,e.mapObject=h,e.filter=f,e.filterObject=p,e.flatten=d,e.any=y,e.all=m,e.encodeParamsObject=v,e.buildQueryString=g,e.safeJSONStringify=_},function(t,e){"use strict";function n(t){return f(l(t))}var i=Function("return this")();e.__esModule=!0,e["default"]=n;for(var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={},a=0,c=r.length;c>a;a++)s[r.charAt(a)]=a;var u=function(t){var e=t.charCodeAt(0);return 128>e?t:2048>e?o(192|e>>>6)+o(128|63&e):o(224|e>>>12&15)+o(128|e>>>6&63)+o(128|63&e)},l=function(t){return t.replace(/[^\x00-\x7F]/g,u)},h=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),i=[r.charAt(n>>>18),r.charAt(n>>>12&63),e>=2?"=":r.charAt(n>>>6&63),e>=1?"=":r.charAt(63&n)];return i.join("")},f=i.btoa||function(t){return t.replace(/[\s\S]{1,3}/g,h)}},function(t,e,n){"use strict";var i=n(12),o={getGlobal:function(){return Function("return this")()},now:function(){return Date.now?Date.now():(new Date).valueOf()},defer:function(t){return new i.OneOffTimer(0,t)},method:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Array.prototype.slice.call(arguments,1);return function(e){return e[t].apply(e,i.concat(arguments))}}};e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";function i(t){a.clearTimeout(t)}function o(t){a.clearInterval(t)}var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},s=n(13),a=Function("return this")(),c=function(t){function e(e,n){t.call(this,setTimeout,i,e,function(t){return n(),null})}return r(e,t),e}(s["default"]);e.OneOffTimer=c;var u=function(t){function e(e,n){t.call(this,setInterval,o,e,function(t){return n(),t})}return r(e,t),e}(s["default"]);e.PeriodicTimer=u},function(t,e){"use strict";var n=function(){function t(t,e,n,i){var o=this;this.clear=e,this.timer=t(function(){o.timer&&(o.timer=i(o.timer))},n)}return t.prototype.isRunning=function(){return null!==this.timer},t.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(8),o=function(t,e,n){void 0!==this.authOptions.headers&&i["default"].warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var o=t.nextAuthCallbackID.toString();t.nextAuthCallbackID++;var r=t.getDocument(),s=r.createElement("script");t.auth_callbacks[o]=function(t){n(!1,t)};var a="Pusher.auth_callbacks['"+o+"']";s.src=this.options.authEndpoint+"?callback="+encodeURIComponent(a)+"&"+this.composeQuery(e);var c=r.getElementsByTagName("head")[0]||r.documentElement;c.insertBefore(s,c.firstChild)};e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=function(){function t(t){this.src=t}return t.prototype.send=function(t){var e=this,n="Error loading "+e.src;e.script=document.createElement("script"),e.script.id=t.id,e.script.src=e.src,e.script.type="text/javascript",e.script.charset="UTF-8",e.script.addEventListener?(e.script.onerror=function(){t.callback(n)},e.script.onload=function(){t.callback(null)}):e.script.onreadystatechange=function(){("loaded"===e.script.readyState||"complete"===e.script.readyState)&&t.callback(null)},void 0===e.script.async&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(e.errorScript=document.createElement("script"),e.errorScript.id=t.id+"_error",e.errorScript.text=t.name+"('"+n+"');",e.script.async=e.errorScript.async=!1):e.script.async=!0;var i=document.getElementsByTagName("head")[0];i.insertBefore(e.script,i.firstChild),e.errorScript&&i.insertBefore(e.errorScript,e.script.nextSibling)},t.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(9),o=n(2),r=function(){function t(t,e){this.url=t,this.data=e}return t.prototype.send=function(t){if(!this.request){var e=i.buildQueryString(this.data),n=this.url+"/"+t.number+"?"+e;this.request=o["default"].createScriptRequest(n),this.request.send(t)}},t.prototype.cleanup=function(){this.request&&this.request.cleanup()},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(2),o=n(4),r=function(t,e){return function(n,r){var s="http"+(e?"s":"")+"://",a=s+(t.host||t.options.host)+t.options.path,c=i["default"].createJSONPRequest(a,n),u=i["default"].ScriptReceivers.create(function(e,n){o.ScriptReceivers.remove(u),c.cleanup(),n&&n.host&&(t.host=n.host),r&&r(e,n)});c.send(u)}},s={name:"jsonp",getAgent:r};e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";var i=n(19),o=n(21),r=n(20),s=n(2),a=n(3),c=n(9),u=new o["default"]({file:"sockjs",urls:r.sockjs,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return void 0!==window.SockJS},getSocket:function(t,e){return new window.SockJS(t,null,{js_path:a.Dependencies.getPath("sockjs",{encrypted:e.encrypted}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(t,e){t.send(JSON.stringify({path:e}))}}),l={isSupported:function(t){var e=s["default"].isXDRSupported(t.encrypted);return e}},h=new o["default"](c.extend({},i.streamingConfiguration,l)),f=new o["default"](c.extend({},i.pollingConfiguration,l));i["default"].xdr_streaming=h,i["default"].xdr_polling=f,i["default"].sockjs=u,e.__esModule=!0,e["default"]=i["default"]},function(t,e,n){"use strict";var i=n(20),o=n(21),r=n(9),s=n(2),a=new o["default"]({urls:i.ws,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(s["default"].getWebSocketAPI())},isSupported:function(){return Boolean(s["default"].getWebSocketAPI())},getSocket:function(t){return s["default"].createWebSocket(t)}}),c={urls:i.http,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}};e.streamingConfiguration=r.extend({getSocket:function(t){return s["default"].HTTPFactory.createStreamingSocket(t)}},c),e.pollingConfiguration=r.extend({getSocket:function(t){return s["default"].HTTPFactory.createPollingSocket(t)}},c);var u={isSupported:function(){return s["default"].isXHRSupported()}},l=new o["default"](r.extend({},e.streamingConfiguration,u)),h=new o["default"](r.extend({},e.pollingConfiguration,u)),f={ws:a,xhr_streaming:l,xhr_polling:h};e.__esModule=!0,e["default"]=f},function(t,e,n){"use strict";function i(t,e,n){var i=t+(e.encrypted?"s":""),o=e.encrypted?e.hostEncrypted:e.hostUnencrypted;return i+"://"+o+n}function o(t,e){var n="/app/"+t,i="?protocol="+r["default"].PROTOCOL+"&client=js&version="+r["default"].VERSION+(e?"&"+e:"");return n+i}var r=n(5);e.ws={getInitial:function(t,e){return i("ws",e,o(t,"flash=false"))}},e.http={getInitial:function(t,e){var n=(e.httpPath||"/pusher")+o(t);return i("http",e,n)}},e.sockjs={getInitial:function(t,e){return i("http",e,e.httpPath||"/pusher")},getPath:function(t,e){return o(t)}}},function(t,e,n){"use strict";var i=n(22),o=function(){function t(t){this.hooks=t}return t.prototype.isSupported=function(t){return this.hooks.isSupported(t)},t.prototype.createConnection=function(t,e,n,o){return new i["default"](this.hooks,t,e,n,o)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(11),r=n(9),s=n(23),a=n(8),c=n(2),u=function(t){function e(e,n,i,o,r){t.call(this),this.initialize=c["default"].transportConnectionInitializer,this.hooks=e,this.name=n,this.priority=i,this.key=o,this.options=r,this.state="new",this.timeline=r.timeline,this.activityTimeout=r.activityTimeout,this.id=this.timeline.generateUniqueID()}return i(e,t),e.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},e.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},e.prototype.connect=function(){var t=this;if(this.socket||"initialized"!==this.state)return!1;var e=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(e,this.options)}catch(n){return o["default"].defer(function(){t.onError(n),t.changeState("closed")}),!1}return this.bindListeners(),a["default"].debug("Connecting",{transport:this.name,url:e}),this.changeState("connecting"),!0},e.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},e.prototype.send=function(t){var e=this;return"open"===this.state?(o["default"].defer(function(){e.socket&&e.socket.send(t)}),!0):!1},e.prototype.ping=function(){"open"===this.state&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(t){this.emit("error",{type:"WebSocketError",error:t}),this.timeline.error(this.buildTimelineMessage({error:t.toString()}))},e.prototype.onClose=function(t){t?this.changeState("closed",{code:t.code,reason:t.reason,wasClean:t.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(t){this.emit("message",t)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var t=this;this.socket.onopen=function(){t.onOpen()},this.socket.onerror=function(e){t.onError(e)},this.socket.onclose=function(e){t.onClose(e)},this.socket.onmessage=function(e){t.onMessage(e)},this.supportsPing()&&(this.socket.onactivity=function(){t.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(t,e){this.state=t,this.timeline.info(this.buildTimelineMessage({state:t,params:e})),this.emit(t,e)},e.prototype.buildTimelineMessage=function(t){return r.extend({cid:this.id},t)},e}(s["default"]);e.__esModule=!0,e["default"]=u},function(t,e,n){"use strict";var i=n(24),o=Function("return this")(),r=function(){function t(t){this.callbacks=new i["default"],this.global_callbacks=[],this.failThrough=t}return t.prototype.bind=function(t,e,n){return this.callbacks.add(t,e,n),this},t.prototype.bind_all=function(t){return this.global_callbacks.push(t),this},t.prototype.unbind=function(t,e,n){return this.callbacks.remove(t,e,n),this},t.prototype.unbind_all=function(t,e){return this.callbacks.remove(t,e),this},t.prototype.emit=function(t,e){var n;for(n=0;n<this.global_callbacks.length;n++)this.global_callbacks[n](t,e);var i=this.callbacks.get(t);if(i&&i.length>0)for(n=0;n<i.length;n++)i[n].fn.call(i[n].context||o,e);else this.failThrough&&this.failThrough(t,e);return this},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function i(t){return"_"+t}var o=n(9),r=function(){function t(){this._callbacks={}}return t.prototype.get=function(t){return this._callbacks[i(t)]},t.prototype.add=function(t,e,n){var o=i(t);this._callbacks[o]=this._callbacks[o]||[],this._callbacks[o].push({fn:e,context:n})},t.prototype.remove=function(t,e,n){if(!t&&!e&&!n)return void(this._callbacks={});var r=t?[i(t)]:o.keys(this._callbacks);e||n?this.removeCallback(r,e,n):this.removeAllCallbacks(r)},t.prototype.removeCallback=function(t,e,n){o.apply(t,function(t){this._callbacks[t]=o.filter(this._callbacks[t]||[],function(t){return e&&e!==t.fn||n&&n!==t.context}),0===this._callbacks[t].length&&delete this._callbacks[t]},this)},t.prototype.removeAllCallbacks=function(t){o.apply(t,function(t){delete this._callbacks[t]},this)},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=function(t){function e(){t.call(this);var e=this;void 0!==window.addEventListener&&(window.addEventListener("online",function(){e.emit("online")},!1),window.addEventListener("offline",function(){e.emit("offline")},!1))}return i(e,t),e.prototype.isOnline=function(){return void 0===window.navigator.onLine?!0:window.navigator.onLine},e}(o["default"]);e.NetInfo=r,e.Network=new r},function(t,e){"use strict";var n=function(t){var e;return e=t.encrypted?[":best_connected_ever",":ws_loop",[":delayed",2e3,[":http_fallback_loop"]]]:[":best_connected_ever",":ws_loop",[":delayed",2e3,[":wss_loop"]],[":delayed",5e3,[":http_fallback_loop"]]],[[":def","ws_options",{hostUnencrypted:t.wsHost+":"+t.wsPort,hostEncrypted:t.wsHost+":"+t.wssPort}],[":def","wss_options",[":extend",":ws_options",{encrypted:!0}]],[":def","sockjs_options",{hostUnencrypted:t.httpHost+":"+t.httpPort,hostEncrypted:t.httpHost+":"+t.httpsPort,httpPath:t.httpPath}],[":def","timeouts",{loop:!0,timeout:15e3,timeoutLimit:6e4}],[":def","ws_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def","streaming_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def_transport","ws","ws",3,":ws_options",":ws_manager"],[":def_transport","wss","ws",3,":wss_options",":ws_manager"],[":def_transport","sockjs","sockjs",1,":sockjs_options"],[":def_transport","xhr_streaming","xhr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xdr_streaming","xdr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xhr_polling","xhr_polling",1,":sockjs_options"],[":def_transport","xdr_polling","xdr_polling",1,":sockjs_options"],[":def","ws_loop",[":sequential",":timeouts",":ws"]],[":def","wss_loop",[":sequential",":timeouts",":wss"]],[":def","sockjs_loop",[":sequential",":timeouts",":sockjs"]],[":def","streaming_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_streaming"],":xhr_streaming",":xdr_streaming"]]],[":def","polling_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_polling"],":xhr_polling",":xdr_polling"]]],[":def","http_loop",[":if",[":is_supported",":streaming_loop"],[":best_connected_ever",":streaming_loop",[":delayed",4e3,[":polling_loop"]]],[":polling_loop"]]],[":def","http_fallback_loop",[":if",[":is_supported",":http_loop"],[":http_loop"],[":sockjs_loop"]]],[":def","strategy",[":cached",18e5,[":first_connected",[":if",[":is_supported",":ws"],e,":http_fallback_loop"]]]]]};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function i(){var t=this;t.timeline.info(t.buildTimelineMessage({transport:t.name+(t.options.encrypted?"s":"")})),t.hooks.isInitialized()?t.changeState("initialized"):t.hooks.file?(t.changeState("initializing"),o.Dependencies.load(t.hooks.file,{encrypted:t.options.encrypted},function(e,n){t.hooks.isInitialized()?(t.changeState("initialized"),n(!0)):(e&&t.onError(e),t.onClose(),n(!1))})):t.onClose()}var o=n(3);e.__esModule=!0,e["default"]=i},function(t,e,n){"use strict";var i=n(29),o=n(31);o["default"].createXDR=function(t,e){return this.createRequest(i["default"],t,e)},e.__esModule=!0,e["default"]=o["default"]},function(t,e,n){"use strict";var i=n(30),o={getRequest:function(t){var e=new window.XDomainRequest;return e.ontimeout=function(){t.emit("error",new i.RequestTimedOut),t.close()},e.onerror=function(e){t.emit("error",e),t.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText),t.emit("finished",200),t.close()},e},abortRequest:function(t){t.ontimeout=t.onerror=t.onprogress=t.onload=null,t.abort()}};e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.BadEventName=i;var o=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.RequestTimedOut=o;var r=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportPriorityTooLow=r;var s=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportClosed=s;var a=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedTransport=a;var c=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedStrategy=c},function(t,e,n){"use strict";var i=n(32),o=n(33),r=n(35),s=n(36),a=n(37),c={createStreamingSocket:function(t){return this.createSocket(r["default"],t)},createPollingSocket:function(t){return this.createSocket(s["default"],t)},createSocket:function(t,e){return new o["default"](t,e)},createXHR:function(t,e){return this.createRequest(a["default"],t,e)},createRequest:function(t,e,n){return new i["default"](t,e,n)}};e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(2),r=n(23),s=262144,a=function(t){function e(e,n,i){t.call(this),this.hooks=e,this.method=n,this.url=i}return i(e,t),e.prototype.start=function(t){var e=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){e.close()},o["default"].addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(t)},e.prototype.close=function(){this.unloader&&(o["default"].removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(t,e){for(;;){var n=this.advanceBuffer(e);if(!n)break;this.emit("chunk",{status:t,data:n})}this.isBufferTooLong(e)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(t){var e=t.slice(this.position),n=e.indexOf("\n");return-1!==n?(this.position+=n+1,e.slice(0,n)):null},e.prototype.isBufferTooLong=function(t){return this.position===t.length&&t.length>s},e}(r["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";function i(t){var e=/([^\?]*)\/*(\??.*)/.exec(t);return{base:e[1],queryString:e[2]}}function o(t,e){return t.base+"/"+e+"/xhr_send"}function r(t){var e=-1===t.indexOf("?")?"?":"&";return t+e+"t="+ +new Date+"&n="+f++}function s(t,e){var n=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(t);return n[1]+e+n[3]}function a(t){return Math.floor(Math.random()*t)}function c(t){for(var e=[],n=0;t>n;n++)e.push(a(32).toString(32));return e.join("")}var u=n(34),l=n(11),h=n(2),f=1,p=function(){function t(t,e){this.hooks=t,this.session=a(1e3)+"/"+c(8),this.location=i(e),this.readyState=u["default"].CONNECTING,this.openStream()}return t.prototype.send=function(t){return this.sendRaw(JSON.stringify([t]))},t.prototype.ping=function(){this.hooks.sendHeartbeat(this)},t.prototype.close=function(t,e){this.onClose(t,e,!0)},t.prototype.sendRaw=function(t){if(this.readyState!==u["default"].OPEN)return!1;try{return h["default"].createSocketRequest("POST",r(o(this.location,this.session))).start(t),!0}catch(e){return!1}},t.prototype.reconnect=function(){this.closeStream(),this.openStream()},t.prototype.onClose=function(t,e,n){this.closeStream(),this.readyState=u["default"].CLOSED,this.onclose&&this.onclose({code:t,reason:e,wasClean:n})},t.prototype.onChunk=function(t){if(200===t.status){this.readyState===u["default"].OPEN&&this.onActivity();var e,n=t.data.slice(0,1);switch(n){case"o":e=JSON.parse(t.data.slice(1)||"{}"),
    this.onOpen(e);break;case"a":e=JSON.parse(t.data.slice(1)||"[]");for(var i=0;i<e.length;i++)this.onEvent(e[i]);break;case"m":e=JSON.parse(t.data.slice(1)||"null"),this.onEvent(e);break;case"h":this.hooks.onHeartbeat(this);break;case"c":e=JSON.parse(t.data.slice(1)||"[]"),this.onClose(e[0],e[1],!0)}}},t.prototype.onOpen=function(t){this.readyState===u["default"].CONNECTING?(t&&t.hostname&&(this.location.base=s(this.location.base,t.hostname)),this.readyState=u["default"].OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},t.prototype.onEvent=function(t){this.readyState===u["default"].OPEN&&this.onmessage&&this.onmessage({data:t})},t.prototype.onActivity=function(){this.onactivity&&this.onactivity()},t.prototype.onError=function(t){this.onerror&&this.onerror(t)},t.prototype.openStream=function(){var t=this;this.stream=h["default"].createSocketRequest("POST",r(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(e){t.onChunk(e)}),this.stream.bind("finished",function(e){t.hooks.onFinished(t,e)}),this.stream.bind("buffer_too_long",function(){t.reconnect()});try{this.stream.start()}catch(e){l["default"].defer(function(){t.onError(e),t.onClose(1006,"Could not start streaming",!1)})}},t.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},t}();e.__esModule=!0,e["default"]=p},function(t,e){"use strict";var n;!function(t){t[t.CONNECTING=0]="CONNECTING",t[t.OPEN=1]="OPEN",t[t.CLOSED=3]="CLOSED"}(n||(n={})),e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr_streaming"+t.queryString},onHeartbeat:function(t){t.sendRaw("[]")},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr"+t.queryString},onHeartbeat:function(){},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){200===e?t.reconnect():t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(2),o={getRequest:function(t){var e=i["default"].getXHRAPI(),n=new e;return n.onreadystatechange=n.onprogress=function(){switch(n.readyState){case 3:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText);break;case 4:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText),t.emit("finished",n.status),t.close()}},n},abortRequest:function(t){t.onreadystatechange=null,t.abort()}};e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(9),o=n(11),r=n(39),s=function(){function t(t,e,n){this.key=t,this.session=e,this.events=[],this.options=n||{},this.sent=0,this.uniqueID=0}return t.prototype.log=function(t,e){t<=this.options.level&&(this.events.push(i.extend({},e,{timestamp:o["default"].now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},t.prototype.error=function(t){this.log(r["default"].ERROR,t)},t.prototype.info=function(t){this.log(r["default"].INFO,t)},t.prototype.debug=function(t){this.log(r["default"].DEBUG,t)},t.prototype.isEmpty=function(){return 0===this.events.length},t.prototype.send=function(t,e){var n=this,o=i.extend({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],t(o,function(t,i){t||n.sent++,e&&e(t,i)}),!0},t.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},t}();e.__esModule=!0,e["default"]=s},function(t,e){"use strict";var n;!function(t){t[t.ERROR=3]="ERROR",t[t.INFO=6]="INFO",t[t.DEBUG=7]="DEBUG"}(n||(n={})),e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function i(t){return function(e){return[t.apply(this,arguments),e]}}function o(t){return"string"==typeof t&&":"===t.charAt(0)}function r(t,e){return e[t.slice(1)]}function s(t,e){if(0===t.length)return[[],e];var n=u(t[0],e),i=s(t.slice(1),n[1]);return[[n[0]].concat(i[0]),i[1]]}function a(t,e){if(!o(t))return[t,e];var n=r(t,e);if(void 0===n)throw"Undefined symbol "+t;return[n,e]}function c(t,e){if(o(t[0])){var n=r(t[0],e);if(t.length>1){if("function"!=typeof n)throw"Calling non-function "+t[0];var i=[l.extend({},e)].concat(l.map(t.slice(1),function(t){return u(t,l.extend({},e))[0]}));return n.apply(this,i)}return[n,e]}return s(t,e)}function u(t,e){return"string"==typeof t?a(t,e):"object"==typeof t&&t instanceof Array&&t.length>0?c(t,e):[t,e]}var l=n(9),h=n(11),f=n(41),p=n(30),d=n(55),y=n(56),m=n(57),v=n(58),g=n(59),_=n(60),b=n(61),k=n(2),w=k["default"].Transports;e.build=function(t,e){var n=l.extend({},C,e);return u(t,n)[1].strategy};var S={isSupported:function(){return!1},connect:function(t,e){var n=h["default"].defer(function(){e(new p.UnsupportedStrategy)});return{abort:function(){n.ensureAborted()},forceMinPriority:function(){}}}},C={extend:function(t,e,n){return[l.extend({},e,n),t]},def:function(t,e,n){if(void 0!==t[e])throw"Redefining symbol "+e;return t[e]=n,[void 0,t]},def_transport:function(t,e,n,i,o,r){var s=w[n];if(!s)throw new p.UnsupportedTransport(n);var a,c=!(t.enabledTransports&&-1===l.arrayIndexOf(t.enabledTransports,e)||t.disabledTransports&&-1!==l.arrayIndexOf(t.disabledTransports,e));a=c?new d["default"](e,i,r?r.getAssistant(s):s,l.extend({key:t.key,encrypted:t.encrypted,timeline:t.timeline,ignoreNullOrigin:t.ignoreNullOrigin},o)):S;var u=t.def(t,e,a)[1];return u.Transports=t.Transports||{},u.Transports[e]=a,[void 0,u]},transport_manager:i(function(t,e){return new f["default"](e)}),sequential:i(function(t,e){var n=Array.prototype.slice.call(arguments,2);return new y["default"](n,e)}),cached:i(function(t,e,n){return new v["default"](n,t.Transports,{ttl:e,timeline:t.timeline,encrypted:t.encrypted})}),first_connected:i(function(t,e){return new b["default"](e)}),best_connected_ever:i(function(){var t=Array.prototype.slice.call(arguments,1);return new m["default"](t)}),delayed:i(function(t,e,n){return new g["default"](n,{delay:e})}),"if":i(function(t,e,n,i){return new _["default"](e,n,i)}),is_supported:i(function(t,e){return function(){return e.isSupported()}})}},function(t,e,n){"use strict";var i=n(42),o=function(){function t(t){this.options=t||{},this.livesLeft=this.options.lives||1/0}return t.prototype.getAssistant=function(t){return i["default"].createAssistantToTheTransportManager(this,t,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},t.prototype.isAlive=function(){return this.livesLeft>0},t.prototype.reportDeath=function(){this.livesLeft-=1},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(43),o=n(44),r=n(47),s=n(48),a=n(49),c=n(50),u=n(51),l=n(53),h=n(54),f={createChannels:function(){return new h["default"]},createConnectionManager:function(t,e){return new l["default"](t,e)},createChannel:function(t,e){return new u["default"](t,e)},createPrivateChannel:function(t,e){return new c["default"](t,e)},createPresenceChannel:function(t,e){return new a["default"](t,e)},createTimelineSender:function(t,e){return new s["default"](t,e)},createAuthorizer:function(t,e){return new r["default"](t,e)},createHandshake:function(t,e){return new o["default"](t,e)},createAssistantToTheTransportManager:function(t,e,n){return new i["default"](t,e,n)}};e.__esModule=!0,e["default"]=f},function(t,e,n){"use strict";var i=n(11),o=n(9),r=function(){function t(t,e,n){this.manager=t,this.transport=e,this.minPingDelay=n.minPingDelay,this.maxPingDelay=n.maxPingDelay,this.pingDelay=void 0}return t.prototype.createConnection=function(t,e,n,r){var s=this;r=o.extend({},r,{activityTimeout:this.pingDelay});var a=this.transport.createConnection(t,e,n,r),c=null,u=function(){a.unbind("open",u),a.bind("closed",l),c=i["default"].now()},l=function(t){if(a.unbind("closed",l),1002===t.code||1003===t.code)s.manager.reportDeath();else if(!t.wasClean&&c){var e=i["default"].now()-c;e<2*s.maxPingDelay&&(s.manager.reportDeath(),s.pingDelay=Math.max(e/2,s.minPingDelay))}};return a.bind("open",u),a},t.prototype.isSupported=function(t){return this.manager.isAlive()&&this.transport.isSupported(t)},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(9),o=n(45),r=n(46),s=function(){function t(t,e){this.transport=t,this.callback=e,this.bindListeners()}return t.prototype.close=function(){this.unbindListeners(),this.transport.close()},t.prototype.bindListeners=function(){var t=this;this.onMessage=function(e){t.unbindListeners();var n;try{n=o.processHandshake(e)}catch(i){return t.finish("error",{error:i}),void t.transport.close()}"connected"===n.action?t.finish("connected",{connection:new r["default"](n.id,t.transport),activityTimeout:n.activityTimeout}):(t.finish(n.action,{error:n.error}),t.transport.close())},this.onClosed=function(e){t.unbindListeners();var n=o.getCloseAction(e)||"backoff",i=o.getCloseError(e);t.finish(n,{error:i})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},t.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},t.prototype.finish=function(t,e){this.callback(i.extend({transport:this.transport,action:t},e))},t}();e.__esModule=!0,e["default"]=s},function(t,e){"use strict";e.decodeMessage=function(t){try{var e=JSON.parse(t.data);if("string"==typeof e.data)try{e.data=JSON.parse(e.data)}catch(n){if(!(n instanceof SyntaxError))throw n}return e}catch(n){throw{type:"MessageParseError",error:n,data:t.data}}},e.encodeMessage=function(t){return JSON.stringify(t)},e.processHandshake=function(t){if(t=e.decodeMessage(t),"pusher:connection_established"===t.event){if(!t.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:t.data.socket_id,activityTimeout:1e3*t.data.activity_timeout}}if("pusher:error"===t.event)return{action:this.getCloseAction(t.data),error:this.getCloseError(t.data)};throw"Invalid handshake"},e.getCloseAction=function(t){return t.code<4e3?t.code>=1002&&t.code<=1004?"backoff":null:4e3===t.code?"ssl_only":t.code<4100?"refused":t.code<4200?"backoff":t.code<4300?"retry":"refused"},e.getCloseError=function(t){return 1e3!==t.code&&1001!==t.code?{type:"PusherError",data:{code:t.code,message:t.reason||t.message}}:null}},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(9),r=n(23),s=n(45),a=n(8),c=function(t){function e(e,n){t.call(this),this.id=e,this.transport=n,this.activityTimeout=n.activityTimeout,this.bindListeners()}return i(e,t),e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(t){return this.transport.send(t)},e.prototype.send_event=function(t,e,n){var i={event:t,data:e};return n&&(i.channel=n),a["default"].debug("Event sent",i),this.send(s.encodeMessage(i))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var t=this,e={message:function(e){var n;try{n=s.decodeMessage(e)}catch(i){t.emit("error",{type:"MessageParseError",error:i,data:e.data})}if(void 0!==n){switch(a["default"].debug("Event recd",n),n.event){case"pusher:error":t.emit("error",{type:"PusherError",data:n.data});break;case"pusher:ping":t.emit("ping");break;case"pusher:pong":t.emit("pong")}t.emit("message",n)}},activity:function(){t.emit("activity")},error:function(e){t.emit("error",{type:"WebSocketError",error:e})},closed:function(e){n(),e&&e.code&&t.handleCloseEvent(e),t.transport=null,t.emit("closed")}},n=function(){o.objectApply(e,function(e,n){t.transport.unbind(n,e)})};o.objectApply(e,function(e,n){t.transport.bind(n,e)})},e.prototype.handleCloseEvent=function(t){var e=s.getCloseAction(t),n=s.getCloseError(t);n&&this.emit("error",n),e&&this.emit(e)},e}(r["default"]);e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=n(2),o=function(){function t(t,e){this.channel=t;var n=e.authTransport;if("undefined"==typeof i["default"].getAuthorizers()[n])throw"'"+n+"' is not a recognized auth transport";this.type=n,this.options=e,this.authOptions=(e||{}).auth||{}}return t.prototype.composeQuery=function(t){var e="socket_id="+encodeURIComponent(t)+"&channel_name="+encodeURIComponent(this.channel.name);for(var n in this.authOptions.params)e+="&"+encodeURIComponent(n)+"="+encodeURIComponent(this.authOptions.params[n]);return e},t.prototype.authorize=function(e,n){return t.authorizers=t.authorizers||i["default"].getAuthorizers(),t.authorizers[this.type].call(this,i["default"],e,n)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(2),o=function(){function t(t,e){this.timeline=t,this.options=e||{}}return t.prototype.send=function(t,e){this.timeline.isEmpty()||this.timeline.send(i["default"].TimelineTransport.getAgent(this,t),e)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(50),r=n(8),s=n(52),a=function(t){function e(e,n){t.call(this,e,n),this.members=new s["default"]}return i(e,t),e.prototype.authorize=function(e,n){var i=this;t.prototype.authorize.call(this,e,function(t,e){if(!t){if(void 0===e.channel_data)return r["default"].warn("Invalid auth response for channel '"+i.name+"', expected 'channel_data' field"),void n("Invalid auth response");var o=JSON.parse(e.channel_data);i.members.setMyID(o.user_id)}n(t,e)})},e.prototype.handleEvent=function(t,e){switch(t){case"pusher_internal:subscription_succeeded":this.members.onSubscription(e),this.subscribed=!0,this.emit("pusher:subscription_succeeded",this.members);break;case"pusher_internal:member_added":var n=this.members.addMember(e);this.emit("pusher:member_added",n);break;case"pusher_internal:member_removed":var i=this.members.removeMember(e);i&&this.emit("pusher:member_removed",i);break;default:o["default"].prototype.handleEvent.call(this,t,e)}},e.prototype.disconnect=function(){this.members.reset(),t.prototype.disconnect.call(this)},e}(o["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(42),r=n(51),s=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.authorize=function(t,e){var n=o["default"].createAuthorizer(this,this.pusher.config);return n.authorize(t,e)},e}(r["default"]);e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=n(30),s=n(8),a=function(t){function e(e,n){t.call(this,function(t,n){s["default"].debug("No callbacks on "+e+" for "+t)}),this.name=e,this.pusher=n,this.subscribed=!1}return i(e,t),e.prototype.authorize=function(t,e){return e(!1,{})},e.prototype.trigger=function(t,e){if(0!==t.indexOf("client-"))throw new r.BadEventName("Event '"+t+"' does not start with 'client-'");return this.pusher.send_event(t,e,this.name)},e.prototype.disconnect=function(){this.subscribed=!1},e.prototype.handleEvent=function(t,e){0===t.indexOf("pusher_internal:")?"pusher_internal:subscription_succeeded"===t&&(this.subscribed=!0,this.emit("pusher:subscription_succeeded",e)):this.emit(t,e)},e.prototype.subscribe=function(){var t=this;this.authorize(this.pusher.connection.socket_id,function(e,n){e?t.handleEvent("pusher:subscription_error",n):t.pusher.send_event("pusher:subscribe",{auth:n.auth,channel_data:n.channel_data,channel:t.name})})},e.prototype.unsubscribe=function(){this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e}(o["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";var i=n(9),o=function(){function t(){this.reset()}return t.prototype.get=function(t){return Object.prototype.hasOwnProperty.call(this.members,t)?{id:t,info:this.members[t]}:null},t.prototype.each=function(t){var e=this;i.objectApply(this.members,function(n,i){t(e.get(i))})},t.prototype.setMyID=function(t){this.myID=t},t.prototype.onSubscription=function(t){this.members=t.presence.hash,this.count=t.presence.count,this.me=this.get(this.myID)},t.prototype.addMember=function(t){return null===this.get(t.user_id)&&this.count++,this.members[t.user_id]=t.user_info,this.get(t.user_id)},t.prototype.removeMember=function(t){var e=this.get(t.user_id);return e&&(delete this.members[t.user_id],this.count--),e},t.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=n(12),s=n(8),a=n(9),c=n(2),u=function(t){function e(e,n){var i=this;t.call(this),this.key=e,this.options=n||{},this.state="initialized",this.connection=null,this.encrypted=!!n.encrypted,this.timeline=this.options.timeline,this.connectionCallbacks=this.buildConnectionCallbacks(),this.errorCallbacks=this.buildErrorCallbacks(),this.handshakeCallbacks=this.buildHandshakeCallbacks(this.errorCallbacks);var o=c["default"].getNetwork();o.bind("online",function(){i.timeline.info({netinfo:"online"}),("connecting"===i.state||"unavailable"===i.state)&&i.retryIn(0)}),o.bind("offline",function(){i.timeline.info({netinfo:"offline"}),i.connection&&i.sendActivityCheck()}),this.updateStrategy()}return i(e,t),e.prototype.connect=function(){if(!this.connection&&!this.runner){if(!this.strategy.isSupported())return void this.updateState("failed");this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(t){return this.connection?this.connection.send(t):!1},e.prototype.send_event=function(t,e,n){return this.connection?this.connection.send_event(t,e,n):!1},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isEncrypted=function(){return this.encrypted},e.prototype.startConnecting=function(){var t=this,e=function(n,i){n?t.runner=t.strategy.connect(0,e):"error"===i.action?(t.emit("error",{type:"HandshakeError",error:i.error}),t.timeline.error({handshakeError:i.error})):(t.abortConnecting(),t.handshakeCallbacks[i.action](i))};this.runner=this.strategy.connect(0,e)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var t=this.abandonConnection();t.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,encrypted:this.encrypted})},e.prototype.retryIn=function(t){var e=this;this.timeline.info({action:"retry",delay:t}),t>0&&this.emit("connecting_in",Math.round(t/1e3)),this.retryTimer=new r.OneOffTimer(t||0,function(){e.disconnectInternally(),e.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var t=this;this.unavailableTimer=new r.OneOffTimer(this.options.unavailableTimeout,function(){t.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new r.OneOffTimer(this.options.pongTimeout,function(){t.timeline.error({pong_timed_out:t.options.pongTimeout}),t.retryIn(0)})},e.prototype.resetActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection.handlesActivityChecks()||(this.activityTimer=new r.OneOffTimer(this.activityTimeout,function(){t.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(){var t=this;return{message:function(e){t.resetActivityCheck(),t.emit("message",e)},ping:function(){t.send_event("pusher:pong",{})},activity:function(){t.resetActivityCheck()},error:function(e){t.emit("error",{type:"WebSocketError",error:e})},closed:function(){t.abandonConnection(),t.shouldRetry()&&t.retryIn(1e3)}}},e.prototype.buildHandshakeCallbacks=function(t){var e=this;return a.extend({},t,{connected:function(t){e.activityTimeout=Math.min(e.options.activityTimeout,t.activityTimeout,t.connection.activityTimeout||1/0),e.clearUnavailableTimer(),e.setConnection(t.connection),e.socket_id=e.connection.id,e.updateState("connected",{socket_id:e.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var t=this,e=function(e){return function(n){n.error&&t.emit("error",{type:"WebSocketError",error:n.error}),e(n)}};return{ssl_only:e(function(){t.encrypted=!0,t.updateStrategy(),t.retryIn(0)}),refused:e(function(){t.disconnect()}),backoff:e(function(){t.retryIn(1e3)}),retry:e(function(){t.retryIn(0)})}},e.prototype.setConnection=function(t){this.connection=t;for(var e in this.connectionCallbacks)this.connection.bind(e,this.connectionCallbacks[e]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(this.connection){this.stopActivityCheck();for(var t in this.connectionCallbacks)this.connection.unbind(t,this.connectionCallbacks[t]);var e=this.connection;return this.connection=null,e}},e.prototype.updateState=function(t,e){var n=this.state;if(this.state=t,n!==t){var i=t;"connected"===i&&(i+=" with new socket ID "+e.socket_id),s["default"].debug("State changed",n+" -> "+i),this.timeline.info({state:t,params:e}),this.emit("state_change",{previous:n,current:t}),this.emit(t,e)}},e.prototype.shouldRetry=function(){return"connecting"===this.state||"connected"===this.state},e}(o["default"]);e.__esModule=!0,e["default"]=u},function(t,e,n){"use strict";function i(t,e){return 0===t.indexOf("private-")?r["default"].createPrivateChannel(t,e):0===t.indexOf("presence-")?r["default"].createPresenceChannel(t,e):r["default"].createChannel(t,e)}var o=n(9),r=n(42),s=function(){function t(){this.channels={}}return t.prototype.add=function(t,e){return this.channels[t]||(this.channels[t]=i(t,e)),this.channels[t]},t.prototype.all=function(){return o.values(this.channels)},t.prototype.find=function(t){return this.channels[t]},t.prototype.remove=function(t){var e=this.channels[t];return delete this.channels[t],e},t.prototype.disconnect=function(){o.objectApply(this.channels,function(t){t.disconnect()})},t}();e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";function i(t,e){return r["default"].defer(function(){e(t)}),{abort:function(){},forceMinPriority:function(){}}}var o=n(42),r=n(11),s=n(30),a=n(9),c=function(){function t(t,e,n,i){this.name=t,this.priority=e,this.transport=n,this.options=i||{}}return t.prototype.isSupported=function(){return this.transport.isSupported({encrypted:this.options.encrypted})},t.prototype.connect=function(t,e){var n=this;if(!this.isSupported())return i(new s.UnsupportedStrategy,e);if(this.priority<t)return i(new s.TransportPriorityTooLow,e);var r=!1,c=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),u=null,l=function(){c.unbind("initialized",l),c.connect()},h=function(){u=o["default"].createHandshake(c,function(t){r=!0,d(),e(null,t)})},f=function(t){d(),e(t)},p=function(){d();var t;try{t=JSON.stringify(c)}catch(n){t=a.safeJSONStringify(c)}e(new s.TransportClosed(t))},d=function(){c.unbind("initialized",l),c.unbind("open",h),c.unbind("error",f),c.unbind("closed",p)};return c.bind("initialized",l),c.bind("open",h),c.bind("error",f),c.bind("closed",p),c.initialize(),{abort:function(){r||(d(),u?u.close():c.close())},forceMinPriority:function(t){r||n.priority<t&&(u?u.close():c.close())}}},t}();e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=n(9),o=n(11),r=n(12),s=function(){function t(t,e){this.strategies=t,this.loop=Boolean(e.loop),this.failFast=Boolean(e.failFast),this.timeout=e.timeout,this.timeoutLimit=e.timeoutLimit}return t.prototype.isSupported=function(){return i.any(this.strategies,o["default"].method("isSupported"))},t.prototype.connect=function(t,e){var n=this,i=this.strategies,o=0,r=this.timeout,s=null,a=function(c,u){u?e(null,u):(o+=1,n.loop&&(o%=i.length),o<i.length?(r&&(r=2*r,n.timeoutLimit&&(r=Math.min(r,n.timeoutLimit))),s=n.tryStrategy(i[o],t,{timeout:r,failFast:n.failFast},a)):e(!0))};return s=this.tryStrategy(i[o],t,{timeout:r,failFast:this.failFast},a),{abort:function(){s.abort()},forceMinPriority:function(e){t=e,s&&s.forceMinPriority(e)}}},t.prototype.tryStrategy=function(t,e,n,i){var o=null,s=null;return n.timeout>0&&(o=new r.OneOffTimer(n.timeout,function(){s.abort(),i(!0)})),s=t.connect(e,function(t,e){t&&o&&o.isRunning()&&!n.failFast||(o&&o.ensureAborted(),i(t,e))}),{abort:function(){o&&o.ensureAborted(),s.abort()},forceMinPriority:function(t){s.forceMinPriority(t)}}},t}();e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";function i(t,e,n){var i=s.map(t,function(t,i,o,r){return t.connect(e,n(i,r))});return{abort:function(){s.apply(i,r)},forceMinPriority:function(t){s.apply(i,function(e){e.forceMinPriority(t)})}}}function o(t){return s.all(t,function(t){return Boolean(t.error)})}function r(t){t.error||t.aborted||(t.abort(),t.aborted=!0)}var s=n(9),a=n(11),c=function(){function t(t){this.strategies=t}return t.prototype.isSupported=function(){return s.any(this.strategies,a["default"].method("isSupported"))},t.prototype.connect=function(t,e){return i(this.strategies,t,function(t,n){return function(i,r){return n[t].error=i,i?void(o(n)&&e(!0)):(s.apply(n,function(t){t.forceMinPriority(r.transport.priority)}),void e(null,r))}})},t}();e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";function i(t){return"pusherTransport"+(t?"Encrypted":"Unencrypted")}function o(t){var e=c["default"].getLocalStorage();if(e)try{var n=e[i(t)];if(n)return JSON.parse(n)}catch(o){s(t)}return null}function r(t,e,n){var o=c["default"].getLocalStorage();if(o)try{o[i(t)]=JSON.stringify({timestamp:a["default"].now(),transport:e,latency:n})}catch(r){}}function s(t){var e=c["default"].getLocalStorage();if(e)try{delete e[i(t)]}catch(n){}}var a=n(11),c=n(2),u=n(56),l=function(){function t(t,e,n){this.strategy=t,this.transports=e,this.ttl=n.ttl||18e5,this.encrypted=n.encrypted,this.timeline=n.timeline}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.encrypted,i=o(n),c=[this.strategy];if(i&&i.timestamp+this.ttl>=a["default"].now()){var l=this.transports[i.transport];l&&(this.timeline.info({cached:!0,transport:i.transport,latency:i.latency}),c.push(new u["default"]([l],{timeout:2*i.latency+1e3,failFast:!0})))}var h=a["default"].now(),f=c.pop().connect(t,function p(i,o){i?(s(n),c.length>0?(h=a["default"].now(),f=c.pop().connect(t,p)):e(i)):(r(n,o.transport.name,a["default"].now()-h),e(null,o))});return{abort:function(){f.abort()},forceMinPriority:function(e){t=e,f&&f.forceMinPriority(e)}}},t}();e.__esModule=!0,e["default"]=l},function(t,e,n){"use strict";var i=n(12),o=function(){function t(t,e){var n=e.delay;this.strategy=t,this.options={delay:n}}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n,o=this.strategy,r=new i.OneOffTimer(this.options.delay,function(){n=o.connect(t,e)});return{abort:function(){r.ensureAborted(),n&&n.abort()},forceMinPriority:function(e){t=e,n&&n.forceMinPriority(e)}}},t}();e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=function(){function t(t,e,n){this.test=t,this.trueBranch=e,this.falseBranch=n}return t.prototype.isSupported=function(){var t=this.test()?this.trueBranch:this.falseBranch;return t.isSupported()},t.prototype.connect=function(t,e){var n=this.test()?this.trueBranch:this.falseBranch;return n.connect(t,e)},t}();e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n=function(){function t(t){this.strategy=t}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.strategy.connect(t,function(t,i){i&&n.abort(),e(t,i)});return n},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(5);e.getGlobalConfig=function(){return{wsHost:i["default"].host,wsPort:i["default"].ws_port,wssPort:i["default"].wss_port,httpHost:i["default"].sockjs_host,httpPort:i["default"].sockjs_http_port,httpsPort:i["default"].sockjs_https_port,httpPath:i["default"].sockjs_path,statsHost:i["default"].stats_host,authEndpoint:i["default"].channel_auth_endpoint,authTransport:i["default"].channel_auth_transport,activity_timeout:i["default"].activity_timeout,pong_timeout:i["default"].pong_timeout,unavailable_timeout:i["default"].unavailable_timeout}},e.getClusterConfig=function(t){return{wsHost:"ws-"+t+".pusher.com",httpHost:"sockjs-"+t+".pusher.com"}}}])});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

// detecting iOS UIWebView by indexedDB
var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    // webpack attempts to inject a shim for setImmediate
    // if it is used as a global, so we have to work around that to
    // avoid bundling unnecessary code.
    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
    timerFunc = context.setImmediate || setTimeout;
  }
  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var c;
var prev;
var i;
var l;
var lastFilterIndex;
var inSingle;
var inDouble;
var curly;
var square;
var paren;
/**
 * Push a filter to the current directive object
 */

function pushFilter() {
  var exp = str.slice(lastFilterIndex, i).trim();
  var filter;
  if (exp) {
    filter = {};
    var tokens = exp.match(filterTokenRE);
    filter.name = tokens[0];
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg);
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter);
  }
  lastFilterIndex = i + 1;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  inSingle = inDouble = false;
  curly = square = paren = 0;
  lastFilterIndex = 0;
  dir = {};

  for (i = 0, l = str.length; i < l; i++) {
    prev = c;
    c = str.charCodeAt(i);
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
    } else if (c === 0x7C && // pipe
    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        dir.expression = str.slice(0, i).trim();
      } else {
        // already has filter
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if (process.env.NODE_ENV !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	isIos: isIos,
	iosVersionMatch: iosVersionMatch,
	iosVersion: iosVersion,
	hasMutationObserverBug: hasMutationObserverBug,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to reigster itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new isntance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.value;
      if (isArray(model)) {
        var val = self.getValue();
        if (el.checked) {
          if (indexOf(model, val) < 0) {
            model.push(val);
          }
        } else {
          model.$remove(val);
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  dirs.sort(directiveComparator);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator(a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
  return a > b ? -1 : a === b ? 0 : 1;
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;
      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.26';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":1}],3:[function(require,module,exports){
'use strict';

var Vue = require('vue');

var vm = new Vue({
    el: '#app',
    methods: {
        backToTop: function backToTop() {
            $('body').animate({ scrollTop: 0 }, 500);
        },
        search: function search(e) {
            window.location.href = e.target.action;
        },
        uploadAvatar: function uploadAvatar() {
            $("#avatar-uploader").click();
        },
        checkIn: function checkIn() {
            var _this2 = this;

            if (!this.User.checkedIn) {
                (function () {
                    var _this = _this2,
                        button = $(".checkin-button");

                    button.addClass("checked");

                    _this2.request({
                        url: '/checkin',
                        type: 'post',
                        callback: function callback(success) {
                            if (success) _this.User.checkedIn = true;else button.removeClass("checked");
                        }
                    });
                })();
            }
        },
        signOut: function signOut(e) {
            this.warningAlert(signOutMessages, function () {
                window.location.href = $(e.target).attr('data-href');
            });
        },

        warningAlert: function warningAlert(messages, callback) {
            swal({
                title: messages.title,
                text: messages.text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: messages.confirm,
                cancelButtonText: messages.cancel,
                closeOnConfirm: false,
                showLoaderOnConfirm: true
            }, function (isConfirm) {
                if (isConfirm) callback();
            });
        },
        autoCloseAlert: function autoCloseAlert(param) {
            swal({
                title: param.title,
                text: param.text,
                type: param.type || "success",
                showConfirmButton: false,
                timer: param.timer || 1500
            });
        },
        popupPrompt: function popupPrompt(param, callback) {
            swal({
                title: param.title,
                text: param.text,
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "pop",
                inputPlaceholder: param.inputPlaceholder,
                showLoaderOnConfirm: param.ajax,
                confirmButtonText: param.confirmButtonText,
                cancelButtonText: param.cancelButtonText,
                html: true
            }, function (inputValue) {
                if (inputValue === false) return false;

                if (inputValue === "") {
                    swal.showInputError(param.inputEmptyText);
                    return false;
                }

                callback(inputValue);
            });
        },
        request: function request(param) {
            if (param.data == undefined) {
                param.data = { _token: this.token };
            } else {
                param.data._token = this.token;
            }

            $.ajax({
                type: param.type,
                url: param.url,
                data: param.data,
                success: function success(data) {
                    if (data.status != undefined) {
                        if (data.message != undefined) toastr[data.status](data.message);

                        param.callback(data.status != 'error', data);
                    }
                },
                error: function error(er) {
                    toastr.error(er.responseText);
                    param.callback(false);
                },
                complete: function complete(ev) {
                    if (param.complete != undefined) {
                        param.complete(ev);
                    }
                }
            });
        },
        playNotificationSound: function playNotificationSound() {
            document.getElementById("notification-sound").play();
        },
        playMessageSound: function playMessageSound() {
            document.getElementById("new-message-sound").play();
        },
        readInbox: function readInbox(e) {
            var inbox = e.target,
                $this = this;

            $(inbox).addClass('reading');

            this.request({
                url: '/read/notification',
                type: 'PATCH',
                data: {
                    id: $(inbox).attr('inbox-id')
                },
                callback: function callback(success) {
                    $(inbox).removeClass('reading');

                    if (success) {
                        $this.Inboxes.$remove($this.Inboxes[$(inbox).attr('inbox')]);
                        $this.User.unread--;
                    }
                }
            });
        },
        readAllInbox: function readAllInbox() {
            var ids = [],
                $this = this;

            $(".Inbox__item > a").each(function () {
                ids.push($(this).attr('inbox-id'));
                $(this).addClass('reading');
            });

            this.request({
                url: '/read/notification',
                type: 'PATCH',
                data: {
                    id: ids.join(',')
                },
                callback: function callback(success) {
                    if (success) {
                        for (var id in ids) {
                            $this.Inboxes.pop();
                        }$this.User.unread -= ids.length;
                    }
                }
            });
        }
    },
    data: {
        displayBackTop: false,
        searchText: '',
        User: CurrentUser,
        token: _TOKEN,
        Inboxes: JSON.parse($(".Inbox").attr('data-inbox') || '{}')
    }
});

$(window).scroll(function () {
    vm.displayBackTop = $(window).scrollTop() >= 500;
});

var stageAndContentHeight = function stageAndContentHeight() {
    var content = $('.Stage'),
        body = $('body'),
        nav = $(".Nav"),
        height = void 0,
        footerHeight = $('.Footer').outerHeight();

    height = $(window).height() - nav.height() - footerHeight;

    content.attr('style', 'min-height:' + height + 'px !important');
};

stageAndContentHeight();

window.vm = vm;
window.onresize = stageAndContentHeight;

$(function () {
    var loadingIcon = '<i class="fa fa-circle-o-notch fa-spin"></i>&nbsp;';

    $("body").timeago();

    $("form.ajax").each(function () {
        var form = this;
        $(this).on('submit', function (e) {
            e.preventDefault();

            $(form).addClass('loading');

            var button = $(form).find("button[type=submit]")[0];

            if (button) {
                var originText = button.innerHTML;
                $(button).html(loadingIcon + '&nbsp;' + originText);
            }

            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                timeout: 0,
                error: function error(_error) {
                    if (_error.status === 422) {
                        var errors = JSON.parse(_error.responseText);

                        var _loop = function _loop(er) {
                            var sel = '[name=' + er + ']',
                                groupEl = $($(form).find(sel)[0]).parents('.form-group')[0];
                            // Add error class to the form-group
                            $(groupEl).addClass('has-error shaky');
                            setTimeout(function () {
                                return $(groupEl).removeClass('has-error shaky');
                            }, 8000);

                            toastr.error(errors[er][0]);
                        };

                        for (var er in errors) {
                            _loop(er);
                        }
                    }
                },
                success: function success(data) {
                    if ($(form).attr('callback')) {
                        var callback = $(form).attr('callback');
                        callback();

                        return false;
                    }

                    if (data.status !== 'error') {
                        if (typeof data.redirectUrl != 'undefined') {
                            if (data.redirectUrl == 'refresh') {
                                window.location.reload();
                            } else {
                                window.location.href = data.redirectUrl;
                            }
                        } else if (typeof data.newWindowUrl != 'undefined') {
                            window.open(data.newWindowUrl, "_blank");
                        } else if (typeof data.reload != 'undefined') {
                            toastr.success(data.message);
                            $.pjax.reload(pjaxContainer);
                        } else {
                            toastr.success(data.message);
                        }
                    } else {
                        toastr.error(data.message);
                    }
                },
                complete: function complete() {
                    if (button) {
                        $(button).html(originText);
                        $(form).removeClass('loading');
                        $(form).addClass('done-loaded');
                        setTimeout(function () {
                            $(form).removeClass('done-loaded');
                        }, 300);
                    }
                }
            });
        });
    });

    $("#avatar-uploader").on('change', function (ev) {
        var input = ev.target;
        $($(input).parents("form")[0]).submit();
    });

    // Uniform
    var checkBox = $("input[type=radio]:not(.no-uniform)");
    if (checkBox.length > 0) {
        checkBox.each(function () {
            $(this).uniform();
        });
    }

    // Slimscroll
    $('.SlimScroll').slimscroll({
        allowPageScroll: true
    });

    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
});

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

},{"vue":2}]},{},[3]);
=======
if(function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){var n=i(t,e)?r:o;n(t,e)}var i,o,r;"classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(i=function(t,n){return e(n).test(t.className)},o=function(t,e){i(t,e)||(t.className=t.className+" "+e)},r=function(t,n){t.className=t.className.replace(e(n)," ")});var s={hasClass:i,addClass:o,removeClass:r,toggleClass:n,has:i,add:o,remove:r,toggle:n};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=!!t&&"length"in t&&t.length,n=rt.type(t);return"function"===n||rt.isWindow(t)?!1:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function i(t,e,n){if(rt.isFunction(e))return rt.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return rt.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(vt.test(e))return rt.filter(e,t,n);e=rt.filter(e,t)}return rt.grep(t,function(t){return Z.call(e,t)>-1!==n})}function o(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function r(t){var e={};return rt.each(t.match(_t)||[],function(t,n){e[n]=!0}),e}function s(){J.removeEventListener("DOMContentLoaded",s),t.removeEventListener("load",s),rt.ready()}function a(){this.expando=rt.expando+a.uid++}function c(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(Ot,"-$&").toLowerCase(),n=t.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:St.test(n)?rt.parseJSON(n):n}catch(o){}Et.set(t,e,n)}else n=void 0;return n}function u(t,e,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return rt.css(t,e,"")},c=a(),u=n&&n[3]||(rt.cssNumber[e]?"":"px"),l=(rt.cssNumber[e]||"px"!==u&&+c)&&$t.exec(rt.css(t,e));if(l&&l[3]!==u){u=u||l[3],n=n||[],l=+c||1;do r=r||".5",l/=r,rt.style(t,e,l+u);while(r!==(r=a()/c)&&1!==r&&--s)}return n&&(l=+l||+c||0,o=n[1]?l+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=l,i.end=o)),o}function l(t,e){var n="undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e||"*"):"undefined"!=typeof t.querySelectorAll?t.querySelectorAll(e||"*"):[];return void 0===e||e&&rt.nodeName(t,e)?rt.merge([t],n):n}function h(t,e){for(var n=0,i=t.length;i>n;n++)Tt.set(t[n],"globalEval",!e||Tt.get(e[n],"globalEval"))}function d(t,e,n,i,o){for(var r,s,a,c,u,d,p=e.createDocumentFragment(),f=[],v=0,m=t.length;m>v;v++)if(r=t[v],r||0===r)if("object"===rt.type(r))rt.merge(f,r.nodeType?[r]:r);else if(Lt.test(r)){for(s=s||p.appendChild(e.createElement("div")),a=(It.exec(r)||["",""])[1].toLowerCase(),c=Mt[a]||Mt._default,s.innerHTML=c[1]+rt.htmlPrefilter(r)+c[2],d=c[0];d--;)s=s.lastChild;rt.merge(f,s.childNodes),s=p.firstChild,s.textContent=""}else f.push(e.createTextNode(r));for(p.textContent="",v=0;r=f[v++];)if(i&&rt.inArray(r,i)>-1)o&&o.push(r);else if(u=rt.contains(r.ownerDocument,r),s=l(p.appendChild(r),"script"),u&&h(s),n)for(d=0;r=s[d++];)Pt.test(r.type||"")&&n.push(r);return p}function p(){return!0}function f(){return!1}function v(){try{return J.activeElement}catch(t){}}function m(t,e,n,i,o,r){var s,a;if("object"==typeof e){"string"!=typeof n&&(i=i||n,n=void 0);for(a in e)m(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),o===!1)o=f;else if(!o)return this;return 1===r&&(s=o,o=function(t){return rt().off(t),s.apply(this,arguments)},o.guid=s.guid||(s.guid=rt.guid++)),t.each(function(){rt.event.add(this,e,o,i,n)})}function g(t,e){return rt.nodeName(t,"table")&&rt.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t:t}function y(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function b(t){var e=Vt.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function w(t,e){var n,i,o,r,s,a,c,u;if(1===e.nodeType){if(Tt.hasData(t)&&(r=Tt.access(t),s=Tt.set(e,r),u=r.events)){delete s.handle,s.events={};for(o in u)for(n=0,i=u[o].length;i>n;n++)rt.event.add(e,o,u[o][n])}Et.hasData(t)&&(a=Et.access(t),c=rt.extend({},a),Et.set(e,c))}}function _(t,e){var n=e.nodeName.toLowerCase();"input"===n&&jt.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}function x(t,e,n,i){e=G.apply([],e);var o,r,s,a,c,u,h=0,p=t.length,f=p-1,v=e[0],m=rt.isFunction(v);if(m||p>1&&"string"==typeof v&&!it.checkClone&&Ut.test(v))return t.each(function(o){var r=t.eq(o);m&&(e[0]=v.call(this,o,r.html())),x(r,e,n,i)});if(p&&(o=d(e,t[0].ownerDocument,!1,t,i),r=o.firstChild,1===o.childNodes.length&&(o=r),r||i)){for(s=rt.map(l(o,"script"),y),a=s.length;p>h;h++)c=o,h!==f&&(c=rt.clone(c,!0,!0),a&&rt.merge(s,l(c,"script"))),n.call(t[h],c,h);if(a)for(u=s[s.length-1].ownerDocument,rt.map(s,b),h=0;a>h;h++)c=s[h],Pt.test(c.type||"")&&!Tt.access(c,"globalEval")&&rt.contains(u,c)&&(c.src?rt._evalUrl&&rt._evalUrl(c.src):rt.globalEval(c.textContent.replace(Wt,"")))}return t}function C(t,e,n){for(var i,o=e?rt.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||rt.cleanData(l(i)),i.parentNode&&(n&&rt.contains(i.ownerDocument,i)&&h(l(i,"script")),i.parentNode.removeChild(i));return t}function k(t,e){var n=rt(e.createElement(t)).appendTo(e.body),i=rt.css(n[0],"display");return n.detach(),i}function T(t){var e=J,n=Qt[t];return n||(n=k(t,e),"none"!==n&&n||(zt=(zt||rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=zt[0].contentDocument,e.write(),e.close(),n=k(t,e),zt.detach()),Qt[t]=n),n}function E(t,e,n){var i,o,r,s,a=t.style;return n=n||Yt(t),n&&(s=n.getPropertyValue(e)||n[e],""!==s||rt.contains(t.ownerDocument,t)||(s=rt.style(t,e)),!it.pixelMarginRight()&&Jt.test(s)&&Xt.test(e)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function S(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function O(t){if(t in ie)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=ne.length;n--;)if(t=ne[n]+e,t in ie)return t}function N(t,e,n){var i=$t.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function $(t,e,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===e?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=rt.css(t,n+At[r],!0,o)),i?("content"===n&&(s-=rt.css(t,"padding"+At[r],!0,o)),"margin"!==n&&(s-=rt.css(t,"border"+At[r]+"Width",!0,o))):(s+=rt.css(t,"padding"+At[r],!0,o),"padding"!==n&&(s+=rt.css(t,"border"+At[r]+"Width",!0,o)));return s}function A(e,n,i){var o=!0,r="width"===n?e.offsetWidth:e.offsetHeight,s=Yt(e),a="border-box"===rt.css(e,"boxSizing",!1,s);if(J.msFullscreenElement&&t.top!==t&&e.getClientRects().length&&(r=Math.round(100*e.getBoundingClientRect()[n])),0>=r||null==r){if(r=E(e,n,s),(0>r||null==r)&&(r=e.style[n]),Jt.test(r))return r;o=a&&(it.boxSizingReliable()||r===e.style[n]),r=parseFloat(r)||0}return r+$(e,n,i||(a?"border":"content"),o,s)+"px"}function D(t,e){for(var n,i,o,r=[],s=0,a=t.length;a>s;s++)i=t[s],i.style&&(r[s]=Tt.get(i,"olddisplay"),n=i.style.display,e?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Dt(i)&&(r[s]=Tt.access(i,"olddisplay",T(i.nodeName)))):(o=Dt(i),"none"===n&&o||Tt.set(i,"olddisplay",o?n:rt.css(i,"display"))));for(s=0;a>s;s++)i=t[s],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?r[s]||"":"none"));return t}function j(t,e,n,i,o){return new j.prototype.init(t,e,n,i,o)}function I(){return t.setTimeout(function(){oe=void 0}),oe=rt.now()}function P(t,e){var n,i=0,o={height:t};for(e=e?1:0;4>i;i+=2-e)n=At[i],o["margin"+n]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function M(t,e,n){for(var i,o=(H.tweeners[e]||[]).concat(H.tweeners["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,e,t))return i}function L(t,e,n){var i,o,r,s,a,c,u,l,h=this,d={},p=t.style,f=t.nodeType&&Dt(t),v=Tt.get(t,"fxshow");n.queue||(a=rt._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,c=a.empty.fire,a.empty.fire=function(){a.unqueued||c()}),a.unqueued++,h.always(function(){h.always(function(){a.unqueued--,rt.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],u=rt.css(t,"display"),l="none"===u?Tt.get(t,"olddisplay")||T(t.nodeName):u,"inline"===l&&"none"===rt.css(t,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(i in e)if(o=e[i],se.exec(o)){if(delete e[i],r=r||"toggle"===o,o===(f?"hide":"show")){if("show"!==o||!v||void 0===v[i])continue;f=!0}d[i]=v&&v[i]||rt.style(t,i)}else u=void 0;if(rt.isEmptyObject(d))"inline"===("none"===u?T(t.nodeName):u)&&(p.display=u);else{v?"hidden"in v&&(f=v.hidden):v=Tt.access(t,"fxshow",{}),r&&(v.hidden=!f),f?rt(t).show():h.done(function(){rt(t).hide()}),h.done(function(){var e;Tt.remove(t,"fxshow");for(e in d)rt.style(t,e,d[e])});for(i in d)s=M(f?v[i]:0,i,h),i in v||(v[i]=s.start,f&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function R(t,e){var n,i,o,r,s;for(n in t)if(i=rt.camelCase(n),o=e[i],r=t[n],rt.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),s=rt.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete t[i];for(n in r)n in t||(t[n]=r[n],e[n]=o)}else e[i]=o}function H(t,e,n){var i,o,r=0,s=H.prefilters.length,a=rt.Deferred().always(function(){delete c.elem}),c=function(){if(o)return!1;for(var e=oe||I(),n=Math.max(0,u.startTime+u.duration-e),i=n/u.duration||0,r=1-i,s=0,c=u.tweens.length;c>s;s++)u.tweens[s].run(r);return a.notifyWith(t,[u,r,n]),1>r&&c?n:(a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:rt.extend({},e),opts:rt.extend(!0,{specialEasing:{},easing:rt.easing._default},n),originalProperties:e,originalOptions:n,startTime:oe||I(),duration:n.duration,tweens:[],createTween:function(e,n){var i=rt.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)u.tweens[n].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),this}}),l=u.props;for(R(l,u.opts.specialEasing);s>r;r++)if(i=H.prefilters[r].call(u,t,l,u.opts))return rt.isFunction(i.stop)&&(rt._queueHooks(u.elem,u.opts.queue).stop=rt.proxy(i.stop,i)),i;return rt.map(l,M,u),rt.isFunction(u.opts.start)&&u.opts.start.call(t,u),rt.fx.timer(rt.extend(c,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function q(t){return t.getAttribute&&t.getAttribute("class")||""}function F(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,r=e.toLowerCase().match(_t)||[];if(rt.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function B(t,e,n,i){function o(a){var c;return r[a]=!0,rt.each(t[a]||[],function(t,a){var u=a(e,n,i);return"string"!=typeof u||s||r[u]?s?!(c=u):void 0:(e.dataTypes.unshift(u),o(u),!1)}),c}var r={},s=t===Te;return o(e.dataTypes[0])||!r["*"]&&o("*")}function U(t,e){var n,i,o=rt.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&rt.extend(!0,t,i),t}function V(t,e,n){for(var i,o,r,s,a=t.contents,c=t.dataTypes;"*"===c[0];)c.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){c.unshift(o);break}if(c[0]in n)r=c[0];else{for(o in n){if(!c[0]||t.converters[o+" "+c[0]]){r=o;break}s||(s=o)}r=r||s}return r?(r!==c[0]&&c.unshift(r),n[r]):void 0}function W(t,e,n,i){var o,r,s,a,c,u={},l=t.dataTypes.slice();if(l[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s];for(r=l.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!c&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),c=r,r=l.shift())if("*"===r)r=c;else if("*"!==c&&c!==r){if(s=u[c+" "+r]||u["* "+r],!s)for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[c+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[o]:u[o]!==!0&&(r=a[0],l.unshift(a[1]));break}if(s!==!0)if(s&&t["throws"])e=s(e);else try{e=s(e)}catch(h){return{state:"parsererror",error:s?h:"No conversion from "+c+" to "+r}}}return{state:"success",data:e}}function z(t,e,n,i){var o;if(rt.isArray(e))rt.each(e,function(e,o){n||Ne.test(t)?i(t,o):z(t+"["+("object"==typeof o&&null!=o?e:"")+"]",o,n,i)});else if(n||"object"!==rt.type(e))i(t,e);else for(o in e)z(t+"["+o+"]",e[o],n,i)}function Q(t){return rt.isWindow(t)?t:9===t.nodeType&&t.defaultView}var X=[],J=t.document,Y=X.slice,G=X.concat,K=X.push,Z=X.indexOf,tt={},et=tt.toString,nt=tt.hasOwnProperty,it={},ot="2.2.0",rt=function(t,e){return new rt.fn.init(t,e)},st=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,at=/^-ms-/,ct=/-([\da-z])/gi,ut=function(t,e){return e.toUpperCase()};rt.fn=rt.prototype={jquery:ot,constructor:rt,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:Y.call(this)},pushStack:function(t){var e=rt.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t){return rt.each(this,t)},map:function(t){return this.pushStack(rt.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:K,sort:X.sort,splice:X.splice},rt.extend=rt.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||rt.isFunction(s)||(s={}),a===c&&(s=this,a--);c>a;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],i=t[e],s!==i&&(u&&i&&(rt.isPlainObject(i)||(o=rt.isArray(i)))?(o?(o=!1,r=n&&rt.isArray(n)?n:[]):r=n&&rt.isPlainObject(n)?n:{},s[e]=rt.extend(u,r,i)):void 0!==i&&(s[e]=i));return s},rt.extend({expando:"jQuery"+(ot+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===rt.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=t&&t.toString();return!rt.isArray(t)&&e-parseFloat(e)+1>=0},isPlainObject:function(t){return"object"!==rt.type(t)||t.nodeType||rt.isWindow(t)?!1:!t.constructor||nt.call(t.constructor.prototype,"isPrototypeOf")},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?tt[et.call(t)]||"object":typeof t},globalEval:function(t){var e,n=eval;t=rt.trim(t),t&&(1===t.indexOf("use strict")?(e=J.createElement("script"),e.text=t,J.head.appendChild(e).parentNode.removeChild(e)):n(t))},camelCase:function(t){return t.replace(at,"ms-").replace(ct,ut)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e){var i,o=0;if(n(t))for(i=t.length;i>o&&e.call(t[o],o,t[o])!==!1;o++);else for(o in t)if(e.call(t[o],o,t[o])===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(st,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(n(Object(t))?rt.merge(i,"string"==typeof t?[t]:t):K.call(i,t)),i},inArray:function(t,e,n){return null==e?-1:Z.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;n>i;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){for(var i,o=[],r=0,s=t.length,a=!n;s>r;r++)i=!e(t[r],r),i!==a&&o.push(t[r]);return o},map:function(t,e,i){var o,r,s=0,a=[];if(n(t))for(o=t.length;o>s;s++)r=e(t[s],s,i),null!=r&&a.push(r);else for(s in t)r=e(t[s],s,i),null!=r&&a.push(r);return G.apply([],a)},guid:1,proxy:function(t,e){var n,i,o;return"string"==typeof e&&(n=t[e],e=t,t=n),rt.isFunction(t)?(i=Y.call(arguments,2),o=function(){return t.apply(e||this,i.concat(Y.call(arguments)))},o.guid=t.guid=t.guid||rt.guid++,o):void 0},now:Date.now,support:it}),"function"==typeof Symbol&&(rt.fn[Symbol.iterator]=X[Symbol.iterator]),rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){tt["[object "+e+"]"]=e.toLowerCase()});var lt=function(t){function e(t,e,n,i){var o,r,s,a,c,u,h,p,f=e&&e.ownerDocument,v=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==v&&9!==v&&11!==v)return n;if(!i&&((e?e.ownerDocument||e:q)!==D&&A(e),e=e||D,I)){if(11!==v&&(u=gt.exec(t)))if(o=u[1]){if(9===v){if(!(s=e.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(f&&(s=f.getElementById(o))&&R(e,s)&&s.id===o)return n.push(s),n}else{if(u[2])return K.apply(n,e.getElementsByTagName(t)),n;if((o=u[3])&&_.getElementsByClassName&&e.getElementsByClassName)return K.apply(n,e.getElementsByClassName(o)),n}if(_.qsa&&!W[t+" "]&&(!P||!P.test(t))){if(1!==v)f=e,p=t;else if("object"!==e.nodeName.toLowerCase()){for((a=e.getAttribute("id"))?a=a.replace(bt,"\\$&"):e.setAttribute("id",a=H),h=T(t),r=h.length,c=dt.test(a)?"#"+a:"[id='"+a+"']";r--;)h[r]=c+" "+d(h[r]);p=h.join(","),f=yt.test(t)&&l(e.parentNode)||e}if(p)try{return K.apply(n,f.querySelectorAll(p)),n}catch(m){}finally{a===H&&e.removeAttribute("id")}}}return S(t.replace(at,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>x.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[H]=!0,t}function o(t){var e=D.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function r(t,e){for(var n=t.split("|"),i=n.length;i--;)x.attrHandle[n[i]]=e}function s(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||Q)-(~t.sourceIndex||Q);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function c(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function u(t){return i(function(e){return e=+e,i(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function l(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function h(){}function d(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function p(t,e,n){var i=e.dir,o=n&&"parentNode"===i,r=B++;return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,r)}:function(e,n,s){var a,c,u,l=[F,r];if(s){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,s))return!0}else for(;e=e[i];)if(1===e.nodeType||o){if(u=e[H]||(e[H]={}),c=u[e.uniqueID]||(u[e.uniqueID]={}),(a=c[i])&&a[0]===F&&a[1]===r)return l[2]=a[2];if(c[i]=l,l[2]=t(e,n,s))return!0}}}function f(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function v(t,n,i){for(var o=0,r=n.length;r>o;o++)e(t,n[o],i);return i}function m(t,e,n,i,o){for(var r,s=[],a=0,c=t.length,u=null!=e;c>a;a++)(r=t[a])&&(!n||n(r,i,o))&&(s.push(r),u&&e.push(a));return s}function g(t,e,n,o,r,s){return o&&!o[H]&&(o=g(o)),r&&!r[H]&&(r=g(r,s)),i(function(i,s,a,c){var u,l,h,d=[],p=[],f=s.length,g=i||v(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?g:m(g,d,t,a,c),b=n?r||(i?t:f||o)?[]:s:y;if(n&&n(y,b,a,c),o)for(u=m(b,p),o(u,[],a,c),l=u.length;l--;)(h=u[l])&&(b[p[l]]=!(y[p[l]]=h));if(i){if(r||t){if(r){for(u=[],l=b.length;l--;)(h=b[l])&&u.push(y[l]=h);r(null,b=[],u,c)}for(l=b.length;l--;)(h=b[l])&&(u=r?tt(i,h):d[l])>-1&&(i[u]=!(s[u]=h))}}else b=m(b===s?b.splice(f,b.length):b),r?r(null,s,b,c):K.apply(s,b)})}function y(t){for(var e,n,i,o=t.length,r=x.relative[t[0].type],s=r||x.relative[" "],a=r?1:0,c=p(function(t){return t===e},s,!0),u=p(function(t){return tt(e,t)>-1},s,!0),l=[function(t,n,i){var o=!r&&(i||n!==O)||((e=n).nodeType?c(t,n,i):u(t,n,i));return e=null,o}];o>a;a++)if(n=x.relative[t[a].type])l=[p(f(l),n)];else{if(n=x.filter[t[a].type].apply(null,t[a].matches),n[H]){for(i=++a;o>i&&!x.relative[t[i].type];i++);return g(a>1&&f(l),a>1&&d(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(at,"$1"),n,i>a&&y(t.slice(a,i)),o>i&&y(t=t.slice(i)),o>i&&d(t))}l.push(n)}return f(l)}function b(t,n){var o=n.length>0,r=t.length>0,s=function(i,s,a,c,u){var l,h,d,p=0,f="0",v=i&&[],g=[],y=O,b=i||r&&x.find.TAG("*",u),w=F+=null==y?1:Math.random()||.1,_=b.length;for(u&&(O=s===D||s||u);f!==_&&null!=(l=b[f]);f++){if(r&&l){for(h=0,s||l.ownerDocument===D||(A(l),a=!I);d=t[h++];)if(d(l,s||D,a)){c.push(l);break}u&&(F=w)}o&&((l=!d&&l)&&p--,i&&v.push(l))}if(p+=f,o&&f!==p){for(h=0;d=n[h++];)d(v,g,s,a);if(i){if(p>0)for(;f--;)v[f]||g[f]||(g[f]=Y.call(c));g=m(g)}K.apply(c,g),u&&!i&&g.length>0&&p+n.length>1&&e.uniqueSort(c)}return u&&(F=w,O=y),v};return o?i(s):s}var w,_,x,C,k,T,E,S,O,N,$,A,D,j,I,P,M,L,R,H="sizzle"+1*new Date,q=t.document,F=0,B=0,U=n(),V=n(),W=n(),z=function(t,e){return t===e&&($=!0),0},Q=1<<31,X={}.hasOwnProperty,J=[],Y=J.pop,G=J.push,K=J.push,Z=J.slice,tt=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot="\\["+nt+"*("+it+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",rt=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",st=new RegExp(nt+"+","g"),at=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ct=new RegExp("^"+nt+"*,"+nt+"*"),ut=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),lt=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),ht=new RegExp(rt),dt=new RegExp("^"+it+"$"),pt={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it+"|[*])"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},ft=/^(?:input|select|textarea|button)$/i,vt=/^h\d$/i,mt=/^[^{]+\{\s*\[native \w/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/[+~]/,bt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),_t=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},xt=function(){A()};try{K.apply(J=Z.call(q.childNodes),q.childNodes),J[q.childNodes.length].nodeType}catch(Ct){K={apply:J.length?function(t,e){G.apply(t,Z.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}_=e.support={},k=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},A=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:q;return i!==D&&9===i.nodeType&&i.documentElement?(D=i,j=D.documentElement,I=!k(D),(n=D.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",xt,!1):n.attachEvent&&n.attachEvent("onunload",xt)),_.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),_.getElementsByTagName=o(function(t){return t.appendChild(D.createComment("")),!t.getElementsByTagName("*").length}),_.getElementsByClassName=mt.test(D.getElementsByClassName),_.getById=o(function(t){return j.appendChild(t).id=H,!D.getElementsByName||!D.getElementsByName(H).length}),_.getById?(x.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&I){var n=e.getElementById(t);return n?[n]:[]}},x.filter.ID=function(t){var e=t.replace(wt,_t);return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(wt,_t);return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),x.find.TAG=_.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):_.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t);if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},x.find.CLASS=_.getElementsByClassName&&function(t,e){return"undefined"!=typeof e.getElementsByClassName&&I?e.getElementsByClassName(t):void 0},M=[],P=[],(_.qsa=mt.test(D.querySelectorAll))&&(o(function(t){j.appendChild(t).innerHTML="<a id='"+H+"'></a><select id='"+H+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||P.push("\\["+nt+"*(?:value|"+et+")"),t.querySelectorAll("[id~="+H+"-]").length||P.push("~="),t.querySelectorAll(":checked").length||P.push(":checked"),t.querySelectorAll("a#"+H+"+*").length||P.push(".#.+[+~]")}),o(function(t){var e=D.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&P.push("name"+nt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),P.push(",.*:")})),(_.matchesSelector=mt.test(L=j.matches||j.webkitMatchesSelector||j.mozMatchesSelector||j.oMatchesSelector||j.msMatchesSelector))&&o(function(t){_.disconnectedMatch=L.call(t,"div"),L.call(t,"[s!='']:x"),M.push("!=",rt)}),P=P.length&&new RegExp(P.join("|")),M=M.length&&new RegExp(M.join("|")),e=mt.test(j.compareDocumentPosition),R=e||mt.test(j.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},z=e?function(t,e){if(t===e)return $=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!_.sortDetached&&e.compareDocumentPosition(t)===n?t===D||t.ownerDocument===q&&R(q,t)?-1:e===D||e.ownerDocument===q&&R(q,e)?1:N?tt(N,t)-tt(N,e):0:4&n?-1:1)}:function(t,e){if(t===e)return $=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,a=[t],c=[e];if(!o||!r)return t===D?-1:e===D?1:o?-1:r?1:N?tt(N,t)-tt(N,e):0;if(o===r)return s(t,e);for(n=t;n=n.parentNode;)a.unshift(n);for(n=e;n=n.parentNode;)c.unshift(n);for(;a[i]===c[i];)i++;return i?s(a[i],c[i]):a[i]===q?-1:c[i]===q?1:0},D):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&A(t),n=n.replace(lt,"='$1']"),_.matchesSelector&&I&&!W[n+" "]&&(!M||!M.test(n))&&(!P||!P.test(n)))try{var i=L.call(t,n);if(i||_.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(o){}return e(n,D,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==D&&A(t),R(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==D&&A(t);var n=x.attrHandle[e.toLowerCase()],i=n&&X.call(x.attrHandle,e.toLowerCase())?n(t,e,!I):void 0;return void 0!==i?i:_.attributes||!I?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if($=!_.detectDuplicates,N=!_.sortStable&&t.slice(0),t.sort(z),$){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return N=null,t},C=e.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=C(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=C(e);return n},x=e.selectors={cacheLength:50,createPseudo:i,match:pt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(wt,_t),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,_t),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return pt.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&ht.test(n)&&(e=T(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,_t).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=U[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&U(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var r=e.attr(o,t);return null==r?"!="===n:n?(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(st," ")+" ").indexOf(i)>-1:"|="===n?r===i||r.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,c){var u,l,h,d,p,f,v=r!==s?"nextSibling":"previousSibling",m=e.parentNode,g=a&&e.nodeName.toLowerCase(),y=!c&&!a,b=!1;if(m){if(r){for(;v;){for(d=e;d=d[v];)if(a?d.nodeName.toLowerCase()===g:1===d.nodeType)return!1;f=v="only"===t&&!f&&"nextSibling"}return!0}if(f=[s?m.firstChild:m.lastChild],s&&y){for(d=m,h=d[H]||(d[H]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),u=l[t]||[],p=u[0]===F&&u[1],b=p&&u[2],d=p&&m.childNodes[p];d=++p&&d&&d[v]||(b=p=0)||f.pop();)if(1===d.nodeType&&++b&&d===e){l[t]=[F,p,b];break}}else if(y&&(d=e,h=d[H]||(d[H]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),u=l[t]||[],p=u[0]===F&&u[1],b=p),b===!1)for(;(d=++p&&d&&d[v]||(b=p=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==g:1!==d.nodeType)||!++b||(y&&(h=d[H]||(d[H]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),l[t]=[F,b]),d!==e)););return b-=o,b===i||b%i===0&&b/i>=0}}},PSEUDO:function(t,n){var o,r=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return r[H]?r(n):r.length>1?(o=[t,t,"",n],x.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=r(t,n),s=o.length;s--;)i=tt(t,o[s]),t[i]=!(e[i]=o[s])}):function(t){return r(t,0,o)}):r}},pseudos:{not:i(function(t){var e=[],n=[],o=E(t.replace(at,"$1"));return o[H]?i(function(t,e,n,i){for(var r,s=o(t,null,i,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){return e[0]=t,o(e,null,r,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(wt,_t),function(e){return(e.textContent||e.innerText||C(e)).indexOf(t)>-1}}),lang:i(function(t){return dt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(wt,_t).toLowerCase(),function(e){var n;do if(n=I?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===j},focus:function(t){return t===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0;
},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return vt.test(t.nodeName)},input:function(t){return ft.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[0>n?n+e:n]}),even:u(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:u(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:u(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:u(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},x.pseudos.nth=x.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})x.pseudos[w]=c(w);return h.prototype=x.filters=x.pseudos,x.setFilters=new h,T=e.tokenize=function(t,n){var i,o,r,s,a,c,u,l=V[t+" "];if(l)return n?0:l.slice(0);for(a=t,c=[],u=x.preFilter;a;){(!i||(o=ct.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),c.push(r=[])),i=!1,(o=ut.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(at," ")}),a=a.slice(i.length));for(s in x.filter)!(o=pt[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):V(t,c).slice(0)},E=e.compile=function(t,e){var n,i=[],o=[],r=W[t+" "];if(!r){for(e||(e=T(t)),n=e.length;n--;)r=y(e[n]),r[H]?i.push(r):o.push(r);r=W(t,b(o,i)),r.selector=t}return r},S=e.select=function(t,e,n,i){var o,r,s,a,c,u="function"==typeof t&&t,h=!i&&T(t=u.selector||t);if(n=n||[],1===h.length){if(r=h[0]=h[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&_.getById&&9===e.nodeType&&I&&x.relative[r[1].type]){if(e=(x.find.ID(s.matches[0].replace(wt,_t),e)||[])[0],!e)return n;u&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(o=pt.needsContext.test(t)?0:r.length;o--&&(s=r[o],!x.relative[a=s.type]);)if((c=x.find[a])&&(i=c(s.matches[0].replace(wt,_t),yt.test(r[0].type)&&l(e.parentNode)||e))){if(r.splice(o,1),t=i.length&&d(r),!t)return K.apply(n,i),n;break}}return(u||E(t,h))(i,e,!I,n,!e||yt.test(t)&&l(e.parentNode)||e),n},_.sortStable=H.split("").sort(z).join("")===H,_.detectDuplicates=!!$,A(),_.sortDetached=o(function(t){return 1&t.compareDocumentPosition(D.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||r("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),_.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||r("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||r(et,function(t,e,n){var i;return n?void 0:t[e]===!0?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t);rt.find=lt,rt.expr=lt.selectors,rt.expr[":"]=rt.expr.pseudos,rt.uniqueSort=rt.unique=lt.uniqueSort,rt.text=lt.getText,rt.isXMLDoc=lt.isXML,rt.contains=lt.contains;var ht=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&rt(t).is(n))break;i.push(t)}return i},dt=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},pt=rt.expr.match.needsContext,ft=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,vt=/^.[^:#\[\.,]*$/;rt.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?rt.find.matchesSelector(i,t)?[i]:[]:rt.find.matches(t,rt.grep(e,function(t){return 1===t.nodeType}))},rt.fn.extend({find:function(t){var e,n=this.length,i=[],o=this;if("string"!=typeof t)return this.pushStack(rt(t).filter(function(){for(e=0;n>e;e++)if(rt.contains(o[e],this))return!0}));for(e=0;n>e;e++)rt.find(t,o[e],i);return i=this.pushStack(n>1?rt.unique(i):i),i.selector=this.selector?this.selector+" "+t:t,i},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&pt.test(t)?rt(t):t||[],!1).length}});var mt,gt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,yt=rt.fn.init=function(t,e,n){var i,o;if(!t)return this;if(n=n||mt,"string"==typeof t){if(i="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:gt.exec(t),!i||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof rt?e[0]:e,rt.merge(this,rt.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:J,!0)),ft.test(i[1])&&rt.isPlainObject(e))for(i in e)rt.isFunction(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}return o=J.getElementById(i[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=J,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):rt.isFunction(t)?void 0!==n.ready?n.ready(t):t(rt):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),rt.makeArray(t,this))};yt.prototype=rt.fn,mt=rt(J);var bt=/^(?:parents|prev(?:Until|All))/,wt={children:!0,contents:!0,next:!0,prev:!0};rt.fn.extend({has:function(t){var e=rt(t,this),n=e.length;return this.filter(function(){for(var t=0;n>t;t++)if(rt.contains(this,e[t]))return!0})},closest:function(t,e){for(var n,i=0,o=this.length,r=[],s=pt.test(t)||"string"!=typeof t?rt(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&rt.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(r.length>1?rt.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?Z.call(rt(t),this[0]):Z.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(rt.uniqueSort(rt.merge(this.get(),rt(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),rt.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return ht(t,"parentNode")},parentsUntil:function(t,e,n){return ht(t,"parentNode",n)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return ht(t,"nextSibling")},prevAll:function(t){return ht(t,"previousSibling")},nextUntil:function(t,e,n){return ht(t,"nextSibling",n)},prevUntil:function(t,e,n){return ht(t,"previousSibling",n)},siblings:function(t){return dt((t.parentNode||{}).firstChild,t)},children:function(t){return dt(t.firstChild)},contents:function(t){return t.contentDocument||rt.merge([],t.childNodes)}},function(t,e){rt.fn[t]=function(n,i){var o=rt.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=rt.filter(i,o)),this.length>1&&(wt[t]||rt.uniqueSort(o),bt.test(t)&&o.reverse()),this.pushStack(o)}});var _t=/\S+/g;rt.Callbacks=function(t){t="string"==typeof t?r(t):rt.extend({},t);var e,n,i,o,s=[],a=[],c=-1,u=function(){for(o=t.once,i=e=!0;a.length;c=-1)for(n=a.shift();++c<s.length;)s[c].apply(n[0],n[1])===!1&&t.stopOnFalse&&(c=s.length,n=!1);t.memory||(n=!1),e=!1,o&&(s=n?[]:"")},l={add:function(){return s&&(n&&!e&&(c=s.length-1,a.push(n)),function i(e){rt.each(e,function(e,n){rt.isFunction(n)?t.unique&&l.has(n)||s.push(n):n&&n.length&&"string"!==rt.type(n)&&i(n)})}(arguments),n&&!e&&u()),this},remove:function(){return rt.each(arguments,function(t,e){for(var n;(n=rt.inArray(e,s,n))>-1;)s.splice(n,1),c>=n&&c--}),this},has:function(t){return t?rt.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return o=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return o=a=[],n||(s=n=""),this},locked:function(){return!!o},fireWith:function(t,n){return o||(n=n||[],n=[t,n.slice?n.slice():n],a.push(n),e||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!i}};return l},rt.extend({Deferred:function(t){var e=[["resolve","done",rt.Callbacks("once memory"),"resolved"],["reject","fail",rt.Callbacks("once memory"),"rejected"],["notify","progress",rt.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return rt.Deferred(function(n){rt.each(e,function(e,r){var s=rt.isFunction(t[e])&&t[e];o[r[1]](function(){var t=s&&s.apply(this,arguments);t&&rt.isFunction(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this===i?n.promise():this,s?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?rt.extend(t,i):i}},o={};return i.pipe=i.then,rt.each(e,function(t,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,r=Y.call(arguments),s=r.length,a=1!==s||t&&rt.isFunction(t.promise)?s:0,c=1===a?t:rt.Deferred(),u=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?Y.call(arguments):o,i===e?c.notifyWith(n,i):--a||c.resolveWith(n,i)}};if(s>1)for(e=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&rt.isFunction(r[o].promise)?r[o].promise().progress(u(o,n,e)).done(u(o,i,r)).fail(c.reject):--a;return a||c.resolveWith(i,r),c.promise()}});var xt;rt.fn.ready=function(t){return rt.ready.promise().done(t),this},rt.extend({isReady:!1,readyWait:1,holdReady:function(t){t?rt.readyWait++:rt.ready(!0)},ready:function(t){(t===!0?--rt.readyWait:rt.isReady)||(rt.isReady=!0,t!==!0&&--rt.readyWait>0||(xt.resolveWith(J,[rt]),rt.fn.triggerHandler&&(rt(J).triggerHandler("ready"),rt(J).off("ready"))))}}),rt.ready.promise=function(e){return xt||(xt=rt.Deferred(),"complete"===J.readyState||"loading"!==J.readyState&&!J.documentElement.doScroll?t.setTimeout(rt.ready):(J.addEventListener("DOMContentLoaded",s),t.addEventListener("load",s))),xt.promise(e)},rt.ready.promise();var Ct=function(t,e,n,i,o,r,s){var a=0,c=t.length,u=null==n;if("object"===rt.type(n)){o=!0;for(a in n)Ct(t,e,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,rt.isFunction(i)||(s=!0),u&&(s?(e.call(t,i),e=null):(u=e,e=function(t,e,n){return u.call(rt(t),n)})),e))for(;c>a;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:u?e.call(t):c?e(t[0],n):r},kt=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};a.uid=1,a.prototype={register:function(t,e){var n=e||{};return t.nodeType?t[this.expando]=n:Object.defineProperty(t,this.expando,{value:n,writable:!0,configurable:!0}),t[this.expando]},cache:function(t){if(!kt(t))return{};var e=t[this.expando];return e||(e={},kt(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,o=this.cache(t);if("string"==typeof e)o[e]=n;else for(i in e)o[i]=e[i];return o},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][e]},access:function(t,e,n){var i;return void 0===e||e&&"string"==typeof e&&void 0===n?(i=this.get(t,e),void 0!==i?i:this.get(t,rt.camelCase(e))):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i,o,r=t[this.expando];if(void 0!==r){if(void 0===e)this.register(t);else{rt.isArray(e)?i=e.concat(e.map(rt.camelCase)):(o=rt.camelCase(e),e in r?i=[e,o]:(i=o,i=i in r?[i]:i.match(_t)||[])),n=i.length;for(;n--;)delete r[i[n]]}(void 0===e||rt.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!rt.isEmptyObject(e)}};var Tt=new a,Et=new a,St=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ot=/[A-Z]/g;rt.extend({hasData:function(t){return Et.hasData(t)||Tt.hasData(t)},data:function(t,e,n){return Et.access(t,e,n)},removeData:function(t,e){Et.remove(t,e)},_data:function(t,e,n){return Tt.access(t,e,n)},_removeData:function(t,e){Tt.remove(t,e)}}),rt.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===t){if(this.length&&(o=Et.get(r),1===r.nodeType&&!Tt.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=rt.camelCase(i.slice(5)),c(r,i,o[i])));Tt.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof t?this.each(function(){Et.set(this,t)}):Ct(this,function(e){var n,i;if(r&&void 0===e){if(n=Et.get(r,t)||Et.get(r,t.replace(Ot,"-$&").toLowerCase()),void 0!==n)return n;if(i=rt.camelCase(t),n=Et.get(r,i),void 0!==n)return n;if(n=c(r,i,void 0),void 0!==n)return n}else i=rt.camelCase(t),this.each(function(){var n=Et.get(this,i);Et.set(this,i,e),t.indexOf("-")>-1&&void 0!==n&&Et.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Et.remove(this,t)})}}),rt.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=Tt.get(t,e),n&&(!i||rt.isArray(n)?i=Tt.access(t,e,rt.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=rt.queue(t,e),i=n.length,o=n.shift(),r=rt._queueHooks(t,e),s=function(){rt.dequeue(t,e)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return Tt.get(t,n)||Tt.access(t,n,{empty:rt.Callbacks("once memory").add(function(){Tt.remove(t,[e+"queue",n])})})}}),rt.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?rt.queue(this[0],t):void 0===e?this:this.each(function(){var n=rt.queue(this,t,e);rt._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&rt.dequeue(this,t)})},dequeue:function(t){return this.each(function(){rt.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=rt.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)n=Tt.get(r[s],t+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var Nt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$t=new RegExp("^(?:([+-])=|)("+Nt+")([a-z%]*)$","i"),At=["Top","Right","Bottom","Left"],Dt=function(t,e){return t=e||t,"none"===rt.css(t,"display")||!rt.contains(t.ownerDocument,t)},jt=/^(?:checkbox|radio)$/i,It=/<([\w:-]+)/,Pt=/^$|\/(?:java|ecma)script/i,Mt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mt.optgroup=Mt.option,Mt.tbody=Mt.tfoot=Mt.colgroup=Mt.caption=Mt.thead,Mt.th=Mt.td;var Lt=/<|&#?\w+;/;!function(){var t=J.createDocumentFragment(),e=t.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),it.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",it.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Rt=/^key/,Ht=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,qt=/^([^.]*)(?:\.(.+)|)/;rt.event={global:{},add:function(t,e,n,i,o){var r,s,a,c,u,l,h,d,p,f,v,m=Tt.get(t);if(m)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=rt.guid++),(c=m.events)||(c=m.events={}),(s=m.handle)||(s=m.handle=function(e){return"undefined"!=typeof rt&&rt.event.triggered!==e.type?rt.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(_t)||[""],u=e.length;u--;)a=qt.exec(e[u])||[],p=v=a[1],f=(a[2]||"").split(".").sort(),p&&(h=rt.event.special[p]||{},p=(o?h.delegateType:h.bindType)||p,h=rt.event.special[p]||{},l=rt.extend({type:p,origType:v,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&rt.expr.match.needsContext.test(o),namespace:f.join(".")},r),(d=c[p])||(d=c[p]=[],d.delegateCount=0,h.setup&&h.setup.call(t,i,f,s)!==!1||t.addEventListener&&t.addEventListener(p,s)),h.add&&(h.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,l):d.push(l),rt.event.global[p]=!0)},remove:function(t,e,n,i,o){var r,s,a,c,u,l,h,d,p,f,v,m=Tt.hasData(t)&&Tt.get(t);if(m&&(c=m.events)){for(e=(e||"").match(_t)||[""],u=e.length;u--;)if(a=qt.exec(e[u])||[],p=v=a[1],f=(a[2]||"").split(".").sort(),p){for(h=rt.event.special[p]||{},p=(i?h.delegateType:h.bindType)||p,d=c[p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=d.length;r--;)l=d[r],!o&&v!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||i&&i!==l.selector&&("**"!==i||!l.selector)||(d.splice(r,1),l.selector&&d.delegateCount--,h.remove&&h.remove.call(t,l));s&&!d.length&&(h.teardown&&h.teardown.call(t,f,m.handle)!==!1||rt.removeEvent(t,p,m.handle),delete c[p])}else for(p in c)rt.event.remove(t,p+e[u],n,i,!0);rt.isEmptyObject(c)&&Tt.remove(t,"handle events")}},dispatch:function(t){t=rt.event.fix(t);var e,n,i,o,r,s=[],a=Y.call(arguments),c=(Tt.get(this,"events")||{})[t.type]||[],u=rt.event.special[t.type]||{};if(a[0]=t,t.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,t)!==!1){for(s=rt.event.handlers.call(this,t,c),e=0;(o=s[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.rnamespace||t.rnamespace.test(r.namespace))&&(t.handleObj=r,t.data=r.data,i=((rt.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,r,s=[],a=e.delegateCount,c=t.target;if(a&&c.nodeType&&("click"!==t.type||isNaN(t.button)||t.button<1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&(c.disabled!==!0||"click"!==t.type)){for(i=[],n=0;a>n;n++)r=e[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?rt(o,this).index(c)>-1:rt.find(o,this,null,[c]).length),i[o]&&i.push(r);i.length&&s.push({elem:c,handlers:i})}return a<e.length&&s.push({elem:this,handlers:e.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,o,r=e.button;return null==t.pageX&&null!=e.clientX&&(n=t.target.ownerDocument||J,i=n.documentElement,o=n.body,t.pageX=e.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),t.pageY=e.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),t.which||void 0===r||(t.which=1&r?1:2&r?3:4&r?2:0),t}},fix:function(t){if(t[rt.expando])return t;var e,n,i,o=t.type,r=t,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=Ht.test(o)?this.mouseHooks:Rt.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,t=new rt.Event(r),e=i.length;e--;)n=i[e],t[n]=r[n];return t.target||(t.target=J),3===t.target.nodeType&&(t.target=t.target.parentNode),s.filter?s.filter(t,r):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==v()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===v()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&rt.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return rt.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},rt.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},rt.Event=function(t,e){return this instanceof rt.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?p:f):this.type=t,e&&rt.extend(this,e),this.timeStamp=t&&t.timeStamp||rt.now(),void(this[rt.expando]=!0)):new rt.Event(t,e)},rt.Event.prototype={constructor:rt.Event,isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=p,t&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=p,t&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=p,t&&t.stopImmediatePropagation(),this.stopPropagation()}},rt.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){rt.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return(!o||o!==i&&!rt.contains(i,o))&&(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}}),rt.fn.extend({on:function(t,e,n,i){return m(this,t,e,n,i)},one:function(t,e,n,i){return m(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,rt(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=f),this.each(function(){rt.event.remove(this,t,n,e)})}});var Ft=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Bt=/<script|<style|<link/i,Ut=/checked\s*(?:[^=]|=\s*.checked.)/i,Vt=/^true\/(.*)/,Wt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;rt.extend({htmlPrefilter:function(t){return t.replace(Ft,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a=t.cloneNode(!0),c=rt.contains(t.ownerDocument,t);if(!(it.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||rt.isXMLDoc(t)))for(s=l(a),r=l(t),i=0,o=r.length;o>i;i++)_(r[i],s[i]);if(e)if(n)for(r=r||l(t),s=s||l(a),i=0,o=r.length;o>i;i++)w(r[i],s[i]);else w(t,a);return s=l(a,"script"),s.length>0&&h(s,!c&&l(t,"script")),a},cleanData:function(t){for(var e,n,i,o=rt.event.special,r=0;void 0!==(n=t[r]);r++)if(kt(n)){if(e=n[Tt.expando]){if(e.events)for(i in e.events)o[i]?rt.event.remove(n,i):rt.removeEvent(n,i,e.handle);n[Tt.expando]=void 0}n[Et.expando]&&(n[Et.expando]=void 0)}}}),rt.fn.extend({domManip:x,detach:function(t){return C(this,t,!0)},remove:function(t){return C(this,t)},text:function(t){return Ct(this,function(t){return void 0===t?rt.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return x(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=g(this,t);e.appendChild(t)}})},prepend:function(){return x(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=g(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return x(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return x(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(rt.cleanData(l(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return rt.clone(this,t,e)})},html:function(t){return Ct(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Bt.test(t)&&!Mt[(It.exec(t)||["",""])[1].toLowerCase()]){t=rt.htmlPrefilter(t);try{for(;i>n;n++)e=this[n]||{},1===e.nodeType&&(rt.cleanData(l(e,!1)),e.innerHTML=t);e=0}catch(o){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return x(this,arguments,function(e){var n=this.parentNode;rt.inArray(this,t)<0&&(rt.cleanData(l(this)),n&&n.replaceChild(e,this))},t)}}),rt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){rt.fn[t]=function(t){for(var n,i=[],o=rt(t),r=o.length-1,s=0;r>=s;s++)n=s===r?this:this.clone(!0),rt(o[s])[e](n),K.apply(i,n.get());return this.pushStack(i)}});var zt,Qt={HTML:"block",BODY:"block"},Xt=/^margin/,Jt=new RegExp("^("+Nt+")(?!px)[a-z%]+$","i"),Yt=function(e){var n=e.ownerDocument.defaultView;return n.opener||(n=t),n.getComputedStyle(e)},Gt=function(t,e,n,i){var o,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];o=n.apply(t,i||[]);for(r in e)t.style[r]=s[r];return o},Kt=J.documentElement;!function(){function e(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Kt.appendChild(s);var e=t.getComputedStyle(a);n="1%"!==e.top,r="2px"===e.marginLeft,i="4px"===e.width,a.style.marginRight="50%",o="4px"===e.marginRight,Kt.removeChild(s)}var n,i,o,r,s=J.createElement("div"),a=J.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",it.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),rt.extend(it,{pixelPosition:function(){return e(),n},boxSizingReliable:function(){return null==i&&e(),i},pixelMarginRight:function(){return null==i&&e(),o},reliableMarginLeft:function(){return null==i&&e(),r},reliableMarginRight:function(){var e,n=a.appendChild(J.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Kt.appendChild(s),e=!parseFloat(t.getComputedStyle(n).marginRight),Kt.removeChild(s),a.removeChild(n),e}}))}();var Zt=/^(none|table(?!-c[ea]).+)/,te={position:"absolute",visibility:"hidden",display:"block"},ee={letterSpacing:"0",fontWeight:"400"},ne=["Webkit","O","Moz","ms"],ie=J.createElement("div").style;rt.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=E(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,r,s,a=rt.camelCase(e),c=t.style;return e=rt.cssProps[a]||(rt.cssProps[a]=O(a)||a),s=rt.cssHooks[e]||rt.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:c[e]:(r=typeof n,"string"===r&&(o=$t.exec(n))&&o[1]&&(n=u(t,e,o),r="number"),void(null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(rt.cssNumber[a]?"":"px")),it.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,i))||(c[e]=n))))}},css:function(t,e,n,i){var o,r,s,a=rt.camelCase(e);return e=rt.cssProps[a]||(rt.cssProps[a]=O(a)||a),s=rt.cssHooks[e]||rt.cssHooks[a],s&&"get"in s&&(o=s.get(t,!0,n)),void 0===o&&(o=E(t,e,i)),"normal"===o&&e in ee&&(o=ee[e]),""===n||n?(r=parseFloat(o),n===!0||isFinite(r)?r||0:o):o}}),rt.each(["height","width"],function(t,e){rt.cssHooks[e]={get:function(t,n,i){return n?Zt.test(rt.css(t,"display"))&&0===t.offsetWidth?Gt(t,te,function(){return A(t,e,i)}):A(t,e,i):void 0},set:function(t,n,i){var o,r=i&&Yt(t),s=i&&$(t,e,i,"border-box"===rt.css(t,"boxSizing",!1,r),r);return s&&(o=$t.exec(n))&&"px"!==(o[3]||"px")&&(t.style[e]=n,n=rt.css(t,e)),N(t,n,s)}}}),rt.cssHooks.marginLeft=S(it.reliableMarginLeft,function(t,e){return e?(parseFloat(E(t,"marginLeft"))||t.getBoundingClientRect().left-Gt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px":void 0}),rt.cssHooks.marginRight=S(it.reliableMarginRight,function(t,e){return e?Gt(t,{display:"inline-block"},E,[t,"marginRight"]):void 0}),rt.each({margin:"",padding:"",border:"Width"},function(t,e){rt.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[t+At[i]+e]=r[i]||r[i-2]||r[0];return o}},Xt.test(t)||(rt.cssHooks[t+e].set=N)}),rt.fn.extend({css:function(t,e){return Ct(this,function(t,e,n){var i,o,r={},s=0;if(rt.isArray(e)){for(i=Yt(t),o=e.length;o>s;s++)r[e[s]]=rt.css(t,e[s],!1,i);return r}return void 0!==n?rt.style(t,e,n):rt.css(t,e)},t,e,arguments.length>1)},show:function(){return D(this,!0)},hide:function(){return D(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Dt(this)?rt(this).show():rt(this).hide()})}}),rt.Tween=j,j.prototype={constructor:j,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||rt.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(rt.cssNumber[n]?"":"px")},cur:function(){var t=j.propHooks[this.prop];return t&&t.get?t.get(this):j.propHooks._default.get(this)},run:function(t){var e,n=j.propHooks[this.prop];return this.options.duration?this.pos=e=rt.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):j.propHooks._default.set(this),this}},j.prototype.init.prototype=j.prototype,j.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=rt.css(t.elem,t.prop,""),e&&"auto"!==e?e:0)},set:function(t){rt.fx.step[t.prop]?rt.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[rt.cssProps[t.prop]]&&!rt.cssHooks[t.prop]?t.elem[t.prop]=t.now:rt.style(t.elem,t.prop,t.now+t.unit)}}},j.propHooks.scrollTop=j.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},rt.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},rt.fx=j.prototype.init,rt.fx.step={};var oe,re,se=/^(?:toggle|show|hide)$/,ae=/queueHooks$/;rt.Animation=rt.extend(H,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return u(n.elem,t,$t.exec(e),n),n}]},tweener:function(t,e){rt.isFunction(t)?(e=t,t=["*"]):t=t.match(_t);for(var n,i=0,o=t.length;o>i;i++)n=t[i],H.tweeners[n]=H.tweeners[n]||[],H.tweeners[n].unshift(e)},prefilters:[L],prefilter:function(t,e){e?H.prefilters.unshift(t):H.prefilters.push(t)}}),rt.speed=function(t,e,n){var i=t&&"object"==typeof t?rt.extend({},t):{complete:n||!n&&e||rt.isFunction(t)&&t,duration:t,easing:n&&e||e&&!rt.isFunction(e)&&e};return i.duration=rt.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in rt.fx.speeds?rt.fx.speeds[i.duration]:rt.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){rt.isFunction(i.old)&&i.old.call(this),i.queue&&rt.dequeue(this,i.queue)},i},rt.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Dt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=rt.isEmptyObject(t),r=rt.speed(e,n,i),s=function(){var e=H(this,rt.extend({},t),r);(o||Tt.get(this,"finish"))&&e.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",r=rt.timers,s=Tt.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&ae.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),e=!1,r.splice(o,1));(e||!n)&&rt.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=Tt.get(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=rt.timers,s=i?i.length:0;for(n.finish=!0,rt.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;s>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish;
})}}),rt.each(["toggle","show","hide"],function(t,e){var n=rt.fn[e];rt.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(P(e,!0),t,i,o)}}),rt.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){rt.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),rt.timers=[],rt.fx.tick=function(){var t,e=0,n=rt.timers;for(oe=rt.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1);n.length||rt.fx.stop(),oe=void 0},rt.fx.timer=function(t){rt.timers.push(t),t()?rt.fx.start():rt.timers.pop()},rt.fx.interval=13,rt.fx.start=function(){re||(re=t.setInterval(rt.fx.tick,rt.fx.interval))},rt.fx.stop=function(){t.clearInterval(re),re=null},rt.fx.speeds={slow:600,fast:200,_default:400},rt.fn.delay=function(e,n){return e=rt.fx?rt.fx.speeds[e]||e:e,n=n||"fx",this.queue(n,function(n,i){var o=t.setTimeout(n,e);i.stop=function(){t.clearTimeout(o)}})},function(){var t=J.createElement("input"),e=J.createElement("select"),n=e.appendChild(J.createElement("option"));t.type="checkbox",it.checkOn=""!==t.value,it.optSelected=n.selected,e.disabled=!0,it.optDisabled=!n.disabled,t=J.createElement("input"),t.value="t",t.type="radio",it.radioValue="t"===t.value}();var ce,ue=rt.expr.attrHandle;rt.fn.extend({attr:function(t,e){return Ct(this,rt.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){rt.removeAttr(this,t)})}}),rt.extend({attr:function(t,e,n){var i,o,r=t.nodeType;return 3!==r&&8!==r&&2!==r?"undefined"==typeof t.getAttribute?rt.prop(t,e,n):(1===r&&rt.isXMLDoc(t)||(e=e.toLowerCase(),o=rt.attrHooks[e]||(rt.expr.match.bool.test(e)?ce:void 0)),void 0!==n?null===n?void rt.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:(i=rt.find.attr(t,e),null==i?void 0:i)):void 0},attrHooks:{type:{set:function(t,e){if(!it.radioValue&&"radio"===e&&rt.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i,o=0,r=e&&e.match(_t);if(r&&1===t.nodeType)for(;n=r[o++];)i=rt.propFix[n]||n,rt.expr.match.bool.test(n)&&(t[i]=!1),t.removeAttribute(n)}}),ce={set:function(t,e,n){return e===!1?rt.removeAttr(t,n):t.setAttribute(n,n),n}},rt.each(rt.expr.match.bool.source.match(/\w+/g),function(t,e){var n=ue[e]||rt.find.attr;ue[e]=function(t,e,i){var o,r;return i||(r=ue[e],ue[e]=o,o=null!=n(t,e,i)?e.toLowerCase():null,ue[e]=r),o}});var le=/^(?:input|select|textarea|button)$/i,he=/^(?:a|area)$/i;rt.fn.extend({prop:function(t,e){return Ct(this,rt.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[rt.propFix[t]||t]})}}),rt.extend({prop:function(t,e,n){var i,o,r=t.nodeType;return 3!==r&&8!==r&&2!==r?(1===r&&rt.isXMLDoc(t)||(e=rt.propFix[e]||e,o=rt.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]):void 0},propHooks:{tabIndex:{get:function(t){var e=rt.find.attr(t,"tabindex");return e?parseInt(e,10):le.test(t.nodeName)||he.test(t.nodeName)&&t.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),it.optSelected||(rt.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),rt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){rt.propFix[this.toLowerCase()]=this});var de=/[\t\r\n\f]/g;rt.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,c=0;if(rt.isFunction(t))return this.each(function(e){rt(this).addClass(t.call(this,e,q(this)))});if("string"==typeof t&&t)for(e=t.match(_t)||[];n=this[c++];)if(o=q(n),i=1===n.nodeType&&(" "+o+" ").replace(de," ")){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");a=rt.trim(i),o!==a&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,c=0;if(rt.isFunction(t))return this.each(function(e){rt(this).removeClass(t.call(this,e,q(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(_t)||[];n=this[c++];)if(o=q(n),i=1===n.nodeType&&(" "+o+" ").replace(de," ")){for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");a=rt.trim(i),o!==a&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):rt.isFunction(t)?this.each(function(n){rt(this).toggleClass(t.call(this,n,q(this),e),e)}):this.each(function(){var e,i,o,r;if("string"===n)for(i=0,o=rt(this),r=t.match(_t)||[];e=r[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else(void 0===t||"boolean"===n)&&(e=q(this),e&&Tt.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||t===!1?"":Tt.get(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+q(n)+" ").replace(de," ").indexOf(e)>-1)return!0;return!1}});var pe=/\r/g;rt.fn.extend({val:function(t){var e,n,i,o=this[0];return arguments.length?(i=rt.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(o=i?t.call(this,n,rt(this).val()):t,null==o?o="":"number"==typeof o?o+="":rt.isArray(o)&&(o=rt.map(o,function(t){return null==t?"":t+""})),e=rt.valHooks[this.type]||rt.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))})):o?(e=rt.valHooks[o.type]||rt.valHooks[o.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(pe,""):null==n?"":n)):void 0}}),rt.extend({valHooks:{option:{get:function(t){return rt.trim(t.value)}},select:{get:function(t){for(var e,n,i=t.options,o=t.selectedIndex,r="select-one"===t.type||0>o,s=r?null:[],a=r?o+1:i.length,c=0>o?a:r?o:0;a>c;c++)if(n=i[c],(n.selected||c===o)&&(it.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!rt.nodeName(n.parentNode,"optgroup"))){if(e=rt(n).val(),r)return e;s.push(e)}return s},set:function(t,e){for(var n,i,o=t.options,r=rt.makeArray(e),s=o.length;s--;)i=o[s],(i.selected=rt.inArray(rt.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(t.selectedIndex=-1),r}}}}),rt.each(["radio","checkbox"],function(){rt.valHooks[this]={set:function(t,e){return rt.isArray(e)?t.checked=rt.inArray(rt(t).val(),e)>-1:void 0}},it.checkOn||(rt.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var fe=/^(?:focusinfocus|focusoutblur)$/;rt.extend(rt.event,{trigger:function(e,n,i,o){var r,s,a,c,u,l,h,d=[i||J],p=nt.call(e,"type")?e.type:e,f=nt.call(e,"namespace")?e.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!fe.test(p+rt.event.triggered)&&(p.indexOf(".")>-1&&(f=p.split("."),p=f.shift(),f.sort()),u=p.indexOf(":")<0&&"on"+p,e=e[rt.expando]?e:new rt.Event(p,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=f.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:rt.makeArray(n,[e]),h=rt.event.special[p]||{},o||!h.trigger||h.trigger.apply(i,n)!==!1)){if(!o&&!h.noBubble&&!rt.isWindow(i)){for(c=h.delegateType||p,fe.test(c+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(i.ownerDocument||J)&&d.push(a.defaultView||a.parentWindow||t)}for(r=0;(s=d[r++])&&!e.isPropagationStopped();)e.type=r>1?c:h.bindType||p,l=(Tt.get(s,"events")||{})[e.type]&&Tt.get(s,"handle"),l&&l.apply(s,n),l=u&&s[u],l&&l.apply&&kt(s)&&(e.result=l.apply(s,n),e.result===!1&&e.preventDefault());return e.type=p,o||e.isDefaultPrevented()||h._default&&h._default.apply(d.pop(),n)!==!1||!kt(i)||u&&rt.isFunction(i[p])&&!rt.isWindow(i)&&(a=i[u],a&&(i[u]=null),rt.event.triggered=p,i[p](),rt.event.triggered=void 0,a&&(i[u]=a)),e.result}},simulate:function(t,e,n){var i=rt.extend(new rt.Event,n,{type:t,isSimulated:!0});rt.event.trigger(i,null,e),i.isDefaultPrevented()&&n.preventDefault()}}),rt.fn.extend({trigger:function(t,e){return this.each(function(){rt.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?rt.event.trigger(t,e,n,!0):void 0}}),rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){rt.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),rt.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),it.focusin="onfocusin"in t,it.focusin||rt.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){rt.event.simulate(e,t.target,rt.event.fix(t))};rt.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=Tt.access(i,e);o||i.addEventListener(t,n,!0),Tt.access(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=Tt.access(i,e)-1;o?Tt.access(i,e,o):(i.removeEventListener(t,n,!0),Tt.remove(i,e))}}});var ve=t.location,me=rt.now(),ge=/\?/;rt.parseJSON=function(t){return JSON.parse(t+"")},rt.parseXML=function(e){var n;if(!e||"string"!=typeof e)return null;try{n=(new t.DOMParser).parseFromString(e,"text/xml")}catch(i){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&rt.error("Invalid XML: "+e),n};var ye=/#.*$/,be=/([?&])_=[^&]*/,we=/^(.*?):[ \t]*([^\r\n]*)$/gm,_e=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,xe=/^(?:GET|HEAD)$/,Ce=/^\/\//,ke={},Te={},Ee="*/".concat("*"),Se=J.createElement("a");Se.href=ve.href,rt.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ve.href,type:"GET",isLocal:_e.test(ve.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ee,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":rt.parseJSON,"text xml":rt.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?U(U(t,rt.ajaxSettings),e):U(rt.ajaxSettings,t)},ajaxPrefilter:F(ke),ajaxTransport:F(Te),ajax:function(e,n){function i(e,n,i,a){var u,h,y,b,_,C=n;2!==w&&(w=2,c&&t.clearTimeout(c),o=void 0,s=a||"",x.readyState=e>0?4:0,u=e>=200&&300>e||304===e,i&&(b=V(d,x,i)),b=W(d,b,x,u),u?(d.ifModified&&(_=x.getResponseHeader("Last-Modified"),_&&(rt.lastModified[r]=_),_=x.getResponseHeader("etag"),_&&(rt.etag[r]=_)),204===e||"HEAD"===d.type?C="nocontent":304===e?C="notmodified":(C=b.state,h=b.data,y=b.error,u=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),x.status=e,x.statusText=(n||C)+"",u?v.resolveWith(p,[h,C,x]):v.rejectWith(p,[x,C,y]),x.statusCode(g),g=void 0,l&&f.trigger(u?"ajaxSuccess":"ajaxError",[x,d,u?h:y]),m.fireWith(p,[x,C]),l&&(f.trigger("ajaxComplete",[x,d]),--rt.active||rt.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=void 0),n=n||{};var o,r,s,a,c,u,l,h,d=rt.ajaxSetup({},n),p=d.context||d,f=d.context&&(p.nodeType||p.jquery)?rt(p):rt.event,v=rt.Deferred(),m=rt.Callbacks("once memory"),g=d.statusCode||{},y={},b={},w=0,_="canceled",x={readyState:0,getResponseHeader:function(t){var e;if(2===w){if(!a)for(a={};e=we.exec(s);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===w?s:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return w||(t=b[n]=b[n]||t,y[t]=e),this},overrideMimeType:function(t){return w||(d.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>w)for(e in t)g[e]=[g[e],t[e]];else x.always(t[x.status]);return this},abort:function(t){var e=t||_;return o&&o.abort(e),i(0,e),this}};if(v.promise(x).complete=m.add,x.success=x.done,x.error=x.fail,d.url=((e||d.url||ve.href)+"").replace(ye,"").replace(Ce,ve.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=rt.trim(d.dataType||"*").toLowerCase().match(_t)||[""],null==d.crossDomain){u=J.createElement("a");try{u.href=d.url,u.href=u.href,d.crossDomain=Se.protocol+"//"+Se.host!=u.protocol+"//"+u.host}catch(C){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=rt.param(d.data,d.traditional)),B(ke,d,n,x),2===w)return x;l=rt.event&&d.global,l&&0===rt.active++&&rt.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!xe.test(d.type),r=d.url,d.hasContent||(d.data&&(r=d.url+=(ge.test(r)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=be.test(r)?r.replace(be,"$1_="+me++):r+(ge.test(r)?"&":"?")+"_="+me++)),d.ifModified&&(rt.lastModified[r]&&x.setRequestHeader("If-Modified-Since",rt.lastModified[r]),rt.etag[r]&&x.setRequestHeader("If-None-Match",rt.etag[r])),(d.data&&d.hasContent&&d.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",d.contentType),x.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Ee+"; q=0.01":""):d.accepts["*"]);for(h in d.headers)x.setRequestHeader(h,d.headers[h]);if(d.beforeSend&&(d.beforeSend.call(p,x,d)===!1||2===w))return x.abort();_="abort";for(h in{success:1,error:1,complete:1})x[h](d[h]);if(o=B(Te,d,n,x)){if(x.readyState=1,l&&f.trigger("ajaxSend",[x,d]),2===w)return x;d.async&&d.timeout>0&&(c=t.setTimeout(function(){x.abort("timeout")},d.timeout));try{w=1,o.send(y,i)}catch(C){if(!(2>w))throw C;i(-1,C)}}else i(-1,"No Transport");return x},getJSON:function(t,e,n){return rt.get(t,e,n,"json")},getScript:function(t,e){return rt.get(t,void 0,e,"script")}}),rt.each(["get","post"],function(t,e){rt[e]=function(t,n,i,o){return rt.isFunction(n)&&(o=o||i,i=n,n=void 0),rt.ajax(rt.extend({url:t,type:e,dataType:o,data:n,success:i},rt.isPlainObject(t)&&t))}}),rt._evalUrl=function(t){return rt.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},rt.fn.extend({wrapAll:function(t){var e;return rt.isFunction(t)?this.each(function(e){rt(this).wrapAll(t.call(this,e))}):(this[0]&&(e=rt(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this)},wrapInner:function(t){return rt.isFunction(t)?this.each(function(e){rt(this).wrapInner(t.call(this,e))}):this.each(function(){var e=rt(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=rt.isFunction(t);return this.each(function(n){rt(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){rt.nodeName(this,"body")||rt(this).replaceWith(this.childNodes)}).end()}}),rt.expr.filters.hidden=function(t){return!rt.expr.filters.visible(t)},rt.expr.filters.visible=function(t){return t.offsetWidth>0||t.offsetHeight>0||t.getClientRects().length>0};var Oe=/%20/g,Ne=/\[\]$/,$e=/\r?\n/g,Ae=/^(?:submit|button|image|reset|file)$/i,De=/^(?:input|select|textarea|keygen)/i;rt.param=function(t,e){var n,i=[],o=function(t,e){e=rt.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(void 0===e&&(e=rt.ajaxSettings&&rt.ajaxSettings.traditional),rt.isArray(t)||t.jquery&&!rt.isPlainObject(t))rt.each(t,function(){o(this.name,this.value)});else for(n in t)z(n,t[n],e,o);return i.join("&").replace(Oe,"+")},rt.fn.extend({serialize:function(){return rt.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=rt.prop(this,"elements");return t?rt.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!rt(this).is(":disabled")&&De.test(this.nodeName)&&!Ae.test(t)&&(this.checked||!jt.test(t))}).map(function(t,e){var n=rt(this).val();return null==n?null:rt.isArray(n)?rt.map(n,function(t){return{name:e.name,value:t.replace($e,"\r\n")}}):{name:e.name,value:n.replace($e,"\r\n")}}).get()}}),rt.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(e){}};var je={0:200,1223:204},Ie=rt.ajaxSettings.xhr();it.cors=!!Ie&&"withCredentials"in Ie,it.ajax=Ie=!!Ie,rt.ajaxTransport(function(e){var n,i;return it.cors||Ie&&!e.crossDomain?{send:function(o,r){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(s in o)a.setRequestHeader(s,o[s]);n=function(t){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(je[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&t.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(e.hasContent&&e.data||null)}catch(c){if(n)throw c}},abort:function(){n&&n()}}:void 0}),rt.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return rt.globalEval(t),t}}}),rt.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),rt.ajaxTransport("script",function(t){if(t.crossDomain){var e,n;return{send:function(i,o){e=rt("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&o("error"===t.type?404:200,t.type)}),J.head.appendChild(e[0])},abort:function(){n&&n()}}}});var Pe=[],Me=/(=)\?(?=&|$)|\?\?/;rt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Pe.pop()||rt.expando+"_"+me++;return this[t]=!0,t}}),rt.ajaxPrefilter("json jsonp",function(e,n,i){var o,r,s,a=e.jsonp!==!1&&(Me.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Me.test(e.data)&&"data");return a||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=rt.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Me,"$1"+o):e.jsonp!==!1&&(e.url+=(ge.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return s||rt.error(o+" was not called"),s[0]},e.dataTypes[0]="json",r=t[o],t[o]=function(){s=arguments},i.always(function(){void 0===r?rt(t).removeProp(o):t[o]=r,e[o]&&(e.jsonpCallback=n.jsonpCallback,Pe.push(o)),s&&rt.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),it.createHTMLDocument=function(){var t=J.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),rt.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||(it.createHTMLDocument?J.implementation.createHTMLDocument(""):J);var i=ft.exec(t),o=!n&&[];return i?[e.createElement(i[1])]:(i=d([t],e,o),o&&o.length&&rt(o).remove(),rt.merge([],i.childNodes))};var Le=rt.fn.load;rt.fn.load=function(t,e,n){if("string"!=typeof t&&Le)return Le.apply(this,arguments);var i,o,r,s=this,a=t.indexOf(" ");return a>-1&&(i=rt.trim(t.slice(a)),t=t.slice(0,a)),rt.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),s.length>0&&rt.ajax({url:t,type:o||"GET",dataType:"html",data:e}).done(function(t){r=arguments,s.html(i?rt("<div>").append(rt.parseHTML(t)).find(i):t)}).always(n&&function(t,e){s.each(function(){n.apply(s,r||[t.responseText,e,t])})}),this},rt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){rt.fn[e]=function(t){return this.on(e,t)}}),rt.expr.filters.animated=function(t){return rt.grep(rt.timers,function(e){return t===e.elem}).length},rt.offset={setOffset:function(t,e,n){var i,o,r,s,a,c,u,l=rt.css(t,"position"),h=rt(t),d={};"static"===l&&(t.style.position="relative"),a=h.offset(),r=rt.css(t,"top"),c=rt.css(t,"left"),u=("absolute"===l||"fixed"===l)&&(r+c).indexOf("auto")>-1,u?(i=h.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(c)||0),rt.isFunction(e)&&(e=e.call(t,n,rt.extend({},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+o),"using"in e?e.using.call(t,d):h.css(d)}},rt.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){rt.offset.setOffset(this,t,e)});var e,n,i=this[0],o={top:0,left:0},r=i&&i.ownerDocument;return r?(e=r.documentElement,rt.contains(e,i)?(o=i.getBoundingClientRect(),n=Q(r),{top:o.top+n.pageYOffset-e.clientTop,left:o.left+n.pageXOffset-e.clientLeft}):o):void 0},position:function(){if(this[0]){var t,e,n=this[0],i={top:0,left:0};return"fixed"===rt.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),rt.nodeName(t[0],"html")||(i=t.offset()),i.top+=rt.css(t[0],"borderTopWidth",!0)-t.scrollTop(),i.left+=rt.css(t[0],"borderLeftWidth",!0)-t.scrollLeft()),{top:e.top-i.top-rt.css(n,"marginTop",!0),left:e.left-i.left-rt.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===rt.css(t,"position");)t=t.offsetParent;return t||Kt})}}),rt.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;rt.fn[t]=function(i){return Ct(this,function(t,i,o){var r=Q(t);return void 0===o?r?r[e]:t[i]:void(r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):t[i]=o)},t,i,arguments.length)}}),rt.each(["top","left"],function(t,e){rt.cssHooks[e]=S(it.pixelPosition,function(t,n){return n?(n=E(t,e),Jt.test(n)?rt(t).position()[e]+"px":n):void 0})}),rt.each({Height:"height",Width:"width"},function(t,e){rt.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){rt.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");return Ct(this,function(e,n,i){var o;return rt.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?rt.css(e,n,s):rt.style(e,n,i,s)},e,r?i:void 0,r,null)}})}),rt.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},size:function(){return this.length}}),rt.fn.andSelf=rt.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return rt});var Re=t.jQuery,He=t.$;return rt.noConflict=function(e){return t.$===rt&&(t.$=He),e&&t.jQuery===rt&&(t.jQuery=Re),rt},e||(t.jQuery=t.$=rt),rt}),jQuery.extend({createUploadIframe:function(t,e){var n="jUploadFrame"+t,i='<iframe id="'+n+'" name="'+n+'" style="position:absolute; top:-9999px; left:-9999px"';return window.ActiveXObject&&("boolean"==typeof e?i+=' src="javascript:false"':"string"==typeof e&&(i+=' src="'+e+'"')),i+=" />",jQuery(i).appendTo(document.body),jQuery("#"+n).get(0)},createUploadForm:function(t,e,n,i){var o="jUploadForm"+t,r="jUploadFile"+t,s=jQuery('<form  action="" method="POST" name="'+o+'" id="'+o+'" enctype="multipart/form-data"></form>');if(n)for(var a in n)jQuery('<input type="hidden" name="'+a+'" value="'+n[a]+'" />').appendTo(s);var c;c=null==i?jQuery("#"+e):i;var u=jQuery(c).clone();return jQuery(c).attr("id",r),jQuery(c).before(u),jQuery(c).appendTo(s),jQuery(s).css("position","absolute"),jQuery(s).css("top","-1200px"),jQuery(s).css("left","-1200px"),jQuery(s).appendTo("body"),s},ajaxFileUpload:function(t){t=jQuery.extend({},jQuery.ajaxSettings,t);var e=(new Date).getTime(),n=jQuery.createUploadForm(e,t.fileElementId,"undefined"==typeof t.data?!1:t.data,t.fileElement),i=(jQuery.createUploadIframe(e,t.secureuri),"jUploadFrame"+e),o="jUploadForm"+e;t.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");var r=!1,s={};t.global&&jQuery.event.trigger("ajaxSend",[s,t]);var a=function(e){var o=document.getElementById(i);try{o.contentWindow?(s.responseText=o.contentWindow.document.body?o.contentWindow.document.body.innerHTML:null,s.responseXML=o.contentWindow.document.XMLDocument?o.contentWindow.document.XMLDocument:o.contentWindow.document):o.contentDocument&&(s.responseText=o.contentDocument.document.body?o.contentDocument.document.body.innerHTML:null,s.responseXML=o.contentDocument.document.XMLDocument?o.contentDocument.document.XMLDocument:o.contentDocument.document)}catch(a){jQuery.handleError(t,s,null,a)}if(s||"timeout"==e){r=!0;var c;try{if(c="timeout"!=e?"success":"error","error"!=c){var u=jQuery.uploadHttpData(s,t.dataType);t.success&&t.success(u,c),t.global&&jQuery.event.trigger("ajaxSuccess",[s,t])}else jQuery.handleError(t,s,c)}catch(a){c="error",jQuery.handleError(t,s,c,a)}t.global&&jQuery.event.trigger("ajaxComplete",[s,t]),t.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop"),t.complete&&t.complete(s,c),jQuery(o).unbind(),setTimeout(function(){try{jQuery(o).remove(),jQuery(n).remove()}catch(e){jQuery.handleError(t,s,null,e)}},100),s=null}};t.timeout>0&&setTimeout(function(){r||a("timeout")},t.timeout);try{var n=jQuery("#"+o);jQuery(n).attr("action",t.url),jQuery(n).attr("method","POST"),jQuery(n).attr("target",i),n.encoding?jQuery(n).attr("encoding","multipart/form-data"):jQuery(n).attr("enctype","multipart/form-data"),jQuery(n).submit()}catch(c){jQuery.handleError(t,s,null,c)}return jQuery("#"+i).load(a),{abort:function(){try{jQuery("#"+i).remove(),jQuery(n).remove()}catch(t){}}}},uploadHttpData:function(r,type){var data=!type;return data="xml"==type||data?r.responseXML:r.responseText,"script"==type&&jQuery.globalEval(data),"json"==type&&eval("data = "+data),"html"==type&&jQuery("<div>").html(data).evalScripts(),data},handleError:function(t,e,n,i){t.error&&t.error(e,n,i),t.global&&jQuery.event.trigger("ajaxError",[e,t,i])}}),function(){var t;t=function(){function t(t,e){this.startInterval=6e4,this.init(t,e)}return t.prototype.init=function(t,e){return this.$element=$(t),this.options=$.extend({},$.fn.timeago.defaults,e),this.updateTime(),this.startTimer()},t.prototype.startTimer=function(){var t;return t=this,this.interval=setInterval(function(){return t.refresh()},this.startInterval)},t.prototype.stopTimer=function(){return clearInterval(this.interval)},t.prototype.restartTimer=function(){return this.stopTimer(),this.startTimer()},t.prototype.refresh=function(){return this.updateTime(),this.updateInterval()},t.prototype.updateTime=function(){var t;return t=this,this.$element.findAndSelf(this.options.selector).each(function(){var e;return e=t.timeAgoInWords($(this).attr(t.options.attr)),$(this).html(e)})},t.prototype.updateInterval=function(){var t,e,n,i;if(this.$element.findAndSelf(this.options.selector).length>0){if("up"===this.options.dir?t=":first":"down"===this.options.dir&&(t=":last"),i=this.$element.findAndSelf(this.options.selector).filter(t).attr(this.options.attr),e=this.parse(i),n=this.getTimeDistanceInMinutes(e),n>=0&&44>=n&&6e4!==this.startInterval)return this.startInterval=6e4,this.restartTimer();if(n>=45&&89>=n&&132e4!==this.startInterval)return this.startInterval=132e4,this.restartTimer();if(n>=90&&2519>=n&&18e5!==this.startInterval)return this.startInterval=18e5,this.restartTimer();if(n>=2520&&432e5!==this.startInterval)return this.startInterval=432e5,this.restartTimer()}},t.prototype.timeAgoInWords=function(t){var e;return e=this.parse(t),""+this.options.lang.prefixes.ago+this.distanceOfTimeInWords(e)+this.options.lang.suffix},t.prototype.parse=function(t){var e;return e=$.trim(t),e=e.replace(/\.\d\d\d+/,""),e=e.replace(/-/,"/").replace(/-/,"/"),e=e.replace(/T/," ").replace(/Z/," UTC"),e=e.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e)},t.prototype.getTimeDistanceInMinutes=function(t){var e;return e=(new Date).getTime()-t.getTime(),Math.round(Math.abs(e)/1e3/60)},t.prototype.distanceOfTimeInWords=function(t){var e;return e=this.getTimeDistanceInMinutes(t),0===e?""+this.options.lang.prefixes.lt+" "+this.options.lang.units.minute:1===e?"1 "+this.options.lang.units.minute:e>=2&&44>=e?""+e+" "+this.options.lang.units.minutes:e>=45&&89>=e?""+this.options.lang.prefixes.about+" 1 "+this.options.lang.units.hour:e>=90&&1439>=e?""+this.options.lang.prefixes.about+" "+Math.round(e/60)+" "+this.options.lang.units.hours:e>=1440&&2519>=e?"1 "+this.options.lang.units.day:e>=2520&&43199>=e?""+Math.round(e/1440)+" "+this.options.lang.units.days:e>=43200&&86399>=e?""+this.options.lang.prefixes.about+" 1 "+this.options.lang.units.month:e>=86400&&525599>=e?""+Math.round(e/43200)+" "+this.options.lang.units.months:e>=525600&&655199>=e?""+this.options.lang.prefixes.about+" 1 "+this.options.lang.units.year:e>=655200&&914399>=e?""+this.options.lang.prefixes.over+" 1 "+this.options.lang.units.year:e>=914400&&1051199>=e?""+this.options.lang.prefixes.almost+" 2 "+this.options.lang.units.years:""+this.options.lang.prefixes.about+" "+Math.round(e/525600)+" "+this.options.lang.units.years},t}(),$.fn.timeago=function(e){return null==e&&(e={}),this.each(function(){var n,i;return n=$(this),i=n.data("timeago"),i?"string"==typeof e?i[e]():void 0:n.data("timeago",new t(this,e))})},$.fn.findAndSelf=function(t){return this.find(t).add(this.filter(t))},$.fn.timeago.Constructor=t,$.fn.timeago.defaults={selector:"time.timeago",attr:"datetime",dir:"up",lang:carbonLines}}.call(this),function(e){jQuery.fn.extend({slimScroll:function(n){var i=e.extend({width:"auto",height:"100%",size:"7px",color:"#ccc",position:"right",distance:"0",start:"top",opacity:.3,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:1,wheelStep:20,touchScrollStep:200,borderRadius:"0",railBorderRadius:"0"},n);return this.each(function(){function o(t){if(l){t=t||window.event;var n=0;t.wheelDelta&&(n=-t.wheelDelta/120),t.detail&&(n=t.detail/3),e(t.target||t.srcTarget||t.srcElement).closest("."+i.wrapperClass).is(w.parent())&&r(n,!0),t.preventDefault&&!b&&t.preventDefault(),b||(t.returnValue=!1)}}function r(t,e,n){b=!1;var o=t,r=w.outerHeight()-x.outerHeight();e&&(o=parseInt(x.css("top"))+t*parseInt(i.wheelStep)/100*x.outerHeight(),o=Math.min(Math.max(o,0),r),o=t>0?Math.ceil(o):Math.floor(o),x.css({top:o+"px"})),m=parseInt(x.css("top"))/(w.outerHeight()-x.outerHeight()),o=m*(w[0].scrollHeight-w.outerHeight()),n&&(o=t,t=o/w[0].scrollHeight*w.outerHeight(),t=Math.min(Math.max(t,0),r),x.css({top:t+"px"})),w.scrollTop(o),w.trigger("slimscrolling",~~o),c(),u()}function s(){window.addEventListener?(this.addEventListener("DOMMouseScroll",o,!1),this.addEventListener("mousewheel",o,!1),this.addEventListener("MozMousePixelScroll",o,!1)):document.attachEvent("onmousewheel",o)}function a(){v=Math.max(w.outerHeight()/w[0].scrollHeight*w.outerHeight(),y),x.css({height:v+"px"});var t=v==w.outerHeight()?"none":"block";x.css({display:t})}function c(){a(),clearTimeout(p),m==~~m?(b=i.allowPageScroll,g!=m&&w.trigger("slimscroll",0==~~m?"top":"bottom")):b=!1,g=m,v>=w.outerHeight()?b=!0:(x.stop(!0,!0).fadeIn("fast"),i.railVisible&&C.stop(!0,!0).fadeIn("fast"))}function u(){i.alwaysVisible||(p=setTimeout(function(){i.disableFadeOut&&l||h||d||(x.fadeOut("slow"),C.fadeOut("slow"))},1e3))}var l,h,d,p,f,v,m,g,y=30,b=!1,w=e(this);if(w.parent().hasClass(i.wrapperClass)){var _=w.scrollTop(),x=w.parent().find("."+i.barClass),C=w.parent().find("."+i.railClass);if(a(),e.isPlainObject(n)){if("height"in n&&"auto"==n.height){w.parent().css("height","auto"),w.css("height","auto");var k=w.parent().parent().height();w.parent().css("height",k),w.css("height",k)}if("scrollTo"in n)_=parseInt(i.scrollTo);else if("scrollBy"in n)_+=parseInt(i.scrollBy);else if("destroy"in n)return x.remove(),C.remove(),void w.unwrap();r(_,!1,!0)}}else{i.height="auto"==i.height?w.parent().height():i.height,_=e("<div></div>").addClass(i.wrapperClass).css({position:"relative",overflow:"hidden",
width:i.width,height:i.height}),w.css({overflow:"hidden",width:i.width,height:i.height});var C=e("<div></div>").addClass(i.railClass).css({width:i.size,height:"100%",position:"absolute",top:0,display:i.alwaysVisible&&i.railVisible?"block":"none","border-radius":i.railBorderRadius,background:i.railColor,opacity:i.railOpacity,zIndex:90}),x=e("<div></div>").addClass(i.barClass).css({background:i.color,width:i.size,position:"absolute",top:0,opacity:i.opacity,display:i.alwaysVisible?"block":"none","border-radius":i.borderRadius,BorderRadius:i.borderRadius,MozBorderRadius:i.borderRadius,WebkitBorderRadius:i.borderRadius,zIndex:99}),k="right"==i.position?{right:i.distance}:{left:i.distance};C.css(k),x.css(k),w.wrap(_),w.parent().append(x),w.parent().append(C),i.railDraggable&&x.bind("mousedown",function(n){var i=e(document);return d=!0,t=parseFloat(x.css("top")),pageY=n.pageY,i.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,x.css("top",currTop),r(0,x.position().top,!1)}),i.bind("mouseup.slimscroll",function(t){d=!1,u(),i.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(t){return t.stopPropagation(),t.preventDefault(),!1}),C.hover(function(){c()},function(){u()}),x.hover(function(){h=!0},function(){h=!1}),w.hover(function(){l=!0,c(),u()},function(){l=!1,u()}),w.bind("touchstart",function(t,e){t.originalEvent.touches.length&&(f=t.originalEvent.touches[0].pageY)}),w.bind("touchmove",function(t){b||t.originalEvent.preventDefault(),t.originalEvent.touches.length&&(r((f-t.originalEvent.touches[0].pageY)/i.touchScrollStep,!0),f=t.originalEvent.touches[0].pageY)}),a(),"bottom"===i.start?(x.css({top:w.outerHeight()-x.outerHeight()}),r(0,!0)):"top"!==i.start&&(r(e(i.start).position().top,null,!0),i.alwaysVisible||x.hide()),s()}}),this}}),jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})}(jQuery),!function(t){t(["jquery"],function(t){return function(){function e(t,e,n){return f({type:_.error,iconClass:v().iconClasses.error,message:t,optionsOverride:n,title:e})}function n(e,n){return e||(e=v()),g=t("#"+e.containerId),g.length?g:(n&&(g=h(e)),g)}function i(t,e,n){return f({type:_.info,iconClass:v().iconClasses.info,message:t,optionsOverride:n,title:e})}function o(t){y=t}function r(t,e,n){return f({type:_.success,iconClass:v().iconClasses.success,message:t,optionsOverride:n,title:e})}function s(t,e,n){return f({type:_.warning,iconClass:v().iconClasses.warning,message:t,optionsOverride:n,title:e})}function a(t){var e=v();g||n(e),l(t,e)||u(e)}function c(e){var i=v();return g||n(i),e&&0===t(":focus",e).length?void m(e):void(g.children().length&&g.remove())}function u(e){for(var n=g.children(),i=n.length-1;i>=0;i--)l(t(n[i]),e)}function l(e,n){return e&&0===t(":focus",e).length?(e[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){m(e)}}),!0):!1}function h(e){return g=t("<div/>").attr("id",e.containerId).addClass(e.positionClass).attr("aria-live","polite").attr("role","alert"),g.appendTo(t(e.target)),g}function d(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function p(t){y&&y(t)}function f(e){function i(e){return!t(":focus",l).length||e?(clearTimeout(_.intervalId),l[a.hideMethod]({duration:a.hideDuration,easing:a.hideEasing,complete:function(){m(l),a.onHidden&&"hidden"!==x.state&&a.onHidden(),x.state="hidden",x.endTime=new Date,p(x)}})):void 0}function o(){(a.timeOut>0||a.extendedTimeOut>0)&&(u=setTimeout(i,a.extendedTimeOut),_.maxHideTime=parseFloat(a.extendedTimeOut),_.hideEta=(new Date).getTime()+_.maxHideTime)}function r(){clearTimeout(u),_.hideEta=0,l.stop(!0,!0)[a.showMethod]({duration:a.showDuration,easing:a.showEasing})}function s(){var t=(_.hideEta-(new Date).getTime())/_.maxHideTime*100;f.width(t+"%")}var a=v(),c=e.iconClass||a.iconClass;if("undefined"!=typeof e.optionsOverride&&(a=t.extend(a,e.optionsOverride),c=e.optionsOverride.iconClass||c),a.preventDuplicates){if(e.message===b)return;b=e.message}w++,g=n(a,!0);var u=null,l=t("<div/>"),h=t("<div/>"),d=t("<div/>"),f=t("<div/>"),y=t(a.closeHtml),_={intervalId:null,hideEta:null,maxHideTime:null},x={toastId:w,state:"visible",startTime:new Date,options:a,map:e};return e.iconClass&&l.addClass(a.toastClass).addClass(c),e.title&&(h.append(e.title).addClass(a.titleClass),l.append(h)),e.message&&(d.append(e.message).addClass(a.messageClass),l.append(d)),a.closeButton&&(y.addClass("toast-close-button").attr("role","button"),l.prepend(y)),a.progressBar&&(f.addClass("toast-progress"),l.prepend(f)),l.hide(),a.newestOnTop?g.prepend(l):g.append(l),l[a.showMethod]({duration:a.showDuration,easing:a.showEasing,complete:a.onShown}),a.timeOut>0&&(u=setTimeout(i,a.timeOut),_.maxHideTime=parseFloat(a.timeOut),_.hideEta=(new Date).getTime()+_.maxHideTime,a.progressBar&&(_.intervalId=setInterval(s,10))),l.hover(r,o),!a.onclick&&a.tapToDismiss&&l.click(i),a.closeButton&&y&&y.click(function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&t.cancelBubble!==!0&&(t.cancelBubble=!0),i(!0)}),a.onclick&&l.click(function(){a.onclick(),i()}),p(x),a.debug&&console&&void 0,l}function v(){return t.extend({},d(),x.options)}function m(t){g||(g=n()),t.is(":visible")||(t.remove(),t=null,0===g.children().length&&(g.remove(),b=void 0))}var g,y,b,w=0,_={error:"error",info:"info",success:"success",warning:"warning"},x={clear:a,remove:c,error:e,getContainer:n,info:i,options:{},subscribe:o,success:r,version:"2.1.0",warning:s};return x}()})}("function"==typeof define&&define.amd?define:function(t,e){"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):window.toastr=e(window.jQuery)}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){n=!0});var o=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.alert");o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){s.detach().trigger("closed.bs.alert").remove()}var o=t(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var s=t(r);e&&e.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.button"),r="object"==typeof e&&e;o||i.data("bs.button",o=new n(this,r)),"toggle"==e?o.toggle():e&&o.setState(e)})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.3.5",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",r=i.data();e+="Text",null==r.resetText&&i.data("resetText",i[o]()),setTimeout(t.proxy(function(){i[o](null==r[e]?this.options[e]:r[e]),"loadingText"==e?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=t(n.target);i.hasClass("btn")||(i=i.closest(".btn")),e.call(i,"toggle"),t(n.target).is('input[type="radio"]')||t(n.target).is('input[type="checkbox"]')||n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),r=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),s="string"==typeof e?e:r.slide;o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof e?o.to(e):s?o[s]():r.interval&&o.pause().cycle()})}var n=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.3.5",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.getItemForDirection=function(t,e){var n=this.getItemIndex(e),i="prev"==t&&0===n||"next"==t&&n==this.$items.length-1;if(i&&!this.options.wrap)return e;var o="prev"==t?-1:1,r=(n+o)%this.$items.length;return this.$items.eq(r)},n.prototype.to=function(t){var e=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",this.$items.eq(t))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),r=i||this.getItemForDirection(e,o),s=this.interval,a="next"==e?"left":"right",c=this;if(r.hasClass("active"))return this.sliding=!1;var u=r[0],l=t.Event("slide.bs.carousel",{relatedTarget:u,direction:a});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(r)]);h&&h.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:u,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(r.addClass(e),r[0].offsetWidth,o.addClass(a),r.addClass(a),o.one("bsTransitionEnd",function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),c.sliding=!1,setTimeout(function(){c.$element.trigger(d)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(d)),s&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this};var o=function(n){var i,o=t(this),r=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var s=t.extend({},r.data(),o.data()),a=o.attr("data-slide-to");a&&(s.interval=!1),e.call(r,s),a&&r.data("bs.carousel").to(a),n.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery),+function(t){"use strict";function e(e){var n,i=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(i)}function n(e){return this.each(function(){var n=t(this),o=n.data("bs.collapse"),r=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||n.data("bs.collapse",o=new i(this,r)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.5",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var r=t.Event("show.bs.collapse");if(this.$element.trigger(r),!r.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),e||o.data("bs.collapse",null));var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var c=t.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][c])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,i){var o=t(i);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var o=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=t(this);o.attr("data-target")||i.preventDefault();var r=e(o),s=r.data("bs.collapse"),a=s?"toggle":o.data();n.call(r,a)})}(jQuery),+function(t){"use strict";function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&t(n);return i&&i.length?i:e.parent()}function n(n){n&&3===n.which||(t(o).remove(),t(r).each(function(){var i=t(this),o=e(i),r={relatedTarget:this};o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(o[0],n.target)||(o.trigger(n=t.Event("hide.bs.dropdown",r)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",r))))}))}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new s(this)),"string"==typeof e&&i[e].call(n)})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.5",s.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled, :disabled")){var r=e(o),s=r.hasClass("open");if(n(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var a={relatedTarget:this};if(r.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},s.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=t(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var o=e(i),s=o.hasClass("open");if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&o.find(r).trigger("focus"),i.trigger("click");var a=" li:not(.disabled):visible a",c=o.find(".dropdown-menu"+a);if(c.length){var u=c.index(n.target);38==n.which&&u>0&&u--,40==n.which&&u<c.length-1&&u++,~u||(u=0),c.eq(u).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,s.prototype.toggle).on("keydown.bs.dropdown.data-api",r,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,i){return this.each(function(){var o=t(this),r=o.data("bs.modal"),s=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e);r||o.data("bs.modal",r=new n(this,s)),"string"==typeof e?r[e](i):s.show&&r.show(i)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.3.5",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var r=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(r)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;r?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):s()}else e&&e()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=t(this),o=i.attr("href"),r=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=r.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},r.data(),i.data());i.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(r,s,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),r="object"==typeof e&&e;!o&&/destroy|hide/.test(e)||(o||i.data("bs.tooltip",o=new n(this,r)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};n.VERSION="3.3.5",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,i){if(this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",c="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(c+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,i){n[t]!=i&&(e[t]=i)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusin"==e.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusout"==e.type?"focus":"hover"]=!1),n.isInStateTrue()?void 0:(clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide())},n.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var o=this,r=this.tip(),s=this.getUID(this.type);this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,c=/\s?auto?\s?/i,u=c.test(a);u&&(a=a.replace(c,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=r[0].offsetWidth,d=r[0].offsetHeight;if(u){var p=a,f=this.getPosition(this.$viewport);a="bottom"==a&&l.bottom+d>f.bottom?"top":"top"==a&&l.top-d<f.top?"bottom":"right"==a&&l.right+h>f.width?"left":"left"==a&&l.left-h<f.left?"right":a,r.removeClass(p).addClass(a)}var v=this.getCalculatedOffset(a,l,h,d);this.applyPlacement(v,a);var m=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",m).emulateTransitionEnd(n.TRANSITION_DURATION):m()}},n.prototype.applyPlacement=function(e,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var c=i[0].offsetWidth,u=i[0].offsetHeight;"top"==n&&u!=r&&(e.top=e.top+r-u);var l=this.getViewportAdjustedDelta(n,e,c,u);l.left?e.left+=l.left:e.top+=l.top;var h=/top|bottom/.test(n),d=h?2*l.left-o+c:2*l.top-r+u,p=h?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(d,i[0][p],h)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(e){function i(){"in"!=o.hoverState&&r.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),e&&e()}var o=this,r=t(this.$tip),s=t.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){
return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],i="BODY"==n.tagName,o=n.getBoundingClientRect();null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var r=i?{top:0,left:0}:e.offset(),s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},o,s,a,r)},n.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,c=e.top+r-s.scroll+i;a<s.top?o.top=s.top-a:c>s.top+s.height&&(o.top=s.top+s.height-c)}else{var u=e.left-r,l=e.left+r+n;u<s.left?o.left=s.left-u:l>s.right&&(o.left=s.left+s.width-l)}return o},n.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},n.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},n.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this;e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),e?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var i=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.popover"),r="object"==typeof e&&e;!o&&/destroy|hide/.test(e)||(o||i.data("bs.popover",o=new n(this,r)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.5",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),+function(t){"use strict";function e(n,i){this.$body=t(document.body),this.$scrollElement=t(t(n).is(document.body)?window:n),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})}e.VERSION="3.3.5",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,n="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(n="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),o=e.data("target")||e.attr("href"),r=/^#./.test(o)&&t(o);return r&&r.length&&r.is(":visible")&&[[r[n]().top+i,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),e>=i)return s!=(t=r[r.length-1])&&this.activate(t);if(s&&e<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)s!=r[t]&&e>=o[t]&&(void 0===o[t+1]||e<o[t+1])&&this.activate(r[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);n.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new n(this)),"string"==typeof e&&o[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.3.5",n.TRANSITION_DURATION=150,n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a"),r=t.Event("hide.bs.tab",{relatedTarget:e[0]}),s=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(r),e.trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){var a=t(i);this.activate(e.closest("li"),n),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},n.prototype.activate=function(e,i,o){function r(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var s=i.find("> .active"),a=o&&t.support.transition&&(s.length&&s.hasClass("fade")||!!i.find("> .fade").length);s.length&&a?s.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r(),s.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this};var o=function(n){n.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.affix"),r="object"==typeof e&&e;o||i.data("bs.affix",o=new n(this,r)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.5",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,n,i){var o=this.$target.scrollTop(),r=this.$element.offset(),s=this.$target.height();if(null!=n&&"top"==this.affixed)return n>o?"top":!1;if("bottom"==this.affixed)return null!=n?o+this.unpin<=r.top?!1:"bottom":t-i>=o+s?!1:"bottom";var a=null==this.affixed,c=a?o:r.top,u=a?s:e;return null!=n&&n>=o?"top":null!=i&&c+u>=t-i?"bottom":!1},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,o=i.top,r=i.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof i&&(r=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof r&&(r=i.bottom(this.$element));var a=this.getState(s,e,o,r);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var c="affix"+(a?"-"+a:""),u=t.Event(c+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(c).trigger(c.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-e-r})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery),function(){function t(e){var n=t.modules[e];if(!n)throw new Error('failed to require "'+e+'"');return"exports"in n||"function"!=typeof n.definition||(n.client=n.component=!0,n.definition.call(this,n.exports={},n),delete n.definition),n.exports}t.loader="component",t.helper={},t.helper.semVerSort=function(t,e){for(var n=t.version.split("."),i=e.version.split("."),o=0;o<n.length;++o){var r=parseInt(n[o],10),s=parseInt(i[o],10);if(r!==s)return r>s?1:-1;var a=n[o].substr((""+r).length),c=i[o].substr((""+s).length);if(""===a&&""!==c)return 1;if(""!==a&&""===c)return-1;if(""!==a&&""!==c)return a>c?1:-1}return 0},t.latest=function(e,n){function i(t){throw new Error('failed to find latest module of "'+t+'"')}var o=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/,r=/(.*)~(.*)/;r.test(e)||i(e);for(var s=Object.keys(t.modules),a=[],c=[],u=0;u<s.length;u++){var l=s[u];if(new RegExp(e+"@").test(l)){var h=l.substr(e.length+1),d=o.exec(l);null!=d?a.push({version:h,name:l}):c.push({version:h,name:l})}}if(0===a.concat(c).length&&i(e),a.length>0){var p=a.sort(t.helper.semVerSort).pop().name;return n===!0?p:t(p)}var p=c.pop().name;return n===!0?p:t(p)},t.modules={},t.register=function(e,n){t.modules[e]={definition:n}},t.define=function(e,n){t.modules[e]={exports:n}},t.register("abpetkov~transitionize@0.0.3",function(t,e){function n(t,e){return this instanceof n?(this.element=t,this.props=e||{},void this.init()):new n(t,e)}e.exports=n,n.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},n.prototype.init=function(){var t=[];for(var e in this.props)t.push(e+" "+this.props[e]);this.element.style.transition=t.join(", "),this.isSafari()&&(this.element.style.webkitTransition=t.join(", "))}}),t.register("ftlabs~fastclick@v0.6.11",function(t,e){function n(t){"use strict";var e,i=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=t,!t||!t.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return n.prototype.onClick.apply(i,arguments)},this.onMouse=function(){return n.prototype.onMouse.apply(i,arguments)},this.onTouchStart=function(){return n.prototype.onTouchStart.apply(i,arguments)},this.onTouchMove=function(){return n.prototype.onTouchMove.apply(i,arguments)},this.onTouchEnd=function(){return n.prototype.onTouchEnd.apply(i,arguments)},this.onTouchCancel=function(){return n.prototype.onTouchCancel.apply(i,arguments)},n.notNeeded(t)||(this.deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(e=t.onclick,t.addEventListener("click",function(t){e(t)},!1),t.onclick=null))}n.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,n.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),n.prototype.deviceIsIOS4=n.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),n.prototype.deviceIsIOSWithBadTarget=n.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),n.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},n.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},n.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},n.prototype.determineEventType=function(t){"use strict";return this.deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},n.prototype.focus=function(t){"use strict";var e;this.deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},n.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},n.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},n.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],this.deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<200&&t.preventDefault(),!0},n.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},n.prototype.onTouchMove=function(t){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},n.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},n.prototype.onTouchEnd=function(t){"use strict";var e,n,i,o,r,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(r=t.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=s.tagName.toLowerCase(),"label"===i){if(e=this.findControl(s)){if(this.focus(s),this.deviceIsAndroid)return!1;s=e}}else if(this.needsFocus(s))return t.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(o=s.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},n.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},n.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},n.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},n.prototype.destroy=function(){"use strict";var t=this.layer;this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},n.notNeeded=function(t){"use strict";var e,i;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n.prototype.deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(i>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===t.style.msTouchAction},n.attach=function(t){"use strict";return new n(t)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return n}):"undefined"!=typeof e&&e.exports?(e.exports=n.attach,e.exports.FastClick=n):window.FastClick=n}),t.register("switchery",function(e,n){function i(t,e){if(!(this instanceof i))return new i(t,e);this.element=t,this.options=e||{};for(var n in s)null==this.options[n]&&(this.options[n]=s[n]);null!=this.element&&"checkbox"==this.element.type&&this.init()}var o=t("abpetkov~transitionize@0.0.3"),r=t("ftlabs~fastclick@v0.6.11");n.exports=i;var s={color:"#64bd63",secondaryColor:"#dfdfdf",jackColor:"#fff",className:"switchery",disabled:!1,disabledOpacity:.5,speed:"0.4s"};i.prototype.hide=function(){this.element.style.display="none"},i.prototype.show=function(){var t=this.create();this.insertAfter(this.element,t)},i.prototype.create=function(){return this.switcher=document.createElement("span"),this.jack=document.createElement("small"),this.switcher.appendChild(this.jack),this.switcher.className=this.options.className,this.switcher},i.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},i.prototype.isChecked=function(){return this.element.checked},i.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled},i.prototype.setPosition=function(t){var e=this.isChecked(),n=this.switcher,i=this.jack;t&&e?e=!1:t&&!e&&(e=!0),e===!0?(this.element.checked=!0,window.getComputedStyle?i.style.left=parseInt(window.getComputedStyle(n).width)-parseInt(window.getComputedStyle(i).width)+"px":i.style.left=parseInt(n.currentStyle.width)-parseInt(i.currentStyle.width)+"px",this.options.color&&this.colorize(),this.setSpeed()):(i.style.left=0,this.element.checked=!1,this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor,this.switcher.style.borderColor=this.options.secondaryColor,this.switcher.style.backgroundColor=this.options.secondaryColor!==s.secondaryColor?this.options.secondaryColor:"#fff",this.jack.style.backgroundColor=this.options.jackColor,this.setSpeed())},i.prototype.setSpeed=function(){var t={},e={left:this.options.speed.replace(/[a-z]/,"")/2+"s"};t=this.isChecked()?{border:this.options.speed,"box-shadow":this.options.speed,"background-color":3*this.options.speed.replace(/[a-z]/,"")+"s"}:{border:this.options.speed,"box-shadow":this.options.speed},o(this.switcher,t),o(this.jack,e)},i.prototype.colorize=function(){this.switcher.style.backgroundColor=this.options.color,this.switcher.style.borderColor=this.options.color,this.switcher.style.boxShadow="inset 0 0 0 16px "+this.options.color,this.jack.style.backgroundColor=this.options.jackColor},i.prototype.handleOnchange=function(t){if(document.dispatchEvent){var e=document.createEvent("HTMLEvents");e.initEvent("change",!0,!0),this.element.dispatchEvent(e)}else this.element.fireEvent("onchange")},i.prototype.handleChange=function(){var t=this,e=this.element;e.addEventListener?e.addEventListener("change",function(){t.setPosition()}):e.attachEvent("onchange",function(){t.setPosition()})},i.prototype.handleClick=function(){var t=this,e=this.switcher,n=t.element.parentNode.tagName.toLowerCase(),i="label"!==n;this.isDisabled()===!1?(r(e),e.addEventListener?e.addEventListener("click",function(){t.setPosition(i),t.handleOnchange(t.element.checked)}):e.attachEvent("onclick",function(){t.setPosition(i),t.handleOnchange(t.element.checked)})):(this.element.disabled=!0,this.switcher.style.opacity=this.options.disabledOpacity)},i.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",!0)},i.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")},i.prototype.init=function(){this.hide(),this.show(),this.setPosition(),this.markAsSwitched(),this.handleChange(),this.handleClick()}}),"object"==typeof exports?module.exports=t("switchery"):"function"==typeof define&&define.amd?define("Switchery",[],function(){return t("switchery")}):(this||window).Switchery=t("switchery")}(),!function(t,e,n){"use strict";!function i(t,e,n){function o(s,a){if(!e[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=e[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,i,t,e,n)}return e[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(i,o,r){var s=function(t){return t&&t.__esModule?t:{"default":t}};Object.defineProperty(r,"__esModule",{value:!0});var a,c,u,l,h=i("./modules/handle-dom"),d=i("./modules/utils"),p=i("./modules/handle-swal-dom"),f=i("./modules/handle-click"),v=i("./modules/handle-key"),m=s(v),g=i("./modules/default-params"),y=s(g),b=i("./modules/set-params"),w=s(b);r["default"]=u=l=function(){function i(t){var e=o;return e[t]===n?y["default"][t]:e[t]}var o=arguments[0];if(h.addClass(e.body,"stop-scrolling"),p.resetInput(),o===n)return d.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=d.extend({},y["default"]);switch(typeof o){case"string":r.title=o,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(o.title===n)return d.logStr('Missing "title" argument!'),!1;r.title=o.title;for(var s in y["default"])r[s]=i(s);r.confirmButtonText=r.showCancelButton?"Confirm":y["default"].confirmButtonText,r.confirmButtonText=i("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return d.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof o),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),g=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],b=function(t){return f.handleButton(t,r,u)},_=0;_<v.length;_++)for(var x=0;x<g.length;x++){var C=g[x];v[_][C]=b}p.getOverlay().onclick=b,a=t.onkeydown;var k=function(t){return m["default"](t,r,u)};t.onkeydown=k,t.onfocus=function(){setTimeout(function(){c!==n&&(c.focus(),c=n)},0)},l.enableButtons()},u.setDefaults=l.setDefaults=function(t){if(!t)throw new Error("userParams is required");if("object"!=typeof t)throw new Error("userParams has to be a object");d.extend(y["default"],t)},u.close=l.close=function(){var i=p.getModal();h.fadeOut(p.getOverlay(),5),h.fadeOut(i,5),h.removeClass(i,"showSweetAlert"),h.addClass(i,"hideSweetAlert"),h.removeClass(i,"visible");var o=i.querySelector(".sa-icon.sa-success");h.removeClass(o,"animate"),h.removeClass(o.querySelector(".sa-tip"),"animateSuccessTip"),h.removeClass(o.querySelector(".sa-long"),"animateSuccessLong");var r=i.querySelector(".sa-icon.sa-error");h.removeClass(r,"animateErrorIcon"),h.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=i.querySelector(".sa-icon.sa-warning");return h.removeClass(s,"pulseWarning"),h.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),h.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var t=i.getAttribute("data-custom-class");h.removeClass(i,t)},300),h.removeClass(e.body,"stop-scrolling"),t.onkeydown=a,t.previousActiveElement&&t.previousActiveElement.focus(),c=n,clearTimeout(i.timeout),!0},u.showInputError=l.showInputError=function(t){var e=p.getModal(),n=e.querySelector(".sa-input-error");h.addClass(n,"show");var i=e.querySelector(".sa-error-container");h.addClass(i,"show"),i.querySelector("p").innerHTML=t,setTimeout(function(){u.enableButtons()},1),e.querySelector("input").focus()},u.resetInputError=l.resetInputError=function(t){if(t&&13===t.keyCode)return!1;var e=p.getModal(),n=e.querySelector(".sa-input-error");h.removeClass(n,"show");var i=e.querySelector(".sa-error-container");h.removeClass(i,"show")},u.disableButtons=l.disableButtons=function(){var t=p.getModal(),e=t.querySelector("button.confirm"),n=t.querySelector("button.cancel");e.disabled=!0,n.disabled=!0},u.enableButtons=l.enableButtons=function(){var t=p.getModal(),e=t.querySelector("button.confirm"),n=t.querySelector("button.cancel");e.disabled=!1,n.disabled=!1},"undefined"!=typeof t?t.sweetAlert=t.swal=u:d.logStr("SweetAlert is a frontend module!"),o.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0});var i={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=i,e.exports=n["default"]},{}],3:[function(e,n,i){Object.defineProperty(i,"__esModule",{value:!0});var o=e("./utils"),r=(e("./handle-swal-dom"),e("./handle-dom")),s=function(e,n,i){function s(t){f&&n.confirmButtonColor&&(p.style.backgroundColor=t)}var u,l,h,d=e||t.event,p=d.target||d.srcElement,f=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),m=r.hasClass(i,"visible"),g=n.doneFunction&&"true"===i.getAttribute("data-has-done-function");switch(f&&n.confirmButtonColor&&(u=n.confirmButtonColor,l=o.colorLuminance(u,-.04),h=o.colorLuminance(u,-.14)),d.type){case"mouseover":s(l);break;case"mouseout":s(u);break;case"mousedown":s(h);break;case"mouseup":s(l);break;case"focus":var y=i.querySelector("button.confirm"),b=i.querySelector("button.cancel");f?b.style.boxShadow="none":y.style.boxShadow="none";break;case"click":var w=i===p,_=r.isDescendant(i,p);if(!w&&!_&&m&&!n.allowOutsideClick)break;f&&g&&m?a(i,n):g&&m||v?c(i,n):r.isDescendant(i,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},a=function(t,e){var n=!0;r.hasClass(t,"show-input")&&(n=t.querySelector("input").value,n||(n="")),e.doneFunction(n),e.closeOnConfirm&&sweetAlert.close(),e.showLoaderOnConfirm&&sweetAlert.disableButtons()},c=function(t,e){var n=String(e.doneFunction).replace(/\s/g,""),i="function("===n.substring(0,9)&&")"!==n.substring(9,10);i&&e.doneFunction(!1),e.closeOnCancel&&sweetAlert.close()};i["default"]={handleButton:s,handleConfirm:a,handleCancel:c},n.exports=i["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,i,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(t,e){return new RegExp(" "+e+" ").test(" "+t.className+" ")},s=function(t,e){r(t,e)||(t.className+=" "+e)},a=function(t,e){var n=" "+t.className.replace(/[\t\r\n]/g," ")+" ";if(r(t,e)){for(;n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},c=function(t){var n=e.createElement("div");return n.appendChild(e.createTextNode(t)),n.innerHTML},u=function(t){t.style.opacity="",t.style.display="block"},l=function(t){if(t&&!t.length)return u(t);for(var e=0;e<t.length;++e)u(t[e])},h=function(t){t.style.opacity="",t.style.display="none"},d=function(t){if(t&&!t.length)return h(t);for(var e=0;e<t.length;++e)h(t[e])},p=function(t,e){for(var n=e.parentNode;null!==n;){if(n===t)return!0;n=n.parentNode}return!1},f=function(t){t.style.left="-9999px",t.style.display="block";var e,n=t.clientHeight;return e="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(t).getPropertyValue("padding-top"),10):parseInt(t.currentStyle.padding),t.style.left="",t.style.display="none","-"+parseInt((n+e)/2)+"px"},v=function(t,e){if(+t.style.opacity<1){e=e||16,t.style.opacity=0,t.style.display="block";var n=+new Date,i=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){t.style.opacity=+t.style.opacity+(new Date-n)/100,n=+new Date,+t.style.opacity<1&&setTimeout(i,e)});i()}t.style.display="block"},m=function(t,e){e=e||16,t.style.opacity=1;
var n=+new Date,i=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){t.style.opacity=+t.style.opacity-(new Date-n)/100,n=+new Date,+t.style.opacity>0?setTimeout(i,e):t.style.display="none"});i()},g=function(n){if("function"==typeof MouseEvent){var i=new MouseEvent("click",{view:t,bubbles:!1,cancelable:!0});n.dispatchEvent(i)}else if(e.createEvent){var o=e.createEvent("MouseEvents");o.initEvent("click",!1,!1),n.dispatchEvent(o)}else e.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},y=function(e){"function"==typeof e.stopPropagation?(e.stopPropagation(),e.preventDefault()):t.event&&t.event.hasOwnProperty("cancelBubble")&&(t.event.cancelBubble=!0)};o.hasClass=r,o.addClass=s,o.removeClass=a,o.escapeHtml=c,o._show=u,o.show=l,o._hide=h,o.hide=d,o.isDescendant=p,o.getTopMargin=f,o.fadeIn=v,o.fadeOut=m,o.fireClick=g,o.stopEventPropagation=y},{}],5:[function(e,i,o){Object.defineProperty(o,"__esModule",{value:!0});var r=e("./handle-dom"),s=e("./handle-swal-dom"),a=function(e,i,o){var a=e||t.event,c=a.keyCode||a.which,u=o.querySelector("button.confirm"),l=o.querySelector("button.cancel"),h=o.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(c)){for(var d=a.target||a.srcElement,p=-1,f=0;f<h.length;f++)if(d===h[f]){p=f;break}9===c?(d=-1===p?u:p===h.length-1?h[0]:h[p+1],r.stopEventPropagation(a),d.focus(),i.confirmButtonColor&&s.setFocusStyle(d,i.confirmButtonColor)):13===c?("INPUT"===d.tagName&&(d=u,u.focus()),d=-1===p?u:n):27===c&&i.allowEscapeKey===!0?(d=l,r.fireClick(d,a)):d=n}};o["default"]=a,i.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,i,o){var r=function(t){return t&&t.__esModule?t:{"default":t}};Object.defineProperty(o,"__esModule",{value:!0});var s=n("./utils"),a=n("./handle-dom"),c=n("./default-params"),u=r(c),l=n("./injected-html"),h=r(l),d=".sweet-alert",p=".sweet-overlay",f=function(){var t=e.createElement("div");for(t.innerHTML=h["default"];t.firstChild;)e.body.appendChild(t.firstChild)},v=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=e.querySelector(d);return t||(f(),t=v()),t}),m=function(){var t=v();return t?t.querySelector("input"):void 0},g=function(){return e.querySelector(p)},y=function(t,e){var n=s.hexToRgb(e);t.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},b=function(n){var i=v();a.fadeIn(g(),10),a.show(i),a.addClass(i,"showSweetAlert"),a.removeClass(i,"hideSweetAlert"),t.previousActiveElement=e.activeElement;var o=i.querySelector("button.confirm");o.focus(),setTimeout(function(){a.addClass(i,"visible")},500);var r=i.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;i.timeout=setTimeout(function(){var t=(s||null)&&"true"===i.getAttribute("data-has-done-function");t?s(null):sweetAlert.close()},r)}},w=function(){var t=v(),e=m();a.removeClass(t,"show-input"),e.value=u["default"].inputValue,e.setAttribute("type",u["default"].inputType),e.setAttribute("placeholder",u["default"].inputPlaceholder),_()},_=function(t){if(t&&13===t.keyCode)return!1;var e=v(),n=e.querySelector(".sa-input-error");a.removeClass(n,"show");var i=e.querySelector(".sa-error-container");a.removeClass(i,"show")},x=function(){var t=v();t.style.marginTop=a.getTopMargin(v())};o.sweetAlertInitialize=f,o.getModal=v,o.getOverlay=g,o.getInput=m,o.setFocusStyle=y,o.openModal=b,o.resetInput=w,o.resetInputError=_,o.fixVerticalPosition=x},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0});var i='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=i,e.exports=n["default"]},{}],8:[function(t,e,i){Object.defineProperty(i,"__esModule",{value:!0});var o=t("./utils"),r=t("./handle-swal-dom"),s=t("./handle-dom"),a=["error","warning","info","success","input","prompt"],c=function(t){var e=r.getModal(),i=e.querySelector("h2"),c=e.querySelector("p"),u=e.querySelector("button.cancel"),l=e.querySelector("button.confirm");if(i.innerHTML=t.html?t.title:s.escapeHtml(t.title).split("\n").join("<br>"),c.innerHTML=t.html?t.text:s.escapeHtml(t.text||"").split("\n").join("<br>"),t.text&&s.show(c),t.customClass)s.addClass(e,t.customClass),e.setAttribute("data-custom-class",t.customClass);else{var h=e.getAttribute("data-custom-class");s.removeClass(e,h),e.setAttribute("data-custom-class","")}if(s.hide(e.querySelectorAll(".sa-icon")),t.type&&!o.isIE8()){var d=function(){for(var i=!1,o=0;o<a.length;o++)if(t.type===a[o]){i=!0;break}if(!i)return logStr("Unknown alert type: "+t.type),{v:!1};var c=["success","error","warning","info"],u=n;-1!==c.indexOf(t.type)&&(u=e.querySelector(".sa-icon.sa-"+t.type),s.show(u));var l=r.getInput();switch(t.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":l.setAttribute("type",t.inputType),l.value=t.inputValue,l.setAttribute("placeholder",t.inputPlaceholder),s.addClass(e,"show-input"),setTimeout(function(){l.focus(),l.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof d)return d.v}if(t.imageUrl){var p=e.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+t.imageUrl+")",s.show(p);var f=80,v=80;if(t.imageSize){var m=t.imageSize.toString().split("x"),g=m[0],y=m[1];g&&y?(f=g,v=y):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+t.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+f+"px; height:"+v+"px")}e.setAttribute("data-has-cancel-button",t.showCancelButton),t.showCancelButton?u.style.display="inline-block":s.hide(u),e.setAttribute("data-has-confirm-button",t.showConfirmButton),t.showConfirmButton?l.style.display="inline-block":s.hide(l),t.cancelButtonText&&(u.innerHTML=s.escapeHtml(t.cancelButtonText)),t.confirmButtonText&&(l.innerHTML=s.escapeHtml(t.confirmButtonText)),t.confirmButtonColor&&(l.style.backgroundColor=t.confirmButtonColor,l.style.borderLeftColor=t.confirmLoadingButtonColor,l.style.borderRightColor=t.confirmLoadingButtonColor,r.setFocusStyle(l,t.confirmButtonColor)),e.setAttribute("data-allow-outside-click",t.allowOutsideClick);var b=!!t.doneFunction;e.setAttribute("data-has-done-function",b),t.animation?"string"==typeof t.animation?e.setAttribute("data-animation",t.animation):e.setAttribute("data-animation","pop"):e.setAttribute("data-animation","none"),e.setAttribute("data-timer",t.timer)};i["default"]=c,e.exports=i["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(e,n,i){Object.defineProperty(i,"__esModule",{value:!0});var o=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},r=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?parseInt(e[1],16)+", "+parseInt(e[2],16)+", "+parseInt(e[3],16):null},s=function(){return t.attachEvent&&!t.addEventListener},a=function(e){t.console&&t.console.log("SweetAlert: "+e)},c=function(t,e){t=String(t).replace(/[^0-9a-f]/gi,""),t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),e=e||0;var n,i,o="#";for(i=0;3>i;i++)n=parseInt(t.substr(2*i,2),16),n=Math.round(Math.min(Math.max(0,n+n*e),255)).toString(16),o+=("00"+n).substr(n.length);return o};i.extend=o,i.hexToRgb=r,i.isIE8=s,i.logStr=a,i.colorLuminance=c},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document),function(){function t(){var t=!1;return function(e){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function e(){var e=document.getElementById("Menu"),n=e?e.querySelector("a.Menu-trigger"):null,i=document.querySelector("a.Menu-trigger-out"),o=t()?"touchstart":"click",r=function(){classie.remove(e,"Menu--open"),classie.add(e,"Menu--close")},s=function(t){r(),a.removeEventListener(o,s)},a=document.createElement("div");a.className="Menu__overlay",e&&e.appendChild(a),n&&n.addEventListener(o,function(t){t.stopPropagation(),t.preventDefault(),classie.has(e,"Menu--open")?r():(classie.remove(e,"Menu--close"),classie.add(e,"Menu--open"),a.addEventListener(o,s))}),i&&i.addEventListener(o,function(t){t.stopPropagation(),t.preventDefault(),classie.remove(e,"Menu--close"),classie.add(e,"Menu--open"),a.addEventListener(o,s)})}e()}(),!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pusher=e():t.Pusher=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(1);t.exports=i["default"]},function(t,e,n){"use strict";function i(t){if(null===t||void 0===t)throw"You must pass your app key when you instantiate Pusher."}var o=n(2),r=n(9),s=n(23),a=n(38),c=n(39),u=n(40),l=n(12),h=n(5),d=n(62),p=n(8),f=n(42),v=function(){function t(e,n){var l=this;i(e),n=n||{},this.key=e,this.config=r.extend(d.getGlobalConfig(),n.cluster?d.getClusterConfig(n.cluster):{},n),this.channels=f["default"].createChannels(),this.global_emitter=new s["default"],this.sessionID=Math.floor(1e9*Math.random()),this.timeline=new a["default"](this.key,this.sessionID,{cluster:this.config.cluster,features:t.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:c["default"].INFO,version:h["default"].VERSION}),this.config.disableStats||(this.timelineSender=f["default"].createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+o["default"].TimelineTransport.name}));var v=function(t){var e=r.extend({},l.config,t);return u.build(o["default"].getDefaultStrategy(e),e)};this.connection=f["default"].createConnectionManager(this.key,r.extend({getStrategy:v,timeline:this.timeline,activityTimeout:this.config.activity_timeout,pongTimeout:this.config.pong_timeout,unavailableTimeout:this.config.unavailable_timeout},this.config,{encrypted:this.isEncrypted()})),this.connection.bind("connected",function(){l.subscribeAll(),l.timelineSender&&l.timelineSender.send(l.connection.isEncrypted())}),this.connection.bind("message",function(t){var e=0===t.event.indexOf("pusher_internal:");if(t.channel){var n=l.channel(t.channel);n&&n.handleEvent(t.event,t.data)}e||l.global_emitter.emit(t.event,t.data)}),this.connection.bind("disconnected",function(){l.channels.disconnect()}),this.connection.bind("error",function(t){p["default"].warn("Error",t)}),t.instances.push(this),this.timeline.info({instances:t.instances.length}),t.isReady&&this.connect()}return t.ready=function(){t.isReady=!0;for(var e=0,n=t.instances.length;n>e;e++)t.instances[e].connect()},t.log=function(e){var n=Function("return this")();t.logToConsole&&n.console&&n.console.log&&n.console.log(e)},t.getClientFeatures=function(){return r.keys(r.filterObject({ws:o["default"].Transports.ws},function(t){return t.isSupported({})}))},t.prototype.channel=function(t){return this.channels.find(t)},t.prototype.allChannels=function(){return this.channels.all()},t.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var t=this.connection.isEncrypted(),e=this.timelineSender;this.timelineSenderTimer=new l.PeriodicTimer(6e4,function(){e.send(t)})}},t.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},t.prototype.bind=function(t,e){return this.global_emitter.bind(t,e),this},t.prototype.bind_all=function(t){return this.global_emitter.bind_all(t),this},t.prototype.subscribeAll=function(){var t;for(t in this.channels.channels)this.channels.channels.hasOwnProperty(t)&&this.subscribe(t)},t.prototype.subscribe=function(t){var e=this.channels.add(t,this);return"connected"===this.connection.state&&e.subscribe(),e},t.prototype.unsubscribe=function(t){var e=this.channels.remove(t);e&&"connected"===this.connection.state&&e.unsubscribe()},t.prototype.send_event=function(t,e,n){return this.connection.send_event(t,e,n)},t.prototype.isEncrypted=function(){return"https:"===o["default"].getProtocol()?!0:Boolean(this.config.encrypted)},t.instances=[],t.isReady=!1,t.logToConsole=!1,t.Runtime=o["default"],t.ScriptReceivers=o["default"].ScriptReceivers,t.DependenciesReceivers=o["default"].DependenciesReceivers,t.auth_callbacks=o["default"].auth_callbacks,t}();e.__esModule=!0,e["default"]=v,o["default"].setup(v)},function(t,e,n){"use strict";var i=n(3),o=n(7),r=n(14),s=n(15),a=n(16),c=n(4),u=n(17),l=n(18),h=n(25),d=n(26),p=n(27),f=n(28),v={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:c.ScriptReceivers,DependenciesReceivers:i.DependenciesReceivers,getDefaultStrategy:d["default"],Transports:l["default"],transportConnectionInitializer:p["default"],HTTPFactory:f["default"],TimelineTransport:u["default"],getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(t){var e=this;window.Pusher=t;var n=function(){e.onDocumentBody(t.ready)};window.JSON?n():i.Dependencies.load("json2",{},n)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getGlobal:function(){return window},getAuthorizers:function(){return{ajax:o["default"],jsonp:r["default"]}},onDocumentBody:function(t){var e=this;document.body?t():setTimeout(function(){e.onDocumentBody(t)},0)},createJSONPRequest:function(t,e){return new a["default"](t,e)},createScriptRequest:function(t){return new s["default"](t)},getLocalStorage:function(){try{return window.localStorage}catch(t){return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var t=this.getXHRAPI();return new t},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return h.Network},createWebSocket:function(t){var e=this.getWebSocketAPI();return new e(t)},createSocketRequest:function(t,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(t,e);if(this.isXDRSupported(0===e.indexOf("https:")))return this.HTTPFactory.createXDR(t,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var t=this.getXHRAPI();return Boolean(t)&&void 0!==(new t).withCredentials},isXDRSupported:function(t){var e=t?"https:":"http:",n=this.getProtocol();return Boolean(window.XDomainRequest)&&n===e},addUnloadListener:function(t){void 0!==window.addEventListener?window.addEventListener("unload",t,!1):void 0!==window.attachEvent&&window.attachEvent("onunload",t)},removeUnloadListener:function(t){void 0!==window.addEventListener?window.removeEventListener("unload",t,!1):void 0!==window.detachEvent&&window.detachEvent("onunload",t)}};e.__esModule=!0,e["default"]=v},function(t,e,n){"use strict";var i=n(4),o=n(5),r=n(6);e.DependenciesReceivers=new i.ScriptReceiverFactory("_pusher_dependencies","Pusher.DependenciesReceivers"),e.Dependencies=new r["default"]({cdn_http:o["default"].cdn_http,cdn_https:o["default"].cdn_https,version:o["default"].VERSION,suffix:o["default"].dependency_suffix,receivers:e.DependenciesReceivers})},function(t,e){"use strict";var n=function(){function t(t,e){this.lastId=0,this.prefix=t,this.name=e}return t.prototype.create=function(t){this.lastId++;var e=this.lastId,n=this.prefix+e,i=this.name+"["+e+"]",o=!1,r=function(){o||(t.apply(null,arguments),o=!0)};return this[e]=r,{number:e,id:n,name:i,callback:r}},t.prototype.remove=function(t){delete this[t.number]},t}();e.ScriptReceiverFactory=n,e.ScriptReceivers=new n("_pusher_script_","Pusher.ScriptReceivers")},function(t,e){"use strict";var n={VERSION:"3.1.0",PROTOCOL:7,host:"ws.pusherapp.com",ws_port:80,wss_port:443,sockjs_host:"sockjs.pusher.com",sockjs_http_port:80,sockjs_https_port:443,sockjs_path:"/pusher",stats_host:"stats.pusher.com",channel_auth_endpoint:"/pusher/auth",channel_auth_transport:"ajax",activity_timeout:12e4,pong_timeout:3e4,unavailable_timeout:1e4,cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:".min"};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(4),o=n(2),r=function(){function t(t){this.options=t,this.receivers=t.receivers||i.ScriptReceivers,this.loading={}}return t.prototype.load=function(t,e,n){var i=this;if(i.loading[t]&&i.loading[t].length>0)i.loading[t].push(n);else{i.loading[t]=[n];var r=o["default"].createScriptRequest(i.getPath(t,e)),s=i.receivers.create(function(e){if(i.receivers.remove(s),i.loading[t]){var n=i.loading[t];delete i.loading[t];for(var o=function(t){t||r.cleanup()},a=0;a<n.length;a++)n[a](e,o)}});r.send(s)}},t.prototype.getRoot=function(t){var e,n=o["default"].getDocument().location.protocol;return e=t&&t.encrypted||"https:"===n?this.options.cdn_https:this.options.cdn_http,e.replace(/\/*$/,"")+"/"+this.options.version},t.prototype.getPath=function(t,e){return this.getRoot(e)+"/"+t+this.options.suffix+".js"},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(8),o=n(2),r=function(t,e,n){var r,s=this;r=o["default"].createXHR(),r.open("POST",s.options.authEndpoint,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var a in this.authOptions.headers)r.setRequestHeader(a,this.authOptions.headers[a]);return r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var t,e=!1;try{t=JSON.parse(r.responseText),e=!0}catch(o){n(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+r.responseText)}e&&n(!1,t)}else i["default"].warn("Couldn't get auth info from your webapp",r.status),n(!0,r.status)},r.send(this.composeQuery(e)),r};e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(9),o=n(1),r={debug:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];o["default"].log&&o["default"].log(i.stringify.apply(this,arguments))},warn:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var n=i.stringify.apply(this,arguments),r=Function("return this")();r.console&&(r.console.warn?r.console.warn(n):r.console.log&&r.console.log(n)),o["default"].log&&o["default"].log(n)}};e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var o=0;o<e.length;o++){var r=e[o];for(var s in r)r[s]&&r[s].constructor&&r[s].constructor===Object?t[s]=i(t[s]||{},r[s]):t[s]=r[s]}return t}function o(){for(var t=["Pusher"],e=0;e<arguments.length;e++)"string"==typeof arguments[e]?t.push(arguments[e]):t.push(JSON.stringify(arguments[e]));return t.join(" : ")}function r(t,e){var n=Array.prototype.indexOf;if(null===t)return-1;if(n&&t.indexOf===n)return t.indexOf(e);for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1}function s(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)}function a(t){var e=[];return s(t,function(t,n){e.push(n)}),e}function c(t){var e=[];return s(t,function(t){e.push(t)}),e}function u(t,e,n){for(var i=0;i<t.length;i++)e.call(n||x,t[i],i,t)}function l(t,e){for(var n=[],i=0;i<t.length;i++)n.push(e(t[i],i,t,n));return n}function h(t,e){var n={};return s(t,function(t,i){n[i]=e(t)}),n}function d(t,e){e=e||function(t){return!!t};for(var n=[],i=0;i<t.length;i++)e(t[i],i,t,n)&&n.push(t[i]);return n}function p(t,e){var n={};return s(t,function(i,o){(e&&e(i,o,t,n)||Boolean(i))&&(n[o]=i)}),n}function f(t){var e=[];return s(t,function(t,n){e.push([n,t])}),e}function v(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1}function m(t,e){for(var n=0;n<t.length;n++)if(!e(t[n],n,t))return!1;return!0}function g(t){return h(t,function(t){return"object"==typeof t&&(t=JSON.stringify(t)),encodeURIComponent(w["default"](t.toString()))})}function y(t){var e=p(t,function(t){return void 0!==t}),n=l(f(g(e)),_["default"].method("join","=")).join("&");return n}function b(t){var e=[],n=JSON.stringify(t,function(t,n){if("object"==typeof n&&null!==n){if(-1!==e.indexOf(n))return;e.push(n)}return n});return e=null,n}var w=n(10),_=n(11),x=Function("return this")();e.extend=i,e.stringify=o,e.arrayIndexOf=r,e.objectApply=s,e.keys=a,e.values=c,e.apply=u,e.map=l,e.mapObject=h,e.filter=d,e.filterObject=p,e.flatten=f,e.any=v,e.all=m,e.encodeParamsObject=g,e.buildQueryString=y,e.safeJSONStringify=b},function(t,e){"use strict";function n(t){return d(l(t))}var i=Function("return this")();e.__esModule=!0,e["default"]=n;for(var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={},a=0,c=r.length;c>a;a++)s[r.charAt(a)]=a;var u=function(t){var e=t.charCodeAt(0);return 128>e?t:2048>e?o(192|e>>>6)+o(128|63&e):o(224|e>>>12&15)+o(128|e>>>6&63)+o(128|63&e)},l=function(t){return t.replace(/[^\x00-\x7F]/g,u)},h=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),i=[r.charAt(n>>>18),r.charAt(n>>>12&63),e>=2?"=":r.charAt(n>>>6&63),e>=1?"=":r.charAt(63&n)];return i.join("")},d=i.btoa||function(t){return t.replace(/[\s\S]{1,3}/g,h)}},function(t,e,n){"use strict";var i=n(12),o={getGlobal:function(){return Function("return this")()},now:function(){return Date.now?Date.now():(new Date).valueOf()},defer:function(t){return new i.OneOffTimer(0,t)},method:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Array.prototype.slice.call(arguments,1);return function(e){return e[t].apply(e,i.concat(arguments))}}};e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";function i(t){a.clearTimeout(t)}function o(t){a.clearInterval(t)}var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},s=n(13),a=Function("return this")(),c=function(t){function e(e,n){t.call(this,setTimeout,i,e,function(t){return n(),null})}return r(e,t),e}(s["default"]);e.OneOffTimer=c;var u=function(t){function e(e,n){t.call(this,setInterval,o,e,function(t){return n(),t})}return r(e,t),e}(s["default"]);e.PeriodicTimer=u},function(t,e){"use strict";var n=function(){function t(t,e,n,i){var o=this;this.clear=e,this.timer=t(function(){o.timer&&(o.timer=i(o.timer))},n)}return t.prototype.isRunning=function(){return null!==this.timer},t.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(8),o=function(t,e,n){void 0!==this.authOptions.headers&&i["default"].warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var o=t.nextAuthCallbackID.toString();t.nextAuthCallbackID++;var r=t.getDocument(),s=r.createElement("script");t.auth_callbacks[o]=function(t){n(!1,t)};var a="Pusher.auth_callbacks['"+o+"']";s.src=this.options.authEndpoint+"?callback="+encodeURIComponent(a)+"&"+this.composeQuery(e);var c=r.getElementsByTagName("head")[0]||r.documentElement;c.insertBefore(s,c.firstChild)};e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=function(){function t(t){this.src=t}return t.prototype.send=function(t){var e=this,n="Error loading "+e.src;e.script=document.createElement("script"),e.script.id=t.id,e.script.src=e.src,e.script.type="text/javascript",e.script.charset="UTF-8",e.script.addEventListener?(e.script.onerror=function(){t.callback(n)},e.script.onload=function(){t.callback(null)}):e.script.onreadystatechange=function(){("loaded"===e.script.readyState||"complete"===e.script.readyState)&&t.callback(null)},void 0===e.script.async&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(e.errorScript=document.createElement("script"),e.errorScript.id=t.id+"_error",e.errorScript.text=t.name+"('"+n+"');",e.script.async=e.errorScript.async=!1):e.script.async=!0;var i=document.getElementsByTagName("head")[0];i.insertBefore(e.script,i.firstChild),e.errorScript&&i.insertBefore(e.errorScript,e.script.nextSibling)},t.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(9),o=n(2),r=function(){function t(t,e){this.url=t,this.data=e}return t.prototype.send=function(t){if(!this.request){var e=i.buildQueryString(this.data),n=this.url+"/"+t.number+"?"+e;this.request=o["default"].createScriptRequest(n),this.request.send(t)}},t.prototype.cleanup=function(){this.request&&this.request.cleanup()},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(2),o=n(4),r=function(t,e){return function(n,r){var s="http"+(e?"s":"")+"://",a=s+(t.host||t.options.host)+t.options.path,c=i["default"].createJSONPRequest(a,n),u=i["default"].ScriptReceivers.create(function(e,n){o.ScriptReceivers.remove(u),c.cleanup(),n&&n.host&&(t.host=n.host),r&&r(e,n)});c.send(u)}},s={name:"jsonp",getAgent:r};e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";var i=n(19),o=n(21),r=n(20),s=n(2),a=n(3),c=n(9),u=new o["default"]({file:"sockjs",urls:r.sockjs,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return void 0!==window.SockJS},getSocket:function(t,e){return new window.SockJS(t,null,{js_path:a.Dependencies.getPath("sockjs",{encrypted:e.encrypted}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(t,e){t.send(JSON.stringify({path:e}))}}),l={isSupported:function(t){var e=s["default"].isXDRSupported(t.encrypted);return e}},h=new o["default"](c.extend({},i.streamingConfiguration,l)),d=new o["default"](c.extend({},i.pollingConfiguration,l));i["default"].xdr_streaming=h,i["default"].xdr_polling=d,i["default"].sockjs=u,e.__esModule=!0,e["default"]=i["default"]},function(t,e,n){"use strict";var i=n(20),o=n(21),r=n(9),s=n(2),a=new o["default"]({urls:i.ws,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(s["default"].getWebSocketAPI())},isSupported:function(){return Boolean(s["default"].getWebSocketAPI())},getSocket:function(t){return s["default"].createWebSocket(t)}}),c={urls:i.http,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}};e.streamingConfiguration=r.extend({getSocket:function(t){return s["default"].HTTPFactory.createStreamingSocket(t)}},c),e.pollingConfiguration=r.extend({getSocket:function(t){return s["default"].HTTPFactory.createPollingSocket(t)}},c);var u={isSupported:function(){return s["default"].isXHRSupported()}},l=new o["default"](r.extend({},e.streamingConfiguration,u)),h=new o["default"](r.extend({},e.pollingConfiguration,u)),d={ws:a,xhr_streaming:l,xhr_polling:h};e.__esModule=!0,e["default"]=d},function(t,e,n){"use strict";function i(t,e,n){var i=t+(e.encrypted?"s":""),o=e.encrypted?e.hostEncrypted:e.hostUnencrypted;return i+"://"+o+n}function o(t,e){var n="/app/"+t,i="?protocol="+r["default"].PROTOCOL+"&client=js&version="+r["default"].VERSION+(e?"&"+e:"");return n+i}var r=n(5);e.ws={getInitial:function(t,e){return i("ws",e,o(t,"flash=false"))}},e.http={getInitial:function(t,e){var n=(e.httpPath||"/pusher")+o(t);return i("http",e,n)}},e.sockjs={getInitial:function(t,e){return i("http",e,e.httpPath||"/pusher")},getPath:function(t,e){return o(t)}}},function(t,e,n){"use strict";var i=n(22),o=function(){function t(t){this.hooks=t}return t.prototype.isSupported=function(t){return this.hooks.isSupported(t)},t.prototype.createConnection=function(t,e,n,o){return new i["default"](this.hooks,t,e,n,o)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(11),r=n(9),s=n(23),a=n(8),c=n(2),u=function(t){function e(e,n,i,o,r){t.call(this),this.initialize=c["default"].transportConnectionInitializer,this.hooks=e,this.name=n,this.priority=i,this.key=o,this.options=r,this.state="new",this.timeline=r.timeline,this.activityTimeout=r.activityTimeout,this.id=this.timeline.generateUniqueID()}return i(e,t),e.prototype.handlesActivityChecks=function(){
return Boolean(this.hooks.handlesActivityChecks)},e.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},e.prototype.connect=function(){var t=this;if(this.socket||"initialized"!==this.state)return!1;var e=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(e,this.options)}catch(n){return o["default"].defer(function(){t.onError(n),t.changeState("closed")}),!1}return this.bindListeners(),a["default"].debug("Connecting",{transport:this.name,url:e}),this.changeState("connecting"),!0},e.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},e.prototype.send=function(t){var e=this;return"open"===this.state?(o["default"].defer(function(){e.socket&&e.socket.send(t)}),!0):!1},e.prototype.ping=function(){"open"===this.state&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(t){this.emit("error",{type:"WebSocketError",error:t}),this.timeline.error(this.buildTimelineMessage({error:t.toString()}))},e.prototype.onClose=function(t){t?this.changeState("closed",{code:t.code,reason:t.reason,wasClean:t.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(t){this.emit("message",t)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var t=this;this.socket.onopen=function(){t.onOpen()},this.socket.onerror=function(e){t.onError(e)},this.socket.onclose=function(e){t.onClose(e)},this.socket.onmessage=function(e){t.onMessage(e)},this.supportsPing()&&(this.socket.onactivity=function(){t.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(t,e){this.state=t,this.timeline.info(this.buildTimelineMessage({state:t,params:e})),this.emit(t,e)},e.prototype.buildTimelineMessage=function(t){return r.extend({cid:this.id},t)},e}(s["default"]);e.__esModule=!0,e["default"]=u},function(t,e,n){"use strict";var i=n(24),o=Function("return this")(),r=function(){function t(t){this.callbacks=new i["default"],this.global_callbacks=[],this.failThrough=t}return t.prototype.bind=function(t,e,n){return this.callbacks.add(t,e,n),this},t.prototype.bind_all=function(t){return this.global_callbacks.push(t),this},t.prototype.unbind=function(t,e,n){return this.callbacks.remove(t,e,n),this},t.prototype.unbind_all=function(t,e){return this.callbacks.remove(t,e),this},t.prototype.emit=function(t,e){var n;for(n=0;n<this.global_callbacks.length;n++)this.global_callbacks[n](t,e);var i=this.callbacks.get(t);if(i&&i.length>0)for(n=0;n<i.length;n++)i[n].fn.call(i[n].context||o,e);else this.failThrough&&this.failThrough(t,e);return this},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function i(t){return"_"+t}var o=n(9),r=function(){function t(){this._callbacks={}}return t.prototype.get=function(t){return this._callbacks[i(t)]},t.prototype.add=function(t,e,n){var o=i(t);this._callbacks[o]=this._callbacks[o]||[],this._callbacks[o].push({fn:e,context:n})},t.prototype.remove=function(t,e,n){if(!t&&!e&&!n)return void(this._callbacks={});var r=t?[i(t)]:o.keys(this._callbacks);e||n?this.removeCallback(r,e,n):this.removeAllCallbacks(r)},t.prototype.removeCallback=function(t,e,n){o.apply(t,function(t){this._callbacks[t]=o.filter(this._callbacks[t]||[],function(t){return e&&e!==t.fn||n&&n!==t.context}),0===this._callbacks[t].length&&delete this._callbacks[t]},this)},t.prototype.removeAllCallbacks=function(t){o.apply(t,function(t){delete this._callbacks[t]},this)},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=function(t){function e(){t.call(this);var e=this;void 0!==window.addEventListener&&(window.addEventListener("online",function(){e.emit("online")},!1),window.addEventListener("offline",function(){e.emit("offline")},!1))}return i(e,t),e.prototype.isOnline=function(){return void 0===window.navigator.onLine?!0:window.navigator.onLine},e}(o["default"]);e.NetInfo=r,e.Network=new r},function(t,e){"use strict";var n=function(t){var e;return e=t.encrypted?[":best_connected_ever",":ws_loop",[":delayed",2e3,[":http_fallback_loop"]]]:[":best_connected_ever",":ws_loop",[":delayed",2e3,[":wss_loop"]],[":delayed",5e3,[":http_fallback_loop"]]],[[":def","ws_options",{hostUnencrypted:t.wsHost+":"+t.wsPort,hostEncrypted:t.wsHost+":"+t.wssPort}],[":def","wss_options",[":extend",":ws_options",{encrypted:!0}]],[":def","sockjs_options",{hostUnencrypted:t.httpHost+":"+t.httpPort,hostEncrypted:t.httpHost+":"+t.httpsPort,httpPath:t.httpPath}],[":def","timeouts",{loop:!0,timeout:15e3,timeoutLimit:6e4}],[":def","ws_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def","streaming_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def_transport","ws","ws",3,":ws_options",":ws_manager"],[":def_transport","wss","ws",3,":wss_options",":ws_manager"],[":def_transport","sockjs","sockjs",1,":sockjs_options"],[":def_transport","xhr_streaming","xhr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xdr_streaming","xdr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xhr_polling","xhr_polling",1,":sockjs_options"],[":def_transport","xdr_polling","xdr_polling",1,":sockjs_options"],[":def","ws_loop",[":sequential",":timeouts",":ws"]],[":def","wss_loop",[":sequential",":timeouts",":wss"]],[":def","sockjs_loop",[":sequential",":timeouts",":sockjs"]],[":def","streaming_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_streaming"],":xhr_streaming",":xdr_streaming"]]],[":def","polling_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_polling"],":xhr_polling",":xdr_polling"]]],[":def","http_loop",[":if",[":is_supported",":streaming_loop"],[":best_connected_ever",":streaming_loop",[":delayed",4e3,[":polling_loop"]]],[":polling_loop"]]],[":def","http_fallback_loop",[":if",[":is_supported",":http_loop"],[":http_loop"],[":sockjs_loop"]]],[":def","strategy",[":cached",18e5,[":first_connected",[":if",[":is_supported",":ws"],e,":http_fallback_loop"]]]]]};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function i(){var t=this;t.timeline.info(t.buildTimelineMessage({transport:t.name+(t.options.encrypted?"s":"")})),t.hooks.isInitialized()?t.changeState("initialized"):t.hooks.file?(t.changeState("initializing"),o.Dependencies.load(t.hooks.file,{encrypted:t.options.encrypted},function(e,n){t.hooks.isInitialized()?(t.changeState("initialized"),n(!0)):(e&&t.onError(e),t.onClose(),n(!1))})):t.onClose()}var o=n(3);e.__esModule=!0,e["default"]=i},function(t,e,n){"use strict";var i=n(29),o=n(31);o["default"].createXDR=function(t,e){return this.createRequest(i["default"],t,e)},e.__esModule=!0,e["default"]=o["default"]},function(t,e,n){"use strict";var i=n(30),o={getRequest:function(t){var e=new window.XDomainRequest;return e.ontimeout=function(){t.emit("error",new i.RequestTimedOut),t.close()},e.onerror=function(e){t.emit("error",e),t.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText),t.emit("finished",200),t.close()},e},abortRequest:function(t){t.ontimeout=t.onerror=t.onprogress=t.onload=null,t.abort()}};e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.BadEventName=i;var o=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.RequestTimedOut=o;var r=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportPriorityTooLow=r;var s=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportClosed=s;var a=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedTransport=a;var c=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedStrategy=c},function(t,e,n){"use strict";var i=n(32),o=n(33),r=n(35),s=n(36),a=n(37),c={createStreamingSocket:function(t){return this.createSocket(r["default"],t)},createPollingSocket:function(t){return this.createSocket(s["default"],t)},createSocket:function(t,e){return new o["default"](t,e)},createXHR:function(t,e){return this.createRequest(a["default"],t,e)},createRequest:function(t,e,n){return new i["default"](t,e,n)}};e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(2),r=n(23),s=262144,a=function(t){function e(e,n,i){t.call(this),this.hooks=e,this.method=n,this.url=i}return i(e,t),e.prototype.start=function(t){var e=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){e.close()},o["default"].addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(t)},e.prototype.close=function(){this.unloader&&(o["default"].removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(t,e){for(;;){var n=this.advanceBuffer(e);if(!n)break;this.emit("chunk",{status:t,data:n})}this.isBufferTooLong(e)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(t){var e=t.slice(this.position),n=e.indexOf("\n");return-1!==n?(this.position+=n+1,e.slice(0,n)):null},e.prototype.isBufferTooLong=function(t){return this.position===t.length&&t.length>s},e}(r["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";function i(t){var e=/([^\?]*)\/*(\??.*)/.exec(t);return{base:e[1],queryString:e[2]}}function o(t,e){return t.base+"/"+e+"/xhr_send"}function r(t){var e=-1===t.indexOf("?")?"?":"&";return t+e+"t="+ +new Date+"&n="+d++}function s(t,e){var n=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(t);return n[1]+e+n[3]}function a(t){return Math.floor(Math.random()*t)}function c(t){for(var e=[],n=0;t>n;n++)e.push(a(32).toString(32));return e.join("")}var u=n(34),l=n(11),h=n(2),d=1,p=function(){function t(t,e){this.hooks=t,this.session=a(1e3)+"/"+c(8),this.location=i(e),this.readyState=u["default"].CONNECTING,this.openStream()}return t.prototype.send=function(t){return this.sendRaw(JSON.stringify([t]))},t.prototype.ping=function(){this.hooks.sendHeartbeat(this)},t.prototype.close=function(t,e){this.onClose(t,e,!0)},t.prototype.sendRaw=function(t){if(this.readyState!==u["default"].OPEN)return!1;try{return h["default"].createSocketRequest("POST",r(o(this.location,this.session))).start(t),!0}catch(e){return!1}},t.prototype.reconnect=function(){this.closeStream(),this.openStream()},t.prototype.onClose=function(t,e,n){this.closeStream(),this.readyState=u["default"].CLOSED,this.onclose&&this.onclose({code:t,reason:e,wasClean:n})},t.prototype.onChunk=function(t){if(200===t.status){this.readyState===u["default"].OPEN&&this.onActivity();var e,n=t.data.slice(0,1);switch(n){case"o":e=JSON.parse(t.data.slice(1)||"{}"),this.onOpen(e);break;case"a":e=JSON.parse(t.data.slice(1)||"[]");for(var i=0;i<e.length;i++)this.onEvent(e[i]);break;case"m":e=JSON.parse(t.data.slice(1)||"null"),this.onEvent(e);break;case"h":this.hooks.onHeartbeat(this);break;case"c":e=JSON.parse(t.data.slice(1)||"[]"),this.onClose(e[0],e[1],!0)}}},t.prototype.onOpen=function(t){this.readyState===u["default"].CONNECTING?(t&&t.hostname&&(this.location.base=s(this.location.base,t.hostname)),this.readyState=u["default"].OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},t.prototype.onEvent=function(t){this.readyState===u["default"].OPEN&&this.onmessage&&this.onmessage({data:t})},t.prototype.onActivity=function(){this.onactivity&&this.onactivity()},t.prototype.onError=function(t){this.onerror&&this.onerror(t)},t.prototype.openStream=function(){var t=this;this.stream=h["default"].createSocketRequest("POST",r(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(e){t.onChunk(e)}),this.stream.bind("finished",function(e){t.hooks.onFinished(t,e)}),this.stream.bind("buffer_too_long",function(){t.reconnect()});try{this.stream.start()}catch(e){l["default"].defer(function(){t.onError(e),t.onClose(1006,"Could not start streaming",!1)})}},t.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},t}();e.__esModule=!0,e["default"]=p},function(t,e){"use strict";var n;!function(t){t[t.CONNECTING=0]="CONNECTING",t[t.OPEN=1]="OPEN",t[t.CLOSED=3]="CLOSED"}(n||(n={})),e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr_streaming"+t.queryString},onHeartbeat:function(t){t.sendRaw("[]")},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr"+t.queryString},onHeartbeat:function(){},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){200===e?t.reconnect():t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(2),o={getRequest:function(t){var e=i["default"].getXHRAPI(),n=new e;return n.onreadystatechange=n.onprogress=function(){switch(n.readyState){case 3:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText);break;case 4:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText),t.emit("finished",n.status),t.close()}},n},abortRequest:function(t){t.onreadystatechange=null,t.abort()}};e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(9),o=n(11),r=n(39),s=function(){function t(t,e,n){this.key=t,this.session=e,this.events=[],this.options=n||{},this.sent=0,this.uniqueID=0}return t.prototype.log=function(t,e){t<=this.options.level&&(this.events.push(i.extend({},e,{timestamp:o["default"].now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},t.prototype.error=function(t){this.log(r["default"].ERROR,t)},t.prototype.info=function(t){this.log(r["default"].INFO,t)},t.prototype.debug=function(t){this.log(r["default"].DEBUG,t)},t.prototype.isEmpty=function(){return 0===this.events.length},t.prototype.send=function(t,e){var n=this,o=i.extend({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],t(o,function(t,i){t||n.sent++,e&&e(t,i)}),!0},t.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},t}();e.__esModule=!0,e["default"]=s},function(t,e){"use strict";var n;!function(t){t[t.ERROR=3]="ERROR",t[t.INFO=6]="INFO",t[t.DEBUG=7]="DEBUG"}(n||(n={})),e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function i(t){return function(e){return[t.apply(this,arguments),e]}}function o(t){return"string"==typeof t&&":"===t.charAt(0)}function r(t,e){return e[t.slice(1)]}function s(t,e){if(0===t.length)return[[],e];var n=u(t[0],e),i=s(t.slice(1),n[1]);return[[n[0]].concat(i[0]),i[1]]}function a(t,e){if(!o(t))return[t,e];var n=r(t,e);if(void 0===n)throw"Undefined symbol "+t;return[n,e]}function c(t,e){if(o(t[0])){var n=r(t[0],e);if(t.length>1){if("function"!=typeof n)throw"Calling non-function "+t[0];var i=[l.extend({},e)].concat(l.map(t.slice(1),function(t){return u(t,l.extend({},e))[0]}));return n.apply(this,i)}return[n,e]}return s(t,e)}function u(t,e){return"string"==typeof t?a(t,e):"object"==typeof t&&t instanceof Array&&t.length>0?c(t,e):[t,e]}var l=n(9),h=n(11),d=n(41),p=n(30),f=n(55),v=n(56),m=n(57),g=n(58),y=n(59),b=n(60),w=n(61),_=n(2),x=_["default"].Transports;e.build=function(t,e){var n=l.extend({},k,e);return u(t,n)[1].strategy};var C={isSupported:function(){return!1},connect:function(t,e){var n=h["default"].defer(function(){e(new p.UnsupportedStrategy)});return{abort:function(){n.ensureAborted()},forceMinPriority:function(){}}}},k={extend:function(t,e,n){return[l.extend({},e,n),t]},def:function(t,e,n){if(void 0!==t[e])throw"Redefining symbol "+e;return t[e]=n,[void 0,t]},def_transport:function(t,e,n,i,o,r){var s=x[n];if(!s)throw new p.UnsupportedTransport(n);var a,c=!(t.enabledTransports&&-1===l.arrayIndexOf(t.enabledTransports,e)||t.disabledTransports&&-1!==l.arrayIndexOf(t.disabledTransports,e));a=c?new f["default"](e,i,r?r.getAssistant(s):s,l.extend({key:t.key,encrypted:t.encrypted,timeline:t.timeline,ignoreNullOrigin:t.ignoreNullOrigin},o)):C;var u=t.def(t,e,a)[1];return u.Transports=t.Transports||{},u.Transports[e]=a,[void 0,u]},transport_manager:i(function(t,e){return new d["default"](e)}),sequential:i(function(t,e){var n=Array.prototype.slice.call(arguments,2);return new v["default"](n,e)}),cached:i(function(t,e,n){return new g["default"](n,t.Transports,{ttl:e,timeline:t.timeline,encrypted:t.encrypted})}),first_connected:i(function(t,e){return new w["default"](e)}),best_connected_ever:i(function(){var t=Array.prototype.slice.call(arguments,1);return new m["default"](t)}),delayed:i(function(t,e,n){return new y["default"](n,{delay:e})}),"if":i(function(t,e,n,i){return new b["default"](e,n,i)}),is_supported:i(function(t,e){return function(){return e.isSupported()}})}},function(t,e,n){"use strict";var i=n(42),o=function(){function t(t){this.options=t||{},this.livesLeft=this.options.lives||1/0}return t.prototype.getAssistant=function(t){return i["default"].createAssistantToTheTransportManager(this,t,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},t.prototype.isAlive=function(){return this.livesLeft>0},t.prototype.reportDeath=function(){this.livesLeft-=1},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(43),o=n(44),r=n(47),s=n(48),a=n(49),c=n(50),u=n(51),l=n(53),h=n(54),d={createChannels:function(){return new h["default"]},createConnectionManager:function(t,e){return new l["default"](t,e)},createChannel:function(t,e){return new u["default"](t,e)},createPrivateChannel:function(t,e){return new c["default"](t,e)},createPresenceChannel:function(t,e){return new a["default"](t,e)},createTimelineSender:function(t,e){return new s["default"](t,e)},createAuthorizer:function(t,e){return new r["default"](t,e)},createHandshake:function(t,e){return new o["default"](t,e)},createAssistantToTheTransportManager:function(t,e,n){return new i["default"](t,e,n)}};e.__esModule=!0,e["default"]=d},function(t,e,n){"use strict";var i=n(11),o=n(9),r=function(){function t(t,e,n){this.manager=t,this.transport=e,this.minPingDelay=n.minPingDelay,this.maxPingDelay=n.maxPingDelay,this.pingDelay=void 0}return t.prototype.createConnection=function(t,e,n,r){var s=this;r=o.extend({},r,{activityTimeout:this.pingDelay});var a=this.transport.createConnection(t,e,n,r),c=null,u=function(){a.unbind("open",u),a.bind("closed",l),c=i["default"].now()},l=function(t){if(a.unbind("closed",l),1002===t.code||1003===t.code)s.manager.reportDeath();else if(!t.wasClean&&c){var e=i["default"].now()-c;e<2*s.maxPingDelay&&(s.manager.reportDeath(),s.pingDelay=Math.max(e/2,s.minPingDelay))}};return a.bind("open",u),a},t.prototype.isSupported=function(t){return this.manager.isAlive()&&this.transport.isSupported(t)},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(9),o=n(45),r=n(46),s=function(){function t(t,e){this.transport=t,this.callback=e,this.bindListeners()}return t.prototype.close=function(){this.unbindListeners(),this.transport.close()},t.prototype.bindListeners=function(){var t=this;this.onMessage=function(e){t.unbindListeners();var n;try{n=o.processHandshake(e)}catch(i){return t.finish("error",{error:i}),void t.transport.close()}"connected"===n.action?t.finish("connected",{connection:new r["default"](n.id,t.transport),activityTimeout:n.activityTimeout}):(t.finish(n.action,{error:n.error}),t.transport.close())},this.onClosed=function(e){t.unbindListeners();var n=o.getCloseAction(e)||"backoff",i=o.getCloseError(e);t.finish(n,{error:i})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},t.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},t.prototype.finish=function(t,e){this.callback(i.extend({transport:this.transport,action:t},e))},t}();e.__esModule=!0,e["default"]=s},function(t,e){"use strict";e.decodeMessage=function(t){try{var e=JSON.parse(t.data);if("string"==typeof e.data)try{e.data=JSON.parse(e.data)}catch(n){if(!(n instanceof SyntaxError))throw n}return e}catch(n){throw{type:"MessageParseError",error:n,data:t.data}}},e.encodeMessage=function(t){return JSON.stringify(t)},e.processHandshake=function(t){if(t=e.decodeMessage(t),"pusher:connection_established"===t.event){if(!t.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:t.data.socket_id,activityTimeout:1e3*t.data.activity_timeout}}if("pusher:error"===t.event)return{action:this.getCloseAction(t.data),error:this.getCloseError(t.data)};throw"Invalid handshake"},e.getCloseAction=function(t){return t.code<4e3?t.code>=1002&&t.code<=1004?"backoff":null:4e3===t.code?"ssl_only":t.code<4100?"refused":t.code<4200?"backoff":t.code<4300?"retry":"refused"},e.getCloseError=function(t){return 1e3!==t.code&&1001!==t.code?{type:"PusherError",data:{code:t.code,message:t.reason||t.message}}:null}},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(9),r=n(23),s=n(45),a=n(8),c=function(t){function e(e,n){t.call(this),this.id=e,this.transport=n,this.activityTimeout=n.activityTimeout,this.bindListeners()}return i(e,t),e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(t){return this.transport.send(t)},e.prototype.send_event=function(t,e,n){var i={event:t,data:e};return n&&(i.channel=n),a["default"].debug("Event sent",i),this.send(s.encodeMessage(i))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var t=this,e={message:function(e){var n;try{n=s.decodeMessage(e)}catch(i){t.emit("error",{type:"MessageParseError",error:i,data:e.data})}if(void 0!==n){switch(a["default"].debug("Event recd",n),n.event){case"pusher:error":t.emit("error",{type:"PusherError",data:n.data});break;case"pusher:ping":t.emit("ping");break;case"pusher:pong":t.emit("pong")}t.emit("message",n)}},activity:function(){t.emit("activity")},error:function(e){t.emit("error",{type:"WebSocketError",error:e})},closed:function(e){n(),e&&e.code&&t.handleCloseEvent(e),t.transport=null,t.emit("closed")}},n=function(){o.objectApply(e,function(e,n){t.transport.unbind(n,e)})};o.objectApply(e,function(e,n){t.transport.bind(n,e)})},e.prototype.handleCloseEvent=function(t){var e=s.getCloseAction(t),n=s.getCloseError(t);n&&this.emit("error",n),e&&this.emit(e)},e}(r["default"]);e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=n(2),o=function(){function t(t,e){this.channel=t;var n=e.authTransport;if("undefined"==typeof i["default"].getAuthorizers()[n])throw"'"+n+"' is not a recognized auth transport";this.type=n,this.options=e,this.authOptions=(e||{}).auth||{}}return t.prototype.composeQuery=function(t){var e="socket_id="+encodeURIComponent(t)+"&channel_name="+encodeURIComponent(this.channel.name);for(var n in this.authOptions.params)e+="&"+encodeURIComponent(n)+"="+encodeURIComponent(this.authOptions.params[n]);return e},t.prototype.authorize=function(e,n){return t.authorizers=t.authorizers||i["default"].getAuthorizers(),t.authorizers[this.type].call(this,i["default"],e,n)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(2),o=function(){function t(t,e){this.timeline=t,this.options=e||{}}return t.prototype.send=function(t,e){this.timeline.isEmpty()||this.timeline.send(i["default"].TimelineTransport.getAgent(this,t),e)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(50),r=n(8),s=n(52),a=function(t){function e(e,n){t.call(this,e,n),this.members=new s["default"]}return i(e,t),e.prototype.authorize=function(e,n){var i=this;t.prototype.authorize.call(this,e,function(t,e){if(!t){if(void 0===e.channel_data)return r["default"].warn("Invalid auth response for channel '"+i.name+"', expected 'channel_data' field"),void n("Invalid auth response");var o=JSON.parse(e.channel_data);i.members.setMyID(o.user_id)}n(t,e)})},e.prototype.handleEvent=function(t,e){switch(t){case"pusher_internal:subscription_succeeded":this.members.onSubscription(e),this.subscribed=!0,this.emit("pusher:subscription_succeeded",this.members);break;case"pusher_internal:member_added":var n=this.members.addMember(e);this.emit("pusher:member_added",n);break;case"pusher_internal:member_removed":var i=this.members.removeMember(e);i&&this.emit("pusher:member_removed",i);break;default:o["default"].prototype.handleEvent.call(this,t,e)}},e.prototype.disconnect=function(){this.members.reset(),t.prototype.disconnect.call(this)},e}(o["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(42),r=n(51),s=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.authorize=function(t,e){var n=o["default"].createAuthorizer(this,this.pusher.config);return n.authorize(t,e)},e}(r["default"]);e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=n(30),s=n(8),a=function(t){function e(e,n){t.call(this,function(t,n){s["default"].debug("No callbacks on "+e+" for "+t)}),this.name=e,this.pusher=n,this.subscribed=!1}return i(e,t),e.prototype.authorize=function(t,e){return e(!1,{})},e.prototype.trigger=function(t,e){if(0!==t.indexOf("client-"))throw new r.BadEventName("Event '"+t+"' does not start with 'client-'");return this.pusher.send_event(t,e,this.name)},e.prototype.disconnect=function(){this.subscribed=!1},e.prototype.handleEvent=function(t,e){0===t.indexOf("pusher_internal:")?"pusher_internal:subscription_succeeded"===t&&(this.subscribed=!0,this.emit("pusher:subscription_succeeded",e)):this.emit(t,e)},e.prototype.subscribe=function(){var t=this;this.authorize(this.pusher.connection.socket_id,function(e,n){e?t.handleEvent("pusher:subscription_error",n):t.pusher.send_event("pusher:subscribe",{auth:n.auth,channel_data:n.channel_data,channel:t.name})})},e.prototype.unsubscribe=function(){this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e}(o["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";var i=n(9),o=function(){function t(){this.reset()}return t.prototype.get=function(t){return Object.prototype.hasOwnProperty.call(this.members,t)?{id:t,info:this.members[t]}:null},t.prototype.each=function(t){var e=this;i.objectApply(this.members,function(n,i){t(e.get(i))})},t.prototype.setMyID=function(t){this.myID=t},t.prototype.onSubscription=function(t){this.members=t.presence.hash,this.count=t.presence.count,this.me=this.get(this.myID)},t.prototype.addMember=function(t){return null===this.get(t.user_id)&&this.count++,this.members[t.user_id]=t.user_info,this.get(t.user_id)},t.prototype.removeMember=function(t){var e=this.get(t.user_id);return e&&(delete this.members[t.user_id],this.count--),e},t.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=n(12),s=n(8),a=n(9),c=n(2),u=function(t){function e(e,n){var i=this;t.call(this),this.key=e,this.options=n||{},this.state="initialized",this.connection=null,this.encrypted=!!n.encrypted,this.timeline=this.options.timeline,this.connectionCallbacks=this.buildConnectionCallbacks(),this.errorCallbacks=this.buildErrorCallbacks(),this.handshakeCallbacks=this.buildHandshakeCallbacks(this.errorCallbacks);var o=c["default"].getNetwork();o.bind("online",function(){i.timeline.info({netinfo:"online"}),("connecting"===i.state||"unavailable"===i.state)&&i.retryIn(0)}),o.bind("offline",function(){i.timeline.info({netinfo:"offline"}),i.connection&&i.sendActivityCheck()}),this.updateStrategy()}return i(e,t),e.prototype.connect=function(){if(!this.connection&&!this.runner){if(!this.strategy.isSupported())return void this.updateState("failed");this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(t){return this.connection?this.connection.send(t):!1},e.prototype.send_event=function(t,e,n){return this.connection?this.connection.send_event(t,e,n):!1},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isEncrypted=function(){return this.encrypted},e.prototype.startConnecting=function(){var t=this,e=function(n,i){n?t.runner=t.strategy.connect(0,e):"error"===i.action?(t.emit("error",{type:"HandshakeError",error:i.error}),t.timeline.error({handshakeError:i.error})):(t.abortConnecting(),t.handshakeCallbacks[i.action](i))};this.runner=this.strategy.connect(0,e)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var t=this.abandonConnection();t.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,encrypted:this.encrypted})},e.prototype.retryIn=function(t){var e=this;this.timeline.info({action:"retry",delay:t}),t>0&&this.emit("connecting_in",Math.round(t/1e3)),this.retryTimer=new r.OneOffTimer(t||0,function(){e.disconnectInternally(),e.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var t=this;this.unavailableTimer=new r.OneOffTimer(this.options.unavailableTimeout,function(){t.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection.ping(),
this.activityTimer=new r.OneOffTimer(this.options.pongTimeout,function(){t.timeline.error({pong_timed_out:t.options.pongTimeout}),t.retryIn(0)})},e.prototype.resetActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection.handlesActivityChecks()||(this.activityTimer=new r.OneOffTimer(this.activityTimeout,function(){t.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(){var t=this;return{message:function(e){t.resetActivityCheck(),t.emit("message",e)},ping:function(){t.send_event("pusher:pong",{})},activity:function(){t.resetActivityCheck()},error:function(e){t.emit("error",{type:"WebSocketError",error:e})},closed:function(){t.abandonConnection(),t.shouldRetry()&&t.retryIn(1e3)}}},e.prototype.buildHandshakeCallbacks=function(t){var e=this;return a.extend({},t,{connected:function(t){e.activityTimeout=Math.min(e.options.activityTimeout,t.activityTimeout,t.connection.activityTimeout||1/0),e.clearUnavailableTimer(),e.setConnection(t.connection),e.socket_id=e.connection.id,e.updateState("connected",{socket_id:e.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var t=this,e=function(e){return function(n){n.error&&t.emit("error",{type:"WebSocketError",error:n.error}),e(n)}};return{ssl_only:e(function(){t.encrypted=!0,t.updateStrategy(),t.retryIn(0)}),refused:e(function(){t.disconnect()}),backoff:e(function(){t.retryIn(1e3)}),retry:e(function(){t.retryIn(0)})}},e.prototype.setConnection=function(t){this.connection=t;for(var e in this.connectionCallbacks)this.connection.bind(e,this.connectionCallbacks[e]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(this.connection){this.stopActivityCheck();for(var t in this.connectionCallbacks)this.connection.unbind(t,this.connectionCallbacks[t]);var e=this.connection;return this.connection=null,e}},e.prototype.updateState=function(t,e){var n=this.state;if(this.state=t,n!==t){var i=t;"connected"===i&&(i+=" with new socket ID "+e.socket_id),s["default"].debug("State changed",n+" -> "+i),this.timeline.info({state:t,params:e}),this.emit("state_change",{previous:n,current:t}),this.emit(t,e)}},e.prototype.shouldRetry=function(){return"connecting"===this.state||"connected"===this.state},e}(o["default"]);e.__esModule=!0,e["default"]=u},function(t,e,n){"use strict";function i(t,e){return 0===t.indexOf("private-")?r["default"].createPrivateChannel(t,e):0===t.indexOf("presence-")?r["default"].createPresenceChannel(t,e):r["default"].createChannel(t,e)}var o=n(9),r=n(42),s=function(){function t(){this.channels={}}return t.prototype.add=function(t,e){return this.channels[t]||(this.channels[t]=i(t,e)),this.channels[t]},t.prototype.all=function(){return o.values(this.channels)},t.prototype.find=function(t){return this.channels[t]},t.prototype.remove=function(t){var e=this.channels[t];return delete this.channels[t],e},t.prototype.disconnect=function(){o.objectApply(this.channels,function(t){t.disconnect()})},t}();e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";function i(t,e){return r["default"].defer(function(){e(t)}),{abort:function(){},forceMinPriority:function(){}}}var o=n(42),r=n(11),s=n(30),a=n(9),c=function(){function t(t,e,n,i){this.name=t,this.priority=e,this.transport=n,this.options=i||{}}return t.prototype.isSupported=function(){return this.transport.isSupported({encrypted:this.options.encrypted})},t.prototype.connect=function(t,e){var n=this;if(!this.isSupported())return i(new s.UnsupportedStrategy,e);if(this.priority<t)return i(new s.TransportPriorityTooLow,e);var r=!1,c=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),u=null,l=function(){c.unbind("initialized",l),c.connect()},h=function(){u=o["default"].createHandshake(c,function(t){r=!0,f(),e(null,t)})},d=function(t){f(),e(t)},p=function(){f();var t;try{t=JSON.stringify(c)}catch(n){t=a.safeJSONStringify(c)}e(new s.TransportClosed(t))},f=function(){c.unbind("initialized",l),c.unbind("open",h),c.unbind("error",d),c.unbind("closed",p)};return c.bind("initialized",l),c.bind("open",h),c.bind("error",d),c.bind("closed",p),c.initialize(),{abort:function(){r||(f(),u?u.close():c.close())},forceMinPriority:function(t){r||n.priority<t&&(u?u.close():c.close())}}},t}();e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=n(9),o=n(11),r=n(12),s=function(){function t(t,e){this.strategies=t,this.loop=Boolean(e.loop),this.failFast=Boolean(e.failFast),this.timeout=e.timeout,this.timeoutLimit=e.timeoutLimit}return t.prototype.isSupported=function(){return i.any(this.strategies,o["default"].method("isSupported"))},t.prototype.connect=function(t,e){var n=this,i=this.strategies,o=0,r=this.timeout,s=null,a=function(c,u){u?e(null,u):(o+=1,n.loop&&(o%=i.length),o<i.length?(r&&(r=2*r,n.timeoutLimit&&(r=Math.min(r,n.timeoutLimit))),s=n.tryStrategy(i[o],t,{timeout:r,failFast:n.failFast},a)):e(!0))};return s=this.tryStrategy(i[o],t,{timeout:r,failFast:this.failFast},a),{abort:function(){s.abort()},forceMinPriority:function(e){t=e,s&&s.forceMinPriority(e)}}},t.prototype.tryStrategy=function(t,e,n,i){var o=null,s=null;return n.timeout>0&&(o=new r.OneOffTimer(n.timeout,function(){s.abort(),i(!0)})),s=t.connect(e,function(t,e){t&&o&&o.isRunning()&&!n.failFast||(o&&o.ensureAborted(),i(t,e))}),{abort:function(){o&&o.ensureAborted(),s.abort()},forceMinPriority:function(t){s.forceMinPriority(t)}}},t}();e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";function i(t,e,n){var i=s.map(t,function(t,i,o,r){return t.connect(e,n(i,r))});return{abort:function(){s.apply(i,r)},forceMinPriority:function(t){s.apply(i,function(e){e.forceMinPriority(t)})}}}function o(t){return s.all(t,function(t){return Boolean(t.error)})}function r(t){t.error||t.aborted||(t.abort(),t.aborted=!0)}var s=n(9),a=n(11),c=function(){function t(t){this.strategies=t}return t.prototype.isSupported=function(){return s.any(this.strategies,a["default"].method("isSupported"))},t.prototype.connect=function(t,e){return i(this.strategies,t,function(t,n){return function(i,r){return n[t].error=i,i?void(o(n)&&e(!0)):(s.apply(n,function(t){t.forceMinPriority(r.transport.priority)}),void e(null,r))}})},t}();e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";function i(t){return"pusherTransport"+(t?"Encrypted":"Unencrypted")}function o(t){var e=c["default"].getLocalStorage();if(e)try{var n=e[i(t)];if(n)return JSON.parse(n)}catch(o){s(t)}return null}function r(t,e,n){var o=c["default"].getLocalStorage();if(o)try{o[i(t)]=JSON.stringify({timestamp:a["default"].now(),transport:e,latency:n})}catch(r){}}function s(t){var e=c["default"].getLocalStorage();if(e)try{delete e[i(t)]}catch(n){}}var a=n(11),c=n(2),u=n(56),l=function(){function t(t,e,n){this.strategy=t,this.transports=e,this.ttl=n.ttl||18e5,this.encrypted=n.encrypted,this.timeline=n.timeline}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.encrypted,i=o(n),c=[this.strategy];if(i&&i.timestamp+this.ttl>=a["default"].now()){var l=this.transports[i.transport];l&&(this.timeline.info({cached:!0,transport:i.transport,latency:i.latency}),c.push(new u["default"]([l],{timeout:2*i.latency+1e3,failFast:!0})))}var h=a["default"].now(),d=c.pop().connect(t,function p(i,o){i?(s(n),c.length>0?(h=a["default"].now(),d=c.pop().connect(t,p)):e(i)):(r(n,o.transport.name,a["default"].now()-h),e(null,o))});return{abort:function(){d.abort()},forceMinPriority:function(e){t=e,d&&d.forceMinPriority(e)}}},t}();e.__esModule=!0,e["default"]=l},function(t,e,n){"use strict";var i=n(12),o=function(){function t(t,e){var n=e.delay;this.strategy=t,this.options={delay:n}}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n,o=this.strategy,r=new i.OneOffTimer(this.options.delay,function(){n=o.connect(t,e)});return{abort:function(){r.ensureAborted(),n&&n.abort()},forceMinPriority:function(e){t=e,n&&n.forceMinPriority(e)}}},t}();e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=function(){function t(t,e,n){this.test=t,this.trueBranch=e,this.falseBranch=n}return t.prototype.isSupported=function(){var t=this.test()?this.trueBranch:this.falseBranch;return t.isSupported()},t.prototype.connect=function(t,e){var n=this.test()?this.trueBranch:this.falseBranch;return n.connect(t,e)},t}();e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n=function(){function t(t){this.strategy=t}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.strategy.connect(t,function(t,i){i&&n.abort(),e(t,i)});return n},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(5);e.getGlobalConfig=function(){return{wsHost:i["default"].host,wsPort:i["default"].ws_port,wssPort:i["default"].wss_port,httpHost:i["default"].sockjs_host,httpPort:i["default"].sockjs_http_port,httpsPort:i["default"].sockjs_https_port,httpPath:i["default"].sockjs_path,statsHost:i["default"].stats_host,authEndpoint:i["default"].channel_auth_endpoint,authTransport:i["default"].channel_auth_transport,activity_timeout:i["default"].activity_timeout,pong_timeout:i["default"].pong_timeout,unavailable_timeout:i["default"].unavailable_timeout}},e.getClusterConfig=function(t){return{wsHost:"ws-"+t+".pusher.com",httpHost:"sockjs-"+t+".pusher.com"}}}])}),!function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){function i(){d&&l&&(d=!1,l.length?h=l.concat(h):p=-1,h.length&&o())}function o(){if(!d){var t=a(i);d=!0;for(var e=h.length;e;){for(l=h,h=[];++p<e;)l&&l[p].run();p=-1,e=h.length}l=null,d=!1,c(t)}}function r(t,e){this.fun=t,this.array=e}function s(){}var a,c,u=e.exports={};!function(){try{a=setTimeout}catch(t){a=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(t){c=function(){throw new Error("clearTimeout is not defined")}}}();var l,h=[],d=!1,p=-1;u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new r(t,e)),1!==h.length||d||a(o,0)},r.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=s,u.addListener=s,u.once=s,u.off=s,u.removeListener=s,u.removeAllListeners=s,u.emit=s,u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],2:[function(t,e,n){(function(t,n){"use strict";function i(t,e,n){if(r(t,e))return void(t[e]=n);if(t._isVue)return void i(t._data,e,n);var o=t.__ob__;if(!o)return void(t[e]=n);if(o.convert(e,n),o.dep.notify(),o.vms)for(var s=o.vms.length;s--;){var a=o.vms[s];a._proxy(e),a._digest()}return n}function o(t,e){if(r(t,e)){delete t[e];var n=t.__ob__;if(!n)return void(t._isVue&&(delete t._data[e],t._digest()));if(n.dep.notify(),n.vms)for(var i=n.vms.length;i--;){var o=n.vms[i];o._unproxy(e),o._digest()}}}function r(t,e){return jn.call(t,e)}function s(t){return In.test(t)}function a(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function c(t){return null==t?"":t.toString()}function u(t){if("string"!=typeof t)return t;var e=Number(t);return isNaN(e)?t:e}function l(t){return"true"===t?!0:"false"===t?!1:t}function h(t){var e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function d(t){return t.replace(Pn,p)}function p(t,e){return e?e.toUpperCase():""}function f(t){return t.replace(Mn,"$1-$2").toLowerCase()}function v(t){return t.replace(Ln,p)}function m(t,e){return function(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}}function g(t,e){e=e||0;for(var n=t.length-e,i=new Array(n);n--;)i[n]=t[n+e];return i}function y(t,e){for(var n=Object.keys(e),i=n.length;i--;)t[n[i]]=e[n[i]];return t}function b(t){return null!==t&&"object"==typeof t}function w(t){return Rn.call(t)===Hn}function _(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}function x(t,e){var n,i,o,r,s,a=function c(){var a=Date.now()-r;e>a&&a>=0?n=setTimeout(c,e-a):(n=null,s=t.apply(o,i),n||(o=i=null))};return function(){return o=this,i=arguments,r=Date.now(),n||(n=setTimeout(a,e)),s}}function C(t,e){for(var n=t.length;n--;)if(t[n]===e)return n;return-1}function k(t){var e=function n(){return n.cancelled?void 0:t.apply(this,arguments)};return e.cancel=function(){e.cancelled=!0},e}function T(t,e){return t==e||(b(t)&&b(e)?JSON.stringify(t)===JSON.stringify(e):!1)}function E(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=Object.create(null)}function S(){var t,e=ai.slice(pi,hi).trim();if(e){t={};var n=e.match(wi);t.name=n[0],n.length>1&&(t.args=n.slice(1).map(O))}t&&(ci.filters=ci.filters||[]).push(t),pi=hi+1}function O(t){if(_i.test(t))return{value:u(t),dynamic:!1};var e=h(t),n=e===t;return{value:n?t:e,dynamic:n}}function N(t){var e=bi.get(t);if(e)return e;for(ai=t,fi=vi=!1,mi=gi=yi=0,pi=0,ci={},hi=0,di=ai.length;di>hi;hi++)if(li=ui,ui=ai.charCodeAt(hi),fi)39===ui&&92!==li&&(fi=!fi);else if(vi)34===ui&&92!==li&&(vi=!vi);else if(124===ui&&124!==ai.charCodeAt(hi+1)&&124!==ai.charCodeAt(hi-1))null==ci.expression?(pi=hi+1,ci.expression=ai.slice(0,hi).trim()):S();else switch(ui){case 34:vi=!0;break;case 39:fi=!0;break;case 40:yi++;break;case 41:yi--;break;case 91:gi++;break;case 93:gi--;break;case 123:mi++;break;case 125:mi--}return null==ci.expression?ci.expression=ai.slice(0,hi).trim():0!==pi&&S(),bi.put(t,ci),ci}function $(t){return t.replace(Ci,"\\$&")}function A(){var t=$(Ai.delimiters[0]),e=$(Ai.delimiters[1]),n=$(Ai.unsafeDelimiters[0]),i=$(Ai.unsafeDelimiters[1]);Ti=new RegExp(n+"((?:.|\\n)+?)"+i+"|"+t+"((?:.|\\n)+?)"+e,"g"),Ei=new RegExp("^"+n+"((?:.|\\n)+?)"+i+"$"),ki=new E(1e3)}function D(t){ki||A();var e=ki.get(t);if(e)return e;if(!Ti.test(t))return null;for(var n,i,o,r,s,a,c=[],u=Ti.lastIndex=0;n=Ti.exec(t);)i=n.index,i>u&&c.push({value:t.slice(u,i)}),o=Ei.test(n[0]),r=o?n[1]:n[2],s=r.charCodeAt(0),a=42===s,r=a?r.slice(1):r,c.push({tag:!0,value:r.trim(),html:o,oneTime:a}),u=i+n[0].length;return u<t.length&&c.push({value:t.slice(u)}),ki.put(t,c),c}function j(t,e){return t.length>1?t.map(function(t){return I(t,e)}).join("+"):I(t[0],e,!0)}function I(t,e,n){return t.tag?t.oneTime&&e?'"'+e.$eval(t.value)+'"':P(t.value,n):'"'+t.value+'"'}function P(t,e){if(Si.test(t)){var n=N(t);return n.filters?"this._applyFilters("+n.expression+",null,"+JSON.stringify(n.filters)+",false)":"("+t+")"}return e?t:"("+t+")"}function M(t,e,n,i){H(t,1,function(){e.appendChild(t)},n,i)}function L(t,e,n,i){H(t,1,function(){W(t,e)},n,i)}function R(t,e,n){H(t,-1,function(){Q(t)},e,n)}function H(t,e,n,i,o){var r=t.__v_trans;if(!r||!r.hooks&&!Zn||!i._isCompiled||i.$parent&&!i.$parent._isCompiled)return n(),void(o&&o());var s=e>0?"enter":"leave";r[s](n,o)}function q(e){if("string"==typeof e){var n=e;e=document.querySelector(e),e||"production"!==t.env.NODE_ENV&&Di("Cannot find element: "+n)}return e}function F(t){if(!t)return!1;var e=t.ownerDocument.documentElement,n=t.parentNode;return e===t||e===n||!(!n||1!==n.nodeType||!e.contains(n))}function B(t,e){var n=t.getAttribute(e);return null!==n&&t.removeAttribute(e),n}function U(t,e){var n=B(t,":"+e);return null===n&&(n=B(t,"v-bind:"+e)),n}function V(t,e){return t.hasAttribute(e)||t.hasAttribute(":"+e)||t.hasAttribute("v-bind:"+e)}function W(t,e){e.parentNode.insertBefore(t,e)}function z(t,e){e.nextSibling?W(t,e.nextSibling):e.parentNode.appendChild(t)}function Q(t){t.parentNode.removeChild(t)}function X(t,e){e.firstChild?W(t,e.firstChild):e.appendChild(t)}function J(t,e){var n=t.parentNode;n&&n.replaceChild(e,t)}function Y(t,e,n,i){t.addEventListener(e,n,i)}function G(t,e,n){t.removeEventListener(e,n)}function K(t){var e=t.className;return"object"==typeof e&&(e=e.baseVal||""),e}function Z(t,e){zn&&!/svg$/.test(t.namespaceURI)?t.className=e:t.setAttribute("class",e)}function tt(t,e){if(t.classList)t.classList.add(e);else{var n=" "+K(t)+" ";n.indexOf(" "+e+" ")<0&&Z(t,(n+e).trim())}}function et(t,e){if(t.classList)t.classList.remove(e);else{for(var n=" "+K(t)+" ",i=" "+e+" ";n.indexOf(i)>=0;)n=n.replace(i," ");Z(t,n.trim())}t.className||t.removeAttribute("class")}function nt(t,e){var n,i;if(rt(t)&&lt(t.content)&&(t=t.content),t.hasChildNodes())for(it(t),i=e?document.createDocumentFragment():document.createElement("div");n=t.firstChild;)i.appendChild(n);return i}function it(t){for(var e;e=t.firstChild,ot(e);)t.removeChild(e);for(;e=t.lastChild,ot(e);)t.removeChild(e)}function ot(t){return t&&(3===t.nodeType&&!t.data.trim()||8===t.nodeType)}function rt(t){return t.tagName&&"template"===t.tagName.toLowerCase()}function st(t,e){var n=Ai.debug?document.createComment(t):document.createTextNode(e?" ":"");return n.__v_anchor=!0,n}function at(t){if(t.hasAttributes())for(var e=t.attributes,n=0,i=e.length;i>n;n++){var o=e[n].name;if(Pi.test(o))return d(o.replace(Pi,""))}}function ct(t,e,n){for(var i;t!==e;)i=t.nextSibling,n(t),t=i;n(e)}function ut(t,e,n,i,o){function r(){if(a++,s&&a>=c.length){for(var t=0;t<c.length;t++)i.appendChild(c[t]);o&&o()}}var s=!1,a=0,c=[];ct(t,e,function(t){t===e&&(s=!0),c.push(t),R(t,n,r)})}function lt(t){return t&&11===t.nodeType}function ht(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function dt(e,n){var i=e.tagName.toLowerCase(),o=e.hasAttributes();if(Mi.test(i)||Li.test(i)){if(o)return pt(e,n)}else{if(wt(n,"components",i))return{id:i};var r=o&&pt(e,n);if(r)return r;if("production"!==t.env.NODE_ENV){var s=n._componentNameMap&&n._componentNameMap[i];s?Di("Unknown custom element: <"+i+"> - did you mean <"+s+">? HTML is case-insensitive, remember to use kebab-case in templates."):Ri(e,i)&&Di("Unknown custom element: <"+i+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.')}}}function pt(t,e){var n=t.getAttribute("is");if(null!=n){if(wt(e,"components",n))return t.removeAttribute("is"),{id:n}}else if(n=U(t,"is"),null!=n)return{id:n,dynamic:!0}}function ft(t,e){var n,o,s;for(n in e)o=t[n],s=e[n],r(t,n)?b(o)&&b(s)&&ft(o,s):i(t,n,s);return t}function vt(t,e){var n=Object.create(t||null);return e?y(n,yt(e)):n}function mt(e){if(e.components){var n,i=e.components=yt(e.components),o=Object.keys(i);if("production"!==t.env.NODE_ENV)var r=e._componentNameMap={};for(var s=0,a=o.length;a>s;s++){var c=o[s];Mi.test(c)||Li.test(c)?"production"!==t.env.NODE_ENV&&Di("Do not use built-in or reserved HTML elements as component id: "+c):("production"!==t.env.NODE_ENV&&(r[c.replace(/-/g,"").toLowerCase()]=f(c)),n=i[c],w(n)&&(i[c]=Sn.extend(n)))}}}function gt(t){var e,n,i=t.props;if(qn(i))for(t.props={},e=i.length;e--;)n=i[e],"string"==typeof n?t.props[n]=null:n.name&&(t.props[n.name]=n);else if(w(i)){var o=Object.keys(i);for(e=o.length;e--;)n=i[o[e]],"function"==typeof n&&(i[o[e]]={type:n})}}function yt(e){if(qn(e)){for(var n,i={},o=e.length;o--;){n=e[o];var r="function"==typeof n?n.options&&n.options.name||n.id:n.name||n.id;r?i[r]=n:"production"!==t.env.NODE_ENV&&Di('Array-syntax assets must provide a "name" or "id" field.')}return i}return e}function bt(e,n,i){function o(t){var o=Hi[t]||qi;a[t]=o(e[t],n[t],i,t)}mt(n),gt(n),"production"!==t.env.NODE_ENV&&n.propsData&&!i&&Di("propsData can only be used as an instantiation option.");var s,a={};if(n["extends"]&&(e="function"==typeof n["extends"]?bt(e,n["extends"].options,i):bt(e,n["extends"],i)),n.mixins)for(var c=0,u=n.mixins.length;u>c;c++){var l=n.mixins[c],h=l.prototype instanceof Sn?l.options:l;e=bt(e,h,i)}for(s in e)o(s);for(s in n)r(e,s)||o(s);return a}function wt(e,n,i,o){if("string"==typeof i){var r,s=e[n],a=s[i]||s[r=d(i)]||s[r.charAt(0).toUpperCase()+r.slice(1)];return"production"!==t.env.NODE_ENV&&o&&!a&&Di("Failed to resolve "+n.slice(0,-1)+": "+i,e),a}}function _t(){this.id=Fi++,this.subs=[]}function xt(t){Wi=!1,t(),Wi=!0}function Ct(t){if(this.value=t,this.dep=new _t,_(t,"__ob__",this),qn(t)){var e=Fn?kt:Tt;e(t,Ui,Vi),this.observeArray(t)}else this.walk(t)}function kt(t,e){t.__proto__=e}function Tt(t,e,n){for(var i=0,o=n.length;o>i;i++){var r=n[i];_(t,r,e[r])}}function Et(t,e){if(t&&"object"==typeof t){var n;return r(t,"__ob__")&&t.__ob__ instanceof Ct?n=t.__ob__:Wi&&(qn(t)||w(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ct(t)),n&&e&&n.addVm(e),n}}function St(t,e,n){var i=new _t,o=Object.getOwnPropertyDescriptor(t,e);if(!o||o.configurable!==!1){var r=o&&o.get,s=o&&o.set,a=Et(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=r?r.call(t):n;if(_t.target&&(i.depend(),a&&a.dep.depend(),qn(e)))for(var o,s=0,c=e.length;c>s;s++)o=e[s],o&&o.__ob__&&o.__ob__.dep.depend();return e},set:function(e){var o=r?r.call(t):n;e!==o&&(s?s.call(t,e):n=e,a=Et(e),i.notify())}})}}function Ot(t){t.prototype._init=function(t){t=t||{},this.$el=null,this.$parent=t.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=Qi++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=!1,this._unlinkFn=null,this._context=t._context||this.$parent,this._scope=t._scope,this._frag=t._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),t=this.$options=bt(this.constructor.options,t,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}}function Nt(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function $t(t){var e=t.trim();return"0"===t.charAt(0)&&isNaN(t)?!1:s(e)?h(e):"*"+e}function At(t){function e(){var e=t[l+1];return h===oo&&"'"===e||h===ro&&'"'===e?(l++,i="\\"+e,p[Ji](),!0):void 0}var n,i,o,r,s,a,c,u=[],l=-1,h=Zi,d=0,p=[];for(p[Yi]=function(){void 0!==o&&(u.push(o),o=void 0)},p[Ji]=function(){void 0===o?o=i:o+=i},p[Gi]=function(){p[Ji](),d++},p[Ki]=function(){if(d>0)d--,h=io,p[Ji]();else{if(d=0,o=$t(o),o===!1)return!1;p[Yi]()}};null!=h;)if(l++,n=t[l],"\\"!==n||!e()){if(r=Nt(n),c=co[h],s=c[r]||c["else"]||ao,s===ao)return;if(h=s[0],a=p[s[1]],a&&(i=s[2],i=void 0===i?n:i,a()===!1))return;if(h===so)return u.raw=t,u}}function Dt(t){var e=Xi.get(t);return e||(e=At(t),e&&Xi.put(t,e)),e}function jt(t,e){return Bt(e).get(t)}function It(e,n,o){var r=e;if("string"==typeof n&&(n=At(n)),!n||!b(e))return!1;for(var s,a,c=0,u=n.length;u>c;c++)s=e,a=n[c],"*"===a.charAt(0)&&(a=Bt(a.slice(1)).get.call(r,r)),u-1>c?(e=e[a],b(e)||(e={},"production"!==t.env.NODE_ENV&&s._isVue&&uo(n,s),i(s,a,e))):qn(e)?e.$set(a,o):a in e?e[a]=o:("production"!==t.env.NODE_ENV&&e._isVue&&uo(n,e),i(e,a,o));return!0}function Pt(){}function Mt(t,e){var n=ko.length;return ko[n]=e?t.replace(yo,"\\n"):t,'"'+n+'"'}function Lt(t){var e=t.charAt(0),n=t.slice(1);return fo.test(n)?t:(n=n.indexOf('"')>-1?n.replace(wo,Rt):n,e+"scope."+n)}function Rt(t,e){return ko[e]}function Ht(e){mo.test(e)&&"production"!==t.env.NODE_ENV&&Di("Avoid using reserved keywords in expression: "+e),ko.length=0;var n=e.replace(bo,Mt).replace(go,"");return n=(" "+n).replace(xo,Lt).replace(wo,Rt),qt(n)}function qt(e){try{return new Function("scope","return "+e+";")}catch(n){return"production"!==t.env.NODE_ENV&&Di(n.toString().match(/unsafe-eval|CSP/)?"It seems you are using the default build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. Use the CSP-compliant build instead: http://vuejs.org/guide/installation.html#CSP-compliant-build":"Invalid expression. Generated function body: "+e),Pt}}function Ft(e){var n=Dt(e);return n?function(t,e){It(t,n,e)}:void("production"!==t.env.NODE_ENV&&Di("Invalid setter expression: "+e))}function Bt(t,e){t=t.trim();var n=ho.get(t);if(n)return e&&!n.set&&(n.set=Ft(n.exp)),n;var i={exp:t};return i.get=Ut(t)&&t.indexOf("[")<0?qt("scope."+t):Ht(t),e&&(i.set=Ft(t)),ho.put(t,i),i}function Ut(t){return _o.test(t)&&!Co.test(t)&&"Math."!==t.slice(0,5)}function Vt(){Eo.length=0,So.length=0,Oo={},No={},$o=!1}function Wt(){for(var t=!0;t;)t=!1,zt(Eo),zt(So),Eo.length?t=!0:(Un&&Ai.devtools&&Un.emit("flush"),Vt())}function zt(e){for(var n=0;n<e.length;n++){var i=e[n],o=i.id;if(Oo[o]=null,i.run(),"production"!==t.env.NODE_ENV&&null!=Oo[o]&&(No[o]=(No[o]||0)+1,No[o]>Ai._maxUpdateCount)){Di('You may have an infinite update loop for watcher with expression "'+i.expression+'"',i.vm);break}}e.length=0}function Qt(t){var e=t.id;if(null==Oo[e]){var n=t.user?So:Eo;Oo[e]=n.length,n.push(t),$o||($o=!0,oi(Wt))}}function Xt(t,e,n,i){i&&y(this,i);var o="function"==typeof e;if(this.vm=t,t._watchers.push(this),this.expression=e,this.cb=n,this.id=++Ao,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ri,this.newDepIds=new ri,this.prevError=null,o)this.getter=e,this.setter=void 0;else{var r=Bt(e,this.twoWay);this.getter=r.get,this.setter=r.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function Jt(t,e){var n=void 0,i=void 0;e||(e=Do,e.clear());var o=qn(t),r=b(t);if((o||r)&&Object.isExtensible(t)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o)for(n=t.length;n--;)Jt(t[n],e);else if(r)for(i=Object.keys(t),n=i.length;n--;)Jt(t[i[n]],e)}}function Yt(t){return rt(t)&&lt(t.content)}function Gt(t,e){var n=e?t:t.trim(),i=Io.get(n);if(i)return i;var o=document.createDocumentFragment(),r=t.match(Lo),s=Ro.test(t),a=Ho.test(t);if(r||s||a){var c=r&&r[1],u=Mo[c]||Mo.efault,l=u[0],h=u[1],d=u[2],p=document.createElement("div");for(p.innerHTML=h+t+d;l--;)p=p.lastChild;for(var f;f=p.firstChild;)o.appendChild(f)}else o.appendChild(document.createTextNode(t));return e||it(o),Io.put(n,o),o}function Kt(t){if(Yt(t))return Gt(t.innerHTML);if("SCRIPT"===t.tagName)return Gt(t.textContent);for(var e,n=Zt(t),i=document.createDocumentFragment();e=n.firstChild;)i.appendChild(e);return it(i),i}function Zt(t){if(!t.querySelectorAll)return t.cloneNode();var e,n,i,o=t.cloneNode(!0);if(qo){var r=o;if(Yt(t)&&(t=t.content,r=o.content),n=t.querySelectorAll("template"),n.length)for(i=r.querySelectorAll("template"),e=i.length;e--;)i[e].parentNode.replaceChild(Zt(n[e]),i[e])}if(Fo)if("TEXTAREA"===t.tagName)o.value=t.value;else if(n=t.querySelectorAll("textarea"),n.length)for(i=o.querySelectorAll("textarea"),e=i.length;e--;)i[e].value=n[e].value;return o}function te(t,e,n){var i,o;return lt(t)?(it(t),e?Zt(t):t):("string"==typeof t?n||"#"!==t.charAt(0)?o=Gt(t,n):(o=Po.get(t),o||(i=document.getElementById(t.slice(1)),i&&(o=Kt(i),Po.put(t,o)))):t.nodeType&&(o=Kt(t)),o&&e?Zt(o):o)}function ee(t,e,n,i,o,r){this.children=[],this.childFrags=[],this.vm=e,this.scope=o,this.inserted=!1,this.parentFrag=r,r&&r.childFrags.push(this),this.unlink=t(e,n,i,o,this);var s=this.single=1===n.childNodes.length&&!n.childNodes[0].__v_anchor;s?(this.node=n.childNodes[0],this.before=ne,this.remove=ie):(this.node=st("fragment-start"),this.end=st("fragment-end"),this.frag=n,X(this.node,n),n.appendChild(this.end),this.before=oe,this.remove=re),this.node.__v_frag=this}function ne(t,e){this.inserted=!0;var n=e!==!1?L:W;n(this.node,t,this.vm),F(this.node)&&this.callHook(se)}function ie(){this.inserted=!1;var t=F(this.node),e=this;this.beforeRemove(),R(this.node,this.vm,function(){t&&e.callHook(ae),e.destroy()})}function oe(t,e){this.inserted=!0;var n=this.vm,i=e!==!1?L:W;ct(this.node,this.end,function(e){i(e,t,n)}),F(this.node)&&this.callHook(se)}function re(){this.inserted=!1;var t=this,e=F(this.node);this.beforeRemove(),ut(this.node,this.end,this.vm,this.frag,function(){e&&t.callHook(ae),t.destroy()})}function se(t){!t._isAttached&&F(t.$el)&&t._callHook("attached")}function ae(t){t._isAttached&&!F(t.$el)&&t._callHook("detached")}function ce(t,e){this.vm=t;var n,i="string"==typeof e;i||rt(e)&&!e.hasAttribute("v-if")?n=te(e,!0):(n=document.createDocumentFragment(),n.appendChild(e)),this.template=n;var o,r=t.constructor.cid;if(r>0){var s=r+(i?e:ht(e));o=Vo.get(s),o||(o=He(n,t.$options,!0),Vo.put(s,o))}else o=He(n,t.$options,!0);this.linker=o}function ue(t,e,n){var i=t.node.previousSibling;if(i){for(t=i.__v_frag;!(t&&t.forId===n&&t.inserted||i===e);){if(i=i.previousSibling,!i)return;t=i.__v_frag}return t}}function le(t){var e=t.node;if(t.end)for(;!e.__vue__&&e!==t.end&&e.nextSibling;)e=e.nextSibling;return e.__vue__}function he(t){for(var e=-1,n=new Array(Math.floor(t));++e<t;)n[e]=e;return n}function de(t,e,n,i){return i?"$index"===i?t:i.charAt(0).match(/\w/)?jt(n,i):n[i]:e||n}function pe(t,e,n){for(var i,o,r,s=e?[]:null,a=0,c=t.options.length;c>a;a++)if(i=t.options[a],r=n?i.hasAttribute("selected"):i.selected){if(o=i.hasOwnProperty("_value")?i._value:i.value,!e)return o;s.push(o)}return s}function fe(t,e){for(var n=t.length;n--;)if(T(t[n],e))return n;return-1}function ve(t,e){var n=e.map(function(t){var e=t.charCodeAt(0);return e>47&&58>e?parseInt(t,10):1===t.length&&(e=t.toUpperCase().charCodeAt(0),e>64&&91>e)?e:hr[t]});return n=[].concat.apply([],n),function(e){return n.indexOf(e.keyCode)>-1?t.call(this,e):void 0}}function me(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ge(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ye(t){return function(e){return e.target===e.currentTarget?t.call(this,e):void 0}}function be(t){if(mr[t])return mr[t];var e=we(t);return mr[t]=mr[e]=e,e}function we(t){t=f(t);var e=d(t),n=e.charAt(0).toUpperCase()+e.slice(1);gr||(gr=document.createElement("div"));var i,o=pr.length;if("filter"!==e&&e in gr.style)return{kebab:t,camel:e};for(;o--;)if(i=fr[o]+n,i in gr.style)return{kebab:pr[o]+t,camel:i}}function _e(t){var e=[];if(qn(t))for(var n=0,i=t.length;i>n;n++){var o=t[n];if(o)if("string"==typeof o)e.push(o);else for(var r in o)o[r]&&e.push(r)}else if(b(t))for(var s in t)t[s]&&e.push(s);return e}function xe(t,e,n){if(e=e.trim(),-1===e.indexOf(" "))return void n(t,e);for(var i=e.split(/\s+/),o=0,r=i.length;r>o;o++)n(t,i[o])}function Ce(t,e,n){function i(){++r>=o?n():t[r].call(e,i)}var o=t.length,r=0;t[0].call(e,i)}function ke(e,n,i){for(var o,r,a,c,u,l,h,p=[],v=Object.keys(n),m=v.length;m--;)if(r=v[m],o=n[r]||jr,"production"===t.env.NODE_ENV||"$data"!==r)if(u=d(r),Ir.test(u)){if(h={name:r,path:u,options:o,mode:Dr.ONE_WAY,raw:null},a=f(r),null===(c=U(e,a))&&(null!==(c=U(e,a+".sync"))?h.mode=Dr.TWO_WAY:null!==(c=U(e,a+".once"))&&(h.mode=Dr.ONE_TIME)),null!==c)h.raw=c,l=N(c),c=l.expression,h.filters=l.filters,s(c)&&!l.filters?h.optimizedLiteral=!0:(h.dynamic=!0,"production"===t.env.NODE_ENV||h.mode!==Dr.TWO_WAY||Pr.test(c)||(h.mode=Dr.ONE_WAY,Di("Cannot bind two-way prop with non-settable parent path: "+c,i))),h.parentPath=c,"production"!==t.env.NODE_ENV&&o.twoWay&&h.mode!==Dr.TWO_WAY&&Di('Prop "'+r+'" expects a two-way binding type.',i);else if(null!==(c=B(e,a)))h.raw=c;else if("production"!==t.env.NODE_ENV){var g=u.toLowerCase();c=/[A-Z\-]/.test(r)&&(e.getAttribute(g)||e.getAttribute(":"+g)||e.getAttribute("v-bind:"+g)||e.getAttribute(":"+g+".once")||e.getAttribute("v-bind:"+g+".once")||e.getAttribute(":"+g+".sync")||e.getAttribute("v-bind:"+g+".sync")),
c?Di("Possible usage error for prop `"+g+"` - did you mean `"+a+"`? HTML is case-insensitive, remember to use kebab-case for props in templates.",i):o.required&&Di("Missing required prop: "+r,i)}p.push(h)}else"production"!==t.env.NODE_ENV&&Di('Invalid prop key: "'+r+'". Prop keys must be valid identifiers.',i);else Di("Do not use $data as prop.",i);return Te(p)}function Te(t){return function(e,n){e._props={};for(var i,o,s,a,c,d=e.$options.propsData,p=t.length;p--;)if(i=t[p],c=i.raw,o=i.path,s=i.options,e._props[o]=i,d&&r(d,o)&&Se(e,i,d[o]),null===c)Se(e,i,void 0);else if(i.dynamic)i.mode===Dr.ONE_TIME?(a=(n||e._context||e).$get(i.parentPath),Se(e,i,a)):e._context?e._bindDir({name:"prop",def:Lr,prop:i},null,null,n):Se(e,i,e.$get(i.parentPath));else if(i.optimizedLiteral){var v=h(c);a=v===c?l(u(c)):v,Se(e,i,a)}else a=s.type!==Boolean||""!==c&&c!==f(i.name)?c:!0,Se(e,i,a)}}function Ee(t,e,n,i){var o=e.dynamic&&Ut(e.parentPath),r=n;void 0===r&&(r=Ne(t,e)),r=Ae(e,r,t);var s=r!==n;$e(e,r,t)||(r=void 0),o&&!s?xt(function(){i(r)}):i(r)}function Se(t,e,n){Ee(t,e,n,function(n){St(t,e.path,n)})}function Oe(t,e,n){Ee(t,e,n,function(n){t[e.path]=n})}function Ne(e,n){var i=n.options;if(!r(i,"default"))return i.type===Boolean?!1:void 0;var o=i["default"];return b(o)&&"production"!==t.env.NODE_ENV&&Di('Invalid default value for prop "'+n.name+'": Props with type Object/Array must use a factory function to return the default value.',e),"function"==typeof o&&i.type!==Function?o.call(e):o}function $e(e,n,i){if(!e.options.required&&(null===e.raw||null==n))return!0;var o=e.options,r=o.type,s=!r,a=[];if(r){qn(r)||(r=[r]);for(var c=0;c<r.length&&!s;c++){var u=De(n,r[c]);a.push(u.expectedType),s=u.valid}}if(!s)return"production"!==t.env.NODE_ENV&&Di('Invalid prop: type check failed for prop "'+e.name+'". Expected '+a.map(je).join(", ")+", got "+Ie(n)+".",i),!1;var l=o.validator;return l&&!l(n)?("production"!==t.env.NODE_ENV&&Di('Invalid prop: custom validator check failed for prop "'+e.name+'".',i),!1):!0}function Ae(e,n,i){var o=e.options.coerce;return o?"function"==typeof o?o(n):("production"!==t.env.NODE_ENV&&Di('Invalid coerce for prop "'+e.name+'": expected function, got '+typeof o+".",i),n):n}function De(t,e){var n,i;return e===String?(i="string",n=typeof t===i):e===Number?(i="number",n=typeof t===i):e===Boolean?(i="boolean",n=typeof t===i):e===Function?(i="function",n=typeof t===i):e===Object?(i="object",n=w(t)):e===Array?(i="array",n=qn(t)):n=t instanceof e,{valid:n,expectedType:i}}function je(t){return t?t.charAt(0).toUpperCase()+t.slice(1):"custom type"}function Ie(t){return Object.prototype.toString.call(t).slice(8,-1)}function Pe(t){Rr.push(t),Hr||(Hr=!0,oi(Me))}function Me(){for(var t=document.documentElement.offsetHeight,e=0;e<Rr.length;e++)Rr[e]();return Rr=[],Hr=!1,t}function Le(e,n,i,o){this.id=n,this.el=e,this.enterClass=i&&i.enterClass||n+"-enter",this.leaveClass=i&&i.leaveClass||n+"-leave",this.hooks=i,this.vm=o,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={},this.type=i&&i.type,"production"!==t.env.NODE_ENV&&this.type&&this.type!==qr&&this.type!==Fr&&Di('invalid CSS transition type for transition="'+this.id+'": '+this.type,o);var r=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(t){r[t]=m(r[t],r)})}function Re(t){if(/svg$/.test(t.namespaceURI)){var e=t.getBoundingClientRect();return!(e.width||e.height)}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function He(t,e,n){var i=n||!e._asComponent?ze(t,e):null,o=i&&i.terminal||ln(t)||!t.hasChildNodes()?null:Ke(t.childNodes,e);return function(t,e,n,r,s){var a=g(e.childNodes),c=qe(function(){i&&i(t,e,n,r,s),o&&o(t,a,n,r,s)},t);return Be(t,c)}}function qe(e,n){"production"===t.env.NODE_ENV&&(n._directives=[]);var i=n._directives.length;e();var o=n._directives.slice(i);o.sort(Fe);for(var r=0,s=o.length;s>r;r++)o[r]._bind();return o}function Fe(t,e){return t=t.descriptor.def.priority||ts,e=e.descriptor.def.priority||ts,t>e?-1:t===e?0:1}function Be(t,e,n,i){function o(o){Ue(t,e,o),n&&i&&Ue(n,i)}return o.dirs=e,o}function Ue(e,n,i){for(var o=n.length;o--;)n[o]._teardown(),"production"===t.env.NODE_ENV||i||e._directives.$remove(n[o])}function Ve(t,e,n,i){var o=ke(e,n,t),r=qe(function(){o(t,i)},t);return Be(t,r)}function We(e,n,i){var o,r,s=n._containerAttrs,a=n._replacerAttrs;if(11!==e.nodeType)n._asComponent?(s&&i&&(o=sn(s,i)),a&&(r=sn(a,n))):r=sn(e.attributes,n);else if("production"!==t.env.NODE_ENV&&s){var c=s.filter(function(t){return t.name.indexOf("_v-")<0&&!Yr.test(t.name)&&"slot"!==t.name}).map(function(t){return'"'+t.name+'"'});if(c.length){var u=c.length>1;Di("Attribute"+(u?"s ":" ")+c.join(", ")+(u?" are":" is")+" ignored on component <"+n.el.tagName.toLowerCase()+"> because the component is a fragment instance: http://vuejs.org/guide/components.html#Fragment-Instance")}}return n._containerAttrs=n._replacerAttrs=null,function(t,e,n){var i,s=t._context;s&&o&&(i=qe(function(){o(s,e,null,n)},s));var a=qe(function(){r&&r(t,e)},t);return Be(t,a,s,i)}}function ze(t,e){var n=t.nodeType;return 1!==n||ln(t)?3===n&&t.data.trim()?Xe(t,e):null:Qe(t,e)}function Qe(t,e){if("TEXTAREA"===t.tagName){var n=D(t.value);n&&(t.setAttribute(":value",j(n)),t.value="")}var i,o=t.hasAttributes(),r=o&&g(t.attributes);return o&&(i=nn(t,r,e)),i||(i=tn(t,e)),i||(i=en(t,e)),!i&&o&&(i=sn(r,e)),i}function Xe(t,e){if(t._skip)return Je;var n=D(t.wholeText);if(!n)return null;for(var i=t.nextSibling;i&&3===i.nodeType;)i._skip=!0,i=i.nextSibling;for(var o,r,s=document.createDocumentFragment(),a=0,c=n.length;c>a;a++)r=n[a],o=r.tag?Ye(r,e):document.createTextNode(r.value),s.appendChild(o);return Ge(n,s,e)}function Je(t,e){Q(e)}function Ye(t,e){function n(e){if(!t.descriptor){var n=N(t.value);t.descriptor={name:e,def:Nr[e],expression:n.expression,filters:n.filters}}}var i;return t.oneTime?i=document.createTextNode(t.value):t.html?(i=document.createComment("v-html"),n("html")):(i=document.createTextNode(" "),n("text")),i}function Ge(t,e){return function(n,i,o,r){for(var s,a,u,l=e.cloneNode(!0),h=g(l.childNodes),d=0,p=t.length;p>d;d++)s=t[d],a=s.value,s.tag&&(u=h[d],s.oneTime?(a=(r||n).$eval(a),s.html?J(u,te(a,!0)):u.data=c(a)):n._bindDir(s.descriptor,u,o,r));J(i,l)}}function Ke(t,e){for(var n,i,o,r=[],s=0,a=t.length;a>s;s++)o=t[s],n=ze(o,e),i=n&&n.terminal||"SCRIPT"===o.tagName||!o.hasChildNodes()?null:Ke(o.childNodes,e),r.push(n,i);return r.length?Ze(r):null}function Ze(t){return function(e,n,i,o,r){for(var s,a,c,u=0,l=0,h=t.length;h>u;l++){s=n[l],a=t[u++],c=t[u++];var d=g(s.childNodes);a&&a(e,s,i,o,r),c&&c(e,d,i,o,r)}}}function tn(t,e){var n=t.tagName.toLowerCase();if(!Mi.test(n)){var i=wt(e,"elementDirectives",n);return i?rn(t,n,"",e,i):void 0}}function en(t,e){var n=dt(t,e);if(n){var i=at(t),o={name:"component",ref:i,expression:n.id,def:Xr.component,modifiers:{literal:!n.dynamic}},r=function(t,e,n,r,s){i&&St((r||t).$refs,i,null),t._bindDir(o,e,n,r,s)};return r.terminal=!0,r}}function nn(t,e,n){if(null!==B(t,"v-pre"))return on;if(t.hasAttribute("v-else")){var i=t.previousElementSibling;if(i&&i.hasAttribute("v-if"))return on}for(var o,r,s,a,c,u,l,h,d,p,f=0,v=e.length;v>f;f++)o=e[f],r=o.name.replace(Kr,""),(c=r.match(Gr))&&(d=wt(n,"directives",c[1]),d&&d.terminal&&(!p||(d.priority||es)>p.priority)&&(p=d,l=o.name,a=an(o.name),s=o.value,u=c[1],h=c[2]));return p?rn(t,u,s,n,p,l,h,a):void 0}function on(){}function rn(t,e,n,i,o,r,s,a){var c=N(n),u={name:e,arg:s,expression:c.expression,filters:c.filters,raw:n,attr:r,modifiers:a,def:o};"for"!==e&&"router-view"!==e||(u.ref=at(t));var l=function(t,e,n,i,o){u.ref&&St((i||t).$refs,u.ref,null),t._bindDir(u,e,n,i,o)};return l.terminal=!0,l}function sn(e,n){function i(t,e,n){var i=n&&un(n),o=!i&&N(s);m.push({name:t,attr:a,raw:c,def:e,arg:l,modifiers:h,expression:o&&o.expression,filters:o&&o.filters,interp:n,hasOneTime:i})}for(var o,r,s,a,c,u,l,h,d,p,f,v=e.length,m=[];v--;)if(o=e[v],r=a=o.name,s=c=o.value,p=D(s),l=null,h=an(r),r=r.replace(Kr,""),p)s=j(p),l=r,i("bind",Nr.bind,p),"production"!==t.env.NODE_ENV&&"class"===r&&Array.prototype.some.call(e,function(t){return":class"===t.name||"v-bind:class"===t.name})&&Di('class="'+c+'": Do not mix mustache interpolation and v-bind for "class" on the same element. Use one or the other.',n);else if(Zr.test(r))h.literal=!Jr.test(r),i("transition",Xr.transition);else if(Yr.test(r))l=r.replace(Yr,""),i("on",Nr.on);else if(Jr.test(r))u=r.replace(Jr,""),"style"===u||"class"===u?i(u,Xr[u]):(l=u,i("bind",Nr.bind));else if(f=r.match(Gr)){if(u=f[1],l=f[2],"else"===u)continue;d=wt(n,"directives",u,!0),d&&i(u,d)}return m.length?cn(m):void 0}function an(t){var e=Object.create(null),n=t.match(Kr);if(n)for(var i=n.length;i--;)e[n[i].slice(1)]=!0;return e}function cn(t){return function(e,n,i,o,r){for(var s=t.length;s--;)e._bindDir(t[s],n,i,o,r)}}function un(t){for(var e=t.length;e--;)if(t[e].oneTime)return!0}function ln(t){return"SCRIPT"===t.tagName&&(!t.hasAttribute("type")||"text/javascript"===t.getAttribute("type"))}function hn(t,e){return e&&(e._containerAttrs=pn(t)),rt(t)&&(t=te(t)),e&&(e._asComponent&&!e.template&&(e.template="<slot></slot>"),e.template&&(e._content=nt(t),t=dn(t,e))),lt(t)&&(X(st("v-start",!0),t),t.appendChild(st("v-end",!0))),t}function dn(e,n){var i=n.template,o=te(i,!0);if(o){var r=o.firstChild,s=r.tagName&&r.tagName.toLowerCase();return n.replace?(e===document.body&&"production"!==t.env.NODE_ENV&&Di("You are mounting an instance with a template to <body>. This will replace <body> entirely. You should probably use `replace: false` here."),o.childNodes.length>1||1!==r.nodeType||"component"===s||wt(n,"components",s)||V(r,"is")||wt(n,"elementDirectives",s)||r.hasAttribute("v-for")||r.hasAttribute("v-if")?o:(n._replacerAttrs=pn(r),fn(e,r),r)):(e.appendChild(o),e)}"production"!==t.env.NODE_ENV&&Di("Invalid template option: "+i)}function pn(t){return 1===t.nodeType&&t.hasAttributes()?g(t.attributes):void 0}function fn(t,e){for(var n,i,o=t.attributes,r=o.length;r--;)n=o[r].name,i=o[r].value,e.hasAttribute(n)||ns.test(n)?"class"===n&&!D(i)&&(i=i.trim())&&i.split(/\s+/).forEach(function(t){tt(e,t)}):e.setAttribute(n,i)}function vn(e,n){if(n){for(var i,o,r=e._slotContents=Object.create(null),s=0,a=n.children.length;a>s;s++)i=n.children[s],(o=i.getAttribute("slot"))&&(r[o]||(r[o]=[])).push(i),"production"!==t.env.NODE_ENV&&U(i,"slot")&&Di('The "slot" attribute must be static.',e.$parent);for(o in r)r[o]=mn(r[o],n);if(n.hasChildNodes()){var c=n.childNodes;if(1===c.length&&3===c[0].nodeType&&!c[0].data.trim())return;r["default"]=mn(n.childNodes,n)}}}function mn(t,e){var n=document.createDocumentFragment();t=g(t);for(var i=0,o=t.length;o>i;i++){var r=t[i];!rt(r)||r.hasAttribute("v-if")||r.hasAttribute("v-for")||(e.removeChild(r),r=te(r,!0)),n.appendChild(r)}return n}function gn(e){function n(){}function i(t,e){var n=new Xt(e,t,null,{lazy:!0});return function(){return n.dirty&&n.evaluate(),_t.target&&n.depend(),n.value}}Object.defineProperty(e.prototype,"$data",{get:function(){return this._data},set:function(t){t!==this._data&&this._setData(t)}}),e.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},e.prototype._initProps=function(){var e=this.$options,n=e.el,i=e.props;i&&!n&&"production"!==t.env.NODE_ENV&&Di("Props will not be compiled if no `el` option is provided at instantiation.",this),n=e.el=q(n),this._propsUnlinkFn=n&&1===n.nodeType&&i?Ve(this,n,i,this._scope):null},e.prototype._initData=function(){var e=this.$options.data,n=this._data=e?e():{};w(n)||(n={},"production"!==t.env.NODE_ENV&&Di("data functions should return an object.",this));var i,o,s=this._props,a=Object.keys(n);for(i=a.length;i--;)o=a[i],s&&r(s,o)?"production"!==t.env.NODE_ENV&&Di('Data field "'+o+'" is already defined as a prop. To provide default value for a prop, use the "default" prop option; if you want to pass prop values to an instantiation call, use the "propsData" option.',this):this._proxy(o);Et(n,this)},e.prototype._setData=function(t){t=t||{};var e=this._data;this._data=t;var n,i,o;for(n=Object.keys(e),o=n.length;o--;)i=n[o],i in t||this._unproxy(i);for(n=Object.keys(t),o=n.length;o--;)i=n[o],r(this,i)||this._proxy(i);e.__ob__.removeVm(this),Et(t,this),this._digest()},e.prototype._proxy=function(t){if(!a(t)){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}},e.prototype._unproxy=function(t){a(t)||delete this[t]},e.prototype._digest=function(){for(var t=0,e=this._watchers.length;e>t;t++)this._watchers[t].update(!0)},e.prototype._initComputed=function(){var t=this.$options.computed;if(t)for(var e in t){var o=t[e],r={enumerable:!0,configurable:!0};"function"==typeof o?(r.get=i(o,this),r.set=n):(r.get=o.get?o.cache!==!1?i(o.get,this):m(o.get,this):n,r.set=o.set?m(o.set,this):n),Object.defineProperty(this,e,r)}},e.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=m(t[e],this)},e.prototype._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)St(this,e,t[e])}}function yn(e){function n(t,e){for(var n,i,o,r=e.attributes,s=0,a=r.length;a>s;s++)n=r[s].name,os.test(n)&&(n=n.replace(os,""),i=r[s].value,Ut(i)&&(i+=".apply(this, $arguments)"),o=(t._scope||t._context).$eval(i,!0),o._fromParent=!0,t.$on(n.replace(os),o))}function i(t,e,n){if(n){var i,r,s,a;for(r in n)if(i=n[r],qn(i))for(s=0,a=i.length;a>s;s++)o(t,e,r,i[s]);else o(t,e,r,i)}}function o(e,n,i,r,s){var a=typeof r;if("function"===a)e[n](i,r,s);else if("string"===a){var c=e.$options.methods,u=c&&c[r];u?e[n](i,u,s):"production"!==t.env.NODE_ENV&&Di('Unknown method: "'+r+'" when registering callback for '+n+': "'+i+'".',e)}else r&&"object"===a&&o(e,n,i,r.handler,r)}function r(){this._isAttached||(this._isAttached=!0,this.$children.forEach(s))}function s(t){!t._isAttached&&F(t.$el)&&t._callHook("attached")}function a(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(c))}function c(t){t._isAttached&&!F(t.$el)&&t._callHook("detached")}e.prototype._initEvents=function(){var t=this.$options;t._asComponent&&n(this,t.el),i(this,"$on",t.events),i(this,"$watch",t.watch)},e.prototype._initDOMHooks=function(){this.$on("hook:attached",r),this.$on("hook:detached",a)},e.prototype._callHook=function(t){this.$emit("pre-hook:"+t);var e=this.$options[t];if(e)for(var n=0,i=e.length;i>n;n++)e[n].call(this);this.$emit("hook:"+t)}}function bn(){}function wn(e,n,i,o,r,s){this.vm=n,this.el=i,this.descriptor=e,this.name=e.name,this.expression=e.expression,this.arg=e.arg,this.modifiers=e.modifiers,this.filters=e.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=o,this._scope=r,this._frag=s,"production"!==t.env.NODE_ENV&&this.el&&(this.el._vue_directives=this.el._vue_directives||[],this.el._vue_directives.push(this))}function _n(t){t.prototype._updateRef=function(t){var e=this.$options._ref;if(e){var n=(this._scope||this._context).$refs;t?n[e]===this&&(n[e]=null):n[e]=this}},t.prototype._compile=function(t){var e=this.$options,n=t;if(t=hn(t,e),this._initElement(t),1!==t.nodeType||null===B(t,"v-pre")){var i=this._context&&this._context.$options,o=We(t,e,i);vn(this,e._content);var r,s=this.constructor;e._linkerCachable&&(r=s.linker,r||(r=s.linker=He(t,e)));var a=o(this,t,this._scope),c=r?r(this,t):He(t,e)(this,t);this._unlinkFn=function(){a(),c(!0)},e.replace&&J(n,t),this._isCompiled=!0,this._callHook("compiled")}},t.prototype._initElement=function(t){lt(t)?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},t.prototype._bindDir=function(t,e,n,i,o){this._directives.push(new wn(t,this,e,n,i,o))},t.prototype._destroy=function(t,e){if(this._isBeingDestroyed)return void(e||this._cleanup());var n,i,o=this,r=function(){!n||i||e||o._cleanup()};t&&this.$el&&(i=!0,this.$remove(function(){i=!1,r()})),this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var s,a=this.$parent;for(a&&!a._isBeingDestroyed&&(a.$children.$remove(this),this._updateRef(!0)),s=this.$children.length;s--;)this.$children[s].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),s=this._watchers.length;s--;)this._watchers[s].teardown();this.$el&&(this.$el.__vue__=null),n=!0,r()},t.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data&&this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function xn(e){e.prototype._applyFilters=function(t,e,n,i){var o,r,s,a,c,u,l,h,d;for(u=0,l=n.length;l>u;u++)if(o=n[i?l-u-1:u],r=wt(this.$options,"filters",o.name,!0),r&&(r=i?r.write:r.read||r,"function"==typeof r)){if(s=i?[t,e]:[t],c=i?2:1,o.args)for(h=0,d=o.args.length;d>h;h++)a=o.args[h],s[h+c]=a.dynamic?this.$get(a.value):a.value;t=r.apply(this,s)}return t},e.prototype._resolveComponent=function(n,i){var o;if(o="function"==typeof n?n:wt(this.$options,"components",n,!0))if(o.options)i(o);else if(o.resolved)i(o.resolved);else if(o.requested)o.pendingCallbacks.push(i);else{o.requested=!0;var r=o.pendingCallbacks=[i];o.call(this,function(t){w(t)&&(t=e.extend(t)),o.resolved=t;for(var n=0,i=r.length;i>n;n++)r[n](t)},function(e){"production"!==t.env.NODE_ENV&&Di("Failed to resolve async component"+("string"==typeof n?": "+n:"")+". "+(e?"\nReason: "+e:""))})}}}function Cn(t){function e(t){return JSON.parse(JSON.stringify(t))}t.prototype.$get=function(t,e){var n=Bt(t);if(n){if(e){var i=this;return function(){i.$arguments=g(arguments);var t=n.get.call(i,i);return i.$arguments=null,t}}try{return n.get.call(this,this)}catch(o){}}},t.prototype.$set=function(t,e){var n=Bt(t,!0);n&&n.set&&n.set.call(this,this,e)},t.prototype.$delete=function(t){o(this._data,t)},t.prototype.$watch=function(t,e,n){var i,o=this;"string"==typeof t&&(i=N(t),t=i.expression);var r=new Xt(o,t,e,{deep:n&&n.deep,sync:n&&n.sync,filters:i&&i.filters,user:!n||n.user!==!1});return n&&n.immediate&&e.call(o,r.value),function(){r.teardown()}},t.prototype.$eval=function(t,e){if(rs.test(t)){var n=N(t),i=this.$get(n.expression,e);return n.filters?this._applyFilters(i,null,n.filters):i}return this.$get(t,e)},t.prototype.$interpolate=function(t){var e=D(t),n=this;return e?1===e.length?n.$eval(e[0].value)+"":e.map(function(t){return t.tag?n.$eval(t.value):t.value}).join(""):t},t.prototype.$log=function(t){var n=t?jt(this._data,t):this._data;if(n&&(n=e(n)),!t){var i;for(i in this.$options.computed)n[i]=e(this[i]);if(this._props)for(i in this._props)n[i]=e(this[i])}}}function kn(t){function e(t,e,i,o,r,s){e=n(e);var a=!F(e),c=o===!1||a?r:s,u=!a&&!t._isAttached&&!F(t.$el);return t._isFragment?(ct(t._fragmentStart,t._fragmentEnd,function(n){c(n,e,t)}),i&&i()):c(t.$el,e,t,i),u&&t._callHook("attached"),t}function n(t){return"string"==typeof t?document.querySelector(t):t}function i(t,e,n,i){e.appendChild(t),i&&i()}function o(t,e,n,i){W(t,e),i&&i()}function r(t,e,n){Q(t),n&&n()}t.prototype.$nextTick=function(t){oi(t,this)},t.prototype.$appendTo=function(t,n,o){return e(this,t,n,o,i,M)},t.prototype.$prependTo=function(t,e,i){return t=n(t),t.hasChildNodes()?this.$before(t.firstChild,e,i):this.$appendTo(t,e,i),this},t.prototype.$before=function(t,n,i){return e(this,t,n,i,o,L)},t.prototype.$after=function(t,e,i){return t=n(t),t.nextSibling?this.$before(t.nextSibling,e,i):this.$appendTo(t.parentNode,e,i),this},t.prototype.$remove=function(t,e){if(!this.$el.parentNode)return t&&t();var n=this._isAttached&&F(this.$el);n||(e=!1);var i=this,o=function(){n&&i._callHook("detached"),t&&t()};if(this._isFragment)ut(this._fragmentStart,this._fragmentEnd,this,this._fragment,o);else{var s=e===!1?r:R;s(this.$el,this,o)}return this}}function Tn(t){function e(t,e,i){var o=t.$parent;if(o&&i&&!n.test(e))for(;o;)o._eventsCount[e]=(o._eventsCount[e]||0)+i,o=o.$parent}t.prototype.$on=function(t,n){return(this._events[t]||(this._events[t]=[])).push(n),e(this,t,1),this},t.prototype.$once=function(t,e){function n(){i.$off(t,n),e.apply(this,arguments)}var i=this;return n.fn=e,this.$on(t,n),this},t.prototype.$off=function(t,n){var i;if(!arguments.length){if(this.$parent)for(t in this._events)i=this._events[t],i&&e(this,t,-i.length);return this._events={},this}if(i=this._events[t],!i)return this;if(1===arguments.length)return e(this,t,-i.length),this._events[t]=null,this;for(var o,r=i.length;r--;)if(o=i[r],o===n||o.fn===n){e(this,t,-1),i.splice(r,1);break}return this},t.prototype.$emit=function(t){var e="string"==typeof t;t=e?t:t.name;var n=this._events[t],i=e||!n;if(n){n=n.length>1?g(n):n;var o=e&&n.some(function(t){return t._fromParent});o&&(i=!1);for(var r=g(arguments,1),s=0,a=n.length;a>s;s++){var c=n[s],u=c.apply(this,r);u!==!0||o&&!c._fromParent||(i=!0)}}return i},t.prototype.$broadcast=function(t){var e="string"==typeof t;if(t=e?t:t.name,this._eventsCount[t]){var n=this.$children,i=g(arguments);e&&(i[0]={name:t,source:this});for(var o=0,r=n.length;r>o;o++){var s=n[o],a=s.$emit.apply(s,i);a&&s.$broadcast.apply(s,i)}return this}},t.prototype.$dispatch=function(t){var e=this.$emit.apply(this,arguments);if(e){var n=this.$parent,i=g(arguments);for(i[0]={name:t,source:this};n;)e=n.$emit.apply(n,i),n=e?n.$parent:null;return this}};var n=/^hook:/}function En(e){function n(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}e.prototype.$mount=function(e){return this._isCompiled?void("production"!==t.env.NODE_ENV&&Di("$mount() should be called only once.",this)):(e=q(e),e||(e=document.createElement("div")),this._compile(e),this._initDOMHooks(),F(this.$el)?(this._callHook("attached"),n.call(this)):this.$once("hook:attached",n),this)},e.prototype.$destroy=function(t,e){this._destroy(t,e)},e.prototype.$compile=function(t,e,n,i){return He(t,this.$options,!0)(this,t,e,n,i)}}function Sn(t){this._init(t)}function On(t,e,n){return n=n?parseInt(n,10):0,e=u(e),"number"==typeof e?t.slice(n,n+e):t}function Nn(t,e,n){if(t=us(t),null==e)return t;if("function"==typeof e)return t.filter(e);e=(""+e).toLowerCase();for(var i,o,r,s,a="in"===n?3:2,c=Array.prototype.concat.apply([],g(arguments,a)),u=[],l=0,h=t.length;h>l;l++)if(i=t[l],r=i&&i.$value||i,s=c.length){for(;s--;)if(o=c[s],"$key"===o&&An(i.$key,e)||An(jt(r,o),e)){u.push(i);break}}else An(i,e)&&u.push(i);return u}function $n(t){function e(t,e,n){var o=i[n];return o&&("$key"!==o&&(b(t)&&"$value"in t&&(t=t.$value),b(e)&&"$value"in e&&(e=e.$value)),t=b(t)?jt(t,o):t,e=b(e)?jt(e,o):e),t===e?0:t>e?r:-r}var n=null,i=void 0;t=us(t);var o=g(arguments,1),r=o[o.length-1];"number"==typeof r?(r=0>r?-1:1,o=o.length>1?o.slice(0,-1):o):r=1;var s=o[0];return s?("function"==typeof s?n=function(t,e){return s(t,e)*r}:(i=Array.prototype.concat.apply([],o),n=function(t,o,r){return r=r||0,r>=i.length-1?e(t,o,r):e(t,o,r)||n(t,o,r+1)}),t.slice().sort(n)):t}function An(t,e){var n;if(w(t)){var i=Object.keys(t);for(n=i.length;n--;)if(An(t[i[n]],e))return!0}else if(qn(t)){for(n=t.length;n--;)if(An(t[n],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}function Dn(e){function n(t){return new Function("return function "+v(t)+" (options) { this._init(options) }")()}e.options={directives:Nr,elementDirectives:cs,filters:hs,transitions:{},components:{},partials:{},replace:!0},e.util=zi,e.config=Ai,e.set=i,e["delete"]=o,e.nextTick=oi,e.compiler=is,e.FragmentFactory=ce,e.internalDirectives=Xr,e.parsers={path:lo,text:Oi,template:Bo,directive:xi,expression:To},e.cid=0;var r=1;e.extend=function(e){e=e||{};var i=this,o=0===i.cid;if(o&&e._Ctor)return e._Ctor;var s=e.name||i.options.name;"production"!==t.env.NODE_ENV&&(/^[a-zA-Z][\w-]*$/.test(s)||(Di('Invalid component name: "'+s+'". Component names can only contain alphanumeric characaters and the hyphen.'),s=null));var a=n(s||"VueComponent");return a.prototype=Object.create(i.prototype),a.prototype.constructor=a,a.cid=r++,a.options=bt(i.options,e),a["super"]=i,a.extend=i.extend,Ai._assetTypes.forEach(function(t){a[t]=i[t]}),s&&(a.options.components[s]=a),o&&(e._Ctor=a),a},e.use=function(t){if(!t.installed){var e=g(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),t.installed=!0,this}},e.mixin=function(t){e.options=bt(e.options,t)},Ai._assetTypes.forEach(function(n){e[n]=function(i,o){return o?("production"!==t.env.NODE_ENV&&"component"===n&&(Mi.test(i)||Li.test(i))&&Di("Do not use built-in or reserved HTML elements as component id: "+i),"component"===n&&w(o)&&(o.name||(o.name=i),o=e.extend(o)),this.options[n+"s"][i]=o,o):this.options[n+"s"][i]}}),y(e.transition,Ii)}var jn=Object.prototype.hasOwnProperty,In=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,Pn=/-(\w)/g,Mn=/([a-z\d])([A-Z])/g,Ln=/(?:^|[-_\/])(\w)/g,Rn=Object.prototype.toString,Hn="[object Object]",qn=Array.isArray,Fn="__proto__"in{},Bn="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),Un=Bn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Vn=Bn&&window.navigator.userAgent.toLowerCase(),Wn=Vn&&Vn.indexOf("trident")>0,zn=Vn&&Vn.indexOf("msie 9.0")>0,Qn=Vn&&Vn.indexOf("android")>0,Xn=Vn&&/(iphone|ipad|ipod|ios)/i.test(Vn),Jn=Xn&&Vn.match(/os ([\d_]+)/),Yn=Jn&&Jn[1].split("_"),Gn=Yn&&Number(Yn[0])>=9&&Number(Yn[1])>=3&&!window.indexedDB,Kn=void 0,Zn=void 0,ti=void 0,ei=void 0;if(Bn&&!zn){var ni=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,ii=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;Kn=ni?"WebkitTransition":"transition",Zn=ni?"webkitTransitionEnd":"transitionend",ti=ii?"WebkitAnimation":"animation",ei=ii?"webkitAnimationEnd":"animationend"}var oi=function(){function t(){o=!1;var t=i.slice(0);i=[];for(var e=0;e<t.length;e++)t[e]()}var e,i=[],o=!1;if("undefined"==typeof MutationObserver||Gn){var r=Bn?window:"undefined"!=typeof n?n:{};e=r.setImmediate||setTimeout}else{var s=1,a=new MutationObserver(t),c=document.createTextNode(s);a.observe(c,{characterData:!0}),e=function(){s=(s+1)%2,c.data=s}}return function(n,r){var s=r?function(){n.call(r)}:n;i.push(s),o||(o=!0,e(t,0))}}(),ri=void 0;"undefined"!=typeof Set&&Set.toString().match(/native code/)?ri=Set:(ri=function(){this.set=Object.create(null)},ri.prototype.has=function(t){return void 0!==this.set[t]},ri.prototype.add=function(t){this.set[t]=1},ri.prototype.clear=function(){this.set=Object.create(null)});var si=E.prototype;si.put=function(t,e){var n,i=this.get(t,!0);return i||(this.size===this.limit&&(n=this.shift()),i={key:t},this._keymap[t]=i,this.tail?(this.tail.newer=i,i.older=this.tail):this.head=i,this.tail=i,this.size++),i.value=e,n},si.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0,this.size--),t},si.get=function(t,e){var n=this._keymap[t];return void 0!==n?n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value):void 0};var ai,ci,ui,li,hi,di,pi,fi,vi,mi,gi,yi,bi=new E(1e3),wi=/[^\s'"]+|'[^']*'|"[^"]*"/g,_i=/^in$|^-?\d+/,xi=Object.freeze({parseDirective:N}),Ci=/[-.*+?^${}()|[\]\/\\]/g,ki=void 0,Ti=void 0,Ei=void 0,Si=/[^|]\|[^|]/,Oi=Object.freeze({compileRegex:A,parseText:D,tokensToExp:j}),Ni=["{{","}}"],$i=["{{{","}}}"],Ai=Object.defineProperties({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,devtools:"production"!==t.env.NODE_ENV,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function(){return Ni},set:function(t){Ni=t,A()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function(){return $i},set:function(t){$i=t,A()},configurable:!0,enumerable:!0}}),Di=void 0,ji=void 0;"production"!==t.env.NODE_ENV&&!function(){var t="undefined"!=typeof console;Di=function(e,n){t&&!Ai.silent&&void 0},ji=function(t){var e=t._isVue?t.$options.name:t.name;return e?" (found in component: <"+f(e)+">)":""}}();var Ii=Object.freeze({appendWithTransition:M,beforeWithTransition:L,removeWithTransition:R,applyTransition:H}),Pi=/^v-ref:/,Mi=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,Li=/^(slot|partial|component)$/i,Ri=void 0;"production"!==t.env.NODE_ENV&&(Ri=function(t,e){return e.indexOf("-")>-1?t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:/HTMLUnknownElement/.test(t.toString())&&!/^(data|time|rtc|rb|details|dialog|summary)$/.test(e)});var Hi=Ai.optionMergeStrategies=Object.create(null);Hi.data=function(e,n,i){return i?e||n?function(){var t="function"==typeof n?n.call(i):n,o="function"==typeof e?e.call(i):void 0;return t?ft(t,o):o}:void 0:n?"function"!=typeof n?("production"!==t.env.NODE_ENV&&Di('The "data" option should be a function that returns a per-instance value in component definitions.',i),e):e?function(){return ft(n.call(this),e.call(this))}:n:e},Hi.el=function(e,n,i){if(!i&&n&&"function"!=typeof n)return void("production"!==t.env.NODE_ENV&&Di('The "el" option should be a function that returns a per-instance value in component definitions.',i));var o=n||e;return i&&"function"==typeof o?o.call(i):o},Hi.init=Hi.created=Hi.ready=Hi.attached=Hi.detached=Hi.beforeCompile=Hi.compiled=Hi.beforeDestroy=Hi.destroyed=Hi.activate=function(t,e){return e?t?t.concat(e):qn(e)?e:[e]:t},Ai._assetTypes.forEach(function(t){Hi[t+"s"]=vt}),Hi.watch=Hi.events=function(t,e){if(!e)return t;if(!t)return e;var n={};y(n,t);for(var i in e){var o=n[i],r=e[i];o&&!qn(o)&&(o=[o]),n[i]=o?o.concat(r):[r]}return n},Hi.props=Hi.methods=Hi.computed=function(t,e){if(!e)return t;if(!t)return e;var n=Object.create(null);return y(n,t),y(n,e),n};var qi=function(t,e){return void 0===e?t:e},Fi=0;_t.target=null,_t.prototype.addSub=function(t){this.subs.push(t)},_t.prototype.removeSub=function(t){this.subs.$remove(t)},_t.prototype.depend=function(){_t.target.addDep(this)},_t.prototype.notify=function(){for(var t=g(this.subs),e=0,n=t.length;n>e;e++)t[e].update()};var Bi=Array.prototype,Ui=Object.create(Bi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Bi[t];_(Ui,t,function(){for(var n=arguments.length,i=new Array(n);n--;)i[n]=arguments[n];var o,r=e.apply(this,i),s=this.__ob__;switch(t){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),r})}),_(Bi,"$set",function(t,e){return t>=this.length&&(this.length=Number(t)+1),this.splice(t,1,e)[0]}),_(Bi,"$remove",function(t){if(this.length){var e=C(this,t);return e>-1?this.splice(e,1):void 0}});var Vi=Object.getOwnPropertyNames(Ui),Wi=!0;Ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0,i=e.length;i>n;n++)this.convert(e[n],t[e[n]])},Ct.prototype.observeArray=function(t){for(var e=0,n=t.length;n>e;e++)Et(t[e])},Ct.prototype.convert=function(t,e){St(this.value,t,e)},Ct.prototype.addVm=function(t){(this.vms||(this.vms=[])).push(t)},Ct.prototype.removeVm=function(t){this.vms.$remove(t)};var zi=Object.freeze({defineReactive:St,set:i,del:o,hasOwn:r,isLiteral:s,isReserved:a,_toString:c,toNumber:u,toBoolean:l,stripQuotes:h,camelize:d,hyphenate:f,classify:v,bind:m,toArray:g,extend:y,isObject:b,isPlainObject:w,def:_,debounce:x,indexOf:C,cancellable:k,looseEqual:T,isArray:qn,hasProto:Fn,inBrowser:Bn,devtools:Un,isIE:Wn,isIE9:zn,isAndroid:Qn,isIos:Xn,iosVersionMatch:Jn,iosVersion:Yn,hasMutationObserverBug:Gn,
get transitionProp(){return Kn},get transitionEndEvent(){return Zn},get animationProp(){return ti},get animationEndEvent(){return ei},nextTick:oi,get _Set(){return ri},query:q,inDoc:F,getAttr:B,getBindAttr:U,hasBindAttr:V,before:W,after:z,remove:Q,prepend:X,replace:J,on:Y,off:G,setClass:Z,addClass:tt,removeClass:et,extractContent:nt,trimNode:it,isTemplate:rt,createAnchor:st,findRef:at,mapNodeRange:ct,removeNodeRange:ut,isFragment:lt,getOuterHTML:ht,mergeOptions:bt,resolveAsset:wt,checkComponentAttr:dt,commonTagRE:Mi,reservedTagRE:Li,get warn(){return Di}}),Qi=0,Xi=new E(1e3),Ji=0,Yi=1,Gi=2,Ki=3,Zi=0,to=1,eo=2,no=3,io=4,oo=5,ro=6,so=7,ao=8,co=[];co[Zi]={ws:[Zi],ident:[no,Ji],"[":[io],eof:[so]},co[to]={ws:[to],".":[eo],"[":[io],eof:[so]},co[eo]={ws:[eo],ident:[no,Ji]},co[no]={ident:[no,Ji],0:[no,Ji],number:[no,Ji],ws:[to,Yi],".":[eo,Yi],"[":[io,Yi],eof:[so,Yi]},co[io]={"'":[oo,Ji],'"':[ro,Ji],"[":[io,Gi],"]":[to,Ki],eof:ao,"else":[io,Ji]},co[oo]={"'":[io,Ji],eof:ao,"else":[oo,Ji]},co[ro]={'"':[io,Ji],eof:ao,"else":[ro,Ji]};var uo;"production"!==t.env.NODE_ENV&&(uo=function(t,e){Di('You are setting a non-existent path "'+t.raw+'" on a vm instance. Consider pre-initializing the property with the "data" option for more reliable reactivity and better performance.',e)});var lo=Object.freeze({parsePath:Dt,getPath:jt,setPath:It}),ho=new E(1e3),po="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",fo=new RegExp("^("+po.replace(/,/g,"\\b|")+"\\b)"),vo="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",mo=new RegExp("^("+vo.replace(/,/g,"\\b|")+"\\b)"),go=/\s/g,yo=/\n/g,bo=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,wo=/"(\d+)"/g,_o=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,xo=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g,Co=/^(?:true|false|null|undefined|Infinity|NaN)$/,ko=[],To=Object.freeze({parseExpression:Bt,isSimplePath:Ut}),Eo=[],So=[],Oo={},No={},$o=!1,Ao=0;Xt.prototype.get=function(){this.beforeGet();var e,n=this.scope||this.vm;try{e=this.getter.call(n,n)}catch(i){"production"!==t.env.NODE_ENV&&Ai.warnExpressionErrors&&Di('Error when evaluating expression "'+this.expression+'": '+i.toString(),this.vm)}return this.deep&&Jt(e),this.preProcess&&(e=this.preProcess(e)),this.filters&&(e=n._applyFilters(e,null,this.filters,!1)),this.postProcess&&(e=this.postProcess(e)),this.afterGet(),e},Xt.prototype.set=function(e){var n=this.scope||this.vm;this.filters&&(e=n._applyFilters(e,this.value,this.filters,!0));try{this.setter.call(n,n,e)}catch(i){"production"!==t.env.NODE_ENV&&Ai.warnExpressionErrors&&Di('Error when evaluating setter "'+this.expression+'": '+i.toString(),this.vm)}var o=n.$forContext;if(o&&o.alias===this.expression){if(o.filters)return void("production"!==t.env.NODE_ENV&&Di("It seems you are using two-way binding on a v-for alias ("+this.expression+"), and the v-for has filters. This will not work properly. Either remove the filters or use an array of objects and bind to object properties instead.",this.vm));o._withLock(function(){n.$key?o.rawValue[n.$key]=e:o.rawValue.$set(n.$index,e)})}},Xt.prototype.beforeGet=function(){_t.target=this},Xt.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xt.prototype.afterGet=function(){_t.target=null;for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xt.prototype.update=function(e){this.lazy?this.dirty=!0:this.sync||!Ai.async?this.run():(this.shallow=this.queued?e?this.shallow:!1:!!e,this.queued=!0,"production"!==t.env.NODE_ENV&&Ai.debug&&(this.prevError=new Error("[vue] async stack trace")),Qt(this))},Xt.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||(b(e)||this.deep)&&!this.shallow){var n=this.value;this.value=e;var i=this.prevError;if("production"!==t.env.NODE_ENV&&Ai.debug&&i){this.prevError=null;try{this.cb.call(this.vm,e,n)}catch(o){throw oi(function(){throw i},0),o}}else this.cb.call(this.vm,e,n)}this.queued=this.shallow=!1}},Xt.prototype.evaluate=function(){var t=_t.target;this.value=this.get(),this.dirty=!1,_t.target=t},Xt.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Xt.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||this.vm._watchers.$remove(this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}};var Do=new ri,jo={bind:function(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function(t){this.el[this.attr]=c(t)}},Io=new E(1e3),Po=new E(1e3),Mo={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Mo.td=Mo.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Mo.option=Mo.optgroup=[1,'<select multiple="multiple">',"</select>"],Mo.thead=Mo.tbody=Mo.colgroup=Mo.caption=Mo.tfoot=[1,"<table>","</table>"],Mo.g=Mo.defs=Mo.symbol=Mo.use=Mo.image=Mo.text=Mo.circle=Mo.ellipse=Mo.line=Mo.path=Mo.polygon=Mo.polyline=Mo.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var Lo=/<([\w:-]+)/,Ro=/&#?\w+?;/,Ho=/<!--/,qo=function(){if(Bn){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}return!1}(),Fo=function(){if(Bn){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}return!1}(),Bo=Object.freeze({cloneNode:Zt,parseTemplate:te}),Uo={bind:function(){8===this.el.nodeType&&(this.nodes=[],this.anchor=st("v-html"),J(this.el,this.anchor))},update:function(t){t=c(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)Q(this.nodes[e]);var n=te(t,!0,!0);this.nodes=g(n.childNodes),W(n,this.anchor)}};ee.prototype.callHook=function(t){var e,n;for(e=0,n=this.childFrags.length;n>e;e++)this.childFrags[e].callHook(t);for(e=0,n=this.children.length;n>e;e++)t(this.children[e])},ee.prototype.beforeRemove=function(){var t,e;for(t=0,e=this.childFrags.length;e>t;t++)this.childFrags[t].beforeRemove(!1);for(t=0,e=this.children.length;e>t;t++)this.children[t].$destroy(!1,!0);var n=this.unlink.dirs;for(t=0,e=n.length;e>t;t++)n[t]._watcher&&n[t]._watcher.teardown()},ee.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.node.__v_frag=null,this.unlink()};var Vo=new E(5e3);ce.prototype.create=function(t,e,n){var i=Zt(this.template);return new ee(this.linker,this.vm,i,t,e,n)};var Wo=700,zo=800,Qo=850,Xo=1100,Jo=1500,Yo=1500,Go=1750,Ko=2100,Zo=2200,tr=2300,er=0,nr={priority:Zo,terminal:!0,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function(){var e=this.expression.match(/(.*) (?:in|of) (.*)/);if(e){var n=e[1].match(/\((.*),(.*)\)/);n?(this.iterator=n[1].trim(),this.alias=n[2].trim()):this.alias=e[1].trim(),this.expression=e[2]}if(!this.alias)return void("production"!==t.env.NODE_ENV&&Di('Invalid v-for expression "'+this.descriptor.raw+'": alias is required.',this.vm));this.id="__v-for__"+ ++er;var i=this.el.tagName;this.isOption=("OPTION"===i||"OPTGROUP"===i)&&"SELECT"===this.el.parentNode.tagName,this.start=st("v-for-start"),this.end=st("v-for-end"),J(this.el,this.end),W(this.start,this.end),this.cache=Object.create(null),this.factory=new ce(this.vm,this.el)},update:function(t){this.diff(t),this.updateRef(),this.updateModel()},diff:function(t){var e,n,i,o,s,a,c=t[0],u=this.fromObject=b(c)&&r(c,"$key")&&r(c,"$value"),l=this.params.trackBy,h=this.frags,d=this.frags=new Array(t.length),p=this.alias,f=this.iterator,v=this.start,m=this.end,g=F(v),y=!h;for(e=0,n=t.length;n>e;e++)c=t[e],o=u?c.$key:null,s=u?c.$value:c,a=!b(s),i=!y&&this.getCachedFrag(s,e,o),i?(i.reused=!0,i.scope.$index=e,o&&(i.scope.$key=o),f&&(i.scope[f]=null!==o?o:e),(l||u||a)&&xt(function(){i.scope[p]=s})):(i=this.create(s,p,e,o),i.fresh=!y),d[e]=i,y&&i.before(m);if(!y){var w=0,_=h.length-d.length;for(this.vm._vForRemoving=!0,e=0,n=h.length;n>e;e++)i=h[e],i.reused||(this.deleteCachedFrag(i),this.remove(i,w++,_,g));this.vm._vForRemoving=!1,w&&(this.vm._watchers=this.vm._watchers.filter(function(t){return t.active}));var x,C,k,T=0;for(e=0,n=d.length;n>e;e++)i=d[e],x=d[e-1],C=x?x.staggerCb?x.staggerAnchor:x.end||x.node:v,i.reused&&!i.staggerCb?(k=ue(i,v,this.id),k===x||k&&ue(k,v,this.id)===x||this.move(i,C)):this.insert(i,T++,C,g),i.reused=i.fresh=!1}},create:function(t,e,n,i){var o=this._host,r=this._scope||this.vm,s=Object.create(r);s.$refs=Object.create(r.$refs),s.$els=Object.create(r.$els),s.$parent=r,s.$forContext=this,xt(function(){St(s,e,t)}),St(s,"$index",n),i?St(s,"$key",i):s.$key&&_(s,"$key",null),this.iterator&&St(s,this.iterator,null!==i?i:n);var a=this.factory.create(o,s,this._frag);return a.forId=this.id,this.cacheFrag(t,a,n,i),a},updateRef:function(){var t=this.descriptor.ref;if(t){var e,n=(this._scope||this.vm).$refs;this.fromObject?(e={},this.frags.forEach(function(t){e[t.scope.$key]=le(t)})):e=this.frags.map(le),n[t]=e}},updateModel:function(){if(this.isOption){var t=this.start.parentNode,e=t&&t.__v_model;e&&e.forceUpdate()}},insert:function(t,e,n,i){t.staggerCb&&(t.staggerCb.cancel(),t.staggerCb=null);var o=this.getStagger(t,e,null,"enter");if(i&&o){var r=t.staggerAnchor;r||(r=t.staggerAnchor=st("stagger-anchor"),r.__v_frag=t),z(r,n);var s=t.staggerCb=k(function(){t.staggerCb=null,t.before(r),Q(r)});setTimeout(s,o)}else{var a=n.nextSibling;a||(z(this.end,n),a=this.end),t.before(a)}},remove:function(t,e,n,i){if(t.staggerCb)return t.staggerCb.cancel(),void(t.staggerCb=null);var o=this.getStagger(t,e,n,"leave");if(i&&o){var r=t.staggerCb=k(function(){t.staggerCb=null,t.remove()});setTimeout(r,o)}else t.remove()},move:function(t,e){e.nextSibling||this.end.parentNode.appendChild(this.end),t.before(e.nextSibling,!1)},cacheFrag:function(e,n,i,o){var s,a=this.params.trackBy,c=this.cache,u=!b(e);o||a||u?(s=de(i,o,e,a),c[s]?"$index"!==a&&"production"!==t.env.NODE_ENV&&this.warnDuplicate(e):c[s]=n):(s=this.id,r(e,s)?null===e[s]?e[s]=n:"production"!==t.env.NODE_ENV&&this.warnDuplicate(e):Object.isExtensible(e)?_(e,s,n):"production"!==t.env.NODE_ENV&&Di("Frozen v-for objects cannot be automatically tracked, make sure to provide a track-by key.")),n.raw=e},getCachedFrag:function(e,n,i){var o,r=this.params.trackBy,s=!b(e);if(i||r||s){var a=de(n,i,e,r);o=this.cache[a]}else o=e[this.id];return o&&(o.reused||o.fresh)&&"production"!==t.env.NODE_ENV&&this.warnDuplicate(e),o},deleteCachedFrag:function(t){var e=t.raw,n=this.params.trackBy,i=t.scope,o=i.$index,s=r(i,"$key")&&i.$key,a=!b(e);if(n||s||a){var c=de(o,s,e,n);this.cache[c]=null}else e[this.id]=null,t.raw=null},getStagger:function(t,e,n,i){i+="Stagger";var o=t.node.__v_trans,r=o&&o.hooks,s=r&&(r[i]||r.stagger);return s?s.call(t,e,n):e*parseInt(this.params[i]||this.params.stagger,10)},_preProcess:function(t){return this.rawValue=t,t},_postProcess:function(t){if(qn(t))return t;if(w(t)){for(var e,n=Object.keys(t),i=n.length,o=new Array(i);i--;)e=n[i],o[i]={$key:e,$value:t[e]};return o}return"number"!=typeof t||isNaN(t)||(t=he(t)),t||[]},unbind:function(){if(this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags)for(var t,e=this.frags.length;e--;)t=this.frags[e],this.deleteCachedFrag(t),t.destroy()}};"production"!==t.env.NODE_ENV&&(nr.warnDuplicate=function(t){Di('Duplicate value found in v-for="'+this.descriptor.raw+'": '+JSON.stringify(t)+'. Use track-by="$index" if you are expecting duplicate values.',this.vm)});var ir={priority:Ko,terminal:!0,bind:function(){var e=this.el;if(e.__vue__)"production"!==t.env.NODE_ENV&&Di('v-if="'+this.expression+'" cannot be used on an instance root element.',this.vm),this.invalid=!0;else{var n=e.nextElementSibling;n&&null!==B(n,"v-else")&&(Q(n),this.elseEl=n),this.anchor=st("v-if"),J(e,this.anchor)}},update:function(t){this.invalid||(t?this.frag||this.insert():this.remove())},insert:function(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.factory||(this.factory=new ce(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function(){this.frag&&(this.frag.remove(),this.frag=null),this.elseEl&&!this.elseFrag&&(this.elseFactory||(this.elseFactory=new ce(this.elseEl._context||this.vm,this.elseEl)),this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function(){this.frag&&this.frag.destroy(),this.elseFrag&&this.elseFrag.destroy()}},or={bind:function(){var t=this.el.nextElementSibling;t&&null!==B(t,"v-else")&&(this.elseEl=t)},update:function(t){this.apply(this.el,t),this.elseEl&&this.apply(this.elseEl,!t)},apply:function(t,e){function n(){t.style.display=e?"":"none"}F(t)?H(t,e?1:-1,n,this.vm):n()}},rr={bind:function(){var t=this,e=this.el,n="range"===e.type,i=this.params.lazy,o=this.params.number,r=this.params.debounce,s=!1;if(Qn||n||(this.on("compositionstart",function(){s=!0}),this.on("compositionend",function(){s=!1,i||t.listener()})),this.focused=!1,n||i||(this.on("focus",function(){t.focused=!0}),this.on("blur",function(){t.focused=!1,t._frag&&!t._frag.inserted||t.rawListener()})),this.listener=this.rawListener=function(){if(!s&&t._bound){var i=o||n?u(e.value):e.value;t.set(i),oi(function(){t._bound&&!t.focused&&t.update(t._watcher.value)})}},r&&(this.listener=x(this.listener,r)),this.hasjQuery="function"==typeof jQuery,this.hasjQuery){var a=jQuery.fn.on?"on":"bind";jQuery(e)[a]("change",this.rawListener),i||jQuery(e)[a]("input",this.listener)}else this.on("change",this.rawListener),i||this.on("input",this.listener);!i&&zn&&(this.on("cut",function(){oi(t.listener)}),this.on("keyup",function(e){46!==e.keyCode&&8!==e.keyCode||t.listener()})),(e.hasAttribute("value")||"TEXTAREA"===e.tagName&&e.value.trim())&&(this.afterBind=this.listener)},update:function(t){t=c(t),t!==this.el.value&&(this.el.value=t)},unbind:function(){var t=this.el;if(this.hasjQuery){var e=jQuery.fn.off?"off":"unbind";jQuery(t)[e]("change",this.listener),jQuery(t)[e]("input",this.listener)}}},sr={bind:function(){var t=this,e=this.el;this.getValue=function(){if(e.hasOwnProperty("_value"))return e._value;var n=e.value;return t.params.number&&(n=u(n)),n},this.listener=function(){t.set(t.getValue())},this.on("change",this.listener),e.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){this.el.checked=T(t,this.getValue())}},ar={bind:function(){var t=this,e=this,n=this.el;this.forceUpdate=function(){e._watcher&&e.update(e._watcher.get())};var i=this.multiple=n.hasAttribute("multiple");this.listener=function(){var t=pe(n,i);t=e.params.number?qn(t)?t.map(u):u(t):t,e.set(t)},this.on("change",this.listener);var o=pe(n,i,!0);(i&&o.length||!i&&null!==o)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",function(){oi(t.forceUpdate)}),F(n)||oi(this.forceUpdate)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var n,i,o=this.multiple&&qn(t),r=e.options,s=r.length;s--;)n=r[s],i=n.hasOwnProperty("_value")?n._value:n.value,n.selected=o?fe(t,i)>-1:T(t,i)},unbind:function(){this.vm.$off("hook:attached",this.forceUpdate)}},cr={bind:function(){function t(){var t=n.checked;return t&&n.hasOwnProperty("_trueValue")?n._trueValue:!t&&n.hasOwnProperty("_falseValue")?n._falseValue:t}var e=this,n=this.el;this.getValue=function(){return n.hasOwnProperty("_value")?n._value:e.params.number?u(n.value):n.value},this.listener=function(){var i=e._watcher.value;if(qn(i)){var o=e.getValue();n.checked?C(i,o)<0&&i.push(o):i.$remove(o)}else e.set(t())},this.on("change",this.listener),n.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){var e=this.el;qn(t)?e.checked=C(t,this.getValue())>-1:e.hasOwnProperty("_trueValue")?e.checked=T(t,e._trueValue):e.checked=!!t}},ur={text:rr,radio:sr,select:ar,checkbox:cr},lr={priority:zo,twoWay:!0,handlers:ur,params:["lazy","number","debounce"],bind:function(){this.checkFilters(),this.hasRead&&!this.hasWrite&&"production"!==t.env.NODE_ENV&&Di('It seems you are using a read-only filter with v-model="'+this.descriptor.raw+'". You might want to use a two-way filter to ensure correct behavior.',this.vm);var e,n=this.el,i=n.tagName;if("INPUT"===i)e=ur[n.type]||ur.text;else if("SELECT"===i)e=ur.select;else{if("TEXTAREA"!==i)return void("production"!==t.env.NODE_ENV&&Di("v-model does not support element type: "+i,this.vm));e=ur.text}n.__v_model=this,e.bind.call(this),this.update=e.update,this._unbind=e.unbind},checkFilters:function(){var t=this.filters;if(t)for(var e=t.length;e--;){var n=wt(this.vm.$options,"filters",t[e].name);("function"==typeof n||n.read)&&(this.hasRead=!0),n.write&&(this.hasWrite=!0)}},unbind:function(){this.el.__v_model=null,this._unbind&&this._unbind()}},hr={esc:27,tab:9,enter:13,space:32,"delete":[8,46],up:38,left:37,right:39,down:40},dr={priority:Wo,acceptStatement:!0,keyCodes:hr,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){Y(t.el.contentWindow,t.arg,t.handler,t.modifiers.capture)},this.on("load",this.iframeBind)}},update:function(e){if(this.descriptor.raw||(e=function(){}),"function"!=typeof e)return void("production"!==t.env.NODE_ENV&&Di("v-on:"+this.arg+'="'+this.expression+'" expects a function value, got '+e,this.vm));this.modifiers.stop&&(e=me(e)),this.modifiers.prevent&&(e=ge(e)),this.modifiers.self&&(e=ye(e));var n=Object.keys(this.modifiers).filter(function(t){return"stop"!==t&&"prevent"!==t&&"self"!==t&&"capture"!==t});n.length&&(e=ve(e,n)),this.reset(),this.handler=e,this.iframeBind?this.iframeBind():Y(this.el,this.arg,this.handler,this.modifiers.capture)},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&G(t,this.arg,this.handler)},unbind:function(){this.reset()}},pr=["-webkit-","-moz-","-ms-"],fr=["Webkit","Moz","ms"],vr=/!important;?$/,mr=Object.create(null),gr=null,yr={deep:!0,update:function(t){"string"==typeof t?this.el.style.cssText=t:qn(t)?this.handleObject(t.reduce(y,{})):this.handleObject(t||{})},handleObject:function(t){var e,n,i=this.cache||(this.cache={});for(e in i)e in t||(this.handleSingle(e,null),delete i[e]);for(e in t)n=t[e],n!==i[e]&&(i[e]=n,this.handleSingle(e,n))},handleSingle:function(e,n){if(e=be(e))if(null!=n&&(n+=""),n){var i=vr.test(n)?"important":"";i?("production"!==t.env.NODE_ENV&&Di("It's probably a bad idea to use !important with inline rules. This feature will be deprecated in a future version of Vue."),n=n.replace(vr,"").trim(),this.el.style.setProperty(e.kebab,n,i)):this.el.style[e.camel]=n}else this.el.style[e.camel]=""}},br="http://www.w3.org/1999/xlink",wr=/^xlink:/,_r=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,xr=/^(?:value|checked|selected|muted)$/,Cr=/^(?:draggable|contenteditable|spellcheck)$/,kr={value:"_value","true-value":"_trueValue","false-value":"_falseValue"},Tr={priority:Qo,bind:function(){var e=this.arg,n=this.el.tagName;e||(this.deep=!0);var i=this.descriptor,o=i.interp;if(o&&(i.hasOneTime&&(this.expression=j(o,this._scope||this.vm)),(_r.test(e)||"name"===e&&("PARTIAL"===n||"SLOT"===n))&&("production"!==t.env.NODE_ENV&&Di(e+'="'+i.raw+'": attribute interpolation is not allowed in Vue.js directives and special attributes.',this.vm),this.el.removeAttribute(e),this.invalid=!0),"production"!==t.env.NODE_ENV)){var r=e+'="'+i.raw+'": ';"src"===e&&Di(r+'interpolation in "src" attribute will cause a 404 request. Use v-bind:src instead.',this.vm),"style"===e&&Di(r+'interpolation in "style" attribute will cause the attribute to be discarded in Internet Explorer. Use v-bind:style instead.',this.vm)}},update:function(t){if(!this.invalid){var e=this.arg;this.arg?this.handleSingle(e,t):this.handleObject(t||{})}},handleObject:yr.handleObject,handleSingle:function(t,e){var n=this.el,i=this.descriptor.interp;if(this.modifiers.camel&&(t=d(t)),!i&&xr.test(t)&&t in n){var o="value"===t&&null==e?"":e;n[t]!==o&&(n[t]=o)}var r=kr[t];if(!i&&r){n[r]=e;var s=n.__v_model;s&&s.listener()}return"value"===t&&"TEXTAREA"===n.tagName?void n.removeAttribute(t):void(Cr.test(t)?n.setAttribute(t,e?"true":"false"):null!=e&&e!==!1?"class"===t?(n.__v_trans&&(e+=" "+n.__v_trans.id+"-transition"),Z(n,e)):wr.test(t)?n.setAttributeNS(br,t,e===!0?"":e):n.setAttribute(t,e===!0?"":e):n.removeAttribute(t))}},Er={priority:Jo,bind:function(){if(this.arg){var t=this.id=d(this.arg),e=(this._scope||this.vm).$els;r(e,t)?e[t]=this.el:St(e,t,this.el)}},unbind:function(){var t=(this._scope||this.vm).$els;t[this.id]===this.el&&(t[this.id]=null)}},Sr={bind:function(){"production"!==t.env.NODE_ENV&&Di("v-ref:"+this.arg+" must be used on a child component. Found on <"+this.el.tagName.toLowerCase()+">.",this.vm)}},Or={bind:function(){var t=this.el;this.vm.$once("pre-hook:compiled",function(){t.removeAttribute("v-cloak")})}},Nr={text:jo,html:Uo,"for":nr,"if":ir,show:or,model:lr,on:dr,bind:Tr,el:Er,ref:Sr,cloak:Or},$r={deep:!0,update:function(t){t?"string"==typeof t?this.setClass(t.trim().split(/\s+/)):this.setClass(_e(t)):this.cleanup()},setClass:function(t){this.cleanup(t);for(var e=0,n=t.length;n>e;e++){var i=t[e];i&&xe(this.el,i,tt)}this.prevKeys=t},cleanup:function(t){var e=this.prevKeys;if(e)for(var n=e.length;n--;){var i=e[n];(!t||t.indexOf(i)<0)&&xe(this.el,i,et)}}},Ar={priority:Yo,params:["keep-alive","transition-mode","inline-template"],bind:function(){this.el.__vue__?"production"!==t.env.NODE_ENV&&Di('cannot mount component "'+this.expression+'" on already mounted element: '+this.el):(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=nt(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=st("v-component"),J(this.el,this.anchor),this.el.removeAttribute("is"),this.el.removeAttribute(":is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+f(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function(t){this.literal||this.setComponent(t)},setComponent:function(t,e){if(this.invalidatePending(),t){var n=this;this.resolveComponent(t,function(){n.mountComponent(e)})}else this.unbuild(!0),this.remove(this.childVM,e),this.childVM=null},resolveComponent:function(t,e){var n=this;this.pendingComponentCb=k(function(i){n.ComponentName=i.options.name||("string"==typeof t?t:null),n.Component=i,e()}),this.vm._resolveComponent(t,this.pendingComponentCb)},mountComponent:function(t){this.unbuild(!0);var e=this,n=this.Component.options.activate,i=this.getCached(),o=this.build();n&&!i?(this.waitingFor=o,Ce(n,o,function(){e.waitingFor===o&&(e.waitingFor=null,e.transition(o,t))})):(i&&o._updateRef(),this.transition(o,t))},invalidatePending:function(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function(e){var n=this.getCached();if(n)return n;if(this.Component){var i={name:this.ComponentName,el:Zt(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};e&&y(i,e);var o=new this.Component(i);return this.keepAlive&&(this.cache[this.Component.cid]=o),"production"!==t.env.NODE_ENV&&this.el.hasAttribute("transition")&&o._isFragment&&Di("Transitions will not work on a fragment instance. Template: "+o.$options.template,o),o}},getCached:function(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function(t){this.waitingFor&&(this.keepAlive||this.waitingFor.$destroy(),this.waitingFor=null);var e=this.childVM;return!e||this.keepAlive?void(e&&(e._inactive=!0,e._updateRef(!0))):void e.$destroy(!1,t)},remove:function(t,e){var n=this.keepAlive;if(t){this.pendingRemovals++,this.pendingRemovalCb=e;var i=this;t.$remove(function(){i.pendingRemovals--,n||t._cleanup(),!i.pendingRemovals&&i.pendingRemovalCb&&(i.pendingRemovalCb(),i.pendingRemovalCb=null)})}else e&&e()},transition:function(t,e){var n=this,i=this.childVM;switch(i&&(i._inactive=!0),t._inactive=!1,this.childVM=t,n.params.transitionMode){case"in-out":t.$before(n.anchor,function(){n.remove(i,e)});break;case"out-in":n.remove(i,function(){t.$before(n.anchor,e)});break;default:n.remove(i),t.$before(n.anchor,e)}},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}},Dr=Ai._propBindingModes,jr={},Ir=/^[$_a-zA-Z]+[\w$]*$/,Pr=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/,Mr=Ai._propBindingModes,Lr={bind:function(){var t=this.vm,e=t._context,n=this.descriptor.prop,i=n.path,o=n.parentPath,r=n.mode===Mr.TWO_WAY,s=this.parentWatcher=new Xt(e,o,function(e){Oe(t,n,e)},{twoWay:r,filters:n.filters,scope:this._scope});if(Se(t,n,s.value),r){var a=this;t.$once("pre-hook:created",function(){a.childWatcher=new Xt(t,i,function(t){s.set(t)},{sync:!0})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},Rr=[],Hr=!1,qr="transition",Fr="animation",Br=Kn+"Duration",Ur=ti+"Duration",Vr=Bn&&window.requestAnimationFrame,Wr=Vr?function(t){Vr(function(){Vr(t)})}:function(t){setTimeout(t,50)},zr=Le.prototype;zr.enter=function(t,e){this.cancelPending(),this.callHook("beforeEnter"),this.cb=e,tt(this.el,this.enterClass),t(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,Pe(this.enterNextTick))},zr.enterNextTick=function(){var t=this;this.justEntered=!0,Wr(function(){t.justEntered=!1});var e=this.enterDone,n=this.getCssTransitionType(this.enterClass);this.pendingJsCb?n===qr&&et(this.el,this.enterClass):n===qr?(et(this.el,this.enterClass),this.setupCssCb(Zn,e)):n===Fr?this.setupCssCb(ei,e):e()},zr.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,et(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},zr.leave=function(t,e){this.cancelPending(),this.callHook("beforeLeave"),this.op=t,this.cb=e,tt(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():Pe(this.leaveNextTick)))},zr.leaveNextTick=function(){var t=this.getCssTransitionType(this.leaveClass);if(t){var e=t===qr?Zn:ei;this.setupCssCb(e,this.leaveDone)}else this.leaveDone()},zr.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),et(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},zr.cancelPending=function(){this.op=this.cb=null;var t=!1;this.pendingCssCb&&(t=!0,G(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(t=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),t&&(et(this.el,this.enterClass),et(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},zr.callHook=function(t){this.hooks&&this.hooks[t]&&this.hooks[t].call(this.vm,this.el)},zr.callHookWithCb=function(t){var e=this.hooks&&this.hooks[t];e&&(e.length>1&&(this.pendingJsCb=k(this[t+"Done"])),e.call(this.vm,this.el,this.pendingJsCb))},zr.getCssTransitionType=function(t){if(!(!Zn||document.hidden||this.hooks&&this.hooks.css===!1||Re(this.el))){var e=this.type||this.typeCache[t];if(e)return e;var n=this.el.style,i=window.getComputedStyle(this.el),o=n[Br]||i[Br];if(o&&"0s"!==o)e=qr;else{var r=n[Ur]||i[Ur];r&&"0s"!==r&&(e=Fr)}return e&&(this.typeCache[t]=e),e}},zr.setupCssCb=function(t,e){this.pendingCssEvent=t;var n=this,i=this.el,o=this.pendingCssCb=function(r){r.target===i&&(G(i,t,o),n.pendingCssEvent=n.pendingCssCb=null,!n.pendingJsCb&&e&&e())};Y(i,t,o)};var Qr={priority:Xo,update:function(t,e){var n=this.el,i=wt(this.vm.$options,"transitions",t);t=t||"v",e=e||"v",n.__v_trans=new Le(n,t,i,this.vm),et(n,e+"-transition"),tt(n,t+"-transition")}},Xr={style:yr,"class":$r,component:Ar,prop:Lr,transition:Qr},Jr=/^v-bind:|^:/,Yr=/^v-on:|^@/,Gr=/^v-([^:]+)(?:$|:(.*)$)/,Kr=/\.[^\.]+/g,Zr=/^(v-bind:|:)?transition$/,ts=1e3,es=2e3;on.terminal=!0;var ns=/[^\w\-:\.]/,is=Object.freeze({compile:He,compileAndLinkProps:Ve,compileRoot:We,transclude:hn,resolveSlots:vn}),os=/^v-on:|^@/;wn.prototype._bind=function(){var t=this.name,e=this.descriptor;if(("cloak"!==t||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var n=e.attr||"v-"+t;this.el.removeAttribute(n)}var i=e.def;if("function"==typeof i?this.update=i:y(this,i),this._setupParams(),this.bind&&this.bind(),this._bound=!0,this.literal)this.update&&this.update(e.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var o=this;this.update?this._update=function(t,e){o._locked||o.update(t,e)}:this._update=bn;var r=this._preProcess?m(this._preProcess,this):null,s=this._postProcess?m(this._postProcess,this):null,a=this._watcher=new Xt(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:r,postProcess:s,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(a.value)}},wn.prototype._setupParams=function(){if(this.params){var t=this.params;this.params=Object.create(null);for(var e,n,i,o=t.length;o--;)e=f(t[o]),i=d(e),n=U(this.el,e),null!=n?this._setupParamWatcher(i,n):(n=B(this.el,e),null!=n&&(this.params[i]=""===n?!0:n))}},wn.prototype._setupParamWatcher=function(t,e){var n=this,i=!1,o=(this._scope||this.vm).$watch(e,function(e,o){if(n.params[t]=e,i){var r=n.paramWatchers&&n.paramWatchers[t];r&&r.call(n,e,o)}else i=!0},{immediate:!0,user:!1});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(o)},wn.prototype._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!Ut(t)){var e=Bt(t).get,n=this._scope||this.vm,i=function(t){n.$event=t,e.call(n,n),n.$event=null};return this.filters&&(i=n._applyFilters(i,null,this.filters)),this.update(i),!0}},wn.prototype.set=function(e){this.twoWay?this._withLock(function(){this._watcher.set(e)}):"production"!==t.env.NODE_ENV&&Di("Directive.set() can only be used inside twoWaydirectives.")},wn.prototype._withLock=function(t){var e=this;e._locked=!0,t.call(e),oi(function(){e._locked=!1})},wn.prototype.on=function(t,e,n){Y(this.el,t,e,n),(this._listeners||(this._listeners=[])).push([t,e])},wn.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var e,n=this._listeners;if(n)for(e=n.length;e--;)G(this.el,n[e][0],n[e][1]);var i=this._paramUnwatchFns;if(i)for(e=i.length;e--;)i[e]();"production"!==t.env.NODE_ENV&&this.el&&this.el._vue_directives.$remove(this),this.vm=this.el=this._watcher=this._listeners=null}};var rs=/[^|]\|[^|]/;Ot(Sn),gn(Sn),yn(Sn),_n(Sn),xn(Sn),Cn(Sn),kn(Sn),Tn(Sn),En(Sn);var ss={priority:tr,params:["name"],bind:function(){var t=this.params.name||"default",e=this.vm._slotContents&&this.vm._slotContents[t];e&&e.hasChildNodes()?this.compile(e.cloneNode(!0),this.vm._context,this.vm):this.fallback()},compile:function(t,e,n){if(t&&e){if(this.el.hasChildNodes()&&1===t.childNodes.length&&1===t.childNodes[0].nodeType&&t.childNodes[0].hasAttribute("v-if")){var i=document.createElement("template");i.setAttribute("v-else",""),
i.innerHTML=this.el.innerHTML,i._context=this.vm,t.appendChild(i)}var o=n?n._scope:this._scope;this.unlink=e.$compile(t,n,o,this._frag)}t?J(this.el,t):Q(this.el)},fallback:function(){this.compile(nt(this.el,!0),this.vm)},unbind:function(){this.unlink&&this.unlink()}},as={priority:Go,params:["name"],paramWatchers:{name:function(t){ir.remove.call(this),t&&this.insert(t)}},bind:function(){this.anchor=st("v-partial"),J(this.el,this.anchor),this.insert(this.params.name)},insert:function(t){var e=wt(this.vm.$options,"partials",t,!0);e&&(this.factory=new ce(this.vm,e),ir.insert.call(this))},unbind:function(){this.frag&&this.frag.destroy()}},cs={slot:ss,partial:as},us=nr._postProcess,ls=/(\d{3})(?=\d)/g,hs={orderBy:$n,filterBy:Nn,limitBy:On,json:{read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,arguments.length>1?e:2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},capitalize:function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},uppercase:function(t){return t||0===t?t.toString().toUpperCase():""},lowercase:function(t){return t||0===t?t.toString().toLowerCase():""},currency:function(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",n=null!=n?n:2;var i=Math.abs(t).toFixed(n),o=n?i.slice(0,-1-n):i,r=o.length%3,s=r>0?o.slice(0,r)+(o.length>3?",":""):"",a=n?i.slice(-1-n):"",c=0>t?"-":"";return c+e+s+o.slice(r).replace(ls,"$1,")+a},pluralize:function(t){var e=g(arguments,1),n=e.length;if(n>1){var i=t%10-1;return i in e?e[i]:e[n-1]}return e[0]+(1===t?"":"s")},debounce:function(t,e){return t?(e||(e=300),x(t,e)):void 0}};Dn(Sn),Sn.version="1.0.26",setTimeout(function(){Ai.devtools&&(Un?Un.emit("init",Sn):"production"!==t.env.NODE_ENV&&Bn&&/Chrome\/\d+/.test(window.navigator.userAgent)&&void 0)},0),e.exports=Sn}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:1}],3:[function(t,e,n){"use strict";var i=t("vue"),o=new i({el:"#app",methods:{backToTop:function(){$("body").animate({scrollTop:0},500)},search:function(t){window.location.href=t.target.action},uploadAvatar:function(){$("#avatar-uploader").click()},checkIn:function(){var t=this;this.User.checkedIn||!function(){var e=t,n=$(".checkin-button");n.addClass("checked"),t.request({url:"/checkin",type:"post",callback:function(t){t?e.User.checkedIn=!0:n.removeClass("checked")}})}()},signOut:function(t){this.warningAlert(signOutMessages,function(){window.location.href=$(t.target).attr("data-href")})},warningAlert:function(t,e){swal({title:t.title,text:t.text,type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:t.confirm,cancelButtonText:t.cancel,closeOnConfirm:!1,showLoaderOnConfirm:!0},function(t){t&&e()})},autoCloseAlert:function(t){swal({title:t.title,text:t.text,type:t.type||"success",showConfirmButton:!1,timer:t.timer||1500})},popupPrompt:function(t,e){swal({title:t.title,text:t.text,type:"input",showCancelButton:!0,closeOnConfirm:!1,animation:"pop",inputPlaceholder:t.inputPlaceholder,showLoaderOnConfirm:t.ajax,confirmButtonText:t.confirmButtonText,cancelButtonText:t.cancelButtonText,html:!0},function(n){return n===!1?!1:""===n?(swal.showInputError(t.inputEmptyText),!1):void e(n)})},request:function(t){void 0==t.data?t.data={_token:this.token}:t.data._token=this.token,$.ajax({type:t.type,url:t.url,data:t.data,success:function(e){void 0!=e.status&&(void 0!=e.message&&toastr[e.status](e.message),t.callback("error"!=e.status,e))},error:function(e){toastr.error(e.responseText),t.callback(!1)},complete:function(e){void 0!=t.complete&&t.complete(e)}})},playNotificationSound:function(){document.getElementById("notification-sound").play()},playMessageSound:function(){document.getElementById("new-message-sound").play()},readInbox:function(t){var e=t.target,n=this;$(e).addClass("reading"),this.request({url:"/read/notification",type:"PATCH",data:{id:$(e).attr("inbox-id")},callback:function(t){$(e).removeClass("reading"),t&&(n.Inboxes.$remove(n.Inboxes[$(e).attr("inbox")]),n.User.unread--)}})},readAllInbox:function(){var t=[],e=this;$(".Inbox__item > a").each(function(){t.push($(this).attr("inbox-id")),$(this).addClass("reading")}),this.request({url:"/read/notification",type:"PATCH",data:{id:t.join(",")},callback:function(n){if(n){for(var i in t)e.Inboxes.pop();e.User.unread-=t.length}}})}},data:{displayBackTop:!1,searchText:"",User:CurrentUser,token:_TOKEN,Inboxes:JSON.parse($(".Inbox").attr("data-inbox")||"{}")}});$(window).scroll(function(){o.displayBackTop=$(window).scrollTop()>=500});var r=function(){var t=$(".Stage"),e=($("body"),$(".Nav")),n=void 0,i=$(".Footer").outerHeight();n=$(window).height()-e.height()-i,t.attr("style","min-height:"+n+"px !important")};r(),window.vm=o,window.onresize=r,$(function(){var t='<i class="fa fa-circle-o-notch fa-spin"></i>&nbsp;';$("body").timeago(),$("form.ajax").each(function(){var e=this;$(this).on("submit",function(n){n.preventDefault(),$(e).addClass("loading");var i=$(e).find("button[type=submit]")[0];if(i){var o=i.innerHTML;$(i).html(t+"&nbsp;"+o)}$.ajax({url:e.action,type:e.method,data:$(e).serialize(),timeout:0,error:function(t){if(422===t.status){var n=JSON.parse(t.responseText),i=function(t){var i="[name="+t+"]",o=$($(e).find(i)[0]).parents(".form-group")[0];$(o).addClass("has-error shaky"),setTimeout(function(){return $(o).removeClass("has-error shaky")},8e3),toastr.error(n[t][0])};for(var o in n)i(o)}},success:function(t){if($(e).attr("callback")){var n=$(e).attr("callback");return n(),!1}"error"!==t.status?"undefined"!=typeof t.redirectUrl?"refresh"==t.redirectUrl?window.location.reload():window.location.href=t.redirectUrl:"undefined"!=typeof t.newWindowUrl?window.open(t.newWindowUrl,"_blank"):"undefined"!=typeof t.reload?(toastr.success(t.message),$.pjax.reload(pjaxContainer)):toastr.success(t.message):toastr.error(t.message)},complete:function(){i&&($(i).html(o),$(e).removeClass("loading"),$(e).addClass("done-loaded"),setTimeout(function(){$(e).removeClass("done-loaded")},300))}})})}),$("#avatar-uploader").on("change",function(t){var e=t.target;$($(e).parents("form")[0]).submit()}),$(".SlimScroll").slimscroll({allowPageScroll:!0})}),toastr.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}},{vue:2}]},{},[3]);
>>>>>>> Stashed changes
