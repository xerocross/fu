// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
};

describe('array', () => { 

    describe("test isArraysEqual", () => {
        test("empty arrays are equal", () => {
            expect(FU.array.isArraysEqual([], [], (x:number, y:number) => x == y)).toBeTruthy();
        });
        test(`isArraysEqual returns positive on both arrays [${[0, 1, 2, 3, 4, 5, 6, 7]}]`, () => {
            const arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
            const arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(FU.array.isArraysEqual(arr1, arr2, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test(`isArraysEqual returns negative on arrays unequal arrays`, () => {
            const arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
            const arr2 = [0, 1, 5, 3, 4, 5, 6, 7];
            expect(FU.array.isArraysEqual(arr1, arr2, (x:number, y:number) => x == y)).toBeFalsy();
        });
        test("throws on invalid left array", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.isArraysEqual("", [], (x:number, y:number) => x == y);
            }).toThrow();
        });
        test("throws on invalid right array", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.isArraysEqual([], "a", (x:number, y:number) => x == y);
            }).toThrow();
        });
        test("throws on invalid comparison function", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.isArraysEqual([], "a");
            }).toThrow();
        });
    });

    describe("join right suite", () => {
        test("join right nonempty array", () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7];
            const newArr = FU.array.joinRight(arr, 8);
            expect(FU.array.isArraysEqual(newArr, [0, 1, 2, 3, 4, 5, 6, 7, 8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("join right empty array", () => {
            const newArr = FU.array.joinRight([], 8);
            expect(FU.array.isArraysEqual(newArr, [8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("join right on invalid left input", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.joinRight("apple", "pear");
            }).toThrow();
        });
    });
    describe("join left suite", () => {
        test("nonempty array", () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7];
            const newArr = FU.array.joinLeft(arr, 8);
            expect(FU.array.isArraysEqual(newArr, [8, 0, 1, 2, 3, 4, 5, 6, 7], (x:number, y:number) => x == y)).toBe(true);
        });
        test("empty array", () => {
            const newArr = FU.array.joinLeft([], 8);
            expect(FU.array.isArraysEqual(newArr, [8], (x:number, y:number) => x == y)).toBe(true);
        });
        test("on invalid left input", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.joinLeft("apple", "pear");
            }).toThrow();
        });
    });
    describe('test array.replace suite', () => {
        test("invalid array throws", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.replace("apple", 0, "pear");
            }).toThrow();
        });
        test("index not an integer throws", () => {
            expect(() => {
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], 1.5, "pear");
            }).toThrow();
        });
        test("index is invalid type throws", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], "1.5", "pear");
            }).toThrow();
        });
        test("index not in range (below) throws", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], -5, "pear");
            }).toThrow();
        });
        test("index not in range (above) throws", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.replace([0, 1, 2, 3, 4, 5, 6, 7], 72, "pear");
            }).toThrow();
        });
        test("replace positive", () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7];
            const newArr = FU.array.replace(arr, 7, 0);
            expect(newArr[7] == 0).toBe(true);
        });
    });
    describe("array swap suite", () => {
        test("invalid array throws", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.swap("apple", 0, 1);
            }).toThrow();
        });
        test("swap array positive", () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7];
            const newArr = FU.array.swap(arr, 2, 4);
            expect(newArr[2]).toBe(4);
            expect(newArr[4]).toBe(2);
        });
        test("swap array invalid i throws", () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(() => {
                FU.array.swap(arr, -1, 4);
            }).toThrow();
        });
        test("swap array invalid j throws", () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(() => {
                FU.array.swap(arr, 2, 87);
            }).toThrow();
        });
    });
    describe("test bubbleUp suite", () => {
        test("on valid inputs", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            const res = FU.array.bubbleUp(arr, arr.length - 1, (x:number, y:number) => x - y);
            expect(FU.array.isArraysEqual(res, [0, 1, 2, 3, 4, 5, 6, 7, 72], (x:number, y:number) => x == y)).toBe(true);
        });
        test("throws on index < 0", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                FU.array.bubbleUp(arr, -1, (x:number, y:number) => x - y);
            }).toThrow();
        });
        test("throws on index >= arr.length", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                FU.array.bubbleUp(arr, arr.length, (x:number, y:number) => x - y);
            }).toThrow();
        });
        test("throws on invalid arr type", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.bubbleUp("", 5, (x:number, y:number) => x - y);
            }).toThrow();
        });
    });


    test("bubbleSort", () => {
        const arr = [3, 6, 98, 2, 6, 77, 3, 2, 5];
        const res = FU.array.bubbleSort(arr, (x:number, y:number) => x - y);
        expect(isSorted(res,  (x:number, y:number) => x - y)).toBe(true);
    });
    describe("isSorted suite", () => {
        test("on sorted array isSorted finds is sorted", () => {
            const arr = [0, 5, 8, 9, 10, 77];
            expect(FU.array.isSorted(arr, arr.length, (x:number, y:number) => x - y)).toBe(true);
        });
        test("on non-sorted array isSorted finds false", () => {
            const arr = [0, 5, 8, 11, 10, 77];
            expect(FU.array.isSorted(arr, arr.length, (x:number, y:number) => x - y)).toBe(false);
        });
    });

    describe("subarrayMax", () => {
        test("on valid input functions as expected", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            const expectedSubarray = [0, 1, 2, 72];
            expect(FU.array.isArraysEqual(FU.array.subarrayMax(arr, 4), expectedSubarray, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("max is exactly arr.length", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(FU.array.isArraysEqual(FU.array.subarrayMax(arr, arr.length), arr, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("invalid arr throws", () => {
            const arr = "[0,1,2,72,3,4,5,6,7]";
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMax(arr, 5);
            }).toThrow();
        });
        test("invalid max throws (too low)", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMax(arr, -1);
            }).toThrow();
        });
        test("invalid max throws (too high)", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMax(arr, arr.length + 1);
            }).toThrow();
        });
        test("invalid max type string throws", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMax(arr, "");
            }).toThrow();
        });
        test("invalid max not a natural number throws", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMax(arr, 1.3);
            }).toThrow();
        });
    });

    describe("subarrayMin", () => {
        test(`given input ${[0, 1, 2, 72, 3, 4, 5, 6, 7]} and index ${5} subarrayMin finds ${[4, 5, 6, 7]}`, () =>{
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            const expectedSubarray = [4, 5, 6, 7];
            expect(FU.array.isArraysEqual(FU.array.subarrayMin(arr, 5), expectedSubarray, (x:number, y:number) => x == y)).toBeTruthy();
        });
        test("invalid array argument for subarrayMin throws", () => {
            const arr = "[0,1,2,72,3,4,5,6,7]";
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMin(arr, 5);
            }).toThrow();
        });
        test("invalid index on subarrayMin too low throws", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMin(arr, -1);
            }).toThrow();
        });
        test("invalid index on subarrayMin too high throws", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMin(arr, 87);
            }).toThrow();
        });
        test("invalid index type on subarrayMin [string] throws", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMin(arr, "87");
            }).toThrow();
        });
        test("invalid index type on subarrayMin [not an integer] throws", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.subarrayMin(arr, 1.2);
            }).toThrow();
        });
    });
    describe("indexOf", () => {
        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i++) {
            test(`for array ${battery[i].array}  we find indexOf ${battery[i].elt} is ${battery[i].expected}`, () => {
                expect(FU.array.indexOf(battery[i].array, battery[i].elt, (x, y)=> x == y)).toBe(battery[i].expected);
            });

        }
        
    });

    describe("containSameElements", () => {
        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i++) {
            test(`for ${battery[i].array1} contains the same elements as  ${battery[i].array2} find ${battery[i].expected}`, ()=> {
                expect(FU.array.containSameElements(battery[i].array1, battery[i].array2, (x, y)=> x == y)).toBe(battery[i].expected);
            });
        }
        
    });
    describe("insert", () => {
        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i++) {
            test(`given array ${battery[i].array} we insert ${battery[i].elt.val} at index ${battery[i].elt.index} and get ${battery[i].expected}`, () => {
                const res = FU.array.insert(battery[i].array, battery[i].elt.val, battery[i].elt.index);
                
                expect(FU.array.isArraysEqual(res, battery[i].expected,  (x, y)=> x == y)).toBe(true);
            });

        }
        
    });
    describe("validateElementType...", () => {
        test(`on ${[2, 5, 8]} element type is number`, () => {
            expect(FU.array.validateElementType([2, 5, 8], x => typeof x == "number")).toBe(true);
        });
        test(`on ${[2, "5", 8]} element type is not number`, () => {
            expect(FU.array.validateElementType([2, "5", 8], x => typeof x == "number")).toBe(false);
        });
    });
    describe("remove", () => {
        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i++) {
            test(`given array ${battery[i].array} after removing at index ${battery[i].elt.index} result is ${battery[i].expected}`, () => {
                const res = FU.array.remove(battery[i].array, battery[i].elt.index);
                expect(FU.array.isArraysEqual(res, battery[i].expected,  (x, y)=> x == y)).toBe(true);
            });

        }
        
    });
    describe("mergeSortedArrays", () => {
        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i++) {
            test(`merging [${battery[i].arr1}] and [${battery[i].arr2}] is [${battery[i].expected}]`, () => {
                const res = FU.array.mergeSortedArrays(battery[i].arr1, battery[i].arr2,  (x, y)=> x - y);
                expect(FU.array.isArraysEqual(res, battery[i].expected,  (x, y)=> x == y)).toBe(true);
            });

        }
        
    });

    describe("clone", () => {
        test("valid inupt", () => {
            const arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            const res = FU.array.clone(arr);
            expect(FU.array.isArraysEqual(arr, res, (x:number, y:number) => x == y)).toBe(true);
        });
        test("invalid array throws", () => {
            expect(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                FU.array.clone("");
            }).toThrow();
        });
    });
    
});

