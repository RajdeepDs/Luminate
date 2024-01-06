import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name is too short."),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email."),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters."),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});
