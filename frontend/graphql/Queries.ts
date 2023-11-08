import { gql } from "@apollo/client";

export const GET_USER = gql`
  query User {
    user {
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
export const GET_USER_AVATAR = gql`
  query User {
    user {
      email
      username
      avatar
    }
  }
`;
export const GET_USER_REGISTRATION = gql`
  query User {
    user {
      createdAt
    }
  }
`;
