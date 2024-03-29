export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        users: [User!]!
    }

    type Mutation {
        signUp(name: String!, email: String!, password: String!): User!
    }
    
`;
