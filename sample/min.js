(function(){var e=this;function f(a,b){a=a.split(".");var c=e;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function h(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var k="closure_uid_"+(1E9*Math.random()>>>0),l=0;function m(a){var b=n;a=window.navigator.userAgent.match(a);return!a||a&&parseInt(a[1],10)>b}var p={c:"ie",b:"android",f:"ios"},q=/MSIE\s(\d+)\.(\d+);\sWindows\sNT/,r=/Windows\sNT.+Trident.+rv:(\d+)(?:.(\d+))?/,t={c:q,i:r,f:/(?:iPhone|iPad)?;.+OS\s(\d+)_\d+/,b:/Android\s(\d+)\.(\d+)/},u=/\bglue-app-?\w*\b/;function v(a){"array"==h(a)||(a=[a]);for(var b=document.documentElement,c=0,d;d=a[c];c++){var g=d.isSupported;d=d.FEATURE_ID;if(!g||!d)throw Error(w.cannotDecorate);g()&&(b.className+=" "+(x+d))}}var x="glue-",w={cannotDecorate:"Cannot decorate for the specified feature."};var y={g:"flexWrap WebkitFlexWrap MozFlexWrap OFlexWrap msFlexWrap boxDirection WebkitBoxDirection MozBoxDirection OBoxDirection msBoxDirection".split(" ")};y.h=document.documentElement.style;y.isSupported=function(a){a=a||y.h;for(var b=y.g.slice(0);0<b.length&&!(b.shift()in a););return 0<b.length};f("glue.detect.flexbox.isSupported",y.isSupported);y.a="flexbox";f("glue.detect.flexbox.FEATURE_ID",y.a);y.FEATURE_ID=y.a;function z(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var A={};A.isSupported=function(a,b){var c=b||z;return function(){var b=this||e,b=b.closure_memoize_cache_||(b.closure_memoize_cache_={}),g=c(a[k]||(a[k]=++l),arguments);return b.hasOwnProperty(g)?b[g]:b[g]=a.apply(this,arguments)}}(function(){return"ontouchstart"in window});A.a="touch";A.isSupported=A.isSupported;A.FEATURE_ID=A.a;v(y);v(A);a:{var B={ie:8,android:3};window.glueAppSupported=!1;for(var C in B){var D;var E=void 0,F=void 0,G=C,n=parseInt(B[C],10);if("ie"==G)D=11<=n&&!m(r)?!1:m(q);else{for(E in p)if(p[E]==G){F=t[E];break}D=m(F)}if(!D)break a}window.glueAppSupported=!0;var H=window.document.documentElement;u.test(H.className)?H.className=H.className.replace(u,"glue-app-supported"):H.className+=(H.className?" ":"")+"glue-app-supported"};Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(a){var b=this;if(!document.documentElement.contains(b))return null;do{if(b.matches(a))return b;b=b.parentElement||b.parentNode}while(null!==b&&1===b.nodeType);return null});})()