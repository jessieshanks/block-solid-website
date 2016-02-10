var express = require('express');
var router = express.Router();

var TeamMember = require('../models/team-member');

/* GET team members listing. */

router.get('/', function(req, res, next) {
  TeamMember.find({'activeTeam': true}, function(err, teamMember) {
    if (err) console.log(err);
    console.log (teamMember);
    res.render('team', {
      team: teamMember,
      title: "The Block Solid Team"
    });
  });
});



module.exports = router;

