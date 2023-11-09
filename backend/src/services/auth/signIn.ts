import * as yup from "yup";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

import { signInSchema } from "@src/validations/auth";
import { createAccessToken } from "@src/utils/generateTokens";

export async function signIn(email: string, password: string, context: any) {
  const prisma = new PrismaClient();

  try {
    await signInSchema.validate({ email });
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

  const user = await prisma.user.findUnique({ where: { email } });

  let valid = false;
  if (user) {
    valid = await bcrypt.compare(password, user.password!);
  }

  if (!valid || !user) {
    throw new Error("Invalid credentials");
  }

  const accessToken = createAccessToken(user.id);

  await prisma.$disconnect();

  return {
    accessToken,
    user,
  };
}
