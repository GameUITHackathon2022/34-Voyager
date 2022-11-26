const express = require('express');
const bodyParser = require('body-parser');
const { ethers, Wallet } = require("ethers");

// Config express app
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

// Config ethers
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const accounts = require('./accounts.json');

// Config owner
const owner = require('./owner.json');
const ownerWallet = new Wallet(owner.privateKey, provider);

// Config contract
const { VoyagerTokenContract } = require("./VoyagerToken.json");
const VoyagerToken = new ethers.Contract(VoyagerTokenContract.address, VoyagerTokenContract.abi);
const { VoyagerNFTContract } = require("./VoyagerNFT.json");
const VoyagerNFT = new ethers.Contract(VoyagerNFTContract.address, VoyagerNFTContract.abi);

const fromWei = ethers.utils.formatEther;
const toWei = ethers.utils.parseEther;

async function getBalance(address) {
    console.log(`Getting balance of ${address}...`);
    const balance = await VoyagerToken.connect(ownerWallet).balanceOf(address);
    return fromWei(balance);
}

app.get('/account/balance', async (req, res) => {
    const { address } = req.query;
    try {
        const balance = await getBalance(address);
        res.json({ status: 'success', address, balance: balance });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.get('/account/new', async (req, res) => {
    const wallet = Wallet.createRandom();
    const { address, privateKey } = wallet;
    accounts.push({ address, privateKey });
    res.json({ status: 'success', address });
})
app.post('/token/award', async (req, res) => {
    const { address, amount } = req.body;
    try {
        await VoyagerToken.connect(ownerWallet).awardToken(address, toWei(amount))
        const balance = await getBalance(address);
        res.json({ status: 'success', address, balance });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }

})
app.post('/token/transfer', async (req, res) => {
    const { sender, receiver, amount } = req.body;
    const senderPrivateKey = accounts.filter(account => account.address === sender)[0].privateKey;
    if (!senderPrivateKey) {
        res.json({ status: 'failed', error: 'Sender not found' });
    }
    const senderWallet = new Wallet(senderPrivateKey, provider);
    try {
        await VoyagerToken.connect(senderWallet).transfer(receiver, toWei(amount))
        const senderBalance = await getBalance(sender);
        const receiverBalance = await getBalance(receiver);
        res.json({
            status: 'success',
            sender: {
                address: sender,
                balance: senderBalance
            },
            receiver: {
                address: receiver,
                balance: receiverBalance
            }
        });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/nft/award', async (req, res) => {
    const { address, url } = req.body;
    console.log(`Awarding NFT to ${url}...`);
    try {
        const tokenId = await VoyagerNFT.connect(ownerWallet).awardNFT(address, url)
        res.json({ status: 'success', address, tokenId: tokenId.toNumber() });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/nft/transfer', async (req, res) => {
    const { sender, receiver, tokenId } = req.body;
    const senderPrivateKey = accounts.filter(account => account.address === sender)[0].privateKey;
    if (!senderPrivateKey) {
        res.json({ status: 'failed', error: 'Sender not found' });
    }
    const senderWallet = new Wallet(senderPrivateKey, provider);
    try {
        await VoyagerNFT.connect(senderWallet).safeTransferFrom(sender, receiver, tokenId)
        res.json({ status: 'success' });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})