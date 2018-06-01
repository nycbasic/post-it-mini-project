const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://nycbasic:gqxq143@ds125016.mlab.com:25016/post-it');

mongoose.Promise = Promise;

module.exports.PostIt = require('./postit');
