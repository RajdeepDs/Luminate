import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/auth/github", passport.authenticate("github"));
router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "http://localhost:3000/sign-in",
  }),
  async (req: any, res: any) => {
    res.redirect("http://localhost:3000/");
  }
);

export { router as authRoutes };
