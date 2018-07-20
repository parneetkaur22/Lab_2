var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parneet_kaur', { name: 'Parneet Kaur', age: '20', program: 'Interactive Media Design Web', description: 'I love reading books'});
});

module.exports = router;