import { gql } from '@apollo/client';

export const QUERY_AD = gql`
  query getAllAds {
    ads {
      _id
      title
      description
      username
      date
    }
  }
`;