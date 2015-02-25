var mongoose = require('mongoose');

var Applicant = mongoose.model('Application', { 
		name: String,
		bio: String,
		skills: String,
		experience: Number,
		whyWorkHere: String
	});

module.exports = {
	Applicant: Applicant
};