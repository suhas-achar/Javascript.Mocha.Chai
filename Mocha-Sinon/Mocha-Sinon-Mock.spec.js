class Book {

    takeBreak() {
        console.log("Take a break ");
    }

    read(book) {
        this.takeBreak();
        return `${book} : Reading Completed.`;
    }
}
//-------------------------------------------------------------------------

const book = new Book()
const sinon = require('sinon');
const { assert } = require('chai');

suite("Suite: Sinon Mock", function () {
    test('Test: Without Mock', function () {

        const res = book.read("Mocha Framework Book");
        assert.equal(res, "Mocha Framework Book : Reading Completed.")
    });

    test('Test: With Mock', function () {

        const mock = sinon.mock(book);
        let expectation = mock.expects('takeBreak');
        expectation.exactly(1);
        const res = book.read("Head First");
        expectation.verify();
    });
});