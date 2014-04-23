var http = require('http'),
	linz = require('linz'),
	routes = require('./lib/loader')('./routes'),
	express = require('express'),
	mongoose = require('mongoose'),
	port = 3700;

mongoose.connect('mongodb://localhost/linzminitwitter');

// initialize linz, without express (it will be provided)
linz.init(express(), mongoose, {
	'admin path': '/webtop',
	'admin title': 'Mini-twitter'
});

linz.app.get('/', routes.home);

// start the app
http.createServer(linz.app).listen(port, function(){
	console.log('mini-twitter app started and running on port %s', port);
});