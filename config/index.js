import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			// useUnifiedTopology: true,
			// useFindAndModify: false,
			// useCreateIndex: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(err);
		// process.exit(1);
		// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix",
	}
};

export default connectDB;
