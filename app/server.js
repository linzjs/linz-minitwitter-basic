var http = require('http'),
	linz = require('linz'),
	port = 3700,
	admin;

// initialize linz, without express (it will be provided)
admin = linz.init();

// start the app
http.createServer(admin.app).listen(port, function(){
	console.log('mini-twitter app started and running on port %s', port);
});