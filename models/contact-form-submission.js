var mongoose = require('mongoose');


var contactFormSubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});



var ContactFormSubmission = mongoose.model('ContactFormSubmission', contactFormSubmissionSchema);

module.exports = TeamMember;

