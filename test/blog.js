import {
	create,
	getOne,
	getAll,
	getPaginatedBlogs,
	deleteOne,
	deleteAll,
	updateOne,
} from "../controllers/blog.js";

import chai from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";

chai.should();
chai.use(chaiHttp);
