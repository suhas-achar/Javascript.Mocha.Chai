class Calc {
    // constructor(name) {
    //     this.property = name;
    // }

    get brand() { return this.property; }
    set brand(val) { this.property = val; }

    calculate(a, b, callBack) {
        callBack(a, b);
    }

    add(a, b) {
        return a + b;
    }

    // sub(a, b) {
    //     return a - b;
    // }
}

function greeting(msg) {
    return msg;
}

const calc = new Calc();
module.exports = { calc, greeting };