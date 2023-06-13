import WeAssert from "we-assert";

const we = WeAssert.build();
we.setHandler(function (message:string) {
    throw new Error(`the following assertion failed: ${message}"`);
});
type ComparisonFunction = (i:number, j:number) => number;
type IsEqualFunction = (left:any, right: any) => boolean;
type validationFunction = (val:any) => boolean;

const bubbleSortRecursion = function (arr:any[], partitionIndex:number, compareFunction:ComparisonFunction ) :any[] {
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
        const innerArray = bubbleSortRecursion(arr, partitionIndex + 1, compareFunction);
        // now innerArray is sorted for indices >= partitionIndex + 1;
        // to put the correct value in place at index partitionIndex
        // we just need to bubbleUp at that index
        return array.bubbleUp(innerArray, partitionIndex, compareFunction);
    }
};
const getPrimeFactorsRecursion = function (num:number, knownFactors:number[]) :number[] {
    we.assert.that(number.isNaturalNumber(num), "num is a natural number");
    we.assert.that(Array.isArray(knownFactors), "knownFactors is an array");
    we.assert.that(num > 0, "num > 0");
    const mult = number.multiply(knownFactors);
    let returnvalue:number[];
    if (mult ==  num) {
        returnvalue = array.clone(knownFactors);
    } else {
        const test = num / mult;
        const factor = number.getFirstFactor(test);
        returnvalue = getPrimeFactorsRecursion(num, array.joinRight(knownFactors, factor));

    }
    return returnvalue;
};

const getFirstFactorRecursion = function (num:number, test:number) :number {
    if (num % test == 0) {
        return test;
    } else {
        return getFirstFactorRecursion(num, test + 1);
    }
};

