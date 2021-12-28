const IncrementContract = artifacts.require('IncrementContract.sol');

module.exports = function (deployer) {
  deployer.deploy(IncrementContract);
};
