import express from "express";
const app = express();

express.json();
express.urlencoded({ extended: true });

app.get("/", (req, res) => {
	res.send("Home page");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	`Server started on ${PORT} `;
});
