'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || "development";

var express = require("express");
var config = require("config");

// Setup server
var app = express();

//config application
require('./config')(app);

//load routes
require('./routes')(app);

//setup error handler
//require('./config/error')(app);

var server = require("http").createServer(app);
// Start server
server.listen(config.get("server.port"), config.get("server.ip"), function () {
    console.log("Express server listening on " + config.get("server.port") + ", in " + app.get("env") + " mode");
});

// Expose app
module.exports = app;
