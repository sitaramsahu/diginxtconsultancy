import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    userId: String,
    customerName: String,
    amount: Number,
    status: { type: String, default: "pending" },
  },
  { timestamps: true },
);

export default mongoose.models.Invoice ||
  mongoose.model("Invoice", invoiceSchema);
