"use strict";
exports.__esModule = true;
//@ts-ignore
var functional_utility_1 = require("./functional-utility");
var isSorted = function (arr, compareFunction) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (compareFunction(arr[i], arr[i + 1]) > 0) {
            return false;
        }
    }
    return true;
};
describe('test array suite', function () {
    describe("test isArraysEqual", function () {
        test("empty arrays", function () {
            expect(functional_utility_1["default"].array.isArraysEqual([], [], function (x, y) {
                return x == y; 
            })).toBeTruthy();
        });
        test("isArraysEqual positive", function () {
            var arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
            var arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(functional_utility_1["default"].array.isArraysEqual(arr1, arr2, function (x, y) {
                return x == y; 
            })).toBeTruthy();
        });
        test("isArraysEqual negative", function () {
            var arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
            var arr2 = [0, 1, 5, 3, 4, 5, 6, 7];
            expect(functional_utility_1["default"].array.isArraysEqual(arr1, arr2, function (x, y) {
                return x == y; 
            })).toBeFalsy();
        });
        test("throws on invalid left array", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.isArraysEqual("", [], function (x, y) {
                    return x == y; 
                });
            }).toThrow();
        });
        test("throws on invalid right array", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.isArraysEqual([], "a", function (x, y) {
                    return x == y; 
                });
            }).toThrow();
        });
        test("throws on invalid comparison function", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.isArraysEqual([], "a");
            }).toThrow();
        });
    });
    describe("join right suite", function () {
        test("join right nonempty array", function () {
            var arr = [0, 1, 2, 3, 4, 5, 6, 7];
            var newArr = functional_utility_1["default"].array.joinRight(arr, 8);
            expect(functional_utility_1["default"].array.isArraysEqual(newArr, [0, 1, 2, 3, 4, 5, 6, 7, 8], function (x, y) {
                return x == y; 
            })).toBe(true);
        });
        test("join right empty array", function () {
            var newArr = functional_utility_1["default"].array.joinRight([], 8);
            expect(functional_utility_1["default"].array.isArraysEqual(newArr, [8], function (x, y) {
                return x == y; 
            })).toBe(true);
        });
        test("join right on invalid left input", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.joinRight("apple", "pear");
            }).toThrow();
        });
    });
    describe("join left suite", function () {
        test("nonempty array", function () {
            var arr = [0, 1, 2, 3, 4, 5, 6, 7];
            var newArr = functional_utility_1["default"].array.joinLeft(arr, 8);
            expect(functional_utility_1["default"].array.isArraysEqual(newArr, [8, 0, 1, 2, 3, 4, 5, 6, 7], function (x, y) {
                return x == y; 
            })).toBe(true);
        });
        test("empty array", function () {
            var newArr = functional_utility_1["default"].array.joinLeft([], 8);
            expect(functional_utility_1["default"].array.isArraysEqual(newArr, [8], function (x, y) {
                return x == y; 
            })).toBe(true);
        });
        test("on invalid left input", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.joinLeft("apple", "pear");
            }).toThrow();
        });
    });
    describe('test array.replace suite', function () {
        test("invalid array throws", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.replace("apple", 0, "pear");
            }).toThrow();
        });
        test("index not an integer throws", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.replace([0, 1, 2, 3, 4, 5, 6, 7], 1.5, "pear");
            }).toThrow();
        });
        test("index is invalid type throws", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.replace([0, 1, 2, 3, 4, 5, 6, 7], "1.5", "pear");
            }).toThrow();
        });
        test("index not in range (below) throws", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.replace([0, 1, 2, 3, 4, 5, 6, 7], -5, "pear");
            }).toThrow();
        });
        test("index not in range (above) throws", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.replace([0, 1, 2, 3, 4, 5, 6, 7], 72, "pear");
            }).toThrow();
        });
        test("replace positive", function () {
            var arr = [0, 1, 2, 3, 4, 5, 6, 7];
            var newArr = functional_utility_1["default"].array.replace(arr, 7, 0);
            expect(newArr[7] == 0).toBe(true);
        });
    });
    describe("array swap suite", function () {
        test("invalid array throws", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.swap("apple", 0, 1);
            }).toThrow();
        });
        test("swap array positive", function () {
            var arr = [0, 1, 2, 3, 4, 5, 6, 7];
            var newArr = functional_utility_1["default"].array.swap(arr, 2, 4);
            expect(newArr[2]).toBe(4);
            expect(newArr[4]).toBe(2);
        });
        test("swap array invalid i throws", function () {
            var arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(function () {
                functional_utility_1["default"].array.swap(arr, -1, 4);
            }).toThrow();
        });
        test("swap array invalid j throws", function () {
            var arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(function () {
                functional_utility_1["default"].array.swap(arr, 2, 87);
            }).toThrow();
        });
    });
    describe("test bubbleUp suite", function () {
        test("on valid inputs", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            var res = functional_utility_1["default"].array.bubbleUp(arr, arr.length - 1, function (x, y) {
                return x - y; 
            });
            expect(functional_utility_1["default"].array.isArraysEqual(res, [0, 1, 2, 3, 4, 5, 6, 7, 72], function (x, y) {
                return x == y; 
            })).toBe(true);
        });
        test("throws on index < 0", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                functional_utility_1["default"].array.bubbleUp(arr, -1, function (x, y) {
                    return x - y; 
                });
            }).toThrow();
        });
        test("throws on index >= arr.length", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                functional_utility_1["default"].array.bubbleUp(arr, arr.length, function (x, y) {
                    return x - y; 
                });
            }).toThrow();
        });
        test("throws on invalid arr type", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.bubbleUp("", 5, function (x, y) {
                    return x - y; 
                });
            }).toThrow();
        });
    });
    test("bubbleSort", function () {
        var arr = [3, 6, 98, 2, 6, 77, 3, 2, 5];
        var res = functional_utility_1["default"].array.bubbleSort(arr, function (x, y) {
            return x - y; 
        });
        expect(isSorted(res, function (x, y) {
            return x - y; 
        })).toBe(true);
    });
    describe("isSorted suite", function () {
        test("isSorted positive", function () {
            var arr = [0, 5, 8, 9, 10, 77];
            expect(functional_utility_1["default"].array.isSorted(arr, arr.length, function (x, y) {
                return x - y; 
            })).toBe(true);
        });
        test("isSorted negative", function () {
            var arr = [0, 5, 8, 11, 10, 77];
            expect(functional_utility_1["default"].array.isSorted(arr, arr.length, function (x, y) {
                return x - y; 
            })).toBe(false);
        });
    });
    describe("subarrayMax", function () {
        test("valid input", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            var expectedSubarray = [0, 1, 2, 72];
            expect(functional_utility_1["default"].array.isArraysEqual(functional_utility_1["default"].array.subarrayMax(arr, 4), expectedSubarray, function (x, y) {
                return x == y; 
            })).toBeTruthy();
        });
        test("max is exactly arr.length", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(functional_utility_1["default"].array.isArraysEqual(functional_utility_1["default"].array.subarrayMax(arr, arr.length), arr, function (x, y) {
                return x == y; 
            })).toBeTruthy();
        });
        test("invalid arr throws", function () {
            var arr = "[0,1,2,72,3,4,5,6,7]";
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMax(arr, 5);
            }).toThrow();
        });
        test("invalid max throws (too low)", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMax(arr, -1);
            }).toThrow();
        });
        test("invalid max throws (too high)", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMax(arr, arr.length + 1);
            }).toThrow();
        });
        test("invalid max type", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMax(arr, "");
            }).toThrow();
        });
        test("invalid max not a natural number", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMax(arr, 1.3);
            }).toThrow();
        });
    });
    describe("subarrayMin", function () {
        test("valid input", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            var expectedSubarray = [4, 5, 6, 7];
            expect(functional_utility_1["default"].array.isArraysEqual(functional_utility_1["default"].array.subarrayMin(arr, 5), expectedSubarray, function (x, y) {
                return x == y; 
            })).toBeTruthy();
        });
        test("invalid arr throws", function () {
            var arr = "[0,1,2,72,3,4,5,6,7]";
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMin(arr, 5);
            }).toThrow();
        });
        test("invalid index low throws", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMin(arr, -1);
            }).toThrow();
        });
        test("invalid index high throws", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMin(arr, 87);
            }).toThrow();
        });
        test("invalid index type string throws", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMin(arr, "87");
            }).toThrow();
        });
        test("invalid index type not an integer throws", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.subarrayMin(arr, 1.2);
            }).toThrow();
        });
    });
    describe("indexOf", function () {
        var battery = [
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
        var _loop_1 = function (i) {
            test("test " + battery[i].array + " indexOf " + battery[i].elt + ": expect " + battery[i].expected, function () {
                expect(functional_utility_1["default"].array.indexOf(battery[i].array, battery[i].elt, function (x, y) {
                    return x == y; 
                })).toBe(battery[i].expected);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_1(i);
        }
    });
    describe("indexOf", function () {
        var battery = [
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
        var _loop_2 = function (i) {
            test("test " + battery[i].array1 + " contains the same elements as  " + battery[i].array2 + ": expect " + battery[i].expected, function () {
                expect(functional_utility_1["default"].array.containSameElements(battery[i].array1, battery[i].array2, function (x, y) {
                    return x == y; 
                })).toBe(battery[i].expected);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_2(i);
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
        var battery = [
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
        var _loop_3 = function (i) {
            test("test " + battery[i].array + " insert " + battery[i].elt.val + " at index " + battery[i].elt.index + ": expect " + battery[i].expected, function () {
                var res = functional_utility_1["default"].array.insert(battery[i].array, battery[i].elt.val, battery[i].elt.index);
                expect(functional_utility_1["default"].array.isArraysEqual(res, battery[i].expected, function (x, y) {
                    return x == y; 
                })).toBe(true);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_3(i);
        }
    });
    describe("validateType", function () {
        test("valid", function () {
            expect(functional_utility_1["default"].array.validateType([2, 5, 8], function (x) {
                return typeof x == "number"; 
            })).toBe(true);
        });
        test("invalid", function () {
            expect(functional_utility_1["default"].array.validateType([2, "5", 8], function (x) {
                return typeof x == "number"; 
            })).toBe(false);
        });
    });
    describe("remove", function () {
        var battery = [
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
        var _loop_4 = function (i) {
            test("test " + battery[i].array + " remove at index " + battery[i].elt.index + ": expect " + battery[i].expected, function () {
                var res = functional_utility_1["default"].array.remove(battery[i].array, battery[i].elt.index);
                expect(functional_utility_1["default"].array.isArraysEqual(res, battery[i].expected, function (x, y) {
                    return x == y; 
                })).toBe(true);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_4(i);
        }
    });
    describe("mergeSortedArrays", function () {
        var battery = [
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
        var _loop_5 = function (i) {
            test("test " + battery[i].arr1 + " and " + battery[i].arr2 + ": expect " + battery[i].expected, function () {
                var res = functional_utility_1["default"].array.mergeSortedArrays(battery[i].arr1, battery[i].arr2, function (x, y) {
                    return x - y; 
                });
                expect(functional_utility_1["default"].array.isArraysEqual(res, battery[i].expected, function (x, y) {
                    return x == y; 
                })).toBe(true);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_5(i);
        }
    });
    describe("clone", function () {
        test("valid inupt", function () {
            var arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
            var res = functional_utility_1["default"].array.clone(arr);
            expect(functional_utility_1["default"].array.isArraysEqual(arr, res, function (x, y) {
                return x == y; 
            })).toBe(true);
        });
        test("invalid array throws", function () {
            expect(function () {
                // @ts-ignore
                functional_utility_1["default"].array.clone("");
            }).toThrow();
        });
    });
});
describe("number function suite", function () {
    describe('isNaturalNumber', function () {
        test("positive 42", function () {
            var num = 42;
            expect(functional_utility_1["default"].number.isNaturalNumber(num)).toBe(true);
        });
        test("positive 82555987", function () {
            var num = 82555987;
            expect(functional_utility_1["default"].number.isNaturalNumber(num)).toBe(true);
        });
        test("negative (pos non-integer)", function () {
            var num = 42.2;
            expect(functional_utility_1["default"].number.isNaturalNumber(num)).toBe(false);
        });
        test("negative (negative integer)", function () {
            var num = -1;
            expect(functional_utility_1["default"].number.isNaturalNumber(num)).toBe(false);
        });
        test("negative (negative non-integer)", function () {
            var num = -0.1;
            expect(functional_utility_1["default"].number.isNaturalNumber(num)).toBe(false);
        });
    });
    describe('multiply', function () {
        test("valid nonempty array", function () {
            expect(functional_utility_1["default"].number.multiply([2, 3, 4])).toBe(2 * 3 * 4);
        });
        test("empty array", function () {
            expect(functional_utility_1["default"].number.multiply([])).toBe(1);
        });
        var battery = [
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
        var _loop_6 = function (i) {
            test("valid " + battery[i].array, function () {
                var res = functional_utility_1["default"].number.multiply(battery[i].array);
                var expected = battery[i].prod;
                expect(res).toBe(expected);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_6(i);
        }
    });
    describe('getFirstFactor', function () {
        test("valid input 15", function () {
            expect(functional_utility_1["default"].number.getFirstFactor(15)).toBe(3);
        });
        test("valid input 7", function () {
            expect(functional_utility_1["default"].number.getFirstFactor(7)).toBe(7);
        });
        test("valid input 1", function () {
            expect(functional_utility_1["default"].number.getFirstFactor(1)).toBe(1);
        });
        test("valid input 2", function () {
            expect(functional_utility_1["default"].number.getFirstFactor(2)).toBe(2);
        });
        test("valid input 3", function () {
            expect(functional_utility_1["default"].number.getFirstFactor(3)).toBe(3);
        });
    });
    describe('getPrimeFactors', function () {
        var battery = [
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
        var _loop_7 = function (i) {
            test("valid " + battery[i].num, function () {
                var res = functional_utility_1["default"].number.getPrimeFactors(battery[i].num);
                var expected = battery[i].factors;
                expect(functional_utility_1["default"].array.isArraysEqual(res, expected, function (x, y) {
                    return x == y; 
                })).toBe(true);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_7(i);
        }
    });
    describe('sum', function () {
        var battery = [
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
        var _loop_8 = function (i) {
            test("valid " + battery[i].array, function () {
                var res = functional_utility_1["default"].number.sum(battery[i].array);
                var expected = battery[i].sum;
                expect(res).toBe(expected);
            });
        };
        for (var i = 0; i < battery.length; i++) {
            _loop_8(i);
        }
    });
});
