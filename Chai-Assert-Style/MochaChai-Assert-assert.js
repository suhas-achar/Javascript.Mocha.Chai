const { assert } = require('chai');
//const chai = require('chai');
//assert = chai.assert;

suite('assert(expression, message)', () => {
    test('Write our own epression', () => {
        assert('Hello' != 'Hi', 'Hello is not Hi');
    })
});


