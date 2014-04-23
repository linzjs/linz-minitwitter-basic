var http = require('http'),
	linz = require('linz'),
	routes = require('./lib/loader')('./routes'),
	port = 3700,
	admin;

// initialize linz, without express (it will be provided)
admin = linz.init();

admin.app.get('/', routes.home);

// start the app
http.createServer(admin.app).listen(port, function(){
	console.log('mini-twitter app started and running on port %s', port);
});