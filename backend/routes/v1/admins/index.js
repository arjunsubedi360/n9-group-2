import { Router } from "express";
import UserRouter from "./user.routes.js";
import CategoryRouter from "./category.routes.js";
import TableRouter from "./table.routes.js";
import AdminRouter from "./admin.router.js";

const router = Router();

router.use("/admins", AdminRouter);
router.use("/users", UserRouter);
router.use("/categories", CategoryRouter);
router.use("/tables", TableRouter);

export default router;
