import { connectDB } from "@/lib/mongodb";
import Invoice from "@/models/Invoice";
import { verifyToken } from "@/lib/auth";

export async function POST(req) {
  await connectDB();

  const user = verifyToken(req);

  if (!user) {
    return Response.json({ error: "Unauthorized" });
  }

  const data = await req.json();

  const invoice = await Invoice.create({
    ...data,
    userId: user.id,
  });

  return Response.json(invoice);
}
