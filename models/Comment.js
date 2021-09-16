import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
	{
		blog: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Blog",
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
