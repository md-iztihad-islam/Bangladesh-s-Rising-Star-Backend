import { Product } from "../schema/productSchema.js";

export const createProductRepository = async (product) => {
    try {
        const newProduct = await Product.create(product);

        return newProduct;
    } catch (error) {
        console.log("Error in createProduct: ", error);
        throw new Error("Error in createProduct Repository");
    }
};

export const getAllProductsRepository = async () => {
    try {
        const products = await Product.find();

        return products;
    } catch (error) {
        console.log("Error in getAllProducts: ", error);
        throw new Error("Error in getAllProducts Repository");
    }
};

export const getProductByIdRepository = async (productID) => {
    try {
        const product = await Product.findById(productID);

        return product;
    } catch (error) {
        console.log("Error in getProductById: ", error);
        throw new Error("Error in getProductById Repository");
    }
};

export const deleteProductRepository = async (productID) => {
    try {
        const product = await Product.findByIdAndDelete(productID);

        return product;
    } catch (error) {
        console.log("Error in deleteProduct: ", error);
        throw new Error("Error in deleteProduct Repository");
    }
};