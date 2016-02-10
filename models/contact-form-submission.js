var mongoose = require('mongoose');


var contactFormSubmissionSchema = new mongoose.Schema({
  name: {type: String, required: true};
  email: {type: String, required: true},
  subject: String,
  message: String,
});



var ContactFormSubmission = mongoose.model('ContactFormSubmission', contactFormSubmissionSchema);

module.exports = TeamMember;

