var linz = require('linz');

module.exports = function (req, res, next) {

	// create a default user for Linz
	var mtUser = linz.api.model.get('mtUser'),
		user;

	user = new mtUser({
		name: 'Test user',
		email: 'test@test.com',
		username: 'test',
		password: 'password',
		bAdmin: true
	});

	user.save(function (err, newUserRecord) {

		if (err) {
			return next(err);
		}

		return res.status(200).send('Done');

	});

};
