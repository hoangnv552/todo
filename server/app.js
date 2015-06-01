var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks');

var app = express();

app.use(express.static(__dirname + '/../bower_components'));
app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());

require('./routes/task')(app);

module.exports = app;