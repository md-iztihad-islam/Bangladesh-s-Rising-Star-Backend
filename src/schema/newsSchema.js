import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
    newsId:{
        type: String,
        required: true
    },
    newsTitle:{
        type: String,
    },
    newsDescription:{
        type: String,
    },
    newsDate:{
        type: Date,
    },
    newsImage:{
        type: String,
    },
    newsLink:{
        type: String,
    },
}, { timestamps: true });

export const News = mongoose.model('News', newsSchema);