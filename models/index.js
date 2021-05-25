const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.DB;
console.log(db)

mongoose.set('debug', true);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Atlas Connected!"));

mongoose.Promise = Promise;

module.exports.PostIt = require('./postit');
