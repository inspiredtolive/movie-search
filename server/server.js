var express = require('express');
var dbConnection = require('./db_connection');

// Router
var router = require('./routes.js');

var app = express();
// var users = {};
// var rooms = {};
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '../client'));
dbConnection.connect();

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
