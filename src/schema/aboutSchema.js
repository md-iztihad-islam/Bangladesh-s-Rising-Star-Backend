import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
    image:{
        type: String,
    },
    description:{
        type: String,
        required: true
    },
}, { timestamps: true });

export const About = mongoose.model("About", aboutSchema);