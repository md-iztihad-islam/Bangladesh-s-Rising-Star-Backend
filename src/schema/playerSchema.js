import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
    registrationNo:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    fatherName:{
        type: String,
        required: true
    },
    motherName:{
        type: String,
        required: true
    },
    religion:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    institution:{
        type: String,
        required: true
    },
    studyingClass:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    team:{
        type: String,
        required: true
    },
    tournament:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ['player'],
        default: 'player'
    },
    password:{
        type: String,
        required: true
    },
    teamId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
    }]
}, {timestamps: true});

export const Player = mongoose.model("Player", playerSchema);