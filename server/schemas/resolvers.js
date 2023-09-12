const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {

        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addWin: async (parent, args, context) => {
      if (context.user) {
        // if the user is logged in and the game is over update the user and add 1 to the win 
        const updateUser = await User.findByIdAndUpdate({_id: context.user._id},
          {win: args.win},
          {new: true}
          )
          return updateUser

      }
      throw AuthenticationError
    },
    addLoss: async (parent, args, context) => {
      if (context.user) {
        // if the user is logged in and the game is over update the user and add 1 to the loss 
        const updateUser = await User.findByIdAndUpdate({_id: context.user._id},
          {loss: args.loss},
          {new: true}
          )
          return updateUser


      }
      throw AuthenticationError
    }
  },

};

module.exports = resolvers
