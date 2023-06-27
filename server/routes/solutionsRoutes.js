import express from "express";

import {
  addASolution,
  getAllSolutionsForAParticularUserForAProblem,
} from "../controllers/solutionsController.js";
import passport from "passport";

const router = express.Router();

router.post("/add", passport.authenticate("jwt"), addASolution);
router.get(
  "/get/:problemId/:userId",
  getAllSolutionsForAParticularUserForAProblem
);

export default router;
