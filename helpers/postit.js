const { PostIt } = require("../models");

exports.getAllPostIt = (req, res) => {
  PostIt.find()
    .then((postits) => {
      res.json(postits);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createPostIt = function (req, res) {
  const { title, content } = req.body;
  PostIt.create({ title, content })
    .then((newPostIt) => {
      res.status(201).json(newPostIt);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getPostIt = function (req, res) {
  PostIt.findById(req.params.postItId)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.updatePostIt = function (req, res) {
  PostIt.findOneAndUpdate({ _id: req.params.postItId }, req.body, {
    new: true,
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.deletePostIt = function (req, res) {
  PostIt.remove({ _id: req.params.postItId })
    .then(function () {
      res.json({ message: "object deleted" });
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.exports = exports;
