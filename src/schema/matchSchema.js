import mongoose from "mongoose";

const matchSchema = mongoose.Schema({
    matchNo:{
        type: String,
        required: true
    },
    matchDate:{
        type: String,
        required: true
    },
    matchTime:{
        type: String,
        required: true
    },
    matchVenue:{
        type: String,
        required: true
    },
    matchTeam1:{
        type: String,
        required: true
    },
    matchTeam2:{
        type: String,
        required: true
    },
    team01Goal:{
        type: Number,
    },
    team02Goal:{
        type: Number,
    },
    isPlayed:{
        type: Boolean,
        default: false,
    },
    tournament:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament",
    },
    videoUrl:{
        type: String,
    },
    stage:{
        type: String,
    }
}, { timestamps: true });

export const Match = mongoose.model('Match', matchSchema);