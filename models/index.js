const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/postit');

mongoose.Promise = Promise;

module.exports.PostIt = require('./postit');
