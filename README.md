# xerocross.functional-util

This is a collection of JavaScript utility functions written in a functional programming style.  I just started this.  It's still under construction.  But what _is_ here is thoroughly tested.  The code even contains mathematical proofs of correctness and internal verification that will throw errors at runtime if there is an unexpected problem.

## validation and testing

This library has a rather extensive testing suite written in Jest notation.  It also uses WeAssert for internal validation of data.  For example, this library defines a number.isInteger function and many of the other functions use that function internally to verify input data.  These functions will throw an error at runtime if the input type is invalid. 

## functions

This is a list of the available functions and their signatures and return types.  To use them, import the module. ``const futil = require("xerocross.functional-util");``.  Then to access a function, say "array.joinRight", you call ``futil.array.joinRight``.

None of these functions mutate the input data.

We have defined the following type for use in the function list:

```type ComparisonFunction = (i: number, j:number) => number;```

### function list

Here is the declaration of the exported types and methods

```
type ComparisonFunction = (i: number, j: number) => number;
type IsEqualFunction = (left: any, right: any) => boolean;
default {
    array: {
        clone: (arr: any[]) => any[];
        isArraysEqual: (arr1: any[], arr2: any[], isEqual: IsEqualFunction) => boolean;
        isSorted: (arr: any[], upTo: number, compareFunction: ComparisonFunction) => boolean;
        joinRight: (arr: any[], newValue: any) => any[];
        joinLeft: (arr: any[], newValue: any) => any[];
        subarrayMax: (arr: any[], max: number) => any[];
        subarrayMin: (arr: any[], min: number) => any[];
        joinTwoArrays: (arr1: any[], arr2: any[]) => any[];
        subarray: (arr: any[], min: number, max: number) => any[];
        replace: (arr: any[], index: number, value: any) => any[];
        swap: (arr: any[], i: number, j: number) => any[];
        bubbleUp: (arr: any[], bubbleIndex: number, compareFunction: ComparisonFunction) => any[];
        bubbleSort: (arr: any[], compareFunction: ComparisonFunction) => any[];
    };
    number: {
        isWholeNumber: (num: number) => boolean;
        isInteger: (num: number) => boolean;
    };
};
```