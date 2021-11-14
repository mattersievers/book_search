const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
            .select('-__v -password')
        }
    },
    Mutation: {

    }

}

module.exports = resolvers;