const { assert } = require('chai');

//.skip or  Excluding Test Suite from execution--------------------------------------------------
describe.skip('Test Suite: .skip() Exclude the test suite', () => {
    it('Test case: This is execluded', () => {
        assert.isOk(true);
    });
    it('Test case: This is also execluded', () => {
        assert.isOk(false);
    });
});

//.skip() or  Excluding Test Case from execution-------------------------------------------------
describe('Test Suite: .skip() Execlude the selected test cases', () => {
    it.skip('Test case: This is execluded', () => {
    });
    it('Test case: This is not execluded', () => {
    });
});

// xit() Excluding Test Case from execution------------------------------------------------------
describe('Test Suite: xit() Execlude the selected test cases', () => {
    xit('Test case: This is execluded', () => {
    });
    it('Test case: This is not execluded', () => {
    });
});

//.isOk(object, [message]) ----------------------------------------------------------------------
describe('Test Suite: isOk() Assert if the object is truthy', () => {

    it('Test case: Non zero number is a truthy', () => {

        assert.isOk(123, 'Note: This should be truthy value');
        assert.isOk(true, 'Note: This should be truthy value');
        assert.isOk('abc', 'Note: This should be truthy value');
        assert.isOk(-12, 'Note: This should be truthy value');
        //assert.isOk(0, 'Note: This should be truthy value'); //0 is a falsy value hence fail.

    });
});

//.isNotOk(object, [message]) -------------------------------------------------------------------
describe('Test Suite: isNotOk() Assert if the object is falsy', () => {

    it('Test case: Non zero number is a truthy', () => {

        assert.isNotOk(0, 'Note: This should be falsy value');
        assert.isNotOk(false, 'Note: This should be falsy value');
        assert.isNotOk(undefined, 'Note: This should be falsy value');
        assert.isNotOk(null, 'Note: This should be falsy value');
        assert.isNotOk('', 'Note: This should be falsy value');
        //assert.isNotOk(123, 'Note: This should be falsy value'); //0 is a falsy value hence fail.

    });
});

//.isAbove(valueToCheck, valueToBeAbove, [message]) ---------------------------------------------
describe('Test Suite: .isAbove() Asserts valueToCheck is > valueToBeAbove.', () => {
    it('Test case: First number should be greater than second', () => {

        assert.isAbove(5, 2, "1st number is not greater than 2nd");
        // assert.isAbove(1, 4, "1st number is not greater than 2nd"); 
        // assert.isAbove(5, 5, "1st number is not greater than 2nd"); 
    });
});

//.isAtLeast(valueToCheck, valueToBeAtLeast, [message])------------------------------------------
describe('Test Suite: .isAtleast() Asserts valueToCheck is >= valueToBeAtLeast', () => {

    it('Test Case: First Number should be >= second number', () => {
        assert.isAtLeast(5, 2, '1st is not >= 2nd number');
        assert.isAtLeast(5, 5, '1st is not >= 2nd number');
        //assert.isAtLeast(1, 3, '1st is not >= 2nd number');
    });

});

//.isBelow(valueToCheck, valueToBeBelow, [message])----------------------------------------------
describe('Test Suite: .isBelow() Asserts valueToCheck is < valueToBeBelow', () => {

    it('Test Case: First number should be less than Second number', () => {
        assert.isBelow(1, 2, "1st number is not < 2nd number");
        //assert.isBelow(3, 2, "1st number is not < 2nd number"); 
        //assert.isBelow(2, 2, "1st number is not < 2nd number"); 
    });

});

//.isAtMost(valueToCheck, valueToBeBelow, [message])---------------------------------------------
describe('Test Suite: .isAtMost() Asserts valueToCheck is <= valueToBeBelow', () => {

    it('Test Case: First number should be less than or equal to Second number', () => {
        assert.isAtMost(1, 2, "1st number is not <= 2nd number");
        assert.isAtMost(2, 2, "1st number is not <= 2nd number");
        //assert.isAtMost(3, 2, "1st number is not <= 2nd number"); 
    });

});

