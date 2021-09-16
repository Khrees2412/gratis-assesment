import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

const create = async (req, res) => {
	try {
		const { title, body } = req.body;
		const blog = new Blog({
			title,
			body,
		});
		await blog.save();

		res.status(201).json({
			success: true,
			message: "Blog post created",
			data: blog,
		});
	} catch (error) {
		console.error(error);
		res.json({
			success: false,
			message: "Unable to create new blog post",
		});
	}
};

const getOne = async (req, res) => {
	try {
		const { id } = req.params;
		const blog = await Blog.findById({ _id: id })
			.populate("comments")
			.exec();

		if (blog) {
			res.status(200).json({
				success: true,
				message: "Found one blog post",
				data: blog,
			});
		} else {
			res.status(404).json({
				message: "Blog doesn't exist or has been deleted",
			});
		}
	} catch (error) {
		console.error(error);
		res.json({
			success: false,
			message: "Unable to get blog post",
		});
	}
};
const getAll = async (req, res) => {
	try {
		const blogs = await Blog.find({}).populate("comments").exec();

		res.status(200).json({
			success: true,
			message: "Found all blog posts",
			data: blogs,
		});
	} catch (error) {
		console.error(error);
		res.json({
			success: false,
			message: "Unable to get blog posts",
		});
	}
};

const getPaginatedBlogs = async (req, res) => {
	try {
		const { limit, cursor } = req.query;
		const skipIndex = (+cursor - 1) * +limit;
		const [results, itemCount] = await Promise.all([
			Blog.find({})
				.populate("comments")
				.sort({ createdAt: 1 })
				.limit(+limit)
				.skip(skipIndex)
				.lean()
				.exec(),
			Blog.count({}),
		]);
		const nextCursor = Math.ceil(itemCount / +limit);
		res.status(200).json({
			// has_more: paginate.hasNextPages(req)(pageCount),
			data: results,
			nextCursor,
			itemCount,
			currentPage: +cursor,
			// pages: paginate.getArrayPages(req)(3, pageCount, page),
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({
			success: true,
			message: "Unable to fetch blogs",
		});
	}
};

const deleteOne = async (req, res) => {
	try {
		const { id } = req.params;
		await Blog.findByIdAndDelete({ _id: id });
		//check if comment exists for the blog
		const comment = await Comment.find({ blog: id });
		if (comment) {
			await Comment.deleteOne({ blog: id });
		} else {
			return;
		}
		res.status(201).json({
			success: true,
			message: "One blog post and comments deleted",
		});
	} catch (error) {
		console.error(error);
		res.json({
			success: false,
			message: "Unable to delete blog post",
		});
	}
};

const deleteAll = async (req, res) => {
	try {
		await Blog.deleteMany({});
		await Comment.deleteMany({});

		res.status(201).json({
			success: true,
			message: "All blog posts and comments deleted",
		});
	} catch (error) {
		console.error(error);
		res.json({
			success: false,
			message: "Unable to delete blog posts",
		});
	}
};
const updateOne = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, body } = req.body;
		const updatedBlog = await Blog.findByIdAndUpdate(
			{ _id: id },
			{
				title,
				body,
			}
		);
		res.status(201).json({
			success: true,
			message: "Updated one blog post",
			data: updatedBlog,
		});
	} catch (error) {
		console.error(error);
		res.json({
			success: false,
			message: "Unable to update blog posts",
		});
	}
};
export {
	create,
	getOne,
	getAll,
	getPaginatedBlogs,
	deleteOne,
	deleteAll,
	updateOne,
};
