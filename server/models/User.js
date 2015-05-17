var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: '{PATH} is required!'
	},
	lastName: {
		type: String,
		required: '{PATH} is required!'
	},
	username: {
		type: String,
		required: '{PATH} is required!',
		unique: true
	},
	salt: {
		type: String,
		required: '{PATH} is required!'
	},
	hashed_pwd: {
		type: String,
		required: '{PATH} is required!'
	},
	roles: [String]
});

userSchema.methods = {
	authenticate: function(passwordToMatch) {
		return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
	},
	hasRole: function(role) {
		return this.roles.indexOf(role) > -1;
	}
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
	User.find({}).exec(function(err, collection) {
		if (collection.length === 0) {
			var salt, hash;

			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'abakde');
			User.create({
				firstName: 'Aniket',
				lastName: 'Bakde',
				username: 'abakde',
				salt: salt,
				hashed_pwd: hash,
				roles: ['admin']
			});

			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'ajagtap');
			User.create({
				firstName: 'Amol',
				lastName: 'Jagtap',
				username: 'ajagtap',
				salt: salt,
				hashed_pwd: hash,
				roles: []
			});

			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'dchopra');
			User.create({
				firstName: 'Deepanshu',
				lastName: 'Chopra',
				username: 'dchopra',
				salt: salt,
				hashed_pwd: hash
			});
		}
	});
}

exports.createDefaultUsers = createDefaultUsers;