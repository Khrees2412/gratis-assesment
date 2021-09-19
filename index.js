import express from "express";
import connectDB from "././config/index.js";
import routes from "././routes/index.js";
import cors from "cors";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routes);

app.get("/", (req, res) => {
	res.send("<h1> You're home, you're safe here </h1>");
});

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT} `);
});
export default app;
