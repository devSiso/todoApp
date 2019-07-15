//default port
const port = 3003;

//requiring modules
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

//listing server middlewares
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

//registering default port to the server
server.listen(port, function() {
    console.log(`BACKEND IS RUNNING ON PORT: ${port}`);
})

module.exports = server;