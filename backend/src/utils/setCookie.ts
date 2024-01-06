export function setSessionIdCookie(res: any, sessionId: string) {
  res.cookie("session", sessionId, {
    httpOnly: true,
    path: "/",
  });
}
