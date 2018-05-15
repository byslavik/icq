var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
var options = {};
var mongodbUri = 'mongodb://db_user_icq:6n1qnwj6@ds119150.mlab.com:19150/heroku_6n1qnwj6';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', function(err) {
  console.log('noup', err)
});

conn.once('open', function() {
  console.log('horaay... I`m connected')
});

module.exports = conn