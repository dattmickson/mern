//import mongoose
var mongoose = require("mongoose");

//create schema variable, this tells mongoose about particular fields our models will have
var Schema = mongoose.Schema;

var userSchema = new Schema ({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String

});

//creates new users and loads schema into mongoose    corresponds to a collection called 'user' (the first parameter)
var model = mongoose.model('user', userSchema);

//export the model

module.exports = model;