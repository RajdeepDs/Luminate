export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        username: String
        avatar: String
        bio: String
        createdAt: String!
    }

    type Session {
        id: ID!
        location: String
        userId: ID
    }
    
    type Query {
        user: User!
        checkContext: String!
        userSessions(userId: ID!): [Session!]!
    }
    
    type AuthPayload {
        accessToken: String!
        user: User!
    }

    type Mutation {
        refreshToken: String!
        signUp(name: String!, email: String!, password: String!): User!
        signIn(email: String!, password: String!): AuthPayload!
        updateProfile(name: String!, username: String!, bio: String!): User!
        logout: String!
        createSession(location: String!): Session!
    }


`;
