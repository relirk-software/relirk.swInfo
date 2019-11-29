import "dotenv/config";
import express from "express";
import morgan from "morgan";
// import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 5000;

const server = require("http").Server(app);

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));

server.listen(port, () => console.log(`Listening on port ${port}`));
