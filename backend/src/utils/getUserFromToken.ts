import jwt from "jsonwebtoken";

export async function getUser(token: string) {
  try {
    if (token) {
      const strippedToken = token.split(" ")[1];
      const decodedToken = jwt.verify(
        strippedToken,
        process.env.ACCESS_TOKEN_SECRET!
      );
      return decodedToken;
    }
    return null;
  } catch (err) {
    return null;
  }
}
