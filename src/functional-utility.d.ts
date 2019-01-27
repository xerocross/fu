declare type ComparisonFunction = (i: number, j: number) => number;
declare type IsEqualFunction = (left: any, right: any) => boolean;
declare const _default: {
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
        isNaturalNumber: (num: number) => boolean;
        isInteger: (num: number) => boolean;
        multiply: (arr: number[]) => number;
        getFirstFactor: (num: number) => number;
        getPrimeFactorsRecursion: (num: number, knownFactors: number[]) => number[];
        getPrimeFactors: (num: number) => number[];
    };
};
export default _default;
