import express from 'express';
import { createNewsController, deleteNewsController, getNewsByIdController, getNewsController } from '../../controller/newsController.js';
import upload from '../../config/multerConfig.js';

const router = express.Router();

router.post("/create", upload.single("newsImage"), createNewsController);
router.get("/allnews", getNewsController);
router.get("/:newsId/news", getNewsByIdController);
router.delete("/:newsId/delete", deleteNewsController);

export default router;