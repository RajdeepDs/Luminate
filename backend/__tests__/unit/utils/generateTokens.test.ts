import {
  createAccessToken,
  createRefreshToken,
} from "@src/utils/generateTokens";

import jwt from "jsonwebtoken";

jest.mock("jsonwebtoken");

describe("Token Utilities", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should create an access token with correct expiration", () => {
    const userId = "sampleUserId";
    const mockJwtSign = jwt.sign as jest.Mock;

    mockJwtSign.mockReturnValue("sampleAccessToken");

    const token = createAccessToken(userId);

    expect(mockJwtSign).toHaveBeenCalledWith(
      { userId },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "30m" }
    );
    expect(token).toBe("sampleAccessToken");
  });

  it("should create a refresh token with correct expiration", () => {
    const userId = "sampleUserId";

    const mockJwtSign = jwt.sign as jest.Mock;

    mockJwtSign.mockReturnValue("sampleRefreshToken");

    const token = createRefreshToken(userId);

    expect(mockJwtSign).toHaveBeenCalledWith(
      { userId },
      process.env.REFRESH_TOKEN_SECRET!,
      { expiresIn: "7d" }
    );
  });
});
