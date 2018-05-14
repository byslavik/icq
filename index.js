var mongoose = require('mongoose');

// var User = require('./models/user.model');
// var Dialog = require('./models/dialog.model');
var router = require('./routes')
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

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
var port = process.env.PORT || 8084;        // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);