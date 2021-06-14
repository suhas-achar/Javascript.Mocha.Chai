const { assert } = require('chai');
//const chai = require('chai');
//assert = chai.assert;

const codeBase = require('./code.js');

describe('Test Suite : String Test', function () {

    it('Should return a string', function () {
        assert.isString("Welcome");
    });
});