import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Invoice from "@/models/Invoice";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  await connectDB();

  const admin = verifyToken(req);

  if (!admin || admin.role !== "admin") {
    return Response.json({ error: "Access Denied" });
  }

  const totalUsers = await User.countDocuments();
  const totalInvoices = await Invoice.countDocuments();

  const invoices = await Invoice.find();
  const revenue = invoices.reduce(
    (sum, inv) => sum + Number(inv.finalAmount || 0),
    0,
  );

  return Response.json({
    totalUsers,
    totalInvoices,
    revenue,
  });
}
