const ethers = require("ethers");

// Config ethers
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// Config owner
const owner = require('./owner.json');
const ownerWallet = new ethers.Wallet(owner.privateKey, provider);

// Config contract
const { address, abi } = require("../contracts/MinhLamToken.json");
const contract = new ethers.Contract(address, abi);
// contract.connect(ownerWallet).owner().then(console.log)

const fromWei = ethers.utils.formatEther;
const toWei = ethers.utils.parseEther;
