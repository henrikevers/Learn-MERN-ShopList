const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
	name          : {
		type     : String,
		requires : true
	},
	email         : {
		type     : String,
		requires : true,
		unique   : true
	},
	password      : {
		type     : String,
		requires : true
	},
	register_date : {
		type    : Date,
		default : Date.now
	}
});

module.exports = User = mongoose.model('user', userSchema);
