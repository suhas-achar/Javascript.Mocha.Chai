const { calc, greeting } = require('../src/Calc');
const sinon = require('sinon');
const { assert, expect } = require('chai');

// const senonChai = require('sinon-chai');
// chai.use(senonChai);


//spy() ------------------------------------------------------------------------------------
suite('Suite: spy(): Sinon Spy test for Callback :: ANONYMOUS', function () {

    test('Test: Calculate() should call Callback once.', function () {
        //Arrange
        const spy = sinon.spy();
        //Act
        calc.calculate(1, 2, spy);
        //Assert
        sinon.assert.calledOnce(spy);//sinon assertion        
    });

    test('Test: Calculate() should call Callback Twice.', function () {

        const spy = sinon.spy();

        calc.calculate(1, 2, spy);
        calc.calculate(5, 7, spy);

        //sinon.assert.calledOnce(spy);//Fail
        sinon.assert.calledTwice(spy);
    });


    test('Test: Calculate() should call the Callback with 5 and 10.', function () {

        const spy = sinon.spy();

        calc.calculate(5, 10, spy);

        sinon.assert.calledWithExactly(spy, 5, 10);
        //sinon.assert.calledWithExactly(spy, 3, 10);//Fail
    });
});

//spy(object, method) ----------------------------------------------------------------------
suite('Suite: spy(obect, method): Sinon Spy test for :: :: OBJECT-METHOD TEST', function () {

    test('Test: should call add() callback once for 1 and 2.', function () {

        const spy = sinon.spy(calc, 'add');

        calc.add(1, 2);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 1, 2);

        //If we dont restore then, Test cases below this test case and inside this suite will throw an Error.
        //Error: Attempted to wrap add which is already wrapped
        spy.restore();
    });

    test('Test: should call add() callback once for 7 and 10.', function () {

        const spy = sinon.spy(calc, 'add');

        calc.add(7, 10);

        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 7, 10);
        spy.restore();

    });

});

//spy(object, method) REFACTORED------------------------------------------------------------
suite('Suite: REFACTORED :spy(obect, method): Sinon Spy test for :: OBJECT-METHOD TEST', function () {
    let spy;
    setup(function () {
        spy = sinon.spy(calc, 'add');
    });


    teardown(function () {
        //If we dont restore then, Test cases below this test case and inside this suite will throw an Error.
        //Error: Attempted to wrap add which is already wrapped

        spy.restore();
    });


    test('Test: should call add() callback once for 1 and 2.', function () {
        calc.add(1, 2);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 1, 2);
    });

    test('Test: should call add() callback once for 7 and 10.', function () {
        calc.add(7, 10);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 7, 10);
    });

});

//spy(object, property, type)---------------------------------------------------------------
suite('Suite: spy(object, property, type): Sinon Spy test for :: GETTER & SETTER TEST', function () {

    test('Test: Tesing  GETTER and SETTER calls', function () {

        const spy = sinon.spy(calc, 'brand', ["get", "set"]);
        calc.brand = "CASIO";  //Here SETTER is invoked  
        sinon.assert.calledOnce(spy.set);

        assert.equal(calc.brand, "CASIO");//Here GETTER is invoked
        sinon.assert.calledOnce(spy.get);

        calc.brand = "ABC";
        sinon.assert.calledTwice(spy.set);//Since it is same "spy" object , it is TWICE
        assert.equal(calc.brand, "ABC");
    });
});



suite('Suite: spy(functon) : Sinon Spy for :: FUNCTION', function () {
    test('Test: Testing function with spy', function () {

        const spy = sinon.spy(greeting);

        const res = spy("Welcome");//Note this it is called using spy.
        assert.equal(res, "Welcome");
        sinon.assert.calledOnce(spy);

    });
});