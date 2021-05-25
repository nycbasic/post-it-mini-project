const db = require('../models');

exports.getAllPostIt = function(req, res) {
	db.PostIt.find()
	.then(function(postits){
		res.json(postits)
	})
	.catch(function(err){
		res.send(err);
	})
};


exports.createPostIt = function(req, res) {
	db.PostIt.create(req.body)
	.then(function(newPostIt){
		res.status(201).json(newPostIt);
	})
	.catch(function(err){
		res.send(err)
	})
};


exports.getPostIt = function(req, res) {
	db.PostIt.findById(req.params.postItId)
	.then(function(data){
		res.json(data);
	})
	.catch(function(err){
		res.send(err);
	})
};


exports.updatePostIt = function(req, res) {
	db.PostIt.findOneAndUpdate({_id: req.params.postItId}, req.body, {new: true})
	.then(function(data){
		res.json(data);
	})
	.catch(function(err){
		res.send(err);
	})
};


exports.deletePostIt = function(req, res) {
	db.PostIt.remove({_id: req.params.postItId})
	.then(function(){
		res.json({message: 'object deleted'})
	})
	.catch(function(err){
		res.send(err);
	})
};


module.exports = exports;