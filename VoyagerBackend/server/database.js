const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const filename = './server/EcoCollector.db';

let db;
async function connectDatabase() {
    try {
        const dbObject = await open({
            filename,
            driver: sqlite3.Database
        });
        console.log('Connected to the database.');
        return dbObject;
    }
    catch (err) {
        console.error(err);
    }
}
async function createTables() {
    try {
        if (!db) {
            db = await connectDatabase();
        }
        await db.exec(`CREATE TABLE IF NOT EXISTS Accounts (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            username TEXT, 
            password TEXT, 
            address TEXT, 
            privateKey TEXT
        )`);
        console.log('Accounts table created.');
        await db.exec(`CREATE TABLE IF NOT EXISTS Items (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            tokenId INTEGER,
            name TEXT, 
            description TEXT, 
            image TEXT, 
            rarity TEXT, 
            price TEXT,
            owner TEXT
        )`);
        console.log('Items table created.');
        await db.exec(`CREATE TABLE IF NOT EXISTS Transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            fromAddress TEXT, 
            toAddress TEXT, 
            amount TEXT, 
            tokenId INTEGER,
            timestamp TEXT
        )`);
        console.log('Transactions table created.');
    }
    catch (err) {
        console.error(err);
    }

}

async function addAccount(username, password, address, privateKey) {
    try {
        const table = await db.run(`INSERT INTO Accounts (
            username, 
            password, 
            address, 
            privateKey
        ) VALUES (?, ?, ?, ?)`,
            [username, password, address, privateKey]);
        console.log(`A row has been inserted with rowid ${table.lastID} into Accounts`);
    }
    catch (err) {
        console.error(err);
    }
}
async function login(username, password) {
    try {
        const result = await db.get(`SELECT address FROM Accounts WHERE username = ? AND password = ?`,
            [username, password]);
        if (result) {
            console.log(`Address is ${result.address}`);
            return result.address;
        } else {
            console.log(`Account not found`);
        }
    }
    catch (err) {
        console.error(err);
    }
}
async function getPrivateKey(address) {
    try {
        const result = await db.get(`SELECT privateKey FROM Accounts WHERE address = ?`,
            [address]);
        if (result) {
            console.log(`Private key is ${result.privateKey}`);
            return result.privateKey;
        } else {
            console.log(`Account not found`);
        }
    }
    catch (err) {
        console.error(err);
    }
}
async function getItems(address) {
    try {
        const items = await db.all(`SELECT * FROM Items WHERE owner = ?`, [address]);
        console.log(`Items are ${items}`);
        return items;
    }
    catch (err) {
        console.error(err);
    }
}
async function addItem(tokenId, name, description, image, rarity, price, owner) {
    try {
        const table = await db.run(`INSERT INTO Items (
            tokenId,
            name, 
            description, 
            image, 
            rarity, 
            price,
            owner
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [tokenId, name, description, image, rarity, price, owner]);
        console.log(`A row has been inserted with rowid ${table.lastID}`);
    }
    catch (err) {
        console.error(err);
    }
}
async function addTransaction(fromAddress, toAddress, amount, tokenId, timestamp) {
    try {
        const table = await db.run(`INSERT INTO Transactions (
            fromAddress,
            toAddress,
            amount,
            tokenId,
            timestamp
        ) VALUES (?, ?, ?, ?, ?)`,
            [fromAddress, toAddress, amount, tokenId, timestamp]);
        console.log(`A row has been inserted with rowid ${table.lastID} into Transactions`);
    }
    catch (err) {
        console.error(err);
    }
}
async function getTransactions(address) {
    try {
        const transactions = await db.all(`SELECT * FROM Transactions WHERE fromAddress = ? OR toAddress = ?`, [address, address]);
        console.log(`Transactions are ${transactions}`);
        return transactions;
    }
    catch (err) {
        console.error(err);
    }
}

async function closeDatabase() {
    try {
        await db.exec('DROP TABLE Accounts');
        await db.exec('DROP TABLE Items');
        await db.exec('DROP TABLE Transactions');
        await db.close();
    }
    catch (err) {
        console.error(err);
    }
}
module.exports = {
    connectDatabase,
    addAccount,
    login,
    getPrivateKey,
    getItems,
    addItem,
    addTransaction,
    createTables,
    closeDatabase,
    getTransactions
}