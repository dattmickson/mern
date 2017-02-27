var Cookbook = require('../models/cookbook.js');

exports.addMeal = function(req,res,next){
	//for postman user
	//var title = req.body.title;
	var title = req.body.props.title;
	var category = req.body.props.category;
	var url = req.body.props.url;
	var ingredients = req.body.props.ingredients;
	var directions = req.body.props.directions;
	var specificUser = req.user;

	var cookBook = new Cookbook({
		title: title,
		category: category,
		url: url,
		ingredients: ingredients,
		directions: directions,
		specificUser: specificUser
	});

	cookBook.save(function(err){
		if(err) { return next(err); }
		res.json(cookBook);
	});
}