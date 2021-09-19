import {
	createComment,
	getOneCommentFromBlog,
	getEveryComment,
	getAllCommentsFromBlog,
	updateComment,
	deleteOneComment,
} from "../controllers/comment.js";
import Comment from "../models/Comment.js";

import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

let should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe("Comment", () => {
	describe("Get all comments", () => {
		it("returns a list of all comments in the database", async (done) => {
			const res = await chai.request(app).get("/api/v1/comments");
			const { body } = res;
			expect(200);
			expect(body.data).to.be.an("array");
		});
	});
});
