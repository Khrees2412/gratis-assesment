import {
	create,
	getOne,
	getAll,
	getPaginatedBlogs,
	deleteOne,
	deleteAll,
	updateOne,
} from "../controllers/blog.js";
import Blog from "../models/Blog.js";

import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";

let should = chai.should();
chai.use(chaiHttp);
