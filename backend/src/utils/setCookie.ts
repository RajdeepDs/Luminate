export function setRefreshTokenCookie(res: any, token: string) {
  res.cookie("refreshToken", token, {
    httpOnly: true,
    path: "/",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
}
