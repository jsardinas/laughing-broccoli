import { gql } from '@apollo/client';

export const QUERY_AD = gql`
  query getAllAds {
    all_ads {
      _id
      title
      description
      username
      date
    }
  }
`;

export const QUERY_SINGLE_AD = gql`
  query getSingleAd($adId: ID!) {
    ads(adId: $adId) {
      _id
      title
      description
      username
      date
    }
  }
`;

export const QUERY_MY_ADS = gql`
  query myads($username: String!) {
    myads(username: $username) {
      _id
      title
      description
      date
    }
  }
`;