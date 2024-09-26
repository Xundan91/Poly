require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// const { POLYGON_API_URL, SEPOLIA_API_URL, PRIVATE_KEY } = process.env;
// POLYGON_API_URL = "https://polygon-mainnet.g.alchemy.com/v2/IpoURjHBr1pybhyrehOw6lxX3P-5mJKC"
// SEPOLIA_API_URL = ""
// PRIVATE_KEY = ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon_amoy: {
      url: "https://polygon-amoy.drpc.org",
      accounts: ["0xfb44e426a116faaccedaed18eb4e60a0e94b1c00567e33b74bcaf8e374b5eebe"]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/150089fa54834304a59a0e73bf5deb95",//
      accounts:["0xfb44e426a116faaccedaed18eb4e60a0e94b1c00567e33b74bcaf8e374b5eebe"] ,
      g
    },
  },
};
