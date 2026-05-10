import { connectDB } from "@/lib/mongodb";
import Applications from "@/models/Applications";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  await connectDB();

  const admin = verifyToken(req);

  if (!admin || admin.role !== "admin") {
    return Response.json({ error: "Access Denied" });
  }

  const applicationss = await Applications.find().sort({ createdAt: -1 });

  return Response.json(applicationss);
}
