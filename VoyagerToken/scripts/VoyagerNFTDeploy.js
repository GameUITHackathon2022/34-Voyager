const hre = require("hardhat");
const fs = require('fs');

const fromWei = hre.ethers.utils.formatEther;
const toWei = hre.ethers.utils.parseEther;

const owner = require('../server/owner.json');
const ownerWallet = new ethers.Wallet(owner.privateKey, hre.ethers.provider);

async function main() {
  console.log(`Deploying VoyagerNFT...`);
  try {
    const contract = await hre.ethers.getContractFactory('VoyagerNFT', ownerWallet);
    const VoyagerNFT = await contract.deploy();
    await VoyagerNFT.deployed();

    console.log(`Deploying VoyagerNFT successfully:`)

    const address = VoyagerNFT.address;
    const name = await VoyagerNFT.name();
    const symbol = await VoyagerNFT.symbol();
    const abi = VoyagerNFT.interface.format();

    console.log(`Address: ${address}`);
    console.log('Owner:', owner.address);
    console.log('Name:', name);
    console.log('Symbol:', symbol);
    console.log('ABI:', abi);

    const VoyagerNFTContract = {
      address,
      abi,
      owner: owner.address,
      name,
      symbol
    }
    fs.writeFileSync(`./server/VoyagerNFT.json`, JSON.stringify({ VoyagerNFTContract }, null, 2));
  }
  catch (err) {
    console.log(`Deploying VoyagerNFT failed!`);
    console.log(err);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });