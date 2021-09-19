import { validationResult } from "express-validator";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const createPost = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.json({
			success: false,
			message: "The request contains invalid or incomplete fields ",
		});
	}
	try {
		const { title, body } = req.body;
		const post = new Post({
			title,
			body,
		});
		await post.save();

		res.status(201).json({
			success: true,
			message: "blog post created",
			data: post,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to create new blog post",
		});
	}
};

const getOne = async (req, res) => {
	try {
		const { id } = req.params;
		const post = await Post.findById({ _id: id })
			.populate("comments")
			.exec();

		if (post) {
			res.status(200).json({
				success: true,
				message: "Found one blog post",
				data: post,
			});
		} else {
			res.status(404).json({
				message: "post doesn't exist or has been deleted",
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to get blog post",
		});
	}
};
const getAll = async (req, res) => {
	try {
		const posts = await Post.find({}).populate("comments").exec();

		res.status(200).json({
			success: true,
			message: "Found all blog posts",
			data: posts,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to get blog posts",
		});
	}
};

const getPaginatedPosts = async (req, res) => {
	try {
		const { limit, cursor } = req.query;
		const skipIndex = (+cursor - 1) * +limit;
		const [results, itemCount] = await Promise.all([
			Post.find({})
				.populate("comments")
				.sort({ createdAt: 1 })
				.limit(+limit)
				.skip(skipIndex)
				.lean()
				.exec(),
			Post.count({}),
		]);
		const nextCursor = Math.ceil(itemCount / +limit);
		res.status(200).json({
			data: results,
			nextCursor,
			itemCount,
			currentPage: +cursor,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: true,
			message: "Unable to fetch posts",
		});
	}
};

const deleteOne = async (req, res) => {
	try {
		const { id } = req.params;
		await Post.findByIdAndDelete({ _id: id });
		//check if comment exists for the post
		const comment = await Comment.find({ post: id });
		if (comment) {
			await Comment.deleteMany({ post: id });
		} else {
			return;
		}
		res.status(201).json({
			success: true,
			message: "One blog post and comments deleted",
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to delete blog post",
		});
	}
};

const deleteAll = async (req, res) => {
	try {
		await Post.deleteMany({});
		await Comment.deleteMany({});

		res.status(201).json({
			success: true,
			message: "All blog posts and comments deleted",
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to delete blog posts",
		});
	}
};
const updateOne = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, body } = req.body;
		const updatedpost = await Post.findByIdAndUpdate(
			{ _id: id },
			{
				title,
				body,
			}
		);
		res.status(201).json({
			success: true,
			message: "Updated one blog post",
			data: updatedpost,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Unable to update blog posts",
		});
	}
};
export {
	createPost,
	getOne,
	getAll,
	getPaginatedPosts,
	deleteOne,
	deleteAll,
	updateOne,
};
