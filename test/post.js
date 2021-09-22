import {
	createPost,
	getAll,
	deleteOne,
	updateOne,
} from "../controllers/post.js";

import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe("Posts", () => {
	describe("/GET posts", () => {
		it(" should get all blog posts", (done) => {
			chai.request(app)
				.get("/api/v1/posts", getAll)
				.end((err, res) => {
					res.should.have.status(200);
				});
			done();
		});
	});
	describe("/POST a blog post", () => {
		it("should create a new blog post", (done) => {
			const post = {
				title: "The heroes of Gabon",
				body: "They were brave",
			};
			chai.request(app)
				.post("/api/v1/post", createPost)
				.send(post)
				.end((err, res) => {
					res.should.have.status(201);
				});
			done();
		});
	});
	describe("/PUT  a blog post", () => {
		it("should update the title and body of a blog post", (done) => {
			const newpost = {
				title: "The heroes of Italy",
				body: "They were very smart",
			};
			const postID = "614852e373d3707adeabc4ff";
			chai.request(app)
				.put(`/api/v1/post/${postID}`, updateOne)
				.send(newpost)
				.end((err, res) => {
					res.should.have.status(201);
				});
			done();
		});
	});
	describe("/DELETE a blog post", () => {
		it("should delete a blog post", (done) => {
			const postID = "614852e373d3707adeabc4ff";
			chai.request(app)
				.delete(`/api/v1/post/${postID}`, deleteOne)
				.end((err, res) => {
					res.should.have.status(201);
				});
			done();
		});
	});
});
