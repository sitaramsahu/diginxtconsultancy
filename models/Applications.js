import mongoose from "mongoose";

const applicationsSchema = new mongoose.Schema(
  {
    fullName: String,
    businessName: String,
    mobile: String,
    email: String,
    gst: String,
    address: String,
    role: { type: String, default: "user" },
  },
  { timestamps: true },
);

export default mongoose.models.Applications ||
  mongoose.model("Applications", applicationsSchema);
