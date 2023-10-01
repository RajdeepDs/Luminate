import * as yup from "yup";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

import { signInSchema } from "../../validations/auth";

const prisma = new PrismaClient();

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class UserExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserExistsError";
  }
}

export async function signIn(email: string, password: string) {
  try {
    await signInSchema.validate({ email });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new ValidationError(error.message);
    }
    throw error;
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new UserExistsError("User not found");
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);
  return {
    token,
    user,
  };
}
