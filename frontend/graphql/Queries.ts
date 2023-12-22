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
      name
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

export const GET_USER_SESSIONS = gql`
  query UserSessions {
    userSessions {
      id
      location
      userAgent
    }
  }
`;

export const GET_ALL_USER_SESSIONS = gql`
  query AllUserSessions {
    allUserSessions {
      id
      location
      userAgent
    }
  }
`;
