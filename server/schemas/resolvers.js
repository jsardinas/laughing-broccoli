const { User, Ad } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    ads: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Ad.find(params);
    },
  },
};

module.exports = resolvers;
