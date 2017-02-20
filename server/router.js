var Auth = require('./controllers/auth');
var User = require('./models/user');


module.exports = function(app){
	
	//express.get  for getting data 
	//express.post for posting data
	//req    	   argument that represents an incoming http request ex. where its from 
	//res  		   represents the servers response to a users request
	//next 		   promise for error handeling
	app.post('/signup', Auth.signup);
}