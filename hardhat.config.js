require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
const {API_URL, PRIVATE_KEY} = process.env;
const fs=require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim()||"01234567890123456789"
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
      chainId:1337,
    },
    matic: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
    ,
    rinkeby:{
      url:"https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId:4,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  solidity: {
    version:"0.8.4",
    settings:{
      optimizer:{
        enabled:true,
        runs:200
      }
    }
  },
};
