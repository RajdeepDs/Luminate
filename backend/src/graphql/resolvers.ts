import { signUp } from "../services/auth/signUp";
import { signIn } from "../services/auth/signIn";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    user: async (parent: any, args: any, context: any) => {
      if (!context.user) {
        throw new Error("User is not authenticated");
      }
      return prisma.user.findUnique({ where: { id: context.user.userId } });
    },
  },
  Mutation: {
    signUp: async (parent: any, args: any, context: any) => {
      return signUp(args.name, args.email, args.password);
    },
    signIn: async (parent: any, args: any, context: any) => {
      return signIn(args.email, args.password);
    },
  },
};
