import { createProductRepository, deleteProductRepository, getAllProductsRepository, getProductByIdRepository } from "../repository/productRepository.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createProductService = async (product) => {
    try {
        const productData = product.body;
        const photo = product.file;

        let productImage;
        let cloudResponse;

        if(photo){
            cloudResponse = await uploadMedia(photo.path);
            productImage = cloudResponse.secure_url;
        }

        const productObject = { ...productData, productImage };
        const newProduct = await createProductRepository(productObject);

        return newProduct;
    } catch (error) {
        console.log("Error in createProduct: ", error);
        throw new Error("Error in createProduct Service");
    }
};

export const getAllProductsService = async () => {
    try {
        const products = await getAllProductsRepository();

        return products;
    } catch (error) {
        console.log("Error in getAllProducts: ", error);
        throw new Error("Error in getAllProducts Service");
    }
};

export const getProductByIdService = async (productID) => {
    try {
        const product = await getProductByIdRepository(productID);

        return product;
    } catch (error) {
        console.log("Error in getProductById: ", error);
        throw new Error("Error in getProductById Service");
    }
};

export const deleteProductService = async (productID) => {
    try {
        const product = await deleteProductRepository(productID);

        return product;
    } catch (error) {
        console.log("Error in deleteProduct: ", error);
        throw new Error("Error in deleteProduct Service");
    }
};
