import { prisma } from "@repo/database";
import { signUp } from "../services/auth/signUp";
export const resolvers = {
  Query: {
    users: async (parents: any, args: any, context: any) => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    signUp: async (parent: any, args: any, context: any) => {
      return signUp(args.name, args.email, args.password);
    },
  },
};
