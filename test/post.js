import {
	createPost,
	getOne,
	getAll,
	getPaginatedPosts,
	deleteOne,
	deleteAll,
	updateOne,
} from "../controllers/post.js";
import Blog from "../models/Post.js";

import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe("Posts", () => {
	describe("/GET posts", () => {
		it(" should get all blog posts", (done) => {
			chai.request(getAll)
				.get("/api/v1/posts")
				.end((err, res) => {
					res.should.have.status(200);
					expect(res.body).to.be.an("object");
				});
			done();
		});
	});
	describe("/POST, create a blog post", () => {
		it("should create a new blog post", (done) => {
			const post = {
				title: "The heroes of Gabon",
				body: "They were brave",
			};
			chai.request(createPost)
				.post("/api/v1/post")
				.send(post)
				.end((err, res) => {
					res.should.have.status(201);
					expect(res.body.data).to.be.a("string");
				});
			done();
		});
	});
});
