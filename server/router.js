module.exports = function(app){
	
	//express.get  for getting data 
	//req    	   argument that represents an incoming http request ex. where its from 
	//res  		   represents the servers response to a users request
	//next 		   promise for error handeling
	app.get('/', function(req, res, next){
		res.send('Hello Homepage');
	});

	app.get('/signup', function(req, res, next){
		res.send('Hey folks, Thanks for signing up!')
	})
}