// .isExtensible(object)-------------------------------------------------------------------------
describe('Test Suite: .isExtensible() Asserts that object is extensible (can have new properties added to it).', () => {

    const nonExtensibleObject = Object.preventExtensions({});
    const sealedObject = Object.seal({});
    const frozenObject = Object.freeze({});
    const obj = { msg: "I am Extensible" };

    it('Test Case: Check if Extensible', () => {
        assert.isExtensible(obj, 'Note: It should be Extensible');
        //assert.isExtensible(nonExtensibleObject, 'Note: It should be Extensible');
        //assert.isExtensible(sealedObject, 'Note: It should be Extensible');
        //assert.isExtensible(frozenObject, 'Note: It should be Extensible');
    });
});

// .isNotExtensible(object)----------------------------------------------------------------------
describe('Test Suite: .isNotExtensible() Asserts that object is not extensible..', () => {

    const nonExtensibleObject = Object.preventExtensions({});
    const sealedObject = Object.seal({});
    const frozenObject = Object.freeze({});
    const obj = { msg: "I am Extensible" };
    const obj2 = { message: "I am freezed" };
    Object.freeze(obj2);

    it('Test Case: Check if it is not Extensible', () => {
        assert.isNotExtensible(nonExtensibleObject, 'Note: It should not be Extensible');
        assert.isNotExtensible(sealedObject, 'Note: It should not be Extensible');
        assert.isNotExtensible(frozenObject, 'Note: It should not be Extensible');
        assert.isNotExtensible(obj2, 'Note: It should not be Extensible');
        //assert.isNotExtensible(obj, 'Note: It should not be Extensible');
    });
});

// .isSealed(object)-----------------------------------------------------------------------------
describe('Test Suite: .isSealed() Asserts that object is sealed (cannot add/remove properties).', () => {

    const nonExtensibleObject = Object.preventExtensions({});
    const sealedObject = Object.seal({});
    const frozenObject = Object.freeze({});
    const obj = { msg: "I am Extensible" };

    it('Test Case: Check if Sealed', () => {
        assert.isSealed(nonExtensibleObject, 'Note: It should be Sealed');
        assert.isSealed(sealedObject, 'Note: It should be Sealed');
        assert.isSealed(frozenObject, 'Note: It should be Sealed');
        //assert.isSealed(obj, 'Note: It should be Sealed'); 
    });
});

// .isNotSealed(object)-------------------------------------------------------------------------
describe('Test Suite: .isNotSealed() Asserts that object is not Sealed..', () => {

    const nonExtensibleObject = Object.preventExtensions({});
    const sealedObject = Object.seal({});
    const frozenObject = Object.freeze({});
    const obj = { msg: "I am Extensible" };

    it('Test Case:', () => {
        assert.isNotSealed(obj, 'Note: It should not be Sealed');
        //assert.isNotSealed(nonExtensibleObject, 'Note: It should not be Sealed');
        //assert.isNotSealed(sealedObject, 'Note: It should not be Sealed');
        //assert.isNotSealed(frozenObject, 'Note: It should not be Sealed');
    });
});

// .isFrozen(object)-----------------------------------------------------------------------------
describe('Test Suite: .isFrozen() Asserts that object is frozen (cannot add or modify properties.)', () => {

    const nonExtensibleObject = Object.preventExtensions({});
    const sealedObject = Object.seal({});
    const frozenObject = Object.freeze({});
    const obj = { msg: "I am Extensible" };

    it('Test Case: Check if Frozen', () => {
        assert.isFrozen(nonExtensibleObject, 'Note: It should be Sealed');
        assert.isFrozen(sealedObject, 'Note: It should be Sealed');
        assert.isFrozen(frozenObject, 'Note: It should be Sealed');
        //assert.isFrozen(obj, 'Note: It should be Sealed'); 
    });
});

