import {
	create,
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
		it("it should get all blog posts", (done) => {
			chai.request(app)
				.get("/api/v1/posts")
				.end((err, res) => {
					res.should.have.status(200);
					expect(res.body).to.be.a("object");

					done();
				});
		});
	});
});
