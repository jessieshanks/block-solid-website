var mongoose = require('mongoose');


var contactFormSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});



var ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;