describe("number function", () => {
    describe('isNaturalNumber evaluates...', () => {
        test("positive 42", () => {
            const num = 42;
            expect(FU.number.isNaturalNumber(num)).toBe(true);
        });
        test("positive on 82555987", () => {
            const num = 82555987;
            expect(FU.number.isNaturalNumber(num)).toBe(true);
        });
        test("negative on 42.2", () => {
            const num = 42.2;
            expect(FU.number.isNaturalNumber(num)).toBe(false);
        });
        test("negative on -1", () => {
            const num = -1;
            expect(FU.number.isNaturalNumber(num)).toBe(false);
        });
        test("negative on -0.1)", () => {
            const num = -0.1;
            expect(FU.number.isNaturalNumber(num)).toBe(false);
        });
    });
    describe('multiply', () => {
        const simpleTestArray = [2, 3, 4];
        const expectedProduct = 2 * 3 * 4;
        test(`valid nonempty array ${simpleTestArray} multiplies to ${expectedProduct}`, () => {
            

            expect(FU.number.multiply(simpleTestArray)).toBe(expectedProduct);
        });
        test("empty array multiplies to 1", () => {
            expect(FU.number.multiply([])).toBe(1);
        });

        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i ++) {
            const expected = battery[i].prod;
            test(`multiplication of ${battery[i].array} finds ${expected} as expected`, () => {
                const res = FU.number.multiply(battery[i].array);
                expect(res).toBe(expected);
            });
        }
    });
    describe('getFirstFactor', () => {
        test("valid input 15", () => {
            expect(FU.number.getFirstFactor(15)).toBe(3);
        });
        test("valid input 7->7", () => {
            expect(FU.number.getFirstFactor(7)).toBe(7);
        });

        test("valid input 1->1", () => {
            expect(FU.number.getFirstFactor(1)).toBe(1);
        });
        test("valid input 2->2", () => {
            expect(FU.number.getFirstFactor(2)).toBe(2);
        });
        test("valid input 3->3", () => {
            expect(FU.number.getFirstFactor(3)).toBe(3);
        });
    });
    describe('getPrimeFactors', () => {
        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i ++) {
            const expected = battery[i].factors;
            test(`find correct factors of ${battery[i].num} -> ${battery[i].factors}`, () => {
                const res = FU.number.getPrimeFactors(battery[i].num);
                expect(FU.array.isArraysEqual(res, expected, (x:number, y:number) => x == y )).toBe(true);
            });
        }
    });
    describe('sum', () => {
        const battery = [
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
        ];
        for (let i = 0; i < battery.length; i ++) {
            test(`find correct sum of ${battery[i].array} is ${battery[i].sum}`, () => {
                const res = FU.number.sum(battery[i].array);
                const expected = battery[i].sum;
                expect(res).toBe(expected);
            });
        }
    });
});