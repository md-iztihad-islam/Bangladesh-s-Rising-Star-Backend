import express from 'express';
import upload from '../../config/multerConfig.js';
import { createPlayerController, findPlayerByEmailController, findPlayerByIdController, playerSignInController, playerSignoutController } from '../../controller/playerController.js';
import isAuthenticated from '../../utils/isAuthenticated.js';

const router = express.Router();

router.post("/register", upload.single("photo"), createPlayerController);
router.post("/signin", upload.none(), playerSignInController);
router.get("/profile", isAuthenticated, findPlayerByIdController);
router.get("/signout", isAuthenticated, playerSignoutController);
router.get("/search/:email", isAuthenticated, findPlayerByEmailController);
router.get("/find/:playerId", findPlayerByIdController);

export default router;