const { assert } = require('chai');

// .include(haystack, needle, [message])---- Strict Equality (===) is used--------------------
suite('Test Suite: .include() Asserts the inclusion of a value in an array, string, or a subset of properties in an object.', () => {
    test('Test case: Check if the value is present', () => {
        assert.include([1, 2, 3], 2, 'Note: Array does not contain value');
        assert.include('foobar', 'oo', 'Note: String does not contain value');
        assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'Note: object does not contain value');
        //assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'abc' }, 'Note: object does not contain value');
    });
});

// .notInclude(haystack, needle, [message])---- Strict Equality (===) is used-----------------
suite('Test Suite: .notInclude() Asserts a value does not present in an array, string, or a subset of properties in an object. ', () => {
    test('Test case: Check if the value is not present', () => {
        assert.notInclude([1, 2, 3], 5, 'Note: Array contains value');
        assert.notInclude('foobar', 'hi', 'Note: String contains value');
        assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'bar', msg: "some" }, 'Note: object contains value');
        //assert.notInclude([1, 2, 3], 3, 'Note: Array contains value');
    });
});

// .deepInclude(haystack, needle, [message])--------------------------------------------------
suite('Test Suite: .deepInclude() Assert the inclusion of a value in an array or a subset of properties in an object. Deep equality is used.', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 };
    test('Test case: ', () => {
        assert.deepInclude([obj1, obj2], { a: 1 });
        assert.deepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 } });
        assert.deepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 }, bar: { b: 2 } });

    });
});

// .notDeepInclude(haystack, needle, [message])-----------------------------------------------
suite('Test Suite: .notDeepInclude() Assert the absence of a value in an array or a subset of properties in an object. Deep equality is used.', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 };
    test('Test case: ', () => {
        assert.notDeepInclude([obj1, obj2], { a: 9 });
        assert.notDeepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 9 } });
        assert.notDeepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 }, bar: { b: 9 } });
    });
});

// .nestedInclude(haystack, needle, [message])------------------------------------------------
suite('Test Suite: .nestedInclude() Assert the inclusion of a subset of properties in an object.', () => {
    //Enables the use of dot- and bracket-notation for referencing nested properties.
    // ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
    test('Test case: ', () => {
        assert.nestedInclude({ '.a': { 'b': 'x' } }, { '\\.a.b': 'x' });
        assert.nestedInclude({ 'a': { '[b]': 'x' } }, { 'a.\\[b\\]': 'x' });

    });
});

// .notNestedInclude(haystack, needle, [message])---------------------------------------------
suite('Test Suite: .notNestedInclude() Assert the absence of a subset of properties in an object.', () => {
    // Enables the use of dot- and bracket-notation for referencing nested properties. 
    // ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
    test('Test case: ', () => {
        assert.notNestedInclude({ '.a': { 'b': 'x' } }, { '\\.a.b': 'y' });
        assert.notNestedInclude({ 'a': { '[b]': 'x' } }, { 'a.\\[b\\]': 'y' });
    });
});


