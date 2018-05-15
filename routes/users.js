var express = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var User = require('../models/user.model')

router.get('/user-list', function(req, res) {
    User.find({}, function(err, user){
      if (err){
        res.send(err);
      }

      res.json(user);
    })
});

module.exports = router