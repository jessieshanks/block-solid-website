var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')('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');
var ContactForm = require('../models/contact-form');
var EmailList = require('../models/email-list');



/* GET contact form page */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});



/* POST contact form info */
router.post('/', function(req, res) {


  // Post contact form data to contact form collection in db
  var contactForm = new ContactForm ({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  contactForm.save(function(err, contactForm) {
    if (err) {
      console.log(err);
      throw err;
    } else {

      // post new email addresses to email list collection in db
      EmailList.find({ email: req.body.email }, 'email', function(err, emailList) {
        if (err) console.log(err);
        if (!emailList.length) {
            var emailList = new EmailList ({
              name: req.body.name,
              email: req.body.email,
              subscribed: true,
            });
            emailList.save(function(err, emailList) {
              if (err) {
                console.log(err);
                throw err;
              }
              res.status(200).json(emailList);
            });
        };
      });
    }
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
