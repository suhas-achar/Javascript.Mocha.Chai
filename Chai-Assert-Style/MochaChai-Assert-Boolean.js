const { assert } = require("chai");

const result = true;

suite('Suite: Boolean Testing', () => {

    test('Test case: Boolean Type testing using isBoolean and isNotBoolean', () => {
        assert.isBoolean(result, "Note: It should return a boolean");
        assert.isNotBoolean(123, "Note: It should not return a boolean");
        //assert.isNotBoolean(result, "Note: It should not return a boolean");//This will fail
    });

    test('Test case: Boolean value testing using isTrue and isNotTrue', () => {
        assert.isTrue(result, "Note: It should return true a value");
        assert.isNotTrue(false, "Note: It should not return a true value");
    });

    test('Test case: Boolean testing using isFalse and isNotFalse', () => {
        assert.isFalse(false, "Note: It should return false a value");
        assert.isNotFalse(true, "Note: It should not return a false value");
    });

});
