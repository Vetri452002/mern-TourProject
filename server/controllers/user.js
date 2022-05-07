import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import usermodel from "../models/user.js";

const secret = "test";

export const signup = async (req, res) => {
    const {email, password, firstname, lastname} = req.body;
    try {
        const olduser = await usermodel.findOne({ email });
        if (olduser) {
            return res.status(400).json({ message: "user already exists" })
        }
        const hashedpassword = await bcrypt.hash(password, 12);

        const result = await usermodel.create({
            email,
            password: hashedpassword,
            name: `${firstname} ${lastname}`
        });
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
        console.log(error);
    }
};
