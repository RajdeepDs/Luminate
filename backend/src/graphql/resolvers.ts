import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

import { signUp } from "../services/auth/signUp";
import { signIn } from "../services/auth/signIn";

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
  },
  Mutation: {
    signUp: async (parent: any, args: any, context: any) => {
      return signUp(args.name, args.email, args.password);
    },
    signIn: async (parent: any, args: any, context: any) => {
      return signIn(args.email, args.password, context);
    },
    refreshToken: async (parent: any, args: any, context: any) => {
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
      console.log(accessToken);
      return accessToken;
    },
  },
};
