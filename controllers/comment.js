import { validationResult } from "express-validator";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

const createComment = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.json({
			success: false,
			message: "The request contains invalid fields ",
		});
	}
	try {
		const { content } = req.body;
		const { blogID } = req.params;
		const comment = new Comment({
			content,
			blog: blogID,
		});
		await comment.save();

		await Blog.findByIdAndUpdate(
			{ _id: blogID },
			{ $push: { comments: comment._id } }
		);
		res.status(201).json({
			success: true,
			message: "Comment added to blog",
			data: comment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to add comment to blog",
		});
	}
};

const getOneCommentFromBlog = async (req, res) => {
	try {
		const { id, blogID } = req.params;
		const comment = await Comment.findOne({ _id: id, blog: blogID });
		res.status(201).json({
			success: true,
			message: "Retrieved one comment from blog",
			data: comment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to retrieve comment from blog",
		});
	}
};

const getAllCommentsFromBlog = async (req, res) => {
	try {
		const { blogID } = req.params;
		const comments = await Comment.find({ blog_id: blogID });
		res.status(201).json({
			success: true,
			message: "Retrieved all comments from blog",
			data: comments,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to retrieve comments from blog",
		});
	}
};

const getEveryComment = async (req, res) => {
	try {
		const comments = await Comment.find({});
		res.status(201).json({
			success: true,
			message: "Retrieved all comments ",
			data: comments,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to retrieve comments ",
		});
	}
};

const updateComment = async (req, res) => {
	try {
		const { content } = req.body;
		const { id, blogID } = req.params;
		const comment = await Comment.findOneAndReplace(
			{ _id: id, blog_id: blogID },
			{ content }
		);
		res.status(204).json({
			success: true,
			message: "The comment has been updated",
			data: comment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to retrieve comments from blog",
		});
	}
};

const deleteOneComment = async (req, res) => {
	try {
		const { id } = req.params;
		await Comment.findByIdAndRemove({ _id: id });
		res.status(201).json({
			success: true,
			message: "Comment deleted from blog",
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to delete comment",
		});
	}
};

export {
	createComment,
	getOneCommentFromBlog,
	getEveryComment,
	getAllCommentsFromBlog,
	updateComment,
	deleteOneComment,
};
