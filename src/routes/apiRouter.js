import express from 'express';
import v1Router from './v1/v1Router.js';

const router = express.Router();

router.use("/v1", v1Router);

export default router;

/*
    So i divied the routing in 3 stages so that in future if we have to add more versions of the api we can easily do that.
*/