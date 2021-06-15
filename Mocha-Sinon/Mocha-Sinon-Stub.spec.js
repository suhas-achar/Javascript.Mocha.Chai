//How stub works behind the scenes
const stubBehindTheScenes = function () {

    const obj = {
        getDbData: function () { console.log("Data returned from DB"); }
    }

    console.log(obj.getDbData());//Data reruned from DB.

    //Copy the DB fucntion to temp function inside the object.
    obj.tempFun = obj.getDbData;

    //Assign fake function.
    obj.getDbData = function () { console.log("Data has been faked."); };

    console.log(obj.getDbData());//Data has been faked.

    //Reassign the original method
    obj.getDbData = obj.tempFun
    console.log(obj.getDbData());//Data reruned from DB.
};
//stubBehindTheScenes();

/* STUBS : Synchrounous method---------------------------------------------------------------------------*/

//const { user } = require('../src/User');
const { user } = require('../src/SendHttpRequest');
const sinon = require('sinon');
const { assert } = require('chai');

suite('Suite: Stub for synchronous method', function () {
    test('Test: Without Stub, greet() should return actual msg.', function () {

        let msg = user.greet("Welcome");
        assert.equal(msg, "Hello, Welcome");

    });

    test('Test: Stub(fake) the greet method. Data should return from fake greet method', function () {

        let stub = sinon.stub(user, 'greet');
        //withArgs(..) is the signature of greet(..) and retuns(...) is the result of the greet method.
        stub.withArgs('Anything').returns('This is the fake Message');
        let msg = user.greetMsg('Anything', 'Cool');
        assert.equal(msg, 'This is the fake Message Cool');

        stub.restore();

    });

    test('Test: Stub(fake) the greet method. Return Different Data for fake greet method', function () {

        let stub = sinon.stub(user, 'greet');

        stub.withArgs('Anything')
            .onCall(0).returns('This is the fake Message')
            .onCall(1).returns('This is the fake Message_1');

        let msg = user.greetMsg('Anything', 'Cool');
        let msg1 = user.greetMsg('Anything', 'Cool');
        assert.equal(msg, 'This is the fake Message Cool');
        assert.equal(msg1, 'This is the fake Message_1 Cool');
        stub.restore();
    });
});



/* STUBS : ASynchrounous method---------------------------------------------------------------------------*/

suite('Suite: Stub for Async', function () {

    test('Test: Without Stub :: Calling Actual Http Service', async function () {
        const email = await user.getUserById(1);
        assert.equal(email, "Sincere@april.biz");
    });

    test('Test: Create Stub :: Calling fake Http Service', async function () {

        const fakeData = {
            id: 5,
            email: 'fakeid@fake.com'
        };

        let stub = sinon.stub(user, 'getUserById');
        stub.withArgs(1).returns(Promise.resolve(fakeData));

        const res = await user.getUserById(1);
        assert.equal(res.email, 'fakeid@fake.com');
        assert.equal(res.id, 5);

    });
});