// .isNotFrozen(object)-------------------------------------------------------------------------
describe('Test Suite: .isNotFrozen() Asserts that object is not frozen', () => {

    const nonExtensibleObject = Object.preventExtensions({});
    const sealedObject = Object.seal({});
    const frozenObject = Object.freeze({});
    const obj = { msg: "I am Extensible" };

    it('Test Case: Check if not Frozen', () => {
        assert.isNotFrozen(obj, 'Note: It should not be Frozen');
        //assert.isNotFrozen(nonExtensibleObject, 'Note: It should not be Frozen'); 
        //assert.isNotFrozen(sealedObject, 'Note: It should not be Frozen');
        //assert.isNotFrozen(frozenObject, 'Note: It should not be Frozen');
    });
});

// .isEmpty(target)-----------------------------------------------------------------------------
describe('Test Suite: .isEmpty() Asserts that the target does not contain any values. ', () => {

    it('Test Case: Check if Empty', () => {
        assert.isEmpty([], 'Note: It should be Empty');
        assert.isEmpty('', 'Note: It should be Empty');
        assert.isEmpty(new Map, 'Note: It should be Empty');
        assert.isEmpty({}, 'Note: It should be Empty');
    });
});

// .isNotEmpty(target)-------------------------------------------------------------------------
describe('Test Suite: .isNotEmpty() Asserts that the target contains values.', () => {

    it('Test Case: Check if not Frozen', () => {
        assert.isNotEmpty([1], 'Note: It should not be Empty');
        assert.isNotEmpty('a', 'Note: It should not be Empty');
        assert.isNotEmpty({ a: 'a' }, 'Note: It should not be Empty');
    });
});

//.isTrue(value, [message])----------------------------------------------------------------------
describe('Test Suite: .isTrue() Asserts that value is true.', () => {
    let result = true;
    it('Test case: Checks if the value is true', () => {
        assert.isTrue(result, "Note: It should return true a value");
        //assert.isTrue(false, "Note: It should return true a value"); 
    });

});

//.isNotTrue(value, [message])-------------------------------------------------------------------
describe('Test Suite: .isNotTrue() Asserts that value is not true.', () => {
    let result = false;
    it('Test case: Checks if the value is true', () => {
        assert.isNotTrue(result, "Note: It should not return a true value");
        //assert.isNotTrue(true, "Note: It should not return a true value");
    });
});

//.isFalse(value, [message])---------------------------------------------------------------------
describe('Test Suite: .isFalse() Asserts that value is false.', () => {
    let result = false;
    it('Test case: Checks if the value is false', () => {
        assert.isFalse(result, "Note: It should return false a value");
        //assert.isFalse(true, "Note: It should return false a value"); 
    });

});

//.isNotFalse(value, [message])------------------------------------------------------------------
describe('Test Suite: .isNotFalse() Asserts that value is not false.', () => {
    let result = true;
    it('Test case: Checks if the value is false', () => {
        assert.isNotFalse(result, "Note: It should not return a false value");
        //assert.isNotFalse(false, "Note: It should not return a false value");
    });
});

// .isNull(value, [message])---------------------------------------------------------------------
describe('Test Suite: .isNull() Asserts the value is null', () => {
    it('Test Case: Check if the value is null', () => {
        assert.isNull(null, 'The valud should be null');
        //assert.isNull('', 'The valud should be null');
        //assert.isNull(undefined, 'The valud should be null');
        //assert.isNull('Hi', 'The valud should be null');

    });
});

// .isNotNull(value, [message])------------------------------------------------------------------
describe('Test Suite: .isNotNull() Asserts the value is not null', () => {
    it('Test Case: Check if the value is not null', () => {
        assert.isNotNull('', 'The valud should be null');
        assert.isNotNull(undefined, 'The valud should be null');
        assert.isNotNull('Hi', 'The valud should be null');
        //assert.isNotNull(null, 'The valud should be null');
    });
});

