import express from "express";

import authRoutes from "./authRoutes.js";
import problemsRoutes from "./problemsRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/problems", problemsRoutes);

export default router;
