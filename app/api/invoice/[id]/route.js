import { connectDB } from "@/lib/mongodb";
import Invoice from "@/models/Invoice";
import { verifyToken } from "@/lib/auth";

export async function GET(req, { params }) {
  await connectDB();

  const user = verifyToken(req);
  if (!user) {
    return Response.json({ error: "Unauthorized" });
  }

  try {
    const invoice = await Invoice.findById(params.id);

    if (!invoice) {
      return Response.json({ error: "Invoice not found" });
    }

    return Response.json(invoice);
  } catch (error) {
    return Response.json({ error: "Invalid ID" });
  }
}
