import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	cover_photo: String,
	body: {
		type: String,
		required: true,
	},
	createdAt: Date.now(),
});

const Blog = mongoose.model("Blogs", BlogSchema);
export default Blog;
