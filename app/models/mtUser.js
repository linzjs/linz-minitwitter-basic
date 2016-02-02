var linz = require('linz');

var mtUserSchema = new linz.mongoose.Schema({
	name:  String,
	email: String,
	username: String,
	password: String,
	bAdmin: {
		type: Boolean,
		default: false
	}
});

// add the formtools plugin
mtUserSchema.plugin(linz.formtools.plugins.document, {
	model: {
        label: 'User',
        description: 'Manage users.'
    },
	grid: {
		columns: {
			name: 'Name',
			email: 'Email',
			bAdmin: 'Has admin access?'
		}
	},
	form: {
		name: {
			label: 'Name',
			fieldset: 'Details',
			helpText: 'The users full name.'
		},
		email: {
			label: 'Email',
			fieldset: 'Details'
		},
		username: {
			label: 'Username',
			fieldset: 'Access'
		},
		password: {
			label: 'Password',
			fieldset: 'Access',
			widget: linz.formtools.widgets.password()
		},
		bAdmin: {
			label: 'Has admin access?',
			fieldset: 'Access',
			helpText: 'This controls if the user has access to admin.'
		}
	},
	fields: {
		usePublishingDate: false,
		usePublishingStatus: false
	}
});

mtUserSchema.virtual('hasAdminAccess').get(function () {
	return this.bAdmin === true;
});

mtUserSchema.methods.verifyPassword = function (candidatePassword, callback) {
	return callback(null, this.password === candidatePassword);
}

var mtUser = module.exports = linz.mongoose.model('mtUser', mtUserSchema);
