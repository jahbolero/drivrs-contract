const DRIVRS = artifacts.require('DRIVRS');

module.exports = async function (deployer) {
  await deployer.deploy(
    DRIVRS
    );
};