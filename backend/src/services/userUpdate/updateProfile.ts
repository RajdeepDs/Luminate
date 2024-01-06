import * as yup from "yup";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

import { userUpdateSchema } from "@src/validations/userUpdate";

export async function updateProfile(
  name: string,
  username: string,
  bio: string,
  context: any
) {
  const prisma = new PrismaClient();
  if (!context.user) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }
  try {
    await userUpdateSchema.validate({ name, username, bio });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: "BAD_USER_INPUT",
        },
      });
    }
    throw error;
  }
  return prisma.user.update({
    where: { id: context.user.userId },
    data: {
      name: name,
      username: username,
      bio: bio,
    },
  });
}
