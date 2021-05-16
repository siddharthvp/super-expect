const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiString = require('chai-string');
const chaiDatetime = require('chai-datetime');
chai.use(chaiAsPromised);
chai.use(chaiString);
chai.use(chaiDatetime);

// Make sure chai and jasmine ".not" play nice together
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get;
Object.defineProperty(chai.Assertion.prototype, 'not', {
    get() {
        Object.assign(this, this.assignedNot);
        return originalNot.apply(this);
    },
    set(newNot) {
        this.assignedNot = newNot;
    },
});

require('jest-extended');

// Combine both jest and chai matchers on expect
const originalExpect = global.expect;

global.expect = (actual) => {
    const originalMatchers = originalExpect(actual);
    const chaiMatchers = chai.expect(actual);
    return Object.assign(chaiMatchers, originalMatchers);
};