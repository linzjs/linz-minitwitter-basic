var http = require('http'),
	linz = require('linz'),
	routes = require('./lib/loader')('./routes'),
	port = 3700;

// initialize linz, without express (it will be provided)
linz.init({
	mongo: 'mongodb://localhost/linzminitwitter',
	'user model': 'mtUser'
});

linz.app.get('/', routes.home);

// start the app
http.createServer(linz.app).listen(port, function(){
	console.log('mini-twitter app started and running on port %s', port);
});