var express = require('express');
var router = express.Router();
var ContactFormSubmission = require('../models/contact-form-submission');
var sendgrid  = require('sendgrid')('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');



/* GET contact form page */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});



/* POST contact form info */
router.post('/', function(req, res) {

  // Post contact form information to database
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


  // Send email with contact form information
  var email = new sendgrid.Email({
    to: 'info@block-solid.com',
    fromname: req.body.name,
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.message
  });

  sendgrid.send(email, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
  });

});




module.exports = router;
