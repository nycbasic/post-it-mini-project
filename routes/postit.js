const express = require('express'),
	   router = express.Router(),
	  helpers = require('../helpers/postit');


// Root JSON
router.route('/')
	.get(helpers.getAllPostIt)
	.post(helpers.createPostIt)


// Root ID JSON
router.route('/:postItId')
	.get(helpers.getPostIt)
	.put(helpers.updatePostIt)
	.delete(helpers.deletePostIt)


module.exports = router;