import {
	create,
	getOne,
	getAll,
	deleteOne,
	deleteAll,
	updateOne,
} from "../controllers/blog.js";
import express from "express";
const router = express.Router();

//@route POST api/v1/
//@desc Create a new blog
router.post("/blog/create", create);

//@route GET api/v1/
//@desc Returns a single blog
router.get("/blog/view/:id", getOne);

//@route GET api/v1/
//@desc Returns all blogs
router.get("/blog/view-all", getAll);

//@route DELETE api/v1/
//@desc Deletes a single blog
router.delete("/blog/delete/:id", deleteOne);

//@route DELETE api/v1/blog
//@desc Deletes all blogs
router.delete("/blog/delete-all", deleteAll);

//@route UPDATE api/v1/blog
//@desc Updates a blog

router.put("/blog/update/:id", updateOne);
export default router;
