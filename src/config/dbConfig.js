import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error in connecting to DB", error);
        return error;
    }
};

export default connectDB;