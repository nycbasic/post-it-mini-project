const { PostIt } = require("../models");

const getAllPostIt = async (req, res) => {
  try {
    const postits = await PostIt.find();
    return res.status(201).json(postits);
  } catch (err) {
    return res.send(err);
  }
};

const createPostIt = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPostIt = await PostIt.create({ title, content });
    return res.status(201).json(newPostIt);
  } catch (err) {
    res.send(err);
  }
};

const getPostIt = async (req, res) => {
  try {
  } catch (err) {}
  PostIt.findById(req.params.postItId)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.send(err);
    });
};

const updatePostIt = function (req, res) {
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

const deletePostIt = function (req, res) {
  PostIt.remove({ _id: req.params.postItId })
    .then(function () {
      res.json({ message: "object deleted" });
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.exports = {
  getAllPostIt,
  createPostIt,
  getAllPostIt,
  getPostIt,
  updatePostIt,
  deletePostIt,
};
