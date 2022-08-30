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
    date: String!
  }

  type Query {
    user: [User]
    ads(_id: String): [Ad]
    all_ads: [Ad]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Mutation {
    addAd(username: String!, title: String!, description: String!): Ad
    removeAd(adId: ID!): Ad
    updateAdTitle(adId: ID!, title: String!): Ad
    updateAdDescription(adId: ID!, description: String!): Ad
    addUser(username: String!, email: String!, password: String!): Auth
  }
  `;
  
  module.exports = typeDefs;
  