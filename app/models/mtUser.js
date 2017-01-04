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
	labels: {
			name: 'Name',
			email: 'Email',
			bAdmin: 'Has admin access?',
			username: 'Username',
			password: 'Password'
	},
	permissions: function (user, callback) {

		// Default empty object, which Linz can accept.
			// Defaults everything to true.
			var perms = {
					canCreate: false,
					canDelete: false
			};

      return callback(null, perms);

  },
	grid: {
		columns: {
			name: true,
			username: true,
			email: true,
			bAdmin: true
		}
	},
	form: {
		name: {
			fieldset: 'Details',
			helpText: 'The users full name.'
		},
		email: {
			fieldset: 'Details'
		},
		username: {
			fieldset: 'Access'
		},
		password: {
			fieldset: 'Access',
			widget: linz.formtools.widgets.password()
		},
		bAdmin: {
			fieldset: 'Access',
			helpText: 'This controls if the user has access to admin.'
		}
	},
	overview: {
		summary: {
			fields: {
				name: {
					renderer: linz.formtools.cellRenderers.defaultRenderer
				},
				email: {
					renderer: linz.formtools.cellRenderers.defaultRenderer
				}
			}
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
