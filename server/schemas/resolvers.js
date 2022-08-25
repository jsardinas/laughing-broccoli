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
  
  Mutation:{
    addAd: async (parent, { userId, username, title, description }) => {
      const newAd = await Ad.insertMany([{
        username: username,
        title: title,
        description: description
      }]);
      
      return await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { ads_id: newAd[newAd.length - 1]._id } },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeAd: async (parent, {adId}) => {
      return await Ad.findOneAndDelete({ _id: adId })
    }
  }
};

module.exports = resolvers;
