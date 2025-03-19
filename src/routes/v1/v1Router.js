import express from 'express';
import playerRouter from './playerRouter.js';
import aboutRouter from './aboutRouter.js';
import liveRouter from './liveRouter.js';
import newsRouter from './newsRouter.js';
import tournamentRouter from './tournamentRouter.js';
import productRouter from './productRouter.js';

const router = express.Router();

router.use("/players", playerRouter);
router.use("/about", aboutRouter);
router.use("/live", liveRouter);
router.use("/news", newsRouter);
router.use("/tournament", tournamentRouter);
router.use("/product", productRouter);

export default router;

/*
    This is the version 1 router. I have divided the routing in 5 stages so that in future if we have to add more versions of the api we can easily do that.
*/