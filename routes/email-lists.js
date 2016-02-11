var express = require('express');
var router = express.Router();

var EmailList = require('../models/email-list');

/* GET team members listing. */

router.get('/', function(req, res, next) {
  EmailList.find({}, function(err, emailList) {
    if (err) console.log(err);
    console.log (teamMember);
    res.render('contact', {
      team: teamMember,
      title: "The Block Solid Team"
    });
  });
});



module.exports = router;

