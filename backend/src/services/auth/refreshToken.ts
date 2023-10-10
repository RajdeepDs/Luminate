import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { createAccessToken } from "@src/utils/generateTokens";

const prisma = new PrismaClient();

export async function refreshToken(context: any) {
  const token = context.req.cookies.refreshToken;

  if (!token) {
    throw new Error("No refresh token found");
  }

  let payload: any;

  try {
    payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!);
  } catch (err) {
    throw new Error("Invalid token");
  }
  if (typeof payload === "string" || !payload.userId) {
    throw new Error("Invalid token payload");
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const accessToken = createAccessToken(user.id);

  await prisma.$disconnect();

  return accessToken;
}
