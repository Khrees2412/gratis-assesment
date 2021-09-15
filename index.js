import express from "express";
import connectDB from "././config/index.js";

const app = express();
connectDB();

express.json();
express.urlencoded({ extended: true });

app.get("/", (req, res) => {
	res.send("Home page");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT} `);
});
