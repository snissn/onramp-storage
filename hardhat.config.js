require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {},
      },
    ],
  },
  networks: {
    calibnet: {
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Load your private key from the .env file
    },
    linea: {
      url: "https://rpc.sepolia.linea.build",
      chainId: 59141,
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Add your private key in .env file
    },
	  hedera: {

    url: "https://testnet.hashio.io/api",
    chainId: 296,
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Add your private key in .env file
	  }
  },
  etherscan: {
    apiKey: {
      linea: "RXVBE8WNAMCZ3UABT1XIHXE1YAY9H72TEF", // Your Etherscan API key
      hedera: "RXVBE8WNAMCZ3UABT1XIHXE1YAY9H72TEF", // Your Etherscan API key
    },
    customChains: [
      {
        network: "hedera",
        chainId: 296,
        urls: {
          apiURL: "https://etherscan.io/",
          browserURL: "https://etherscan.io/",
        },
      },
      {
        network: "linea",
        chainId: 59141,
        urls: {
          apiURL: "https://api-sepolia.lineascan.build/api",
          browserURL: "https://sepolia.lineascan.build",
        },
      },
    ],
  },
};


