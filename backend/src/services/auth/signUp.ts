import * as yup from "yup";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

import { signUpSchema } from "@src/validations/auth";

export async function signUp(name: string, email: string, password: string) {
  const prisma = new PrismaClient();

  try {
    await signUpSchema.validate({ name, email, password });
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

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });
}