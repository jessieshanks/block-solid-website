var mongoose = require('mongoose');


var emailListSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  subscribed: Boolean,
  date: { type: Date, default: Date.now }
});


var EmailList = mongoose.model('EmailList', emailListSchema);

module.exports = EmailList;

