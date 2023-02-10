import { gql } from 'apollo-angular';

export const userQuery = gql`
  query {
    currentUser {
      id
      name
      avatar
      wallets {
        id
        amount
        currency
      }
    }
  }
`;
