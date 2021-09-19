import {
	createPost,
	getOne,
	getAll,
	getPaginatedPosts,
	deleteOne,
	deleteAll,
	updateOne,
} from "../controllers/post.js";

import {
	createComment,
	getOneCommentFromPost,
	getEveryComment,
	getAllCommentsFromPost,
	updateComment,
	deleteOneComment,
} from "../controllers/comment.js";
import express from "express";
import { body } from "express-validator";

const router = express.Router();

//post routes

//@route POST api/v1/
//@desc Create a new post
router.post(
	"/post",
	body("title").not().isEmpty().trim().escape(),
	body("body").not().isEmpty().trim().escape(),
	createPost
),
	//@route GET api/v1/
	//@desc Returns a single post
	router.get("/post/:id", getOne);

//@route GET api/v1/
//@desc Returns all posts
router.get("/posts", getAll);

//@route GET api/v1/
//@desc Returns a paginated list of all posts
router.get("/paginate-post", getPaginatedPosts);

//@route DELETE api/v1/
//@desc Deletes a single post
router.delete("/post/:id", deleteOne);

//@route DELETE api/v1/post
//@desc Deletes all blog posts
router.delete("/posts", deleteAll);

//@route PUT api/v1/post
//@desc Updates a post

router.put("/post/:id", updateOne);

// Comment Routes

//@route POST api/v1/comment
//@desc creates a comment for a blog post
router.post(
	"/comment/:postID",
	body("content").not().isEmpty().trim().escape(),
	createComment
);

//@route GET api/v1/
//@desc Returns a single comment from a post
router.get("/comment/:id", getOneCommentFromPost);

//@route GET api/v1/
//@desc Returns all comments from a post
router.get("/comments/post/:postID", getAllCommentsFromPost);

//@route GET api/v1/
//@desc Returns all comments in the database
router.get("/comments", getEveryComment);

//@route PUT api/v1/
//@desc Updates a single comment
router.put("/comment/:id", updateComment);

//@route DELETE api/v1/
//@desc Deletes a single comment
router.delete("/comment/:id", deleteOneComment);

export default router;
