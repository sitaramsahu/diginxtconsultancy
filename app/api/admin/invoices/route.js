import { connectDB } from "@/lib/mongodb";
import Invoice from "@/models/Invoice";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  await connectDB();

  const admin = verifyToken(req);

  if (!admin || admin.role !== "admin") {
    return Response.json({ error: "Access Denied" });
  }

  const invoices = await Invoice.find().sort({ createdAt: -1 });

  return Response.json(invoices);
}
