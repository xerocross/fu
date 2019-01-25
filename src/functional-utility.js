var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "we-assert"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const we_assert_1 = __importDefault(require("we-assert"));
    let we = we_assert_1.default.build();
    we.setHandler(function (message) {
        throw new Error("the following assertion failed: \"" + message + "\"");
    });
    let bubbleSortRecursion = function (arr, partitionIndex, compareFunction) {
        we.assert.that(number.isInteger(partitionIndex), "partitionIndex is an integer");
        // this function should return an array that is sorted
        // for all indices >= partitionIndex
        // compute bubbleSortRecursion on partitionIndex + 1
        // so we have 
        if (partitionIndex >= arr.length) {
            // the conditions require no change
            return array.clone(arr);
        }
        else {
            let innerArray = bubbleSortRecursion(arr, partitionIndex + 1, compareFunction);
            // now innerArray is sorted for indices >= partitionIndex + 1;
            // to put the correct value in place at index partitionIndex
            // we just need to bubbleUp at that index
            return array.bubbleUp(innerArray, partitionIndex, compareFunction);
        }
    };
    var number = {
        isWholeNumber: function (num) {
            if (num == 0) {
                return true;
            }
            else if (num > 0) {
                return this.isWholeNumber(num - 1);
            }
            else {
                return false;
            }
        },
        isInteger: function (num) {
            return this.isWholeNumber(num) || this.isWholeNumber(-num);
        }
    };
    var array = {
        clone: function (arr) {
            return this.subarrayMax(arr, arr.length);
        },
        isArraysEqual: function (arr1, arr2, isEqual) {
            if (arr1.length != arr2.length) {
                return false;
            }
            else {
                for (let i = 0; i < arr1.length; i++) {
                    if (!isEqual(arr1[i], arr2[i])) {
                        return false;
                    }
                }
                return true;
            }
        },
        isSorted: function (arr, upTo, compareFunction) {
            we.assert.that(number.isInteger(upTo), "upTo is an integer");
            // assume arr is sorted up to index upTo - 1;
            if (upTo <= 0) {
                // requires no test
                return true;
            }
            else {
                // assume arr is sorted up to index upTo - 1;
                let innerTest = array.isSorted(arr, upTo - 1, compareFunction);
                if (upTo < arr.length) {
                    return innerTest && compareFunction(arr[upTo - 1], arr[upTo]) <= 0;
                }
                else {
                    return innerTest;
                }
            }
        },
        joinRight: function (arr, newValue) {
            return [...arr, newValue];
        },
        joinLeft: function (arr, newValue) {
            return [newValue, ...arr];
        },
        subarrayMax: function (arr, max) {
            we.assert.that(number.isInteger(max), "max is an integer");
            if (max <= 0) {
                // if max is 0, then the subarray includes nothing,
                // so we return the empty array
                // this is the base case for mathematical induction
                return [];
            }
            else {
                // else max > 0.  Assume we have computed 
                // the subarray for max - 1.  
                let lesserSubarray = this.subarrayMax(arr, max - 1);
                // That is the
                // array containing all the indexes up to
                // and including max - 2.  To compute the 
                // desired subarray, we must join that 
                // array with the next element, if it exists,  
                // which is arr[max - 1]
                // if  the index max - 1 is not a valid index for this array, we do nothing
                // thus we have
                let subarray = max - 1 < arr.length ? array.joinRight(lesserSubarray, arr[max - 1]) : lesserSubarray;
                // and by mathematical induction this is the correct 
                // return array for all 
                return subarray;
            }
        },
        subarrayMin: function (arr, min) {
            we.assert.that(number.isInteger(min), "min is an integer");
            if (min >= arr.length) {
                return [];
                // if min >= arr.length, then there 
                // are no indexes greater than or equal to min,
                // so we return an empty array
            }
            else {
                // else min is a number < arr.length, so the 
                // result array will contain at least one value
                // suppose we have computed the appropriate 
                // lesser subarray for min + 1.
                let lesserSubarray = this.subarrayMin(arr, min + 1);
                // if there is a value at arr[min] then we need
                // to join it to the lesserSubarray on the left
                // if min is not a valid index then we do nothing
                return min >= 0 ? this.joinLeft(lesserSubarray, arr[min]) : lesserSubarray;
            }
        },
        joinTwoArrays: function (arr1, arr2) {
            return [...arr1, ...arr2];
        },
        subarray: function (arr, min, max) {
            // indices are validated in subarrayMin and subarrayMax
            return this.subarrayMin(this.subarrayMax(arr, max), min);
        },
        replace: function (arr, index, value) {
            we.assert.that(number.isInteger(index), "index is an integer");
            if (index < 0 || index >= arr.length) {
                return this.clone(arr);
            }
            else {
                return this.joinTwoArrays(this.joinRight(this.subarrayMax(arr, index), value), this.subarray(arr, index + 1, arr.length));
            }
        },
        swap: function (arr, i, j) {
            we.assert.that(number.isInteger(i), "i is an integer");
            we.assert.that(0 <= i && i < arr.length, "0 <= i && i < arr.length");
            we.assert.that(number.isInteger(j), "j is an integer");
            we.assert.that(0 <= j && j < arr.length, "0 <= j && j < arr.length");
            return this.replace(this.replace(arr, i, arr[j]), j, arr[i]);
        },
        bubbleUp: function (arr, bubbleIndex, compareFunction) {
            we.assert.that(number.isInteger(bubbleIndex), "bubbleIndex is an integer");
            we.assert.that(bubbleIndex < arr.length && bubbleIndex >= 0, "bubbleIndex < arr.length && bubbleIndex >= 0");
            if (bubbleIndex == 0) {
                // the greatest number between index 0 and index 0 (inclusive)
                // is already in place, so we return a clone of the array
                return this.clone(arr);
            }
            else {
                // assume we have bubbled up the array so that 
                // the value at index bubbleIndex - 1 is the max
                // over all indices between 0 and bubbleIndex - 1, inclusive
                let lesserBubbledArray = this.bubbleUp(arr, bubbleIndex - 1, compareFunction);
                let comparison = compareFunction(lesserBubbledArray[bubbleIndex - 1], lesserBubbledArray[bubbleIndex]);
                if (comparison <= 0) {
                    // then lesserBubbledArray is already bubbled to index bubbleIndex
                    return lesserBubbledArray;
                }
                else {
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
        bubbleSort: function (arr, compareFunction) {
            return bubbleSortRecursion(arr, 0, compareFunction);
        }
    };
    exports.default = {
        array,
        number
    };
});