// .isNaN(value, [message])----------------------------------------------------------------------
describe('Test Suite: .isNaN() Asserts the value is NaN', () => {
    it('Test Case: Check if the value is isNaN', () => {
        assert.isNaN(NaN, 'The valud should be NaN');
        //assert.isNaN(null, 'The valud should be NaN');
        //assert.isNaN(undefined, 'The valud should be NaN');
        //assert.isNaN('Hi', 'The valud should be NaN');

    });
});

// .isNotNaN(value, [message])-------------------------------------------------------------------
describe('Test Suite: .isNotNaN() Asserts the value is not NaN', () => {
    it('Test Case: Check if the value is not NaN', () => {
        assert.isNotNaN(null, 'The valud should not be NaN');
        assert.isNotNaN(undefined, 'The valud should not be NaN');
        assert.isNotNaN('Hi', 'The valud should not be NaN');
        //assert.isNotNaN(NaN, 'The valud should be NaN');
    });
});

// .isUndefined(value, [message])----------------------------------------------------------------
describe('Test Suite: .isUndefined() Asserts the value is undefined', () => {
    it('Test Case: Check if the value is undefined', () => {
        assert.isUndefined(undefined, 'The valud should be undefined');
        //assert.isUndefined(null, 'The valud should be NaN');
        //assert.isUndefined(NaN, 'The valud should be NaN');
        //assert.isUndefined('', 'The valud should be NaN');

    });
});

// .isDefined(value, [message])------------------------------------------------------------------
describe('Test Suite: .isDefined() Asserts that value is not undefined.', () => {

    it('Test Case: Check if valid is not undefined', () => {

        assert.isDefined('hi', 'Note: It should not be undefined');
        assert.isDefined(null, 'Note: It should not be undefined');
        assert.isDefined('', 'Note: It should not be undefined');
        assert.isDefined(0, 'Note: It should not be undefined');
        //assert.isDefined(undefined, 'Note: It should not be undefined');

    });
});

// .isFunction(value, [message])-----------------------------------------------------------------
describe('Test Suite: .isFunction() Asserts that value is a function.', () => {
    let f1 = function () { };
    function f2() { }
    let o = {};
    it('Test Case: Check if this is a function', () => {

        assert.isFunction(f1, "Note: This should be a function");
        assert.isFunction(f2, "Note: This should be a function");
        //assert.isFunction(o, "Note: This should be a function");

    });
});

// .isNotFunction(value, [message])--------------------------------------------------------------
describe('Test Suite: .isNotFunction() Asserts that value is not a function.', () => {
    let f1 = function () { };
    let o = {};
    it('Test Case: Check if this is a function', () => {

        assert.isNotFunction(o, "Note: This should not be a function");
        assert.isNotFunction(123, "Note: This should not be a function");
        //assert.isNotFunction(f1, "Note: This should not be a function");

    });
});

// .isObject(value, [message])-------------------------------------------------------------------
describe('Test Suite: .isObject() Asserts that value is an object of type ‘Object’', () => {
    //The assertion does not match subclassed objects.
    let obj = { msg: "hello" };
    let str = "Hi";

    it('Test Case: Check if it is of type Object', () => {
        assert.isObject(obj, 'Note: It should be of type Object');
        //assert.isObject(str, 'Note: It should be of type Object');
    });
});

// .isNotObject(value, [message])----------------------------------------------------------------
describe('Test Suite: .isNotObject() Asserts that value is an object of type ‘Object’', () => {
    //The assertion does not match subclassed objects.
    let obj = { msg: "hello" };
    let str = "Hi";

    it('Test Case: Check if it is not of type Object', () => {
        assert.isNotObject(str, 'Note: It should not be of type Object');
        //assert.isNotObject(obj, 'Note: It should not be of type Object');
    });
});

// .isArray(value, [message])--------------------------------------------------------------------
describe('Test Suite: .isArray() Asserts that value is an array', () => {

    let arr1 = [1, 2, 3];
    let arr2 = [];
    let str = "Hi";
    let obj = { msg: "hello" };

    it('Test Case: Check if it is Array', () => {
        assert.isArray(arr1, 'Note: It should an Array');
        assert.isArray(arr2, 'Note: It should an Array');
        //assert.isArray(str, 'Note: It should an Array');
        //assert.isArray(obj, 'Note: It should an Array');
    });
});

