import {
	create,
	getOne,
	getAll,
	getPaginatedBlogs,
	deleteOne,
	deleteAll,
	updateOne,
} from "../controllers/blog.js";

import {
	createComment,
	getOneComment,
	getAllComments,
	updateComment,
	deleteOneComment,
} from "../controllers/comment.js";
import express from "express";
const router = express.Router();

//Blog routes

//@route POST api/v1/
//@desc Create a new blog
router.post("/blog", create);

//@route GET api/v1/
//@desc Returns a single blog
router.get("/blog/:id", getOne);

//@route GET api/v1/
//@desc Returns all blogs
router.get("/blogs/", getAll);

//@route GET api/v1/
//@desc Returns a paginated list of all blogs
router.get("/paginate-blog/", getPaginatedBlogs);

//@route DELETE api/v1/
//@desc Deletes a single blog
router.delete("/blog/:id", deleteOne);

//@route DELETE api/v1/blog
//@desc Deletes all blogs
router.delete("/blogs", deleteAll);

//@route PUT api/v1/blog
//@desc Updates a blog

router.put("/blog/:id", updateOne);

// Comment Routes

//@route POST api/v1/comment
//@desc creates a comment for blog
router.post("/comment/:blogID", createComment);

//@route GET api/v1/
//@desc Returns a single comment from a blog
router.get("/comment/:id/blog/:blogID", getOneComment);

//@route GET api/v1/
//@desc Returns all comments from a blog
router.get("/comments/blog/:blogID", getAllComments);

//@route PUT api/v1/
//@desc Updates a single comment
router.put("/comment/:id", updateComment);

//@route DELETE api/v1/
//@desc Deletes a single comment
router.delete("/comment/:id/", deleteOneComment);

export default router;
