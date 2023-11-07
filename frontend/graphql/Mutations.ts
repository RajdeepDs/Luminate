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

export const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfile($name: String!, $username: String!, $bio: String!) {
    updateProfile(name: $name, username: $username, bio: $bio) {
      id
      name
      email
      password
      username
      bio
      avatar
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;
