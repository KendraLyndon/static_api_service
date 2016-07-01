var express = require('express');
var router = express.Router();
var users = require('../lib/users');

router.get('/users', function(req, res, next) {
  res.json(users);
});

router.get('/active_users', function(req,res,next){
  res.json(users);
});

module.exports = router;
