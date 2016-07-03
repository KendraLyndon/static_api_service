var express = require('express');
var router = express.Router();
var users = require('../lib/users');
var logic = require('../controllers/logic.js');

router.get('/users', function(req, res, next) {
  res.json(users);
});

router.get('/active_users', function(req,res,next){
  res.json(logic.returnActiveUsers(users));
});

router.get('/users/:id', function(req,res,next){
  res.json(logic.matchUserById(users,req.params.id));
});

module.exports = router;
