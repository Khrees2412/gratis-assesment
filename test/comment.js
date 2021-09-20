import {
	createComment,
	getOneCommentFromPost,
	getEveryComment,
	getAllCommentsFromPost,
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
		it("returns a list of all comments in the database", (done) => {
			chai.request(app)
				.get("/api/v1/comments")
				.end((err, res) => {
					const { body } = res;
					expect(200);
					expect(body.data).to.be.an("array");
				});
		});
	});
});
