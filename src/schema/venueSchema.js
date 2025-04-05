import mongoose from "mongoose";

const venueSchema = mongoose.Schema({
    venueName:{
        type: String,
        required: true
    },
    venueLocation:{
        type: String,
        required: true
    },
    venueLink:{
        type: String,
        required: true
    },
    venueImage:{
        type: String,
        required: true
    },
}, { timestamps: true });

export const Venue = mongoose.model('Venue', venueSchema);