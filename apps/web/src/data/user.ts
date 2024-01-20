import { prisma } from "@repo/database";

export const GetUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};
