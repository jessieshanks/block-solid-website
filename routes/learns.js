var express = require('express');
var router = express.Router();


/* GET learn more page. */

router.get('/', function(req, res) {
  res.render('learn');
});

module.exports = router;
