var http = require('http'),
	linz = require('linz'),
	routes = require('./lib/loader')('./routes'),
	port = 3700;

module.exports = function () {

	// basic routes
	linz.app.get('/', routes.home);
	linz.app.get('/bootstrap-users', routes.users);

	// Linz error handling midleware
	linz.app.use(linz.middleware.error);

	// start the app
	http.createServer(linz.app).listen(port, function(){
		console.log('');
		console.log('mini-twitter app started and running on port %s', port);
	});

};
