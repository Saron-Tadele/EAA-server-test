import express from "express";
import { test } from "../controllers/test.controller.js";
const router = express.Router();

// define a GET route handler for the path "/test"
router.get("/test", test);

// Export the router
export default router;
