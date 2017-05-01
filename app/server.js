var linz = require('linz'),
    dbHost = process.env.DB_HOST || 'localhost';

linz.on('initialised', require('./app'));

// initialize Linz
linz.init({
  options: {
    mongo: `mongodb://${dbHost}/lmt`,
  	'user model': 'mtUser'
  }
});
