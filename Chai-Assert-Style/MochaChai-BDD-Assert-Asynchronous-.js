function longRunning(items) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('Done');
        }, 1600);
    });
}

//------------------------------------------------------------

const { assert } = require('chai');

describe('Test Suite: Testing Asynchronous function', () => {

    it('Test Case: Should return Done', async () => {
        assert.equal("Done", await longRunning(), "Note: Should be Done");
    });

});
