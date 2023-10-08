import express from "express";
import passport from "passport";

import { setRefreshTokenCookie } from "@src/utils/setCookie";
import { createRefreshToken } from "@src/utils/generateTokens";

const router = express.Router();

router.get("/auth/github", passport.authenticate("github"));
router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "http://localhost:3000/sign-in",
  }),
  (req: any, res: any) => {
    // create and set refresh token as cookie
    const userRefreshToken = createRefreshToken(req.user?.id!);
    setRefreshTokenCookie(res, userRefreshToken);
    res.redirect("http://localhost:3000/");
  }
);

export { router as authRoutes };
