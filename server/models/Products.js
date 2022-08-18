import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    currency: String,
    image: String,
}, { timestamp: true})

export const Products = mongoose.model('Product', productSchema);