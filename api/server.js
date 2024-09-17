const express = require("express");
const accountsRouter = require('../api/accounts/accounts-router.js')
const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter)

server.use('*', (req, res) => {
    res.status(404).json({ message: 'not found' })
})
module.exports = server;
