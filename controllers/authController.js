//controllers/authController.js

import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtUtils.js";

export const handleSignup = async (req,res)=>{

    try {
        const {username,password}=req.body;

        //check if username is already exist 
        const existingUser = await User.findOne({username});

        if(existingUser){
            return res.status(400).json({ message: "Username already exists" });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password,10);

        // create new user
        const newUser = new User({
            username,
            password: hashedPassword
        })
        await newUser.save();

        // generate token
        const token = generateToken(newUser._id, newUser.username)

        console.log(token)

        res.status(201).json({token})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const handleLogin = async (req, res) => {
    try {
        // Implementation for user login
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Generate token
        const token = generateToken(user._id, user.username);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const handleLogout = async (req, res) => {
    try {
         // No need to do anything special for logout with JWT
         res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};