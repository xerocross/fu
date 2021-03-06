//@ts-ignore
import FU from "./functional-utility";
//test
type ComparisonFunction = (i: number, j:number) => number;
const isSorted = function (arr:any[], compareFunction:ComparisonFunction ) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (compareFunction(arr[i], arr[i + 1]) > 0) {
            return false;
        }
    }
    return true;
}

describe('test array suite', function () { 

    describe("test isArraysEqual", function () {
        test("empty arrays", function () {
            expect(FU.array.isArraysEqual([], [], (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("isArraysEqual positive", function () {
            let arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
            let arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(FU.array.isArraysEqual(arr1, arr2, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("isArraysEqual negative", function () {
            let arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
            let arr2 = [0, 1, 5, 3, 4, 5, 6, 7];
            expect(FU.array.isArraysEqual(arr1, arr2, (x:number, y:number) => x == y)).toBeFalsy();
        });
        test("throws on invalid left array", function () {
            expect(function () {
                // @ts-ignore
                FU.array.isArraysEqual("", [], (x:number, y:number) => x == y);
            }).toThrow();
        });
        test("throws on invalid right array", function () {
            expect(function () {
                // @ts-ignore
                FU.array.isArraysEqual([], "a", (x:number, y:number) => x == y);
            }).toThrow();
        });
        test("throws on invalid comparison function", function () {
            expect(function () {
                // @ts-ignore
                FU.array.isArraysEqual([], "a");
            }).toThrow();
        });
    });

    describe("join right suite", function () {
        test("join right nonempty array", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.joinRight(arr, 8);
            expect(FU.array.isArraysEqual(newArr, [0, 1, 2, 3, 4, 5, 6, 7, 8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("join right empty array", function () {
            let newArr = FU.array.joinRight([], 8);
            expect(FU.array.isArraysEqual(newArr, [8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("join right on invalid left input", function () {
            expect(function () {
                // @ts-ignore
                FU.array.joinRight("apple", "pear");
            }).toThrow();
        });
    });
    describe("join left suite", function () {
        test("nonempty array", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.joinLeft(arr, 8);
            expect(FU.array.isArraysEqual(newArr, [8, 0, 1, 2, 3, 4, 5, 6, 7], (x:number, y:number) => x == y)).toBe(true);
        });
        test("empty array", function () {
            let newArr = FU.array.joinLeft([], 8);
            expect(FU.array.isArraysEqual(newArr, [8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("on invalid left input", function () {
            expect(function () {
                // @ts-ignore
                FU.array.joinLeft("apple", "pear");
            }).toThrow();
        });
    });
    describe('test array.replace suite', function () {
        test("invalid array throws", function () {
            expect(function () {
                // @ts-ignore
                FU.array.replace("apple", 0, "pear");
            }).toThrow();
        });
        test("index not an integer throws", function () {
            expect(function () {
                // @ts-ignore
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], 1.5, "pear");
            }).toThrow();
        });
        test("index is invalid type throws", function () {
            expect(function () {
                // @ts-ignore
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], "1.5", "pear");
            }).toThrow();
        });
        test("index not in range (below) throws", function () {
            expect(function () {
                // @ts-ignore
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], -5, "pear");
            }).toThrow();
        });
        test("index not in range (above) throws", function () {
            expect(function () {
                // @ts-ignore
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], 72, "pear");
            }).toThrow();
        });
        test("replace positive", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.replace(arr, 7, 0);
            expect(newArr[7] == 0).toBe(true);
        });
    });
    describe("array swap suite", function () {
        test("invalid array throws", function () {
            expect(function () {
                // @ts-ignore
                FU.array.swap("apple", 0, 1);
            }).toThrow();
        });
        test("swap array positive", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.swap(arr, 2, 4);
            expect(newArr[2]).toBe(4);
            expect(newArr[4]).toBe(2);
        });
        test("swap array invalid i throws", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(function () {
                FU.array.swap(arr, -1, 4);
            }).toThrow();
        });
        test("swap array invalid j throws", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(function () {
                FU.array.swap(arr, 2, 87);
            }).toThrow();
        });
    })
    describe("test bubbleUp suite", function () {
        test("on valid inputs", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            let res = FU.array.bubbleUp(arr, arr.length - 1, (x:number, y:number) => x - y);
            expect(FU.array.isArraysEqual(res, [0, 1, 2, 3, 4, 5, 6, 7, 72], (x:number, y:number) => x == y)).toBe(true);
        });
        test("throws on index < 0", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                FU.array.bubbleUp(arr, -1, (x:number, y:number) => x - y);
            }).toThrow();
        });
        test("throws on index >= arr.length", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                FU.array.bubbleUp(arr, arr.length, (x:number, y:number) => x - y);
            }).toThrow();
        });
        test("throws on invalid arr type", function () {
            expect(function () {
                // @ts-ignore
                FU.array.bubbleUp("", 5, (x:number, y:number) => x - y);
            }).toThrow();
        });
    });


    test("bubbleSort", function () {
        let arr = [3, 6, 98, 2, 6, 77, 3, 2, 5];
        let res = FU.array.bubbleSort(arr, (x:number, y:number) => x - y);
        expect(isSorted(res,  (x:number, y:number) => x - y)).toBe(true);
    });
    describe("isSorted suite", function () {
        test("isSorted positive", function () {
            let arr = [0, 5, 8, 9, 10, 77];
            expect(FU.array.isSorted(arr, arr.length, (x:number, y:number) => x - y)).toBe(true);
        });
        test("isSorted negative", function () {
            let arr = [0, 5, 8, 11, 10, 77];
            expect(FU.array.isSorted(arr, arr.length, (x:number, y:number) => x - y)).toBe(false);
        });
    });

    describe("subarrayMax", function () {
        test("valid input", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            let expectedSubarray = [0, 1, 2, 72];
            expect(FU.array.isArraysEqual(FU.array.subarrayMax(arr, 4), expectedSubarray, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("max is exactly arr.length", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(FU.array.isArraysEqual(FU.array.subarrayMax(arr, arr.length), arr, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("invalid arr throws", function () {
            let arr = "[0,1,2,72,3,4,5,6,7]";
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMax(arr, 5);
            }).toThrow();
        });
        test("invalid max throws (too low)", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMax(arr, -1);
            }).toThrow();
        });
        test("invalid max throws (too high)", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMax(arr, arr.length + 1);
            }).toThrow();
        });
        test("invalid max type", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMax(arr, "");
            }).toThrow();
        });
        test("invalid max not a natural number", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMax(arr, 1.3);
            }).toThrow();
        });
    });

    describe("subarrayMin", function () {
        test("valid input", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            let expectedSubarray = [4, 5, 6, 7];
            expect(FU.array.isArraysEqual(FU.array.subarrayMin(arr, 5), expectedSubarray, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("invalid arr throws", function () {
            let arr = "[0,1,2,72,3,4,5,6,7]";
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMin(arr, 5);
            }).toThrow();
        });
        test("invalid index low throws", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMin(arr, -1);
            }).toThrow();
        });
        test("invalid index high throws", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMin(arr, 87);
            }).toThrow();
        });
        test("invalid index type string throws", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMin(arr, "87");
            }).toThrow();
        });
        test("invalid index type not an integer throws", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                FU.array.subarrayMin(arr, 1.2);
            }).toThrow();
        });
    });
    describe("indexOf", function () {
        let battery = [
            {
                array : [3, 4, 5],
                elt : 4,
                expected : 1
            },
            {
                array : [],
                elt : 4,
                expected : -1
            },
            {
                array : [3, 4, 5, 10, 14],
                elt : 14,
                expected : 4
            },
            {
                array : [3, 4, 5, 10, 14],
                elt : 3,
                expected : 0
            },
            {
                array : [3, 4, 5, 10, 14],
                elt : 72,
                expected : -1
            }
        ]
        for (let i = 0; i < battery.length; i++) {
            test(`test ${battery[i].array} indexOf ${battery[i].elt}: expect ${battery[i].expected}`, function () {
                expect(FU.array.indexOf(battery[i].array, battery[i].elt, (x, y)=> x == y)).toBe(battery[i].expected);
            });

        }
        
    });

    describe("indexOf", function () {
        let battery = [
            {
                array1 : [3, 4, 5],
                array2 : [5, 4, 3],
                expected : true
            },
            {
                array1 : [],
                array2 : [],
                expected : true
            },
            {
                array1 : [3, 4, 7, 2, 85, 24, 2, 895, 234, 36],
                array2 : [3, 4, 24, 2, 85, 7, 2, 895, 234, 36],
                expected : true
            }
        ]
        for (let i = 0; i < battery.length; i++) {
            test(`test ${battery[i].array1} contains the same elements as  ${battery[i].array2}: expect ${battery[i].expected}`, function () {
                expect(FU.array.containSameElements(battery[i].array1, battery[i].array2, (x, y)=> x == y)).toBe(battery[i].expected);
            });
        }
        
    });
    // describe("partition", function () {
    //     let battery = [
    //         {
    //             array : [3, 4, 5, 72, 21, 5, 4, 67],
    //             index : 4,
    //             expectedLeft : []
    //         }
    //     ]
    //     for (let i = 0; i < battery.length; i++) {
    //         test(`test partition ${battery[i].array} against index ${battery[i].index}: expect ${battery[i].expected}`, function () {
    //             expect(FU.array.contains(battery[i].array, battery[i].elt, (x, y)=> x == y)).toBe(battery[i].expected);
    //         });

    //     }
        
    // });
    describe("insert", function () {
        let battery = [
            {
                array : [3, 4, 5, 42],
                elt : {
                    val : 6,
                    index : 1
                },
                expected : [3, 6, 4, 5, 42]
            },
            {
                array : [3, 4, 5, 42],
                elt : {
                    val : 6,
                    index : 0
                },
                expected : [6, 3, 4, 5, 42]
            },
            {
                array : [3, 4, 5, 42],
                elt : {
                    val : 6,
                    index : 3
                },
                expected : [3, 4, 5, 6, 42]
            }
        ]
        for (let i = 0; i < battery.length; i++) {
            test(`test ${battery[i].array} insert ${battery[i].elt.val} at index ${battery[i].elt.index}: expect ${battery[i].expected}`, function () {
                let res = FU.array.insert(battery[i].array, battery[i].elt.val, battery[i].elt.index);
                
                expect(FU.array.isArraysEqual(res, battery[i].expected,  (x, y)=> x == y)).toBe(true);
            });

        }
        
    });
    describe("validateType", function () {
        test("valid", function () {
            expect(FU.array.validateType([2, 5, 8], x => typeof x == "number")).toBe(true);
        });
        test("invalid", function () {
            expect(FU.array.validateType([2, "5", 8], x => typeof x == "number")).toBe(false);
        });
    });
    describe("remove", function () {
        let battery = [
            {
                array : [3, 4, 5, 42],
                elt : {
                    index : 1
                },
                expected : [3, 5, 42]
            },
            {
                array : [3, 4, 5, 42],
                elt : {
                    index : 0
                },
                expected : [4, 5, 42]
            },
            {
                array : [3, 4, 5, 42],
                elt : {
                    index : 3
                },
                expected : [3, 4, 5]
            }
        ]
        for (let i = 0; i < battery.length; i++) {
            test(`test ${battery[i].array} remove at index ${battery[i].elt.index}: expect ${battery[i].expected}`, function () {
                let res = FU.array.remove(battery[i].array, battery[i].elt.index);
                expect(FU.array.isArraysEqual(res, battery[i].expected,  (x, y)=> x == y)).toBe(true);
            });

        }
        
    });
    describe("mergeSortedArrays", function () {
        let battery = [
            {
                arr1 : [1, 3, 40, 72],
                arr2 : [2, 6, 19, 20],
                expected : [1, 2, 3, 6, 19, 20, 40, 72]
            },
            {
                arr1 : [1, 3, 40, 72, 92],
                arr2 : [2, 6, 19, 20],
                expected : [1, 2, 3, 6, 19, 20, 40, 72, 92]
            },
            {
                arr1 : [],
                arr2 : [],
                expected : []
            },
            {
                arr1 : [1, 3, 40],
                arr2 : [2, 6, 19, 20],
                expected : [1, 2, 3, 6, 19, 20, 40]
            }
        ]
        for (let i = 0; i < battery.length; i++) {
            test(`test ${battery[i].arr1} and ${battery[i].arr2}: expect ${battery[i].expected}`, function () {
                let res = FU.array.mergeSortedArrays(battery[i].arr1, battery[i].arr2,  (x, y)=> x - y);
                expect(FU.array.isArraysEqual(res, battery[i].expected,  (x, y)=> x == y)).toBe(true);
            });

        }
        
    });

    describe("clone", function () {
        test("valid inupt", function () {
            let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            let res = FU.array.clone(arr);
            expect(FU.array.isArraysEqual(arr, res, (x:number, y:number) => x == y)).toBe(true);
        });
        test("invalid array throws", function () {
            expect(function () {
                // @ts-ignore
                FU.array.clone("");
            }).toThrow();
        });
    });
    
});

