export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        username: String
        avatar: String
        bio: String
    }
    
    type Query {
        user: User!
        checkContext: String!
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
    }


`;
