
describe('test', () => {

    it('test it', async () => {

        // Jest
        expect(3).toBe(3);
        expect('234').toMatch('234');
        expect('3').toMatchSnapshot();

        // Chai
        expect([3,4,5]).to.be.instanceOf(Array).with.length(3);
        expect([1,2,3]).not.to.be.instanceOf(RegExp);

        // Jest-extended
        expect([3,4,5]).toBeArrayOfSize(3);
        expect('Ham').toBeString();

        // chai-datetime
        expect(new Date(324)).to.be.beforeDate(new Date());
        expect(new Date(324)).to.not.be.afterDate(new Date());

        // chai-string
        expect('chai').to.be.reverseOf('iahc');
        expect('radar').to.be.palindrome();

        // chai-as-promised
        await expect(givePromise()).to.eventually.equal(42);
        await expect(giveRejectedPromise()).to.be.eventually.rejectedWith(42);
    });

});

async function givePromise() {
    return 42;
}
async function giveRejectedPromise() {
    return Promise.reject(42);
}
