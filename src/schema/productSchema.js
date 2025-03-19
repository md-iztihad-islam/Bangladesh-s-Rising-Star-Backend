import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productID:{
        type: String,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productImage:{
        type: String,
        required: true
    },
    productLink:{
        type: String,
        required: true
    },
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);