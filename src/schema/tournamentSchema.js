import mongoose from "mongoose";

const tournamentSchema = mongoose.Schema({
    tournamentName:{
        type: String,
        required: true
    },
    tournamentType:{
        type: String,
        required: true,
    },
    teams:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
    }],
    matchId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
    }],
    openningDate:{
        type: Date,
        required: true
    },
    closingDate:{
        type: Date,
        required: true
    },
    tournamentLogo:{
        type: String,
        required: true
    },
}, { timestamps: true });

export const Tournament = mongoose.model("Tournament", tournamentSchema);