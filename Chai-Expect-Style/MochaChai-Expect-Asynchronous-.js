let list = [];
function setList(items) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            len = items.length;
            for (i = 0; i < len; i++) {
                list.push(items[i]);
            }
            resolve(list);
        }, 1600);
    });
}

//------------------------------------------------------------

const { expect } = require('chai');
let items = ["Milk", "Coffee", "Tea"];

describe('Test Suite: Testing Asynchronous function', () => {

    it('Test Case: Should return list', async () => {
        expect(await setList(items)).deep.equal(["Milk", "Coffee", "Tea"]);
    });

});
