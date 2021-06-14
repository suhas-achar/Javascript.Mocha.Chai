const { assert } = require('chai');
//const chai = require('chai');
//assert = chai.assert;

describe('assert(expression, message)', () => {

    it('Write our own epression', () => {
        assert('Hello' != 'Hi', 'Hello is not Hi');
    })

});



