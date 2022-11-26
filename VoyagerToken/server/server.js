const express = require('express');
const bodyParser = require('body-parser');
const { ethers, Wallet, BigNumber } = require("ethers");

// Config express app
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

// Config ethers
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// Config owner
const owner = require('./owner.json');
const ownerWallet = new Wallet(owner.privateKey, provider);

app.use(function (req, res, next) {
    if (req.method === 'GET') { 
        next(); 
        return;
    }
    const { apiKey } = req.body;
    if (apiKey && apiKey === owner.apiKey) {
        console.log(apiKey);
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
})

// Config contract
const { VoyagerTokenContract } = require("./VoyagerToken.json");
const VoyagerToken = new ethers.Contract(VoyagerTokenContract.address, VoyagerTokenContract.abi);
const { VoyagerNFTContract } = require("./VoyagerNFT.json");
const VoyagerNFT = new ethers.Contract(VoyagerNFTContract.address, VoyagerNFTContract.abi);

const fromWei = ethers.utils.formatEther;
const toWei = ethers.utils.parseEther;

async function getBalance(address) {
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
    res.json({ status: 'success', address, privateKey });
})
app.post('/token/award', async (req, res) => {
    const { address, amount } = req.body;
    try {
        const tx = await VoyagerToken.connect(ownerWallet).awardToken(address, toWei(amount))
        const balance = await getBalance(address);
        res.json({ status: 'success', address, balance });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/token/transfer', async (req, res) => {
    const { sender, senderPrivateKey, receiver, amount } = req.body;
    const senderWallet = new Wallet(senderPrivateKey, provider);
    try {
        const tx = await VoyagerToken.connect(senderWallet).transfer(receiver, toWei(amount));
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
app.get('/account/history', async (req, res) => {
    const { address } = req.query;
    try {
        res.json({ status: 'failed', error: 'Not implemented :))' });
        return;
        const filterFrom = VoyagerToken.filters.Transfer(address, null);
        const filterTo = VoyagerToken.filters.Transfer(null, address);
        const eventsFrom = await VoyagerToken.queryFilter(filterFrom);
        const eventsTo = await VoyagerToken.queryFilter(filterTo);
        const events = [...eventsFrom, ...eventsTo];
        const history = events.map(event => {
            const { from, to, value } = event.args;
            return {
                from,
                to,
                value: fromWei(value)
            }
        })
        res.json({ status: 'success', address, history });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.get('/nft/owner', async (req, res) => {
    const { tokenId } = req.query;
    try {
        const address = await VoyagerNFT.connect(ownerWallet).ownerOf(tokenId)
        res.json({ status: 'success', address, tokenId });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/nft/award', async (req, res) => {
    const { address, url } = req.body;
    try {
        const tx = await VoyagerNFT.connect(ownerWallet).awardNFT(address, url)
        const receipt = await tx.wait();
        const tokenId = BigNumber.from(receipt.events[0].topics[3]).toString();
        res.json({ status: 'success', address, tokenId });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/nft/transfer', async (req, res) => {
    const { sender, senderPrivateKey, receiver, tokenId } = req.body;
    const senderWallet = new Wallet(senderPrivateKey, provider);
    try {
        const tx = await VoyagerNFT.connect(senderWallet).transferFrom(sender, receiver, BigNumber.from(tokenId))
        res.json({ status: 'success' });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})