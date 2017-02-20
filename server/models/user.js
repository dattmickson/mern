//import mongoose
var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');

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

userSchema.pre('save', function(next){
	var user = this;

	bcrypt.genSalt(10, function(err, salt){
		if(err){ return next(err); }

		bcrypt.hash(user.password, salt, null, function(err, hash){
			if (err){ return next(err); }

			user.password = hash;
			next();
		})
	})
})

//creates new users and loads schema into mongoose    corresponds to a collection called 'user' (the first parameter)
var model = mongoose.model('user', userSchema);

//export the model

module.exports = model;