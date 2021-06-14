const { assert } = require('chai');
//const chai = require('chai');
//assert = chai.assert;

//Hooks are used to set up preconditions and clean up after tests.
//suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():

suiteSetup(() => { console.log('Before All Suite : Run suiteSetup()'); });
suiteTeardown(() => { console.log('After All Suite : Run suiteTeardown()'); });


suite('Fist Suite', () => {

    suiteSetup(() => { console.log('Before This Suite : Run suiteSetup()'); });
    suiteTeardown(() => { console.log('After This Suite : Run suiteTeardown()'); });

    // setup(() => { console.log('Before Each Test Case : Run Setup()'); });
    // teardown(() => { console.log('After Each Test Case :Run teardown()') });

    test('First  test', () => {
        assert.isOk(true);
    });

    test('Second test', () => {
        assert.isOk(true);
    });
});

suite('Second Suite', () => {

    test('First  test', () => {
        assert.isOk(true);
    });

    test('Second test', () => {
        assert.isOk(true);
    });
});