const number = {
    getInterval : function (min:number, max:number) :number[] {
        we.assert.that(number.isInteger(min), "min is an integer");
        we.assert.that(number.isInteger(max), "max is an integer");
        we.assert.that(min < max, "min < max");
        if (min + 1 == max) {
            return [min];
        } else {
            return array.joinRight(number.getInterval(min, max - 1), max - 1);
        }
    },
    sum : function (arr:number[]) :number {
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (1 == arr.length) {
            return arr[0];
        } else if (0 == arr.length) {
            return 0;
        }
        const half = Math.floor(arr.length / 2);
        return number.sum(array.subarray(arr, 0, half)) + number.sum(array.subarray(arr, half, arr.length));
    },
    isNaturalNumber : function (num:number) :boolean {
        we.assert.that(typeof num == "number", "num is type number");
        if (num == 0) {
            return true;
        } else if (num > 0) {
            // javascript numbers should be < 9007199254740991
            we.assert.that(num < 9007199254740991, "num is not larger than 9007199254740991");

            if (num > 100) {
                let i = 1;
                let exp;
                while (exp =  Math.pow(10, i), num > exp) {
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
    isInteger : function (num:number)  :boolean {
        we.assert.that(typeof num == "number", "num is type number");
        return this.isNaturalNumber(num) || this.isNaturalNumber(-num);
    },
    multiply : function (arr:number[]) :number {
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (1 == arr.length) {
            return arr[0];
        } else if (0 == arr.length) {
            return 1;
        }
        const half = Math.floor(arr.length / 2);
        return number.multiply(array.subarray(arr, 0, half)) * number.multiply(array.subarray(arr, half, arr.length));
    },
    getFirstFactor : function (num:number) {
        we.assert.that(number.isNaturalNumber(num), "num is a natural number");
        we.assert.that(num > 0, "num > 0");
        if (num <= 2) {
            return num;
        } else {
            return getFirstFactorRecursion(num, 2);
        }
    },
    getPrimeFactors : function (num:number) :number[] {
        return getPrimeFactorsRecursion(num, []);
    }
};
const array = {
    clone : function (arr:any[]) :any[] {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return this.subarrayMax(arr, arr.length);
    },
    isArraysEqual : function (arr1:any[], arr2:any[], isEqual:IsEqualFunction) :boolean {
        we.assert.that(Array.isArray(arr1), "arr1 is an array");
        we.assert.that(Array.isArray(arr2), "arr2 is an array");
        we.assert.that(typeof isEqual == "function", "isEqual is a function");
        if (arr1.length != arr2.length) {
            return false;
        } else {
            for (let i = 0; i < arr1.length; i++) {
                if (!isEqual(arr1[i], arr2[i])) {
                    return false;
                }
            }
            return true;
        }
    },
    insert : function (arr:any[], value:any, index:number) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(number.isNaturalNumber(index), "index is a natural number");
        we.assert.that(index >= 0 && index < arr.length, "index >= 0 && index < arr.length");
        return this.joinTwoArrays(this.joinRight(this.subarrayMax(arr, index), value), array.subarrayMin(arr, index));
    },
    remove : function (arr:any[], index:number) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(number.isNaturalNumber(index), "index is a natural number");
        we.assert.that(index >= 0 && index < arr.length, "index >= 0 && index < arr.length");
        return this.joinTwoArrays(this.subarrayMax(arr, index), array.subarrayMin(arr, index + 1));
    },
    containSameElements : function (arr1:any[], arr2:any[], isEqual:IsEqualFunction) :boolean {
        we.assert.that(Array.isArray(arr1), "arr1 is an array");
        we.assert.that(Array.isArray(arr2), "arr2 is an array");
        if (arr1.length !==  arr2.length) {
            return false;
        } else if (arr1.length == 0 && arr2.length == 0) {
            return true;
        }
        let index;
        if (index = array.indexOf(arr2, arr1[0], isEqual), index > -1) {
            return array.containSameElements (this.remove(arr1, 0), this.remove(arr2, index), isEqual);
        } else {
            return false;
        }

    },
    indexOf : function (arr:any[], elt:any, equalFunction:IsEqualFunction) :number {
        we.assert.that(Array.isArray(arr), "arr is an array");
        if (arr.length == 0) {
            return -1;
        }
        if (equalFunction(arr[arr.length - 1], elt)) {
            return arr.length - 1;
        } else {
            return this.indexOf(array.subarrayMax(arr, arr.length - 1), elt, equalFunction);
        }
    },
    isSorted : function (arr:any[], upTo:number, compareFunction:ComparisonFunction ) :boolean {
        we.assert.that(number.isInteger(upTo), "upTo is an integer");
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(typeof compareFunction == "function", "compareFunction is a function");
        // assume arr is sorted up to index upTo - 1;
        if (upTo <= 0) {
            // requires no test
            return true;
        } else {
            // assume arr is sorted up to index upTo - 1;
            const innerTest = array.isSorted(arr, upTo - 1, compareFunction);
            if (upTo < arr.length) {
                return innerTest && compareFunction(arr[upTo - 1], arr[upTo]) <= 0;
            } else {
                return innerTest;
            }
        }
    },
    mergeSortedArrays : function (arr1:any[], arr2:any[], compareFunction:ComparisonFunction ) :any[] {
        return this.mergeSortedArraysRecursion(arr1, arr2, Math.max(arr1.length, arr2.length), compareFunction);
    },
    validateType : () => {
        throw new Error("method array.validateType has been deprecated");
    },
    validateElementType : function (arr:any[], valFunc: validationFunction) {
        for (let i = 0; i < arr.length; i++) {
            if (!valFunc(arr[i])) {
                return false;
            }
        }
        return true;
    },
    mergeSortedArraysRecursion : function (arr1:any[], arr2:any[], index:number, compareFunction:ComparisonFunction ) :any[] {
        if (index < 0) {
            return [];
        } else {
            let innerArray = this.mergeSortedArraysRecursion(arr1, arr2, index - 1, compareFunction);
            const len = innerArray.length;
            let newElements:any[] = [];
            if (index < arr1.length) {
                newElements = this.joinRight(newElements, arr1[index]);
            }
            if (index < arr2.length) {
                newElements = this.joinRight(newElements, arr2[index]);
            }
            if (newElements.length == 2) {
                if (compareFunction(newElements[0], newElements[1]) > 0) {
                    newElements = this.swap(newElements, 0, 1);
                }
            }
            innerArray = array.joinTwoArrays(innerArray, newElements);
            if (newElements.length > 0) {
                if (compareFunction(innerArray[len - 1], innerArray[len]) > 0) {
                    innerArray = this.swap(innerArray, len - 1, len);
                }
            }
            return innerArray;
        }
    },
    joinRight : function (arr:any[], newValue:any) :any[] {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return [...arr, newValue];
    },
    joinLeft : function (arr:any[], newValue:any) :any[] {
        we.assert.that(Array.isArray(arr), "arr is an array");
        return [newValue, ...arr];
    },
    subarrayMax : function (arr:any[], max:number) :any[] {
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
            const lesserSubarray = this.subarrayMax(arr, max - 1);
            // That is the
            // array containing all the indexes up to
            // and including max - 2.  To compute the 
            // desired subarray, we must join that 
            // array with the next element, if it exists,  
            // which is arr[max - 1]
            // if  the index max - 1 is not a valid index for this array, we do nothing
            // thus we have
            const subarray = max - 1 < arr.length ? array.joinRight(lesserSubarray, arr[max - 1]) : lesserSubarray;
            // and by mathematical induction this is the correct 
            // return array for all 
            return subarray;
        }
    },
    subarrayMin : function (arr:any[], min:number) :any[] {
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
            const lesserSubarray = this.subarrayMin(arr, min + 1);
            // then lesserSubarray contains all the values 
            // from index min + 1 up to the end of arr
            // if min >= 0 then to get compute subarrayMin(arr, min)
            // we must join the element at arr[m] to the left of 
            // lesserSubarray.  Otherwise we simply return lesserSubarray
            return min >= 0 ? this.joinLeft(lesserSubarray, arr[min] ) : lesserSubarray;
            // We have shown that subarrayMin(arr, min) works when 
            // min = arr.length;  Let i be an arbitrary index for this
            // array we have shown that if subarrayMin(arr, i + 1) is
            // correct then subarrayMin(arr, i)  is correct.
            // Thus subarrayMin(arr, i) is correct for all valid
            // indices.
        }
    },
    joinTwoArrays : function (arr1:any[], arr2:any[]):any[] {
        we.assert.that(Array.isArray(arr1), "arr1 is an array");
        we.assert.that(Array.isArray(arr2), "arr2 is an array");
        return [...arr1, ...arr2];
    },
    subarray : function (arr:any[], min:number, max:number):any[] {
        // inputs are validated in subarrayMin and subarrayMax
        return this.subarrayMin(this.subarrayMax(arr, max), min);
    },
    replace : function (arr:any[], index:number, value:any):any[] {
        we.assert.that(number.isInteger(index), "index is an integer");
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(index >= 0 && index < arr.length, "index >= 0 && index < arr.length");
        if (index < 0 || index >= arr.length) {
            return this.clone(arr);
        } else {
            return this.joinTwoArrays(this.joinRight(this.subarrayMax(arr, index), value), this.subarray(arr, index + 1, arr.length));
        }
    },
    swap : function (arr:any[], i:number, j:number) {
        we.assert.that(Array.isArray(arr), "arr is an array");
        we.assert.that(number.isInteger(i), "i is an integer");
        we.assert.that(0 <= i && i < arr.length, "0 <= i && i < arr.length");
        we.assert.that(number.isInteger(j), "j is an integer");
        we.assert.that(0 <= j && j < arr.length, "0 <= j && j < arr.length");
        return this.replace(this.replace(arr, i, arr[j]), j, arr[i]);
    },
    // qsortRecursion : function (arr:any[], index:number, compareFunction:ComparisonFunction) {
    //     let val = arr[index];
    //     let arrayLeft = arr.filter(elt => compareFunction(elt, val) <= 0);
    //     let arrayRight = arr.filter(elt => compareFunction(elt, val) > 0);
    //     return this.joinTwoArrays(arrayLeft, arrayRight);
    // },
    bubbleUp : function (arr:any[], bubbleIndex:number, compareFunction:ComparisonFunction) :any[] {
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
            const lesserBubbledArray = this.bubbleUp( arr, bubbleIndex - 1, compareFunction);
            const comparison = compareFunction(lesserBubbledArray[bubbleIndex - 1], lesserBubbledArray[bubbleIndex]);
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
    bubbleSort : function (arr:any[], compareFunction:ComparisonFunction) :any[] {
        return bubbleSortRecursion(arr, 0, compareFunction);
    }
};

export default {
    array,
    number
};