import express from "express";
import testRoute from "./test.routes.js";

// create an express router
const router = express.Router();

// modularize route handling by separating it into different files, making the codebase more organized and maintainable
router.use(testRoute);

export default router;
