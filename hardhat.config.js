require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.26",
  networks: {
    calibnet: {
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Add your private key in the .env file
    },
  },
};
