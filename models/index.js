const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(
	'mongodb+srv://nycbasic:Cqxq1433@!@web-development-projects-b1s6x.mongodb.net/post-it?retryWrites=true', { useNewUrlParser: true,  useUnifiedTopology: true },
);

mongoose.Promise = Promise;

module.exports.PostIt = require('./postit');
