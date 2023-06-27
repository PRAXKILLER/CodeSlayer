import { SolutionsModel } from "../models/solutionsModel.js";

const addASolution = async (req, res) => {
  try {
    const solutionData = req.body;
    const _id = req.session.passport.user._doc._id;
    const solution = await SolutionsModel.create({
      submittedBy: _id,
      ...solutionData,
    });
    return res.status(200).json({ solution });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getAllSolutionsForAParticularUserForAProblem = async (req, res) => {
  try {
    const { problemId, userId } = req.params;
    const solutions = await SolutionsModel.find({
      problem: problemId,
      submittedBy: userId,
    });
    return res.status(200).json({ solutions });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { addASolution, getAllSolutionsForAParticularUserForAProblem };
