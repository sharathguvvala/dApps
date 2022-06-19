require("@nomiclabs/hardhat-waffle")
require('dotenv').config()

const Alchemy_Polygon_Testnet = process.env.Alchemy_Polygon_Testnet
const Private_Key = process.env.Private_Key

module.exports = {
  solidity: "0.8.4",
  networks: {
    polygon_mumbai: {
      url: Alchemy_Polygon_Testnet,
      accounts: [Private_Key]
   }
  }
};
