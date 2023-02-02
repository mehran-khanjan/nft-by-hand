require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    "bsc-testnet": {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 97,
      // live: true,
      // saveDeployments: true,
      // tags: ["staging"],
      // gasMultiplier: 2,
      gasPrice: 20000000000,
      // gasPrice: 20000000000,
      // gas: 4700000,
      // gasLimit: 40000000
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [`${process.env.MAINNET_PRIVATE_KEY}`],
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: process.env.BSCSCAN_API_KEY
  },
};
