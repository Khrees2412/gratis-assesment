import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	blog_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Comment = mongoose.model("Comments", CommentSchema);
export default Comment;
