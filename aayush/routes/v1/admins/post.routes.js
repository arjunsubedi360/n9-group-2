import { Router } from "express";
import { getPost } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.get("/", getPost);

export default router;