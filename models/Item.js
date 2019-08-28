const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const itemSchema = new Schema({
	name : {
		type     : String,
		requires : true
	},
	date : {
		type    : Date,
		default : Date.now
	}
});

module.exports = Item = mongoose.model('item', itemSchema);
