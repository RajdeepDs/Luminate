import jwt from "jsonwebtoken";

export async function getUser(token: string) {
  try {
    if (token) {
      const user = jwt.verify(token, process.env.APP_SECRET!);
      return user;
    }
    return null;
  } catch (err) {
    return null;
  }
}
