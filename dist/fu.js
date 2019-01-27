(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("xerocross.FU", [], factory);
	else if(typeof exports === 'object')
		exports["xerocross.FU"] = factory();
	else
		root["xerocross.FU"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var we_assert_1 = __webpack_require__(1);
var we = we_assert_1["default"].build();
we.setHandler(function (message) {
    throw new Error("the following assertion failed: " + message + "\"");
});
var bubbleSortRecursion = function bubbleSortRecursion(arr, partitionIndex, compareFunction) {
    we.assert.that(number.isInteger(partitionIndex), "partitionIndex is an integer");
    we.assert.that(typeof compareFunction == "function", "compareFunction is a function");
    we.assert.that(Array.isArray(arr), "arr is an array");
    // this function should return an array that is sorted
    // for all indices >= partitionIndex
    // compute bubbleSortRecursion on partitionIndex + 1
    // so we have 
    if (partitionIndex >= arr.length) {
        // the conditions require no change
        return array.clone(arr);
    } else {
        var innerArray = bubbleSortRecursion(arr, partitionIndex + 1, compareFunction);
        // now innerArray is sorted for indices >= partitionIndex + 1;
        // to put the correct value in place at index partitionIndex
        // we just need to bubbleUp at that index
        return array.bubbleUp(innerArray, partitionIndex, compareFunction);
    }
};
var getPrimeFactorsRecursion = function getPrimeFactorsRecursion(num, knownFactors) {
    we.assert.that(number.isNaturalNumber(num), "num is a natural number");
    we.assert.that(Array.isArray(knownFactors), "knownFactors is an array");
    we.assert.that(num > 0, "num > 0");
    var mult = number.multiply(knownFactors);
    var returnvalue;
    if (mult == num) {
        returnvalue = array.clone(knownFactors);
    } else {
        var test_1 = num / mult;
        var factor = number.getFirstFactor(test_1);
        returnvalue = getPrimeFactorsRecursion(num, array.joinRight(knownFactors, factor));
    }
    return returnvalue;
};
var getFirstFactorRecursion = function getFirstFactorRecursion(num, test) {
    if (num % test == 0) {
        return test;
    } else {
        return getFirstFactorRecursion(num, test + 1);
    }
};
var number = {
    getInterval: function getInterval(min, max) {
        we.assert.that(number.isInteger(min), "min is an integer");
        we.assert.that(number.isInteger(max), "max is an integer");
        we.assert.that(min < max, "min < max");
        if (min + 1 == max) {
            return [min];
        } else {
            return array.joinRight(number.getInterval(min, max - 1), max - 1);
        }
    },
    sum: function sum(arr) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (1 == arr.length) {
            return arr[0];
        } else if (0 == arr.length) {
            return 0;
        }
        var half = Math.floor(arr.length / 2);
        return number.sum(array.subarray(arr, 0, half)) + number.sum(array.subarray(arr, half, arr.length));
    },
    isNaturalNumber: function isNaturalNumber(num) {
        we.assert.that(typeof num == "number", "num is type number");
        if (num == 0) {
            return true;
        } else if (num > 0) {
            // javascript numbers should be < 9007199254740991
            we.assert.that(num < 9007199254740991, "num is not larger than 9007199254740991");
            if (num > 100) {
                var i = 1;
                var exp = void 0;
                while (exp = Math.pow(10, i), num > exp) {
                    num = num - exp;
                    i++;
                }
                return this.isNaturalNumber(num);
            } else {
                return this.isNaturalNumber(num - 1);
            }
        } else {
            return false;
        }
    },
    isInteger: function isInteger(num) {
        we.assert.that(typeof num == "number", "num is type number");
        return this.isNaturalNumber(num) || this.isNaturalNumber(-num);
    },
    multiply: function multiply(arr) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (1 == arr.length) {
            return arr[0];
        } else if (0 == arr.length) {
            return 1;
        }
        var half = Math.floor(arr.length / 2);
        return number.multiply(array.subarray(arr, 0, half)) * number.multiply(array.subarray(arr, half, arr.length));
    },
    getFirstFactor: function getFirstFactor(num) {
        we.assert.that(number.isNaturalNumber(num), "num is a natural number");
        we.assert.that(num > 0, "num > 0");
        if (num <= 2) {
            return num;
        } else {
            return getFirstFactorRecursion(num, 2);
        }
    },
    getPrimeFactors: function getPrimeFactors(num) {
        return getPrimeFactorsRecursion(num, []);
    }
};
var array = {
    clone: function clone(arr) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return this.subarrayMax(arr, arr.length);
    },
    isArraysEqual: function isArraysEqual(arr1, arr2, isEqual) {
        we.assert.that(Array.isArray(arr1), "arr1 is an array");
        we.assert.that(Array.isArray(arr2), "arr2 is an array");
        we.assert.that(typeof isEqual == "function", "isEqual is a function");
        if (arr1.length != arr2.length) {
            return false;
        } else {
            for (var i = 0; i < arr1.length; i++) {
                if (!isEqual(arr1[i], arr2[i])) {
                    return false;
                }
            }
            return true;
        }
    },
    isSorted: function isSorted(arr, upTo, compareFunction) {
        we.assert.that(number.isInteger(upTo), "upTo is an integer");
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(typeof compareFunction == "function", "compareFunction is a function");
        // assume arr is sorted up to index upTo - 1;
        if (upTo <= 0) {
            // requires no test
            return true;
        } else {
            // assume arr is sorted up to index upTo - 1;
            var innerTest = array.isSorted(arr, upTo - 1, compareFunction);
            if (upTo < arr.length) {
                return innerTest && compareFunction(arr[upTo - 1], arr[upTo]) <= 0;
            } else {
                return innerTest;
            }
        }
    },
    joinRight: function joinRight(arr, newValue) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return arr.concat([newValue]);
    },
    joinLeft: function joinLeft(arr, newValue) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return [newValue].concat(arr);
    },
    subarrayMax: function subarrayMax(arr, max) {
        we.assert.that(number.isInteger(max), "max is an integer");
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(max >= 0 && max <= arr.length, "max >= 0 && max <= arr.length");
        if (max <= 0) {
            // if max is 0, then the subarray includes nothing,
            // so we return the empty array
            // this is the base case for mathematical induction
            return [];
        } else {
            // else max > 0.  Assume we have computed 
            // the subarray for max - 1.  
            var lesserSubarray = this.subarrayMax(arr, max - 1);
            // That is the
            // array containing all the indexes up to
            // and including max - 2.  To compute the 
            // desired subarray, we must join that 
            // array with the next element, if it exists,  
            // which is arr[max - 1]
            // if  the index max - 1 is not a valid index for this array, we do nothing
            // thus we have
            var subarray = max - 1 < arr.length ? array.joinRight(lesserSubarray, arr[max - 1]) : lesserSubarray;
            // and by mathematical induction this is the correct 
            // return array for all 
            return subarray;
        }
    },
    subarrayMin: function subarrayMin(arr, min) {
        we.assert.that(number.isInteger(min), "min is an integer");
        we.assert.that(min >= 0 && min < arr.length + 1, "min >= 0 && min < arr.length + 1");
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (min == arr.length) {
            return [];
            // If min == arr.length, then there 
            // are no indexes greater than or equal to min,
            // so we return an empty array.
            // This is the base case.
        } else {
            // Else assume we have computed the 
            // correct array for this.subarrayMin(arr, min + 1)
            var lesserSubarray = this.subarrayMin(arr, min + 1);
            // then lesserSubarray contains all the values 
            // from index min + 1 up to the end of arr
            // if min >= 0 then to get compute subarrayMin(arr, min)
            // we must join the element at arr[m] to the left of 
            // lesserSubarray.  Otherwise we simply return lesserSubarray
            return min >= 0 ? this.joinLeft(lesserSubarray, arr[min]) : lesserSubarray;
            // We have shown that subarrayMin(arr, min) works when 
            // min = arr.length;  Let i be an arbitrary index for this
            // array we have shown that if subarrayMin(arr, i + 1) is
            // correct then subarrayMin(arr, i)  is correct.
            // Thus subarrayMin(arr, i) is correct for all valid
            // indices.
        }
    },
    joinTwoArrays: function joinTwoArrays(arr1, arr2) {
        we.assert.that(Array.isArray(arr1), "arr1 is an array");
        we.assert.that(Array.isArray(arr2), "arr2 is an array");
        return arr1.concat(arr2);
    },
    subarray: function subarray(arr, min, max) {
        // inputs are validated in subarrayMin and subarrayMax
        return this.subarrayMin(this.subarrayMax(arr, max), min);
    },
    replace: function replace(arr, index, value) {
        we.assert.that(number.isInteger(index), "index is an integer");
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(index >= 0 && index < arr.length, "index >= 0 && index < arr.length");
        if (index < 0 || index >= arr.length) {
            return this.clone(arr);
        } else {
            return this.joinTwoArrays(this.joinRight(this.subarrayMax(arr, index), value), this.subarray(arr, index + 1, arr.length));
        }
    },
    swap: function swap(arr, i, j) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(number.isInteger(i), "i is an integer");
        we.assert.that(0 <= i && i < arr.length, "0 <= i && i < arr.length");
        we.assert.that(number.isInteger(j), "j is an integer");
        we.assert.that(0 <= j && j < arr.length, "0 <= j && j < arr.length");
        return this.replace(this.replace(arr, i, arr[j]), j, arr[i]);
    },
    bubbleUp: function bubbleUp(arr, bubbleIndex, compareFunction) {
        we.assert.that(number.isInteger(bubbleIndex), "bubbleIndex is an integer");
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(typeof compareFunction == "function", "compareFunction is a function");
        we.assert.that(bubbleIndex < arr.length && bubbleIndex >= 0, "bubbleIndex < arr.length && bubbleIndex >= 0");
        if (bubbleIndex == 0) {
            // the greatest number between index 0 and index 0 (inclusive)
            // is already in place, so we return a clone of the array
            return this.clone(arr);
        } else {
            // assume we have bubbled up the array so that 
            // the value at index bubbleIndex - 1 is the max
            // over all indices between 0 and bubbleIndex - 1, inclusive
            var lesserBubbledArray = this.bubbleUp(arr, bubbleIndex - 1, compareFunction);
            var comparison = compareFunction(lesserBubbledArray[bubbleIndex - 1], lesserBubbledArray[bubbleIndex]);
            if (comparison <= 0) {
                // then lesserBubbledArray is already bubbled to index bubbleIndex
                return lesserBubbledArray;
            } else {
                // we swap them.  Since lesserBubbledArray[bubbleIndex - 1] is 
                // greater than everything from 0 to bubbleIndex - 1
                // and since it is also greater than lesserBubbledArray[bubbleIndex]
                // if we swap bubbleIndex and bubbleIndex - 1 the result will 
                // have the largest value among indices [0, bubbleIndex] at index 
                // bubbleIndex as desired
                return this.swap(lesserBubbledArray, bubbleIndex - 1, bubbleIndex);
            }
        }
    },
    bubbleSort: function bubbleSort(arr, compareFunction) {
        return bubbleSortRecursion(arr, 0, compareFunction);
    }
};
exports["default"] = {
    array: array,
    number: number
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=2)}([function(t,n,r){"use strict";const e=r(3),i=r(1);function o(t){let n=[],r=function(t){t&&("negation"!=t.action||"substitution"!=t.args[0].action?"substitution"!=t.action?(r(t.args[0]),r(t.args[1])):n.push(t.args[0]):n.push("!"+t.args[0].args[0]))};return r(t),n}function a(t,n){let r=o(t),e=o(n),a=function(t,n){let r=[];return t.forEach(function(t){let e=t.startsWith("!")?t.substring(1):t,i=t.startsWith("!")?t.substring(1):"!"+t;n.includes(i)&&r.push(e)}),r}(r,e);if(a.length>1)return{action:"literal",args:[!0]};let u=r.concat(e);return u.sort(),0==(u=u.filter(function(t){let n=t.startsWith("!")?t.substring(1):t;return!a.includes(n)}).reduce(function(t,n){return t.peek()==n?t:t.concat([n])},[])).length?{action:"literal",args:[!1]}:i.buildTree(u.join(" | "))}t.exports.prove=function(t,n){let r=[],o=[],u=0;t.forEach(function(t){let n=e.convertToCNF(i.buildTree(t)).map(function(t){return t.idx=u++,t});o=o.concat(n),r.push(o)});let s=u,c=r.map(function(t){let n=t.peek();return n}).map(function(t){let n=e.splitClauses(t.tree).map(function(n){return n.idx=u++,n.from=t.idx,n});return n}).reduce(function(t,n){return t.concat(n)},[]);c.forEach(function(t){o.push({label:"knowledge base clause from "+t.from,tree:t,idx:t.idx})});let f=e.convertToCNF(i.negate(i.buildTree(n)));f.peek().tree;e.splitClauses(f.peek().tree).forEach(function(t){t.idx=u++,c.push(t),o.push({label:"assume for a contradiction",tree:c.peek(),idx:c.peek().idx})});let l=function(t){let n=[t],r=o.filter(function(n){return n.idx==t})[0];return r.req?(r.req.forEach(function(t){n=n.concat(l(t))}),n):n};for(;;){let t=[];for(let n=0;n<c.length;n++)for(let r=1;r<c.length;r++){let e=a(c[n],c[r]);if(!t.map(i.treeToExpr).includes(i.treeToExpr(e))){if(e.idx=u++,o.push({label:"resolve of "+c[n].idx+" and "+c[r].idx,tree:e,idx:e.idx,req:[c[n].idx,c[r].idx]}),"literal"==e.action&&0==e.args[0]){let t=l(e.idx);return o.filter(function(n){return t.includes(n.idx)||n.idx<=s||"sep"==n.label}).map(function(t){return t.tree&&(t.tree=i.treeToExpr(t.tree)),t})}"literal"==e.action&&1==e.args[0]||t.push(e)}}let n=c.map(i.treeToExpr),r=t.map(i.treeToExpr).every(function(t){return n.includes(t)});if(r)return o.push({label:"model exhausted, proof could not be reached"}),o.map(function(t){return t.tree&&(t.tree=i.treeToExpr(t.tree)),t});c=c.concat(t)}},t.exports.addParens=function(t){return i.treeToExpr(i.buildTree(t))},t.exports.isProofComplete=function(t){return"model exhausted, proof could not be reached"!=t.peek().label}},function(t,n,r){"use strict";const e=r(4),i=r(5);function o(t){return t&&"substitution"!=t.action&&"literal"!=t.action?null==t.action?o(t.args[0]):{action:t.action,args:t.args.map(o)}:t}Array.prototype.peek=function(){return this[this.length-1]},Array.prototype.includes||(Array.prototype.includes=function(t){var n=Object(this),r=parseInt(n.length)||0;if(0===r)return!1;var e,i,o=parseInt(arguments[1])||0;for(o>=0?e=o:(e=r+o)<0&&(e=0);e<r;){if(t===(i=n[e])||t!=t&&i!=i)return!0;e++}return!1}),String.prototype.startsWith||(String.prototype.startsWith=function(t,n){return n=n||0,this.indexOf(t,n)===n}),t.exports.negate=function(t){return{action:"negation",args:[t]}},t.exports.treeToExpr=function t(n){if("substitution"==n.action)return n.args[0];if("literal"==n.action)return n.args[0];if("negation"==n.action)return"substitution"==n.args[0].action?"!"+n.args[0].args[0]:"(!"+t(n.args[0])+")";if("conjunction"==n.action)return"("+t(n.args[0])+" & "+t(n.args[1])+")";if("disjunction"==n.action)return"("+t(n.args[0])+" | "+t(n.args[1])+")";if("implication"==n.action)return"("+t(n.args[0])+" -> "+t(n.args[1])+")";if("equivalence"==n.action)return"("+t(n.args[0])+" <-> "+t(n.args[1])+")";return""},t.exports.proofToString=function(t){return(t=t.map(function(t){return"sep"==t.label?"------------------------------\n":t.tree?t.idx+"\t"+t.tree+"\t"+t.label+"\n":t.label+"\n"})).join("")},t.exports.buildTree=function(t){return o(e.parse(i.lex(t)))}},function(t,n,r){"use strict";r.r(n);var e=r(0),i=r.n(e),o={0:"DEBUG",1:"WARN",2:"ERROR"},a=function(t){switch(t){case"DEBUG":return 0;case"WARN":return 1;case"ERROR":return 2}};n.default={build:function(){let t={};var n=function(){};let r=2,e={},u=[];return t.define=function(t){return e[t]},t.assume=function(t){u.push(t)},t.setLevel=function(t){var n=a(t);if(0!=n&&1!=n&&2!=n)throw new Error("we-assert: invalid error level");r=n},t.getLevel=function(){return o[r]},t.checkIsProved=function(t){var n=i.a.prove(u,t);return i.a.isProofComplete(n)},t.getProposition=function(t){return e[t]},t.setHandler=function(t){n=t},t.defineProposition=function(t,n){e[t]=n},t.assert={that:function(t,r){return t||n(r),1==t},proposition:function(n,r){t.defineProposition(n,r);let e=r[0],i=r[1],o=r[2],a=e(...i);return a&&u.push(n),this.that(a,o)},thatIsProved:function(r,e){let i=t.checkIsProved(r);return i||n(e),i},forXBetween:function(t,n){let r={};var e=this.that;return r.that=function(r,i){for(let o=t;o<n;o++)e(r(o),i)},r},atLevel:function(t){var n={},e=this.that;return n.that=function(n,i){a(t)>=r&&e(n,i)},n}},t}}},function(t,n,r){"use strict";const e=r(1);function i(t,n){return{action:"conjunction",args:[t,n]}}function o(t,n){return{action:"implication",args:[t,n]}}function a(t){return{action:"negation",args:[t]}}function u(t,n){return{action:"disjunction",args:[t,n]}}function s(t){return t&&"substitution"!=t.action&&"literal"!=t.action?"equivalence"==t.action?i(o(s(t.args[0]),s(t.args[1])),o(s(t.args[1]),s(t.args[0]))):{action:t.action,args:t.args.map(s)}:t}function c(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("negation"==t.action){if("disjunction"==t.args[0].action)return c(i(a(t.args[0].args[0]),a(t.args[0].args[1])));if("conjunction"==t.args[0].action)return c(u(a(t.args[0].args[0]),a(t.args[0].args[1])))}return{action:t.action,args:t.args.map(c)}}function f(t){return t&&"substitution"!=t.action&&"literal"!=t.action?"implication"==t.action?u(a(f(t.args[0])),f(t.args[1])):{action:t.action,args:t.args.map(f)}:t}function l(t){return t&&"substitution"!=t.action&&"literal"!=t.action?"negation"==t.action&&"negation"==t.args[0].action?l(t.args[0].args[0]):{action:t.action,args:t.args.map(l)}:t}function g(t){return JSON.parse(JSON.stringify(t))}function p(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("disjunction"==t.action){if("conjunction"==t.args[1].action)return p(i(u(g(t.args[0]),g(t.args[1].args[0])),u(g(t.args[0]),g(t.args[1].args[1]))));if("conjunction"==t.args[0].action)return p(i(u(g(t.args[1]),g(t.args[0].args[0])),u(g(t.args[1]),g(t.args[0].args[1]))))}return{action:t.action,args:t.args.map(p)}}function d(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("disjunction"==t.action){var n=t.args[0],r=t.args[1];if("negation"==n.action&&e.treeToExpr(n.args[0])==e.treeToExpr(r))return{action:"literal",args:[!0]};if("negation"==r.action&&e.treeToExpr(r.args[0])==e.treeToExpr(n))return{action:"literal",args:[!0]}}if("conjunction"==t.action){n=t.args[0],r=t.args[1];if("negation"==n.args[0].action&&e.treeToExpr(n.args[0].args[0])==e.treeToExpr(r))return{action:"literal",args:[!1]};if("negation"==r.args[0].action&&e.treeToExpr(r.args[0].args[0])==e.treeToExpr(n))return{action:"literal",args:[!1]}}return{action:t.action,args:t.args.map(d)}}function b(t){if(!t||"substitution"==t.action||"literal"==t.action)return t;if("disjunction"==t.action){var n=t.args[0],r=t.args[1];if("literal"==n.action){if(1==n.args[0])return n;if(0==n.args[0])return r}if("literal"==r.action){if(1==r.args[0])return r;if(0==r.args[0])return n}}if("conjunction"==t.action){n=t.args[0],r=t.args[1];if("literal"==n.action){if(1==n.args[0])return r;if(0==n.args[0])return n}if("literal"==r.action){if(1==r.args[0])return n;if(0==r.args[0])return r}}return{action:t.action,args:t.args.map(b)}}function x(t){var n=function(t){return!(t.args.length<2)&&("implication"!=t.action&&"equivalence"!=t.action&&"disjunction"!=t.action&&(e="conjunction"==t.args[0].action?n(t.args[0]):r(t.args[0]),"conjunction"==t.args[1].action?n(t.args[1])&&e:r(t.args[1])&&e));var e},r=function(t){return!!t&&("substitution"==t.action||"literal"==t.action||"conjunction"!=t.action&&("negation"==t.action?"substitution"==t.args[0].action:"disjunction"==t.action&&r(t.args[0]&&t.args[1])))};return"substitution"==t.action||"negation"==t.action&&"substitution"==t.args[0].action||n(t)}t.exports.convertToCNF=function(t){var n=[{task:"eliminate bijection",f:s},{task:"eliminate implication",f:f},{task:"DeMorgan's",f:c},{task:"eliminate double negation",f:l},{task:"distribute or over and",f:p},{task:"complementation",f:d},{task:"identity",f:b}],r=[{label:"initial expression",tree:t}];for(let t of n){if(x(r.peek().tree))break;for(;;){var i=t.f(r.peek().tree);if(e.treeToExpr(i)==e.treeToExpr(r.peek().tree))break;r.push({label:t.task,tree:i})}}return r},t.exports.isCNF=x,t.exports.splitClauses=function(t){var n=[],r=function(t){if("conjunction"==t.action)return r(t.args[0]),void r(t.args[1]);n.push(t)};return r(t),n}},function(t,n){t.exports.parse=function(t){var n;return function i(o){o=o||null;var a=[];for(;n=t.shift();)if("boundary"==n.type){if("("==n.value)a.push(i());else if(")"==n.value)return r(o,a)}else if("variable"==n.type){if(a.push(r("substitution",[n.value])),e(o))return r(o,a)}else if("operator"==n.type){if(e(n.value)){a.push(i(n.value));continue}if(o){var u=a.slice(0);(a=[]).push(r(o,u))}o=n.value}return r(o,a)}();function r(t,n){return{action:(r=t,{"!":"negation","|":"disjunction","&":"conjunction","->":"implication","<->":"equivalence"},{"!":"negation","|":"disjunction","&":"conjunction","->":"implication","<->":"equivalence"}[r]||r),args:n};var r}function e(t){return"!"===t}}},function(t,n){t.exports.lex=function(t){var n,r=0,e=[],i="";for(;n=t[r++];)if(s(n))-1!==["!","|","&","->","<->"].indexOf(i+=n)&&(o("operator",i),i="");else{if(i.length&&f(i,r-i.length-1),a(n))continue;u(n)?o("variable",n.toUpperCase()):c(n)?o("boundary",n):f(n,r-2)}return e;function o(t,n){e.push({type:t,value:n})}function a(t){return/\s/.test(t)}function u(t){return/[A-Za-z]/.test(t)}function s(t){return/[<>\-|&!]/.test(t)}function c(t){return/[\(\)]/.test(t)}function f(t,n){throw new Error('Unrecognized token "'+t+'" on position '+n+"!")}}}])});

/***/ })
/******/ ]);
});