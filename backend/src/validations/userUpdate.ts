import * as yup from "yup";

export const userUpdateSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name is too short."),
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username is too short."),
  bio: yup.string().required("Bio is required").min(8, "Bio is too short."),
});
