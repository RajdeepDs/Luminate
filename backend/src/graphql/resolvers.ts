import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

import { signUp } from "../services/auth/signUp";
import { signIn } from "../services/auth/signIn";
import { refreshToken } from "../services/auth/refreshToken";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    user: async (parent: any, args: any, context: any) => {
      console.log("Context:", context.user);
      if (!context.user) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }
      return prisma.user.findUnique({ where: { id: context.user.userId } });
    },
  },
  Mutation: {
    signUp: async (parent: any, args: any, context: any) => {
      return signUp(args.name, args.email, args.password);
    },
    signIn: async (parent: any, args: any, context: any) => {
      return signIn(args.email, args.password, context);
    },
    refreshToken: async (parent: any, args: any, context: any) => {
      return refreshToken(context);
    },
  },
};
