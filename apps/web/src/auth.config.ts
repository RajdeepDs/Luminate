// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./validations";
import { GetUserByEmail } from "./data/user";
import credentials from "next-auth/providers/credentials";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await GetUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
