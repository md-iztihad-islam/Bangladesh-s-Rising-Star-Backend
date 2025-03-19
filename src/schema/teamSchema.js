import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
    registrationNo:{
        type: String,
        required: true
    },
    teamName:{
        type: String,
        required: true
    },
    institutionName:{
        type: String,
        required: true
    },
    teamManagerName:{
        type: String,
        required: true
    },
    playersRegistrationNo:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
    }],
    tournament:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament",
    },
    matchPlayed:{
        type: Number,
        default: 0
    },
    matchWon:{
        type: Number,
        default: 0
    },
    matchLost:{
        type: Number,
        default: 0
    },
    matchDraw:{
        type: Number,
        default: 0
    },
    goalsScored:{
        type: Number,
        default: 0
    },
    goalsConceded:{
        type: Number,
        default: 0
    },
    goalsDifference:{
        type: Number,
        default: 0
    },
    points:{
        type: Number,
        default: 0
    },
    teamLogo:{
        type: String,
    }
}, { timestamps: true });

export const Team = mongoose.model('Team', teamSchema);