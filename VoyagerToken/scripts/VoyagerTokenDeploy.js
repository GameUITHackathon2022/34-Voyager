const hre = require("hardhat");
const fs = require('fs');

const fromWei = hre.ethers.utils.formatEther;
const toWei = hre.ethers.utils.parseEther;

const owner = require('../server/owner.json');
const ownerWallet = new ethers.Wallet(owner.privateKey, hre.ethers.provider);

async function main() {
  console.log(`Deploying VoyagerToken...`);
  try {
    const contract = await hre.ethers.getContractFactory('VoyagerToken', ownerWallet);
    const VoyagerToken = await contract.deploy();
    await VoyagerToken.deployed();

    console.log(`Deploying VoyagerToken successfully:`)

    const address = VoyagerToken.address;
    const name = await VoyagerToken.name();
    const symbol = await VoyagerToken.symbol();
    const abi = VoyagerToken.interface.format();

    console.log(`Address: ${address}`);
    console.log('Owner:', owner.address);
    console.log('Name:', name);
    console.log('Symbol:', symbol);
    console.log('ABI:', abi);

    const VoyagerTokenContract = {
      address,
      abi,
      owner: owner.address,
      name,
      symbol
    }
    fs.writeFileSync(`./server/VoyagerToken.json`, JSON.stringify({ VoyagerTokenContract }, null, 2));
  }
  catch (err) {
    console.log(`Deploying VoyagerToken failed!`);
    console.log(err);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });