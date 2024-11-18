import mongoose from "mongoose";

const LabReportSchema = new mongoose.Schema(
  {
    user: {
      ty1pe: mongoose.Types.ObjectId,
      ref: "User",
    },
    appointment: {
      type: mongoose.Types.ObjectId,
      ref: "Appoint",
    },
    sampleType: { type: String, required: true, enum: ["blood", "stool"] },
    bloodAnalysis: {
      sodium: { type: Number },
      potassium: { type: Number },
      calcium: { type: Number },
      AST: { type: Number },
      ALT: { type: Number },
      alkalinePhosphatase: { type: Number },
      bilirubinDirect: { type: Number },
      bilirubinIndirect: { type: Number },
    },
    stoolAnalysis: {
      color: { type: String },
      consistency: { type: String },
      RBCs: { type: String },
      WBCs: { type: String },
      parasites: { type: String },
    },
  },
  { timestamps: true }
);

const LabReport = mongoose.model("LabReport", LabReportSchema);

export default LabReport;
