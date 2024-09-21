require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
//require("dotenv").config(); // Ensure you load environment variables from .env

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.20",
                settings: {
                    // evmVersion: "cancun",
                },
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
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
    },
};


