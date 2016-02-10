var mongoose = require('mongoose');


var emailContactSchema = new mongoose.Schema({
  name: {type: String, required: true};
  email: {type: String, required: true, unique: true},
});


var EmailContact = mongoose.model('EmailContact', emailContactSchema);

module.exports = TeamMember;

