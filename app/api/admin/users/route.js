import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  await connectDB();

  const admin = verifyToken(req);

  if (!admin || admin.role !== "admin") {
    return Response.json({ error: "Access Denied" });
  }

  const users = await User.find().sort({ createdAt: -1 });

  return Response.json(users);
}
