import { Products } from "../models/Products.js"

export const getPosts = async (req,res) => {
    const productList = await Products.findOne({
        title: '123'
    });
    res.status(200).json(productList);
}
