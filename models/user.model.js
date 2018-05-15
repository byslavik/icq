var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "name" : String,
  "mail" : String,
  "password" : String,
  "lastVisited" : Date,
  "contacts" : Array
});

var User = mongoose.model('User', userSchema);

module.exports = User;