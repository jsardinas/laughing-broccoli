import { gql } from '@apollo/client';

export const ADD_ADVERTISEMENT = gql`
  mutation addAd($userId: String!, $username: String!, $title: String!, description: String!) {
    addAd($userId: String!, $username: String!, $title: String!, description: String!) {
      _id
      username
      title
      description
    }
  }
`;