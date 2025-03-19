import express from 'express';
import { createProductController, deleteProductController, getAllProductsController, getProductByIdController } from '../../controller/productController.js';
import upload from '../../config/multerConfig.js';

const router = express.Router();

router.post("/add", upload.single("productImage"), createProductController);
router.get("/allproduct", getAllProductsController);
router.get("/:productid", getProductByIdController);
router.delete("/:productid/delete", deleteProductController);

export default router;