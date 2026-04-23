import { connectDB } from "@/lib/mongodb";
import Invoice from "@/models/Invoice";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  await connectDB();

  const user = verifyToken(req);

  if (!user) {
    return Response.json({ error: "Unauthorized" });
  }

  // ✅ Only logged-in user's invoices
  const invoices = await Invoice.find({ userId: user.id }).sort({
    createdAt: -1,
  });

  return Response.json(invoices);
}
