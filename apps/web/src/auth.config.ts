import credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [credentials],
} satisfies NextAuthConfig;
