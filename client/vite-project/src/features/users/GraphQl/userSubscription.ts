import { gql } from '@apollo/client';

export const USER_SUBSCRIPTION = gql`
  subscription {
    userSubscription {
      usr_id
      email
      password
      name
    }
  }
`;


