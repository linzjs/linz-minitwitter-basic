var linz = require('linz');

var mtUserSchema = new linz.mongoose.Schema({
	name:  String,
	email: String,
	bAdmin: {
		type: Boolean,
		default: false
	}
});

// add the formtools plugin
mtUserSchema.plugin(linz.formtools.plugin, {
	columns: {
		name: 'Name',
		email: 'Email',
		bAdmin: 'Is Admin'
	},
	usePublishingDate: false,
	usePublishingStatus: false
});

var mtUser = module.exports = linz.mongoose.model('mtUser', mtUserSchema);

mtUser.label = 'Users';
mtUser.singular = 'User';
