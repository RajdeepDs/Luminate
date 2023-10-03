import * as yup from "yup";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

import { signInSchema } from "../../validations/auth";

export async function signIn(email: string, password: string) {
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
    valid = await bcrypt.compare(password, user.password);
  }

  if (!valid || !user) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);

  await prisma.$disconnect();

  return {
    token,
    user,
  };
}
