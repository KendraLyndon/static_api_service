var express = require('express');
var router = express.Router();
var users = require('../lib/users');

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.json('../lib/users.js');
});

router.get('/active_users', function(req,res,next){
  res.json('../lib/active_users.js');
});

module.exports = router;
