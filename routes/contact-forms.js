var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')('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');
var ContactForm = require('../models/contact-form');
var EmailList = require('../models/email-list');

var emailsPreviouslyPosted;


function emailNotListed (email) {
  console.log("is trying emailNotListed");
  console.log(emailsPreviouslyPosted)
  for (var i=0; i<emailsPreviouslyPosted.length; i++) {
    if (emailsPreviouslyPosted[i].email===email) {return true;}
  }
  return false;
};


/* GET contact form page */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
  EmailList.find({}, 'email', function(err, emailList) {
    if (err) console.log(err);
    emailsPreviouslyPosted = emailList;
    console.log (emailsPreviouslyPosted);
  });
});



/* POST contact form info */
router.post('/', function(req, res) {

  // Post contact form information to database
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
    }
    res.status(200).json(contactForm);
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


  // Post contact form information to database//
    console.log(emailNotListed(req.body.email));
    if (emailNotListed(res.body.email)) {
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
    }
  //

});




module.exports = router;
