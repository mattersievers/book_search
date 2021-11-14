//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: String
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
        users: [User]
        books: [Book]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(userId: ID!, bookId: ID!): User
        removeBook(userId: ID!, bookId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

//export typeDefs
module.exports = typeDefs;
