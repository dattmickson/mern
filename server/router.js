var Auth = require('./controllers/auth');
var CookBook = require('./controllers/cookbookcontroller');

var passportService = require('./services/passport');
var passport = require('passport');
// var User = require('./models/user');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){
	
	//test
	// app.get('/', requireAuth, function(req, res){
	// 	res.send({message:'hey'});
	// 	//res.send({hi: 'there'});
	// });


	//express.get  for getting data 
	//express.post for posting data
	//req    	   argument that represents an incoming http request ex. where its from 
	//res  		   represents the servers response to a users request
	//next 		   promise for error handeling
	app.post('/api/signup', Auth.signup);
	app.post('/api/signin', requireSignin, Auth.signin);
	app.post('/api/newitem', requireAuth, CookBook.addMeal);
	app.get('/api/items', requireAuth, CookBook.fetchCookBooks);
	app.get('/api/items/:id', requireAuth, CookBook.fetchCookBook);
	app.delete('/api/items/:id', requireAuth, CookBook.deleteCookBook);
}