"use strict";
exports.__esModule = true;
var we_assert_1 = require("we-assert");
var we = we_assert_1["default"].build();
we.setHandler(function (message) {
    throw new Error("the following assertion failed: " + message + "\"");
});
var bubbleSortRecursion = function (arr, partitionIndex, compareFunction) {
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
var getPrimeFactorsRecursion = function (num, knownFactors) {
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
var getFirstFactorRecursion = function (num, test) {
    if (num % test == 0) {
        return test;
    } else {
        return getFirstFactorRecursion(num, test + 1);
    }
};
var number = {
    getInterval : function (min, max) {
        we.assert.that(number.isInteger(min), "min is an integer");
        we.assert.that(number.isInteger(max), "max is an integer");
        we.assert.that(min < max, "min < max");
        if (min + 1 == max) {
            return [min];
        } else {
            return array.joinRight(number.getInterval(min, max - 1), max - 1);
        }
    },
    sum : function (arr) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (1 == arr.length) {
            return arr[0];
        } else if (0 == arr.length) {
            return 0;
        }
        var half = Math.floor(arr.length / 2);
        return number.sum(array.subarray(arr, 0, half)) + number.sum(array.subarray(arr, half, arr.length));
    },
    isNaturalNumber : function (num) {
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
    isInteger : function (num) {
        we.assert.that(typeof num == "number", "num is type number");
        return this.isNaturalNumber(num) || this.isNaturalNumber(-num);
    },
    multiply : function (arr) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (1 == arr.length) {
            return arr[0];
        } else if (0 == arr.length) {
            return 1;
        }
        var half = Math.floor(arr.length / 2);
        return number.multiply(array.subarray(arr, 0, half)) * number.multiply(array.subarray(arr, half, arr.length));
    },
    getFirstFactor : function (num) {
        we.assert.that(number.isNaturalNumber(num), "num is a natural number");
        we.assert.that(num > 0, "num > 0");
        if (num <= 2) {
            return num;
        } else {
            return getFirstFactorRecursion(num, 2);
        }
    },
    getPrimeFactors : function (num) {
        return getPrimeFactorsRecursion(num, []);
    }
};
var array = {
    clone : function (arr) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return this.subarrayMax(arr, arr.length);
    },
    isArraysEqual : function (arr1, arr2, isEqual) {
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
    isSorted : function (arr, upTo, compareFunction) {
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
    joinRight : function (arr, newValue) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return arr.concat([newValue]);
    },
    joinLeft : function (arr, newValue) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return [newValue].concat(arr);
    },
    subarrayMax : function (arr, max) {
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
    subarrayMin : function (arr, min) {
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
    joinTwoArrays : function (arr1, arr2) {
        we.assert.that(Array.isArray(arr1), "arr1 is an array");
        we.assert.that(Array.isArray(arr2), "arr2 is an array");
        return arr1.concat(arr2);
    },
    subarray : function (arr, min, max) {
        // inputs are validated in subarrayMin and subarrayMax
        return this.subarrayMin(this.subarrayMax(arr, max), min);
    },
    replace : function (arr, index, value) {
        we.assert.that(number.isInteger(index), "index is an integer");
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(index >= 0 && index < arr.length, "index >= 0 && index < arr.length");
        if (index < 0 || index >= arr.length) {
            return this.clone(arr);
        } else {
            return this.joinTwoArrays(this.joinRight(this.subarrayMax(arr, index), value), this.subarray(arr, index + 1, arr.length));
        }
    },
    swap : function (arr, i, j) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(number.isInteger(i), "i is an integer");
        we.assert.that(0 <= i && i < arr.length, "0 <= i && i < arr.length");
        we.assert.that(number.isInteger(j), "j is an integer");
        we.assert.that(0 <= j && j < arr.length, "0 <= j && j < arr.length");
        return this.replace(this.replace(arr, i, arr[j]), j, arr[i]);
    },
    bubbleUp : function (arr, bubbleIndex, compareFunction) {
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
    bubbleSort : function (arr, compareFunction) {
        return bubbleSortRecursion(arr, 0, compareFunction);
    }
};
exports["default"] = {
    array : array,
    number : number
};
