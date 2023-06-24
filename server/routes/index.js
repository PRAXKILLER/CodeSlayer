import express from "express";

import authRoutes from "./authRoutes.js";
import problemsRoutes from "./problemsRoutes.js";
import testcasesRoutes from "./testcasesRoutes.js";
import solutionsRoutes from "./solutionsRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/problems", problemsRoutes);
router.use("/testcases", testcasesRoutes);
router.use("/solutions", solutionsRoutes);

export default router;
