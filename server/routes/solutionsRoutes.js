import express from "express";

import {
  addASolution,
  getAllSolutionsForAParticularUserForAProblem,
} from "../controllers/solutionsController.js";

const router = express.Router();

router.post("/add", addASolution);
router.get(
  "/get/:problemId/:userId",
  getAllSolutionsForAParticularUserForAProblem
);

export default router;
