import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: "http://localhost:4000/auth/github/callback",
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      try {
        let user = await prisma.user.findUnique({
          where: { githubId: profile.id.toString() },
        });

        if (!user) {
          const existingEmailUser = await prisma.user.findUnique({
            where: { email: profile.emails?.[0]?.value },
          });

          if (existingEmailUser) {
            await prisma.user.update({
              where: { id: existingEmailUser.id },
              data: {
                githubId: profile.id.toString(),
                avatar: profile.photos?.[0]?.value,
              },
            });
            user = existingEmailUser;
          } else {
            user = await prisma.user.create({
              data: {
                githubId: profile.id.toString(),
                name: profile.username,
                email: profile.emails?.[0]?.value,
                avatar: profile.photos?.[0]?.value,
              },
            });
          }
        }
        return done(null, user);
      } catch (error) {
        return done(error, profile);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
