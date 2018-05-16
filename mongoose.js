var mongoose = require('mongoose');
var serverUrl = require('./config/constants').DB_SERVER_URL();
mongoose.Promise = require('q').Promise;
var options = {};

mongoose.connect(serverUrl, options);
var conn = mongoose.connection;

conn.on('error', function(err) {
  console.log('noup', err)
});

conn.once('open', function() {
  console.log('horaay... I`m connected')
});

module.exports = conn