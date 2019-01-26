import FU from "./functional-utility";

type ComparisonFunction = (i: number, j:number) => number;
const isSorted = function(arr:any[], compareFunction:ComparisonFunction ){
    for (let i = 0; i < arr.length - 1; i++) {
        if (compareFunction(arr[i], arr[i + 1]) > 0){
            return false;
        }
    }
    return true;
}

describe('test array suite', function () { 

    describe("test isArraysEqual", function() {
        test("empty arrays", function() {
            expect(FU.array.isArraysEqual([], [], (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("isArraysEqual positive", function() {
            let arr1 = [0,1,2,3,4,5,6,7];
            let arr2 = [0,1,2,3,4,5,6,7];
            expect(FU.array.isArraysEqual(arr1, arr2, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("isArraysEqual negative", function() {
            let arr1 = [0,1,2,3,4,5,6,7];
            let arr2 = [0,1,5,3,4,5,6,7];
            expect(FU.array.isArraysEqual(arr1, arr2, (x:number, y:number) => x == y)).toBeFalsy();
        });
        test("throws on invalid left", function() {
            expect(function() {
                // @ts-ignore
                FU.array.isArraysEqual("", []);
            }).toThrow();
        });
        test("throws on invalid right", function() {
            expect(function() {
                // @ts-ignore
                FU.array.isArraysEqual([], "a");
            }).toThrow();
        });
    });

    describe("join right suite", function() {
        test("join right nonempty array",function() {
            let arr = [0,1,2,3,4,5,6,7];
            let newArr = FU.array.joinRight(arr, 8);
            expect(FU.array.isArraysEqual(newArr,[0,1,2,3,4,5,6,7, 8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("join right empty array",function() {
            let newArr = FU.array.joinRight([], 8);
            expect(FU.array.isArraysEqual(newArr,[8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("join right on invalid left input",function() {
            expect(function() {
                // @ts-ignore
                FU.array.joinRight("apple", "pear");
            }).toThrow();
        });
    });
    describe("join left suite", function() {
        test("nonempty array",function() {
            let arr = [0,1,2,3,4,5,6,7];
            let newArr = FU.array.joinLeft(arr, 8);
            expect(FU.array.isArraysEqual(newArr,[8, 0,1,2,3,4,5,6,7], (x:number, y:number) => x == y)).toBe(true);
        });
        test("empty array",function() {
            let newArr = FU.array.joinLeft([], 8);
            expect(FU.array.isArraysEqual(newArr,[8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("on invalid left input",function() {
            expect(function() {
                // @ts-ignore
                FU.array.joinLeft("apple", "pear");
            }).toThrow();
        });
    });

    test("join left",function() {
        let arr = [0,1,2,3,4,5,6,7];
        let newArr = FU.array.joinLeft(arr, -1);
        expect(FU.array.isArraysEqual(newArr,[-1, 0,1,2,3,4,5,6,7], (x:number, y:number) => x == y)).toBe(true);
    });

    describe('test array.replace suite', function () {

        test("replace positive",function() {
            let arr = [0,1,2,3,4,5,6,7];
            let newArr = FU.array.replace(arr, 7, 0);
            expect(newArr[7] == 0).toBe(true);
        });

        test("replace negative, index too large",function() {
            let arr = [0,1,2,3,4,5,6,7];
            let newArr = FU.array.replace(arr, 27, 0);
            expect(FU.array.isArraysEqual(arr, newArr, (x:number, y:number) => x == y)).toBe(true);
        });

        test("replace negative, index negative",function() {
            let arr = [0,1,2,3,4,5,6,7];
            let newArr = FU.array.replace(arr, -1, 0);
            expect(FU.array.isArraysEqual(arr, newArr, (x:number, y:number) => x == y)).toBe(true);
        });
        test("replace throws, index not an integer",function() {
            let arr = [0,1,2,3,4,5,6,7];
            expect(function(){
                FU.array.replace(arr, 2.5, 0);
            }).toThrow();
        });
    });
    describe("array swap suite", function(){
        test("swap array positive",function() {
            let arr = [0,1,2,3,4,5,6,7];
            let newArr = FU.array.swap(arr, 2, 4);
            expect(newArr[2]).toBe(4);
            expect(newArr[4]).toBe(2);
        });
        test("swap array invalid i throws",function() {
            let arr = [0,1,2,3,4,5,6,7];
            expect(function() {
                FU.array.swap(arr, -1, 4);
            }).toThrow();
        });
        test("swap array invalid j throws",function() {
            let arr = [0,1,2,3,4,5,6,7];
            expect(function() {
                FU.array.swap(arr, 2, 87);
            }).toThrow();
        });
    })
    describe("test bubbleUp suite", function() {
        test("bubbleup on valid inputs", function() {
            let arr = [0,1,2,72,3,4,5,6,7];
            let res = FU.array.bubbleUp(arr, arr.length - 1, (x:number,y:number) => x - y);
            expect(res[arr.length - 1]).toBe(72);
        });
        test("bubbleup throws on index < 0", function() {
            let arr = [0,1,2,72,3,4,5,6,7];
            expect(function(){
                FU.array.bubbleUp(arr, -1, (x:number,y:number) => x - y);
            }).toThrow();
        });
        test("bubbleup throws on index >= arr.length", function() {
            let arr = [0,1,2,72,3,4,5,6,7];
            expect(function(){
                FU.array.bubbleUp(arr, arr.length, (x:number,y:number) => x - y);
            }).toThrow();
        });
    });


    test("bubbleSort", function() {
        let arr = [3,6,98,2,6,77,3,2,5];
        let res = FU.array.bubbleSort(arr, (x:number,y:number) => x - y);
        expect(isSorted(res,  (x:number,y:number) => x - y)).toBe(true);
    });
    describe("isSorted suite", function(){
        test("isSorted positive", function() {
            let arr = [0,5, 8, 9, 10, 77];
            expect(FU.array.isSorted(arr, arr.length, (x:number,y:number) => x - y)).toBe(true);
        });
        test("isSorted negative", function() {
            let arr = [0,5, 8, 11, 10, 77];
            expect(FU.array.isSorted(arr, arr.length, (x:number,y:number) => x - y)).toBe(false);
        });
    });



    test("clone", function() {
        let arr = [0,1,2,72,3,4,5,6,7];
        let res = FU.array.clone(arr);
        let test = function() {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != res[i]) {
                    return false;
                }
                return true;
            }
        }
        expect(test()).toBe(true);
    });
});



describe('test number.isWholeNumber', function () {
    test("number.isWholeNumber positive", function() {
        let num = 42;
        expect(FU.number.isWholeNumber(num)).toBe(true);
    });

    test("number.isWholeNumber negative (pos non-integer)", function() {
        let num = 42.2;
        expect(FU.number.isWholeNumber(num)).toBe(false);
    });


    test("number.isWholeNumber negative (negative integer)", function() {
        let num = -1;
        expect(FU.number.isWholeNumber(num)).toBe(false);
    });

    test("number.isWholeNumber negative (negative non-integer)", function() {
        let num = -0.1;
        expect(FU.number.isWholeNumber(num)).toBe(false);
    });
});