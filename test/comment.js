import {
	createComment,
	getOneComment,
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
			chai.request(getEveryComment)
				.get("/api/v1/comments")

				.end((err, res) => {
					const { body } = res;
					expect(200);
					expect(body.data).to.be.an("array");
				});
			done();
		});
	});
	describe("Create a comment", () => {
		it("creates a new comment", (done) => {
			const postID = "614852e373d3707adeabc4ff";
			const body = {
				content: "I love this post",
			};
			chai.request(createComment)
				.get(`/api/v1/comment/${postID}`)
				.send(body)
				.end((err, res) => {
					const { body } = res;
					expect(200);
					expect(body.data).to.be.an("array");
				});
			done();
		});
	});
});
