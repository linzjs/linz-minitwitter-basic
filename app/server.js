var linz = require('linz');

linz.on('initialised', require('./app'));

// initialize Linz
linz.init({
	mongo: 'mongodb://localhost/lmt',
	'user model': 'mtUser'
});
