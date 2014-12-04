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

// test route to make sure everything is working
router.get('/', function(req, res) {
	res.setHeader( "Access-Control-Allow-Origin", req.headers.origin );
	res.json({"enterprises":[{"decimal":0,"organization":"reserved","contact":"Internet Assigned Numbers Authority","email":"iana&iana.org"},{"decimal":1,"organization":"NxNetworks","contact":"Michael Kellen","email":"OID.Admin&NxNetworks.com"}]});	
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Node server.app running! Magic happens on port ' + port);
