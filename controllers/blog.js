import Blog from "../models/Blog.js";
// import Comment from "../models/Comment";

const create = async (req, res) => {
	try {
		const { title, body } = req.body;
		const blog = await new Blog({
			title,
			body,
		});
		blog.save();

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

const getOne = async (res, req) => {
	try {
		const { id } = req.params;
		const blog = await Blog.findById({ _id: id });

		res.status(200).json({
			success: true,
			message: "Found one blog post",
			data: blog,
		});
	} catch (error) {
		console.error(error);
		res.json({
			success: false,
			message: "Unable to get blog post",
		});
	}
};
const getAll = async (res, req) => {
	try {
		const blogs = await Blog.find({});

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

const deleteOne = async (req, res) => {
	try {
		const { id } = req.params;

		await Blog.findByIdAndRemove({ _id: id });
		res.status(201).json({
			success: true,
			message: "One blog post deleted",
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
		res.status(201).json({
			success: true,
			message: "All blog posts deleted",
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
			title,
			body
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
export { create, getOne, getAll, deleteOne, deleteAll, updateOne };
