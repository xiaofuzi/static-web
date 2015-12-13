var express = require('express'),
	serveStatic = require('serve-static'),
	config = require('./config')(),
	log = require('./log');

var app = express();

module.exports = function(root){
	log.notice(root + '/public');
	app.use(serveStatic(root + '/public'));

	app.listen(config.port, function(){
		log.info('Server is running on http://localhost:%d.', config.port);
	})
}