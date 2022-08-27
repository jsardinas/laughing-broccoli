const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    ads_id: [Ad]
  }

  type Ad {
    _id: ID!
    username: String!
    title: String!
    description: String!
  }

  type Query {
    user: [User]
    ads(_id: String): [Ad]
    all_ads: [Ad]
  }
  
  type Mutation {
    addAd(userId: ID!, username: String!, title: String!, description: String!): User
    removeAd(adId: ID!): Ad
    updateAdTitle(adId: ID!, title: String!): Ad
    updateAdDescription(adId: ID!, description: String!): Ad
  }
  `;
  
  module.exports = typeDefs;
  