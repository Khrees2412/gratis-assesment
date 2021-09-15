import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		blog: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Blogs",
		},
		content: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
