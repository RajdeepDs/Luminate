import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      id
      email
      password
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      accessToken
      user {
        id
        name
        email
        password
      }
    }
  }
`;

export const REFRESH_TOKEN_MUTATION = gql`
  mutation Mutation {
    refreshToken
  }
`;
