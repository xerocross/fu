# xerocross.fu

This is a collection of JavaScript utility functions written in a functional programming style. It's mostly just an experiment in writing code in this style. There isn't much here, but what's here is thoroughly tested.  The code even contains mathematical proofs of correctness and internal verification that will throw errors at runtime if there is an unexpected problem.

It stands to reason that these functions _might_ be noticeably slower than functions written in the traditional JavaScript imperative style. The (possible) lack of speed is a tradeoff for the benefit of functions that can be validated by mathematical proof.

## Latest Changes in V3 (2023)

I'm writing this in 2023. I made some breaking changes to the API here, which is why I bumped the version, and I made numerous small changes just to modernize the JavaScript/TypeScript, but I have not changed the basic style or functionality of the script I wrote back in 2018, nor have I added any additional functions&mdash;not yet anyway. I'm keeping this mainly as a museum piece.


## about functional programming in JavaScript

JavaScript interpreters (as of this writing) tend to have a rather small stack limit for function recursion.  This is an immovable object, and it forces me to write some functions in a style that is not fully functional. An important example here is ```number.isNaturalNumber```.  We cannot recurse down from 35802 to check that this is a natural number by recursion. Instead, I included a small while loop.

## author

This is a one-man project so far.  I'm the author, Adam Cross, AKA Xerocross.  I'm an experienced software engineer and a PhD mathematician.


## validation and testing

This library has a rather extensive testing suite written in Jest.  It also uses We-Assert (https://github.com/xerocross/we-assert) for internal validation. For example, this library defines a number.isInteger function and many of the other functions use that function internally to verify input data. These functions will throw an error at runtime if the input type is invalid.

```npm run test``` tests the source files

## functions

This is a list of the available functions and their signatures and return types.

None of these functions mutates the input data.

```
type ComparisonFunction = (i: number, j: number) => number;
type IsEqualFunction = (left: any, right: any) => boolean;
type validationFunction = (val: any) => boolean;
declare const _default: {
    array: {
        clone: (arr: any[]) => any[];
        isArraysEqual: (arr1: any[], arr2: any[], isEqual: IsEqualFunction) => boolean;
        insert: (arr: any[], value: any, index: number) => any[];
        remove: (arr: any[], index: number) => any[];
        containSameElements: (arr1: any[], arr2: any[], isEqual: IsEqualFunction) => boolean;
        indexOf: (arr: any[], elt: any, equalFunction: IsEqualFunction) => number;
        isSorted: (arr: any[], upTo: number, compareFunction: ComparisonFunction) => boolean;
        mergeSortedArrays: (arr1: any[], arr2: any[], compareFunction: ComparisonFunction) => any[];
        validateType: () => never;
        validateElementType: (arr: any[], valFunc: validationFunction) => boolean;
        mergeSortedArraysRecursion: (arr1: any[], arr2: any[], index: number, compareFunction: ComparisonFunction) => any[];
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
        getInterval: (min: number, max: number) => number[];
        sum: (arr: number[]) => number;
        isNaturalNumber: (num: number) => boolean;
        isInteger: (num: number) => boolean;
        multiply: (arr: number[]) => number;
        getFirstFactor: (num: number) => number;
        getPrimeFactors: (num: number) => number[];
    };
};
export default _default;
```