import { gql } from '@apollo/client';

export const ADD_ADVERTISEMENT = gql`
  mutation addAd($username: String!, $title: String!, $description: String!) {
    addAd(username: $username, title: $title, description: $description) {
      _id
    }
  }
`

export const REMOVE_ADVERTISEMENT = gql`
  mutation removeAd($adId: String!) {
    removeAd(adId: $adId) {
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