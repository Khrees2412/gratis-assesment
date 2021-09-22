import {
	createComment,
	getEveryComment,
	updateComment,
	deleteOneComment,
} from "../controllers/comment.js";

import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

let should = chai.should();
chai.use(chaiHttp);

describe("Comment", () => {
	describe("/GET  all comments", () => {
		it("returns a list of all comments in the database", (done) => {
			chai.request(app)
				.get("/api/v1/comments", getEveryComment)
				.end((err, res) => {
					res.should.have.status(200);
				});
			done();
		});
	});
	describe("/POST a comment", () => {
		it("creates a new comment", (done) => {
			const postID = "614852e373d3707adeabc4ff";
			const body = {
				content: "I love this post",
			};
			chai.request(app)
				.post(`/api/v1/comment/${postID}`, createComment)
				.send(body)
				.end((err, res) => {
					res.should.have.status(201);
				});
			done();
		});
	});
	describe("/PUT a comment", () => {
		it("updates an existing comment", (done) => {
			const id = "6148571311f8165534bbf12c";
			const body = {
				content: "I really this post",
			};
			chai.request(app)
				.put(`/api/v1/comment/${id}`, updateComment)
				.send(body)
				.end((err, res) => {
					res.should.have.status(201);
				});
			done();
		});
	});
	describe("/Delete a comment", () => {
		it("should delete a comment", (done) => {
			const id = "6148571311f8165534bbf12c";
			chai.request(app)
				.delete(`/api/v1/comment/${id}`, deleteOneComment)
				.end((err, res) => {
					res.should.have.status(201);
				});
			done();
		});
	});
});
