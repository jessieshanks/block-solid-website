var mongoose = require('mongoose');

var teamMemberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  role: String,
  bio: String,
  picUrl: String,
  activeTeam: Boolean
});

teamMemberSchema.virtual('name').get(function () {
  return this.firstName + ' ' + this.lastName;
});

var TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;

