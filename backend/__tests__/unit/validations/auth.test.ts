import { signUpSchema, signInSchema } from "../../../src/validations/auth";

describe("SignUp Schema Validations", () => {
  it("should validate a valid sign-up request", async () => {
    const user = {
      name: "Tom Holland",
      email: "tomholland@example.com",
      password: "strongPassword",
    };

    const isValid = await signUpSchema.isValid(user);

    expect(isValid).toBe(true);
  });

  it("should invalidate an invalid sign-up request with a short name", async () => {
    const user = {
      name: "To",
      email: "tomholland@example.com",
      password: "strongPassword",
    };
    const isValid = await signUpSchema.isValid(user);
    expect(isValid).toBe(false);
  });
  it("should invalidate an invalid sign-up request with invalid email", async () => {
    const user = {
      name: "Tom Holland",
      email: "tomhollandexample.com",
      password: "strongPassword",
    };
    const isValid = await signUpSchema.isValid(user);
    expect(isValid).toBe(false);
  });
  it("should invalidate an invalid sign-up request with a short password", async () => {
    const user = {
      name: "To",
      email: "tomholland@example.com",
      password: "strong",
    };
    const isValid = await signUpSchema.isValid(user);
    expect(isValid).toBe(false);
  });
});

describe("SignIn Schema Validations", () => {
  it("should validate a valid sign-in request", async () => {
    const user = {
      email: "tomholland@example.com",
    };
    const isValid = await signInSchema.isValid(user);
    expect(isValid).toBe(true);
  });
  it("should invalidate a invalid sign-in request with a invalid email ", async () => {
    const user = {
      email: "tomhollandexample.com",
    };
    const isValid = await signInSchema.isValid(user);
    expect(isValid).toBe(false);
  });
});
