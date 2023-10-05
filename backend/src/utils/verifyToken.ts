import jwt from "jsonwebtoken";

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!);
  } catch (e) {
    return null;
  }
};
