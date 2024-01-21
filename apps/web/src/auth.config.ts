import { compare } from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/validations";
import { GetUserByEmail } from "@/data/user";
import credentials from "next-auth/providers/credentials";

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          console.log("Authenticating...");

          const { email, password } = validatedFields.data;
          console.log("Fetching user...", email);
          const user = await GetUserByEmail(email);
          console.log("Fetched user...", user);
          if (!user || !user.password) {
            console.log("User not found!");

            return null;
          }
          const passwordMatch = await compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
