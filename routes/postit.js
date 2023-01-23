const express = require("express");
const router = express.Router();
const {
  getAllPostIt,
  createPostIt,
  getPostIt,
  updatePostIt,
  deletePostIt,
} = require("../controllers/postit");

// ROUTE: /api/postit/
// DESC: Route to get all post-it's
// ACCESS: Public
router.get("/", getAllPostIt);

// ROUTE: /api/postit/create/
// DESC: Route to create a post-it
// ACCESS: Public
router.post("/create", createPostIt);

// ROUTE: /api/postit/:postItId
// DESC: Route to get a single post-it
// ACCESS: Public
router.get("/:postItId", getPostIt);

// ROUTE: /api/postit/update/
// DESC: Route to update a single postit
// ACCESS: Public
router.put("/update/:postItId", updatePostIt);

// ROUTE: /api/postit/delete/:postItId
// DESC: Route to delete a single post-it
// ACCESS: Public
router.delete("/delete/:postItId", deletePostIt);

module.exports = router;
