import { gql } from '@apollo/client';

export const ADD_ADVERTISEMENT = gql`
  mutation addAd($userId: ID!, $username: String!, $title: String!, $description: String!) {
    addAd(userId: $userId, username: $username, title: $title, description: $description) {
      _id
    }
  }
`

export const REMOVE_ADVERTISEMENT = gql`
  mutation removeAd($adId: String!) {
    removeAd(addId: $adId) {
      _id
      username
      title
      description
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;