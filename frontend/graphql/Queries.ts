import { gql } from "@apollo/client";

export const GET_USER = gql`
  query User {
    user {
      id
      email
      password
    }
  }
`;
