import { validationResult } from "express-validator";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const createComment = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.json({
			success: false,
			message: "The request contains invalid or incomplete fields ",
		});
	}
	try {
		const { content } = req.body;
		const { postID } = req.params;
		const comment = new Comment({
			content,
			post: postID,
		});
		await comment.save();

		await Post.findByIdAndUpdate(
			{ _id: postID },
			{ $push: { comments: comment._id } }
		);
		res.status(201).json({
			success: true,
			message: "Comment added to blog post",
			data: comment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to add comment to blog post",
		});
	}
};

const getOneComment = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.json({
			success: false,
			message: "The request contains invalid or incomplete fields ",
		});
	}
	try {
		const { id } = req.params;
		const comment = await Comment.findOne({ _id: id });
		res.status(201).json({
			success: true,
			message: "Found one comment ",
			data: comment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to find comment ",
		});
	}
};

const getAllCommentsFromPost = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({
			success: false,
			message: "The request contains invalid or incomplete fields ",
		});
	}
	try {
		const { postID } = req.params;
		const comments = await Comment.find({ post: postID });
		res.status(201).json({
			success: true,
			message: "Retrieved all comments from blog post",
			data: comments,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to retrieve comments from blog post",
		});
	}
};

const getEveryComment = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({
			success: false,
			message: "The request contains invalid or incomplete fields ",
		});
	}
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
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({
			success: false,
			message: "The request contains invalid or incomplete fields ",
		});
	}
	try {
		const { content } = req.body;
		const { id } = req.params;
		const comment = await Comment.findOneAndReplace(
			{ _id: id },
			{ content }
		);
		res.status(201).json({
			success: true,
			message: "The comment has been updated",
			data: comment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to retrieve comments from blog post",
		});
	}
};

const deleteOneComment = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({
			success: false,
			message: "The request contains invalid or incomplete fields ",
		});
	}
	try {
		const { id } = req.params;
		await Comment.findByIdAndRemove({ _id: id });
		res.status(201).json({
			success: true,
			message: "Comment deleted from blog post",
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
	getOneComment,
	getEveryComment,
	getAllCommentsFromPost,
	updateComment,
	deleteOneComment,
};
