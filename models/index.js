const mongoose = require("mongoose");
const db = process.env.DB;
require("dotenv").config();

mongoose.set("debug", false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Atlas Connected!"));

mongoose.Promise = Promise;

module.exports.PostIt = require("./postit");
