import { getUser } from "@src/utils/getUserFromToken";
import jwt from "jsonwebtoken";

jest.mock("jsonwebtoken");

describe("Get user from Token Utilities", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should return null if no token is provided", async () => {
    const mockJwtVerify = jwt.verify as jest.Mock;

    mockJwtVerify.mockReturnValue("sampleDecodedToken");

    const user = await getUser("");

    expect(user).toBe(null);
  });

  it("should return null if token is invalid", async () => {
    const mockJwtVerify = jwt.verify as jest.Mock;

    mockJwtVerify.mockReturnValue("sampleDecodedToken");

    const user = await getUser("sampleToken");

    expect(user).toBe("sampleDecodedToken");
  });

  it("should return decoded token if token is valid", async () => {
    const mockJwtVerify = jwt.verify as jest.Mock;

    mockJwtVerify.mockReturnValue("sampleDecodedToken");

    const user = await getUser("Bearer sampleToken");

    expect(user).toBe("sampleDecodedToken");
  });
});
