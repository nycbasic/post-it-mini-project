const { PostIt } = require("../models");

const getAllPostIt = async (req, res) => {
  try {
    const postIts = await PostIt.find();
    return res.status(201).json(postIts);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

const createPostIt = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPostIt = await PostIt.create({ title, content });
    if (newPostIt.created) {
      return res.status(201).json(newPostIt);
    }
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

const getPostIt = async (req, res) => {
  const { postItId } = req.params;
  try {
    const postIt = await PostIt.findById(postItId);
    if (postIt) {
      return res.status(201).json(postIt);
    }
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    });
  }
};

const updatePostIt = async (req, res) => {
  const { postItId } = req.params;
  const { title, content } = req.body;
  const payload = {
    title,
    content,
  };
  try {
    const updatedPost = await PostIt.findOneAndUpdate(
      { _id: postItId },
      payload,
      {
        new: false,
      }
    );
    return res.status(201).json(updatedPost);
  } catch (err) {
    return res.send(err);
  }
};

const deletePostIt = async (req, res) => {
  const { postItId } = req.params;
  try {
    const deletedPost = await PostIt.deleteOne({ _id: postItId });
    return res.status(201).json({
      message: deletedPost,
    });
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  getAllPostIt,
  createPostIt,
  getAllPostIt,
  getPostIt,
  updatePostIt,
  deletePostIt,
};
