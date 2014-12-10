// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4040; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// GET: returns all enterprises
router.get('/enterprises', function(req, res) {
	console.log('GET request on /enterprises/' + req.params.decimal);
	res.setHeader( "Access-Control-Allow-Origin", req.headers.origin );
	res.json({"enterprises":[{"decimal":0,"organization":"reserved","contact":"Internet Assigned Numbers Authority","email":"iana&iana.org"},{"decimal":1,"organization":"NxNetworks","contact":"Michael Kellen","email":"OID.Admin&NxNetworks.com"}]});	
});

// GET: returns a specific enterprise from the decimal
router.get('/enterprises/:decimal', function(req,res) {
	console.log('GET request on /enterprises/' + req.params.decimal);
	res.setHeader( "Access-Control-Allow-Origin", req.headers.origin );
	res.json({"enterprises":[{"decimal":0,"organization":"reserved","contact":"Internet Assigned Numbers Authority","email":"iana&iana.org"},{"decimal":1,"organization":"NxNetworks","contact":"Michael Kellen","email":"OID.Admin&NxNetworks.com"}]});
});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Node server.app running! Magic happens on port ' + port);
