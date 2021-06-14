const { assert } = require('chai');
const { Test } = require('mocha');

//PENDING TESTS -------------------------------------------------------------------
//Test-cases without a callback. Someone should write these test cases eventually.
suite('Suite: PENDING tests.', () => {
    test('Test case is not written. Someone has to write later');
});

//.only() EXCLUSIVE TESTS ----------------------------------------------------------
//Run only the specified suite or test-case by appending .only(). 
suite('Suite: EXCLUSIVE tests .only()', () => {

    // suite.only('Suite: Run only this suite', () => {

    //     test.only('Test : Run only this test case', () => {
    //         assert.isOk(true);
    //     })

    //     test('Test : This will not run', () => {
    //         assert.isOk(true);
    //     })
    // })

    // suite('Suite: This suite will not run', () => {
    //     test('Test : This will not run', () => {
    //         assert.isOk(true);
    //     })
    // })

    // test('Test: This will not run', () => {
    //     assert.isOk(true);
    // });

    // test.only('Test: This will not run', () => {
    //     assert.isOk(true);
    // });
});

//.skip() INCLUSIVE TESTS ----------------------------------------------------------
suite('Suite: INCLUSIVE tests .skip()', function () {

    suite.skip('Suite: This suite is skipped', function () {
        test('Test: This will not run', () => {
            assert.isOk(true);
        });
    });

    suite('Suite: Skipping Tests inside the suite', function () {
        test.skip('Test: This is skipped', function () {
            assert.isOk(true);
        });
        test('Test: This will run', function () {
            assert.isOk(true);
        });
    });

    suite('Suite: Skip at runtime.', function () {
        //Note: If a test needs an environment or configuration which cannot be detected beforehand, a runtime skip is appropriate.
        let isTestEnvironmentFine = false;
        if (isTestEnvironmentFine) {/* check test environment */
            test('Test: No issue with environment, We can run the test', function () {
                assert.isOk(true);
            })
        } else {
            this.skip;//Do not call like a function
        }
    });
});

//.retries(2) RETRY SUITES or TESTS ------------------------------------------------
suite('Suite: RETRY Tests .retries()', function () {

    suite('Suite: Retry the Suite', function () {
        this.retries(2);//This suite will retry 2 tiems. Hence all the tests in this suite retry 2 times
        test('Test: Suite is retried', () => {
            assert.isOk(true);
        })
    });

    suite('Suite: Retry the Test case', function () {
        test('Test: Retry this test case', function () {
            this.retries(2);//This Test will retry 2 times.
            assert.isOk(true);
        });
    });
});

//DYNAMICALLY  GENERATING TESTS ----------------------------------------------------
//No special synta, just logical implementation.
suite('Suite: Dynamicall test generation', function () {

    function add(a, b) { return a + b; }

    const tests = [
        { args: [1, 2], expected: 3 },
        { args: [4, 3], expected: 7 },
        { args: [6, 4], expected: 10 }
    ];

    tests.forEach(({ args, expected }) => {
        test(`Correctly adds ${args[0]} + ${args[1]}`, function () {
            assert.strictEqual(add(args[0], args[1]), expected);
        });
    });
});