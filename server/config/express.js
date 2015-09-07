/**
 * Express configuration
 */

'use strict';

var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('config');
var session =  require('express-session');

module.exports = function(app) {
    app.set('view engine', 'jade');
    app.set('views', 'server/views');

    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        secret: config.get('session.secret'),
        saveUninitialized: false,
        resave: false
    }));

};
