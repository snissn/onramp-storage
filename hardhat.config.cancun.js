require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: {
        compilers: [
            {
                version: `0.8.26`,
                settings: {
                    evmVersion: `cancun`,
                },
            },
        ],
    },
    networks: {
        calibnet: {
            url: "https://rpc.ankr.com/filecoin_testnet",
            accounts: [`0x${process.env.PRIVATE_KEY}`], // Add your private key in the .env file
        },
    },
};
