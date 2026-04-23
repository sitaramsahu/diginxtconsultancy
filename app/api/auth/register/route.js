import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();

  const data = await req.json();

  const exist = await User.findOne({ email: data.email });
  if (exist) {
    return Response.json({ error: "User already exists" });
  }

  const hashed = await bcrypt.hash(data.password, 10);

  await User.create({
    ...data,
    password: hashed,
  });

  return Response.json({ message: "User registered" });
}
