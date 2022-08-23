const { User, Ad } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({}).populate('ads_id');
    },
    ads: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Ad.find(params);
    },
    all_ads: async () => {
      return Ad.find({});
    }
  },
};

module.exports = resolvers;
