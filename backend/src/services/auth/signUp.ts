import * as yup from "yup";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

import { signUpSchema } from "../../validations/auth";

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

export async function signUp(name: string, email: string, password: string) {
  //   validate the user input
  try {
    await signUpSchema.validate({ name, email, password });
  } catch (error) {
    // Assert error type
    if (error instanceof yup.ValidationError) {
      throw new ValidationError(error.message);
    }
    throw error;
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new UserExistsError("User already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  return await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });
}
