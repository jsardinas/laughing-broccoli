const { User, Ad } = require('../models');
const { signToken } = require('../utils/auth');

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
    addAd: async (parent, { username, title, description }) => {
      try{
          const newAd = await Ad.insertMany([{
          username: username,
          title: title,
          description: description
        }]);
        
        await User.findOneAndUpdate(
          { username: username },
          { $addToSet: { ads_id: newAd[newAd.length - 1]._id } },
          {
            new: true,
            runValidators: true,
          }
        );
        return newAd[0];
      }
      catch(e){
        console.log(e);
      }
    },

    removeAd: async (parent, { adId }) => {
      const removed = await Ad.findOneAndDelete({ _id: adId });

      await User.findOneAndUpdate(
        { username: removed.username },
        { $pull: { ads_id: removed._id } },
        {
          runValidators: true,
        }
      ); 
      
      return removed;
    },

    updateAdTitle: async (parent, { adId, title }) => {
      return await Ad.findOneAndUpdate(
        { _id: adId },
        { $set: { title: title } },
        {
          new: true,
          runValidators: true,
        }
      )
    },

    updateAdDescription: async (parent, { adId, description }) => {
      return await Ad.findOneAndUpdate(
        { _id: adId },
        { $set: { description: description } },
        {
          new: true,
          runValidators: true,
        }
      )
    },

    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;