// .isNotArray(value, [message])-----------------------------------------------------------------
describe('Test Suite: .isNotArray() Asserts that value is not an array', () => {

    let arr1 = [1, 2, 3];
    let arr2 = [];
    let str = "Hi";
    let obj = { msg: "hello" };

    it('Test Case: Check if it is not an Array', () => {
        assert.isNotArray(str, 'Note: It should not be an Array');
        assert.isNotArray(obj, 'Note: It should not be an Array');
        //assert.isNotArray(arr1, 'Note: It should not an Array');
        //assert.isNotArray(arr2, 'Note: It should not be an Array');
    });
});

// .isString(value, [message])-------------------------------------------------------------------
describe('Test Suite: .isString() Asserts that value is a string.', () => {

    it('Test Case: Check if it is a String', () => {
        assert.isString('Hi', 'Note: It should a String');
        assert.isString("Hi", 'Note: It should a String ');
        assert.isString('123', 'Note: It should a String ');
        //assert.isString(123, 'Note: It should a String ');
    });
});

// .isNotString(value, [message])----------------------------------------------------------------
describe('Test Suite: .isNotString() Asserts that value is not a string.', () => {

    it('Test Case: Check if it is not a String', () => {
        assert.isNotString(123, 'Note: It should not be a String');
        assert.isNotString(["Hi", "Hello"], 'Note: It should not be  a String ');
        //assert.isNotString('123', 'Note: It should not be  a String ');
    });
});

// .isNumber(value, [message])-------------------------------------------------------------------
describe('Test Suite: .isNumber() Asserts that value is Number.', () => {

    it('Test Case: Check if it is a Number', () => {
        assert.isNumber(123, 'Note: It should be a Number');
        assert.isNumber(0, 'Note: It should be a Number');
        assert.isNumber(-123, 'Note: It should be a Number');
        //assert.isNumber("123", 'Note: It should be a Number');
    });
});

// .isNotNumber(value, [message])----------------------------------------------------------------
describe('Test Suite: .isNotNumber() Asserts that value is not a Number.', () => {

    it('Test Case: Check if it is not a Number', () => {
        assert.isNotNumber("acd", 'Note: It should be a Number');
        assert.isNotNumber("123", 'Note: It should be a Number');
        //assert.isNotNumber(123, 'Note: It should not be a Number');
    });
});

// .isFinite(value, [message])-------------------------------------------------------------------
describe('Test Suite: .isFinite() Asserts that value is a finite number. Unlike .isNumber, this will fail for NaN and Infinity.', () => {

    it('Test Case: Check if it is a Finite Number', () => {
        assert.isFinite(1000, 'Note: It should be a Finite Number');
        assert.isFinite(1000000, 'Note: It should be a Finite Number');
        //assert.isFinite(Infinity, 'Note: It should not be a Number');
        //assert.isFinite(NaN, 'Note: It should not be a Number');
        //assert.isFinite('hello', 'Note: It should be a Finite Number');
        //assert.isFinite(undefined, 'Note: It should not be a Number');
    });
});

// .isBoolean(value, [message])------------------------------------------------------------------
describe('Test Suite: .isBoolean() Asserts that value is a boolean.', () => {

    it('Test Case: Check if it is a Boolean', () => {
        assert.isBoolean(true, 'Note: It should be a Boolean');
        //assert.isBoolean(123, 'Note: It should be a Boolean');
    });
});

// .isNotBoolean(value, [message])---------------------------------------------------------------
describe('Test Suite: .isNotBoolean() Asserts that value is not a boolean.', () => {

    it('Test Case: Check if it is not a Boolean', () => {
        assert.isNotBoolean(123, 'Note: It should not be a Boolean');
        //assert.isNotBoolean(true, 'Note: It should not be a Boolean');
    });
});