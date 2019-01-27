!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("xerocross.FU",[],r):"object"==typeof exports?exports["xerocross.FU"]=r():t["xerocross.FU"]=r()}(this,function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)n.d(e,a,function(r){return t[r]}.bind(null,a));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/dist",n(n.s=0)}([function(t,r,n){"use strict";r.__esModule=!0;var e=n(1).default.build();e.setHandler(function(t){throw new Error("the following assertion failed: "+t+'"')});var a={getInterval:function(t,r){return e.assert.that(a.isInteger(t),"min is an integer"),e.assert.that(a.isInteger(r),"max is an integer"),e.assert.that(t<r,"min < max"),t+1==r?[t]:i.joinRight(a.getInterval(t,r-1),r-1)},sum:function(t){if(1==t.length)return t[0];if(0==t.length)return 0;var r=Math.floor(t.length/2);return a.sum(i.subarray(t,0,r))+a.sum(i.subarray(t,r,t.length))},isNaturalNumber:function(t){if(e.assert.that("number"==typeof t,"num is type number"),0==t)return!0;if(t>0){if(e.assert.that(t<9007199254740991,"num is not larger than 9007199254740991"),t>100){for(var r=1,n=void 0;t>(n=Math.pow(10,r));)t-=n,r++;return this.isNaturalNumber(t)}return this.isNaturalNumber(t-1)}return!1},isInteger:function(t){return e.assert.that("number"==typeof t,"num is type number"),this.isNaturalNumber(t)||this.isNaturalNumber(-t)},multiply:function(t){if(1==t.length)return t[0];if(0==t.length)return 1;var r=Math.floor(t.length/2);return a.multiply(i.subarray(t,0,r))*a.multiply(i.subarray(t,r,t.length))},getFirstFactor:function(t){return e.assert.that(a.isNaturalNumber(t),"num is a natural number"),e.assert.that(t>0,"num > 0"),t<=2?t:function t(r,n){return r%n==0?n:t(r,n+1)}(t,2)},getPrimeFactors:function(t){return function t(r,n){e.assert.that(a.isNaturalNumber(r),"num is a natural number"),e.assert.that(Array.isArray(n),"knownFactors is an array"),e.assert.that(r>0,"num > 0");var o,s=a.multiply(n);if(s==r)o=i.clone(n);else{var u=r/s,c=a.getFirstFactor(u);o=t(r,i.joinRight(n,c))}return o}(t,[])}},i={clone:function(t){return e.assert.that(Array.isArray(t),"arr is an array"),this.subarrayMax(t,t.length)},isArraysEqual:function(t,r,n){if(e.assert.that(Array.isArray(t),"arr1 is an array"),e.assert.that(Array.isArray(r),"arr2 is an array"),e.assert.that("function"==typeof n,"isEqual is a function"),t.length!=r.length)return!1;for(var a=0;a<t.length;a++)if(!n(t[a],r[a]))return!1;return!0},isSorted:function(t,r,n){if(e.assert.that(a.isInteger(r),"upTo is an integer"),e.assert.that(Array.isArray(t),"arr is an array"),e.assert.that("function"==typeof n,"compareFunction is a function"),r<=0)return!0;var o=i.isSorted(t,r-1,n);return r<t.length?o&&n(t[r-1],t[r])<=0:o},joinRight:function(t,r){return e.assert.that(Array.isArray(t),"arr is an array"),t.concat([r])},joinLeft:function(t,r){return e.assert.that(Array.isArray(t),"arr is an array"),[r].concat(t)},subarrayMax:function(t,r){if(e.assert.that(a.isInteger(r),"max is an integer"),e.assert.that(Array.isArray(t),"arr is an array"),e.assert.that(r>=0&&r<=t.length,"max >= 0 && max <= arr.length"),r<=0)return[];var n=this.subarrayMax(t,r-1);return r-1<t.length?i.joinRight(n,t[r-1]):n},subarrayMin:function(t,r){if(e.assert.that(a.isInteger(r),"min is an integer"),e.assert.that(r>=0&&r<t.length+1,"min >= 0 && min < arr.length + 1"),e.assert.that(Array.isArray(t),"arr is an array"),r==t.length)return[];var n=this.subarrayMin(t,r+1);return r>=0?this.joinLeft(n,t[r]):n},joinTwoArrays:function(t,r){return e.assert.that(Array.isArray(t),"arr1 is an array"),e.assert.that(Array.isArray(r),"arr2 is an array"),t.concat(r)},subarray:function(t,r,n){return this.subarrayMin(this.subarrayMax(t,n),r)},replace:function(t,r,n){return e.assert.that(a.isInteger(r),"index is an integer"),e.assert.that(Array.isArray(t),"arr is an array"),e.assert.that(r>=0&&r<t.length,"index >= 0 && index < arr.length"),r<0||r>=t.length?this.clone(t):this.joinTwoArrays(this.joinRight(this.subarrayMax(t,r),n),this.subarray(t,r+1,t.length))},swap:function(t,r,n){return e.assert.that(Array.isArray(t),"arr is an array"),e.assert.that(a.isInteger(r),"i is an integer"),e.assert.that(0<=r&&r<t.length,"0 <= i && i < arr.length"),e.assert.that(a.isInteger(n),"j is an integer"),e.assert.that(0<=n&&n<t.length,"0 <= j && j < arr.length"),this.replace(this.replace(t,r,t[n]),n,t[r])},bubbleUp:function(t,r,n){if(e.assert.that(a.isInteger(r),"bubbleIndex is an integer"),e.assert.that(Array.isArray(t),"arr is an array"),e.assert.that("function"==typeof n,"compareFunction is a function"),e.assert.that(r<t.length&&r>=0,"bubbleIndex < arr.length && bubbleIndex >= 0"),0==r)return this.clone(t);var i=this.bubbleUp(t,r-1,n);return n(i[r-1],i[r])<=0?i:this.swap(i,r-1,r)},bubbleSort:function(t,r){return function t(r,n,o){if(e.assert.that(a.isInteger(n),"partitionIndex is an integer"),e.assert.that("function"==typeof o,"compareFunction is a function"),e.assert.that(Array.isArray(r),"arr is an array"),n>=r.length)return i.clone(r);var s=t(r,n+1,o);return i.bubbleUp(s,n,o)}(t,0,r)}};r.default={array:i,number:a}},function(t,r,n){t.exports=function(t){var r={};function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)n.d(e,a,function(r){return t[r]}.bind(null,a));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/",n(n.s=2)}([function(t,r,n){"use strict";const e=n(3),a=n(1);function i(t){let r=[],n=function(t){t&&("negation"!=t.action||"substitution"!=t.args[0].action?"substitution"!=t.action?(n(t.args[0]),n(t.args[1])):r.push(t.args[0]):r.push("!"+t.args[0].args[0]))};return n(t),r}function o(t,r){let n=i(t),e=i(r),o=function(t,r){let n=[];return t.forEach(function(t){let e=t.startsWith("!")?t.substring(1):t,a=t.startsWith("!")?t.substring(1):"!"+t;r.includes(a)&&n.push(e)}),n}(n,e);if(o.length>1)return{action:"literal",args:[!0]};let s=n.concat(e);return s.sort(),0==(s=s.filter(function(t){let r=t.startsWith("!")?t.substring(1):t;return!o.includes(r)}).reduce(function(t,r){return t.peek()==r?t:t.concat([r])},[])).length?{action:"literal",args:[!1]}:a.buildTree(s.join(" | "))}t.exports.prove=function(t,r){let n=[],i=[],s=0;t.forEach(function(t){let r=e.convertToCNF(a.buildTree(t)).map(function(t){return t.idx=s++,t});i=i.concat(r),n.push(i)});let u=s,c=n.map(function(t){let r=t.peek();return r}).map(function(t){let r=e.splitClauses(t.tree).map(function(r){return r.idx=s++,r.from=t.idx,r});return r}).reduce(function(t,r){return t.concat(r)},[]);c.forEach(function(t){i.push({label:"knowledge base clause from "+t.from,tree:t,idx:t.idx})});let f=e.convertToCNF(a.negate(a.buildTree(r)));f.peek().tree,e.splitClauses(f.peek().tree).forEach(function(t){t.idx=s++,c.push(t),i.push({label:"assume for a contradiction",tree:c.peek(),idx:c.peek().idx})});let l=function(t){let r=[t],n=i.filter(function(r){return r.idx==t})[0];return n.req?(n.req.forEach(function(t){r=r.concat(l(t))}),r):r};for(;;){let t=[];for(let r=0;r<c.length;r++)for(let n=1;n<c.length;n++){let e=o(c[r],c[n]);if(!t.map(a.treeToExpr).includes(a.treeToExpr(e))){if(e.idx=s++,i.push({label:"resolve of "+c[r].idx+" and "+c[n].idx,tree:e,idx:e.idx,req:[c[r].idx,c[n].idx]}),"literal"==e.action&&0==e.args[0]){let t=l(e.idx);return i.filter(function(r){return t.includes(r.idx)||r.idx<=u||"sep"==r.label}).map(function(t){return t.tree&&(t.tree=a.treeToExpr(t.tree)),t})}"literal"==e.action&&1==e.args[0]||t.push(e)}}let r=c.map(a.treeToExpr),n=t.map(a.treeToExpr).every(function(t){return r.includes(t)});if(n)return i.push({label:"model exhausted, proof could not be reached"}),i.map(function(t){return t.tree&&(t.tree=a.treeToExpr(t.tree)),t});c=c.concat(t)}},t.exports.addParens=function(t){return a.treeToExpr(a.buildTree(t))},t.exports.isProofComplete=function(t){return"model exhausted, proof could not be reached"!=t.peek().label}},function(t,r,n){"use strict";const e=n(4),a=n(5);function i(t){return t&&"substitution"!=t.action&&"literal"!=t.action?null==t.action?i(t.args[0]):{action:t.action,args:t.args.map(i)}:t}Array.prototype.peek=function(){return this[this.length-1]},Array.prototype.includes||(Array.prototype.includes=function(t){var r=Object(this),n=parseInt(r.length)||0;if(0===n)return!1;var e,a,i=parseInt(arguments[1])||0;for(i>=0?e=i:(e=n+i)<0&&(e=0);e<n;){if(t===(a=r[e])||t!=t&&a!=a)return!0;e++}return!1}),String.prototype.startsWith||(String.prototype.startsWith=function(t,r){return r=r||0,this.indexOf(t,r)===r}),t.exports.negate=function(t){return{action:"negation",args:[t]}},t.exports.treeToExpr=function t(r){return"substitution"==r.action?r.args[0]:"literal"==r.action?r.args[0]:"negation"==r.action?"substitution"==r.args[0].action?"!"+r.args[0].args[0]:"(!"+t(r.args[0])+")":"conjunction"==r.action?"("+t(r.args[0])+" & "+t(r.args[1])+")":"disjunction"==r.action?"("+t(r.args[0])+" | "+t(r.args[1])+")":"implication"==r.action?"("+t(r.args[0])+" -> "+t(r.args[1])+")":"equivalence"==r.action?"("+t(r.args[0])+" <-> "+t(r.args[1])+")":""},t.exports.proofToString=function(t){return(t=t.map(function(t){return"sep"==t.label?"------------------------------\n":t.tree?t.idx+"\t"+t.tree+"\t"+t.label+"\n":t.label+"\n"})).join("")},t.exports.buildTree=function(t){return i(e.parse(a.lex(t)))}},function(t,r,n){"use strict";n.r(r);var e=n(0),a=n.n(e),i={0:"DEBUG",1:"WARN",2:"ERROR"},o=function(t){switch(t){case"DEBUG":return 0;case"WARN":return 1;case"ERROR":return 2}};r.default={build:function(){let t={};var r=function(){};let n=2,e={},s=[];return t.define=function(t){return e[t]},t.assume=function(t){s.push(t)},t.setLevel=function(t){var r=o(t);if(0!=r&&1!=r&&2!=r)throw new Error("we-assert: invalid error level");n=r},t.getLevel=function(){return i[n]},t.checkIsProved=function(t){var r=a.a.prove(s,t);return a.a.isProofComplete(r)},t.getProposition=function(t){return e[t]},t.setHandler=function(t){r=t},t.defineProposition=function(t,r){e[t]=r},t.assert={that:function(t,n){return t||r(n),1==t},proposition:function(r,n){t.defineProposition(r,n);let e=n[0],a=n[1],i=n[2],o=e(...a);return o&&s.push(r),this.that(o,i)},thatIsProved:function(n,e){let a=t.checkIsProved(n);return a||r(e),a},forXBetween:function(t,r){let n={};var e=this.that;return n.that=function(n,a){for(let i=t;i<r;i++)e(n(i),a)},n},atLevel:function(t){var r={},e=this.that;return r.that=function(r,a){o(t)>=n&&e(r,a)},r}},t}}},function(t,r,n){"use strict";const e=n(1);function a(t,r){return{action:"conjunction",args:[t,r]}}function i(t,r){return{action:"implication",args:[t,r]}}function o(t){return{action:"negation",args:[t]}}function s(t,r){return{action:"disjunction",args:[t,r]}}function u(t){return t&&"substitution"!=t.action&&"literal"!=t.action?"equivalence"==t.action?a(i(u(t.args[0]),u(t.args[1])),i(u(t.args[1]),u(t.args[0]))):{action:t.action,args:t.args.map(u)}:t}function c(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("negation"==t.action){if("disjunction"==t.args[0].action)return c(a(o(t.args[0].args[0]),o(t.args[0].args[1])));if("conjunction"==t.args[0].action)return c(s(o(t.args[0].args[0]),o(t.args[0].args[1])))}return{action:t.action,args:t.args.map(c)}}function f(t){return t&&"substitution"!=t.action&&"literal"!=t.action?"implication"==t.action?s(o(f(t.args[0])),f(t.args[1])):{action:t.action,args:t.args.map(f)}:t}function l(t){return t&&"substitution"!=t.action&&"literal"!=t.action?"negation"==t.action&&"negation"==t.args[0].action?l(t.args[0].args[0]):{action:t.action,args:t.args.map(l)}:t}function g(t){return JSON.parse(JSON.stringify(t))}function p(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("disjunction"==t.action){if("conjunction"==t.args[1].action)return p(a(s(g(t.args[0]),g(t.args[1].args[0])),s(g(t.args[0]),g(t.args[1].args[1]))));if("conjunction"==t.args[0].action)return p(a(s(g(t.args[1]),g(t.args[0].args[0])),s(g(t.args[1]),g(t.args[0].args[1]))))}return{action:t.action,args:t.args.map(p)}}function h(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("disjunction"==t.action){var r=t.args[0],n=t.args[1];if("negation"==r.action&&e.treeToExpr(r.args[0])==e.treeToExpr(n))return{action:"literal",args:[!0]};if("negation"==n.action&&e.treeToExpr(n.args[0])==e.treeToExpr(r))return{action:"literal",args:[!0]}}if("conjunction"==t.action){if(r=t.args[0],n=t.args[1],"negation"==r.args[0].action&&e.treeToExpr(r.args[0].args[0])==e.treeToExpr(n))return{action:"literal",args:[!1]};if("negation"==n.args[0].action&&e.treeToExpr(n.args[0].args[0])==e.treeToExpr(r))return{action:"literal",args:[!1]}}return{action:t.action,args:t.args.map(h)}}function d(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("disjunction"==t.action){var r=t.args[0],n=t.args[1];if("literal"==r.action){if(1==r.args[0])return r;if(0==r.args[0])return n}if("literal"==n.action){if(1==n.args[0])return n;if(0==n.args[0])return r}}if("conjunction"==t.action){if(r=t.args[0],n=t.args[1],"literal"==r.action){if(1==r.args[0])return n;if(0==r.args[0])return r}if("literal"==n.action){if(1==n.args[0])return r;if(0==n.args[0])return n}}return{action:t.action,args:t.args.map(d)}}function b(t){var r=function(t){return!(t.args.length<2)&&"implication"!=t.action&&"equivalence"!=t.action&&"disjunction"!=t.action&&(e="conjunction"==t.args[0].action?r(t.args[0]):n(t.args[0]),"conjunction"==t.args[1].action?r(t.args[1])&&e:n(t.args[1])&&e);var e},n=function(t){return!!t&&("substitution"==t.action||"literal"==t.action||"conjunction"!=t.action&&("negation"==t.action?"substitution"==t.args[0].action:"disjunction"==t.action&&n(t.args[0]&&t.args[1])))};return"substitution"==t.action||"negation"==t.action&&"substitution"==t.args[0].action||r(t)}t.exports.convertToCNF=function(t){var r=[{task:"eliminate bijection",f:u},{task:"eliminate implication",f:f},{task:"DeMorgan's",f:c},{task:"eliminate double negation",f:l},{task:"distribute or over and",f:p},{task:"complementation",f:h},{task:"identity",f:d}],n=[{label:"initial expression",tree:t}];for(let t of r){if(b(n.peek().tree))break;for(;;){var a=t.f(n.peek().tree);if(e.treeToExpr(a)==e.treeToExpr(n.peek().tree))break;n.push({label:t.task,tree:a})}}return n},t.exports.isCNF=b,t.exports.splitClauses=function(t){var r=[],n=function(t){if("conjunction"==t.action)return n(t.args[0]),void n(t.args[1]);r.push(t)};return n(t),r}},function(t,r){t.exports.parse=function(t){var r;return function a(i){i=i||null;for(var o=[];r=t.shift();)if("boundary"==r.type){if("("==r.value)o.push(a());else if(")"==r.value)return n(i,o)}else if("variable"==r.type){if(o.push(n("substitution",[r.value])),e(i))return n(i,o)}else if("operator"==r.type){if(e(r.value)){o.push(a(r.value));continue}if(i){var s=o.slice(0);(o=[]).push(n(i,s))}i=r.value}return n(i,o)}();function n(t,r){return{action:(n=t,{"!":"negation","|":"disjunction","&":"conjunction","->":"implication","<->":"equivalence"}[n]||n),args:r};var n}function e(t){return"!"===t}}},function(t,r){t.exports.lex=function(t){for(var r,n=0,e=[],a="";r=t[n++];)if(u(r))-1!==["!","|","&","->","<->"].indexOf(a+=r)&&(i("operator",a),a="");else{if(a.length&&f(a,n-a.length-1),o(r))continue;s(r)?i("variable",r.toUpperCase()):c(r)?i("boundary",r):f(r,n-2)}return e;function i(t,r){e.push({type:t,value:r})}function o(t){return/\s/.test(t)}function s(t){return/[A-Za-z]/.test(t)}function u(t){return/[<>\-|&!]/.test(t)}function c(t){return/[\(\)]/.test(t)}function f(t,r){throw new Error('Unrecognized token "'+t+'" on position '+r+"!")}}}])}])});