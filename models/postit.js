const mongoose = require("mongoose");
const date = new Date();

const postItSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Titled is required",
  },
  content: {
    type: String,
    required: "Content cannot be blank",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post-it", postItSchema);
