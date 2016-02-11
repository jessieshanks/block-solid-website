var express = require('express');
var router = express.Router();
var ContactFormSubmission = require('../models/contact-form-submission');


/* GET contact form page */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});




/* Post contact form information to database */

router.post('/', function(req, res) {

  var contactFormSubmission = new ContactFormSubmission ({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });

  contactFormSubmission.save(function(err, contactFormSubmission) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(contactFormSubmission);
  });
});




module.exports = router;
