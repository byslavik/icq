var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router

// routes
var user = require('./users')

router.use(function(req, res, next) {
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.use('/user', user);

module.exports = router