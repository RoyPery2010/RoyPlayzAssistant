const RoyPlayzCoin = artifacts.require("./RoyPlayzCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(RoyPlayzCoin);
};