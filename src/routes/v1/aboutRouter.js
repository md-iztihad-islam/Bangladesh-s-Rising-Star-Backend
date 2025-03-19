import express from 'express';
import { createAboutController, findAboutController, updateAboutController } from '../../controller/aboutController.js';
import upload from '../../config/multerConfig.js';

const router = express.Router();

router.post("/add", upload.single("image"),createAboutController);
router.get("/find", findAboutController);
router.post("/update", upload.single("image"),updateAboutController);

export default router;