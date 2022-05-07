import mongoose from "mongoose";

const userscheme = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
    googleId: {type: String, required: false},
    id: {type: String},
});

export default mongoose.model("user", userscheme);