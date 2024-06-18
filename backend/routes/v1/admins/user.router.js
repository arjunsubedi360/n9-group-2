import { Router } from "express";
import { createUser, getUsers } from "../../../controllers/index.js"; 

const router = Router();

router.post("/create", createUser);
router.get("/get", getUsers);
export default router;
