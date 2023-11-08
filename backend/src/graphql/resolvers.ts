import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

import { signUp } from "@src/services/auth/signUp";
import { signIn } from "@src/services/auth/signIn";
import { refreshToken } from "@src/services/auth/refreshToken";
import { updateProfile } from "@src/services/userUpdate/updateProfile";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    user: async (parent: any, args: any, context: any) => {
      if (!context.user) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }
      return prisma.user.findUnique({ where: { id: context.user.userId } });
    },
    userSessions: async (parent: any, args: any, context: any) => {
      if (!context.user) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }
      return prisma.session.findMany({
        where: { userId: context.user.userId },
      });
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
    updateProfile: async (parent: any, args: any, context: any) => {
      return updateProfile(args.name, args.username, args.bio, context);
    },
    logout: async (parent: any, args: any, context: any) => {
      context.res.clearCookie("refreshToken");
      context.res.clearCookie("connect.sid");
      return "Logged out successfully";
    },
    createSession: async (parent: any, args: any, context: any) => {
      if (!context.user) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }
      const session = await prisma.session.create({
        data: {
          location: args.location,
          userAgent: args.userAgent,
          userId: context.user.userId,
        },
      });

      return session;
    },
  },
};
