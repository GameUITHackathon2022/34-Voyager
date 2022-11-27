const express = require('express');
const bodyParser = require('body-parser');
const { ethers, Wallet, BigNumber } = require("ethers");
const {
    addAccount,
    login,
    getPrivateKey,
    getItems,
    addItem,
    addTransaction,
    createTables,
    closeDatabase,
    getTransactions
} = require('./database');

createTables();

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
    } else {
        const { apiKey } = req.body;
        if (apiKey && apiKey === owner.apiKey) {
            next();
        }
        else {
            res.status(401).send('Unauthorized');
        }
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
        res.json({ status: 'success', address, balance });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/account/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const { address, privateKey } = Wallet.createRandom();
        const tx = await ownerWallet.sendTransaction({ to: address, value: toWei('1') });
        await addAccount(username, password, address, privateKey);
        res.json({ status: 'success', address });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/account/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const address = await login(username, password);
        if (address) {
            res.json({ status: 'success', address });
        } else {
            res.json({ status: 'failed', error: 'Invalid username or password' });
        }
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }

})
app.post('/token/award', async (req, res) => {
    const { address, amount } = req.body;
    try {
        const tx = await VoyagerToken.connect(ownerWallet).awardToken(address, toWei(amount))
        const balance = await getBalance(address);
        await addTransaction('Voyager', address, amount, null, Date.now());
        res.json({ status: 'success', address, balance });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/token/transfer', async (req, res) => {
    const { sender, receiver, amount } = req.body;
    const senderPrivateKey = await getPrivateKey(sender);
    console.log(senderPrivateKey);
    const senderWallet = new Wallet(senderPrivateKey, provider);
    try {
        const tx = await VoyagerToken.connect(senderWallet).transfer(receiver, toWei(amount));
        const senderBalance = await getBalance(sender);
        const receiverBalance = await getBalance(receiver);
        await addTransaction(sender, receiver, amount, null, Date.now());
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
app.get('/account/transactions', async (req, res) => {
    const { address } = req.query;
    try {
        const transactions = await getTransactions(address);
        res.json({ status: 'success', address, transactions });
        // const filterFrom = VoyagerToken.filters.Transfer(address, null);
        // const filterTo = VoyagerToken.filters.Transfer(null, address);
        // const eventsFrom = await VoyagerToken.queryFilter(filterFrom);
        // const eventsTo = await VoyagerToken.queryFilter(filterTo);
        // const events = [...eventsFrom, ...eventsTo];
        // const history = events.map(event => {
        //     const { from, to, value } = event.args;
        //     return {
        //         from,
        //         to,
        //         value: fromWei(value)
        //     }
        // })
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
    const { address, url  } = req.body;
    try {
        const tx = await VoyagerNFT.connect(ownerWallet).awardNFT(address, url)
        const receipt = await tx.wait();
        const tokenId = BigNumber.from(receipt.events[0].topics[3]).toString();
        await addItem(tokenId, null, null, url, null, null, null);
        await addTransaction('Voyager', address, null, tokenId, Date.now());
        res.json({ status: 'success', address, tokenId });
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.post('/nft/transfer', async (req, res) => {
    try {
        const { sender, receiver, tokenId } = req.body;
        const senderPrivateKey = await getPrivateKey(sender);
        if (senderPrivateKey) {
            const senderWallet = new Wallet(senderPrivateKey, provider);
            const tx = await VoyagerNFT.connect(senderWallet).transferFrom(sender, receiver, BigNumber.from(tokenId))
            await addTransaction(sender, receiver, null, tokenId, Date.now());
            res.json({ status: 'success', owner: receiver, tokenId });
        } else {
            res.json({ status: 'failed', error: 'Not found sender' });
        }
    }
    catch (error) {
        res.json({ status: 'failed', error });
    }
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


// for debug
// process.stdin.resume();//so the program will not close instantly

// function exitHandler(options, exitCode) {
//     console.log('Closing database');
//     closeDatabase();
//     if (options.cleanup) console.log('clean');
//     if (exitCode || exitCode === 0) console.log(exitCode);
//     if (options.exit) process.exit();
// }

//do something when app is closing
// process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
// process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
// process.on('SIGUSR1', closeDatabase);
// process.on('SIGUSR2', closeDatabase);

//catches uncaught exceptions
// process.on('uncaughtException', exitHandler.bind(null, {exit:true}));
// process.on('beforeExit', closeDatabase);