"use server";
import { hash } from "bcryptjs";
import type * as z from "zod";

import { SignUpSchema } from "@/validations";
import { GetUserByEmail } from "@/data/user";
import { prisma } from "@repo/database";

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await hash(password, 10);

  const existingUser = await GetUserByEmail(email);
  if (existingUser) {
    return { error: "Email is already in use!" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};
