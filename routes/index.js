var express = require('express');        // call express
var router = express.Router();
var isLogged = require('../middleware/is-logged-in')
// routes
var user = require('./users')

router.get('/', isLogged, function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.use('/user', user);

module.exports = router