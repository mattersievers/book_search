//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type User {
        _id:ID
    }

    type Query {
     users:[User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
    }

    type Auth {
        token: ID!
        user: User
    }
`;

//export typeDefs
module.exports = typeDefs;
