import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function refreshToken(context: any) {
  const token = context.req.cookies.refreshToken;

  if (!token) {
    throw new Error("No refresh token found");
  }

  let payload: any;

  try {
    payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!);
    if (typeof payload === "string" || !payload.userId) {
      throw new Error("Invalid token payload");
    }
  } catch (err) {
    throw new Error("Invalid token");
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "10s",
    }
  );

  await prisma.$disconnect();

  return accessToken;
}
