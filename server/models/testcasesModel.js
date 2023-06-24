import mongoose from "mongoose";

const testcasesSchema = mongoose.Schema(
  {
    problem: { type: mongoose.Types.ObjectId, ref: "problems" },
    input: { type: String, required: true },
    output: { type: String, required: true },
    isExample: Boolean,
  },
  {
    timestamps: true,
  }
);

export const TestcasesModel = mongoose.model("testcases", testcasesSchema);
