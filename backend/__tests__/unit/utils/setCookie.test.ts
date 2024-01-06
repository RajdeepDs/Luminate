import { setRefreshTokenCookie } from "@src/utils/setCookie";

describe("Set Cookie Utitilies", () => {
  it("should set the refreshToken cookie with the correct attributes", () => {
    const mockRes = {
      cookie: jest.fn(),
    };

    const sampleToken = "sampleTokenString";

    setRefreshTokenCookie(mockRes, sampleToken);

    const expiresValue = mockRes.cookie.mock.calls[0][2].expires;

    expect(expiresValue).toBeInstanceOf(Date);
    expect(expiresValue.getTime()).toBeCloseTo(
      Date.now() + 7 * 24 * 60 * 60 * 1000,
      -2
    );

    expect(mockRes.cookie).toHaveBeenCalledWith("refreshToken", sampleToken, {
      httpOnly: true,
      path: "/",
      expires: expiresValue,
    });
  });
});