describe("number function suite", function () {
    describe('isNaturalNumber', function () {
        test("positive 42", function () {
            let num = 42;
            expect(FU.number.isNaturalNumber(num)).toBe(true);
        });
        test("positive 82555987", function () {
            let num = 82555987;
            expect(FU.number.isNaturalNumber(num)).toBe(true);
        });
        test("negative (pos non-integer)", function () {
            let num = 42.2;
            expect(FU.number.isNaturalNumber(num)).toBe(false);
        });
        test("negative (negative integer)", function () {
            let num = -1;
            expect(FU.number.isNaturalNumber(num)).toBe(false);
        });
        test("negative (negative non-integer)", function () {
            let num = -0.1;
            expect(FU.number.isNaturalNumber(num)).toBe(false);
        });
    });
    describe('multiply', function () {
        test("valid nonempty array", function () {
            expect(FU.number.multiply([2, 3, 4])).toBe(2 * 3 * 4);
        });
        test("empty array", function () {
            expect(FU.number.multiply([])).toBe(1);
        });

        let battery = [
            {
                array : [3, 7, 12],
                prod : 3 * 7 * 12
            },
            {
                array : [],
                prod : 1
            },
            {
                array : [3, 3, 3, 3, 3],
                prod : 3 * 3 * 3 * 3 * 3
            },
            {
                array : [3, 3, 3, 3, 3, 3],
                prod : 3 * 3 * 3 * 3 * 3 * 3
            }
        ]
        for (let i = 0; i < battery.length; i ++) {
            test(`valid ${battery[i].array}`, function () {
                let res = FU.number.multiply(battery[i].array);
                let expected = battery[i].prod
                expect(res).toBe(expected);
            });
        }
    });
    describe('getFirstFactor', function () {
        test("valid input 15", function () {
            expect(FU.number.getFirstFactor(15)).toBe(3);
        });
        test("valid input 7", function () {
            expect(FU.number.getFirstFactor(7)).toBe(7);
        });

        test("valid input 1", function () {
            expect(FU.number.getFirstFactor(1)).toBe(1);
        });
        test("valid input 2", function () {
            expect(FU.number.getFirstFactor(2)).toBe(2);
        });
        test("valid input 3", function () {
            expect(FU.number.getFirstFactor(3)).toBe(3);
        });
    });
    describe('getPrimeFactors', function () {
        let battery = [
            {
                num : 15,
                factors : [3, 5]
            },
            {
                num : 7,
                factors : [7]
            },
            {
                num : 13,
                factors : [13]
            },
            {
                num : 12,
                factors : [2, 2, 3]
            },
            {
                num : 27,
                factors : [3, 3, 3]
            },
            {
                num : 24908,
                factors : [2, 2, 13, 479]
            }
        ]
        for (let i = 0; i < battery.length; i ++) {
            test(`valid ${battery[i].num}`, function () {
                let res = FU.number.getPrimeFactors(battery[i].num);
                let expected = battery[i].factors
                expect(FU.array.isArraysEqual(res, expected, (x:number, y:number) => x == y )).toBe(true);
            });
        }
    });
    describe('sum', function () {
        let battery = [
            {
                array : [3, 7],
                sum : 10
            },
            {
                array : [],
                sum : 0
            },
            {
                array : [1, 1, 1, 1, 1],
                sum : 5
            },
            {
                array : [1, 1, 1, 1, 1, 1],
                sum : 6
            }
        ]
        for (let i = 0; i < battery.length; i ++) {
            test(`valid ${battery[i].array}`, function () {
                let res = FU.number.sum(battery[i].array);
                let expected = battery[i].sum
                expect(res).toBe(expected);
            });
        }
    });
})

