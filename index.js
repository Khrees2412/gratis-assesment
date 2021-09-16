import express from "express";
import connectDB from "././config/index.js";
import routes from "././routes/index.js";

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routes);

app.get("/", (req, res) => {
	res.send("Home page");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT} `);
});
export default app;
