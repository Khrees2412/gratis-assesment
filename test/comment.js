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
import mocha from "mocha";

let should = chai.should();
chai.use(chaiHttp);
