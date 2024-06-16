import { Router } from "express";
import UserRouter from "./user.routes.js";
import CategoryRouter from "./category.routes.js";
import TableRouter from './table.routes.js';
import menuRouter from  './menu.router.js';

const router = Router();

router.use("/users", UserRouter);
router.use("/categories", CategoryRouter);
router.use("/tables", TableRouter);
router.use("/menu", menuRouter)

export default router;
