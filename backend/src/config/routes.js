//requiring express module
const express = require('express');

module.exports = function(server) {

    //API Routes
    const router = express.Router();

    //setting up routes with /api uses router
    server.use('/api', router);

    //TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos')
}