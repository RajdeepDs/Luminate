import { signUp } from "@/actions/sign-up";
import { prisma } from "@repo/database";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export const resolvers = {
  Query: {
    users: async (parents: User, args: unknown, context: unknown) => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    signUp: async (
      parent: unknown,
      args: { name: string; email: string; password: string },
      context: unknown
    ) => {
      return signUp(args);
    },
  },
};
