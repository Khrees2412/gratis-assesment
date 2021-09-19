import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
	{
		post: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
