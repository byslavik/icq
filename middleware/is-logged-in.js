var passport = require('passport');
var jwt = require('jsonwebtoken');
var secretKey = require('../config/constants').SECRET_KEY

var getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = function(req, res, next) {
  passport.authenticate('jwt', (function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
      console.log(jwt.verify(token, secretKey))
      next()
    } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  })(req, res, next))
}