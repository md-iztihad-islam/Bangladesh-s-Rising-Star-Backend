import { createProductService, deleteProductService, getAllProductsService, getProductByIdService } from "../service/productService.js";

export const createProductController = async (req, res) => {
    try {
        const product = req;

        const newProduct = await createProductService(product);

        if(!newProduct){
            return res.status(400).json({
                success: false,
                message: "Product not created"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: newProduct
        });
    } catch (error) {
        console.log("Error in createProduct: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });        
    }
};

export const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProductsService();

        if(!products){
            return res.status(400).json({
                success: false,
                message: "No products found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Products found successfully",
            data: products
        });
    } catch (error) {
        console.log("Error in getAllProducts: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });        
    }
};

export const getProductByIdController = async (req, res) => {
    try {
        const productID = req.params.productid;

        const product = await getProductByIdService(productID);

        if(!product){
            return res.status(400).json({
                success: false,
                message: "Product not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product found successfully",
            data: product
        });
    } catch (error) {
        console.log("Error in getProductById: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });        
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const productID = req.params.productid;

        const product = await deleteProductService(productID);

        if(!product){
            return res.status(400).json({
                success: false,
                message: "Product not deleted"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        });
    } catch (error) {
        console.log("Error in deleteProduct: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });        
    }
};