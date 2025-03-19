import express from 'express';
import { createLiveController, deleteLiveController, findAllLiveController, findLiveByIdController, updateLiveController } from '../../controller/liveController.js';

const router = express.Router();

router.post("/add", createLiveController);
router.get("/alllive", findAllLiveController);
router.get("/:liveid/live", findLiveByIdController);
router.post("/:liveid/update", updateLiveController);
router.delete("/:liveid/delete", deleteLiveController);

export default router;