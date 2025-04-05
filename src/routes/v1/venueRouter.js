import express from 'express';
import upload from '../../config/multerConfig.js';
import { createVenueController, deleteVenueController, getAllVenuesController } from '../../controller/venueController.js';

const router = express.Router();

router.post("/create", upload.single("venueImage"), createVenueController);
router.get("/all", getAllVenuesController);
router.delete("/delete/:venueId", deleteVenueController);

export default router;