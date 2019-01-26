# xerocross.fu

This is a collection of JavaScript utility functions written in a functional programming style.  I just started this.  It's still under construction.  But what _is_ here is thoroughly tested.  The code even contains mathematical proofs of correctness and internal verification that will throw errors at runtime if there is an unexpected problem.

It stands to reason that these functions _might_ be noticeably slower than functions written in the traditional JavaScript imperative style.  By design, functional programming requires a lot of copying data into a new place, and since people don't often write JavaScript this way, existing JavaScript interpreters probably do not optimize these operations.

The (possible) lack of speed is a tradeoff for the benefit of functions that can be validated by mathematical proof.

It's worth noting that the author of this library Adam Cross is a formally trained PhD mathematician.

## author

This is a one-man project so far.  I'm the author, Adam Cross, AKA Xerocross.  I'm an experienced software engineer and a PhD mathematician.

## updates

I don't maintain any project-specific  update blog, but I do maintain a blog about all of my programming activities at https://adamcross.blog/.  If you are interested in the dev process or any updates about this project, check the blog.

## validation and testing

This library has a rather extensive testing suite written in Jest notation.  It also uses WeAssert for internal validation of data.  For example, this library defines a number.isInteger function and many of the other functions use that function internally to verify input data.  These functions will throw an error at runtime if the input type is invalid. 

## functions

This is a list of the available functions and their signatures and return types.  To use them, import the module. ``const futil = require("xerocross.fu");``.  Then to access a function, say "array.joinRight", you call ``futil.array.joinRight``.

None of these functions mutate the input data.

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
