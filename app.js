var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var model = require('./models/model.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
mongoose.connect('mongodb://localhost/pvgmgerm');

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants');
});
app.get('/success', function(req, res){
	//refer to success.jade template without the "/" in front of it because it's not a
	//route
	res.render('success');
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	
	var submittedApp = new model.Applicant(req.body);
	submittedApp.save(function (err, product){
		if (err) {
			console.log("Error on line 37 app.js:  ", err);
		}
	});
	res.redirect('/success');
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});