import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    businessName: String,
    mobile: String,
    email: String,
    password: String,
    gst: String,
    address: String,
    role: { type: String, default: "user" },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
