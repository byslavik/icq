var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
  "username" : { type : String , unique : true, required : true },
  "email" : { type : String , unique : true, required : true },
  "name" : String,
  "password" : { type : String , required : true },
  "lastVisited" : Date,
  "contacts" : Array
});

userSchema.index({ username: 1, email: 1 }, { unique: true })

userSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, function (err, hash) {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {

    return next();
  }
});

userSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;