import mongoose from "mongoose";

const liveSchema = mongoose.Schema({
    tournamentName:{
        type: String,
        required: true
    },
    team1:{
        type: String,
        required: true
    },
    team2:{
        type: String,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    videoUrl:{
        type: String,
        required: true
    },
}, { timestamps: true });

export const Live = mongoose.model('Live', liveSchema);