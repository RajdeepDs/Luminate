export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String
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
        signUp(name: String!, email: String!, password: String!): User!
        signIn(email: String!, password: String!): AuthPayload!
        refreshToken: String!
    }


`;
