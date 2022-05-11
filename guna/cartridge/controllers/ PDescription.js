'use strict';

//require the server module
var server = require('server');

var cacheHandler = require('*/cartridge/scripts/cacheHandler');

//define the route using the server.get method and Start function
server.get('Show', function (req, res, next) {
	
	
	res.render('promodescription');

	//execute the next function to notify the server that you're done with a step	
	next();
	
});

//call server.exports() to register all functions
module.exports = server.exports();