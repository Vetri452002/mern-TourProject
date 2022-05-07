import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userrouter from "./routes/user.js";
// TafSmlSLYD38z73C -mongodb password

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userrouter); // http://localhost:5000/users/signup

const MONGODB_URL = "mongodb+srv://codewithvetri:TafSmlSLYD38z73C@cluster0.nzf8u.mongodb.net/tour_db?retryWrites=true&w=majority"

const port = 5000;

mongoose.connect(MONGODB_URL)
    .then(() => {
        app.listen(port, () => console.log(`server running on port ${port}`));
    })
    .catch((error) => console.log(`${error} did not connect`));


