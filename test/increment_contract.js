const IncrementContract = artifacts.require("IncrementContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("IncrementContract", function (/* accounts */) {
  it("should assert true", async function () {
    await IncrementContract.deployed();
    return assert.isTrue(true);
  });

  it("should have an incremented count", async function () {
    const contract = await IncrementContract.new();
    const countResult = await contract.readCount();
    assert(await countResult.toNumber() === 0);
    await contract.incrementCount();
    const newCount = await contract.readCount();
    assert(await newCount.toNumber() === 1);
  });
});
