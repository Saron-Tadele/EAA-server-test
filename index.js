import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sanitize from "sanitize";
import router from "./routes/index.js";
// load environment variables from a .env file into process.env
dotenv.config();

// retrieves the value of the PORT environment variable
const port = process.env.PORT;

// specify configuration options for the CORS middleware.
const corsOptions = {
	origin: process.env.FRONTEND_URL,
	optionsSuccessStatus: 200,
};

// initializes an Express application
const app = express();

// a middleware to parse incoming requests with JSON payloads
app.use(express.json());
//  a middleware to enable Cross-Origin Resource Sharing
app.use(cors(corsOptions));
// sanitize incoming HTTP requests.
app.use(sanitize.middleware);
// to integrate routes defined in router to the main express app
app.use(router);

// server listen for incoming HTTP requests on  a specified port
app.listen(port, () => console.log(`listening on port ${port}`));
